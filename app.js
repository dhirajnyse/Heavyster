const DATA_VERSION = "20260517-heavyster-hash-stabilizer-v20";
const STORAGE_KEY = "heavyster.marketplace.v1";

const listings = [
  {
    id: "HY-EX-001",
    name: "Cat 320 Excavator",
    category: "Earthmoving",
    supplier: "Al Noor Heavy Rentals",
    region: "UAE",
    city: "Dubai",
    rate: "Quote direct",
    availability: "available",
    verified: true,
    documents: ["Trade license", "Insurance", "Inspection"],
    specs: "22 ton, bucket set, optional breaker, operator on request"
  },
  {
    id: "HY-CR-014",
    name: "Liebherr 130T Mobile Crane",
    category: "Lifting",
    supplier: "Gulf Lift Services",
    region: "UAE",
    city: "Abu Dhabi",
    rate: "Quote direct",
    availability: "soon",
    verified: true,
    documents: ["Trade license", "Load test", "Operator license"],
    specs: "130 ton class, certified operator, city permit support"
  },
  {
    id: "HY-LD-022",
    name: "Komatsu WA380 Wheel Loader",
    category: "Earthmoving",
    supplier: "Desertline Equipment",
    region: "USA",
    city: "Houston",
    rate: "Quote direct",
    availability: "available",
    verified: false,
    documents: ["Insurance pending", "Inspection"],
    specs: "3.5 cubic yard bucket, quarry and yard work ready"
  },
  {
    id: "HY-TL-030",
    name: "JCB Telehandler 540-170",
    category: "Lifting",
    supplier: "Metro Plant Hire",
    region: "UK",
    city: "Birmingham",
    rate: "Quote direct",
    availability: "available",
    verified: true,
    documents: ["Company registry", "Insurance", "Service record"],
    specs: "17 m reach, forks and bucket, weekly hire available"
  },
  {
    id: "HY-RD-042",
    name: "Dynapac CA250 Roller",
    category: "Roadwork",
    supplier: "Prime Road Rentals",
    region: "India",
    city: "Pune",
    rate: "Quote direct",
    availability: "soon",
    verified: true,
    documents: ["GST", "Insurance", "Maintenance log"],
    specs: "10 ton soil compactor, fuel and operator terms direct"
  },
  {
    id: "HY-DZ-055",
    name: "D6 Dozer",
    category: "Earthmoving",
    supplier: "Frontier Civil Rentals",
    region: "USA",
    city: "Phoenix",
    rate: "Quote direct",
    availability: "available",
    verified: true,
    documents: ["Business license", "Insurance", "Inspection"],
    specs: "LGP track option, GPS-ready blade control"
  }
];

const categoryDirectory = [
  { name: "Excavators", group: "Earthmoving", count: 248, regions: "UAE, USA, India", intent: "High-intent contractor search" },
  { name: "Mobile cranes", group: "Lifting", count: 116, regions: "UAE, UK, USA", intent: "Permit and capacity driven" },
  { name: "Wheel loaders", group: "Earthmoving", count: 184, regions: "USA, India, UAE", intent: "Quarry, yard, and bulk handling" },
  { name: "Telehandlers", group: "Lifting", count: 139, regions: "UK, UAE, USA", intent: "Site logistics and material handling" },
  { name: "Dozers", group: "Earthmoving", count: 91, regions: "USA, India", intent: "Civil and earthworks demand" },
  { name: "Rollers", group: "Roadwork", count: 132, regions: "India, UAE, USA", intent: "Roadwork and compaction" },
  { name: "Generators", group: "Power", count: 205, regions: "UAE, USA, UK", intent: "Event, backup, and site power" },
  { name: "Lowbed trailers", group: "Transport", count: 77, regions: "UAE, India, USA", intent: "Equipment transport support" }
];

const supplierProfiles = [
  {
    supplier: "Al Noor Heavy Rentals",
    slug: "al-noor-heavy-rentals",
    headline: "Dubai earthmoving fleet with operator support and attachment-ready excavators.",
    branch: "Dubai, UAE",
    serviceArea: "Dubai, Sharjah, Abu Dhabi, and northern UAE sites",
    response: "Under 2 hours",
    since: "2016",
    fleet: [
      { label: "Excavators", count: 14, status: "Ready" },
      { label: "Breakers and buckets", count: 9, status: "On request" },
      { label: "Site support", count: 6, status: "Confirm" }
    ],
    services: ["Operator on request", "Attachment list", "Insurance certificate", "Site delivery coordination"],
    proof: ["Trade license", "Insurance", "Inspection", "Fleet photos"]
  },
  {
    supplier: "Gulf Lift Services",
    slug: "gulf-lift-services",
    headline: "Certified UAE lifting supplier for crane pads, city permits, and operator-led lifts.",
    branch: "Abu Dhabi, UAE",
    serviceArea: "Abu Dhabi, Dubai, industrial zones, and oilfield support areas",
    response: "Same day",
    since: "2012",
    fleet: [
      { label: "Mobile cranes", count: 18, status: "Certified" },
      { label: "Lift supervisors", count: 7, status: "On request" },
      { label: "Permit support", count: 5, status: "Confirm" }
    ],
    services: ["Certified operator", "Load chart review", "City permit support", "Lift plan notes"],
    proof: ["Trade license", "Load test", "Operator license", "Insurance cover"]
  },
  {
    supplier: "Desertline Equipment",
    slug: "desertline-equipment",
    headline: "Houston loaders and yard machines for quarry, bulk handling, and civil jobs.",
    branch: "Houston, USA",
    serviceArea: "Houston metro, yards, quarries, and Gulf Coast contractor sites",
    response: "Next business hour",
    since: "2019",
    fleet: [
      { label: "Wheel loaders", count: 11, status: "Ready" },
      { label: "Buckets", count: 8, status: "Included" },
      { label: "Document refresh", count: 2, status: "Pending" }
    ],
    services: ["Yard loading", "Bulk handling", "Quarry specs", "Insurance refresh"],
    proof: ["Insurance pending", "Inspection", "Machine photos", "Service notes"]
  },
  {
    supplier: "Metro Plant Hire",
    slug: "metro-plant-hire",
    headline: "UK telehandler and site logistics partner for weekly hire and material reach.",
    branch: "Birmingham, UK",
    serviceArea: "West Midlands, construction sites, warehouses, and infrastructure works",
    response: "Under 3 hours",
    since: "2014",
    fleet: [
      { label: "Telehandlers", count: 9, status: "Ready" },
      { label: "Forks and buckets", count: 12, status: "Included" },
      { label: "Weekly hire", count: 6, status: "Ready" }
    ],
    services: ["Weekly hire", "Fork and bucket options", "Service record", "Site logistics"],
    proof: ["Company registry", "Insurance", "Service record", "Fleet photos"]
  },
  {
    supplier: "Prime Road Rentals",
    slug: "prime-road-rentals",
    headline: "Pune roadwork fleet for compaction, civil contractors, and operator-led jobs.",
    branch: "Pune, India",
    serviceArea: "Pune, Mumbai corridor, industrial roads, and civil sites",
    response: "Same day",
    since: "2018",
    fleet: [
      { label: "Rollers", count: 17, status: "Ready soon" },
      { label: "Operators", count: 10, status: "Direct" },
      { label: "Maintenance logs", count: 17, status: "Ready" }
    ],
    services: ["Operator terms", "Fuel terms", "Compaction support", "Maintenance log"],
    proof: ["GST", "Insurance", "Maintenance log", "Operator terms"]
  },
  {
    supplier: "Frontier Civil Rentals",
    slug: "frontier-civil-rentals",
    headline: "Phoenix civil rental yard for dozers, GPS-ready blades, and earthworks support.",
    branch: "Phoenix, USA",
    serviceArea: "Arizona civil jobs, earthworks, utility corridors, and site prep",
    response: "Under 2 hours",
    since: "2015",
    fleet: [
      { label: "Dozers", count: 22, status: "Ready" },
      { label: "GPS-ready blades", count: 8, status: "On request" },
      { label: "LGP tracks", count: 5, status: "Confirm" }
    ],
    services: ["GPS-ready blade control", "LGP option", "Site prep support", "Inspection packet"],
    proof: ["Business license", "Insurance", "Inspection", "Service photos"]
  }
];

const supplierLeadSeeds = [
  {
    id: "LD-001",
    supplier: "Al Noor Heavy Rentals",
    listingId: "HY-EX-001",
    buyer: "Delta Civil Works",
    equipment: "Cat 320 Excavator",
    project: "Trenching and backfill near Jebel Ali",
    location: "Dubai Industrial City",
    start: "Next week",
    duration: "6 days",
    budget: 8500,
    channel: "WhatsApp",
    ageMinutes: 18,
    terms: ["Operator", "Breaker", "Delivery"],
    note: "Need operator, breaker option, and delivery timing."
  },
  {
    id: "LD-002",
    supplier: "Gulf Lift Services",
    listingId: "HY-CR-014",
    buyer: "Quay B Logistics",
    equipment: "Liebherr 130T Mobile Crane",
    project: "Crane pad lift and permit support",
    location: "Abu Dhabi port zone",
    start: "This week",
    duration: "2 days",
    budget: 18500,
    channel: "Email",
    ageMinutes: 42,
    terms: ["Operator", "Permit", "Lift plan"],
    note: "Buyer asked for capacity chart and city permit guidance."
  },
  {
    id: "LD-003",
    supplier: "Desertline Equipment",
    listingId: "HY-LD-022",
    buyer: "Gulf Coast Aggregates",
    equipment: "Komatsu WA380 Wheel Loader",
    project: "Yard loading and stockpile movement",
    location: "Houston east yard",
    start: "This month",
    duration: "3 weeks",
    budget: 12600,
    channel: "Phone",
    ageMinutes: 210,
    terms: ["Bucket", "Insurance", "Fuel"],
    note: "Buyer needs insurance proof before confirming."
  },
  {
    id: "LD-004",
    supplier: "Metro Plant Hire",
    listingId: "HY-TL-030",
    buyer: "Midlands BuildCo",
    equipment: "JCB Telehandler 540-170",
    project: "Material reach for warehouse fit-out",
    location: "Birmingham logistics park",
    start: "Next week",
    duration: "10 days",
    budget: 7200,
    channel: "Web",
    ageMinutes: 76,
    terms: ["Forks", "Weekly hire", "Delivery"],
    note: "Buyer wants forks, bucket option, and delivery window."
  },
  {
    id: "LD-005",
    supplier: "Prime Road Rentals",
    listingId: "HY-RD-042",
    buyer: "Pune Infra Works",
    equipment: "Dynapac CA250 Roller",
    project: "Industrial road compaction",
    location: "Chakan industrial belt",
    start: "This week",
    duration: "8 days",
    budget: 5100,
    channel: "WhatsApp",
    ageMinutes: 33,
    terms: ["Operator", "Fuel terms", "Maintenance log"],
    note: "Buyer needs operator terms and current maintenance log."
  },
  {
    id: "LD-006",
    supplier: "Frontier Civil Rentals",
    listingId: "HY-DZ-055",
    buyer: "Sonoran Site Prep",
    equipment: "D6 Dozer",
    project: "Site prep and grading support",
    location: "Phoenix north corridor",
    start: "Planning stage",
    duration: "1 month",
    budget: 24000,
    channel: "Email",
    ageMinutes: 160,
    terms: ["GPS blade", "LGP track", "Inspection"],
    note: "Buyer wants GPS-ready blade availability and inspection proof."
  }
];

const trustItems = [
  ["Company profile", "Legal name, service regions, contact desk, and fleet categories."],
  ["Equipment proof", "Photos, serial-friendly internal ID, make, model, specs, and attachments."],
  ["Documents", "License, insurance, inspection, operator certificate, and optional permit notes."],
  ["Availability", "Available now, available soon, or call-to-confirm status for each listing."],
  ["Lead routing", "Phone, WhatsApp, email, and enquiry packet copied to supplier CRM."],
  ["Billing", "USD 9 monthly or USD 99 yearly per active listing, no rental commission."]
];

const onboardingSteps = [
  ["Company", "Create supplier account and branch profile."],
  ["Fleet", "Add equipment listings with photos and specs."],
  ["Verify", "Attach license, insurance, inspection, and operator documents."],
  ["Publish", "Choose monthly or annual listing plan and go live."]
];

const adminQueue = [
  { supplier: "Al Noor Heavy Rentals", region: "UAE", listings: 14, status: "Ready to verify" },
  { supplier: "Frontier Civil Rentals", region: "USA", listings: 22, status: "Docs pending" },
  { supplier: "Metro Plant Hire", region: "UK", listings: 9, status: "Billing setup" },
  { supplier: "Prime Road Rentals", region: "India", listings: 17, status: "Review photos" }
];

const seedDemandSignals = [
  { equipment: "Crawler crane", region: "UAE", urgency: "This week", duration: "7 days", source: "Buyer search", count: 4 },
  { equipment: "Motor grader", region: "India", urgency: "This month", duration: "12 days", source: "Category gap", count: 3 },
  { equipment: "250 kVA generator", region: "USA", urgency: "Next week", duration: "Weekend", source: "Project note", count: 2 }
];

const huntBlueprints = [
  {
    keywords: ["crane", "lifting", "telehandler"],
    persona: "Crane and lifting fleet owners",
    category: "Lifting",
    starterListings: 18,
    proof: ["Load test certificate", "Operator license", "Lift capacity chart", "Insurance cover"],
    hook: "buyers are searching for certified lifting capacity, not casual equipment photos"
  },
  {
    keywords: ["grader", "roller", "road", "compactor"],
    persona: "Roadwork and civil plant suppliers",
    category: "Roadwork",
    starterListings: 14,
    proof: ["Recent service log", "Site-ready photos", "Compaction or blade specs", "Operator option"],
    hook: "contractors need roadwork machines with availability and service proof"
  },
  {
    keywords: ["generator", "power", "kva"],
    persona: "Temporary power rental companies",
    category: "Power",
    starterListings: 22,
    proof: ["Load bank test", "Fuel terms", "Cable and distribution notes", "Delivery area"],
    hook: "event and site teams need fast power availability by region"
  },
  {
    keywords: ["trailer", "lowbed", "transport"],
    persona: "Equipment transport and lowbed operators",
    category: "Transport",
    starterListings: 10,
    proof: ["Trailer capacity", "Permit support", "Driver coverage", "Service radius"],
    hook: "equipment movement demand follows every heavy rental search"
  },
  {
    keywords: ["excavator", "loader", "dozer", "earth"],
    persona: "Earthmoving rental yards",
    category: "Earthmoving",
    starterListings: 20,
    proof: ["Machine photos", "Attachment list", "Service record", "Operator availability"],
    hook: "earthmoving buyers compare availability, attachments, and local support first"
  }
];

const jobsiteBlueprints = [
  {
    key: "earthworks",
    label: "Earthworks package",
    keywords: ["earth", "excavat", "foundation", "trench", "backfill", "site prep", "dozer", "loader"],
    outcome: "Move soil, open trenches, shape the site, and finish with compaction.",
    roles: [
      { role: "Primary excavation", category: "Earthmoving", keywords: ["excavator", "bucket", "breaker"], target: "Excavator with attachments" },
      { role: "Bulk loading", category: "Earthmoving", keywords: ["loader", "wheel"], target: "Wheel loader" },
      { role: "Cut and push", category: "Earthmoving", keywords: ["dozer", "blade", "track"], target: "Dozer" },
      { role: "Final compaction", category: "Roadwork", keywords: ["roller", "compactor", "soil"], target: "Soil compactor" }
    ]
  },
  {
    key: "lifting",
    label: "Lifting package",
    keywords: ["lift", "crane", "telehandler", "steel", "permit", "operator", "height"],
    outcome: "Lift heavy materials with certified capacity, operator proof, and site logistics support.",
    roles: [
      { role: "Heavy lift", category: "Lifting", keywords: ["crane", "mobile", "load"], target: "Mobile crane" },
      { role: "Material reach", category: "Lifting", keywords: ["telehandler", "reach", "fork"], target: "Telehandler" },
      { role: "Site loading", category: "Earthmoving", keywords: ["loader", "bucket"], target: "Loader for staging" },
      { role: "Transport support", category: "Transport", keywords: ["lowbed", "trailer", "transport"], target: "Lowbed trailer" }
    ]
  },
  {
    key: "roadwork",
    label: "Roadwork package",
    keywords: ["road", "asphalt", "roller", "compaction", "grader", "pavement", "civil"],
    outcome: "Prepare, place, compact, and support roadwork execution.",
    roles: [
      { role: "Compaction", category: "Roadwork", keywords: ["roller", "compactor"], target: "Road roller" },
      { role: "Earth shaping", category: "Earthmoving", keywords: ["dozer", "blade"], target: "Dozer or grader" },
      { role: "Material loading", category: "Earthmoving", keywords: ["loader", "wheel"], target: "Wheel loader" },
      { role: "Site excavation", category: "Earthmoving", keywords: ["excavator"], target: "Excavator" }
    ]
  },
  {
    key: "site-power",
    label: "Site power package",
    keywords: ["power", "generator", "kva", "temporary", "event", "backup", "cable"],
    outcome: "Keep the site powered while material handling and backup equipment stay ready.",
    roles: [
      { role: "Temporary power", category: "Power", keywords: ["generator", "kva", "power"], target: "Generator set" },
      { role: "Material handling", category: "Lifting", keywords: ["telehandler", "fork"], target: "Telehandler" },
      { role: "Backup lift", category: "Lifting", keywords: ["crane", "lift"], target: "Crane on call" },
      { role: "Delivery support", category: "Transport", keywords: ["lowbed", "transport", "trailer"], target: "Transport partner" }
    ]
  }
];

