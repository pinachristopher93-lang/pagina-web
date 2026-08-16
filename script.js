/* =========================================================
   DITLELE S.A. — materiales de alta tensión
   Para editar: cambia los textos, referencias y contactos
   directo en CATEGORIES. iconKey usa uno de los SVG de ICONS.
   ========================================================= */

/* ---------- 1. ICONOS DE LÍNEA (SVG minimalistas) ---------- */
const ICONS = {
  insulator:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><ellipse cx="12" cy="5" rx="6" ry="2"/><ellipse cx="12" cy="9.5" rx="5" ry="1.8"/><ellipse cx="12" cy="13.5" rx="4" ry="1.6"/><line x1="12" y1="15.5" x2="12" y2="21"/></svg>`,
  transformer:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="4" y="6" width="16" height="12" rx="1"/><path d="M8 6v12M12 6v12M16 6v12"/></svg>`,
  cable:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M3 12c3-4 6 4 9 0s6-4 9 0"/><circle cx="3" cy="12" r="1.4" fill="currentColor" stroke="none"/><circle cx="21" cy="12" r="1.4" fill="currentColor" stroke="none"/></svg>`,
  hardware:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l7 4v8l-7 4-7-4V6z"/><circle cx="12" cy="12" r="2.4"/></svg>`,
  protection:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5z"/></svg>`
};

/* ---------- 2. TEXTOS DE INTERFAZ (ES / EN / ZH) ---------- */
const UI = {
  es:{
    brandSub:"Materiales de alta tensión",
    searchPlaceholder:"Buscar por línea o material...",
    requestQuote:"Solicitar cotización",
    eyebrow:"proveedor técnico — líneas de transmisión y distribución",
    heroTitle:"Materiales de alta tensión,<br>con respaldo técnico.",
    heroSub:"Aisladores, transformadores, conductores, herrajes y equipos de protección. Consulta el catálogo por línea de producto y coordina tu pedido directo por WhatsApp o WeChat — sin pagos en línea.",
    tagCert:"Normas IEC / ANSI", tagStock:"Stock e importación", tagQuote:"Cotización directa",
    sectionTitle:"Líneas de producto",
    emptyState:"No encontramos resultados para esa búsqueda. Prueba con otro término.",
    footerText:"DITELEL S.A. — materiales y equipos para líneas de alta tensión. La cotización se coordina directo con nuestro equipo técnico; este sitio no procesa pagos.",
    waBtn:"Cotizar por WhatsApp",
    wcBtn:"Cotizar por WeChat",
    contactNote:"Al contactar coordinas tu pedido directo con el equipo técnico — este sitio no procesa pagos.",
    catalogHeading:"Referencias disponibles",
    viewCatalog:"Ver catálogo",
    results:"resultados"
  },
  en:{
    brandSub:"High-voltage materials",
    searchPlaceholder:"Search by line or material...",
    requestQuote:"Request a quote",
    eyebrow:"technical supplier — transmission & distribution lines",
    heroTitle:"High-voltage materials,<br>backed by technical support.",
    heroSub:"Insulators, transformers, conductors, line hardware and protection equipment. Browse the catalog by product line and coordinate your order directly on WhatsApp or WeChat — no online payments.",
    tagCert:"IEC / ANSI standards", tagStock:"Stock & import", tagQuote:"Direct quoting",
    sectionTitle:"Product lines",
    emptyState:"No results for that search. Try another term.",
    footerText:"DITELEL S.A. — materials and equipment for high-voltage lines. Quotes are coordinated directly with our technical team; this site does not process payments.",
    waBtn:"Quote on WhatsApp",
    wcBtn:"Quote on WeChat",
    contactNote:"Contacting us lets you coordinate your order directly with the technical team — no payments are processed here.",
    catalogHeading:"Available references",
    viewCatalog:"View catalog",
    results:"results"
  },
  zh:{
    brandSub:"高压电力材料",
    searchPlaceholder:"按产品线或材料搜索...",
    requestQuote:"索取报价",
    eyebrow:"技术供应商 — 输配电线路",
    heroTitle:"高压电力材料，<br>提供技术支持。",
    heroSub:"绝缘子、变压器、导线、线路金具及防护设备。按产品线查看目录，并通过WhatsApp或微信直接协调订单——不在线支付。",
    tagCert:"IEC / ANSI标准", tagStock:"现货与进口", tagQuote:"直接报价",
    sectionTitle:"产品线",
    emptyState:"没有找到匹配的结果，换个关键词试试。",
    footerText:"DITELEL S.A. —— 高压线路材料与设备供应商。报价由技术团队直接协调；本网站不处理支付。",
    waBtn:"WhatsApp报价",
    wcBtn:"微信报价",
    contactNote:"联系我们即可与技术团队直接协调订单——本平台不处理支付。",
    catalogHeading:"可选型号",
    viewCatalog:"查看目录",
    results:"个结果"
  }
};

