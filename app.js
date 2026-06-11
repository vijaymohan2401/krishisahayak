/* ==========================================
   KRISHISAHAYAK INTERACTIVE JAVASCRIPT LOGIC
   ========================================== */

// 1. MOCK DATA
const facilitiesData = [
  {
    id: 1,
    name: "Kalyanpur Agri-Dealers",
    category: "seeds",
    address: "12 Main Bazaar, Faridabad, Haryana - 121002",
    phone: "+91 98765 43210",
    timings: "9:00 AM - 7:00 PM",
    lat: 28.412,
    lng: 77.315,
    rating: 4.7,
    isGov: true,
    reviews: [
      { author: "Sohan Lal", rating: 5, text: "Excellent quality wheat seeds! High germination rate." },
      { author: "Rajesh Kumar", rating: 4, text: "Reliable store. They accept government subsidy cards." }
    ],
    inventory: [
      { item: "HD 2967 Wheat Seeds", price: "₹1,450 / 40kg bag", status: "In Stock" },
      { item: "Pusa Basmati Paddy Seeds", price: "₹2,100 / 25kg bag", status: "In Stock" },
      { item: "Organic Compost Fertilizer", price: "₹450 / 50kg bag", status: "Low Stock" },
      { item: "Hybrid Maize Seeds", price: "₹800 / 10kg bag", status: "In Stock" }
    ]
  },
  {
    id: 2,
    name: "Kisan Fertilizer & Pest Control Clinic",
    category: "pesticides",
    address: "Opposite Grain Market, Sector 12, Faridabad",
    phone: "+91 94160 12345",
    timings: "8:30 AM - 8:00 PM",
    lat: 28.405,
    lng: 77.330,
    rating: 4.5,
    isGov: false,
    reviews: [
      { author: "Mahender Singh", rating: 5, text: "Great advice on pest management. Saved my tomato crops!" },
      { author: "Vijay Yadav", rating: 4, text: "Good stock of chemical and bio-pesticides." }
    ],
    inventory: [
      { item: "Neem Oil Bio-Pesticide (1L)", price: "₹380", status: "In Stock" },
      { item: "NPK 19:19:19 Fertilizer", price: "₹950 / 50kg bag", status: "In Stock" },
      { item: "Chlorpyriphos 20% EC (500ml)", price: "₹260", status: "In Stock" },
      { item: "Copper Oxychloride (500g)", price: "₹320", status: "Low Stock" }
    ]
  },
  {
    id: 3,
    name: "Hari Singh Organic Seed Hub",
    category: "seeds",
    address: "Ballabgarh Crossing, Faridabad",
    phone: "+91 99999 88888",
    timings: "9:00 AM - 6:30 PM",
    lat: 28.420,
    lng: 77.308,
    rating: 4.8,
    isGov: false,
    reviews: [
      { author: "Dharamvir", rating: 5, text: "Best place for pure organic seeds. Reasonable prices." }
    ],
    inventory: [
      { item: "Desi Organic Wheat Seeds", price: "₹1,600 / 40kg bag", status: "In Stock" },
      { item: "Organic Mustard Seeds", price: "₹250 / kg", status: "In Stock" },
      { item: "Vermicompost Pack", price: "₹300 / 25kg", status: "In Stock" }
    ]
  },
  {
    id: 4,
    name: "FarmEquip Machinery Rentals",
    category: "machinery",
    address: "NH-2 Bypass Road, Sector 31, Faridabad",
    phone: "+91 88888 77777",
    timings: "7:00 AM - 8:00 PM",
    lat: 28.395,
    lng: 77.310,
    rating: 4.6,
    isGov: true,
    reviews: [
      { author: "Satish Pal", rating: 5, text: "Tractor rental service is excellent. Operators are well trained." },
      { author: "Jagdish", rating: 4, text: "Affordable seed drills available on time." }
    ],
    inventory: [
      { item: "Mahindra 45HP Tractor Rental", price: "₹600 / hour (with fuel)", status: "Available" },
      { item: "Happy Seeder Machine", price: "₹1,200 / day", status: "Rented Out" },
      { item: "Laser Land Leveler", price: "₹1,500 / day", status: "Available" },
      { item: "Power Tiller / Rotavator", price: "₹800 / day", status: "Available" }
    ]
  },
  {
    id: 5,
    name: "Faridabad Soil & Water Testing Center",
    category: "testing",
    address: "Govt Agriculture Department Complex, Sector 15, Faridabad",
    phone: "+91 129 2224444",
    timings: "9:30 AM - 5:00 PM (Sat/Sun Closed)",
    lat: 28.425,
    lng: 77.325,
    rating: 4.2,
    isGov: true,
    reviews: [
      { author: "Rameshwar", rating: 4, text: "Government center. Takes 5 days for soil card, but reports are extremely detailed." }
    ],
    inventory: [
      { item: "Soil NPK & pH Profiling", price: "₹50 (With Gov Soil Card)", status: "Ready" },
      { item: "Water Salinity Analysis", price: "₹30", status: "Ready" },
      { item: "Micronutrient Audit", price: "₹100", status: "Ready" }
    ]
  },
  {
    id: 6,
    name: "Golden Harvest Cold Storage & Warehouse",
    category: "storage",
    address: "Industrial Area Phase 2, Faridabad",
    phone: "+91 77777 66666",
    timings: "24 Hours Open",
    lat: 28.380,
    lng: 77.300,
    rating: 4.4,
    isGov: false,
    reviews: [
      { author: "Bhup Singh", rating: 5, text: "Huge cold storage facility. Reliable temperature tracking for potatoes and apples." }
    ],
    inventory: [
      { item: "Potato Cold Space Rental", price: "₹80 / bag / month", status: "Available Space" },
      { item: "Dry Grain Grain Warehouse", price: "₹40 / bag / month", status: "Available Space" },
      { item: "Fruit Temperature Controlled Pods", price: "₹120 / crate / month", status: "Low Space" }
    ]
  },
  {
    id: 7,
    name: "Kisan Sewa Kendra (Govt Depot)",
    category: "pesticides",
    address: "Block Office, Ballabgarh, Faridabad",
    phone: "+91 129 2244332",
    timings: "9:00 AM - 5:00 PM",
    lat: 28.375,
    lng: 77.330,
    rating: 4.3,
    isGov: true,
    reviews: [
      { author: "Hawa Singh", rating: 4, text: "Gets crowded but urea and DAP prices are strictly government regulated (no black marketing)." }
    ],
    inventory: [
      { item: "Neem Coated Urea (Govt)", price: "₹266.50 / 45kg bag", status: "In Stock" },
      { item: "DAP Fertilizer (Govt)", price: "₹1,350 / 50kg bag", status: "In Stock" },
      { item: "MOP Fertilizer (Govt)", price: "₹1,700 / 50kg bag", status: "Low Stock" }
    ]
  },
  {
    id: 8,
    name: "Dr. Sharma's Krishi Vigyan Expert Center",
    category: "experts",
    address: "Agro Sciences Department, Sector 16, Faridabad",
    phone: "+91 98123 45678",
    timings: "10:00 AM - 4:00 PM",
    lat: 28.415,
    lng: 77.340,
    rating: 4.9,
    isGov: true,
    reviews: [
      { author: "Om Prakash", rating: 5, text: "Consulted Dr. Sharma for crop rotation strategy. Very knowledgeable guidance!" }
    ],
    inventory: [
      { item: "Crop Disease Diagnosis Consultation", price: "Free", status: "Available" },
      { item: "Subsidized Farming Business Plan Audit", price: "Free", status: "Available" }
    ]
  }
];