const commandRoles = ["Buyer", "Supplier", "Founder"];

const commandRoutes = [
  {
    role: "Buyer",
    label: "Buyer decision flow",
    anchor: "#jobsite",
    detail: "Move from equipment search to RFQ, award, quote clarity, and mobilization without losing control.",
    steps: [
      { label: "Search", anchor: "#marketplace" },
      { label: "Jobsite", anchor: "#jobsite" },
      { label: "RFQ", anchor: "#rfq" },
      { label: "Award", anchor: "#award" },
      { label: "Mobilize", anchor: "#mobilize" }
    ]
  },
  {
    role: "Supplier",
    label: "Supplier revenue flow",
    anchor: "#studio",
    detail: "Turn a rental yard into a verified storefront, fresh fleet board, and direct lead response desk.",
    steps: [
      { label: "Storefront", anchor: "#storefront" },
      { label: "Studio", anchor: "#studio" },
      { label: "Lead Desk", anchor: "#lead-desk" },
      { label: "Yard", anchor: "#yard" },
      { label: "Pricing", anchor: "#pricing" }
    ]
  },
  {
    role: "Founder",
    label: "Founder growth flow",
    anchor: "#growth",
    detail: "Use missing demand to recruit suppliers, launch category pages, and keep phase-one monetization clean.",
    steps: [
      { label: "Demand", anchor: "#admin" },
      { label: "Hunt", anchor: "#growth" },
      { label: "Market Map", anchor: "#market-maker" },
      { label: "Categories", anchor: "#categories" },
      { label: "Roadmap", anchor: "#roadmap" }
    ]
  }
];

const commandModules = [
  { role: "Buyer", label: "Marketplace", anchor: "#marketplace", signal: "Find equipment" },
  { role: "Buyer", label: "Jobsite", anchor: "#jobsite", signal: "Build package" },
  { role: "Buyer", label: "Trust Passport", anchor: "#passport", signal: "Check proof" },
  { role: "Buyer", label: "RFQ Room", anchor: "#rfq", signal: "Ask suppliers" },
  { role: "Buyer", label: "Award Room", anchor: "#award", signal: "Choose supplier" },
  { role: "Buyer", label: "Quote Guard", anchor: "#quote-guard", signal: "Clean terms" },
  { role: "Buyer", label: "Mobilize", anchor: "#mobilize", signal: "Dispatch gate" },
  { role: "Supplier", label: "Storefront", anchor: "#storefront", signal: "Public profile" },
  { role: "Supplier", label: "Supplier Studio", anchor: "#studio", signal: "Manage fleet" },
  { role: "Supplier", label: "Lead Desk", anchor: "#lead-desk", signal: "Reply faster" },
  { role: "Supplier", label: "Yard Board", anchor: "#yard", signal: "Fresh stock" },
  { role: "Supplier", label: "Pricing", anchor: "#pricing", signal: "Listing revenue" },
  { role: "Founder", label: "Admin", anchor: "#admin", signal: "Verify supply" },
  { role: "Founder", label: "Growth", anchor: "#growth", signal: "Recruit supply" },
  { role: "Founder", label: "Market Map", anchor: "#market-maker", signal: "Launch pages" },
  { role: "Founder", label: "Categories", anchor: "#categories", signal: "Plan inventory" },
  { role: "Founder", label: "Roadmap", anchor: "#roadmap", signal: "Build sequence" }
];

let state = loadState();
let toastTimer = 0;

document.addEventListener("DOMContentLoaded", () => {
  bindControls();
  render();
  stabilizeHashScroll();
  window.addEventListener("hashchange", () => stabilizeHashScroll());
});

function defaultState() {
  return {
    search: "",
    region: "all",
    availability: "all",
    category: "all",
    sort: "available",
    compactView: false,
    selectedListingId: "HY-EX-001",
    shortlistIds: ["HY-EX-001"],
    projectNote: "Need equipment for next week. Please confirm rental terms, operator option, delivery, and documents.",
    listingCount: 12,
    bookingValue: 8500,
    confirmedBookings: 6,
    quoteAmount: 8500,
    quoteDays: 5,
    quoteIncludes: {
      operator: true,
      transport: false,
      fuel: false,
      permit: false,
      overtime: false,
      validity: true
    },
    builderCategory: "Earthmoving",
    builderModel: "Cat 320 Excavator",
    builderRegion: "UAE",
    builderAvailability: "available",
    jobsiteType: "smart",
    jobsiteRegion: "selected",
    jobsiteUrgency: "This week",
    demandEquipment: "Crawler crane",
    demandRegion: "UAE",
    demandUrgency: "This week",
    demandDuration: "5 days",
    demandSignals: seedDemandSignals.map((signal) => ({ ...signal })),
    activeDemandKey: "",
    activeMarketKey: "",
    commandRole: "Buyer",
    supplierView: false,
    trustChecked: [true, true, true, false, false, false]
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    const base = defaultState();
    const merged = { ...base, ...(saved || {}) };
    merged.quoteIncludes = { ...base.quoteIncludes, ...(merged.quoteIncludes || {}) };
    if (!Array.isArray(merged.demandSignals)) merged.demandSignals = base.demandSignals;
    if (!commandRoles.includes(merged.commandRole)) merged.commandRole = base.commandRole;
    if (!merged.activeDemandKey && merged.demandSignals.length) merged.activeDemandKey = getDemandKey(merged.demandSignals[0]);
    if (!merged.activeMarketKey) merged.activeMarketKey = getMarketKeyFromSignal(merged.demandSignals[0]);
    return merged;
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function bindControls() {
  const search = document.querySelector("#equipmentSearch");
  const region = document.querySelector("#regionFilter");
  const availability = document.querySelector("#availabilityFilter");
  const note = document.querySelector("#projectNote");
  const listingCount = document.querySelector("#listingCount");
  const bookingValue = document.querySelector("#bookingValue");
  const confirmedBookings = document.querySelector("#confirmedBookings");
  const quoteAmount = document.querySelector("#quoteAmount");
  const quoteDays = document.querySelector("#quoteDays");
  const quoteIncludes = [...document.querySelectorAll("[data-quote-include]")];
  const sort = document.querySelector("#sortFilter");
  const builderCategory = document.querySelector("#builderCategory");
  const builderModel = document.querySelector("#builderModel");
  const builderRegion = document.querySelector("#builderRegion");
  const builderAvailability = document.querySelector("#builderAvailability");
  const jobsiteType = document.querySelector("#jobsiteType");
  const jobsiteRegion = document.querySelector("#jobsiteRegion");
  const jobsiteUrgency = document.querySelector("#jobsiteUrgency");
  const demandEquipment = document.querySelector("#demandEquipment");
  const demandRegion = document.querySelector("#demandRegion");
  const demandUrgency = document.querySelector("#demandUrgency");
  const demandDuration = document.querySelector("#demandDuration");

  search.value = state.search;
  region.value = state.region;
  availability.value = state.availability;
  note.value = state.projectNote;
  listingCount.value = String(state.listingCount);
  bookingValue.value = String(state.bookingValue);
  confirmedBookings.value = String(state.confirmedBookings);
  quoteAmount.value = String(state.quoteAmount);
  quoteDays.value = String(state.quoteDays);
  quoteIncludes.forEach((input) => {
    input.checked = Boolean(state.quoteIncludes[input.dataset.quoteInclude]);
  });
  sort.value = state.sort;
  builderCategory.value = state.builderCategory;
  builderModel.value = state.builderModel;
  builderRegion.value = state.builderRegion;
  builderAvailability.value = state.builderAvailability;
  jobsiteType.value = state.jobsiteType;
  jobsiteRegion.value = state.jobsiteRegion;
  jobsiteUrgency.value = state.jobsiteUrgency;
  demandEquipment.value = state.demandEquipment;
  demandRegion.value = state.demandRegion;
  demandUrgency.value = state.demandUrgency;
  demandDuration.value = state.demandDuration;

  search.addEventListener("input", (event) => {
    state.search = event.target.value.trim();
    saveState();
    render();
  });

  region.addEventListener("change", (event) => {
    state.region = event.target.value;
    saveState();
    render();
  });

  availability.addEventListener("change", (event) => {
    state.availability = event.target.value;
    saveState();
    render();
  });

  note.addEventListener("input", (event) => {
    state.projectNote = event.target.value;
    saveState();
    renderLeadPacket();
    renderJobsitePlanner();
    renderRfqRoom();
    renderAwardRoom();
    renderQuoteGuard();
    renderMobilizationTower();
  });

  listingCount.addEventListener("input", (event) => {
    state.listingCount = Number(event.target.value);
    saveState();
    renderPricingCalculator();
  });

  bookingValue.addEventListener("input", (event) => {
    state.bookingValue = Number(event.target.value);
    saveState();
    renderCommissionCalculator();
  });

  confirmedBookings.addEventListener("input", (event) => {
    state.confirmedBookings = Number(event.target.value);
    saveState();
    renderCommissionCalculator();
  });

  [quoteAmount, quoteDays].forEach((input) => {
    input.addEventListener("input", updateQuoteGuardState);
  });

  quoteIncludes.forEach((input) => {
    input.addEventListener("change", updateQuoteGuardState);
  });

  sort.addEventListener("change", (event) => {
    state.sort = event.target.value;
    saveState();
    renderCatalog();
  });

  document.querySelector("#viewToggleButton").addEventListener("click", () => {
    state.compactView = !state.compactView;
    saveState();
    renderCatalog();
    showToast(state.compactView ? "Compact catalog rows enabled." : "Equipment cards enabled.");
  });

  [builderCategory, builderModel, builderRegion, builderAvailability].forEach((input) => {
    input.addEventListener("input", updateBuilderState);
    input.addEventListener("change", updateBuilderState);
  });

  [jobsiteType, jobsiteRegion, jobsiteUrgency].forEach((input) => {
    input.addEventListener("input", updateJobsiteState);
    input.addEventListener("change", updateJobsiteState);
  });

  [demandEquipment, demandRegion, demandUrgency, demandDuration].forEach((input) => {
    input.addEventListener("input", updateDemandState);
    input.addEventListener("change", updateDemandState);
  });

  document.querySelector("#saveDemandButton").addEventListener("click", () => {
    saveDemandSignal("Buyer request");
  });

  document.querySelectorAll(".category-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.category;
      saveState();
      render();
    });
  });

  document.querySelector("#copyLeadButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildLeadText());
      showToast("Direct enquiry packet copied.");
    } catch {
      showToast("Copy is blocked here, but the enquiry packet is visible.");
    }
  });

  document.querySelector("#copyPassportButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildTrustPassportText());
      showToast("Trust Passport copied.");
    } catch {
      showToast("Copy is blocked here, but the Trust Passport is visible.");
    }
  });

  document.querySelector("#copyRfqButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildRfqText());
      showToast("RFQ packet copied.");
    } catch {
      showToast("Copy is blocked here, but the RFQ packet is visible.");
    }
  });

  document.querySelector("#copyAwardButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildAwardMemoText());
      showToast("Award memo copied.");
    } catch {
      showToast("Copy is blocked here, but the award memo is visible.");
    }
  });

  document.querySelector("#copyQuoteButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildQuoteGuardText());
      showToast("Quote Guard check copied.");
    } catch {
      showToast("Copy is blocked here, but the quote check is visible.");
    }
  });

  document.querySelector("#copyJobsiteButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildJobsiteBriefText());
      showToast("Jobsite project brief copied.");
    } catch {
      showToast("Copy is blocked here, but the jobsite brief is visible.");
    }
  });

  document.querySelector("#copyMobilizeButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildMobilizationText());
      showToast("Mobilization handoff copied.");
    } catch {
      showToast("Copy is blocked here, but the mobilization handoff is visible.");
    }
  });

  document.querySelector("#copyYardButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildYardUpdateText());
      showToast("Yard availability update copied.");
    } catch {
      showToast("Copy is blocked here, but the yard update is visible.");
    }
  });

  document.querySelector("#copyStorefrontButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildSupplierStorefrontText());
      showToast("Supplier storefront packet copied.");
    } catch {
      showToast("Copy is blocked here, but the storefront packet is visible.");
    }
  });

  document.querySelector("#openStorefrontButton").addEventListener("click", () => {
    renderSupplierStorefront();
    document.querySelector("#storefront").scrollIntoView({ behavior: "smooth", block: "start" });
    showToast("Opening buyer-facing supplier storefront.");
  });

  document.querySelector("#copyLeadDeskButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildLeadDeskText());
      showToast("Lead reply packet copied.");
    } catch {
      showToast("Copy is blocked here, but the lead reply is visible.");
    }
  });

  document.querySelector("#applyJobsiteButton").addEventListener("click", () => {
    renderJobsitePlanner();
    renderMobilizationTower();
    document.querySelector("#jobsite").scrollIntoView({ behavior: "smooth", block: "start" });
    showToast("Jobsite package refreshed.");
  });

  document.querySelector("#applyPackageButton").addEventListener("click", () => {
    const packageListings = getJobsiteModel().matches.map((match) => match.listing).filter(Boolean);
    if (!packageListings.length) {
      showToast("No matched machines yet. Capture the supply gap first.");
      return;
    }
    state.shortlistIds = Array.from(new Set([...state.shortlistIds, ...packageListings.map((listing) => listing.id)]));
    state.selectedListingId = packageListings[0].id;
    saveState();
    render();
    document.querySelector("#rfq").scrollIntoView({ behavior: "smooth", block: "start" });
    showToast(`${packageListings.length} jobsite machines sent to RFQ shortlist.`);
  });

  document.querySelector("#copyHuntButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildSupplierHuntText());
      showToast("Supplier hunt pitch copied.");
    } catch {
      showToast("Copy is blocked here, but the supplier pitch is visible.");
    }
  });

  document.querySelector("#copyMarketButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildMarketBriefText());
      showToast("Market launch brief copied.");
    } catch {
      showToast("Copy is blocked here, but the market brief is visible.");
    }
  });

  document.querySelector("#shortlistToggleButton").addEventListener("click", () => {
    toggleShortlist(getSelectedListing().id);
  });

  document.querySelector("#compareShortlistButton").addEventListener("click", () => {
    renderShortlistTray(true);
    document.querySelector("#rfq").scrollIntoView({ behavior: "smooth", block: "start" });
    showToast(state.shortlistIds.length ? "RFQ room is ready." : "Save equipment first to build an RFQ.");
  });

  document.querySelector("#quickSearchButton").addEventListener("click", () => {
    document.querySelector("#marketplace").scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => {
      const search = document.querySelector("#equipmentSearch");
      search.focus();
      search.select();
    }, 320);
  });

  document.querySelector("#scrollTopButton").addEventListener("click", () => {
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.setTimeout(() => {
      root.style.scrollBehavior = previousBehavior;
    }, 0);
  });

  document.querySelector("#supplierModeButton").addEventListener("click", () => {
    state.supplierView = !state.supplierView;
    saveState();
    document.body.classList.toggle("supplier-view", state.supplierView);
    showToast(state.supplierView ? "Supplier view active." : "Marketplace view active.");
  });

  document.querySelector("#addListingButton").addEventListener("click", () => {
    state.listingCount = Math.min(80, state.listingCount + 1);
    saveState();
    renderPricingCalculator();
    showToast("Draft listing added to the supplier calculator.");
  });
}

function updateBuilderState() {
  state.builderCategory = document.querySelector("#builderCategory").value;
  state.builderModel = document.querySelector("#builderModel").value.trim();
  state.builderRegion = document.querySelector("#builderRegion").value;
  state.builderAvailability = document.querySelector("#builderAvailability").value;
  saveState();
  renderBuilderSummary();
}

function updateJobsiteState() {
  state.jobsiteType = document.querySelector("#jobsiteType").value;
  state.jobsiteRegion = document.querySelector("#jobsiteRegion").value;
  state.jobsiteUrgency = document.querySelector("#jobsiteUrgency").value;
  saveState();
  renderJobsitePlanner();
  renderQuoteGuard();
  renderMobilizationTower();
}

function updateQuoteGuardState() {
  state.quoteAmount = Number(document.querySelector("#quoteAmount").value);
  state.quoteDays = Number(document.querySelector("#quoteDays").value);
  document.querySelectorAll("[data-quote-include]").forEach((input) => {
    state.quoteIncludes[input.dataset.quoteInclude] = input.checked;
  });
  saveState();
  renderQuoteGuard();
  renderMobilizationTower();
}

function updateDemandState() {
  state.demandEquipment = document.querySelector("#demandEquipment").value.trim();
  state.demandRegion = document.querySelector("#demandRegion").value;
  state.demandUrgency = document.querySelector("#demandUrgency").value;
  state.demandDuration = document.querySelector("#demandDuration").value.trim();
  saveState();
}

function render() {
  reconcileSelectedListing();
  reconcileShortlist();
  renderCommandCenter();
  renderCategoryButtons();
  renderMarketplaceStats();
  renderCatalog();
  renderLeadPacket();
  renderEquipmentDetail();
  renderJobsitePlanner();
  renderTrustPassport();
  renderShortlistTray();
  renderRfqRoom();
  renderAwardRoom();
  renderQuoteGuard();
  renderMobilizationTower();
  renderYardAvailability();
  renderSupplierStorefront();
  renderLeadDesk();
  renderDemandCapture();
  renderSupplierTable();
  renderTrustChecklist();
  renderOnboardingFlow();
  renderBuilderSummary();
  renderCategoryDirectory();
  renderAdminBoard();
  renderSupplierHunt();
  renderMarketMaker();
  renderPricingCalculator();
  renderCommissionCalculator();
  document.body.classList.toggle("supplier-view", state.supplierView);
}

