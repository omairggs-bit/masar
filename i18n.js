/* =========================================================
   MASAR — shared i18n dictionary (AR / EN / UR) + UI wiring
   ========================================================= */
const MASAR_DICT = {
  ar: {
    dir: "rtl",
    nav_home: "الرئيسية", nav_calc: "احسب السعر", nav_track: "تتبع الشحنة", nav_tech: "التقنية", nav_contact: "تواصل معنا",
    nav_cta: "اطلب عرض سعر",
    nav_tech: "التقنية",
    brand: "مسار",

    hero_eyebrow: "منصة وساطة الشحن الأولى لتجار السعودية",
    hero_h1_1: "اشحن أذكى.", hero_h1_2: "وفّر أكثر.",
    hero_lede: "مسار تجمع لك أفضل أسعار البريد السعودي، أرامكس، زاجل، DHL وFedEx — محليًا ودوليًا، وحتى السودان عبر تاركو، في مكان واحد.",
    hero_cta1: "احسب سعر شحنتك", hero_cta2: "تتبّع شحنتك",
    hero_stat1_n:"5", hero_stat1_l:"شركات شحن متعاقدة",
    hero_stat2_n:"٪30", hero_stat2_l:"متوسط التوفير",
    hero_stat3_n:"0", hero_stat3_l:"حد أدنى للكمية",
    label_tag:"شحنة مؤكدة", label_from:"من: الرياض", label_to:"إلى: 190+ وجهة",
    label_track:"رقم التتبع: MS-774213-SA", label_weight:"الوزن: 3.4 كجم", label_speed:"سريع",
    floaty1:"وفّرت 42 ريال", floaty2:"تم التسليم ✓",

    trust_label:"نتعاقد مباشرة مع كبرى شركات الشحن",

    services_kicker:"خدماتنا", services_h2:"كل أنواع الشحن، بسعر واحد عادل",
    services_p:"من طرد صغير داخل حيّك إلى حاوية مبرّدة للخليج — مسار توفّر لك الخيار المناسب.",
    svc1_h:"شحن محلي جاف", svc1_p:"توصيل سريع بين كل مدن المملكة عبر SPL، أرامكس وزاجل.", svc1_price:"من 15 ريال",
    svc2_h:"شحن محلي مبرّد", svc2_p:"سلسلة تبريد متكاملة للمنتجات الغذائية والدوائية الحساسة.", svc2_price:"من 30 ريال",
    svc3_h:"شحن دولي", svc3_p:"إلى دول الخليج، آسيا، أوروبا وأمريكا عبر DHL وFedEx وSPL الدولي.", svc3_price:"من 70 ريال",
    svc4_h:"الشحن إلى السودان", svc4_p:"بري أو جوي عبر تاركو — الخرطوم وكل الولايات.", svc4_price:"من 45 ريال",
    svc5_h:"استلام من الباب", svc5_p:"فريقنا يجيك لمنزلك أو متجرك، ما تحتاج تطلع من بيتك.", svc5_price:"+27 ريال فقط",
    svc6_h:"توصيل سريع", svc6_p:"شحنتك تتحرك أولوية قبل غيرها — خلال ساعات لا أيام.", svc6_price:"يبدأ من +10 ريال",
    svc_cta:"احسب السعر",

    how_kicker:"كيف تعمل مسار", how_h2:"من طلبك إلى وجهته، في 5 خطوات",
    how1_h:"نتعاقد بالجملة", how1_p:"نحصل على أسعار تفضيلية من كبرى شركات الشحن.",
    how2_h:"تطلب بثوانٍ", how2_p:"عبر الموقع، واتساب أو تطبيقنا.",
    how3_h:"نستلم شحنتك", how3_p:"من مكتبك، أو نأتي إلى باب متجرك.",
    how4_h:"نسلّم للناقل", how4_p:"بسعرنا التفضيلي المتعاقد عليه.",
    how5_h:"أنت توفر", how5_p:"تدفع أقل من التعاقد المباشر، دائمًا.",

    why_kicker:"لماذا مسار", why_h2:"مصمّمة لتاجر اليوم",
    why1_h:"توفير حقيقي", why1_p:"أسعار جملة تقارَن تلقائيًا لتختار الأرخص لكل شحنة.",
    why2_h:"بدون حد أدنى", why2_p:"اشحن قطعة واحدة أو ألف قطعة، بنفس الشفافية.",
    why3_h:"تتبع لحظي", why3_p:"تابع شحناتك المحلية والدولية من مكان واحد.",
    why4_h:"دعم بثلاث لغات", why4_p:"نتحدث العربية والإنجليزية والأردية لخدمة الجميع.",

    price_kicker:"الأسعار", price_h2:"شفافة تمامًا، من أول ريال",
    price_p:"مقارنة حيّة بين السعر المباشر وسعر مسار لأشهر المسارات.",
    tab_local:"محلي", tab_intl:"دولي", tab_sudan:"السودان",
    th_route:"المسار", th_direct:"السعر المباشر", th_masar:"سعر مسار", th_save:"توفيرك",
    local_r1:"داخل المدينة (SPL)", local_r2:"بين المدن (SPL)", local_r3:"داخل المدينة (أرامكس)", local_r4:"بين المدن (أرامكس)", local_r5:"داخل المدينة (زاجل)", local_r6:"بين المدن (زاجل)",
    intl_r1:"دول الخليج", intl_r2:"آسيا", intl_r3:"أوروبا", intl_r4:"أمريكا / كندا",
    sudan_r1:"الخرطوم — بري (تاركو)", sudan_r2:"الخرطوم — جوي (تاركو)", sudan_r3:"ولايات أخرى — بري (تاركو)",
    price_note:"* الأسعار الدولية وأسعار السودان تقديرية وتخضع للتأكيد النهائي حسب الوزن والوجهة الدقيقة.",
    price_cta:"احسب سعر شحنتك بالتفصيل",

    cta_h2:"جاهز توفّر على شحناتك؟", cta_p:"انضم لمئات التجار الذين قلّلوا فاتورة الشحن مع مسار.",
    cta_btn:"ابدأ الآن مجانًا",

    foot_about_p:"مسار هي منصة وساطة شحن سعودية تجمع أفضل الأسعار من كبرى الناقلين المحليين والدوليين في مكان واحد.",
    foot_links:"روابط سريعة", foot_services:"خدماتنا", foot_contact:"تواصل",
    foot_addr:"الرياض، المملكة العربية السعودية",
    foot_rights:"© 2026 مسار. جميع الحقوق محفوظة.", foot_madeby:"صُنع بحب لتجار السعودية 🇸🇦",

    // Calculator page
    calc_eyebrow:"حاسبة الأسعار الذكية",
    calc_h1:"احسب تكلفة شحنتك خلال ثوانٍ",
    calc_lede:"محرك تسعير حقيقي يحتسب الوزن الفعلي والحجمي، رسوم التبريد والسرعة، ويقارنها تلقائيًا بالسعر المباشر.",
    f_type:"نوع الشحنة", f_type_local:"محلي", f_type_intl:"دولي", f_type_sudan:"السودان",
    f_local_route:"المسار", f_local_same:"داخل نفس المدينة", f_local_between:"بين المدن",
    f_carrier:"شركة الشحن", f_carrier_auto:"الأرخص تلقائيًا",
    f_intl_zone:"الوجهة", f_zone_gulf:"دول الخليج", f_zone_asia:"آسيا", f_zone_europe:"أوروبا", f_zone_america:"أمريكا / كندا",
    f_sudan_mode:"طريقة النقل", f_sudan_land:"بري (تاركو)", f_sudan_air:"جوي (تاركو)",
    f_weight:"الوزن الفعلي (كجم)",
    f_dims:"الأبعاد (اختياري) — لحساب الوزن الحجمي",
    f_l:"الطول (سم)", f_w:"العرض (سم)", f_h:"الارتفاع (سم)",
    f_cold:"شحن مبرّد", f_cold_hint:"للمنتجات الغذائية أو الدوائية الحساسة للحرارة",
    f_express:"توصيل سريع", f_express_hint:"أولوية في المعالجة والنقل",
    f_pickup:"استلام من الباب", f_pickup_hint:"فريقنا يمر عليك — إضافة ثابتة 27 ريال",
    f_pack:"تغليف احترافي إضافي", f_pack_hint:"تغليف مقوى لحماية إضافية (+10 ريال)",
    f_insure:"تأمين الشحنة", f_insure_hint:"1.5% من القيمة المصرّحة (حد أدنى 5 ريال)",
    f_value:"القيمة المصرّحة (ريال)",
    calc_btn:"احسب السعر الآن",
    res_title:"تفاصيل السعر", res_total:"السعر الإجمالي",
    res_base:"السعر الأساسي (حتى 5 كجم)", res_extra_w:"وزن إضافي", res_vol:"الوزن الحجمي المحتسب",
    res_cold:"رسوم التبريد", res_express:"رسوم التوصيل السريع", res_pickup:"استلام من الباب",
    res_pack:"تغليف احترافي", res_insure:"تأمين الشحنة",
    res_save_prefix:"توفّرت", res_save_suffix:"مقارنة بالتعاقد المباشر",
    res_eta:"المدة المتوقعة", res_empty:"عبّي البيانات على اليسار واضغط احسب السعر لعرض التفاصيل هنا.",
    res_whatsapp:"اطلب عبر واتساب", res_note:"* هذا احتساب تقديري وقد يختلف بسيط حسب الفحص الفعلي للشحنة.",

    // Tracking page
    track_eyebrow:"تتبع شحنتك",
    track_h1:"وين وصلت شحنتي؟",
    track_lede:"أدخل رقم التتبع الخاص بك وتابع كل خطوة بخطوة، لحظة بلحظة.",
    track_placeholder:"مثال: MS-774213-SA",
    track_btn:"تتبّع",
    track_try:"جرّب برقم تجريبي:",
    track_from:"الرياض، السعودية", track_to:"الوجهة",
    t1:"تم إنشاء الشحنة", t2:"تم الاستلام من التاجر", t3:"وصلت لمركز الفرز",
    t4:"في الطريق إلى الوجهة", t5:"خرجت للتوصيل", t6:"تم التسليم بنجاح",
    track_eta:"موعد التسليم المتوقع", track_carrier:"الناقل المسؤول", track_notfound:"أدخل رقم تتبع لعرض الحالة.",

    // Contact page
    contact_eyebrow:"تواصل معنا",
    contact_h1:"عندك سؤال؟ نحن نسمع.",
    contact_lede:"فريقنا يرد خلال ساعات العمل، أو راسلنا واتساب لرد أسرع.",
    c_name:"الاسم الكامل", c_phone:"رقم الجوال", c_email:"البريد الإلكتروني", c_msg:"رسالتك",
    c_submit:"إرسال الطلب", c_toast:"تم استلام طلبك! سيتواصل معك فريقنا قريبًا.",
    c_info_h:"معلومات التواصل",
    c_addr_h:"المكتب الرئيسي", c_addr_v:"حي العليا، الرياض، المملكة العربية السعودية",
    c_phone_h:"الهاتف / واتساب", c_email_h:"البريد الإلكتروني", c_hours_h:"ساعات العمل", c_hours_v:"الأحد – الخميس، 9ص – 7م",
    faq_h2:"أسئلة شائعة",
    faq_q1:"هل يوجد حد أدنى لعدد الشحنات؟", faq_a1:"لا إطلاقًا، يمكنك شحن قطعة واحدة فقط بنفس الأسعار التنافسية.",
    faq_q2:"هل تدعمون الشحن المبرد؟", faq_a2:"نعم، نوفر سلسلة تبريد متكاملة للمنتجات الغذائية والدوائية محليًا ودوليًا.",
    faq_q3:"كم تستغرق الشحنة للسودان؟", faq_a3:"بريًا عبر تاركو 5–8 أيام تقريبًا، وجويًا 2–3 أيام تقريبًا حسب الوجهة.",
    faq_q4:"هل تقدمون استلام من المنزل أو المتجر؟", faq_a4:"نعم، مقابل رسوم ثابتة 27 ريال فقط لكل عملية استلام.",

    tech_eyebrow:"من الداخل",
    tech_h1:"التقنية خلف مسار",
    tech_lede:"واجهة الموقع HTML وCSS وJavaScript، لكن الحسابات الحساسة تشتغل في وحدتين مُصرَّفتين إلى WebAssembly مباشرة: محرك تسعير بلغة Rust، ومحرك تتبع بلغة ++C — بدون أي إطار عمل وسيط.",
    tech_arch_h:"كيف تتحدث الطبقات مع بعضها",
    tech_arch_js_h:"الواجهة", tech_arch_js_p:"HTML + CSS + JavaScript — النماذج، التصميم، وتبديل اللغة.",
    tech_arch_rust_h:"محرك الأسعار", tech_arch_rust_p:"Rust مُصرَّف إلى WebAssembly — الوزن الحجمي، الأسعار المتدرجة، التأمين.",
    tech_arch_cpp_h:"محرك التتبع", tech_arch_cpp_p:"++C حر (بدون مكتبات) مُصرَّف إلى WebAssembly — دالة hash لتحديد حالة الشحنة.",
    tech_bench_h:"اختبار سرعة حي", tech_bench_p:"شغّل المقارنة الآن وشاهد الفرق الحقيقي بين WebAssembly وJavaScript، في متصفحك أنت.",
    tech_bench_run:"شغّل الاختبار الآن", tech_bench_running:"جارِ القياس...",
    tech_bench_wasm:"WebAssembly", tech_bench_js:"JavaScript",
    tech_bench_iterations:"عدد العمليات", tech_bench_faster:"أسرع بـ",
    tech_code_h:"شاهد الكود الفعلي",
    tech_code_p:"هذا هو الكود المُصرَّف والمُشغَّل فعليًا في هذه الصفحة الآن — بدون تعديل.",
    tech_code_rust_tab:"محرك الأسعار (Rust)", tech_code_cpp_tab:"محرك التتبع (++C)",
    tech_why_h:"ليش Rust و++C بالذات؟",
    tech_why1_h:"أمان الذاكرة", tech_why1_p:"Rust يمنع أخطاء الذاكرة الشائعة وقت الترجمة، وهذا يهم في محرك يحسب فلوس حقيقية.",
    tech_why2_h:"حجم صغير جدًا", tech_why2_p:"وحدة ++C الحرة (بدون مكتبات) حجمها أقل من كيلوبايت واحد — تحميل فوري.",
    tech_why3_h:"سرعة قريبة من الآلة", tech_why3_p:"WebAssembly يشتغل بسرعة قريبة من الكود الأصلي، أسرع بكثير من JavaScript المفسَّر لحسابات مكثفة.",
    tech_why4_h:"نفس النتيجة دائمًا", tech_why4_p:"حسابات حتمية 100% — نفس المدخلات تعطي نفس السعر دائمًا، بدون مفاجآت.",
    tech_cta_h:"جرّب المحرك بنفسك",
    tech_cta_p:"احسب سعر شحنة حقيقية أو تتبع شحنة، وشوف Rust وC++ يشتغلون لحظيًا.",
    tech_cta_calc:"جرّب الحاسبة", tech_cta_track:"جرّب التتبع",
    tech_engine_badge:"⚡ مدعوم بـ WebAssembly",
    tech_engine_badge_js:"🟡 وضع JavaScript الاحتياطي",

    tech_eyebrow:"كيف نبني مسار", tech_h1:"كود حقيقي، لا حيل تسويقية",
    tech_lede:"محرك الأسعار مكتوب بلغة Rust، ومحرك التتبع مكتوب بلغة ++C — كلاهما مُصرَّف مباشرة إلى WebAssembly ويعمل الآن داخل متصفحك، بلا أي خادم خلفي.",
    tech_arch_h2:"كيف تتدفق البيانات", tech_arch_p:"من واجهة الموقع، إلى محرك مُصرَّف، وعودة بالنتيجة — في أجزاء من الثانية.",
    arch_node_browser:"متصفحك", arch_node_browser_sub:"HTML + CSS + JavaScript",
    arch_node_rust:"Rust", arch_node_rust_sub:"محرك حساب الأسعار",
    arch_node_cpp:"++C", arch_node_cpp_sub:"محرك تتبع الشحنات",
    arch_node_wasm:"WebAssembly", arch_node_wasm_sub:"يعمل بسرعة قريبة من الكود الأصلي",
    tech_code_h2:"شاهد الكود الحقيقي", tech_code_p:"لا عروض تقديمية — هذا الكود نفسه يعمل الآن في متصفحك.",
    tab_rust:"Rust — محرك الأسعار", tab_cpp:"C++ — محرك التتبع",
    tech_demo_h2:"جرّب المحرك مباشرة", tech_demo_p:"اضغط الأزرار وشاهد النتائج تُحسب فعليًا داخل متصفحك، بلا أي خادم.",
    demo_btn_price:"شغّل محرك Rust", demo_btn_track:"شغّل محرك ++C",
    demo_price_label:"وزن 1×60×50×40 سم عبر Rust:", demo_track_label:"بصمة (hash) الرقم MS-774213-SA عبر ++C:",
    tech_stack_h2:"الطبقات التقنية للموقع",
    stack1_h:"الواجهة", stack1_p:"HTML5 وCSS3 وJavaScript خالص، بدون أي إطار عمل (framework).",
    stack2_h:"محرك الأسعار", stack2_p:"Rust مُصرَّف بـ rustc إلى wasm32-unknown-unknown، مُحمَّل مباشرة كموديول WebAssembly.",
    stack3_h:"محرك التتبع", stack3_p:"++C مستقل (freestanding) مُصرَّف بـ clang مباشرة إلى WebAssembly بدون أي مكتبة قياسية.",
    stack4_h:"التخزين والحالة", stack4_p:"كل الحالة تُدار في المتصفح — لا قواعد بيانات ولا خوادم خلفية.",
  },

  en: {
    dir: "ltr",
    nav_home:"Home", nav_calc:"Get a Quote", nav_track:"Track Shipment", nav_tech:"Technology", nav_contact:"Contact",
    nav_cta:"Request a Quote",
    nav_tech:"Technology",
    brand:"Masar",

    hero_eyebrow:"Saudi Arabia's leading shipping brokerage",
    hero_h1_1:"Ship smarter.", hero_h1_2:"Save more.",
    hero_lede:"Masar bundles the best rates from Saudi Post, Aramex, Zajil, DHL and FedEx — local, international, and even Sudan via Tarco — in one place.",
    hero_cta1:"Calculate your price", hero_cta2:"Track a shipment",
    hero_stat1_n:"5", hero_stat1_l:"contracted carriers",
    hero_stat2_n:"30%", hero_stat2_l:"average savings",
    hero_stat3_n:"0", hero_stat3_l:"minimum volume",
    label_tag:"Shipment confirmed", label_from:"From: Riyadh", label_to:"To: 190+ destinations",
    label_track:"Tracking: MS-774213-SA", label_weight:"Weight: 3.4 kg", label_speed:"Express",
    floaty1:"Saved SAR 42", floaty2:"Delivered ✓",

    trust_label:"We contract directly with",

    services_kicker:"Our services", services_h2:"Every kind of shipment, one fair price",
    services_p:"From a small parcel across town to a refrigerated pallet to the Gulf — Masar has the right option.",
    svc1_h:"Local dry shipping", svc1_p:"Fast delivery across every Saudi city via SPL, Aramex and Zajil.", svc1_price:"From SAR 15",
    svc2_h:"Local cold-chain", svc2_p:"Full cold chain for temperature-sensitive food and pharma.", svc2_price:"From SAR 30",
    svc3_h:"International shipping", svc3_p:"To the Gulf, Asia, Europe and the Americas via DHL, FedEx and International SPL.", svc3_price:"From SAR 70",
    svc4_h:"Shipping to Sudan", svc4_p:"Land or air via Tarco — Khartoum and all states.", svc4_price:"From SAR 45",
    svc5_h:"Doorstep pickup", svc5_p:"Our team comes to your home or store — no need to go out.", svc5_price:"Just +SAR 27",
    svc6_h:"Express delivery", svc6_p:"Your shipment moves first, in hours not days.", svc6_price:"Starts at +SAR 10",
    svc_cta:"Calculate price",

    how_kicker:"How Masar works", how_h2:"From your order to its destination, in 5 steps",
    how1_h:"We contract in bulk", how1_p:"We secure preferential rates from major carriers.",
    how2_h:"You request in seconds", how2_p:"Via the website, WhatsApp or our app.",
    how3_h:"We collect your shipment", how3_p:"From your office, or right at your door.",
    how4_h:"We hand off to the carrier", how4_p:"At our pre-negotiated preferential rate.",
    how5_h:"You save", how5_p:"You always pay less than booking directly.",

    why_kicker:"Why Masar", why_h2:"Built for today's merchant",
    why1_h:"Real savings", why1_p:"Bulk rates auto-compared to pick the cheapest option per shipment.",
    why2_h:"No minimums", why2_p:"Ship one item or a thousand, same transparent pricing.",
    why3_h:"Live tracking", why3_p:"Track local and international shipments from one place.",
    why4_h:"Trilingual support", why4_p:"We speak Arabic, English and Urdu to serve everyone.",

    price_kicker:"Pricing", price_h2:"Fully transparent, from the first riyal",
    price_p:"A live comparison between direct carrier pricing and Masar's rate for popular routes.",
    tab_local:"Local", tab_intl:"International", tab_sudan:"Sudan",
    th_route:"Route", th_direct:"Direct price", th_masar:"Masar price", th_save:"You save",
    local_r1:"Same city (SPL)", local_r2:"Between cities (SPL)", local_r3:"Same city (Aramex)", local_r4:"Between cities (Aramex)", local_r5:"Same city (Zajil)", local_r6:"Between cities (Zajil)",
    intl_r1:"GCC countries", intl_r2:"Asia", intl_r3:"Europe", intl_r4:"USA / Canada",
    sudan_r1:"Khartoum — Land (Tarco)", sudan_r2:"Khartoum — Air (Tarco)", sudan_r3:"Other states — Land (Tarco)",
    price_note:"* International and Sudan prices are estimates, subject to final confirmation based on exact weight and destination.",
    price_cta:"Get a detailed quote",

    cta_h2:"Ready to cut your shipping bill?", cta_p:"Join hundreds of merchants who lowered their shipping costs with Masar.",
    cta_btn:"Start free now",

    foot_about_p:"Masar is a Saudi shipping brokerage platform bundling the best rates from major local and international carriers in one place.",
    foot_links:"Quick links", foot_services:"Services", foot_contact:"Contact",
    foot_addr:"Riyadh, Saudi Arabia",
    foot_rights:"© 2026 Masar. All rights reserved.", foot_madeby:"Made with care for Saudi merchants 🇸🇦",

    calc_eyebrow:"Smart pricing calculator",
    calc_h1:"Calculate your shipping cost in seconds",
    calc_lede:"A real pricing engine that accounts for actual and volumetric weight, cold-chain and express fees, and auto-compares against direct pricing.",
    f_type:"Shipment type", f_type_local:"Local", f_type_intl:"International", f_type_sudan:"Sudan",
    f_local_route:"Route", f_local_same:"Within the same city", f_local_between:"Between cities",
    f_carrier:"Carrier", f_carrier_auto:"Cheapest automatically",
    f_intl_zone:"Destination", f_zone_gulf:"GCC countries", f_zone_asia:"Asia", f_zone_europe:"Europe", f_zone_america:"USA / Canada",
    f_sudan_mode:"Transport mode", f_sudan_land:"Land (Tarco)", f_sudan_air:"Air (Tarco)",
    f_weight:"Actual weight (kg)",
    f_dims:"Dimensions (optional) — for volumetric weight",
    f_l:"Length (cm)", f_w:"Width (cm)", f_h:"Height (cm)",
    f_cold:"Cold-chain shipping", f_cold_hint:"For temperature-sensitive food or pharma products",
    f_express:"Express delivery", f_express_hint:"Priority handling and transport",
    f_pickup:"Doorstep pickup", f_pickup_hint:"Our team comes to you — flat SAR 27 fee",
    f_pack:"Extra professional packaging", f_pack_hint:"Reinforced packaging for extra protection (+SAR 10)",
    f_insure:"Shipment insurance", f_insure_hint:"1.5% of declared value (minimum SAR 5)",
    f_value:"Declared value (SAR)",
    calc_btn:"Calculate price now",
    res_title:"Price breakdown", res_total:"Total price",
    res_base:"Base price (up to 5 kg)", res_extra_w:"Extra weight", res_vol:"Calculated volumetric weight",
    res_cold:"Cold-chain fee", res_express:"Express fee", res_pickup:"Doorstep pickup",
    res_pack:"Professional packaging", res_insure:"Shipment insurance",
    res_save_prefix:"You saved", res_save_suffix:"vs. booking directly",
    res_eta:"Estimated time", res_empty:"Fill in the details on the left and press calculate to see your breakdown here.",
    res_whatsapp:"Order via WhatsApp", res_note:"* This is an estimate and may vary slightly after physical inspection of the shipment.",

    track_eyebrow:"Track your shipment",
    track_h1:"Where's my package?",
    track_lede:"Enter your tracking number and follow every step, live.",
    track_placeholder:"e.g. MS-774213-SA",
    track_btn:"Track",
    track_try:"Try a sample number:",
    track_from:"Riyadh, Saudi Arabia", track_to:"Destination",
    t1:"Shipment created", t2:"Picked up from merchant", t3:"Arrived at sorting center",
    t4:"In transit to destination", t5:"Out for delivery", t6:"Delivered successfully",
    track_eta:"Estimated delivery", track_carrier:"Carrier in charge", track_notfound:"Enter a tracking number to see its status.",

    contact_eyebrow:"Contact us",
    contact_h1:"Have a question? We're listening.",
    contact_lede:"Our team replies within working hours, or message us on WhatsApp for a faster response.",
    c_name:"Full name", c_phone:"Phone number", c_email:"Email address", c_msg:"Your message",
    c_submit:"Send request", c_toast:"Your request was received! Our team will reach out soon.",
    c_info_h:"Contact information",
    c_addr_h:"Head office", c_addr_v:"Al Olaya District, Riyadh, Saudi Arabia",
    c_phone_h:"Phone / WhatsApp", c_email_h:"Email", c_hours_h:"Working hours", c_hours_v:"Sun – Thu, 9am – 7pm",
    faq_h2:"Frequently asked questions",
    faq_q1:"Is there a minimum shipment count?", faq_a1:"Not at all — you can ship a single item at the same competitive pricing.",
    faq_q2:"Do you support cold-chain shipping?", faq_a2:"Yes, we offer full cold-chain handling for food and pharma, locally and internationally.",
    faq_q3:"How long does shipping to Sudan take?", faq_a3:"Around 5–8 days by land via Tarco, and 2–3 days by air, depending on the destination.",
    faq_q4:"Do you offer home or store pickup?", faq_a4:"Yes, for a flat fee of just SAR 27 per pickup.",

    tech_eyebrow:"Under the hood",
    tech_h1:"The technology behind Masar",
    tech_lede:"The site itself is HTML, CSS and JavaScript, but the sensitive math runs in two modules compiled straight to WebAssembly: a pricing engine written in Rust, and a tracking engine written in C++ — no framework in between.",
    tech_arch_h:"How the layers talk to each other",
    tech_arch_js_h:"Frontend", tech_arch_js_p:"HTML + CSS + JavaScript — forms, styling, and language switching.",
    tech_arch_rust_h:"Pricing engine", tech_arch_rust_p:"Rust compiled to WebAssembly — volumetric weight, tiered rates, insurance.",
    tech_arch_cpp_h:"Tracking engine", tech_arch_cpp_p:"Freestanding C++ (no libraries) compiled to WebAssembly — the hash function that resolves shipment state.",
    tech_bench_h:"Live speed test", tech_bench_p:"Run the comparison now and see the real difference between WebAssembly and JavaScript, in your own browser.",
    tech_bench_run:"Run the benchmark", tech_bench_running:"Measuring...",
    tech_bench_wasm:"WebAssembly", tech_bench_js:"JavaScript",
    tech_bench_iterations:"Operations", tech_bench_faster:"faster by",
    tech_code_h:"See the actual code",
    tech_code_p:"This is the exact code compiled and running live on this page right now — unedited.",
    tech_code_rust_tab:"Pricing engine (Rust)", tech_code_cpp_tab:"Tracking engine (C++)",
    tech_why_h:"Why Rust and C++ specifically?",
    tech_why1_h:"Memory safety", tech_why1_p:"Rust prevents common memory bugs at compile time — important in an engine that computes real money.",
    tech_why2_h:"Tiny footprint", tech_why2_p:"The freestanding C++ module is under 1 KB — instant to load.",
    tech_why3_h:"Near-native speed", tech_why3_p:"WebAssembly runs close to native speed, far faster than interpreted JavaScript for heavy math.",
    tech_why4_h:"Always the same result", tech_why4_p:"100% deterministic math — the same inputs always produce the same price, no surprises.",
    tech_cta_h:"Try the engine yourself",
    tech_cta_p:"Calculate a real shipment price or track a shipment, and watch Rust and C++ run live.",
    tech_cta_calc:"Try the calculator", tech_cta_track:"Try tracking",
    tech_engine_badge:"⚡ Powered by WebAssembly",
    tech_engine_badge_js:"🟡 JavaScript fallback mode",

    tech_eyebrow:"How we build Masar", tech_h1:"Real code, not marketing smoke",
    tech_lede:"The pricing engine is written in Rust, and the tracking engine in C++ — both compiled straight to WebAssembly and running right now in your browser, with no backend server.",
    tech_arch_h2:"How the data flows", tech_arch_p:"From the site's interface, into a compiled engine, and back with a result — in a fraction of a second.",
    arch_node_browser:"Your browser", arch_node_browser_sub:"HTML + CSS + JavaScript",
    arch_node_rust:"Rust", arch_node_rust_sub:"Pricing engine",
    arch_node_cpp:"C++", arch_node_cpp_sub:"Tracking engine",
    arch_node_wasm:"WebAssembly", arch_node_wasm_sub:"Runs near native speed",
    tech_code_h2:"See the real code", tech_code_p:"No slideware — this exact code is running in your browser right now.",
    tab_rust:"Rust — pricing engine", tab_cpp:"C++ — tracking engine",
    tech_demo_h2:"Try the engine live", tech_demo_p:"Press the buttons and watch results get computed for real, in your browser, with no server involved.",
    demo_btn_price:"Run the Rust engine", demo_btn_track:"Run the C++ engine",
    demo_price_label:"1×60×50×40cm weight via Rust:", demo_track_label:"Hash of MS-774213-SA via C++:",
    tech_stack_h2:"The site's technical layers",
    stack1_h:"Frontend", stack1_p:"Plain HTML5, CSS3 and JavaScript — no framework.",
    stack2_h:"Pricing engine", stack2_p:"Rust compiled by rustc to wasm32-unknown-unknown, loaded directly as a WebAssembly module.",
    stack3_h:"Tracking engine", stack3_p:"Freestanding C++ compiled by clang straight to WebAssembly, with no standard library.",
    stack4_h:"Storage & state", stack4_p:"All state lives in the browser — no databases, no backend servers.",
  },

  ur: {
    dir: "rtl",
    nav_home:"ہوم", nav_calc:"قیمت معلوم کریں", nav_track:"شپمنٹ ٹریک کریں", nav_tech:"ٹیکنالوجی", nav_contact:"رابطہ",
    nav_cta:"قیمت کی درخواست دیں",
    nav_tech:"ٹیکنالوجی",
    brand:"مسار",

    hero_eyebrow:"سعودی عرب کی نمبر ون شپنگ بروکریج",
    hero_h1_1:"زیادہ ہوشیاری سے بھیجیں۔", hero_h1_2:"زیادہ بچت کریں۔",
    hero_lede:"مسار آپ کو سعودی پوسٹ، ارامکس، زاجل، DHL اور FedEx کی بہترین قیمتیں ایک ہی جگہ فراہم کرتا ہے — مقامی، بین الاقوامی، اور تاركو کے ذریعے سوڈان تک۔",
    hero_cta1:"اپنی شپمنٹ کی قیمت معلوم کریں", hero_cta2:"شپمنٹ ٹریک کریں",
    hero_stat1_n:"5", hero_stat1_l:"معاہدہ شدہ کمپنیاں",
    hero_stat2_n:"30%", hero_stat2_l:"اوسط بچت",
    hero_stat3_n:"0", hero_stat3_l:"کم از کم مقدار",
    label_tag:"شپمنٹ کنفرم", label_from:"از: ریاض", label_to:"تک: 190+ مقامات",
    label_track:"ٹریکنگ: MS-774213-SA", label_weight:"وزن: 3.4 کلوگرام", label_speed:"ایکسپریس",
    floaty1:"42 ریال بچائے", floaty2:"ڈیلیور ہوگیا ✓",

    trust_label:"ہم براہ راست معاہدہ رکھتے ہیں",

    services_kicker:"ہماری خدمات", services_h2:"ہر قسم کی شپنگ، ایک منصفانہ قیمت پر",
    services_p:"شہر کے اندر ایک چھوٹے پارسل سے لے کر خلیج کے لیے ریفریجریٹڈ کھیپ تک — مسار کے پاس صحیح آپشن موجود ہے۔",
    svc1_h:"مقامی خشک شپنگ", svc1_p:"SPL، ارامکس اور زاجل کے ذریعے ہر سعودی شہر میں تیز ترسیل۔", svc1_price:"15 ریال سے",
    svc2_h:"مقامی کولڈ چین", svc2_p:"درجہ حرارت کے حساس کھانے اور ادویات کے لیے مکمل کولڈ چین۔", svc2_price:"30 ریال سے",
    svc3_h:"بین الاقوامی شپنگ", svc3_p:"خلیج، ایشیا، یورپ اور امریکہ کے لیے DHL، FedEx اور SPL انٹرنیشنل کے ذریعے۔", svc3_price:"70 ریال سے",
    svc4_h:"سوڈان کے لیے شپنگ", svc4_p:"تاركو کے ذریعے بری یا فضائی — خرطوم اور تمام ریاستیں۔", svc4_price:"45 ریال سے",
    svc5_h:"گھر سے پک اپ", svc5_p:"ہماری ٹیم آپ کے گھر یا دکان پر آتی ہے — باہر جانے کی ضرورت نہیں۔", svc5_price:"صرف +27 ریال",
    svc6_h:"ایکسپریس ترسیل", svc6_p:"آپ کی شپمنٹ کو ترجیح ملتی ہے — دنوں کی بجائے گھنٹوں میں۔", svc6_price:"+10 ریال سے شروع",
    svc_cta:"قیمت معلوم کریں",

    how_kicker:"مسار کیسے کام کرتا ہے", how_h2:"آپ کے آرڈر سے منزل تک، 5 مراحل میں",
    how1_h:"ہم بلک معاہدہ کرتے ہیں", how1_p:"بڑی کمپنیوں سے ترجیحی نرخ حاصل کرتے ہیں۔",
    how2_h:"آپ سیکنڈوں میں درخواست دیں", how2_p:"ویب سائٹ، واٹس ایپ یا ہماری ایپ کے ذریعے۔",
    how3_h:"ہم آپ کی شپمنٹ وصول کرتے ہیں", how3_p:"آپ کے دفتر سے، یا براہ راست آپ کے دروازے سے۔",
    how4_h:"ہم کیریئر کے حوالے کرتے ہیں", how4_p:"ہمارے پہلے سے طے شدہ ترجیحی نرخ پر۔",
    how5_h:"آپ بچت کرتے ہیں", how5_p:"آپ ہمیشہ براہ راست بکنگ سے کم ادا کرتے ہیں۔",

    why_kicker:"مسار کیوں", why_h2:"آج کے تاجر کے لیے بنایا گیا",
    why1_h:"حقیقی بچت", why1_p:"ہر شپمنٹ کے لیے سب سے سستا آپشن خودکار طور پر منتخب ہوتا ہے۔",
    why2_h:"کوئی کم از کم حد نہیں", why2_p:"ایک چیز بھیجیں یا ہزار، قیمت وہی شفاف رہتی ہے۔",
    why3_h:"لائیو ٹریکنگ", why3_p:"مقامی اور بین الاقوامی شپمنٹس ایک ہی جگہ سے ٹریک کریں۔",
    why4_h:"سہ لسانی سپورٹ", why4_p:"ہم عربی، انگریزی اور اردو بولتے ہیں تاکہ سب کی خدمت کر سکیں۔",

    price_kicker:"قیمتیں", price_h2:"مکمل شفاف، پہلے ریال سے",
    price_p:"مقبول روٹس کے لیے براہ راست قیمت اور مسار کی قیمت کا لائیو موازنہ۔",
    tab_local:"مقامی", tab_intl:"بین الاقوامی", tab_sudan:"سوڈان",
    th_route:"روٹ", th_direct:"براہ راست قیمت", th_masar:"مسار کی قیمت", th_save:"آپ کی بچت",
    local_r1:"اندرون شہر (SPL)", local_r2:"شہروں کے درمیان (SPL)", local_r3:"اندرون شہر (ارامکس)", local_r4:"شہروں کے درمیان (ارامکس)", local_r5:"اندرون شہر (زاجل)", local_r6:"شہروں کے درمیان (زاجل)",
    intl_r1:"خلیجی ممالک", intl_r2:"ایشیا", intl_r3:"یورپ", intl_r4:"امریکہ / کینیڈا",
    sudan_r1:"خرطوم — بری (تاركو)", sudan_r2:"خرطوم — فضائی (تاركو)", sudan_r3:"دیگر ریاستیں — بری (تاركو)",
    price_note:"* بین الاقوامی اور سوڈان کی قیمتیں تخمینی ہیں اور وزن اور منزل کے مطابق حتمی تصدیق کے تابع ہیں۔",
    price_cta:"تفصیلی قیمت معلوم کریں",

    cta_h2:"اپنے شپنگ اخراجات کم کرنے کے لیے تیار ہیں؟", cta_p:"سینکڑوں تاجروں میں شامل ہوں جنہوں نے مسار کے ساتھ شپنگ اخراجات کم کیے۔",
    cta_btn:"ابھی مفت شروع کریں",

    foot_about_p:"مسار ایک سعودی شپنگ بروکریج پلیٹ فارم ہے جو بڑی مقامی اور بین الاقوامی کمپنیوں کی بہترین قیمتیں ایک جگہ فراہم کرتا ہے۔",
    foot_links:"فوری روابط", foot_services:"خدمات", foot_contact:"رابطہ",
    foot_addr:"ریاض، سعودی عرب",
    foot_rights:"© 2026 مسار۔ جملہ حقوق محفوظ ہیں۔", foot_madeby:"سعودی تاجروں کے لیے محبت سے بنایا گیا 🇸🇦",

    calc_eyebrow:"سمارٹ پرائسنگ کیلکولیٹر",
    calc_h1:"سیکنڈوں میں اپنی شپنگ لاگت معلوم کریں",
    calc_lede:"ایک حقیقی پرائسنگ انجن جو اصل اور حجمی وزن، کولڈ چین اور ایکسپریس فیس کا حساب رکھتا ہے، اور خودکار طور پر براہ راست قیمت سے موازنہ کرتا ہے۔",
    f_type:"شپمنٹ کی قسم", f_type_local:"مقامی", f_type_intl:"بین الاقوامی", f_type_sudan:"سوڈان",
    f_local_route:"روٹ", f_local_same:"اسی شہر کے اندر", f_local_between:"شہروں کے درمیان",
    f_carrier:"کیریئر", f_carrier_auto:"خودکار طور پر سب سے سستا",
    f_intl_zone:"منزل", f_zone_gulf:"خلیجی ممالک", f_zone_asia:"ایشیا", f_zone_europe:"یورپ", f_zone_america:"امریکہ / کینیڈا",
    f_sudan_mode:"ٹرانسپورٹ کا طریقہ", f_sudan_land:"بری (تاركو)", f_sudan_air:"فضائی (تاركو)",
    f_weight:"اصل وزن (کلوگرام)",
    f_dims:"طول و عرض (اختیاری) — حجمی وزن کے لیے",
    f_l:"لمبائی (سینٹی میٹر)", f_w:"چوڑائی (سینٹی میٹر)", f_h:"اونچائی (سینٹی میٹر)",
    f_cold:"کولڈ چین شپنگ", f_cold_hint:"درجہ حرارت کے حساس کھانے یا ادویات کے لیے",
    f_express:"ایکسپریس ترسیل", f_express_hint:"ترجیحی ہینڈلنگ اور نقل و حمل",
    f_pickup:"گھر سے پک اپ", f_pickup_hint:"ہماری ٹیم آپ کے پاس آتی ہے — فکسڈ 27 ریال فیس",
    f_pack:"اضافی پیشہ ورانہ پیکنگ", f_pack_hint:"اضافی تحفظ کے لیے مضبوط پیکنگ (+10 ریال)",
    f_insure:"شپمنٹ انشورنس", f_insure_hint:"اعلان شدہ قیمت کا 1.5% (کم از کم 5 ریال)",
    f_value:"اعلان شدہ قیمت (ریال)",
    calc_btn:"ابھی قیمت معلوم کریں",
    res_title:"قیمت کی تفصیل", res_total:"کل قیمت",
    res_base:"بنیادی قیمت (5 کلوگرام تک)", res_extra_w:"اضافی وزن", res_vol:"حساب شدہ حجمی وزن",
    res_cold:"کولڈ چین فیس", res_express:"ایکسپریس فیس", res_pickup:"گھر سے پک اپ",
    res_pack:"پیشہ ورانہ پیکنگ", res_insure:"شپمنٹ انشورنس",
    res_save_prefix:"آپ نے بچائے", res_save_suffix:"براہ راست بکنگ کے مقابلے میں",
    res_eta:"متوقع وقت", res_empty:"بائیں طرف تفصیلات پُر کریں اور قیمت معلوم کرنے کے لیے بٹن دبائیں۔",
    res_whatsapp:"واٹس ایپ کے ذریعے آرڈر کریں", res_note:"* یہ ایک تخمینہ ہے اور شپمنٹ کے حقیقی معائنے کے بعد قدرے مختلف ہو سکتا ہے۔",

    track_eyebrow:"اپنی شپمنٹ ٹریک کریں",
    track_h1:"میرا پارسل کہاں ہے؟",
    track_lede:"اپنا ٹریکنگ نمبر درج کریں اور ہر مرحلہ لائیو دیکھیں۔",
    track_placeholder:"مثال: MS-774213-SA",
    track_btn:"ٹریک کریں",
    track_try:"نمونہ نمبر آزمائیں:",
    track_from:"ریاض، سعودی عرب", track_to:"منزل",
    t1:"شپمنٹ بن گئی", t2:"تاجر سے وصول کر لی گئی", t3:"سارٹنگ سینٹر پہنچ گئی",
    t4:"منزل کی طرف روانہ", t5:"ترسیل کے لیے نکل گئی", t6:"کامیابی سے ڈیلیور ہوگئی",
    track_eta:"متوقع ترسیل", track_carrier:"ذمہ دار کیریئر", track_notfound:"حالت دیکھنے کے لیے ٹریکنگ نمبر درج کریں۔",

    contact_eyebrow:"ہم سے رابطہ کریں",
    contact_h1:"کوئی سوال ہے؟ ہم سن رہے ہیں۔",
    contact_lede:"ہماری ٹیم کام کے اوقات میں جواب دیتی ہے، یا تیز جواب کے لیے واٹس ایپ کریں۔",
    c_name:"پورا نام", c_phone:"موبائل نمبر", c_email:"ای میل ایڈریس", c_msg:"آپ کا پیغام",
    c_submit:"درخواست بھیجیں", c_toast:"آپ کی درخواست موصول ہوگئی! ہماری ٹیم جلد رابطہ کرے گی۔",
    c_info_h:"رابطہ کی معلومات",
    c_addr_h:"مرکزی دفتر", c_addr_v:"العليا ڈسٹرکٹ، ریاض، سعودی عرب",
    c_phone_h:"فون / واٹس ایپ", c_email_h:"ای میل", c_hours_h:"اوقات کار", c_hours_v:"اتوار – جمعرات، 9 صبح – 7 شام",
    faq_h2:"اکثر پوچھے گئے سوالات",
    faq_q1:"کیا کم از کم شپمنٹ کی تعداد مقرر ہے؟", faq_a1:"بالکل نہیں — آپ ایک ہی چیز اسی مسابقتی قیمت پر بھیج سکتے ہیں۔",
    faq_q2:"کیا آپ کولڈ چین شپنگ کی سہولت دیتے ہیں؟", faq_a2:"جی ہاں، ہم مقامی اور بین الاقوامی سطح پر کھانے اور ادویات کے لیے مکمل کولڈ چین فراہم کرتے ہیں۔",
    faq_q3:"سوڈان کے لیے شپنگ میں کتنا وقت لگتا ہے؟", faq_a3:"تاركو کے ذریعے بری راستے سے تقریباً 5-8 دن، اور فضائی راستے سے 2-3 دن، منزل کے مطابق۔",
    faq_q4:"کیا آپ گھر یا دکان سے پک اپ فراہم کرتے ہیں؟", faq_a4:"جی ہاں، صرف 27 ریال فی پک اپ کی فکسڈ فیس پر۔",

    tech_eyebrow:"پردے کے پیچھے",
    tech_h1:"مسار کے پیچھے ٹیکنالوجی",
    tech_lede:"سائٹ خود HTML، CSS اور JavaScript پر مشتمل ہے، لیکن حساس حساب کتاب دو ماڈیولز میں چلتا ہے جو براہ راست WebAssembly میں کمپائل کیے گئے ہیں: Rust میں لکھا ہوا پرائسنگ انجن، اور C++ میں لکھا ہوا ٹریکنگ انجن — درمیان میں کوئی فریم ورک نہیں۔",
    tech_arch_h:"تہیں آپس میں کیسے بات کرتی ہیں",
    tech_arch_js_h:"فرنٹ اینڈ", tech_arch_js_p:"HTML + CSS + JavaScript — فارمز، اسٹائلنگ، اور زبان کی تبدیلی۔",
    tech_arch_rust_h:"پرائسنگ انجن", tech_arch_rust_p:"Rust کمپائل شدہ WebAssembly میں — حجمی وزن، درجہ بندی شدہ نرخ، انشورنس۔",
    tech_arch_cpp_h:"ٹریکنگ انجن", tech_arch_cpp_p:"فری اسٹینڈنگ C++ (بغیر لائبریری) WebAssembly میں کمپائل — ہیش فنکشن جو شپمنٹ کی حالت طے کرتا ہے۔",
    tech_bench_h:"لائیو اسپیڈ ٹیسٹ", tech_bench_p:"ابھی موازنہ چلائیں اور اپنے براؤزر میں WebAssembly اور JavaScript کے درمیان حقیقی فرق دیکھیں۔",
    tech_bench_run:"بینچ مارک چلائیں", tech_bench_running:"پیمائش ہو رہی ہے...",
    tech_bench_wasm:"WebAssembly", tech_bench_js:"JavaScript",
    tech_bench_iterations:"آپریشنز", tech_bench_faster:"زیادہ تیز بذریعہ",
    tech_code_h:"اصل کوڈ دیکھیں",
    tech_code_p:"یہ وہی کوڈ ہے جو اس وقت اس صفحے پر کمپائل اور لائیو چل رہا ہے — بغیر کسی تبدیلی کے۔",
    tech_code_rust_tab:"پرائسنگ انجن (Rust)", tech_code_cpp_tab:"ٹریکنگ انجن (++C)",
    tech_why_h:"Rust اور ++C ہی کیوں؟",
    tech_why1_h:"میموری کی حفاظت", tech_why1_p:"Rust کمپائل کے وقت عام میموری بگز کو روکتا ہے — ایک ایسے انجن میں اہم جو حقیقی رقم کا حساب لگاتا ہے۔",
    tech_why2_h:"چھوٹا سائز", tech_why2_p:"فری اسٹینڈنگ C++ ماڈیول کا سائز 1 کلوبائٹ سے بھی کم ہے — فوری لوڈنگ۔",
    tech_why3_h:"قریب مقامی رفتار", tech_why3_p:"WebAssembly تقریباً مقامی رفتار سے چلتا ہے، بھاری حساب کتاب کے لیے JavaScript سے کہیں زیادہ تیز۔",
    tech_why4_h:"ہمیشہ ایک جیسا نتیجہ", tech_why4_p:"100% متعین حساب — وہی ان پٹ ہمیشہ وہی قیمت دیتا ہے، کوئی حیرانی نہیں۔",
    tech_cta_h:"خود انجن آزمائیں",
    tech_cta_p:"ایک حقیقی شپمنٹ کی قیمت معلوم کریں یا شپمنٹ ٹریک کریں، اور Rust اور C++ کو لائیو چلتا دیکھیں۔",
    tech_cta_calc:"کیلکولیٹر آزمائیں", tech_cta_track:"ٹریکنگ آزمائیں",
    tech_engine_badge:"⚡ WebAssembly سے تقویت یافتہ",
    tech_engine_badge_js:"🟡 JavaScript فال بیک موڈ",

    tech_eyebrow:"مسار کیسے بنایا گیا", tech_h1:"حقیقی کوڈ، مارکیٹنگ کا دھوکہ نہیں",
    tech_lede:"پرائسنگ انجن Rust میں لکھا گیا ہے، اور ٹریکنگ انجن ++C میں — دونوں براہ راست WebAssembly میں کمپائل ہیں اور ابھی آپ کے براؤزر میں چل رہے ہیں، بغیر کسی بیک اینڈ سرور کے۔",
    tech_arch_h2:"ڈیٹا کیسے بہتا ہے", tech_arch_p:"سائٹ کے انٹرفیس سے، ایک کمپائل شدہ انجن میں، اور نتیجے کے ساتھ واپس — سیکنڈ کے ایک حصے میں۔",
    arch_node_browser:"آپ کا براؤزر", arch_node_browser_sub:"HTML + CSS + JavaScript",
    arch_node_rust:"Rust", arch_node_rust_sub:"پرائسنگ انجن",
    arch_node_cpp:"++C", arch_node_cpp_sub:"ٹریکنگ انجن",
    arch_node_wasm:"WebAssembly", arch_node_wasm_sub:"تقریباً مقامی رفتار پر چلتا ہے",
    tech_code_h2:"حقیقی کوڈ دیکھیں", tech_code_p:"کوئی نمائشی سلائیڈ نہیں — یہی کوڈ ابھی آپ کے براؤزر میں چل رہا ہے۔",
    tab_rust:"Rust — پرائسنگ انجن", tab_cpp:"C++ — ٹریکنگ انجن",
    tech_demo_h2:"انجن لائیو آزمائیں", tech_demo_p:"بٹن دبائیں اور دیکھیں نتائج آپ کے براؤزر میں حقیقی طور پر، بغیر کسی سرور کے، شمار ہوتے ہیں۔",
    demo_btn_price:"Rust انجن چلائیں", demo_btn_track:"C++ انجن چلائیں",
    demo_price_label:"Rust کے ذریعے 1×60×50×40 سینٹی میٹر وزن:", demo_track_label:"++C کے ذریعے MS-774213-SA کا ہیش:",
    tech_stack_h2:"سائٹ کی تکنیکی تہیں",
    stack1_h:"فرنٹ اینڈ", stack1_p:"خالص HTML5، CSS3 اور JavaScript — بغیر کسی فریم ورک کے۔",
    stack2_h:"پرائسنگ انجن", stack2_p:"Rust جو rustc کے ذریعے wasm32-unknown-unknown میں کمپائل ہوتا ہے، براہ راست WebAssembly ماڈیول کے طور پر لوڈ ہوتا ہے۔",
    stack3_h:"ٹریکنگ انجن", stack3_p:"آزاد (freestanding) ++C جو clang کے ذریعے براہ راست WebAssembly میں کمپائل ہوتا ہے، بغیر کسی معیاری لائبریری کے۔",
    stack4_h:"اسٹوریج اور اسٹیٹ", stack4_p:"تمام اسٹیٹ براؤزر میں رہتی ہے — کوئی ڈیٹا بیس یا بیک اینڈ سرور نہیں۔",
  }
};