const mandiPricesData = [
  { crop: "Wheat (HD-2967)", market: "Faridabad Main", min: 2280, max: 2420, modal: 2350, trend: "up" },
  { crop: "Paddy (Basmati)", market: "Palwal Grain", min: 4100, max: 4350, modal: 4200, trend: "up" },
  { crop: "Mustard Seeds", market: "Faridabad Main", min: 5100, max: 5500, modal: 5300, trend: "down" },
  { crop: "Potato (Desi)", market: "Ballabgarh Sub", min: 1000, max: 1300, modal: 1150, trend: "down" },
  { crop: "Onion (Red)", market: "Faridabad Main", min: 1400, max: 1800, modal: 1600, trend: "up" },
  { crop: "Tomato (Hybrid)", market: "Ballabgarh Sub", min: 800, max: 1200, modal: 1050, trend: "up" },
  { crop: "Cotton (Bt)", market: "Palwal Grain", min: 6900, max: 7400, modal: 7200, trend: "up" },
  { crop: "Maize (Yellow)", market: "Nuh Mandi", min: 1950, max: 2150, modal: 2050, trend: "down" },
  { crop: "Soybean", market: "Nuh Mandi", min: 4200, max: 4500, modal: 4350, trend: "up" }
];

// 2. DICTIONARY FOR TRANSLATIONS (i18n)
const translations = {
  en: {
    helpline: "Agri Helpline",
    textSize: "Text Size",
    tagline: "Empowering Farmers, Enriching Lives",
    navDashboard: "Dashboard",
    navFinder: "Find Facilities",
    navMandi: "Mandi Prices",
    navCommunity: "Community Portal",
    mandiTicker: "Mandi Live Price:",
    welcome: "Welcome to KrishiSahayak",
    heroDescription: "Access verified agro-dealers, equipment rental, seed suppliers, testing labs, and real-time support in your local language.",
    search: "Search",
    weatherTitle: "Weather & Farming Advisory",
    advisoryHeadline: "Good Sowing Conditions",
    schemesTitle: "Active Govt Schemes & Subsidies",
    schemeNew: "New",
    schemeActive: "Active",
    viewDetails: "Details",
    categoriesHeading: "What facility are you looking for?",
    catSeeds: "Seeds & Crops",
    descSeeds: "Certified high-yielding seeds (HYV), wheat, rice, pulses, and organic suppliers.",
    findNow: "Find Now",
    catPesticides: "Pesticides & Fertilizers",
    descPesticides: "Bio-pesticides, organic compost, urea, NPK fertilizers, and insect repellents.",
    catMachinery: "Machinery & Rentals",
    descMachinery: "Tractor leasing, seed drills, harvesters, rotavators, and pump rental hubs.",
    catTesting: "Soil Testing Labs",
    descTesting: "Government-certified labs for soil health report cards and pH testing.",
    catStorage: "Cold Storage",
    descStorage: "Cold storage facilities and grain warehouses to store your harvest safely.",
    catExperts: "Agri Experts",
    descExperts: "Consult with local government officers, veterinary docs, and crop scientists.",
    farmingTipTitle: "Expert Farming Tip of the Day",
    readMoreTips: "Read Agri-Blogs",
    filterCategory: "Category",
    filterDistance: "Distance (Radius)",
    filterOpenNow: "Open Now",
    filterGovSubsidy: "Govt Subsidized",
    resetFilters: "Reset Filters",
    recenterMap: "Recenter My Location",
    mandiTitleFull: "Mandi (Agricultural Market) Prices",
    mandiSubtitle: "Compare wholesale crop prices across different regional markets. Updated hourly.",
    selectRegion: "Select Market/Region",
    searchCrop: "Search Crop",
    tblCropName: "Crop Name",
    tblMarket: "Mandi Market",
    tblMinPrice: "Min Price",
    tblMaxPrice: "Max Price",
    tblAvgPrice: "Modal/Average",
    tblTrend: "Daily Trend",
    mandiChartTitle: "Weekly Price Trends (Top Grains)",
    communityTitle: "Farmer's Support Forum",
    communitySubtitle: "Ask questions, request help, and share suggestions with regional farmers and certified agents.",
    askQuestion: "Ask a Question",
    tabAllQueries: "All Queries",
    tabSeeds: "Seeds & Crops",
    tabPests: "Pesticides",
    tabMachinery: "Rentals",
    advisoriesHeading: "Pest Alerts & Advisories",
    expertConsultTitle: "Free Expert Consultation",
    expertConsultDesc: "Receive free advisory calls from Krishi Vigyan Kendra (KVK) scientists on soil treatment.",
    callScientistBtn: "Call a Scientist Now",
    modalContactTitle: "Contact & Location",
    govSubsidyEligible: "Government Subsidy Accepted",
    callDealer: "Call Dealer",
    chatWhatsapp: "WhatsApp",
    ratingsAndReviews: "Ratings & Reviews",
    yourRatingPrompt: "Add your rating for this facility:",
    askQuestionTitle: "Post a Farmer Query",
    askQuestionDesc: "Your post will be shared with verified dealers, experts, and nearby farmers.",
    queryCategoryLabel: "Topic / Category",
    queryLocationLabel: "Your Location",
    queryTextLabel: "Describe your problem/request",
    submitQueryBtn: "Submit Query",
    addAnswerTitle: "Add Answer / Response",
    answerAuthorLabel: "Your Name / Business",
    answerRoleLabel: "Are you a Dealer, Expert or Farmer?",
    answerTextLabel: "Your Answer",
    submitAnswerBtn: "Submit Answer",
    optAll: "All Facilities",
    optSeeds: "Seeds & Crops",
    optPesticides: "Pesticides & Fertilizers",
    optMachinery: "Machinery & Rentals",
    optTesting: "Soil Testing Labs",
    optStorage: "Cold Storage",
    optExperts: "Agri Experts",
    optOther: "Other Facilities",
    roleFarmer: "Farmer",
    roleDealer: "Dealer / Vendor",
    roleExpert: "Agri Expert",
    tblProduct: "Item / Brand",
    tblPrice: "Price",
    tblStock: "Status"
  },
  hi: {
    helpline: "कृषि हेल्पलाइन",
    textSize: "अक्षर का आकार",
    tagline: "किसानों का सशक्तिकरण, जीवन की समृद्धि",
    navDashboard: "डैशबोर्ड",
    navFinder: "सुविधाएं खोजें",
    navMandi: "मंडी भाव",
    navCommunity: "किसान चौपाल (फोरम)",
    mandiTicker: "मंडी लाइव भाव:",
    welcome: "कृषिसहायक में आपका स्वागत है",
    heroDescription: "अपनी स्थानीय भाषा में सत्यापित कृषि-विक्रेताओं, उपकरण किराए पर लेने की दुकानों, बीज आपूर्तिकर्ताओं और मिट्टी परीक्षण प्रयोगशालाओं की खोज करें।",
    search: "खोजें",
    weatherTitle: "मौसम और कृषि सलाह",
    advisoryHeadline: "बुवाई के लिए अनुकूल परिस्थितियां",
    schemesTitle: "सक्रिय सरकारी योजनाएं और सब्सिडी",
    schemeNew: "नया",
    schemeActive: "सक्रिय",
    viewDetails: "विवरण",
    categoriesHeading: "आप किस सुविधा की तलाश कर रहे हैं?",
    catSeeds: "बीज और फसलें",
    descSeeds: "सत्यापित उच्च उपज वाले बीज (HYV), गेहूं, धान, दालें और जैविक बीज विक्रेता।",
    findNow: "अभी खोजें",
    catPesticides: "कीटनाशक और उर्वरक",
    descPesticides: "जैविक कीटनाशक, जैविक खाद, यूरिया, एनपीके उर्वरक और फसल कीट निवारक।",
    catMachinery: "मशीनरी और किराए पर",
    descMachinery: "ट्रैक्टर लीजिंग, हैप्पी सीडर, थ्रेशर और सिंचाई पंप किराया केंद्र।",
    catTesting: "मिट्टी परीक्षण केंद्र",
    descTesting: "मिट्टी की सेहत रिपोर्ट और पीएच मान की जांच करने वाली सरकारी प्रमाणित प्रयोगशालाएं।",
    catStorage: "कोल्ड स्टोरेज (शीतगृह)",
    descStorage: "आपकी फसल को सुरक्षित रखने के लिए कोल्ड स्टोरेज और अनाज गोदाम।",
    catExperts: "कृषि विशेषज्ञ",
    descExperts: "स्थानीय सरकारी अधिकारियों, पशु चिकित्सकों और फसल वैज्ञानिकों से मुफ्त सलाह।",
    farmingTipTitle: "आज की विशेष कृषि सलाह",
    readMoreTips: "कृषि ब्लॉग पढ़ें",
    filterCategory: "श्रेणी",
    filterDistance: "दूरी (दायरा)",
    filterOpenNow: "अभी खुला है",
    filterGovSubsidy: "सरकारी सब्सिडी स्वीकृत",
    resetFilters: "फ़िल्टर हटाएं",
    recenterMap: "मेरी स्थिति को पुनः केंद्रित करें",
    mandiTitleFull: "दैनिक मंडी बाजार भाव",
    mandiSubtitle: "अलग-अलग मंडियों के थोक भावों की आपस में तुलना करें। हर घंटे अपडेट किए जाते हैं।",
    selectRegion: "मंडी/क्षेत्र चुनें",
    searchCrop: "फसल खोजें",
    tblCropName: "फसल का नाम",
    tblMarket: "मंडी बाजार",
    tblMinPrice: "न्यूनतम मूल्य",
    tblMaxPrice: "अधिकतम मूल्य",
    tblAvgPrice: "औसत मूल्य",
    tblTrend: "दैनिक उतार-चढ़ाव",
    mandiChartTitle: "साप्ताहिक मूल्य रुझान (मुख्य अनाज)",
    communityTitle: "किसान सहायता चौपाल",
    communitySubtitle: "सवाल पूछें, मदद मांगें और पास के किसानों और विशेषज्ञों से सलाह साझा करें।",
    askQuestion: "सवाल पूछें",
    tabAllQueries: "सभी सवाल",
    tabSeeds: "बीज और फसलें",
    tabPests: "कीटनाशक",
    tabMachinery: "किराया",
    advisoriesHeading: "कीट चेतावनी और सलाह",
    expertConsultTitle: "मुफ्त विशेषज्ञ परामर्श",
    expertConsultDesc: "कृषि विज्ञान केंद्र (KVK) के वैज्ञानिकों से मिट्टी के उपचार पर मुफ्त सलाह कॉल प्राप्त करें।",
    callScientistBtn: "अभी वैज्ञानिक को कॉल करें",
    modalContactTitle: "संपर्क और स्थान",
    govSubsidyEligible: "सरकारी सब्सिडी स्वीकार की जाती है",
    callDealer: "डीलर को कॉल करें",
    chatWhatsapp: "व्हाट्सएप चैट",
    ratingsAndReviews: "रेटिंग और समीक्षाएं",
    yourRatingPrompt: "इस स्टोर के लिए अपनी रेटिंग दें:",
    askQuestionTitle: "किसान का प्रश्न दर्ज करें",
    askQuestionDesc: "आपका प्रश्न पंजीकृत डीलरों, वैज्ञानिकों और नजदीकी किसानों के साथ साझा किया जाएगा।",
    queryCategoryLabel: "विषय / श्रेणी",
    queryLocationLabel: "आपका स्थान",
    queryTextLabel: "अपनी समस्या का विवरण दें",
    submitQueryBtn: "प्रश्न दर्ज करें",
    addAnswerTitle: "जवाब / प्रतिक्रिया दें",
    answerAuthorLabel: "आपका नाम / व्यवसाय",
    answerRoleLabel: "क्या आप एक डीलर, विशेषज्ञ या किसान हैं?",
    answerTextLabel: "आपका उत्तर",
    submitAnswerBtn: "उत्तर दर्ज करें",
    optAll: "सभी सुविधाएं",
    optSeeds: "बीज और फसलें",
    optPesticides: "कीटनाशक और उर्वरक",
    optMachinery: "मशीनरी और किराए पर",
    optTesting: "मिट्टी परीक्षण केंद्र",
    optStorage: "कोल्ड स्टोरेज (शीतगृह)",
    optExperts: "कृषि विशेषज्ञ",
    optOther: "अन्य सुविधाएं",
    roleFarmer: "किसान",
    roleDealer: "डीलर / विक्रेता",
    roleExpert: "कृषि विशेषज्ञ",
    tblProduct: "सामग्री / ब्रांड",
    tblPrice: "कीमत",
    tblStock: "उपलब्धता"
  },
  es: {
    helpline: "Línea de Ayuda",
    textSize: "Tamaño de Letra",
    tagline: "Empoderando Agricultores, Enriqueciendo Vidas",
    navDashboard: "Panel",
    navFinder: "Buscar Servicios",
    navMandi: "Precios de Mercado",
    navCommunity: "Foro Comunitario",
    mandiTicker: "Precio en vivo:",
    welcome: "Bienvenido a KrishiSahayak",
    heroDescription: "Acceda a distribuidores agrícolas verificados, alquiler de maquinaria, proveedores de semillas y laboratorios de suelo en su propio idioma.",
    search: "Buscar",
    weatherTitle: "Clima y Asesoría Agrícola",
    advisoryHeadline: "Buenas Condiciones de Siembra",
    schemesTitle: "Subsidios y Planes del Gobierno",
    schemeNew: "Nuevo",
    schemeActive: "Activo",
    viewDetails: "Detalles",
    categoriesHeading: "¿Qué instalación está buscando?",
    catSeeds: "Semillas y Cultivos",
    descSeeds: "Semillas de alto rendimiento certificadas (HYV), trigo, arroz, legumbres y proveedores orgánicos.",
    findNow: "Buscar Ahora",
    catPesticides: "Pesticidas y Fertilizantes",
    descPesticides: "Biopesticidas, compost orgánico, urea, fertilizantes NPK y repelentes de insectos.",
    catMachinery: "Maquinaria y Alquileres",
    descMachinery: "Arrendamiento de tractores, sembradoras, cosechadoras y bombas de riego.",
    catTesting: "Laboratorio de Suelo",
    descTesting: "Laboratorios certificados para tarjetas de salud del suelo y pruebas de pH.",
    catStorage: "Almacenamiento en Frío",
    descStorage: "Almacenes refrigerados para guardar su cosecha de manera segura.",
    catExperts: "Expertos Agrícolas",
    descExperts: "Consulte con oficiales del gobierno, veterinarios y científicos agrícolas.",
    farmingTipTitle: "Consejo Agrícola del Día",
    readMoreTips: "Leer Blogs Agrícolas",
    filterCategory: "Categoría",
    filterDistance: "Distancia (Radio)",
    filterOpenNow: "Abierto Ahora",
    filterGovSubsidy: "Subsidio de Gobierno",
    resetFilters: "Restablecer Filtros",
    recenterMap: "Recenetrar mi ubicación",
    mandiTitleFull: "Precios del Mercado Agrícola (Mandi)",
    mandiSubtitle: "Compare los precios mayoristas en diferentes mercados regionales. Actualizado cada hora.",
    selectRegion: "Seleccionar Región",
    searchCrop: "Buscar Cultivo",
    tblCropName: "Nombre del Cultivo",
    tblMarket: "Mercado Mandi",
    tblMinPrice: "Precio Mín",
    tblMaxPrice: "Precio Máx",
    tblAvgPrice: "Promedio",
    tblTrend: "Tendencia",
    mandiChartTitle: "Tendencia Semanal (Granos Principales)",
    communityTitle: "Foro de Apoyo para Agricultores",
    communitySubtitle: "Haga preguntas, solicite ayuda y comparta sugerencias con agricultores locales y expertos.",
    askQuestion: "Hacer Pregunta",
    tabAllQueries: "Todas las Consultas",
    tabSeeds: "Semillas y Cultivos",
    tabPests: "Pesticidas",
    tabMachinery: "Alquileres",
    advisoriesHeading: "Alertas de Plagas",
    expertConsultTitle: "Consulta Profesional Gratis",
    expertConsultDesc: "Reciba llamadas de asesoría técnica gratuita de científicos sobre el tratamiento del suelo.",
    callScientistBtn: "Llamar a un Científico Ahora",
    modalContactTitle: "Contacto y Ubicación",
    govSubsidyEligible: "Se Acepta Subsidio Gubernamental",
    callDealer: "Llamar Distribuidor",
    chatWhatsapp: "WhatsApp",
    ratingsAndReviews: "Calificaciones y Reseñas",
    yourRatingPrompt: "Añade tu calificación:",
    askQuestionTitle: "Publicar una Consulta",
    askQuestionDesc: "Su publicación será compartida con distribuidores, expertos y agricultores cercanos.",
    queryCategoryLabel: "Tema / Categoría",
    queryLocationLabel: "Su Ubicación",
    queryTextLabel: "Describa su problema",
    submitQueryBtn: "Enviar Consulta",
    addAnswerTitle: "Añadir Respuesta",
    answerAuthorLabel: "Su Nombre / Negocio",
    answerRoleLabel: "¿Es comerciante, experto o agricultor?",
    answerTextLabel: "Su Respuesta",
    submitAnswerBtn: "Enviar Respuesta",
    optAll: "Todos los Servicios",
    optSeeds: "Semillas y Cultivos",
    optPesticides: "Pesticidas y Fertilizantes",
    optMachinery: "Maquinaria y Alquileres",
    optTesting: "Laboratorio de Suelo",
    optStorage: "Almacenamiento en Frío",
    optExperts: "Expertos Agrícolas",
    optOther: "Otros Servicios",
    roleFarmer: "Agricultor",
    roleDealer: "Comerciante / Vendedor",
    roleExpert: "Experto Agrícola",
    tblProduct: "Artículo / Marca",
    tblPrice: "Precio",
    tblStock: "Estado"
  }
};