function stabilizeHashScroll() {
  const id = decodeURIComponent((window.location.hash || "").slice(1));
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;

  window.requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: "auto", block: "start" });
    window.setTimeout(() => {
      target.scrollIntoView({ behavior: "auto", block: "start" });
    }, 80);
  });
}

function renderCommandCenter() {
  const model = getCommandCenterModel();
  setText("#commandBadge", model.badge);

  document.querySelector("#commandPulse").innerHTML = model.pulse.map((item) => `
    <span>
      <strong>${escapeHtml(item.value)}</strong>
      <em>${escapeHtml(item.label)}</em>
      <small>${escapeHtml(item.detail)}</small>
    </span>
  `).join("");

  document.querySelector("#commandRoutes").innerHTML = model.routes.map((route) => `
    <button type="button" class="command-route ${route.isActive ? "is-active" : ""}" data-command-anchor="${escapeHtml(route.anchor)}" data-command-label="${escapeHtml(route.label)}" data-command-role="${escapeHtml(route.role)}">
      <span>
        <em>${escapeHtml(route.role)}</em>
        <strong>${escapeHtml(route.label)}</strong>
        <small>${escapeHtml(route.detail)}</small>
      </span>
      <b>${escapeHtml(route.score)}</b>
      <i>${route.steps.map((step) => escapeHtml(step.label)).join(" / ")}</i>
    </button>
  `).join("");

  document.querySelector("#commandRoleTabs").innerHTML = model.roles.map((role) => `
    <button type="button" class="${role === model.activeRole ? "is-active" : ""}" data-command-role-filter="${escapeHtml(role)}">
      ${escapeHtml(role)}
    </button>
  `).join("");

  document.querySelector("#commandWorkspace").innerHTML = `
    <strong>${escapeHtml(model.workspace.title)}</strong>
    <span>${escapeHtml(model.workspace.score)}</span>
    <p>${escapeHtml(model.workspace.detail)}</p>
    <small>${escapeHtml(model.workspace.next)}</small>
  `;

  document.querySelector("#commandModuleRail").innerHTML = model.modules.map((module) => `
    <button type="button" class="command-module ${module.isActive ? "is-active" : ""}" data-command-anchor="${escapeHtml(module.anchor)}" data-command-label="${escapeHtml(module.label)}">
      <span>${escapeHtml(module.role)}</span>
      <strong>${escapeHtml(module.label)}</strong>
      <small>${escapeHtml(module.signal)}</small>
    </button>
  `).join("");

  document.querySelectorAll("[data-command-anchor]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector(button.dataset.commandAnchor);
      if (!target) return;
      if (button.dataset.commandRole) {
        state.commandRole = button.dataset.commandRole;
        saveState();
        renderCommandCenter();
      }
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      showToast(`${button.dataset.commandLabel || "Module"} opened.`);
    });
  });

  document.querySelectorAll("[data-command-role-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.commandRole = button.dataset.commandRoleFilter;
      saveState();
      renderCommandCenter();
      showToast(`${state.commandRole} workspace active.`);
    });
  });
}

function getCommandCenterModel() {
  const selected = getSelectedListing();
  const passport = getTrustPassport(selected);
  const rfq = getRfqModel();
  const award = getAwardModel();
  const quote = getQuoteGuardModel();
  const mobilize = getMobilizationModel();
  const yard = getYardModel();
  const storefront = getSupplierStorefrontModel(selected);
  const leadDesk = getLeadDeskModel();
  const market = getActiveMarketOpportunity();
  const demandCount = getDemandSignals().reduce((total, signal) => total + Number(signal.count || 1), 0);
  const buyerScore = Math.round((passport.score + rfq.averageScore + award.winner.total + quote.score + mobilize.score) / 5);
  const supplierScore = Math.round((storefront.score + yard.score + leadDesk.active.score) / 3);
  const founderScore = market.score;
  const badge = buyerScore >= 82 && supplierScore >= 82 ? "Ready to demo" : "Focused build";
  const activeRole = commandRoles.includes(state.commandRole) ? state.commandRole : "Buyer";
  const workspace = getCommandWorkspace(activeRole, {
    selected,
    passport,
    rfq,
    award,
    quote,
    mobilize,
    yard,
    storefront,
    leadDesk,
    market,
    demandCount,
    buyerScore,
    supplierScore,
    founderScore
  });

  return {
    badge,
    activeRole,
    roles: commandRoles,
    workspace,
    pulse: [
      {
        label: "Buyer readiness",
        value: `${buyerScore}/100`,
        detail: `${selected.name} has ${passport.verdict.toLowerCase()} proof and ${quote.badge.toLowerCase()} quote status.`
      },
      {
        label: "Supplier pipeline",
        value: `USD ${leadDesk.totalBudget.toLocaleString()}`,
        detail: `${leadDesk.hotCount} hot lead${leadDesk.hotCount === 1 ? "" : "s"} for ${leadDesk.profile.supplier}.`
      },
      {
        label: "Founder demand",
        value: `${demandCount} signals`,
        detail: `${market.region} ${market.category} is the current expansion page.`
      },
      {
        label: "Phase-one money",
        value: "0% rental take",
        detail: "Heavyster monetizes listings first and keeps rental payment direct."
      }
    ],
    routes: commandRoutes.map((route) => ({
      ...route,
      isActive: route.role === activeRole,
      score: route.role === "Buyer"
        ? `${buyerScore}/100`
        : route.role === "Supplier"
          ? `${supplierScore}/100`
          : `${founderScore}/100`
    })),
    modules: commandModules.filter((module) => module.role === activeRole).map((module, index) => ({
      ...module,
      isActive: index === 0
    }))
  };
}

function getCommandWorkspace(role, context) {
  if (role === "Supplier") {
    return {
      title: `${context.leadDesk.profile.supplier} workspace`,
      score: `${context.supplierScore}/100 supplier readiness`,
      detail: `${context.leadDesk.leads.length} open lead${context.leadDesk.leads.length === 1 ? "" : "s"}, USD ${context.leadDesk.totalBudget.toLocaleString()} pipeline, ${context.yard.reviewCount} listing${context.yard.reviewCount === 1 ? "" : "s"} need freshness review.`,
      next: "Open Lead Desk first, then refresh Yard Board before pushing more paid listings."
    };
  }

  if (role === "Founder") {
    return {
      title: `${context.market.region} ${context.market.category} growth workspace`,
      score: `${context.founderScore}/100 launch score`,
      detail: `${context.demandCount} demand signals are active. Current page target is ${context.market.slug} with ${context.market.launchListings} starter listings.`,
      next: "Use Growth to recruit suppliers, then Market Map to publish the next demand-led page."
    };
  }

  return {
    title: `${context.selected.name} buyer workspace`,
    score: `${context.buyerScore}/100 buyer readiness`,
    detail: `${context.rfq.listings.length} machine${context.rfq.listings.length === 1 ? "" : "s"} in RFQ flow, ${context.quote.missingCount} quote term${context.quote.missingCount === 1 ? "" : "s"} unclear, award status ${context.award.badge.toLowerCase()}.`,
    next: "Start with Jobsite, confirm Trust Passport, then move through RFQ, Award, Quote Guard, and Mobilize."
  };
}

function reconcileShortlist() {
  state.shortlistIds = (state.shortlistIds || []).filter((id) => listings.some((listing) => listing.id === id));
}

function getFilteredListings() {
  const query = state.search.toLowerCase();
  const filtered = listings.filter((listing) => {
    const searchable = [
      listing.name,
      listing.category,
      listing.supplier,
      listing.region,
      listing.city,
      listing.specs
    ].join(" ").toLowerCase();

    return (!query || searchable.includes(query))
      && (state.region === "all" || listing.region === state.region)
      && (state.availability === "all" || listing.availability === state.availability)
      && (state.category === "all" || listing.category === state.category);
  });
  return filtered.sort((a, b) => {
    if (state.sort === "available") return availabilityScore(a) - availabilityScore(b) || a.name.localeCompare(b.name);
    if (state.sort === "verified") return Number(b.verified) - Number(a.verified) || a.name.localeCompare(b.name);
    if (state.sort === "region") return a.region.localeCompare(b.region) || a.city.localeCompare(b.city);
    return a.name.localeCompare(b.name);
  });
}

function availabilityScore(listing) {
  if (listing.availability === "available") return 0;
  if (listing.availability === "soon") return 1;
  return 2;
}

function reconcileSelectedListing() {
  const filtered = getFilteredListings();
  if (!listings.some((listing) => listing.id === state.selectedListingId)) {
    state.selectedListingId = listings[0].id;
  }
  if (filtered.length && !filtered.some((listing) => listing.id === state.selectedListingId)) {
    state.selectedListingId = filtered[0].id;
  }
  if (!filtered.length) {
    const nearby = getNearbyListings();
    if (nearby.length && !nearby.some((listing) => listing.id === state.selectedListingId)) {
      state.selectedListingId = nearby[0].id;
    }
  }
}

function getSelectedListing() {
  return listings.find((listing) => listing.id === state.selectedListingId) || listings[0];
}

function renderCategoryButtons() {
  document.querySelectorAll(".category-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === state.category);
  });
}

function renderMarketplaceStats() {
  const filtered = getFilteredListings();
  const verifiedSuppliers = new Set(filtered.filter((listing) => listing.verified).map((listing) => listing.supplier));
  setText("#resultCount", String(filtered.length));
  setText("#verifiedCount", String(verifiedSuppliers.size));
  renderSearchRescue(filtered);
}

function getNearbyListings() {
  const query = state.search.toLowerCase();
  return listings
    .map((listing) => {
      const searchable = [listing.name, listing.category, listing.supplier, listing.region, listing.city, listing.specs].join(" ").toLowerCase();
      let score = 0;
      if (query && searchable.includes(query)) score += 6;
      if (state.region !== "all" && listing.region === state.region) score += 4;
      if (state.category !== "all" && listing.category === state.category) score += 3;
      if (state.availability !== "all" && listing.availability === state.availability) score += 2;
      if (listing.verified) score += 1;
      return { listing, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.listing.name.localeCompare(b.listing.name))
    .slice(0, 3)
    .map((item) => item.listing);
}

function renderSearchRescue(filtered = getFilteredListings()) {
  const container = document.querySelector("#searchRescue");
  if (filtered.length) {
    container.innerHTML = "";
    return;
  }

  const suggestions = getSearchRescueSuggestions();
  const equipment = getDemandEquipmentFromSearch();
  const region = state.region === "all" ? "any region" : state.region;
  const availability = state.availability === "available" ? "available now" : state.availability === "soon" ? "available soon" : "any availability";

  container.innerHTML = `
    <div class="rescue-head">
      <span>Smart Match Rescue</span>
      <strong>No exact ${escapeHtml(equipment.toLowerCase())} match in ${escapeHtml(region)} for ${escapeHtml(availability)}.</strong>
      <p>Heavyster can recover the search, show closest options, or convert this into a supplier recruitment signal.</p>
    </div>
    <div class="rescue-actions">
      <button type="button" data-rescue-action="availability">Show any availability</button>
      <button type="button" data-rescue-action="request">Capture demand</button>
      <button type="button" data-rescue-action="hunt">Open supplier hunt</button>
    </div>
    <div class="rescue-suggestions">
      ${suggestions.length ? suggestions.map((item) => `
        <button type="button" data-rescue-id="${escapeHtml(item.listing.id)}">
          <strong>${escapeHtml(item.listing.name)}</strong>
          <span>${escapeHtml(item.reason)}</span>
        </button>
      `).join("") : `<span>Add supplier inventory to improve rescue suggestions.</span>`}
    </div>
  `;

  bindSearchRescue(container);
}

function getSearchRescueSuggestions() {
  const query = state.search.toLowerCase();
  return listings
    .map((listing) => {
      const searchable = [listing.name, listing.category, listing.supplier, listing.region, listing.city, listing.specs].join(" ").toLowerCase();
      const queryMatch = Boolean(query && searchable.includes(query));
      let score = 0;
      if (queryMatch) score += 8;
      if (state.region !== "all" && listing.region === state.region) score += 5;
      if (state.availability !== "all" && listing.availability === state.availability) score += 3;
      if (listing.verified) score += 2;
      if (listing.availability === "soon") score += 1;
      const reasons = [];
      if (queryMatch) reasons.push("equipment match");
      if (state.region !== "all") reasons.push(listing.region === state.region ? `${listing.region} market` : `${listing.region} alternative`);
      if (state.availability !== "all") reasons.push(listing.availability === state.availability ? "available now" : listing.availability === "soon" ? "available soon" : "different availability");
      if (listing.verified) reasons.push("verified supplier");
      return {
        listing,
        queryMatch,
        score,
        reason: `${listing.supplier} - ${listing.city}, ${listing.region}; ${reasons.join(", ")}`
      };
    })
    .filter((item) => item.score > 0 && (!query || item.queryMatch))
    .sort((a, b) => b.score - a.score || a.listing.name.localeCompare(b.listing.name))
    .slice(0, 3);
}

function bindSearchRescue(container) {
  container.querySelectorAll("[data-rescue-action]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.rescueAction === "availability") {
        state.availability = "all";
        saveState();
        syncFilterInputs();
        render();
        showToast("Showing any availability for this search.");
        return;
      }
      prepareDemandFromSearch();
      saveDemandSignal(button.dataset.rescueAction === "hunt" ? "Smart rescue supplier hunt" : "Smart rescue demand", false);
      const target = button.dataset.rescueAction === "hunt" ? "#growth" : "#demandRequest";
      document.querySelector(target).scrollIntoView({ behavior: "smooth", block: "start" });
      showToast(button.dataset.rescueAction === "hunt" ? "Demand signal added to supplier hunt." : "Demand signal captured.");
    });
  });

  container.querySelectorAll("[data-rescue-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const listing = listings.find((item) => item.id === button.dataset.rescueId);
      if (!listing) return;
      state.selectedListingId = listing.id;
      state.availability = "all";
      if (state.region !== "all" && listing.region !== state.region) state.region = listing.region;
      saveState();
      syncFilterInputs();
      render();
      document.querySelector("#leadTitle").scrollIntoView({ behavior: "smooth", block: "center" });
      showToast("Closest match opened.");
    });
  });
}

function renderNoResultsAdvisor() {
  const nearby = getNearbyListings();
  const searchLabel = state.search ? ` for "${escapeHtml(state.search)}"` : "";
  return `
    <div class="empty-advisor">
      <div>
        <p class="eyebrow">No exact match</p>
        <h3>No listings match${searchLabel} with the current filters.</h3>
        <p>Heavyster should help buyers recover instead of ending the search. Try nearby matches or relax one filter.</p>
      </div>
      <div class="empty-actions">
        <button type="button" data-empty-action="request">Save this demand</button>
        <button type="button" data-empty-action="availability">Show any availability</button>
        <button type="button" data-empty-action="region">Show all regions</button>
        <button type="button" data-empty-action="clear">Clear search</button>
      </div>
      <div class="nearby-list">
        ${nearby.length ? nearby.map((listing) => `
          <button type="button" data-nearby-id="${escapeHtml(listing.id)}">
            <strong>${escapeHtml(listing.name)}</strong>
            <span>${escapeHtml(listing.city)}, ${escapeHtml(listing.region)} - ${listing.availability === "available" ? "Available" : "Available soon"}</span>
          </button>
        `).join("") : "<span>No nearby demo listings yet. Add more supplier inventory to improve recovery.</span>"}
      </div>
    </div>
  `;
}

function bindNoResultsAdvisor(container) {
  container.querySelectorAll("[data-empty-action]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.emptyAction === "request") {
        prepareDemandFromSearch();
        saveDemandSignal("No-result search", false);
        document.querySelector("#demandRequest").scrollIntoView({ behavior: "smooth", block: "center" });
        window.setTimeout(() => document.querySelector("#demandEquipment").focus(), 260);
        return;
      }
      if (button.dataset.emptyAction === "availability") state.availability = "all";
      if (button.dataset.emptyAction === "region") state.region = "all";
      if (button.dataset.emptyAction === "clear") state.search = "";
      saveState();
      syncFilterInputs();
      render();
    });
  });

  container.querySelectorAll("[data-nearby-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedListingId = button.dataset.nearbyId;
      state.availability = "all";
      saveState();
      syncFilterInputs();
      render();
    });
  });
}

function syncFilterInputs() {
  document.querySelector("#equipmentSearch").value = state.search;
  document.querySelector("#regionFilter").value = state.region;
  document.querySelector("#availabilityFilter").value = state.availability;
}

function renderCatalog() {
  renderListings();
  renderCompactCatalog();
  setText("#catalogSummary", `${getFilteredListings().length} listings loaded - ready for paged catalog growth`);
  document.querySelector("#viewToggleButton").textContent = state.compactView ? "Card view" : "Compact rows";
  document.querySelector(".catalog-panel").classList.toggle("is-compact", state.compactView);
}