/* ---------- 3. DATOS — LÍNEAS DE PRODUCTO (EDITA AQUÍ) ---------- */
const COMPANY = {
  whatsapp:"593987654321",
  wechat:"ditlele_altatension"
};

const CATEGORIES = [
  {
    id:"aisladores",
    icon:"insulator",
    name:{es:"Aisladores",en:"Insulators",zh:"绝缘子"},
    tagline:{
      es:"Aisladores poliméricos, cerámicos y de vidrio para líneas de media y alta tensión.",
      en:"Polymer, ceramic and glass insulators for medium and high-voltage lines.",
      zh:"适用于中高压线路的聚合物、陶瓷和玻璃绝缘子。"
    },
    products:[
      {ref:"AI-069P", name:{es:"Aislador polimérico 69 kV",en:"Polymer insulator 69 kV",zh:"聚合物绝缘子 69 kV"}, spec:{es:"Núcleo de fibra de vidrio, funda de silicona.",en:"Fiberglass core, silicone housing.",zh:"玻璃纤维芯，硅胶护套。"}},
      {ref:"AI-034C", name:{es:"Aislador cerámico 34.5 kV",en:"Ceramic insulator 34.5 kV",zh:"陶瓷绝缘子 34.5 kV"}, spec:{es:"Porcelana vidriada, tipo pin.",en:"Glazed porcelain, pin type.",zh:"施釉瓷质，针式。"}},
      {ref:"AI-138V", name:{es:"Aislador de suspensión 138 kV",en:"Suspension insulator 138 kV",zh:"悬式绝缘子 138 kV"}, spec:{es:"Vidrio templado, cadena de disco.",en:"Tempered glass, disc string.",zh:"钢化玻璃，盘式串。"}}
    ]
  },
  {
    id:"transformadores",
    icon:"transformer",
    name:{es:"Transformadores",en:"Transformers",zh:"变压器"},
    tagline:{
      es:"Transformadores de distribución y potencia para proyectos industriales y de red.",
      en:"Distribution and power transformers for industrial and grid projects.",
      zh:"适用于工业与电网项目的配电及电力变压器。"
    },
    products:[
      {ref:"TR-050D", name:{es:"Transformador de distribución 50 kVA",en:"Distribution transformer 50 kVA",zh:"配电变压器 50 kVA"}, spec:{es:"Monofásico, 13.8 kV, montaje en poste.",en:"Single-phase, 13.8 kV, pole-mounted.",zh:"单相，13.8千伏，柱上安装。"}},
      {ref:"TR-500P", name:{es:"Transformador de potencia 5 MVA",en:"Power transformer 5 MVA",zh:"电力变压器 5 MVA"}, spec:{es:"Trifásico, 69 kV, refrigeración ONAN.",en:"Three-phase, 69 kV, ONAN cooling.",zh:"三相，69千伏，ONAN冷却方式。"}},
      {ref:"TR-100S", name:{es:"Transformador tipo seco 100 kVA",en:"Dry-type transformer 100 kVA",zh:"干式变压器 100 kVA"}, spec:{es:"Uso interior, encapsulado en resina.",en:"Indoor use, resin-encapsulated.",zh:"室内使用，树脂封装。"}}
    ]
  },
  {
    id:"cables",
    icon:"cable",
    name:{es:"Cables y Conductores",en:"Cables & Conductors",zh:"电缆与导线"},
    tagline:{
      es:"Conductores desnudos y cables aislados para líneas aéreas y subterráneas.",
      en:"Bare conductors and insulated cables for overhead and underground lines.",
      zh:"适用于架空及地下线路的裸导线和绝缘电缆。"
    },
    products:[
      {ref:"CB-ACSR4", name:{es:"Conductor ACSR 4/0",en:"ACSR conductor 4/0",zh:"ACSR导线 4/0"}, spec:{es:"Aluminio-acero, refuerzo de alma de acero.",en:"Aluminum-steel, steel-reinforced core.",zh:"铝芯钢加强线。"}},
      {ref:"CB-AAAC3", name:{es:"Cable AAAC 336 MCM",en:"AAAC cable 336 MCM",zh:"AAAC电缆 336 MCM"}, spec:{es:"Aleación de aluminio, alta resistencia mecánica.",en:"Aluminum alloy, high mechanical strength.",zh:"铝合金，机械强度高。"}},
      {ref:"CB-XLP15", name:{es:"Cable subterráneo XLPE 15 kV",en:"Underground cable XLPE 15 kV",zh:"地下电缆 XLPE 15 kV"}, spec:{es:"Aislamiento XLPE, pantalla de cobre.",en:"XLPE insulation, copper shield.",zh:"XLPE绝缘，铜屏蔽层。"}}
    ]
  },
  {
    id:"herrajes",
    icon:"hardware",
    name:{es:"Herrajes de Línea",en:"Line Hardware",zh:"线路金具"},
    tagline:{
      es:"Grapas, conectores y accesorios para el montaje de líneas de transmisión.",
      en:"Clamps, connectors and fittings for transmission line assembly.",
      zh:"用于输电线路组装的线夹、连接器及配件。"
    },
    products:[
      {ref:"HR-GS01", name:{es:"Grapa de suspensión",en:"Suspension clamp",zh:"悬垂线夹"}, spec:{es:"Para conductor ACSR, cuerpo de aluminio.",en:"For ACSR conductor, aluminum body.",zh:"适用于ACSR导线，铝制本体。"}},
      {ref:"HR-CC02", name:{es:"Conector tipo cuña",en:"Wedge-type connector",zh:"楔形连接器"}, spec:{es:"Aluminio, para derivaciones en línea viva.",en:"Aluminum, for live-line taps.",zh:"铝制，用于带电线路分接。"}},
      {ref:"HR-GT03", name:{es:"Grapa terminal de compresión",en:"Compression terminal clamp",zh:"压接终端线夹"}, spec:{es:"Para conductores de aluminio y ACSR.",en:"For aluminum and ACSR conductors.",zh:"适用于铝导线及ACSR导线。"}}
    ]
  },
  {
    id:"proteccion",
    icon:"protection",
    name:{es:"Equipos de Protección",en:"Protection Equipment",zh:"防护设备"},
    tagline:{
      es:"Pararrayos, seccionadores y equipos de puesta a tierra para la red.",
      en:"Surge arresters, disconnect switches and grounding equipment for the grid.",
      zh:"用于电网的避雷器、隔离开关及接地设备。"
    },
    products:[
      {ref:"EP-PR15", name:{es:"Pararrayos 15 kV",en:"Surge arrester 15 kV",zh:"避雷器 15 kV"}, spec:{es:"Óxido de zinc, sin explosores.",en:"Zinc oxide, gapless type.",zh:"氧化锌，无间隙型。"}},
      {ref:"EP-SF01", name:{es:"Seccionador fusible tipo cut-out",en:"Cut-out fuse disconnect",zh:"跌落式熔断器"}, spec:{es:"15 kV, montaje en poste.",en:"15 kV, pole-mounted.",zh:"15千伏，柱上安装。"}},
      {ref:"EP-PT03", name:{es:"Kit de puesta a tierra portátil",en:"Portable grounding kit",zh:"便携式接地装置"}, spec:{es:"3 fases, para trabajos de mantenimiento.",en:"3-phase, for maintenance work.",zh:"三相，适用于检修作业。"}}
    ]
  }
];