// 3. APPLICATION STATE
let currentLang = 'en';
let textSizing = 'md'; // sm, md, lg
let map = null;
let markersGroup = null;
let userCoords = [28.4089, 77.3178]; // Faridabad Center coordinate
let userMarker = null;
let activeQueryForAnswerId = null;

// Initialize Forum Queries list in LocalStorage if not present
const defaultForumQueries = [
  {
    id: 101,
    author: "Rakesh Kumar",
    category: "seeds",
    location: "Kalyanpur Village",
    text: "Can someone tell me where I can buy HD-3086 wheat seeds that are subsidy certified? Most shops near me are out of stock.",
    date: "June 5, 2026",
    answers: [
      {
        author: "Kalyanpur Agri-Dealers",
        role: "dealer",
        text: "Namaste Rakesh ji! We have just received 200 bags of certified HD-3086 seed. You can visit our shop. Bring your Aadhaar card for 50% subsidy validation.",
        date: "June 5, 2026"
      }
    ]
  },
  {
    id: 102,
    author: "Harpreet Singh",
    category: "pesticides",
    location: "Sector 19 area",
    text: "My rice plants are turning yellow from the stems. Is this stem borer attack? Which pesticide is effective and where is it available?",
    date: "June 4, 2026",
    answers: [
      {
        author: "Dr. Sharma (KVK Expert)",
        role: "expert",
        text: "Yes Harpreet ji, this sounds like stem borer. You should apply Cartap Hydrochloride 4G at 10 kg/acre or spray Chlorantraniliprole 18.5 SC at 60 ml/acre. Available at Kisan Fertilizer Depot near Sector 12.",
        date: "June 4, 2026"
      }
    ]
  }
];