function renderListings() {
  const filtered = getFilteredListings();
  const grid = document.querySelector("#listingGrid");

  if (!filtered.length) {
    grid.innerHTML = renderNoResultsAdvisor();
    bindNoResultsAdvisor(grid);
    return;
  }

  grid.innerHTML = filtered.map((listing) => {
    const pillClass = listing.availability === "available" ? "good" : "wait";
    return `
      <button type="button" class="listing-card ${listing.id === state.selectedListingId ? "is-selected" : ""}" data-listing-id="${escapeHtml(listing.id)}">
        <span class="machine-art" aria-hidden="true"></span>
        <span class="listing-top">
          <span>
            <strong>${escapeHtml(listing.name)}</strong>
            <p>${escapeHtml(listing.supplier)} - ${escapeHtml(listing.city)}, ${escapeHtml(listing.region)}</p>
          </span>
          <span class="pill ${pillClass}">${listing.availability === "available" ? "Available" : "Soon"}</span>
        </span>
        <p>${escapeHtml(listing.specs)}</p>
        <span class="pill">${escapeHtml(listing.category)} - ${escapeHtml(listing.rate)}</span>
      </button>
    `;
  }).join("");

  grid.querySelectorAll(".listing-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.selectedListingId = card.dataset.listingId;
      saveState();
      render();
    });
  });
}

function renderCompactCatalog() {
  const filtered = getFilteredListings();
  const rows = document.querySelector("#compactCatalog");
  if (!filtered.length) {
    rows.innerHTML = renderNoResultsAdvisor();
    bindNoResultsAdvisor(rows);
    return;
  }

  rows.innerHTML = `
    <div class="compact-row compact-head">
      <span>Equipment</span>
      <span>Supplier</span>
      <span>Region</span>
      <span>Status</span>
      <span>Action</span>
    </div>
    ${filtered.map((listing) => `
      <button type="button" class="compact-row ${listing.id === state.selectedListingId ? "is-selected" : ""}" data-listing-id="${escapeHtml(listing.id)}">
        <span><strong>${escapeHtml(listing.name)}</strong><small>${escapeHtml(listing.category)}</small></span>
        <span>${escapeHtml(listing.supplier)}</span>
        <span>${escapeHtml(listing.city)}, ${escapeHtml(listing.region)}</span>
        <span>${listing.verified ? "Verified" : "Review"}</span>
        <span>${listing.availability === "available" ? "Enquire" : "Watch"}</span>
      </button>
    `).join("")}
  `;

  rows.querySelectorAll("button.compact-row").forEach((row) => {
    row.addEventListener("click", () => {
      state.selectedListingId = row.dataset.listingId;
      saveState();
      render();
    });
  });
}

function renderLeadPacket() {
  const listing = getSelectedListing();
  const status = listing.verified ? "Verified supplier" : "Needs verification";
  setText("#selectedListingStatus", status);
  document.querySelector("#selectedListingStatus").classList.toggle("good", listing.verified);
  document.querySelector("#selectedListingStatus").classList.toggle("wait", !listing.verified);

  document.querySelector("#leadPacket").innerHTML = `
    <div>
      <span>Equipment</span>
      <strong>${escapeHtml(listing.name)}</strong>
    </div>
    <div>
      <span>Supplier</span>
      <strong>${escapeHtml(listing.supplier)}</strong>
    </div>
    <div>
      <span>Location</span>
      <strong>${escapeHtml(listing.city)}, ${escapeHtml(listing.region)}</strong>
    </div>
    <div>
      <span>Documents shown</span>
      <strong>${escapeHtml(listing.documents.join(", "))}</strong>
    </div>
  `;
}

function renderEquipmentDetail() {
  const listing = getSelectedListing();
  document.querySelector("#equipmentDetail").innerHTML = `
    <div class="detail-title">
      <strong>${escapeHtml(listing.id)}</strong>
      <span>${escapeHtml(listing.category)}</span>
    </div>
    <div class="detail-spec-grid">
      <span><strong>Specs</strong>${escapeHtml(listing.specs)}</span>
      <span><strong>Commercial</strong>${escapeHtml(listing.rate)} - renter pays supplier direct</span>
      <span><strong>Availability</strong>${listing.availability === "available" ? "Available now" : "Available soon"}</span>
      <span><strong>Verification</strong>${listing.verified ? "Supplier verified" : "Founder review needed"}</span>
    </div>
  `;
}

function renderJobsitePlanner() {
  const model = getJobsiteModel();
  setText("#jobsiteTitle", `${model.blueprint.label} - ${model.region}`);
  setText("#jobsiteBadge", model.badge);

  document.querySelector("#jobsiteScore").innerHTML = [
    ["Readiness", `${model.packageScore}/100`],
    ["Matched", `${model.matchedCount}/${model.roles.length}`],
    ["Available now", String(model.availableCount)],
    ["Gaps", String(model.gaps.length)]
  ].map(([label, value]) => `
    <span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>
  `).join("");

  document.querySelector("#jobsitePackage").innerHTML = model.matches.map((match) => `
    <div class="jobsite-role ${match.listing ? "is-ready" : "is-gap"}">
      <span>
        <strong>${escapeHtml(match.role.role)}</strong>
        ${escapeHtml(match.role.target)}
      </span>
      <em>${match.listing ? `${escapeHtml(match.listing.name)} (${match.readiness}/100)` : "Supply gap"}</em>
      <small>${match.listing ? `${escapeHtml(match.listing.supplier)} - ${escapeHtml(match.listing.city)}, ${escapeHtml(match.listing.region)}` : `Recruit ${escapeHtml(match.role.target.toLowerCase())} suppliers for ${escapeHtml(model.region)}.`}</small>
    </div>
  `).join("");

  document.querySelector("#jobsiteGaps").innerHTML = model.gaps.length ? model.gaps.map((gap) => `
    <div class="jobsite-gap">
      <strong>${escapeHtml(gap.role)}</strong>
      <span>${escapeHtml(gap.message)}</span>
    </div>
  `).join("") : `
    <div class="jobsite-gap is-clear">
      <strong>Package covered</strong>
      <span>Every planned role has a visible supplier match. Move the package to RFQ, then let Award Intelligence choose the safest winner.</span>
    </div>
  `;
}

function getJobsiteModel() {
  const blueprint = getJobsiteBlueprint();
  const region = getJobsiteRegion();
  const usedIds = new Set();
  const matches = blueprint.roles.map((role) => {
    const listing = matchListingForJobsiteRole(role, region, usedIds);
    if (listing) usedIds.add(listing.id);
    return {
      role,
      listing,
      readiness: listing ? getTrustPassport(listing).score : 0
    };
  });
  const matched = matches.filter((match) => match.listing);
  const gaps = matches
    .filter((match) => !match.listing)
    .map((match) => ({
      role: match.role.role,
      message: `${match.role.target} is missing in ${region}. Save this as a demand signal and recruit suppliers before promising full coverage.`
    }));
  const averageReadiness = matched.length
    ? Math.round(matched.reduce((total, match) => total + match.readiness, 0) / matched.length)
    : 0;
  const coverageScore = Math.round((matched.length / matches.length) * 100);
  const packageScore = Math.round((coverageScore * 0.56) + (averageReadiness * 0.44));
  const availableCount = matched.filter((match) => match.listing.availability === "available").length;
  const badge = packageScore >= 86
    ? "Site-ready"
    : packageScore >= 62
      ? "Partial package"
      : "Supply gap";

  return {
    blueprint,
    region,
    roles: blueprint.roles,
    matches,
    matchedCount: matched.length,
    availableCount,
    gaps,
    averageReadiness,
    coverageScore,
    packageScore,
    badge
  };
}

function getJobsiteBlueprint() {
  if (state.jobsiteType && state.jobsiteType !== "smart") {
    return jobsiteBlueprints.find((blueprint) => blueprint.key === state.jobsiteType) || jobsiteBlueprints[0];
  }
  const text = [
    state.projectNote,
    state.search,
    state.demandEquipment,
    getSelectedListing().name,
    getSelectedListing().category,
    getSelectedListing().specs
  ].join(" ").toLowerCase();
  return jobsiteBlueprints
    .map((blueprint) => ({
      blueprint,
      score: blueprint.keywords.reduce((total, keyword) => total + (text.includes(keyword) ? 1 : 0), 0)
    }))
    .sort((a, b) => b.score - a.score)[0].blueprint;
}

function getJobsiteRegion() {
  if (state.jobsiteRegion && state.jobsiteRegion !== "selected") return state.jobsiteRegion;
  if (state.region && state.region !== "all") return state.region;
  return getSelectedListing().region;
}

function matchListingForJobsiteRole(role, region, usedIds) {
  const candidates = listings
    .filter((listing) => !usedIds.has(listing.id) && listing.region === region)
    .map((listing) => {
      const text = [listing.name, listing.category, listing.specs, listing.supplier].join(" ").toLowerCase();
      const hasRoleMatch = listing.category === role.category || role.keywords.some((keyword) => text.includes(keyword));
      let score = 0;
      if (listing.category === role.category) score += 12;
      score += role.keywords.reduce((total, keyword) => total + (text.includes(keyword) ? 8 : 0), 0);
      if (listing.region === region) score += 7;
      if (listing.availability === "available") score += 4;
      if (listing.availability === "soon") score += 2;
      if (listing.verified) score += 3;
      score += Math.round(getTrustPassport(listing).score / 25);
      return { listing, score: hasRoleMatch ? score : 0 };
    })
    .filter((candidate) => candidate.score >= 16)
    .sort((a, b) => b.score - a.score || a.listing.name.localeCompare(b.listing.name));

  return candidates[0]?.listing || null;
}

function renderTrustPassport() {
  const listing = getSelectedListing();
  const passport = getTrustPassport(listing);
  setText("#passportMachine", listing.name);
  setText("#passportScore", `${passport.score}/100`);
  setText("#passportVerdict", passport.verdict);
  document.querySelector(".passport-score-card").classList.toggle("is-strong", passport.score >= 80);
  document.querySelector(".passport-score-card").classList.toggle("is-watch", passport.score < 65);

  document.querySelector("#passportProof").innerHTML = passport.proofItems.map((item) => `
    <div class="passport-proof-row ${item.ready ? "is-ready" : "is-missing"}">
      <span><strong>${escapeHtml(item.label)}</strong>${escapeHtml(item.detail)}</span>
      <em>${item.ready ? "Ready" : "Need"}</em>
    </div>
  `).join("");

  document.querySelector("#passportRisk").innerHTML = passport.risks.map((risk) => `
    <div class="passport-risk-row ${risk.level}">
      <strong>${escapeHtml(risk.label)}</strong>
      <span>${escapeHtml(risk.detail)}</span>
    </div>
  `).join("");

  document.querySelector("#passportActions").innerHTML = passport.actions.map((action, index) => `
    <div>
      <strong>${index + 1}</strong>
      <span>${escapeHtml(action)}</span>
    </div>
  `).join("");
}

function getTrustPassport(listing) {
  const docs = listing.documents.map((document) => document.toLowerCase());
  const hasPending = docs.some((document) => document.includes("pending"));
  const verifiedScore = listing.verified ? 30 : 8;
  const availabilityScore = listing.availability === "available" ? 20 : listing.availability === "soon" ? 12 : 6;
  const cleanDocCount = docs.filter((document) => !document.includes("pending")).length;
  const documentScore = Math.min(24, cleanDocCount * 8);
  const categoryProof = getCategoryProof(listing);
  const proofScore = Math.round((categoryProof.filter((item) => item.ready).length / categoryProof.length) * 18);
  const directEnquiryScore = 8;
  const score = Math.min(100, verifiedScore + availabilityScore + documentScore + proofScore + directEnquiryScore);
  const missingProof = categoryProof.filter((item) => !item.ready).map((item) => item.label.toLowerCase());
  const verdict = score >= 84 ? "Enquiry-ready" : score >= 68 ? "Verify one gap" : "Founder review";

  return {
    score,
    verdict,
    proofItems: categoryProof,
    risks: [
      {
        level: listing.verified ? "low" : "medium",
        label: "Supplier identity",
        detail: listing.verified ? "Verified supplier profile is visible." : "Supplier should be reviewed before badge."
      },
      {
        level: hasPending ? "medium" : "low",
        label: "Document freshness",
        detail: hasPending ? "One or more documents are pending." : "Visible documents look clean in this prototype."
      },
      {
        level: listing.availability === "available" ? "low" : "medium",
        label: "Availability certainty",
        detail: listing.availability === "available" ? "Machine is marked available now." : "Availability should be reconfirmed before enquiry."
      }
    ],
    actions: missingProof.length ? [
      `Request ${missingProof.slice(0, 2).join(" and ")} from the supplier.`,
      "Confirm photos, serial-friendly internal ID, and current location.",
      "Copy the passport into the direct enquiry packet before contacting supplier."
    ] : [
      "Keep document expiry tracking fresh.",
      "Ask supplier to confirm current availability before dispatch.",
      "Use this passport as the buyer confidence block on the listing page."
    ]
  };
}

function getCategoryProof(listing) {
  const cleanDocuments = listing.documents.filter((document) => !document.toLowerCase().includes("pending"));
  const text = [listing.category, listing.specs, ...cleanDocuments].join(" ").toLowerCase();
  const base = [
    { label: "Company document", terms: ["trade license", "business license", "company registry", "gst"] },
    { label: "Insurance proof", terms: ["insurance"] },
    { label: "Inspection or service proof", terms: ["inspection", "service", "maintenance", "load test"] },
    { label: "Availability status", terms: ["available", "soon"] }
  ];
  const specialist = {
    Lifting: { label: "Operator or load proof", terms: ["operator", "load test", "capacity"] },
    Earthmoving: { label: "Attachment and job proof", terms: ["bucket", "breaker", "blade", "track", "inspection"] },
    Roadwork: { label: "Roadwork service proof", terms: ["maintenance", "compactor", "soil", "service"] },
    Power: { label: "Load bank proof", terms: ["load bank", "fuel", "power", "kva"] },
    Transport: { label: "Permit or capacity proof", terms: ["permit", "capacity", "trailer", "driver"] }
  };
  const checks = [...base, specialist[listing.category] || specialist.Earthmoving];
  return checks.map((check) => {
    const ready = check.terms.some((term) => text.includes(term)) || (check.label === "Availability status" && listing.availability);
    return {
      label: check.label,
      ready,
      detail: ready ? "Evidence visible on the listing." : `Add ${check.label.toLowerCase()} before full confidence.`
    };
  });
}

function toggleShortlist(id) {
  const exists = state.shortlistIds.includes(id);
  state.shortlistIds = exists ? state.shortlistIds.filter((listingId) => listingId !== id) : [...state.shortlistIds, id];
  saveState();
  renderShortlistTray();
  renderLeadPacket();
  renderRfqRoom();
  renderAwardRoom();
  renderMobilizationTower();
  showToast(exists ? "Removed from shortlist." : "Saved to shortlist.");
}

function renderShortlistTray(expanded = false) {
  const selected = getSelectedListing();
  const shortlisted = state.shortlistIds
    .map((id) => listings.find((listing) => listing.id === id))
    .filter(Boolean);
  const isSaved = state.shortlistIds.includes(selected.id);
  const toggle = document.querySelector("#shortlistToggleButton");
  toggle.textContent = isSaved ? "Remove from shortlist" : "Save to shortlist";

  document.querySelector("#shortlistTray").innerHTML = `
    <div class="shortlist-head">
      <strong>${shortlisted.length} shortlisted</strong>
      <span>${expanded ? "Comparison mode" : "Buyer memory"}</span>
    </div>
    ${shortlisted.length ? shortlisted.map((listing) => `
      <button type="button" class="shortlist-item ${listing.id === selected.id ? "is-selected" : ""}" data-shortlist-id="${escapeHtml(listing.id)}">
        <span><strong>${escapeHtml(listing.name)}</strong>${escapeHtml(listing.city)}, ${escapeHtml(listing.region)}</span>
        <em>${listing.availability === "available" ? "Now" : "Soon"}</em>
      </button>
    `).join("") : `<p>No saved machines yet. Select a listing and save it for comparison.</p>`}
  `;

  document.querySelectorAll("[data-shortlist-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedListingId = button.dataset.shortlistId;
      saveState();
      render();
    });
  });
}

function renderRfqRoom() {
  const rfq = getRfqModel();
  setText("#rfqTitle", rfq.title);
  setText("#rfqBadge", rfq.badge);

  document.querySelector("#rfqMetrics").innerHTML = [
    ["Machines", String(rfq.listings.length)],
    ["Avg readiness", `${rfq.averageScore}/100`],
    ["Verified suppliers", String(rfq.verifiedCount)],
    ["Available now", String(rfq.availableCount)]
  ].map(([label, value]) => `
    <span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>
  `).join("");

  document.querySelector("#rfqBrief").innerHTML = `
    <p><strong>Project note</strong>${escapeHtml(state.projectNote || "No project note yet.")}</p>
    <p><strong>Payment stance</strong>Buyer pays rental company directly. Heavyster routes the enquiry only.</p>
    <p><strong>Control rule</strong>Attach Trust Passport details and request availability, operator, delivery, documents, and quote validity.</p>
  `;

  document.querySelector("#rfqRouteBoard").innerHTML = rfq.routes.map((route) => `
    <div class="rfq-route ${route.ready ? "is-ready" : "needs-work"}">
      <span><strong>${escapeHtml(route.listing.name)}</strong>${escapeHtml(route.listing.supplier)} - ${escapeHtml(route.listing.city)}, ${escapeHtml(route.listing.region)}</span>
      <em>${route.score}/100</em>
    </div>
  `).join("");

  document.querySelector("#rfqChecklist").innerHTML = rfq.checklist.map((item, index) => `
    <div>
      <strong>${index + 1}</strong>
      <span>${escapeHtml(item)}</span>
    </div>
  `).join("");
}