/* ---------- 4. ESTADO ---------- */
let currentLang = "es";

/* ---------- 5. RENDER DE TARJETAS ---------- */
const grid = document.getElementById("categoryGrid");
const emptyState = document.getElementById("emptyState");
const resultCount = document.getElementById("resultCount");

function renderGrid(list){
  grid.innerHTML = "";
  list.forEach((c, i)=>{
    const card = document.createElement("button");
    card.className = "card";
    card.style.animationDelay = (i*0.05)+"s";
    card.innerHTML = `
      <div class="card-bar"></div>
      <div class="card-body">
        <span class="card-icon">${ICONS[c.icon]}</span>
        <p class="card-name">${c.name[currentLang]}</p>
        <p class="card-tagline">${c.tagline[currentLang]}</p>
        <span class="card-cta">${UI[currentLang].viewCatalog}</span>
      </div>`;
    card.addEventListener("click", ()=>openModal(c));
    grid.appendChild(card);
  });
  emptyState.hidden = list.length !== 0;
  resultCount.textContent = list.length + " " + UI[currentLang].results;
}

/* ---------- 6. BÚSQUEDA CON LUPA ---------- */
const searchInput = document.getElementById("searchInput");
function filterCategories(){
  const q = searchInput.value.trim().toLowerCase();
  if(!q){ renderGrid(CATEGORIES); return; }
  const filtered = CATEGORIES.filter(c=>{
    const inName = c.name[currentLang].toLowerCase().includes(q);
    const inTagline = c.tagline[currentLang].toLowerCase().includes(q);
    const inProducts = c.products.some(p=>
      p.name[currentLang].toLowerCase().includes(q) || p.ref.toLowerCase().includes(q)
    );
    return inName || inTagline || inProducts;
  });
  renderGrid(filtered);
}
searchInput.addEventListener("input", filterCategories);