if (!localStorage.getItem('forumQueries')) {
  localStorage.setItem('forumQueries', JSON.stringify(defaultForumQueries));
}

// 4. MAIN INIT FUNCTION
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Setup App Navigation / SPA router
  initNavigation();
  
  // Setup accessibility events (font resizer, language, theme)
  initAccessibility();
  
  // Setup Search filters, actions and Speech Search
  initSearchAndFilters();
  
  // Initialize Leaflet Map
  initMap();
  
  // Render facilities listings based on defaults
  renderListings(facilitiesData);
  
  // Initialize Mandi Prices Data
  renderMandiPrices();
  
  // Initialize Forum
  renderForumThreads();

  // Load default translations
  translatePage('en');
  
  // Set random crop advisory weather details
  initWeatherAdvisory();
  
  // Setup modals events
  initModals();
});

// 5. VIEW ROUTER (SPA navigation)
function initNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".view-section");
  const logoBtn = document.getElementById("logo-home");
  const navToggleBtn = document.getElementById("nav-toggle-btn");
  const mainNavMenu = document.getElementById("main-navigation");

  function switchView(targetViewId) {
    sections.forEach(section => {
      if (section.id === targetViewId) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });

    navLinks.forEach(link => {
      if (link.getAttribute("data-target") === targetViewId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // If switching to finder-view, invalidate Leaflet map size to ensure it draws correctly
    if (targetViewId === "finder-view" && map) {
      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    }
  }

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const targetView = link.getAttribute("data-target");
      switchView(targetView);
      // Close mobile navigation on click
      mainNavMenu.classList.remove("show");
    });
  });

  logoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    switchView("dashboard-view");
  });

  // Mobile nav toggle
  navToggleBtn.addEventListener("click", () => {
    mainNavMenu.classList.toggle("show");
  });

  // Dashboard quick category cards routing
  const categoryCards = document.querySelectorAll(".category-card");
  categoryCards.forEach(card => {
    card.addEventListener("click", () => {
      const selectedCategory = card.getAttribute("data-category");
      
      if (selectedCategory === "experts") {
        // If expert, toggle category selection to Expert
        document.getElementById("filter-category").value = "experts";
      } else if (selectedCategory === "seeds") {
        document.getElementById("filter-category").value = "seeds";
      } else if (selectedCategory === "pesticides") {
        document.getElementById("filter-category").value = "pesticides";
      } else if (selectedCategory === "machinery") {
        document.getElementById("filter-category").value = "machinery";
      } else if (selectedCategory === "testing") {
        document.getElementById("filter-category").value = "testing";
      } else if (selectedCategory === "storage") {
        document.getElementById("filter-category").value = "storage";
      }

      // Trigger filters
      applyFilters();
      switchView("finder-view");
    });
  });

  // Hero Quick Search
  const heroSearchInput = document.getElementById("hero-search-input");
  const heroSearchBtn = document.getElementById("hero-search-btn");

  function triggerHeroSearch() {
    const text = heroSearchInput.value.trim();
    if (text) {
      document.getElementById("facility-search-input").value = text;
      document.getElementById("filter-category").value = "all";
      applyFilters();
      switchView("finder-view");
      heroSearchInput.value = "";
    }
  }

  heroSearchBtn.addEventListener("click", triggerHeroSearch);
  heroSearchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") triggerHeroSearch();
  });
}

// 6. ACCESSIBILITY CONTROLS
function initAccessibility() {
  const body = document.body;
  const btnSm = document.getElementById("btn-text-sm");
  const btnMd = document.getElementById("btn-text-md");
  const btnLg = document.getElementById("btn-text-lg");
  const langSelect = document.getElementById("lang-select");
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const themeIconDark = document.querySelector(".theme-icon-dark");
  const themeIconLight = document.querySelector(".theme-icon-light");

  // Text Sizing
  function setTextSize(size) {
    body.className = body.className.replace(/\bfont-size-\S+/g, '');
    body.classList.add(`font-size-${size}`);
    
    [btnSm, btnMd, btnLg].forEach(btn => btn.classList.remove("active"));
    if (size === 'sm') btnSm.classList.add("active");
    if (size === 'md') btnMd.classList.add("active");
    if (size === 'lg') btnLg.classList.add("active");
    
    textSizing = size;
  }

  btnSm.addEventListener("click", () => setTextSize('sm'));
  btnMd.addEventListener("click", () => setTextSize('md'));
  btnLg.addEventListener("click", () => setTextSize('lg'));

  // Language translation selector
  langSelect.addEventListener("change", (e) => {
    currentLang = e.target.value;
    translatePage(currentLang);
    // Refresh weather & tips on lang switch
    initWeatherAdvisory();
  });

  // Dark/Light Theme Selector
  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    
    if (newTheme === "dark") {
      themeIconDark.classList.add("hidden");
      themeIconLight.classList.remove("hidden");
    } else {
      themeIconDark.classList.remove("hidden");
      themeIconLight.classList.add("hidden");
    }
    showToast(newTheme === "dark" ? "Dark Mode enabled" : "Light Mode enabled");
  });
}