function getRfqModel() {
  const listingsForRfq = getRfqListings();
  const routes = listingsForRfq.map((listing) => {
    const passport = getTrustPassport(listing);
    return {
      listing,
      score: passport.score,
      ready: passport.score >= 68 && listing.verified
    };
  });
  const averageScore = Math.round(routes.reduce((total, route) => total + route.score, 0) / routes.length);
  const verifiedCount = routes.filter((route) => route.listing.verified).length;
  const availableCount = routes.filter((route) => route.listing.availability === "available").length;
  const needsWork = routes.filter((route) => !route.ready).length;
  const badge = routes.length >= 2 && needsWork === 0 ? "Send now" : routes.length >= 2 ? "Verify gaps" : "Add options";

  return {
    title: routes.length > 1 ? `${routes.length} supplier RFQ` : "Single supplier RFQ",
    listings: listingsForRfq,
    routes,
    averageScore,
    verifiedCount,
    availableCount,
    badge,
    checklist: [
      "Send the same project scope to every shortlisted supplier.",
      "Ask each supplier to confirm availability, quote validity, operator option, delivery, and documents.",
      "Compare replies by readiness score, response time, and document completeness.",
      "Keep rental payment direct between buyer and supplier in phase one."
    ]
  };
}

function getRfqListings() {
  const shortlisted = (state.shortlistIds || [])
    .map((id) => listings.find((listing) => listing.id === id))
    .filter(Boolean);
  return shortlisted.length ? shortlisted : [getSelectedListing()];
}

function renderAwardRoom() {
  const award = getAwardModel();
  const winner = award.winner;

  setText("#awardWinner", `${winner.listing.supplier}`);
  setText("#awardBadge", award.badge);

  document.querySelector("#awardScore").innerHTML = `
    <strong>${winner.total}/100</strong>
    <span>${escapeHtml(winner.listing.name)} - ${escapeHtml(winner.listing.city)}, ${escapeHtml(winner.listing.region)}</span>
  `;

  document.querySelector("#awardReason").innerHTML = winner.reasons.map((reason) => `
    <div>${escapeHtml(reason)}</div>
  `).join("");

  document.querySelector("#awardMatrix").innerHTML = award.candidates.map((candidate, index) => `
    <div class="award-row ${index === 0 ? "is-winner" : ""}">
      <span>
        <strong>${escapeHtml(candidate.listing.supplier)}</strong>
        ${escapeHtml(candidate.listing.name)} - ${escapeHtml(candidate.listing.city)}, ${escapeHtml(candidate.listing.region)}
      </span>
      <em>${candidate.total}/100</em>
      <small>${escapeHtml(candidate.signal)}</small>
      <b>${escapeHtml(candidate.action)}</b>
    </div>
  `).join("");

  document.querySelector("#awardMemo").innerHTML = buildAwardMemoText(award)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");
}

function getAwardModel() {
  const ranked = getAwardCandidates()
    .map((listing) => getAwardScore(listing))
    .sort((a, b) => b.total - a.total || a.listing.supplier.localeCompare(b.listing.supplier));
  const candidates = ranked.map((candidate, index) => {
    if (index === 0) {
      return {
        ...candidate,
        action: candidate.total >= 74 ? "Award" : "Clarify"
      };
    }
    if (candidate.total >= 74) {
      return {
        ...candidate,
        signal: candidate.total >= 86 ? "Qualified backup" : candidate.signal,
        action: "Backup"
      };
    }
    return candidate;
  });
  const winner = candidates[0];
  const hasMultipleOptions = candidates.length > 1;
  const hasWinnerDocumentGaps = winner.documentGaps > 0;
  const badge = !hasMultipleOptions
    ? "Single option"
    : winner.total >= 86 && !hasWinnerDocumentGaps
      ? "Award-ready"
      : winner.total >= 74
        ? "Clarify terms"
        : "Hold award";

  return {
    badge,
    winner,
    candidates,
    shortlistMode: (state.shortlistIds || []).length >= 2
  };
}

function getAwardCandidates() {
  const shortlisted = getRfqListings();
  if (shortlisted.length >= 2) return shortlisted;

  const selected = getSelectedListing();
  const alternatives = listings
    .filter((listing) => listing.id !== selected.id)
    .map((listing) => {
      let score = 0;
      if (listing.region === selected.region) score += 5;
      if (listing.category === selected.category) score += 4;
      if (listing.availability === "available") score += 2;
      if (listing.verified) score += 1;
      return { listing, score };
    })
    .sort((a, b) => b.score - a.score || a.listing.name.localeCompare(b.listing.name))
    .slice(0, 2)
    .map((item) => item.listing);

  return [selected, ...alternatives];
}

function getAwardScore(listing) {
  const passport = getTrustPassport(listing);
  const proof = getCategoryProof(listing);
  const pendingDocs = listing.documents.filter((document) => document.toLowerCase().includes("pending")).length;
  const missingProof = proof.filter((item) => !item.ready).length;
  const documentGaps = pendingDocs + missingProof;
  const selected = getSelectedListing();
  const availabilityBonus = listing.availability === "available" ? 12 : listing.availability === "soon" ? 6 : 0;
  const verificationBonus = listing.verified ? 8 : -6;
  const documentBonus = documentGaps === 0 ? 8 : documentGaps === 1 ? 3 : -7;
  const locationBonus = listing.region === selected.region ? 5 : 0;
  const shortlistBonus = (state.shortlistIds || []).includes(listing.id) ? 4 : 0;
  const total = Math.max(0, Math.min(100, Math.round(passport.score * 0.72 + availabilityBonus + verificationBonus + documentBonus + locationBonus + shortlistBonus)));
  const reasons = [
    `Trust Passport ${passport.score}/100 with ${passport.verdict.toLowerCase()} status.`,
    listing.availability === "available" ? "Marked available now for faster award." : "Availability should be reconfirmed before award.",
    listing.verified ? "Supplier identity is verified." : "Supplier identity still needs founder review.",
    documentGaps ? `${documentGaps} proof gap${documentGaps === 1 ? "" : "s"} should be closed before dispatch.` : "No visible document gaps in this prototype.",
    listing.region === selected.region ? "Region aligns with the selected project market." : "Cross-region option; confirm service radius and delivery."
  ];
  const signal = total >= 86
    ? "Cleanest award path"
    : total >= 74
      ? "Good option, clarify terms"
      : total >= 62
        ? "Backup only"
        : "Hold for verification";
  const action = total >= 86 ? "Award" : total >= 74 ? "Clarify" : total >= 62 ? "Backup" : "Hold";

  return {
    listing,
    total,
    reasons,
    signal,
    action,
    documentGaps
  };
}