function masarGetLang(){
  return localStorage.getItem('masar_lang') || 'ar';
}

function masarApplyLang(lang){
  const dict = MASAR_DICT[lang] || MASAR_DICT.ar;
  document.documentElement.lang = lang;
  document.documentElement.dir = dict.dir;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const key = el.getAttribute('data-i18n-ph');
    if(dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });
  document.querySelectorAll('.lang-switch button').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  localStorage.setItem('masar_lang', lang);
  window.dispatchEvent(new CustomEvent('masar:langchange', { detail:{ lang, dict } }));
}

function masarInitLang(){
  const lang = masarGetLang();
  masarApplyLang(lang);
  document.querySelectorAll('.lang-switch button').forEach(btn=>{
    btn.addEventListener('click', ()=> masarApplyLang(btn.dataset.lang));
  });
}

/* ---------- shared nav / burger / faq wiring ---------- */
function masarWireNav(){
  const burger = document.querySelector('.burger');
  const links = document.querySelector('.nav-links');
  if(burger && links){
    burger.addEventListener('click', ()=>{
      links.classList.toggle('open');
      burger.setAttribute('aria-expanded', links.classList.contains('open'));
    });
    links.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> links.classList.remove('open')));
  }
}

function masarWireFaq(){
  document.querySelectorAll('.faq-item').forEach(item=>{
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    if(!q || !a) return;
    q.addEventListener('click', ()=>{
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o=>{
        if(o!==item){ o.classList.remove('open'); o.querySelector('.faq-a').style.maxHeight = null; }
      });
      item.classList.toggle('open', !isOpen);
      a.style.maxHeight = !isOpen ? a.scrollHeight + 'px' : null;
    });
  });
}

function masarToast(msg){
  let t = document.querySelector('.toast');
  if(!t){
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window._masarToastTimer);
  window._masarToastTimer = setTimeout(()=> t.classList.remove('show'), 3200);
}

document.addEventListener('DOMContentLoaded', ()=>{
  masarInitLang();
  masarWireNav();
  masarWireFaq();
});