// 7. TRANSLATION ENGINE (i18n)
function translatePage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update input placeholders
  const searchInput = document.getElementById("facility-search-input");
  const heroSearchInput = document.getElementById("hero-search-input");
  const querySearchInput = document.getElementById("mandi-search-input");
  
  if (lang === 'hi') {
    searchInput.placeholder = "सुविधाएं, बीज भंडार, कीटनाशक दुकान खोजें...";
    heroSearchInput.placeholder = "बीज, कीटनाशक, शीतगृह (कोल्ड स्टोरेज) खोजें...";
    querySearchInput.placeholder = "उदा. गेहूं, सरसों...";
  } else if (lang === 'es') {
    searchInput.placeholder = "Buscar servicios, tiendas, laboratorios...";
    heroSearchInput.placeholder = "Buscar semillas, pesticidas, almacenes...";
    querySearchInput.placeholder = "ej. Trigo, Papa...";
  } else {
    searchInput.placeholder = "Search facilities, shops, labs...";
    heroSearchInput.placeholder = "Search for seeds, pesticides, cold storage...";
    querySearchInput.placeholder = "e.g. Wheat, Potato...";
  }

  // Translate active components on maps/lists
  renderMandiPrices();
  renderForumThreads();
  applyFilters();
}

// 8. MAP INITIALIZATION (Leaflet.js)
function initMap() {
  // Center map around Faridabad coords
  map = L.map('map', {
    zoomControl: true
  }).setView(userCoords, 13);

  // Set beautiful OpenStreetMap Tiles with organic feel
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map);

  markersGroup = L.layerGroup().addTo(map);

  // Add User's Mock Position Marker
  const userIcon = L.divIcon({
    className: 'user-marker-icon-container',
    html: `<div class="user-position-marker"><div class="ping-circle"></div></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });

  userMarker = L.marker(userCoords, { icon: userIcon })
    .addTo(map)
    .bindPopup(`<strong>Your Farm Location</strong><br>Faridabad Region`)
    .openPopup();

  // Recenter map button
  document.getElementById("btn-recenter-map").addEventListener("click", () => {
    map.setView(userCoords, 13);
    userMarker.openPopup();
  });
}

// 9. SPEECH SEARCH CONTROLLERS (Web Speech API)
function initSearchAndFilters() {
  const voiceSearchBtn = document.getElementById("voice-search-btn");
  const searchInput = document.getElementById("facility-search-input");
  const categoryFilter = document.getElementById("filter-category");
  const radiusFilter = document.getElementById("filter-radius");
  const openFilter = document.getElementById("filter-open");
  const govFilter = document.getElementById("filter-gov");
  const btnReset = document.getElementById("btn-reset-filters");
  const voiceStatusWrap = document.getElementById("voice-status-container");
  const voiceStatusText = document.getElementById("voice-status-text");

  // Filters trigger events
  searchInput.addEventListener("input", applyFilters);
  categoryFilter.addEventListener("change", applyFilters);
  radiusFilter.addEventListener("change", applyFilters);
  openFilter.addEventListener("change", applyFilters);
  govFilter.addEventListener("change", applyFilters);
  btnReset.addEventListener("click", () => {
    searchInput.value = "";
    categoryFilter.value = "all";
    radiusFilter.value = "10";
    openFilter.checked = false;
    govFilter.checked = false;
    applyFilters();
  });

  // Speech Recognition Setup
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    
    // Set speech language matches selector
    recognition.lang = currentLang === 'hi' ? 'hi-IN' : (currentLang === 'es' ? 'es-ES' : 'en-US');

    voiceSearchBtn.addEventListener("click", () => {
      recognition.lang = currentLang === 'hi' ? 'hi-IN' : (currentLang === 'es' ? 'es-ES' : 'en-US');
      recognition.start();
    });

    recognition.onstart = () => {
      voiceStatusWrap.classList.remove("hidden");
      voiceStatusText.textContent = currentLang === 'hi' ? "सुन रहा हूँ... बीज या कीटनाशक बोलें" : (currentLang === 'es' ? "Escuchando... Hable ahora" : "Listening... Say 'seeds' or 'urea'");
      voiceSearchBtn.classList.add("active");
    };

    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript.toLowerCase().replace(/[.]/g, "");
      searchInput.value = transcript;
      voiceStatusText.textContent = `${currentLang === 'hi' ? 'सुनाई दिया' : (currentLang === 'es' ? 'Escuchado' : 'Heard')}: "${transcript}"`;
      applyFilters();
      
      setTimeout(() => {
        voiceStatusWrap.classList.add("hidden");
      }, 1500);
    };

    recognition.onerror = () => {
      voiceStatusText.textContent = currentLang === 'hi' ? "क्षमा करें, आवाज़ नहीं सुनी" : "Sorry, couldn't hear clearly";
      setTimeout(() => {
        voiceStatusWrap.classList.add("hidden");
      }, 2000);
      voiceSearchBtn.classList.remove("active");
    };

    recognition.onend = () => {
      voiceSearchBtn.classList.remove("active");
    };

  } else {
    // Hide speech search button or show alert if API not supported
    voiceSearchBtn.addEventListener("click", () => {
      showToast(currentLang === 'hi' ? "आपका ब्राउज़र वॉयस सर्च का समर्थन नहीं करता है" : "Voice search is not supported on this browser.");
    });
  }
}

// 10. FILTER FACILITIES & RENDER MAP MARKERS
function applyFilters() {
  const searchInputVal = document.getElementById("facility-search-input").value.toLowerCase();
  const categoryVal = document.getElementById("filter-category").value;
  const radiusVal = parseFloat(document.getElementById("filter-radius").value);
  const openOnly = document.getElementById("filter-open").checked;
  const govOnly = document.getElementById("filter-gov").checked;

  const filtered = facilitiesData.filter(facility => {
    // Search filter matching name, address or products
    const matchesSearch = facility.name.toLowerCase().includes(searchInputVal) || 
                          facility.address.toLowerCase().includes(searchInputVal) ||
                          facility.inventory.some(item => item.item.toLowerCase().includes(searchInputVal));
    
    // Category match
    const matchesCategory = categoryVal === 'all' || facility.category === categoryVal;
    
    // Proximity Distance Calculation (Spherical Law of Cosines for simplicity)
    const distance = getDistance(userCoords[0], userCoords[1], facility.lat, facility.lng);
    const matchesDistance = distance <= radiusVal;
    
    // Subsidy filter
    const matchesGov = !govOnly || facility.isGov;
    
    // Status filter
    const matchesStatus = !openOnly || !facility.timings.includes("Closed");

    return matchesSearch && matchesCategory && matchesDistance && matchesGov && matchesStatus;
  });

  renderListings(filtered);
  renderMapMarkers(filtered);

  // Update total matches count
  const resultsCounter = document.getElementById("results-count-text");
  if (currentLang === 'hi') {
    resultsCounter.textContent = `खोज परिणाम: ${filtered.length} कृषि सुविधाएं मिलीं`;
  } else if (currentLang === 'es') {
    resultsCounter.textContent = `Encontrados: ${filtered.length} establecimientos`;
  } else {
    resultsCounter.textContent = `Found ${filtered.length} agricultural facilities`;
  }
}

// Haversine / Spherical Law of Cosines distance calculator
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // returns distance in km
}

// Render facility listing cards
function renderListings(data) {
  const container = document.getElementById("listings-list");
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = `
      <div class="glass-card flex-row-center padding-lg margin-top-md text-muted">
        <div style="text-align: center;">
          <i data-lucide="info" style="width: 48px; height: 48px; margin-bottom: 12px; color: var(--text-muted);"></i>
          <p class="font-weight-600">${currentLang === 'hi' ? 'कोई सुविधा नहीं मिली' : (currentLang === 'es' ? 'No se encontraron resultados' : 'No facilities found matching details')}</p>
          <span style="font-size: 0.85em;">${currentLang === 'hi' ? 'कृपया अन्य फ़िल्टर जांचें' : 'Try broadening your search criteria or resetting filters.'}</span>
        </div>
      </div>
    `;
    lucide.createIcons({ attrs: { class: 'icon-sm' } });
    return;
  }

  data.forEach(facility => {
    const distance = getDistance(userCoords[0], userCoords[1], facility.lat, facility.lng).toFixed(1);
    const badgeClass = `badge-${facility.category}`;
    const badgeLabel = translations[currentLang][`opt${facility.category.charAt(0).toUpperCase() + facility.category.slice(1)}`] || facility.category;

    const card = document.createElement("div");
    card.className = `facility-card`;
    card.setAttribute("data-id", facility.id);
    
    card.innerHTML = `
      <div class="facility-card-header">
        <div>
          <span class="badge ${badgeClass}">${badgeLabel}</span>
          <h4 class="facility-name margin-top-xs">${facility.name}</h4>
        </div>
        <span class="rating-badge flex-row-align text-accent"><i data-lucide="star" class="fill-star"></i> ${facility.rating}</span>
      </div>
      <div class="facility-meta-details margin-top-xs">
        <span><i data-lucide="map-pin"></i> ${facility.address.substring(0, 38)}...</span>
        <span><i data-lucide="clock"></i> ${facility.timings}</span>
        ${facility.isGov ? `<span class="text-accent font-weight-600"><i data-lucide="badge-check"></i> ${currentLang === 'hi' ? 'सरकारी सब्सिडी स्वीकृत' : (currentLang === 'es' ? 'Subsidio Gubernamental' : 'Govt Subsidy Accepted')}</span>` : ''}
      </div>
      <span class="dist-badge">${distance} km</span>
    `;

    card.addEventListener("click", () => {
      // Highlight card active state
      document.querySelectorAll(".facility-card").forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      
      // Center map & open popup
      if (map) {
        map.setView([facility.lat, facility.lng], 14);
        // Find corresponding marker & open popup
        markersGroup.eachLayer(marker => {
          if (marker.options.facilityId === facility.id) {
            marker.openPopup();
          }
        });
      }
    });

    // Double click to open full details modal
    card.addEventListener("dblclick", () => {
      openFacilityModal(facility.id);
    });

    // Accessibility support: click button details
    const actionBtn = document.createElement("button");
    actionBtn.className = "btn btn-outline btn-sm margin-top-sm w-full";
    actionBtn.style.padding = "4px 8px";
    actionBtn.textContent = currentLang === 'hi' ? "स्टॉक और संपर्क विवरण" : (currentLang === 'es' ? "Stock y Contacto" : "Stock & Contact Details");
    actionBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openFacilityModal(facility.id);
    });
    
    card.appendChild(actionBtn);
    container.appendChild(card);
  });

  lucide.createIcons();
}

// Render dynamic map pins
function renderMapMarkers(data) {
  if (!map || !markersGroup) return;
  markersGroup.clearLayers();

  data.forEach(facility => {
    // Custom styled circular markers or divIcons representing categories
    let markerColor = 'var(--primary-color)';
    if (facility.category === 'pesticides') markerColor = 'hsl(0, 84%, 55%)';
    if (facility.category === 'machinery') markerColor = 'var(--accent-color)';
    if (facility.category === 'testing') markerColor = 'hsl(200, 80%, 45%)';
    if (facility.category === 'storage') markerColor = 'hsl(280, 70%, 50%)';
    if (facility.category === 'experts') markerColor = 'hsl(170, 70%, 42%)';

    const customMarkerIcon = L.divIcon({
      className: 'map-facility-pin-wrapper',
      html: `<div class="map-facility-pin" style="background-color: ${markerColor}; border: 2.5px solid #fff; box-shadow: 0 2px 10px rgba(0,0,0,0.3); width: 20px; height: 20px; border-radius: 50%;"></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });

    const marker = L.marker([facility.lat, facility.lng], { 
      icon: customMarkerIcon,
      facilityId: facility.id 
    });

    const popupContent = `
      <div class="map-popup-card" style="font-family: 'Inter', sans-serif;">
        <h4 style="font-size: 1.1em; font-weight: 700; margin-bottom: 4px; color: var(--primary-color); font-family: 'Outfit';">${facility.name}</h4>
        <p style="font-size: 0.85em; color: var(--text-muted); margin-bottom: 6px;">${facility.address}</p>
        <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 8px;">
          <span class="badge badge-success" style="font-size: 0.7em; padding: 2px 6px;">★ ${facility.rating}</span>
          <span style="font-size: 0.8em; font-weight: 600;">${facility.timings}</span>
        </div>
        <button onclick="window.openFacilityModal(${facility.id})" style="background-color: var(--primary-color); color: #fff; border: none; padding: 6px 12px; font-weight: 600; width: 100%; border-radius: 4px; cursor: pointer; font-size: 0.8em;">${currentLang === 'hi' ? 'स्टॉक और संपर्क' : (currentLang === 'es' ? 'Ver Detalles' : 'View Details & Stock')}</button>
      </div>
    `;

    marker.bindPopup(popupContent).addTo(markersGroup);
  });
}