function renderQuoteGuard() {
  const model = getQuoteGuardModel();

  setText("#quoteGuardTitle", model.target.supplier);
  setText("#quoteGuardBadge", model.badge);

  document.querySelector("#quoteAmount").value = String(model.quoteAmount);
  document.querySelector("#quoteDays").value = String(model.quoteDays);
  document.querySelectorAll("[data-quote-include]").forEach((input) => {
    input.checked = Boolean(model.includes[input.dataset.quoteInclude]);
  });

  document.querySelector("#quoteGuardScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${escapeHtml(model.target.name)} - ${escapeHtml(model.rateSignal)} daily quote view</span>
  `;

  document.querySelector("#quoteGuardMetrics").innerHTML = [
    ["Quote", `USD ${model.quoteAmount.toLocaleString()}`],
    ["Daily view", `USD ${model.dailyRate.toLocaleString()}`],
    ["Missing terms", String(model.missingCount)],
    ["Supplier keeps", "100%"]
  ].map(([label, value]) => `
    <span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>
  `).join("");

  document.querySelector("#quoteGuardBoard").innerHTML = model.board.map((item) => `
    <div class="quote-row ${item.statusClass}">
      <span>
        <strong>${escapeHtml(item.label)}</strong>
        ${escapeHtml(item.detail)}
      </span>
      <em>${escapeHtml(item.status)}</em>
      <b>${escapeHtml(item.action)}</b>
    </div>
  `).join("");

  document.querySelector("#quoteGuardMemo").innerHTML = buildQuoteGuardText(model)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");
}

function getQuoteGuardModel() {
  const award = getAwardModel();
  const target = award.winner.listing;
  const passport = getTrustPassport(target);
  const includes = {
    operator: Boolean(state.quoteIncludes.operator),
    transport: Boolean(state.quoteIncludes.transport),
    fuel: Boolean(state.quoteIncludes.fuel),
    permit: Boolean(state.quoteIncludes.permit),
    overtime: Boolean(state.quoteIncludes.overtime),
    validity: Boolean(state.quoteIncludes.validity)
  };
  const quoteAmount = Math.max(500, Number(state.quoteAmount || 8500));
  const quoteDays = Math.max(1, Number(state.quoteDays || 5));
  const dailyRate = Math.round(quoteAmount / quoteDays);
  const band = getQuoteBand(target);
  const text = [
    target.name,
    target.category,
    target.specs,
    target.documents.join(" "),
    state.projectNote
  ].join(" ").toLowerCase();
  const rateSignal = dailyRate < band.low
    ? "Below prototype band"
    : dailyRate > band.high
      ? "Above prototype band"
      : "Inside prototype band";
  const rateStatus = rateSignal === "Inside prototype band" ? "Ready" : "Confirm";
  const rateDetail = `Modeled ${target.category.toLowerCase()} band for ${target.region}: USD ${band.low.toLocaleString()}-${band.high.toLocaleString()} per day.`;
  const terms = [
    {
      key: "operator",
      label: "Operator or crew",
      weight: 14,
      fallback: text.includes("operator") || text.includes("driver"),
      severity: "gap",
      detail: "Confirm whether certified operator, helper crew, and shift hours are included."
    },
    {
      key: "transport",
      label: "Transport and mobilization",
      weight: 14,
      fallback: text.includes("delivery") || text.includes("transport") || text.includes("lowbed"),
      severity: "gap",
      detail: "Lock pickup, delivery, demobilization, route, site access, and who pays the move."
    },
    {
      key: "fuel",
      label: "Fuel and consumables",
      weight: 9,
      fallback: text.includes("fuel"),
      severity: "confirm",
      detail: "Clarify fuel, grease, wear items, and refill responsibility."
    },
    {
      key: "permit",
      label: "Permit and site access",
      weight: target.category === "Lifting" ? 12 : 7,
      fallback: text.includes("permit") || text.includes("city"),
      severity: target.category === "Lifting" ? "gap" : "confirm",
      detail: "Confirm lift permit, road permit, gate passes, access timing, and document holder."
    },
    {
      key: "overtime",
      label: "Overtime and standby",
      weight: 10,
      fallback: text.includes("weekly") || text.includes("shift"),
      severity: "confirm",
      detail: "State overtime, weekend, night shift, idle day, and standby rules before award."
    },
    {
      key: "validity",
      label: "Quote validity window",
      weight: 8,
      fallback: text.includes("quote") || text.includes("terms"),
      severity: "confirm",
      detail: "Set validity date, deposit terms, cancellation rule, and direct payment contact."
    }
  ];
  const boardTerms = terms.map((term) => getQuoteTermStatus(term, includes[term.key]));
  const coverageScore = boardTerms.reduce((total, item) => total + item.points, 0);
  const rateScore = rateStatus === "Ready" ? 20 : 10;
  const gapCount = boardTerms.filter((item) => item.status === "Gap").length;
  const missingCount = boardTerms.filter((item) => item.status !== "Ready").length + (rateStatus === "Ready" ? 0 : 1);
  const score = Math.max(0, Math.min(100, Math.round(
    coverageScore
    + rateScore
    + passport.score * 0.12
    + award.winner.total * 0.05
    - gapCount * 4
  )));
  const badge = score >= 86 && gapCount === 0
    ? "Quote-clean"
    : score >= 62
      ? "Clarify terms"
      : "Hold quote";
  const board = [
    {
      label: "Daily rate sense",
      status: rateStatus,
      statusClass: rateStatus.toLowerCase(),
      detail: rateDetail,
      action: rateStatus === "Ready" ? "Keep" : "Break up"
    },
    ...boardTerms,
    {
      label: "Phase one payment",
      status: "Direct",
      statusClass: "direct",
      detail: "Buyer and supplier settle payment directly; Heavyster only cleans the quote path.",
      action: "No take"
    }
  ];

  return {
    award,
    target,
    passport,
    includes,
    quoteAmount,
    quoteDays,
    dailyRate,
    band,
    rateSignal,
    score,
    badge,
    board,
    missingCount,
    gapCount
  };
}

function getQuoteTermStatus(term, included) {
  const status = included ? "Ready" : term.fallback ? "Confirm" : term.severity === "gap" ? "Gap" : "Confirm";
  const statusClass = status.toLowerCase();
  const points = included ? term.weight : term.fallback ? Math.round(term.weight * 0.45) : 0;
  const action = included ? "Keep" : term.fallback ? "Name it" : term.severity === "gap" ? "Add line" : "Clarify";
  const detail = included ? `${term.label} is marked inside the quote.` : term.detail;

  return {
    label: term.label,
    status,
    statusClass,
    detail,
    action,
    points
  };
}

function getQuoteBand(listing) {
  const bands = {
    Earthmoving: [650, 1700],
    Lifting: [1200, 4800],
    Roadwork: [400, 1200],
    Power: [150, 750],
    Transport: [550, 1500]
  };
  const multipliers = {
    UAE: 1.05,
    USA: 1.15,
    UK: 1.2,
    India: 0.65
  };
  const [low, high] = bands[listing.category] || [500, 1800];
  const multiplier = multipliers[listing.region] || 1;
  return {
    low: Math.round(low * multiplier),
    high: Math.round(high * multiplier)
  };
}

function renderMobilizationTower() {
  const model = getMobilizationModel();

  setText("#mobilizeTitle", model.title);
  setText("#mobilizeBadge", model.badge);

  document.querySelector("#mobilizeScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${escapeHtml(model.target.name)} - ${escapeHtml(model.target.city)}, ${escapeHtml(model.target.region)}</span>
  `;

  document.querySelector("#mobilizeSummary").innerHTML = model.summary.map((item) => `
    <div>
      <strong>${escapeHtml(item.label)}</strong>
      <span>${escapeHtml(item.value)}</span>
    </div>
  `).join("");

  document.querySelector("#mobilizeChecklist").innerHTML = model.checks.map((check) => `
    <div class="mobilize-check ${check.status.toLowerCase()}">
      <span>
        <strong>${escapeHtml(check.label)}</strong>
        ${escapeHtml(check.detail)}
      </span>
      <em>${escapeHtml(check.status)}</em>
    </div>
  `).join("");

  document.querySelector("#mobilizeHandoff").innerHTML = model.handoff.map((line) => `
    <p>${escapeHtml(line)}</p>
  `).join("");
}

function getMobilizationModel() {
  const award = getAwardModel();
  const jobsite = getJobsiteModel();
  const target = award.winner.listing;
  const passport = getTrustPassport(target);
  const quote = getQuoteGuardModel();
  const pendingDocs = target.documents.filter((document) => document.toLowerCase().includes("pending")).length;
  const text = [target.name, target.category, target.specs, target.documents.join(" ")].join(" ").toLowerCase();
  const hasOperatorEvidence = text.includes("operator") || text.includes("driver");
  const hasTransportEvidence = text.includes("delivery") || text.includes("permit") || text.includes("transport") || text.includes("lowbed");
  const packageGapCount = jobsite.gaps.length;
  const checks = [
    {
      label: "Availability lock",
      status: target.availability === "available" ? "Ready" : "Confirm",
      detail: target.availability === "available" ? "Machine is marked available now." : "Supplier must reconfirm the start window before dispatch."
    },
    {
      label: "Supplier and document proof",
      status: target.verified && pendingDocs === 0 ? "Ready" : pendingDocs ? "Gap" : "Confirm",
      detail: target.verified && pendingDocs === 0 ? "Verified supplier with visible clean documents." : "Close supplier verification or pending document gaps."
    },
    {
      label: "Operator or crew path",
      status: hasOperatorEvidence ? "Ready" : "Confirm",
      detail: hasOperatorEvidence ? "Operator or crew support is visible in the listing proof." : "Confirm whether rental includes operator, helper crew, or buyer-provided operator."
    },
    {
      label: "Transport, access, and permits",
      status: hasTransportEvidence ? "Ready" : "Confirm",
      detail: hasTransportEvidence ? "Transport, permit, or site movement support is visible." : "Confirm site access, delivery route, lifting permits, and mobilization cost."
    },
    {
      label: "Quote validity and payment",
      status: "Confirm",
      detail: "Supplier should lock rate, quote validity, deposit terms, and direct buyer-supplier payment route."
    },
    {
      label: "Quote Guard clarity",
      status: quote.score >= 82 ? "Ready" : quote.score >= 58 ? "Confirm" : "Gap",
      detail: `${quote.missingCount} quote term${quote.missingCount === 1 ? "" : "s"} need clearer wording before dispatch.`
    },
    {
      label: "Package support coverage",
      status: packageGapCount === 0 ? "Ready" : packageGapCount <= 2 ? "Confirm" : "Gap",
      detail: packageGapCount === 0 ? "Jobsite package has visible matched support equipment." : `${packageGapCount} jobsite package gap${packageGapCount === 1 ? "" : "s"} should be filled or excluded before promise.`
    }
  ];
  const readyCount = checks.filter((check) => check.status === "Ready").length;
  const gapCount = checks.filter((check) => check.status === "Gap").length;
  const gateScore = Math.round((readyCount / checks.length) * 100);
  const packageScore = packageGapCount === 0 ? 12 : packageGapCount === 1 ? 7 : packageGapCount === 2 ? 3 : 0;
  const score = Math.max(0, Math.min(100, Math.round(passport.score * 0.5 + gateScore * 0.38 + packageScore - gapCount * 4)));
  const badge = score >= 86 && gapCount === 0
    ? "Mobilize-ready"
    : score >= 66
      ? "Control gaps"
      : "Hold dispatch";
  const risks = [
    target.availability === "available" ? "Availability is strong; still lock the exact start time." : "Availability is not fully locked for the start window.",
    packageGapCount ? `${packageGapCount} package support gap${packageGapCount === 1 ? "" : "s"} remain from Jobsite Planner.` : "Jobsite support package is covered in the planner.",
    hasTransportEvidence ? "Transport or permit support is visible." : "Mobilization route, delivery cost, and site access need confirmation."
  ];

  return {
    title: `${target.supplier}`,
    badge,
    target,
    passport,
    score,
    checks,
    summary: [
      { label: "Award signal", value: `${award.badge} - ${award.winner.total}/100` },
      { label: "Quote Guard", value: `${quote.score}/100 - ${quote.badge}` },
      { label: "Trust Passport", value: `${passport.score}/100 - ${passport.verdict}` },
      { label: "Jobsite package", value: `${jobsite.matchedCount}/${jobsite.roles.length} matched, ${packageGapCount} gap${packageGapCount === 1 ? "" : "s"}` },
      { label: "Dispatch risk", value: risks.join(" ") }
    ],
    handoff: [
      `Mobilization target: ${target.supplier} for ${target.name} in ${target.city}, ${target.region}.`,
      `Project note: ${state.projectNote || "No project note provided"}`,
      `Start window: ${state.jobsiteUrgency}. Availability: ${target.availability === "available" ? "available now" : "available soon"}.`,
      `Quote Guard: ${quote.score}/100, ${quote.badge}, ${quote.missingCount} unclear quote term${quote.missingCount === 1 ? "" : "s"}.`,
      `Before dispatch: confirm operator, delivery route, site access, quote validity, insurance, inspection, and any permit requirement.`,
      "Payment remains direct between buyer and rental company. Heavyster provides listing, RFQ, decision, and mobilization handoff support only."
    ]
  };
}

function renderYardAvailability() {
  const model = getYardModel();
  setText("#yardTitle", model.title);
  setText("#yardBadge", model.badge);

  document.querySelector("#yardScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${model.readyCount} fresh listings, ${model.reviewCount} need supplier confirmation.</span>
  `;

  document.querySelector("#yardMetrics").innerHTML = [
    ["Available now", String(model.availableCount)],
    ["Available soon", String(model.soonCount)],
    ["Reconfirm", String(model.reviewCount)],
    ["Demand pressure", `${model.demandCount} signals`]
  ].map(([label, value]) => `
    <span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>
  `).join("");

  document.querySelector("#yardBoard").innerHTML = model.rows.map((row) => `
    <div class="yard-row ${row.statusClass}">
      <span>
        <strong>${escapeHtml(row.listing.name)}</strong>
        ${escapeHtml(row.listing.supplier)} - ${escapeHtml(row.listing.city)}, ${escapeHtml(row.listing.region)}
      </span>
      <em>${escapeHtml(row.availabilityLabel)}</em>
      <small>${escapeHtml(row.freshnessLabel)}</small>
      <b>${escapeHtml(row.action)}</b>
    </div>
  `).join("");

  document.querySelector("#yardRefreshQueue").innerHTML = model.refreshQueue.map((item, index) => `
    <div class="yard-refresh-item">
      <strong>${index + 1}</strong>
      <span>${escapeHtml(item)}</span>
    </div>
  `).join("");
}

function getYardModel() {
  const rows = listings.map((listing, index) => getYardRow(listing, index));
  const readyCount = rows.filter((row) => row.status === "fresh").length;
  const reviewCount = rows.filter((row) => row.status !== "fresh").length;
  const availableCount = rows.filter((row) => row.listing.availability === "available").length;
  const soonCount = rows.filter((row) => row.listing.availability === "soon").length;
  const demandCount = getDemandSignals().reduce((total, signal) => total + Number(signal.count || 1), 0);
  const averageFreshness = Math.round(rows.reduce((total, row) => total + row.score, 0) / rows.length);
  const demandPenalty = Math.min(10, Math.floor(demandCount / 2));
  const score = Math.max(0, Math.min(100, averageFreshness - demandPenalty + Math.min(8, availableCount)));
  const badge = score >= 82 ? "Fresh yard" : score >= 64 ? "Refresh needed" : "Trust risk";
  const refreshQueue = rows
    .filter((row) => row.status !== "fresh")
    .slice(0, 4)
    .map((row) => `${row.listing.supplier}: confirm ${row.listing.name} availability, documents, photos, operator option, and direct enquiry contact.`);

  if (!refreshQueue.length) {
    refreshQueue.push("All visible demo listings are fresh. Ask suppliers to confirm again before high-value enquiries.");
  }

  return {
    title: "Supplier yard freshness",
    badge,
    rows,
    readyCount,
    reviewCount,
    availableCount,
    soonCount,
    demandCount,
    score,
    refreshQueue
  };
}

function getYardRow(listing, index) {
  const passport = getTrustPassport(listing);
  const baseAge = [2, 6, 14, 4, 18, 8][index % 6];
  const ageDays = listing.availability === "available" ? baseAge : baseAge + 4;
  const pendingDocs = listing.documents.some((document) => document.toLowerCase().includes("pending"));
  const demandPressure = getDemandSignals().some((signal) => {
    const demandText = `${signal.equipment} ${getHuntPlan(signal).category}`.toLowerCase();
    return demandText.includes(listing.category.toLowerCase()) || demandText.includes(listing.name.split(" ")[0].toLowerCase());
  });
  const score = Math.max(0, Math.min(100,
    passport.score
    - Math.max(0, ageDays - 5) * 3
    - (pendingDocs ? 14 : 0)
    + (listing.availability === "available" ? 8 : 0)
    - (demandPressure ? 4 : 0)
  ));
  const status = score >= 78 ? "fresh" : score >= 58 ? "watch" : "stale";
  const availabilityLabel = listing.availability === "available" ? "Now" : listing.availability === "soon" ? "Soon" : "Call";
  const freshnessLabel = `${ageDays}d since supplier check`;
  const action = status === "fresh" ? "Keep live" : status === "watch" ? "Reconfirm" : "Pause risk";

  return {
    listing,
    score,
    status,
    statusClass: `is-${status}`,
    availabilityLabel,
    freshnessLabel,
    action
  };
}

function renderSupplierStorefront() {
  const model = getSupplierStorefrontModel();
  setText("#storefrontName", model.profile.supplier);
  setText("#storefrontSlug", `/suppliers/${model.profile.slug}/`);
  setText("#storefrontIntro", model.profile.headline);

  document.querySelector("#storefrontScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${escapeHtml(model.badge)} - ${escapeHtml(model.profile.branch)}</span>
  `;

  document.querySelector("#storefrontMetrics").innerHTML = [
    ["Public URL", `/suppliers/${model.profile.slug}/`],
    ["Visible fleet", `${model.visibleFleetCount} listing${model.visibleFleetCount === 1 ? "" : "s"}`],
    ["Response", model.profile.response],
    ["Supplier keeps", "100%"]
  ].map(([label, value]) => `
    <span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>
  `).join("");

  document.querySelector("#storefrontFleet").innerHTML = model.profile.fleet.map((lane) => `
    <div class="storefront-fleet-row ${lane.status.toLowerCase().replace(/\s+/g, "-")}">
      <span>
        <strong>${escapeHtml(lane.label)}</strong>
        ${lane.count} modeled fleet item${lane.count === 1 ? "" : "s"}
      </span>
      <em>${escapeHtml(lane.status)}</em>
    </div>
  `).join("");

  document.querySelector("#storefrontProof").innerHTML = [
    ...model.profile.services.map((service) => ({ label: service, type: "Service" })),
    ...model.profile.proof.map((proof) => ({ label: proof, type: "Proof" }))
  ].map((item) => `
    <div>
      <strong>${escapeHtml(item.type)}</strong>
      <span>${escapeHtml(item.label)}</span>
    </div>
  `).join("");

  document.querySelector("#storefrontPacket").innerHTML = buildSupplierStorefrontText(model)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");
}

function getSupplierStorefrontModel(listing = getSelectedListing()) {
  const profile = getSupplierProfile(listing.supplier);
  const supplierListings = listings.filter((item) => item.supplier === profile.supplier);
  const visibleListings = supplierListings.length ? supplierListings : [listing];
  const passportScores = visibleListings.map((item) => getTrustPassport(item).score);
  const averagePassport = Math.round(passportScores.reduce((total, score) => total + score, 0) / passportScores.length);
  const yardRows = getYardModel().rows.filter((row) => row.listing.supplier === profile.supplier);
  const yardScore = yardRows.length
    ? Math.round(yardRows.reduce((total, row) => total + row.score, 0) / yardRows.length)
    : 70;
  const verifiedBonus = visibleListings.every((item) => item.verified) ? 8 : -6;
  const serviceDepth = Math.min(10, profile.services.length * 2);
  const proofDepth = Math.min(10, profile.proof.length * 2);
  const score = Math.max(0, Math.min(100, Math.round(
    averagePassport * 0.42
    + yardScore * 0.28
    + serviceDepth
    + proofDepth
    + verifiedBonus
  )));
  const badge = score >= 86 ? "Storefront ready" : score >= 66 ? "Strong profile" : "Needs proof";

  return {
    profile,
    listing,
    visibleListings,
    visibleFleetCount: visibleListings.length,
    averagePassport,
    yardScore,
    score,
    badge
  };
}

function getSupplierProfile(supplierName) {
  return supplierProfiles.find((profile) => profile.supplier === supplierName)
    || {
      supplier: supplierName,
      slug: supplierName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
      headline: "Verified equipment rental supplier with direct enquiry routing.",
      branch: getSelectedListing().city + ", " + getSelectedListing().region,
      serviceArea: "Local and regional project sites",
      response: "Confirm",
      since: "Founder review",
      fleet: [{ label: getSelectedListing().category, count: 1, status: "Confirm" }],
      services: ["Direct enquiry routing", "Document checklist", "Availability update"],
      proof: getSelectedListing().documents
    };
}

function prepareDemandFromSearch() {
  state.demandEquipment = getDemandEquipmentFromSearch();
  state.demandRegion = state.region === "all" ? getSelectedListing().region : state.region;
  state.demandUrgency = state.availability === "soon" ? "Next week" : "This week";
  state.demandDuration = state.demandDuration || "5 days";
}

function getDemandEquipmentFromSearch() {
  const query = state.search.trim();
  if (query) return toTitleCase(query);
  if (state.category !== "all") return `${state.category} equipment`;
  return getSelectedListing().name;
}

function renderDemandCapture() {
  const totalDemand = getDemandSignals().reduce((total, signal) => total + Number(signal.count || 1), 0);
  document.querySelector("#demandEquipment").value = state.demandEquipment || "";
  document.querySelector("#demandRegion").value = state.demandRegion || "UAE";
  document.querySelector("#demandUrgency").value = state.demandUrgency || "This week";
  document.querySelector("#demandDuration").value = state.demandDuration || "";
  setText("#demandSignalCount", `${totalDemand} signals`);
}

function saveDemandSignal(source = "Buyer request", readInputs = true) {
  if (readInputs) updateDemandState();

  const equipment = normalizeDemandEquipment(state.demandEquipment || getDemandEquipmentFromSearch());
  const region = state.demandRegion || "UAE";
  const urgency = state.demandUrgency || "This week";
  const duration = state.demandDuration || "5 days";
  const signals = getDemandSignals();
  const existing = signals.find((signal) =>
    signal.equipment.toLowerCase() === equipment.toLowerCase()
    && signal.region === region
    && signal.urgency === urgency
  );

  if (existing) {
    existing.count = Number(existing.count || 1) + 1;
    existing.duration = duration;
    existing.source = source;
  } else {
    signals.unshift({ equipment, region, urgency, duration, source, count: 1 });
  }

  state.demandEquipment = equipment;
  state.demandRegion = region;
  state.demandUrgency = urgency;
  state.demandDuration = duration;
  state.demandSignals = signals.slice(0, 8);
  state.activeDemandKey = getDemandKey({ equipment, region, urgency });
  state.activeMarketKey = getMarketKeyFromSignal({ equipment, region, urgency });
  saveState();
  renderDemandCapture();
  renderDemandRadar();
  renderSupplierHunt();
  renderMarketMaker();
  showToast(`${equipment} demand saved for ${region}.`);
}

function getDemandSignals() {
  if (!Array.isArray(state.demandSignals)) {
    state.demandSignals = seedDemandSignals.map((signal) => ({ ...signal }));
  }
  return state.demandSignals;
}

function normalizeDemandEquipment(value) {
  const cleaned = String(value || "").trim().replace(/\s+/g, " ");
  return cleaned ? toTitleCase(cleaned) : "Heavy equipment";
}

function renderSupplierTable() {
  const model = getSupplierStudioModel();
  setText("#studioSupplierName", model.profile.supplier);

  document.querySelector("#studioHealth").innerHTML = [
    ["Profile", `${model.profileCompletion}/100`, model.profileCompletion >= 82 ? "Ready" : "Improve"],
    ["Storefront", `${model.storefront.score}/100`, model.storefront.badge],
    ["Listing revenue", `USD ${model.monthlyRevenue}/mo`, `USD ${model.annualRevenue}/yr`],
    ["Freshness", `${model.yardScore}/100`, model.freshnessLabel]
  ].map(([label, value, detail]) => `
    <span>
      <strong>${escapeHtml(value)}</strong>
      ${escapeHtml(label)}
      <small>${escapeHtml(detail)}</small>
    </span>
  `).join("");

  document.querySelector("#studioOps").innerHTML = model.ops.map((item) => `
    <div class="studio-op ${item.statusClass}">
      <span>
        <strong>${escapeHtml(item.label)}</strong>
        ${escapeHtml(item.detail)}
      </span>
      <em>${escapeHtml(item.status)}</em>
    </div>
  `).join("");

  document.querySelector("#supplierTable").innerHTML = model.listings.map((listing) => {
    const passport = getTrustPassport(listing);
    const yardRow = getYardRow(listing, listings.findIndex((item) => item.id === listing.id));
    return `
    <button type="button" class="supplier-row ${listing.id === state.selectedListingId ? "is-active" : ""}" data-studio-listing-id="${escapeHtml(listing.id)}">
      <div>
        <strong>${escapeHtml(listing.name)}</strong>
        <span>${escapeHtml(listing.category)} - ${escapeHtml(listing.city)} - Trust ${passport.score}/100</span>
      </div>
      <span>${listing.availability === "available" ? "Available" : "Soon"} - ${yardRow.action}</span>
      <em>${listing.verified ? "Paid" : "Draft"}</em>
    </button>
  `;
  }).join("");

  document.querySelectorAll("[data-studio-listing-id]").forEach((row) => {
    row.addEventListener("click", () => {
      state.selectedListingId = row.dataset.studioListingId;
      saveState();
      render();
      showToast("Supplier listing selected.");
    });
  });
}

function getSupplierStudioModel() {
  const selected = getSelectedListing();
  const storefront = getSupplierStorefrontModel(selected);
  const profile = storefront.profile;
  const supplierListings = listings.filter((listing) => listing.supplier === profile.supplier);
  const visibleListings = supplierListings.length ? supplierListings : [selected];
  const yardRows = visibleListings.map((listing) => getYardRow(listing, listings.findIndex((item) => item.id === listing.id)));
  const docGaps = visibleListings.reduce((total, listing) => (
    total
    + (listing.verified ? 0 : 1)
    + listing.documents.filter((document) => document.toLowerCase().includes("pending")).length
  ), 0);
  const availabilityGaps = visibleListings.filter((listing) => listing.availability !== "available").length;
  const completedSignals = [
    Boolean(profile.headline),
    Boolean(profile.branch),
    Boolean(profile.serviceArea),
    profile.services.length >= 3,
    profile.proof.length >= 3,
    visibleListings.length > 0,
    docGaps === 0,
    availabilityGaps === 0
  ].filter(Boolean).length;
  const profileCompletion = Math.round((completedSignals / 8) * 100);
  const yardScore = yardRows.length
    ? Math.round(yardRows.reduce((total, row) => total + row.score, 0) / yardRows.length)
    : storefront.yardScore;
  const monthlyRevenue = visibleListings.length * 9;
  const annualRevenue = visibleListings.length * 99;
  const modeledListings = profile.fleet.reduce((total, lane) => total + lane.count, 0);
  const modeledAnnualRevenue = modeledListings * 99;
  const freshnessLabel = yardScore >= 82 ? "Fresh yard" : yardScore >= 64 ? "Refresh needed" : "Trust risk";
  const publishReady = profileCompletion >= 82 && storefront.score >= 72 && docGaps === 0;

  return {
    profile,
    storefront,
    listings: visibleListings,
    profileCompletion,
    yardScore,
    freshnessLabel,
    monthlyRevenue,
    annualRevenue,
    modeledListings,
    modeledAnnualRevenue,
    docGaps,
    availabilityGaps,
    ops: [
      {
        label: "Publish storefront",
        status: publishReady ? "Ready" : "Improve",
        statusClass: publishReady ? "ready" : "confirm",
        detail: publishReady
          ? `/suppliers/${profile.slug}/ can be shown to buyers.`
          : "Close profile, document, or freshness gaps before pushing hard."
      },
      {
        label: "Document gaps",
        status: docGaps ? "Gap" : "Ready",
        statusClass: docGaps ? "gap" : "ready",
        detail: docGaps ? `${docGaps} supplier or listing proof gap${docGaps === 1 ? "" : "s"} need review.` : "Visible supplier documents are clean for this prototype."
      },
      {
        label: "Availability freshness",
        status: yardScore >= 82 ? "Ready" : yardScore >= 64 ? "Confirm" : "Gap",
        statusClass: yardScore >= 82 ? "ready" : yardScore >= 64 ? "confirm" : "gap",
        detail: `${freshnessLabel}. Reconfirm machines before serious enquiries.`
      },
      {
        label: "Revenue preview",
        status: "Track",
        statusClass: "direct",
        detail: `${visibleListings.length} live demo listing${visibleListings.length === 1 ? "" : "s"} = USD ${annualRevenue}/yr. Modeled fleet upside: ${modeledListings} listings = USD ${modeledAnnualRevenue.toLocaleString()}/yr.`
      }
    ]
  };
}

function renderLeadDesk() {
  const model = getLeadDeskModel();
  setText("#leadDeskTitle", model.profile.supplier);
  setText("#leadDeskBadge", model.badge);

  document.querySelector("#leadDeskScore").innerHTML = `
    <strong>${model.active.score}/100</strong>
    <span>${escapeHtml(model.active.lead.buyer)} - ${escapeHtml(model.active.lead.equipment)}</span>
  `;

  document.querySelector("#leadDeskMetrics").innerHTML = [
    ["Open leads", String(model.leads.length)],
    ["Pipeline", `USD ${model.totalBudget.toLocaleString()}`],
    ["Hot leads", String(model.hotCount)],
    ["Payment", "Direct"]
  ].map(([label, value]) => `
    <span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>
  `).join("");

  document.querySelector("#leadDeskQueue").innerHTML = model.leads.map((item) => `
    <button type="button" class="lead-desk-row ${item.lead.id === model.active.lead.id ? "is-active" : ""}" data-lead-id="${escapeHtml(item.lead.id)}">
      <span>
        <strong>${escapeHtml(item.lead.buyer)}</strong>
        ${escapeHtml(item.lead.equipment)} - ${escapeHtml(item.lead.location)}
      </span>
      <em>${item.score}/100</em>
      <small>${escapeHtml(item.ageLabel)}</small>
      <b>${escapeHtml(item.priority)}</b>
    </button>
  `).join("");

  document.querySelector("#leadDeskPlaybook").innerHTML = model.playbook.map((item, index) => `
    <div class="lead-playbook-item ${item.statusClass}">
      <strong>${index + 1}</strong>
      <span>${escapeHtml(item.text)}</span>
      <em>${escapeHtml(item.status)}</em>
    </div>
  `).join("");

  document.querySelector("#leadDeskReply").innerHTML = buildLeadDeskText(model)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");

  document.querySelectorAll("[data-lead-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = model.leads.find((leadItem) => leadItem.lead.id === button.dataset.leadId);
      if (!item) return;
      state.selectedListingId = item.listing.id;
      saveState();
      render();
      document.querySelector("#lead-desk").scrollIntoView({ behavior: "smooth", block: "start" });
      showToast("Lead opened for supplier follow-up.");
    });
  });
}