/* ---------- 7. MODAL DE CATÁLOGO ---------- */
const overlay = document.getElementById("modalOverlay");
const modalBar = document.getElementById("modalBar");
const modalIcon = document.getElementById("modalIcon");
const modalName = document.getElementById("modalName");
const modalTagline = document.getElementById("modalTagline");
const productGrid = document.getElementById("productGrid");
const whatsappBtn = document.getElementById("whatsappBtn");
const wechatBtn = document.getElementById("wechatBtn");

function waLink(topic){
  const msg = encodeURIComponent(
    (currentLang==="es" ? "Hola, quisiera cotizar sobre: " + topic + ". " :
     currentLang==="en" ? "Hi, I'd like a quote for: " + topic + ". " :
     "您好，我想咨询报价：" + topic + "。")
  );
  return `https://wa.me/${COMPANY.whatsapp}?text=${msg}`;
}

function openModal(c){
  modalIcon.innerHTML = ICONS[c.icon];
  modalName.textContent = c.name[currentLang];
  modalTagline.textContent = c.tagline[currentLang];

  whatsappBtn.href = waLink(c.name[currentLang]);
  wechatBtn.href = `weixin://dl/chat?${COMPANY.wechat}`;
  wechatBtn.title = "WeChat ID: " + COMPANY.wechat;

  productGrid.innerHTML = "";
  c.products.forEach(p=>{
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <span class="product-ref">${p.ref}</span>
      <p class="product-name">${p.name[currentLang]}</p>
      <p class="product-spec">${p.spec[currentLang]}</p>`;
    productGrid.appendChild(card);
  });

  modalBar.style.animation = "none";
  void modalBar.offsetWidth;
  modalBar.style.animation = "";

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}
document.getElementById("modalClose").addEventListener("click", closeModal);
overlay.addEventListener("click", (e)=>{ if(e.target === overlay) closeModal(); });
document.addEventListener("keydown", (e)=>{ if(e.key === "Escape") closeModal(); });

/* ---------- 8. BOTÓN DE COTIZACIÓN EN EL HEADER ---------- */
const headerContact = document.getElementById("headerContact");
function updateHeaderContact(){
  headerContact.href = waLink(currentLang==="es" ? "consulta general" : currentLang==="en" ? "general inquiry" : "一般咨询");
}

/* ---------- 9. TRADUCCIÓN ---------- */
function applyLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    el.innerHTML = UI[lang][el.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    el.placeholder = UI[lang][el.dataset.i18nPlaceholder];
  });
  document.querySelectorAll(".lang-btn").forEach(btn=>{
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  updateHeaderContact();
  filterCategories();
}
document.querySelectorAll(".lang-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>applyLanguage(btn.dataset.lang));
});

/* ---------- 10. INICIO ---------- */
renderGrid(CATEGORIES);
updateHeaderContact();

window.addEventListener("load", ()=>{
  requestAnimationFrame(()=>{
    document.getElementById("preloaderFill").style.width = "100%";
  });
  setTimeout(()=>{
    document.getElementById("preloader").classList.add("hide");
  }, 900);
});