// Make openFacilityModal globally accessible so leaflet popup button click works
window.openFacilityModal = openFacilityModal;

// 11. MANDI PRICES DATA RENDER
function renderMandiPrices() {
  const tbody = document.getElementById("mandi-table-body");
  const regionSelect = document.getElementById("mandi-region-select");
  const mandiSearch = document.getElementById("mandi-search-input");
  
  if (!tbody) return;
  tbody.innerHTML = "";

  const regionFilter = regionSelect ? regionSelect.value : "all";
  const searchVal = mandiSearch ? mandiSearch.value.toLowerCase() : "";

  const filteredPrices = mandiPricesData.filter(item => {
    const matchesRegion = regionFilter === 'all' || item.market.toLowerCase().includes(regionFilter);
    const matchesSearch = item.crop.toLowerCase().includes(searchVal);
    return matchesRegion && matchesSearch;
  });

  if (filteredPrices.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center;" class="text-muted">${currentLang === 'hi' ? 'कोई फसल भाव नहीं मिला' : 'No crop prices found'}</td></tr>`;
    return;
  }

  filteredPrices.forEach(item => {
    const row = document.createElement("tr");
    const isUp = item.trend === "up";
    const trendIcon = isUp ? "arrow-up-right" : "arrow-down-left";
    const trendClass = isUp ? "text-success font-weight-600" : "text-danger font-weight-600";
    const trendLabel = isUp ? "+1.4% " : "-0.8% ";

    row.innerHTML = `
      <td class="font-weight-600">${item.crop}</td>
      <td>${item.market}</td>
      <td>₹${item.min}</td>
      <td>₹${item.max}</td>
      <td class="font-weight-600 text-primary">₹${item.modal}</td>
      <td>
        <span class="${trendClass} flex-row-align" style="gap: 4px;">
          <i data-lucide="${trendIcon}" class="icon-xs"></i>
          <span>${trendLabel}</span>
        </span>
      </td>
    `;
    tbody.appendChild(row);
  });

  lucide.createIcons();
}

// Mandi Price Dashboard Filters events
const regionSelect = document.getElementById("mandi-region-select");
const mandiSearch = document.getElementById("mandi-search-input");
if (regionSelect) regionSelect.addEventListener("change", renderMandiPrices);
if (mandiSearch) mandiSearch.addEventListener("input", renderMandiPrices);