function getLeadDeskModel() {
  const selected = getSelectedListing();
  const studio = getSupplierStudioModel();
  const profile = studio.profile;
  const supplierListings = listings.filter((listing) => listing.supplier === profile.supplier);
  const rawLeads = supplierLeadSeeds.filter((lead) => lead.supplier === profile.supplier);
  const leads = (rawLeads.length ? rawLeads : [buildFallbackLead(profile, selected)])
    .map((lead) => enrichLead(lead, supplierListings, selected))
    .sort((a, b) => b.score - a.score || a.lead.ageMinutes - b.lead.ageMinutes);
  const active = leads.find((item) => item.listing.id === selected.id) || leads[0];
  const totalBudget = leads.reduce((total, item) => total + item.lead.budget, 0);
  const hotCount = leads.filter((item) => item.priority === "Hot").length;
  const badge = active.priority === "Hot" ? "Reply now" : active.priority === "Warm" ? "Reply today" : "Nurture";
  const playbook = getLeadPlaybook(active, studio);

  return {
    profile,
    studio,
    leads,
    active,
    totalBudget,
    hotCount,
    badge,
    playbook
  };
}

function buildFallbackLead(profile, listing) {
  return {
    id: `LD-${listing.id}`,
    supplier: profile.supplier,
    listingId: listing.id,
    buyer: "Qualified buyer",
    equipment: listing.name,
    project: `${listing.category} rental enquiry`,
    location: `${listing.city}, ${listing.region}`,
    start: "Next week",
    duration: "5 days",
    budget: 6500,
    channel: "Web",
    ageMinutes: 55,
    terms: ["Availability", "Documents", "Quote validity"],
    note: "Buyer needs direct supplier confirmation."
  };
}

function enrichLead(lead, supplierListings, selected) {
  const listing = listings.find((item) => item.id === lead.listingId)
    || supplierListings.find((item) => item.name.toLowerCase().includes(lead.equipment.toLowerCase().split(" ")[0]))
    || selected;
  const passport = getTrustPassport(listing);
  const rowIndex = Math.max(0, listings.findIndex((item) => item.id === listing.id));
  const yard = getYardRow(listing, rowIndex);
  const durationDays = parseDurationDays(lead.duration);
  const dailyValue = Math.round(lead.budget / durationDays);
  const band = getQuoteBand(listing);
  const rateFit = dailyValue >= band.low && dailyValue <= band.high ? 12 : 6;
  const ageScore = lead.ageMinutes <= 30 ? 18 : lead.ageMinutes <= 90 ? 14 : lead.ageMinutes <= 180 ? 9 : 4;
  const startScore = lead.start === "This week" ? 12 : lead.start === "Next week" ? 8 : lead.start === "This month" ? 5 : 2;
  const budgetScore = Math.min(18, Math.round(lead.budget / 1200));
  const termsScore = Math.min(10, lead.terms.length * 3);
  const score = Math.max(0, Math.min(100, Math.round(
    passport.score * 0.32
    + yard.score * 0.18
    + ageScore
    + startScore
    + budgetScore
    + termsScore
    + rateFit
  )));
  const priority = score >= 84 ? "Hot" : score >= 68 ? "Warm" : "Nurture";

  return {
    lead,
    listing,
    passport,
    yard,
    durationDays,
    dailyValue,
    band,
    score,
    priority,
    ageLabel: formatLeadAge(lead.ageMinutes)
  };
}

function getLeadPlaybook(item, studio) {
  const needsRefresh = item.yard.status !== "fresh";
  const needsDocs = studio.docGaps > 0 || !item.listing.verified;
  const quoteStatus = item.dailyValue >= item.band.low && item.dailyValue <= item.band.high ? "Ready" : "Confirm";

  return [
    {
      text: `Reply by ${item.lead.channel} with availability, direct contact, and the next confirmation step.`,
      status: item.lead.ageMinutes <= 60 ? "Now" : "Today",
      statusClass: item.lead.ageMinutes <= 60 ? "hot" : "warm"
    },
    {
      text: needsRefresh ? `Reconfirm ${item.listing.name} before promising the start window.` : `${item.listing.name} freshness is strong enough for routing.`,
      status: needsRefresh ? "Confirm" : "Ready",
      statusClass: needsRefresh ? "warm" : "ready"
    },
    {
      text: needsDocs ? "Attach or refresh proof before sending the buyer a verified answer." : "Document stack is clean for this prototype.",
      status: needsDocs ? "Gap" : "Ready",
      statusClass: needsDocs ? "gap" : "ready"
    },
    {
      text: `Normalize quote view: USD ${item.dailyValue.toLocaleString()} per day against modeled band USD ${item.band.low.toLocaleString()}-${item.band.high.toLocaleString()}.`,
      status: quoteStatus,
      statusClass: quoteStatus === "Ready" ? "ready" : "warm"
    },
    {
      text: "Keep payment direct between buyer and rental company. Heavyster only supports lead clarity and response workflow.",
      status: "Direct",
      statusClass: "direct"
    }
  ];
}

function parseDurationDays(value) {
  const match = String(value || "").match(/\d+/);
  if (!match) return 5;
  const number = Number(match[0]);
  return String(value).toLowerCase().includes("month") ? Math.max(20, number * 20) : Math.max(1, number);
}

function formatLeadAge(minutes) {
  if (minutes < 60) return `${minutes}m old`;
  const hours = Math.round(minutes / 60);
  return `${hours}h old`;
}

function renderTrustChecklist() {
  document.querySelector("#trustChecklist").innerHTML = trustItems.map(([title, detail], index) => `
    <label class="check-item">
      <input type="checkbox" data-check-index="${index}" ${state.trustChecked[index] ? "checked" : ""} />
      <span><strong>${escapeHtml(title)}</strong><br />${escapeHtml(detail)}</span>
    </label>
  `).join("");

  document.querySelectorAll("[data-check-index]").forEach((box) => {
    box.addEventListener("change", () => {
      state.trustChecked[Number(box.dataset.checkIndex)] = box.checked;
      saveState();
    });
  });
}

function renderOnboardingFlow() {
  document.querySelector("#onboardingFlow").innerHTML = onboardingSteps.map(([title, detail], index) => `
    <div class="flow-step">
      <span>${index + 1}</span>
      <strong>${escapeHtml(title)}</strong>
      <small>${escapeHtml(detail)}</small>
    </div>
  `).join("");
}

function renderBuilderSummary() {
  const status = state.builderAvailability === "available" ? "can publish now" : state.builderAvailability === "soon" ? "can publish with soon badge" : "needs call-to-confirm badge";
  document.querySelector("#builderSummary").innerHTML = `
    <span><strong>${escapeHtml(state.builderModel || "New equipment")}</strong>${escapeHtml(state.builderCategory)} - ${escapeHtml(state.builderRegion)}</span>
    <span><strong>Listing plan</strong>USD 9/month or USD 99/year once active</span>
    <span><strong>Status</strong>${escapeHtml(status)}</span>
  `;
}

function renderCategoryDirectory() {
  document.querySelector("#categoryDirectory").innerHTML = categoryDirectory.map((category) => `
    <article class="category-card">
      <span>${escapeHtml(category.group)}</span>
      <strong>${escapeHtml(category.name)}</strong>
      <p>${escapeHtml(category.intent)}</p>
      <small>${category.count.toLocaleString()} modeled listings - ${escapeHtml(category.regions)}</small>
    </article>
  `).join("");
}

function renderAdminBoard() {
  const totalModeledListings = categoryDirectory.reduce((total, category) => total + category.count, 0);
  const verified = listings.filter((listing) => listing.verified).length;
  document.querySelector("#adminSupplierQueue").innerHTML = adminQueue.map((supplier) => `
    <div class="admin-row">
      <span><strong>${escapeHtml(supplier.supplier)}</strong>${escapeHtml(supplier.region)} - ${supplier.listings} listings</span>
      <em>${escapeHtml(supplier.status)}</em>
    </div>
  `).join("");

  document.querySelector("#verificationBoard").innerHTML = [
    ["Verified demo listings", `${verified}/${listings.length}`],
    ["Document checks", "License, insurance, inspection"],
    ["Founder review rule", "No badge without documents"],
    ["Risk control", "Hide expired docs later"]
  ].map(([label, value]) => `
    <div class="admin-row">
      <span><strong>${escapeHtml(label)}</strong>${escapeHtml(value)}</span>
      <em>Track</em>
    </div>
  `).join("");

  document.querySelector("#launchMetrics").innerHTML = [
    ["Modeled category inventory", totalModeledListings.toLocaleString()],
    ["Launch target", "25 suppliers"],
    ["First revenue target", "250 paid listings"],
    ["Phase-two trigger", "100 confirmed enquiries"]
  ].map(([label, value]) => `
    <div class="metric-line">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `).join("");

  renderDemandRadar();
}

function renderDemandRadar() {
  const signals = [...getDemandSignals()]
    .sort((a, b) => Number(b.count || 1) - Number(a.count || 1) || a.equipment.localeCompare(b.equipment))
    .slice(0, 4);

  document.querySelector("#demandRadar").innerHTML = signals.length ? signals.map((signal) => `
    <button type="button" class="admin-row demand-row ${getDemandKey(signal) === state.activeDemandKey ? "is-active" : ""}" data-demand-key="${escapeHtml(getDemandKey(signal))}">
      <span><strong>${escapeHtml(signal.equipment)}</strong>${escapeHtml(signal.region)} - ${escapeHtml(signal.duration)} - ${escapeHtml(signal.source)}</span>
      <em>${Number(signal.count || 1)}x ${escapeHtml(signal.urgency)}</em>
    </button>
  `).join("") : `
    <div class="admin-row">
      <span><strong>No demand saved</strong>Buyer requests will appear here.</span>
      <em>Listen</em>
    </div>
  `;

  document.querySelectorAll("[data-demand-key]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeDemandKey = button.dataset.demandKey;
      state.activeMarketKey = getMarketKeyFromSignal(getActiveDemandSignal());
      saveState();
      renderDemandRadar();
      renderSupplierHunt();
      renderMarketMaker();
      document.querySelector("#growth").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderSupplierHunt() {
  const signals = getDemandSignals();
  if (!signals.length) return;

  const active = getActiveDemandSignal();
  const plan = getHuntPlan(active);
  setText("#huntPriority", plan.priority);
  setText("#huntPersona", plan.persona);

  document.querySelector("#huntSignalList").innerHTML = signals
    .slice(0, 6)
    .map((signal) => `
      <button type="button" class="hunt-signal ${getDemandKey(signal) === state.activeDemandKey ? "is-active" : ""}" data-hunt-key="${escapeHtml(getDemandKey(signal))}">
        <span><strong>${escapeHtml(signal.equipment)}</strong>${escapeHtml(signal.region)} - ${Number(signal.count || 1)} signals</span>
        <em>${escapeHtml(signal.urgency)}</em>
      </button>
    `).join("");

  document.querySelector("#huntMetrics").innerHTML = [
    ["Demand pressure", `${plan.score}/100`],
    ["Visible supply gap", getVisibleSupplyLabel(plan.visibleSupply)],
    ["Recruit target", `${plan.starterListings} paid listings`],
    ["Listing ARR", `USD ${plan.annualRevenue.toLocaleString()}`]
  ].map(([label, value]) => `
    <span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>
  `).join("");

  document.querySelector("#huntProof").innerHTML = `
    <strong>Trust proof to request</strong>
    <div>
      ${plan.proof.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
    </div>
  `;

  document.querySelector("#outreachScript").innerHTML = buildSupplierHuntText(plan)
    .split("\n")
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");

  document.querySelectorAll("[data-hunt-key]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeDemandKey = button.dataset.huntKey;
      state.activeMarketKey = getMarketKeyFromSignal(getActiveDemandSignal());
      saveState();
      renderDemandRadar();
      renderSupplierHunt();
      renderMarketMaker();
    });
  });
}

function getActiveDemandSignal() {
  const signals = getDemandSignals();
  const active = signals.find((signal) => getDemandKey(signal) === state.activeDemandKey) || signals[0];
  state.activeDemandKey = getDemandKey(active);
  return active;
}

function getDemandKey(signal) {
  return [signal.equipment, signal.region, signal.urgency].join("::");
}

function getVisibleSupplyLabel(count) {
  return count === 1 ? "1 matching listing" : `${count} matching listings`;
}

function getHuntPlan(signal) {
  const equipment = signal.equipment.toLowerCase();
  const blueprint = huntBlueprints.find((item) =>
    item.keywords.some((keyword) => equipment.includes(keyword))
  ) || huntBlueprints[huntBlueprints.length - 1];
  const visibleSupply = listings.filter((listing) => {
    const haystack = [listing.name, listing.category, listing.specs].join(" ").toLowerCase();
    return listing.region === signal.region && (haystack.includes(equipment) || listing.category === blueprint.category);
  }).length;
  const urgencyScore = signal.urgency === "This week" ? 28 : signal.urgency === "Next week" ? 20 : signal.urgency === "This month" ? 12 : 6;
  const gapScore = visibleSupply === 0 ? 28 : visibleSupply < 2 ? 16 : 8;
  const countScore = Math.min(34, Number(signal.count || 1) * 8);
  const score = Math.min(100, urgencyScore + gapScore + countScore);
  const starterListings = blueprint.starterListings + Math.min(6, Number(signal.count || 1));
  const priority = score >= 72 ? "Attack now" : score >= 45 ? "Warm lead" : "Watch";

  return {
    signal,
    persona: blueprint.persona,
    category: blueprint.category,
    proof: blueprint.proof,
    hook: blueprint.hook,
    visibleSupply,
    score,
    starterListings,
    monthlyRevenue: starterListings * 9,
    annualRevenue: starterListings * 99,
    priority
  };
}

