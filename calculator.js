/* =========================================================
   MASAR — Smart Pricing Engine
   Real freight-style math: actual vs volumetric weight,
   tiered per-kg rates, zone multipliers, percentage insurance,
   and a direct-carrier comparison to show savings.

   The core arithmetic runs in a Rust module compiled to
   WebAssembly (masar_calc.wasm). If the browser can't fetch
   the .wasm binary (e.g. the file was opened directly from
   disk via file:// and fetch() is blocked by CORS), we fall
   back to an identical pure-JS implementation so the page
   still works everywhere.
   ========================================================= */

const MASAR_RATES = {
  local: {
    same:     { base:15, includedKg:5, perKg:3,  directFactor:1.28, etaKey:{ar:"خلال يوم واحد", en:"Within 1 day", ur:"1 دن کے اندر"} },
    between:  { base:19, includedKg:5, perKg:4,  directFactor:1.30, etaKey:{ar:"1-2 يوم", en:"1-2 days", ur:"1-2 دن"} },
  },
  intl: {
    gulf:    { base:70,  includedKg:5, perKg:12, directFactor:1.32, etaKey:{ar:"2-4 أيام", en:"2-4 days", ur:"2-4 دن"} },
    asia:    { base:110, includedKg:5, perKg:18, directFactor:1.34, etaKey:{ar:"4-7 أيام", en:"4-7 days", ur:"4-7 دن"} },
    europe:  { base:150, includedKg:5, perKg:22, directFactor:1.30, etaKey:{ar:"5-8 أيام", en:"5-8 days", ur:"5-8 دن"} },
    america: { base:190, includedKg:5, perKg:28, directFactor:1.31, etaKey:{ar:"6-10 أيام", en:"6-10 days", ur:"6-10 دن"} },
  },
  sudan: {
    land: { base:45,  includedKg:5, perKg:8,  directFactor:1.22, etaKey:{ar:"5-8 أيام", en:"5-8 days", ur:"5-8 دن"} },
    air:  { base:120, includedKg:5, perKg:25, directFactor:1.24, etaKey:{ar:"2-3 أيام", en:"2-3 days", ur:"2-3 دن"} },
  },
  surcharge: {
    cold: { local:15, intl:40, sudan:30 },
    express: { local:10, intl:25, sudan:35 },
    pickup: 27,
    packaging: 10,
    insuranceRate: 0.015,
    insuranceMin: 5,
  }
};

let _masarWasm = null;
let _masarWasmTried = false;

async function masarLoadWasm(){
  if(_masarWasmTried) return _masarWasm;
  _masarWasmTried = true;
  try{
    const resp = await fetch('masar_calc.wasm');
    if(!resp.ok) throw new Error('fetch failed');
    const bytes = await resp.arrayBuffer();
    const { instance } = await WebAssembly.instantiate(bytes);
    _masarWasm = instance.exports;
  }catch(e){
    console.warn('Masar: WASM pricing engine unavailable, using JS fallback.', e);
    _masarWasm = null;
  }
  return _masarWasm;
}

function round2(n){ return Math.round(n * 100) / 100; }

function masarVolumetricWeightJS(l, w, h){
  if(!l || !w || !h) return 0;
  return (l * w * h) / 5000;
}

/**
 * Main entry point. Async because the WASM module loads lazily.
 * Falls back transparently to identical JS math if WASM isn't available.
 */
async function masarCalculate(input){
  const wasm = await masarLoadWasm();
  const {
    category, subtype, actualWeight,
    length, width, height,
    cold, express, pickup, packaging, insure, declaredValue,
  } = input;

  const rateGroup = MASAR_RATES[category];
  const rate = rateGroup[subtype];
  if(!rate) throw new Error('Unknown rate configuration');

  const volumetric = wasm ? wasm.volumetric_weight(length||0, width||0, height||0) : masarVolumetricWeightJS(length, width, height);
  const billableWeight = wasm ? wasm.max_f64(actualWeight||0, volumetric) : Math.max(actualWeight||0, volumetric);

  const surchargeKey = category === 'local' ? 'local' : (category === 'intl' ? 'intl' : 'sudan');
  const coldFee = cold ? MASAR_RATES.surcharge.cold[surchargeKey] : 0;
  const expressFee = express ? MASAR_RATES.surcharge.express[surchargeKey] : 0;
  const pickupFee = pickup ? MASAR_RATES.surcharge.pickup : 0;
  const packFee = packaging ? MASAR_RATES.surcharge.packaging : 0;

  const extraKg = Math.max(0, billableWeight - rate.includedKg);
  const extraWeightFee = round2(extraKg * rate.perKg);

  const shippingPortion = wasm
    ? wasm.tiered_price(rate.base, rate.includedKg, rate.perKg, billableWeight, coldFee, expressFee)
    : (rate.base + extraWeightFee + coldFee + expressFee);

  let insuranceFee = 0;
  if(insure && declaredValue > 0){
    insuranceFee = wasm
      ? wasm.insurance_fee(declaredValue, MASAR_RATES.surcharge.insuranceRate, MASAR_RATES.surcharge.insuranceMin)
      : round2(Math.max(declaredValue * MASAR_RATES.surcharge.insuranceRate, MASAR_RATES.surcharge.insuranceMin));
  }

  const total = wasm
    ? wasm.round2(shippingPortion + pickupFee + packFee + insuranceFee)
    : round2(shippingPortion + pickupFee + packFee + insuranceFee);

  const directShippingPrice = wasm
    ? wasm.direct_price(shippingPortion, rate.directFactor)
    : round2(shippingPortion * rate.directFactor);
  const directTotal = wasm
    ? wasm.round2(directShippingPrice + pickupFee + packFee + insuranceFee)
    : round2(directShippingPrice + pickupFee + packFee + insuranceFee);

  const savings = wasm ? wasm.savings_amount(directTotal, total) : round2(Math.max(0, directTotal - total));
  const savingsPct = directTotal > 0 ? Math.round((savings / directTotal) * 100) : 0;

  return {
    billableWeight: round2(billableWeight),
    volumetric: round2(volumetric),
    extraKg: round2(extraKg),
    base: rate.base, extraWeightFee, coldFee, expressFee, pickupFee, packFee, insuranceFee,
    total, directTotal, savings, savingsPct,
    eta: rate.etaKey,
    engine: wasm ? 'wasm' : 'js',
  };
}