// 12. AGRI-COMMUNITY FORUM CONTROLLERS
function renderForumThreads() {
  const container = document.getElementById("forum-threads-list");
  if (!container) return;
  container.innerHTML = "";

  const queries = JSON.parse(localStorage.getItem('forumQueries')) || [];
  const activeTab = document.querySelector(".community-tabs .tab-btn.active").getAttribute("data-tab");

  const filteredQueries = queries.filter(q => activeTab === 'all' || q.category === activeTab);

  if (filteredQueries.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px;" class="text-muted">
        <i data-lucide="message-square" style="width: 48px; height: 48px; margin-bottom: 12px; opacity: 0.6;"></i>
        <p class="font-weight-600">${currentLang === 'hi' ? 'कोई प्रश्न नहीं मिला' : 'No queries found'}</p>
        <span>${currentLang === 'hi' ? 'पहला प्रश्न पूछने वाले किसान बनें!' : 'Be the first farmer to ask a question in this category!'}</span>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  // Render list of threads
  filteredQueries.forEach(query => {
    const thread = document.createElement("div");
    thread.className = "thread-card";

    let answersHTML = "";
    if (query.answers && query.answers.length > 0) {
      answersHTML = `
        <div class="answers-container">
          <h5 style="font-size: 0.8em; font-weight: 700; text-transform: uppercase; color: var(--text-muted);" data-i18n="responses">Responses:</h5>
          ${query.answers.map(ans => {
            const roleClass = ans.role;
            const roleLabel = translations[currentLang][`role${ans.role.charAt(0).toUpperCase() + ans.role.slice(1)}`] || ans.role;
            return `
              <div class="answer-item">
                <div class="answer-header">
                  <span class="thread-user">${ans.author}</span>
                  <span class="role-badge ${roleClass}">${roleLabel}</span>
                  <span style="font-size: 0.8em; color: var(--text-muted); margin-left: auto;">${ans.date}</span>
                </div>
                <p class="answer-body">${ans.text}</p>
              </div>
            `;
          }).join("")}
        </div>
      `;
    }

    thread.innerHTML = `
      <div class="thread-meta-row">
        <span class="badge badge-${query.category}">${translations[currentLang][`opt${query.category.charAt(0).toUpperCase() + query.category.slice(1)}`] || query.category}</span>
        <span class="thread-user">${query.author} • <span style="font-size: 0.95em; font-weight: 500; color: var(--text-muted);">${query.location}</span></span>
        <span>${query.date}</span>
      </div>
      <p class="thread-text">${query.text}</p>
      ${answersHTML}
      <div class="thread-actions margin-top-xs">
        <button class="btn btn-outline btn-sm btn-answer" onclick="openAnswerModal(${query.id})">
          <i data-lucide="message-square-plus" class="icon-xs"></i>
          <span>${currentLang === 'hi' ? 'जवाब दें / सलाह दें' : (currentLang === 'es' ? 'Responder' : 'Reply / Offer Help')}</span>
        </button>
      </div>
    `;

    container.appendChild(thread);
  });

  lucide.createIcons();
}

// Community tabs switcher
const forumTabs = document.querySelectorAll(".community-tabs .tab-btn");
forumTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    forumTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderForumThreads();
  });
});

// 13. WEATHER & ADVISORY SYSTEM (Dynamic simulation)
function initWeatherAdvisory() {
  const tempEl = document.getElementById("weather-temp");
  const descEl = document.getElementById("weather-desc");
  const humidityEl = document.getElementById("weather-humidity");
  const windEl = document.getElementById("weather-wind");
  const advisoryHeading = document.querySelector(".weather-alert strong");
  const advisoryText = document.getElementById("weather-advisory");

  // Select advisory based on language
  const advisories = {
    en: [
      { temp: "33°C", desc: "Partly Cloudy", hum: "Humidity: 58%", wind: "Wind: 14 km/h", title: "Optimal Spraying Day", text: "Wind speed is low and skies are clear. Perfect time for spraying pesticide on cotton/maize." },
      { temp: "28°C", desc: "Light Rain Expected", hum: "Humidity: 84%", wind: "Wind: 18 km/h", title: "Avoid Fertilizing", text: "Showers forecast in next 6 hours. Delay urea fertilizer application to prevent nutrient runoff." },
      { temp: "36°C", desc: "Sunny & Dry", hum: "Humidity: 30%", wind: "Wind: 10 km/h", title: "Irrigation Advised", text: "High soil evaporation rate. Irrigate rice and vegetable crops immediately to prevent root drying." }
    ],
    hi: [
      { temp: "33°C", desc: "आंशिक रूप से बादल", hum: "आर्द्रता: 58%", wind: "हवा: 14 किमी/घंटा", title: "कीटनाशक छिड़काव का दिन", text: "हवा की गति धीमी है और आसमान साफ है। कपास/मक्का पर कीटनाशक के छिड़काव का यह सबसे सही समय है।" },
      { temp: "28°C", desc: "हल्की बारिश की संभावना", hum: "आर्द्रता: 84%", wind: "हवा: 18 किमी/घंटा", title: "खाद न डालें", text: "अगले 6 घंटों में बारिश का अनुमान है। यूरिया खाद का छिड़काव कुछ समय के लिए रोक दें ताकि पानी में घुलकर यह बह न जाए।" },
      { temp: "36°C", desc: "तेज धूप और सूखा", hum: "आर्द्रता: 30%", wind: "हवा: 10 किमी/घंटा", title: "सिंचाई की सलाह", text: "मिट्टी में नमी तेजी से कम हो रही है। धान और सब्जियों की फसल में तुरंत पानी लगाएं।" }
    ],
    es: [
      { temp: "33°C", desc: "Parcialmente Nublado", hum: "Humedad: 58%", wind: "Viento: 14 km/h", title: "Día Óptimo de Rociado", text: "La velocidad del viento es baja. Excelente momento para aplicar pesticidas." },
      { temp: "28°C", desc: "Lluvia Ligera", hum: "Humedad: 84%", wind: "Viento: 18 km/h", title: "Evite Fertilizar", text: "Previsión de lluvia en las próximas 6 horas. Posponga la urea para evitar el lavado de nutrientes." },
      { temp: "36°C", desc: "Soleado y Seco", hum: "Humedad: 30%", wind: "Viento: 10 km/h", title: "Riego Aconsejado", text: "Alta evaporación del suelo. Riegue el arroz y las verduras inmediatamente." }
    ]
  };

  // Select a random advisory based on lang
  const list = advisories[currentLang] || advisories['en'];
  const selected = list[Math.floor(Math.random() * list.length)];

  if (tempEl) tempEl.textContent = selected.temp;
  if (descEl) descEl.textContent = selected.desc;
  if (humidityEl) humidityEl.textContent = selected.hum;
  if (windEl) windEl.textContent = selected.wind;
  if (advisoryHeading) advisoryHeading.textContent = selected.title;
  if (advisoryText) advisoryText.textContent = selected.text;
}