function renderMarketMaker() {
  const opportunities = getMarketOpportunities();
  if (!opportunities.length) return;

  const active = getActiveMarketOpportunity(opportunities);
  setText("#marketLaunchTitle", `${active.region} ${active.category} launch`);
  setText("#marketLaunchBadge", active.score >= 78 ? "Open now" : active.score >= 58 ? "Prepare" : "Watch");

  document.querySelector("#marketOpportunityList").innerHTML = opportunities.map((opportunity) => `
    <button type="button" class="market-opportunity ${opportunity.key === active.key ? "is-active" : ""}" data-market-key="${escapeHtml(opportunity.key)}">
      <span><strong>${escapeHtml(opportunity.region)} ${escapeHtml(opportunity.category)}</strong>${opportunity.demandCount} demand signals - ${opportunity.visibleSupply} live supply</span>
      <em>${opportunity.score}/100</em>
    </button>
  `).join("");

  document.querySelector("#marketMetrics").innerHTML = [
    ["Launch score", `${active.score}/100`],
    ["Demand captured", `${active.demandCount} signals`],
    ["Supply gap", `${active.supplyGap} listings`],
    ["First-year ARR", `USD ${active.annualRevenue.toLocaleString()}`]
  ].map(([label, value]) => `
    <span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>
  `).join("");

  document.querySelector("#marketSteps").innerHTML = active.steps.map((step, index) => `
    <div>
      <strong>${index + 1}</strong>
      <span>${escapeHtml(step)}</span>
    </div>
  `).join("");

  document.querySelector("#marketPageBrief").innerHTML = buildMarketBriefText(active)
    .split("\n")
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");

  document.querySelectorAll("[data-market-key]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeMarketKey = button.dataset.marketKey;
      const selected = getMarketOpportunities().find((item) => item.key === state.activeMarketKey);
      if (selected?.signalKey) state.activeDemandKey = selected.signalKey;
      saveState();
      renderDemandRadar();
      renderSupplierHunt();
      renderMarketMaker();
    });
  });
}

function getMarketOpportunities() {
  const grouped = new Map();
  getDemandSignals().forEach((signal) => {
    const plan = getHuntPlan(signal);
    const key = `${signal.region}::${plan.category}`;
    const existing = grouped.get(key) || {
      key,
      region: signal.region,
      category: plan.category,
      persona: plan.persona,
      proof: plan.proof,
      hook: plan.hook,
      demandCount: 0,
      urgencyHits: 0,
      starterListings: 0,
      signalKey: getDemandKey(signal)
    };
    existing.demandCount += Number(signal.count || 1);
    existing.urgencyHits += signal.urgency === "This week" || signal.urgency === "Next week" ? 1 : 0;
    existing.starterListings = Math.max(existing.starterListings, plan.starterListings);
    grouped.set(key, existing);
  });

  return [...grouped.values()].map((item) => {
    const visibleSupply = listings.filter((listing) => listing.region === item.region && listing.category === item.category).length;
    const supplyGap = Math.max(0, item.starterListings - visibleSupply);
    const score = Math.min(100, 34 + Math.min(30, item.demandCount * 6) + Math.min(24, supplyGap * 2) + item.urgencyHits * 6);
    const launchListings = Math.max(item.starterListings, visibleSupply + supplyGap);
    return {
      ...item,
      visibleSupply,
      supplyGap,
      score,
      launchListings,
      annualRevenue: launchListings * 99,
      slug: `${item.region}-${item.category}-equipment-rental`.toLowerCase().replace(/\s+/g, "-"),
      steps: [
        `Publish a ${item.category.toLowerCase()} rental page for ${item.region} with demand proof.`,
        `Recruit ${supplyGap || item.starterListings} verified listings from ${item.persona.toLowerCase()}.`,
        `Ask for ${item.proof.slice(0, 3).join(", ").toLowerCase()} before showing a verified badge.`,
        "Route enquiries direct to suppliers and measure response speed before adding booking rails."
      ]
    };
  }).sort((a, b) => b.score - a.score || b.demandCount - a.demandCount);
}

function getActiveMarketOpportunity(opportunities = getMarketOpportunities()) {
  const active = opportunities.find((opportunity) => opportunity.key === state.activeMarketKey) || opportunities[0];
  state.activeMarketKey = active.key;
  return active;
}

function getMarketKeyFromSignal(signal) {
  if (!signal) return "";
  return `${signal.region}::${getHuntPlan(signal).category}`;
}


function renderPricingCalculator() {
  const monthly = state.listingCount * 9;
  const annual = state.listingCount * 99;
  setText("#listingCountOutput", String(state.listingCount));
  setText("#monthlyRevenueOutput", `USD ${monthly.toLocaleString()}`);
  setText("#annualRevenueOutput", `USD ${annual.toLocaleString()}`);
  document.querySelector("#listingCount").value = String(state.listingCount);
}

function renderCommissionCalculator() {
  const grossBookingValue = state.bookingValue * state.confirmedBookings;
  const successFee = Math.round(grossBookingValue * 0.01);
  const supplierKeeps = grossBookingValue - successFee;
  setText("#bookingValueOutput", `USD ${state.bookingValue.toLocaleString()}`);
  setText("#bookingFeeOutput", `USD ${successFee.toLocaleString()}`);
  setText("#supplierKeepOutput", `USD ${supplierKeeps.toLocaleString()}`);
  document.querySelector("#bookingValue").value = String(state.bookingValue);
  document.querySelector("#confirmedBookings").value = String(state.confirmedBookings);
}

function buildLeadText() {
  const listing = getSelectedListing();
  return [
    "Heavyster direct rental enquiry",
    `Equipment: ${listing.name}`,
    `Supplier: ${listing.supplier}`,
    `Location: ${listing.city}, ${listing.region}`,
    `Availability: ${listing.availability}`,
    `Documents: ${listing.documents.join(", ")}`,
    `Project note: ${state.projectNote || "No note provided"}`,
    "Payment: customer and rental company arrange directly"
  ].join("\n");
}

function buildTrustPassportText() {
  const listing = getSelectedListing();
  const passport = getTrustPassport(listing);
  return [
    "Heavyster Trust Passport",
    `Equipment: ${listing.name}`,
    `Supplier: ${listing.supplier}`,
    `Location: ${listing.city}, ${listing.region}`,
    `Readiness: ${passport.score}/100 - ${passport.verdict}`,
    `Documents: ${listing.documents.join(", ")}`,
    `Proof stack: ${passport.proofItems.map((item) => `${item.label}: ${item.ready ? "ready" : "needed"}`).join("; ")}`,
    `Risk radar: ${passport.risks.map((risk) => `${risk.label}: ${risk.detail}`).join(" | ")}`,
    `Next actions: ${passport.actions.join(" | ")}`,
    "Payment: buyer and rental company arrange directly in phase one"
  ].join("\n");
}

function buildRfqText() {
  const rfq = getRfqModel();
  return [
    "Heavyster RFQ Command Room",
    `RFQ status: ${rfq.badge}`,
    `Project note: ${state.projectNote || "No project note provided"}`,
    `Shortlisted machines: ${rfq.listings.map((listing) => listing.name).join(", ")}`,
    `Average readiness: ${rfq.averageScore}/100`,
    `Verified suppliers: ${rfq.verifiedCount}/${rfq.listings.length}`,
    `Available now: ${rfq.availableCount}/${rfq.listings.length}`,
    "Supplier routing:",
    ...rfq.routes.map((route) => `- ${route.listing.supplier}: ${route.listing.name}, ${route.listing.city}, ${route.listing.region}, Trust Passport ${route.score}/100`),
    "Quote request:",
    "Please confirm availability, rental rate, operator option, delivery terms, quote validity, required documents, and best contact route.",
    "Payment: buyer and rental company arrange directly in phase one. Heavyster is only routing the RFQ."
  ].join("\n");
}

function buildAwardMemoText(model = getAwardModel()) {
  const winner = model.winner;
  return [
    "Heavyster Award Intelligence",
    `Decision status: ${model.badge}`,
    `Recommended award: ${winner.listing.supplier} - ${winner.listing.name}`,
    `Location: ${winner.listing.city}, ${winner.listing.region}`,
    `Award score: ${winner.total}/100`,
    `Project note: ${state.projectNote || "No project note provided"}`,
    "Why this supplier:",
    ...winner.reasons.map((reason) => `- ${reason}`),
    "Decision matrix:",
    ...model.candidates.map((candidate) => `- ${candidate.listing.supplier}: ${candidate.listing.name}, ${candidate.total}/100, ${candidate.signal}, action ${candidate.action}`),
    "Award conditions:",
    "- Run Quote Guard before dispatch so operator, transport, fuel, permit, overtime, and validity terms are visible.",
    "- Confirm rental rate, quote validity, operator option, delivery terms, insurance, and document freshness before dispatch.",
    "- Keep rental payment direct between buyer and rental company in phase one.",
    "- Use Heavyster as the listing, Trust Passport, RFQ, and decision-support layer."
  ].join("\n");
}

function buildQuoteGuardText(model = getQuoteGuardModel()) {
  return [
    "Heavyster Quote Guard",
    `Quote status: ${model.badge}`,
    `Supplier: ${model.target.supplier}`,
    `Equipment: ${model.target.name}`,
    `Location: ${model.target.city}, ${model.target.region}`,
    `Quote amount: USD ${model.quoteAmount.toLocaleString()} for ${model.quoteDays} day${model.quoteDays === 1 ? "" : "s"}`,
    `Daily view: USD ${model.dailyRate.toLocaleString()} - ${model.rateSignal}`,
    `Quote clarity: ${model.score}/100`,
    `Unclear terms: ${model.missingCount}`,
    "Clarification board:",
    ...model.board.map((item) => `- ${item.status}: ${item.label} - ${item.detail} Action: ${item.action}`),
    "Supplier request:",
    "Please send one clean quote that separates machine hire, operator, transport, fuel, permit, overtime, standby, validity, deposit, and cancellation terms.",
    "Payment rule: buyer and rental company arrange payment directly in phase one. Heavyster does not collect rental payment."
  ].join("\n");
}

function buildMobilizationText(model = getMobilizationModel()) {
  return [
    "Heavyster Mobilization Control Tower",
    `Mobilization status: ${model.badge}`,
    `Target supplier: ${model.target.supplier}`,
    `Equipment: ${model.target.name}`,
    `Location: ${model.target.city}, ${model.target.region}`,
    `Mobilization readiness: ${model.score}/100`,
    `Trust Passport: ${model.passport.score}/100 - ${model.passport.verdict}`,
    `Project note: ${state.projectNote || "No project note provided"}`,
    "Dispatch gate checklist:",
    ...model.checks.map((check) => `- ${check.status}: ${check.label} - ${check.detail}`),
    "Buyer-supplier handoff:",
    ...model.handoff.map((line) => `- ${line}`),
    "Phase one payment rule: buyer and rental company arrange payment directly. Heavyster does not collect rental payment."
  ].join("\n");
}

function buildYardUpdateText(model = getYardModel()) {
  return [
    "Heavyster Yard Availability OS",
    `Yard freshness: ${model.score}/100 - ${model.badge}`,
    `Available now: ${model.availableCount}`,
    `Available soon: ${model.soonCount}`,
    `Needs reconfirmation: ${model.reviewCount}`,
    `Demand pressure: ${model.demandCount} saved demand signals`,
    "Supplier refresh queue:",
    ...model.refreshQueue.map((item) => `- ${item}`),
    "Availability board:",
    ...model.rows.map((row) => `- ${row.listing.supplier}: ${row.listing.name}, ${row.availabilityLabel}, ${row.freshnessLabel}, action ${row.action}, freshness ${row.score}/100`),
    "Operating rule: pause or reconfirm stale listings before routing serious enquiries. Buyer payment stays direct with the rental company."
  ].join("\n");
}

function buildSupplierStorefrontText(model = getSupplierStorefrontModel()) {
  return [
    "Heavyster Supplier Fleet Storefront",
    `Supplier: ${model.profile.supplier}`,
    `Public profile: /suppliers/${model.profile.slug}/`,
    `Branch: ${model.profile.branch}`,
    `Service area: ${model.profile.serviceArea}`,
    `Storefront score: ${model.score}/100 - ${model.badge}`,
    `Average Trust Passport: ${model.averagePassport}/100`,
    `Yard freshness: ${model.yardScore}/100`,
    `Response target: ${model.profile.response}`,
    `Supplier since: ${model.profile.since}`,
    "Fleet lanes:",
    ...model.profile.fleet.map((lane) => `- ${lane.label}: ${lane.count} modeled item${lane.count === 1 ? "" : "s"}, ${lane.status}`),
    "Visible marketplace listings:",
    ...model.visibleListings.map((listing) => `- ${listing.name}: ${listing.city}, ${listing.region}, ${listing.availability}, ${listing.documents.join(", ")}`),
    "Services:",
    ...model.profile.services.map((service) => `- ${service}`),
    "Proof stack:",
    ...model.profile.proof.map((proof) => `- ${proof}`),
    "Phase one rule: buyers contact the supplier directly and payment stays between buyer and rental company. Heavyster sells verified listing visibility and supplier storefront tools."
  ].join("\n");
}

function buildLeadDeskText(model = getLeadDeskModel()) {
  const item = model.active;
  return [
    "Heavyster Lead Desk",
    `Supplier: ${model.profile.supplier}`,
    `Lead priority: ${item.priority} - ${item.score}/100`,
    `Buyer: ${item.lead.buyer}`,
    `Equipment: ${item.lead.equipment}`,
    `Project: ${item.lead.project}`,
    `Location: ${item.lead.location}`,
    `Start: ${item.lead.start}`,
    `Duration: ${item.lead.duration}`,
    `Budget signal: USD ${item.lead.budget.toLocaleString()} total, about USD ${item.dailyValue.toLocaleString()} per day`,
    `Channel: ${item.lead.channel}, received ${item.ageLabel}`,
    `Buyer note: ${item.lead.note}`,
    "Reply checklist:",
    ...model.playbook.map((step) => `- ${step.status}: ${step.text}`),
    "Suggested supplier reply:",
    `Hi ${item.lead.buyer}, thanks for the ${item.lead.equipment} enquiry for ${item.lead.location}.`,
    `We can confirm availability, operator/crew terms, delivery, documents, and quote validity for ${item.lead.start}.`,
    `Please confirm site access, exact start date, working hours, and whether ${item.lead.terms.join(", ").toLowerCase()} should be included in the quote.`,
    "Payment will be arranged directly between buyer and rental company. Heavyster is only supporting the listing and lead workflow."
  ].join("\n");
}

function buildJobsiteBriefText(model = getJobsiteModel()) {
  return [
    "Heavyster Jobsite Planner",
    `Project package: ${model.blueprint.label}`,
    `Region: ${model.region}`,
    `Start window: ${state.jobsiteUrgency}`,
    `Package readiness: ${model.packageScore}/100 - ${model.badge}`,
    `Project note: ${state.projectNote || "No project note provided"}`,
    `Planner thesis: ${model.blueprint.outcome}`,
    "Recommended machine mix:",
    ...model.matches.map((match) => match.listing
      ? `- ${match.role.role}: ${match.listing.name}, ${match.listing.supplier}, ${match.listing.city}, ${match.listing.region}, Trust Passport ${match.readiness}/100`
      : `- ${match.role.role}: supply gap for ${match.role.target} in ${model.region}`),
    "Supply gaps:",
    ...(model.gaps.length ? model.gaps.map((gap) => `- ${gap.role}: ${gap.message}`) : ["- No visible package gaps in this prototype."]),
    "Next action: send matched machines to shortlist, issue the RFQ, then use Award Intelligence for the final supplier decision.",
    "Payment: buyer and rental company arrange directly in phase one."
  ].join("\n");
}

function buildSupplierHuntText(plan = getHuntPlan(getActiveDemandSignal())) {
  const signal = plan.signal;
  const supplyLabel = plan.visibleSupply === 1 ? "1 matching listing is" : `${plan.visibleSupply} matching listings are`;
  return [
    `Hi, we are opening verified ${plan.category.toLowerCase()} listings for ${signal.region} on Heavyster.`,
    `Buyers are already asking for ${signal.equipment} with ${signal.urgency.toLowerCase()} urgency and ${signal.duration} duration.`,
    `The gap is clear: ${supplyLabel} visible in this prototype, and ${plan.hook}.`,
    `We want to onboard ${plan.starterListings} paid listings from a strong supplier at USD 9 monthly or USD 99 yearly per active listing.`,
    `If your fleet can provide ${plan.proof.join(", ").toLowerCase()}, we can build your supplier page and route direct enquiries to you without touching the rental payment.`
  ].join("\n");
}

function buildMarketBriefText(opportunity = getActiveMarketOpportunity()) {
  return [
    `Page title: ${opportunity.category} equipment rental in ${opportunity.region}`,
    `Slug: /${opportunity.slug}/`,
    `Opening thesis: Heavyster is seeing ${opportunity.demandCount} demand signals for ${opportunity.category.toLowerCase()} equipment in ${opportunity.region}, with only ${opportunity.visibleSupply} matching supply visible in the current marketplace.`,
    `Supplier target: recruit ${opportunity.launchListings} paid listings from ${opportunity.persona.toLowerCase()} for first-year listing ARR of USD ${opportunity.annualRevenue.toLocaleString()}.`,
    `Trust proof: ${opportunity.proof.join(", ")}.`,
    `Founder action: launch the page, invite suppliers, verify documents, then route direct enquiries without touching rental payments.`
  ].join("\n");
}

function setText(selector, value) {
  document.querySelector(selector).textContent = value;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function toTitleCase(value) {
  return String(value).replace(/\w\S*/g, (word) =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
}