// 14. MODAL MANAGEMENT (Details, Add Query, Add Response)
function initModals() {
  const facilityModal = document.getElementById("facility-detail-modal");
  const queryModal = document.getElementById("ask-question-modal");
  const answerModal = document.getElementById("add-answer-modal");

  const closeFacilityBtn = document.getElementById("modal-close-facility");
  const closeQueryBtn = document.getElementById("modal-close-question");
  const closeAnswerBtn = document.getElementById("modal-close-answer");
  
  const openQueryBtn = document.getElementById("btn-open-query-modal");
  
  // Close modals
  const closeModal = (modal) => {
    modal.classList.add("hidden");
  };

  closeFacilityBtn.addEventListener("click", () => closeModal(facilityModal));
  closeQueryBtn.addEventListener("click", () => closeModal(queryModal));
  closeAnswerBtn.addEventListener("click", () => closeModal(answerModal));

  // Close when clicking outside of modal card
  [facilityModal, queryModal, answerModal].forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  // Open Ask Query Modal
  if (openQueryBtn) {
    openQueryBtn.addEventListener("click", () => {
      queryModal.classList.remove("hidden");
    });
  }

  // Handle Query Submission
  const queryForm = document.getElementById("new-query-form");
  if (queryForm) {
    queryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const category = document.getElementById("query-category").value;
      const location = document.getElementById("query-location").value;
      const text = document.getElementById("query-text").value;

      const queries = JSON.parse(localStorage.getItem('forumQueries')) || [];
      const newQuery = {
        id: Date.now(),
        author: currentLang === 'hi' ? "किसान (सत्यापित)" : (currentLang === 'es' ? "Agricultor" : "Verified Farmer"),
        category: category,
        location: location,
        text: text,
        date: new Date().toLocaleDateString(currentLang === 'hi' ? 'hi-IN' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
        answers: []
      };

      queries.unshift(newQuery);
      localStorage.setItem('forumQueries', JSON.stringify(queries));
      
      closeModal(queryModal);
      queryForm.reset();
      
      renderForumThreads();
      showToast(currentLang === 'hi' ? "आपका प्रश्न सफलतापूर्वक पोस्ट किया गया!" : "Your query has been posted successfully!");
    });
  }

  // Handle Answer Submission
  const answerForm = document.getElementById("new-answer-form");
  if (answerForm) {
    answerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const author = document.getElementById("answer-author").value;
      const role = document.getElementById("answer-role").value;
      const text = document.getElementById("answer-text").value;

      const queries = JSON.parse(localStorage.getItem('forumQueries')) || [];
      const queryIndex = queries.findIndex(q => q.id === activeQueryForAnswerId);

      if (queryIndex !== -1) {
        queries[queryIndex].answers.push({
          author: author,
          role: role,
          text: text,
          date: new Date().toLocaleDateString(currentLang === 'hi' ? 'hi-IN' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' })
        });
        localStorage.setItem('forumQueries', JSON.stringify(queries));
      }

      closeModal(answerModal);
      answerForm.reset();
      
      renderForumThreads();
      showToast(currentLang === 'hi' ? "आपका जवाब पोस्ट हो गया है!" : "Your answer has been submitted!");
    });
  }

  // Handle rating star clicks in facility modal
  const starBtns = document.querySelectorAll("#user-stars-wrap .star-btn");
  starBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedValue = parseInt(btn.getAttribute("data-value"));
      
      // Update UI stars color
      starBtns.forEach((b, idx) => {
        if (idx < selectedValue) {
          b.classList.add("active");
        } else {
          b.classList.remove("active");
        }
      });

      // Submit mock rating toast
      setTimeout(() => {
        showToast(currentLang === 'hi' ? `रेटिंग देने के लिए धन्यवाद: ${selectedValue} स्टार!` : `Thank you for rating this facility: ${selectedValue} stars!`);
        // Reset stars
        starBtns.forEach(b => b.classList.remove("active"));
      }, 300);
    });
  });

  // Settle Agri-Blogs click advisory redirection
  const readBlogsBtn = document.getElementById("btn-read-tips");
  if (readBlogsBtn) {
    readBlogsBtn.addEventListener("click", () => {
      // Switches to community view to see blogs and advisories
      document.getElementById("nav-community").click();
    });
  }
}

// Open Facility Detail Modal
function openFacilityModal(id) {
  const facility = facilitiesData.find(f => f.id === id);
  if (!facility) return;

  const modal = document.getElementById("facility-detail-modal");
  
  // Set details
  document.getElementById("modal-facility-name").textContent = facility.name;
  document.getElementById("modal-facility-rating").textContent = facility.rating;
  document.getElementById("modal-facility-address").textContent = facility.address;
  
  const phoneAnchor = document.getElementById("modal-facility-phone");
  phoneAnchor.textContent = facility.phone;
  phoneAnchor.href = `tel:${facility.phone.replace(/\s+/g, '')}`;
  
  document.getElementById("modal-facility-hours").textContent = facility.timings;

  // Set category details
  const categoryBadge = document.getElementById("modal-facility-category");
  categoryBadge.className = `badge badge-${facility.category}`;
  categoryBadge.textContent = translations[currentLang][`opt${facility.category.charAt(0).toUpperCase() + facility.category.slice(1)}`] || facility.category;

  // Set Gov subsidy accepted
  const govRow = document.getElementById("modal-facility-gov-row");
  if (facility.isGov) {
    govRow.classList.remove("hidden");
  } else {
    govRow.classList.add("hidden");
  }

  // Set mock buttons links
  const callBtn = document.getElementById("modal-call-btn");
  callBtn.href = `tel:${facility.phone.replace(/\s+/g, '')}`;

  const whatsappBtn = document.getElementById("modal-whatsapp-btn");
  const msg = encodeURIComponent(`Hello ${facility.name}, I am a farmer looking for seeds/pesticides. Can you please share details?`);
  whatsappBtn.href = `https://wa.me/${facility.phone.replace(/[+\s]/g, '')}?text=${msg}`;

  // Set Inventory Title based on category
  const invTitle = document.getElementById("modal-inventory-title");
  if (facility.category === 'seeds') {
    invTitle.textContent = currentLang === 'hi' ? "उपलब्ध बीज और कीमतें" : (currentLang === 'es' ? "Semillas y Precios" : "Available Seeds & Prices");
  } else if (facility.category === 'pesticides') {
    invTitle.textContent = currentLang === 'hi' ? "उर्वरक और कीटनाशक स्टॉक" : (currentLang === 'es' ? "Fertilizantes e Inventario" : "Fertilizers & Pesticides Stock");
  } else if (facility.category === 'machinery') {
    invTitle.textContent = currentLang === 'hi' ? "उपकरण और किराया मूल्य" : (currentLang === 'es' ? "Maquinaria y Alquileres" : "Machinery & Rental Rates");
  } else if (facility.category === 'testing') {
    invTitle.textContent = currentLang === 'hi' ? "परीक्षण सेवाएं और शुल्क" : (currentLang === 'es' ? "Tarifas de Pruebas de Suelo" : "Testing Services & Fees");
  } else if (facility.category === 'storage') {
    invTitle.textContent = currentLang === 'hi' ? "कोल्ड स्पेस शुल्क" : (currentLang === 'es' ? "Tarifas de Almacenamiento" : "Cold Space Storage Fees");
  } else {
    invTitle.textContent = currentLang === 'hi' ? "अग्रिम सेवाएं और सलाहकार" : (currentLang === 'es' ? "Servicios Agrícolas" : "Agriculture Services");
  }

  // Fill inventory table
  const tbody = document.getElementById("modal-inventory-body");
  tbody.innerHTML = "";
  
  facility.inventory.forEach(inv => {
    const row = document.createElement("tr");
    
    // Status text label classes
    let statusClass = "text-success font-weight-600";
    if (inv.status.includes("Low") || inv.status.includes("Rented")) statusClass = "text-accent font-weight-600";
    if (inv.status.includes("Out")) statusClass = "text-danger font-weight-600";
    
    row.innerHTML = `
      <td class="font-weight-600">${inv.item}</td>
      <td class="text-primary font-weight-600">${inv.price}</td>
      <td><span class="${statusClass}">${inv.status}</span></td>
    `;
    tbody.appendChild(row);
  });

  // Render Reviews List
  const reviewsContainer = document.getElementById("modal-reviews-list");
  reviewsContainer.innerHTML = "";

  facility.reviews.forEach(rev => {
    const starsHTML = Array.from({ length: 5 }, (_, i) => 
      `<i data-lucide="star" class="${i < rev.rating ? 'fill-star' : ''}"></i>`
    ).join("");

    const revItem = document.createElement("div");
    revItem.className = "review-item";
    revItem.innerHTML = `
      <div class="review-header">
        <span class="review-author">${rev.author}</span>
        <div class="review-stars flex-row-align">${starsHTML}</div>
      </div>
      <p class="review-text">"${rev.text}"</p>
    `;
    reviewsContainer.appendChild(revItem);
  });

  modal.classList.remove("hidden");
  lucide.createIcons();
}

// Open Answer Modal
function openAnswerModal(queryId) {
  activeQueryForAnswerId = queryId;
  const queries = JSON.parse(localStorage.getItem('forumQueries')) || [];
  const query = queries.find(q => q.id === queryId);
  
  if (query) {
    document.getElementById("answer-modal-query-preview").textContent = `"${query.text.substring(0, 70)}..."`;
    document.getElementById("add-answer-modal").classList.remove("hidden");
  }
}
window.openAnswerModal = openAnswerModal;

// 15. TOAST NOTIFICATION CONTROLLERS
function showToast(msg) {
  const toast = document.getElementById("toast-notify");
  const textEl = document.getElementById("toast-message-text");
  
  if (!toast || !textEl) return;

  textEl.textContent = msg;
  toast.classList.remove("hidden");

  // Auto close after 3 seconds
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}
