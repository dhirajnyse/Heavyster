const DATA_VERSION = "20260613-heavyster-quality-completion-receipts-v175";
const STORAGE_KEY = "heavyster.marketplace.v1";
const SIMPLE_UX_RELEASE = "20260613-quality-completion-receipts-v175";

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

const marketplaceSmartViews = [
  {
    id: "uae-supply",
    label: "UAE supply",
    search: "",
    region: "UAE",
    availability: "all",
    category: "all",
    sort: "verified",
    cue: "Verified local options"
  },
  {
    id: "available-now",
    label: "Available now",
    search: "",
    region: "all",
    availability: "available",
    category: "all",
    sort: "available",
    cue: "Fastest direct enquiry path"
  },
  {
    id: "verified-lifting",
    label: "Verified lifting",
    search: "",
    region: "all",
    availability: "all",
    category: "Lifting",
    sort: "verified",
    cue: "Crane and reach proof"
  },
  {
    id: "earthmoving-ready",
    label: "Earthmoving ready",
    search: "",
    region: "all",
    availability: "available",
    category: "Earthmoving",
    sort: "available",
    cue: "Excavators, loaders, dozers"
  },
  {
    id: "uae-crane-gap",
    label: "UAE crane gap",
    search: "crane",
    region: "UAE",
    availability: "available",
    category: "all",
    sort: "verified",
    cue: "Demand signal if supply is short"
  }
];

const marketplaceQuickPresets = [
  {
    id: "crane-uae",
    label: "Crane in UAE",
    signal: "Verified lifting route",
    search: "crane",
    region: "UAE",
    availability: "all",
    category: "all",
    sort: "fit"
  },
  {
    id: "excavator-ready",
    label: "Excavator ready",
    signal: "Earthmoving now",
    search: "excavator",
    region: "UAE",
    availability: "available",
    category: "Earthmoving",
    sort: "fit"
  },
  {
    id: "available-now",
    label: "Available now",
    signal: "Fast enquiry path",
    search: "",
    region: "all",
    availability: "available",
    category: "all",
    sort: "available"
  },
  {
    id: "proof-first",
    label: "Proof first",
    signal: "Verified suppliers",
    search: "",
    region: "all",
    availability: "all",
    category: "all",
    sort: "verified"
  }
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

const huntOutcomeOptions = [
  {
    id: "agreed",
    label: "Agreed",
    cue: "Activate listings",
    statusClass: "ready"
  },
  {
    id: "proof",
    label: "Proof missing",
    cue: "Chase docs",
    statusClass: "review"
  },
  {
    id: "later",
    label: "Call later",
    cue: "Keep warm",
    statusClass: "review"
  },
  {
    id: "pass",
    label: "Not a fit",
    cue: "Next supplier",
    statusClass: "gap"
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
    anchor: "#buyer-workbench",
    detail: "Move from equipment search to a controlled buyer workbench, RFQ, award, quote clarity, mobilization, and a direct deal trail without losing control.",
    steps: [
      { label: "Search", anchor: "#marketplace" },
      { label: "Desk", anchor: "#buyer-workbench" },
      { label: "Jobsite", anchor: "#jobsite" },
      { label: "Passport", anchor: "#passport" },
      { label: "RFQ", anchor: "#rfq" },
      { label: "Award", anchor: "#award" },
      { label: "Quote Guard", anchor: "#quote-guard" },
      { label: "Mobilize", anchor: "#mobilize" },
      { label: "Deal Trail", anchor: "#deal-trail" }
    ]
  },
  {
    role: "Supplier",
    label: "Supplier revenue flow",
    anchor: "#supplier-workbench",
    detail: "Turn a rental yard into a verified storefront, fresh fleet board, direct lead response desk, and paid listing revenue path.",
    steps: [
      { label: "Desk", anchor: "#supplier-workbench" },
      { label: "Storefront", anchor: "#storefront" },
      { label: "Import", anchor: "#fleet-import" },
      { label: "Proof", anchor: "#proof-vault" },
      { label: "Revenue", anchor: "#revenue-desk" },
      { label: "Health", anchor: "#account-health" },
      { label: "Studio", anchor: "#studio" },
      { label: "Lead Desk", anchor: "#lead-desk" },
      { label: "Yard", anchor: "#yard" }
    ]
  },
  {
    role: "Founder",
    label: "Founder growth flow",
    anchor: "#founder-workbench",
    detail: "Run one founder workbench that decides where to capture demand, repair trust, activate paid listings, and scale without touching rental payment.",
    steps: [
      { label: "Desk", anchor: "#founder-workbench" },
      { label: "Morning", anchor: "#founder-morning" },
      { label: "Daily", anchor: "#founder-daily" },
      { label: "Call Sheet", anchor: "#founder-call-sheet" },
      { label: "Demand", anchor: "#admin" },
      { label: "Success", anchor: "#supplier-success" },
      { label: "Pages", anchor: "#page-factory" },
      { label: "Launch", anchor: "#launch-room" },
      { label: "Twin", anchor: "#market-twin" },
      { label: "Flywheel", anchor: "#liquidity-flywheel" },
      { label: "Autopilot", anchor: "#founder-autopilot" },
      { label: "Exchange", anchor: "#demand-exchange" },
      { label: "Proof Room", anchor: "#proof-demand" },
      { label: "Commit", anchor: "#supplier-commitment" },
      { label: "Activate", anchor: "#listing-activation" },
      { label: "Ledger", anchor: "#trust-revenue-ledger" },
      { label: "Matrix", anchor: "#market-signal-matrix" },
      { label: "Hunt", anchor: "#growth" },
      { label: "Market Map", anchor: "#market-maker" },
      { label: "Categories", anchor: "#categories" },
      { label: "Build Phase", anchor: "#build-phase" },
      { label: "Roadmap", anchor: "#roadmap" }
    ]
  }
];

const commandModules = [
  { role: "Buyer", label: "Marketplace", anchor: "#marketplace", signal: "Find equipment" },
  { role: "Buyer", label: "Buyer Desk", anchor: "#buyer-workbench", signal: "Control path" },
  { role: "Buyer", label: "Jobsite", anchor: "#jobsite", signal: "Build package" },
  { role: "Buyer", label: "Trust Passport", anchor: "#passport", signal: "Check proof" },
  { role: "Buyer", label: "RFQ Room", anchor: "#rfq", signal: "Ask suppliers" },
  { role: "Buyer", label: "Award Room", anchor: "#award", signal: "Choose supplier" },
  { role: "Buyer", label: "Quote Guard", anchor: "#quote-guard", signal: "Clean terms" },
  { role: "Buyer", label: "Mobilize", anchor: "#mobilize", signal: "Dispatch gate" },
  { role: "Buyer", label: "Deal Trail", anchor: "#deal-trail", signal: "Prove workflow" },
  { role: "Supplier", label: "Supplier Desk", anchor: "#supplier-workbench", signal: "Control revenue" },
  { role: "Supplier", label: "Storefront", anchor: "#storefront", signal: "Public profile" },
  { role: "Supplier", label: "Fleet Import", anchor: "#fleet-import", signal: "Bulk upload" },
  { role: "Supplier", label: "Proof Vault", anchor: "#proof-vault", signal: "Verify docs" },
  { role: "Supplier", label: "Revenue Desk", anchor: "#revenue-desk", signal: "Renew listings" },
  { role: "Supplier", label: "Account Health", anchor: "#account-health", signal: "Save account" },
  { role: "Supplier", label: "Supplier Studio", anchor: "#studio", signal: "Manage fleet" },
  { role: "Supplier", label: "Lead Desk", anchor: "#lead-desk", signal: "Reply faster" },
  { role: "Supplier", label: "Yard Board", anchor: "#yard", signal: "Fresh stock" },
  { role: "Supplier", label: "Pricing", anchor: "#pricing", signal: "Listing revenue" },
  { role: "Founder", label: "Founder Desk", anchor: "#founder-workbench", signal: "Scale control" },
  { role: "Founder", label: "Morning Brief", anchor: "#founder-morning", signal: "Start day" },
  { role: "Founder", label: "Daily Moves", anchor: "#founder-daily", signal: "Work today" },
  { role: "Founder", label: "Supplier Call Sheet", anchor: "#founder-call-sheet", signal: "Close supply" },
  { role: "Founder", label: "Admin", anchor: "#admin", signal: "Verify supply" },
  { role: "Founder", label: "Success Queue", anchor: "#supplier-success", signal: "Call first" },
  { role: "Founder", label: "Page Factory", anchor: "#page-factory", signal: "Publish pages" },
  { role: "Founder", label: "Launch Room", anchor: "#launch-room", signal: "Run sprint" },
  { role: "Founder", label: "Market Twin", anchor: "#market-twin", signal: "Simulate launch" },
  { role: "Founder", label: "Liquidity Flywheel", anchor: "#liquidity-flywheel", signal: "Find bottleneck" },
  { role: "Founder", label: "Founder Autopilot", anchor: "#founder-autopilot", signal: "Dispatch work" },
  { role: "Founder", label: "Demand Exchange", anchor: "#demand-exchange", signal: "Pull suppliers" },
  { role: "Founder", label: "Proof of Demand", anchor: "#proof-demand", signal: "Prove ROI" },
  { role: "Founder", label: "Supplier Commitment", anchor: "#supplier-commitment", signal: "Close listing" },
  { role: "Founder", label: "Listing Activation", anchor: "#listing-activation", signal: "Go live" },
  { role: "Founder", label: "Trust Ledger", anchor: "#trust-revenue-ledger", signal: "Protect revenue" },
  { role: "Founder", label: "Market Matrix", anchor: "#market-signal-matrix", signal: "Scan wedges" },
  { role: "Founder", label: "Growth", anchor: "#growth", signal: "Recruit supply" },
  { role: "Founder", label: "Market Map", anchor: "#market-maker", signal: "Launch pages" },
  { role: "Founder", label: "Categories", anchor: "#categories", signal: "Plan inventory" },
  { role: "Founder", label: "Build Phase", anchor: "#build-phase", signal: "Version status" },
  { role: "Founder", label: "Roadmap", anchor: "#roadmap", signal: "Build sequence" }
];

const fleetImportRows = [
  {
    id: "FI-001",
    supplier: "Al Noor Heavy Rentals",
    source: "yard-sheet-dubai.csv",
    equipment: "Cat 320 Excavator",
    category: "Earthmoving",
    region: "UAE",
    count: 6,
    photos: true,
    documents: true,
    availability: true,
    rateTerms: false,
    contact: true
  },
  {
    id: "FI-002",
    supplier: "Al Noor Heavy Rentals",
    source: "yard-sheet-dubai.csv",
    equipment: "Cat 330 Excavator",
    category: "Earthmoving",
    region: "UAE",
    count: 4,
    photos: true,
    documents: false,
    availability: true,
    rateTerms: false,
    contact: true
  },
  {
    id: "FI-003",
    supplier: "Al Noor Heavy Rentals",
    source: "attachment-list.xlsx",
    equipment: "Hydraulic breaker set",
    category: "Earthmoving",
    region: "UAE",
    count: 9,
    photos: false,
    documents: true,
    availability: true,
    rateTerms: true,
    contact: true
  },
  {
    id: "FI-004",
    supplier: "Gulf Lift Services",
    source: "crane-fleet.csv",
    equipment: "Liebherr 130T Mobile Crane",
    category: "Lifting",
    region: "UAE",
    count: 3,
    photos: true,
    documents: true,
    availability: false,
    rateTerms: true,
    contact: true
  },
  {
    id: "FI-005",
    supplier: "Gulf Lift Services",
    source: "operator-certificates.xlsx",
    equipment: "Lift supervisor crew",
    category: "Lifting",
    region: "UAE",
    count: 7,
    photos: false,
    documents: true,
    availability: true,
    rateTerms: true,
    contact: true
  },
  {
    id: "FI-006",
    supplier: "Desertline Equipment",
    source: "houston-yard.csv",
    equipment: "Komatsu WA380 Wheel Loader",
    category: "Earthmoving",
    region: "USA",
    count: 5,
    photos: true,
    documents: false,
    availability: false,
    rateTerms: true,
    contact: true
  }
];

const proofVaultRows = [
  {
    id: "PV-001",
    supplier: "Al Noor Heavy Rentals",
    listingId: "HY-EX-001",
    type: "Trade license",
    target: "Company profile",
    status: "ready",
    expiresInDays: 210,
    holder: "Operations desk",
    action: "Keep live"
  },
  {
    id: "PV-002",
    supplier: "Al Noor Heavy Rentals",
    listingId: "HY-EX-001",
    type: "Insurance",
    target: "Cat 320 Excavator",
    status: "expiring",
    expiresInDays: 26,
    holder: "Broker",
    action: "Renew before routing major enquiries"
  },
  {
    id: "PV-003",
    supplier: "Al Noor Heavy Rentals",
    listingId: "HY-EX-001",
    type: "Inspection",
    target: "Cat 320 Excavator",
    status: "ready",
    expiresInDays: 92,
    holder: "Workshop",
    action: "Attach to listing"
  },
  {
    id: "PV-004",
    supplier: "Gulf Lift Services",
    listingId: "HY-CR-014",
    type: "Trade license",
    target: "Company profile",
    status: "ready",
    expiresInDays: 180,
    holder: "Admin",
    action: "Keep live"
  },
  {
    id: "PV-005",
    supplier: "Gulf Lift Services",
    listingId: "HY-CR-014",
    type: "Load test",
    target: "Liebherr 130T Mobile Crane",
    status: "ready",
    expiresInDays: 58,
    holder: "Lifting engineer",
    action: "Send with quote"
  },
  {
    id: "PV-006",
    supplier: "Gulf Lift Services",
    listingId: "HY-CR-014",
    type: "Operator license",
    target: "Lift supervisor crew",
    status: "expiring",
    expiresInDays: 19,
    holder: "Crew coordinator",
    action: "Renew before mobilization"
  },
  {
    id: "PV-007",
    supplier: "Gulf Lift Services",
    listingId: "HY-CR-014",
    type: "City permit note",
    target: "Abu Dhabi lifts",
    status: "missing",
    expiresInDays: null,
    holder: "Permit desk",
    action: "Add permit workflow note"
  },
  {
    id: "PV-008",
    supplier: "Desertline Equipment",
    listingId: "HY-LD-022",
    type: "Insurance",
    target: "Komatsu WA380 Wheel Loader",
    status: "missing",
    expiresInDays: null,
    holder: "Owner",
    action: "Upload insurance before verified badge"
  },
  {
    id: "PV-009",
    supplier: "Metro Plant Hire",
    listingId: "HY-TL-030",
    type: "Service record",
    target: "JCB Telehandler 540-170",
    status: "ready",
    expiresInDays: 74,
    holder: "Workshop",
    action: "Keep live"
  },
  {
    id: "PV-010",
    supplier: "Prime Road Rentals",
    listingId: "HY-RD-042",
    type: "Maintenance log",
    target: "Dynapac CA250 Roller",
    status: "ready",
    expiresInDays: 45,
    holder: "Yard admin",
    action: "Attach to listing"
  },
  {
    id: "PV-011",
    supplier: "Frontier Civil Rentals",
    listingId: "HY-DZ-055",
    type: "Inspection",
    target: "D6 Dozer",
    status: "expiring",
    expiresInDays: 22,
    holder: "Service manager",
    action: "Book inspection refresh"
  }
];

const listingRevenueRows = [
  {
    id: "RD-001",
    supplier: "Al Noor Heavy Rentals",
    listingId: "HY-EX-001",
    package: "Cat 320 Excavator fleet",
    plan: "annual",
    status: "active",
    listings: 6,
    renewalDays: 74,
    signal: "High-intent earthmoving page",
    action: "Keep annual plan live"
  },
  {
    id: "RD-002",
    supplier: "Al Noor Heavy Rentals",
    listingId: "HY-EX-001",
    package: "Cat 330 Excavator imports",
    plan: "monthly",
    status: "renewal-risk",
    listings: 4,
    renewalDays: 12,
    signal: "Imported rows ready for annual upsell",
    action: "Move to annual before expiry"
  },
  {
    id: "RD-003",
    supplier: "Al Noor Heavy Rentals",
    listingId: "HY-EX-001",
    package: "Hydraulic breaker set",
    plan: "monthly",
    status: "draft",
    listings: 9,
    renewalDays: null,
    signal: "Attachment demand, photos missing",
    action: "Publish after photos"
  },
  {
    id: "RD-004",
    supplier: "Gulf Lift Services",
    listingId: "HY-CR-014",
    package: "Liebherr 130T crane listing",
    plan: "annual",
    status: "active",
    listings: 3,
    renewalDays: 48,
    signal: "Crane demand from UAE searches",
    action: "Keep proof attached"
  },
  {
    id: "RD-005",
    supplier: "Gulf Lift Services",
    listingId: "HY-CR-014",
    package: "Lift supervisor crew",
    plan: "monthly",
    status: "paused",
    listings: 7,
    renewalDays: null,
    signal: "Crew availability not confirmed",
    action: "Confirm availability then activate"
  },
  {
    id: "RD-006",
    supplier: "Desertline Equipment",
    listingId: "HY-LD-022",
    package: "Komatsu loader yard set",
    plan: "monthly",
    status: "renewal-risk",
    listings: 5,
    renewalDays: 9,
    signal: "Insurance gap blocks verified badge",
    action: "Renew billing after proof upload"
  },
  {
    id: "RD-007",
    supplier: "Metro Plant Hire",
    listingId: "HY-TL-030",
    package: "Telehandler weekly hire fleet",
    plan: "annual",
    status: "active",
    listings: 9,
    renewalDays: 96,
    signal: "Stable UK site logistics demand",
    action: "Invite branch expansion"
  },
  {
    id: "RD-008",
    supplier: "Prime Road Rentals",
    listingId: "HY-RD-042",
    package: "Compaction fleet",
    plan: "annual",
    status: "active",
    listings: 17,
    renewalDays: 33,
    signal: "Roadwork category supply gap",
    action: "Reconfirm soon status"
  },
  {
    id: "RD-009",
    supplier: "Frontier Civil Rentals",
    listingId: "HY-DZ-055",
    package: "Dozer civil fleet",
    plan: "annual",
    status: "active",
    listings: 22,
    renewalDays: 88,
    signal: "US earthmoving page anchor",
    action: "Keep annual renewal warm"
  }
];

let state = loadState();
let toastTimer = 0;
let commandPaletteQuery = "";
let workflowMenuQuery = "";
let workflowMenuRole = "all";

document.addEventListener("DOMContentLoaded", () => {
  bindControls();
  syncCommandRoleToHash();
  render();
  stabilizeHashScroll();
  syncNavigationState();
  window.addEventListener("hashchange", () => {
    const roleChanged = syncCommandRoleToHash();
    stabilizeHashScroll();
    syncNavigationState();
    if (roleChanged) renderCommandCenter();
    renderWorkflowDock();
    renderWorkflowGuide();
    renderSimplicityBar();
    renderCalmFocusLens();
    renderCalmDataRoom();
    renderLaunchCountryRoom();
    renderLaunchActivationSprint();
    renderProductionSprintRecords();
    renderProductionRoutePack();
    renderClosedLoopLearning();
    renderLearningFeedbackStore();
    renderRecommendationWeightSimulator();
    renderOrganizationLearningBoundary();
    renderBoundaryPolicySmokeConsole();
    renderBoundaryAuditFixturePack();
    renderBoundaryAuditReplayConsole();
    renderHumanApprovalReplayGate();
    renderLearningBenefitLedger();
    renderReinforcementEvaluationLab();
    renderNetworkLearningExchange();
    renderExchangePolicyAuditLog();
    renderLearningQualityDashboard();
    renderLearningActionQueue();
    renderQualityCompletionReceipts();
    renderCalmActionBar();
    renderSereneRoutePlanner();
    renderGlobalCalmCompass();
    renderCalmDecisionConcierge();
    renderCalmBackendHandoff();
    renderCalmLaunchPulse();
    renderProductionAccountScaffold();
    renderSaasLaunchGate();
    renderProductionBackendStarter();
    renderCalmBackendRouteHandoff();
    renderSereneProofGate();
    syncFocusLayerVisibility();
    renderDemoFlightDeck();
    renderBoardroomSnapshot();
    renderPilotPack();
    closeWorkflowMenu();
  });
});

function defaultState() {
  return {
    search: "",
    region: "all",
    availability: "all",
    category: "all",
    sort: "available",
    compactView: false,
    catalogPage: 1,
    catalogPageSize: 6,
    catalogPageSignature: "",
    selectedListingId: "HY-EX-001",
    shortlistIds: ["HY-EX-001"],
    shortlistCompareOpen: false,
    enquiryMode: "proof",
    responseTracker: {
      listingId: "",
      status: "draft",
      copiedAt: "",
      sentAt: "",
      followUpAt: "",
      replyAt: ""
    },
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
    activeMatrixKey: "",
    activeHuntTarget: "",
    huntOutcome: "agreed",
    marketTwinScenario: "balanced",
    commandRole: "Buyer",
    supplierView: false,
    simpleMode: true,
    simplicityRelease: SIMPLE_UX_RELEASE,
    focusLensExpanded: false,
    trustChecked: [true, true, true, false, false, false]
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    const base = defaultState();
    const merged = { ...base, ...(saved || {}) };
    if (!saved || saved.simplicityRelease !== SIMPLE_UX_RELEASE) {
      merged.simpleMode = true;
      merged.simplicityRelease = SIMPLE_UX_RELEASE;
      merged.focusLensExpanded = false;
    }
    merged.quoteIncludes = { ...base.quoteIncludes, ...(merged.quoteIncludes || {}) };
    merged.responseTracker = { ...base.responseTracker, ...(merged.responseTracker || {}) };
    if (!Array.isArray(merged.demandSignals)) merged.demandSignals = base.demandSignals;
    if (!commandRoles.includes(merged.commandRole)) merged.commandRole = base.commandRole;
    if (typeof merged.focusLensExpanded !== "boolean") merged.focusLensExpanded = base.focusLensExpanded;
    if (!merged.activeDemandKey && merged.demandSignals.length) merged.activeDemandKey = getDemandKey(merged.demandSignals[0]);
    if (!merged.activeMarketKey) merged.activeMarketKey = getMarketKeyFromSignal(merged.demandSignals[0]);
    if (!merged.activeMatrixKey) merged.activeMatrixKey = merged.activeMarketKey;
    if (!merged.activeHuntTarget) merged.activeHuntTarget = "";
    if (!huntOutcomeOptions.some((option) => option.id === merged.huntOutcome)) merged.huntOutcome = base.huntOutcome;
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
  const commandPaletteInput = document.querySelector("#commandPaletteInput");
  const commandPaletteQuick = document.querySelector("#commandPaletteQuick");
  const workflowMenuSearch = document.querySelector("#workflowMenuSearch");
  const workflowMenuFilters = document.querySelector("#workflowMenuFilters");
  const jobsiteType = document.querySelector("#jobsiteType");
  const jobsiteRegion = document.querySelector("#jobsiteRegion");
  const jobsiteUrgency = document.querySelector("#jobsiteUrgency");
  const demandEquipment = document.querySelector("#demandEquipment");
  const demandRegion = document.querySelector("#demandRegion");
  const demandUrgency = document.querySelector("#demandUrgency");
  const demandDuration = document.querySelector("#demandDuration");
  const enquiryMode = document.querySelector("#enquiryMode");

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
  enquiryMode.value = state.enquiryMode;

  search.addEventListener("input", (event) => {
    state.search = event.target.value.trim();
    resetCatalogPage();
    saveState();
    render();
  });

  region.addEventListener("change", (event) => {
    state.region = event.target.value;
    resetCatalogPage();
    saveState();
    render();
  });

  availability.addEventListener("change", (event) => {
    state.availability = event.target.value;
    resetCatalogPage();
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
    renderDealTrail();
    renderBuyerWorkbench();
    renderDirectEnquiryComposer();
    renderSupplierResponseRoute();
    renderMarketplaceDecisionCard();
    renderCalmProofCard();
    renderBuyerEnquiryReceipt();
    renderMarketplaceEnquiryStarter();
    renderMarketplaceConfidenceStrip();
  });

  enquiryMode.addEventListener("change", (event) => {
    state.enquiryMode = event.target.value;
    saveState();
    renderDirectEnquiryComposer();
    renderSupplierResponseRoute();
    renderMarketplaceDecisionCard();
    renderCalmProofCard();
    renderBuyerEnquiryReceipt();
    renderMarketplaceEnquiryStarter();
    renderMarketplaceConfidenceStrip();
  });

  listingCount.addEventListener("input", (event) => {
    state.listingCount = Number(event.target.value);
    saveState();
    renderPricingCalculator();
    renderMonetizationCommand();
    renderPaidListingActivation();
    renderSupplierActivationReceipt();
    renderLaunchCountryRoom();
    renderLaunchActivationSprint();
    renderProductionSprintRecords();
    renderProductionRoutePack();
    renderClosedLoopLearning();
    renderLearningFeedbackStore();
    renderRecommendationWeightSimulator();
    renderOrganizationLearningBoundary();
    renderBoundaryPolicySmokeConsole();
    renderBoundaryAuditFixturePack();
    renderBoundaryAuditReplayConsole();
    renderHumanApprovalReplayGate();
    renderLearningBenefitLedger();
    renderReinforcementEvaluationLab();
    renderNetworkLearningExchange();
    renderExchangePolicyAuditLog();
    renderLearningQualityDashboard();
    renderLearningActionQueue();
    renderQualityCompletionReceipts();
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
    resetCatalogPage();
    saveState();
    render();
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
      resetCatalogPage();
      saveState();
      render();
    });
  });

  document.querySelector("#copyLeadButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildLeadText());
      markEnquiryCopied();
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

  document.querySelector("#copyBuyerWorkbenchButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildBuyerWorkbenchText());
      showToast("Buyer workbench brief copied.");
    } catch {
      showToast("Copy is blocked here, but the buyer brief is visible.");
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

  document.querySelector("#copyDealTrailButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildDealTrailText());
      showToast("Direct deal trail copied.");
    } catch {
      showToast("Copy is blocked here, but the direct deal trail is visible.");
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

  document.querySelector("#copySupplierWorkbenchButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildSupplierWorkbenchText());
      showToast("Supplier workbench brief copied.");
    } catch {
      showToast("Copy is blocked here, but the supplier brief is visible.");
    }
  });

  document.querySelector("#copyFounderWorkbenchButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildFounderWorkbenchText());
      showToast("Founder workbench brief copied.");
    } catch {
      showToast("Copy is blocked here, but the founder brief is visible.");
    }
  });

  document.querySelector("#copyFounderMorningButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildFounderMorningBriefText());
      showToast("Founder morning brief copied.");
    } catch {
      showToast("Copy is blocked here, but the morning brief is visible.");
    }
  });

  document.querySelector("#copyFounderDailyButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildFounderDailyMovesText());
      showToast("Founder daily moves copied.");
    } catch {
      showToast("Copy is blocked here, but the daily moves are visible.");
    }
  });

  document.querySelector("#copyFounderCallSheetButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildFounderCallSheetText());
      showToast("Founder supplier call sheet copied.");
    } catch {
      showToast("Copy is blocked here, but the supplier call sheet is visible.");
    }
  });

  document.querySelector("#copyDemoFlightButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildDemoFlightDeckText());
      showToast("Demo flight script copied.");
    } catch {
      showToast("Copy is blocked here, but the demo script is visible.");
    }
  });

  document.querySelector("#copyBoardroomButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildBoardroomSnapshotText());
      showToast("Boardroom memo copied.");
    } catch {
      showToast("Copy is blocked here, but the boardroom memo is visible.");
    }
  });

  document.querySelector("#copyPilotPackButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildPilotPackText());
      showToast("30-day pilot pack copied.");
    } catch {
      showToast("Copy is blocked here, but the pilot pack is visible.");
    }
  });

  document.querySelector("#copyFleetImportButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildFleetImportText());
      showToast("Fleet import plan copied.");
    } catch {
      showToast("Copy is blocked here, but the fleet import plan is visible.");
    }
  });

  document.querySelector("#copyProofVaultButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildProofVaultText());
      showToast("Proof packet copied.");
    } catch {
      showToast("Copy is blocked here, but the proof packet is visible.");
    }
  });

  document.querySelector("#copyRevenueDeskButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildRevenueDeskText());
      showToast("Listing revenue packet copied.");
    } catch {
      showToast("Copy is blocked here, but the revenue packet is visible.");
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

  document.querySelector("#copyAccountHealthButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildAccountHealthText());
      showToast("Supplier health plan copied.");
    } catch {
      showToast("Copy is blocked here, but the health plan is visible.");
    }
  });

  document.querySelector("#copySupplierSuccessButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildSupplierSuccessText());
      showToast("Supplier success queue copied.");
    } catch {
      showToast("Copy is blocked here, but the success queue is visible.");
    }
  });

  document.querySelector("#copyPageFactoryButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildPageFactoryText());
      showToast("Market page pack copied.");
    } catch {
      showToast("Copy is blocked here, but the page pack is visible.");
    }
  });

  document.querySelector("#copyLaunchRoomButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildLaunchRoomText());
      showToast("Market launch sprint copied.");
    } catch {
      showToast("Copy is blocked here, but the launch sprint is visible.");
    }
  });

  document.querySelector("#copyMarketTwinButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildMarketTwinText());
      showToast("Market twin memo copied.");
    } catch {
      showToast("Copy is blocked here, but the twin memo is visible.");
    }
  });

  document.querySelector("#copyLiquidityFlywheelButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildLiquidityFlywheelText());
      showToast("Liquidity flywheel memo copied.");
    } catch {
      showToast("Copy is blocked here, but the flywheel memo is visible.");
    }
  });

  document.querySelector("#copyFounderAutopilotButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildFounderAutopilotText());
      showToast("Founder autopilot brief copied.");
    } catch {
      showToast("Copy is blocked here, but the autopilot brief is visible.");
    }
  });

  document.querySelector("#copyDemandExchangeButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildDemandExchangeText());
      showToast("Demand Exchange supplier invite copied.");
    } catch {
      showToast("Copy is blocked here, but the supplier invite is visible.");
    }
  });

  document.querySelector("#copyProofDemandButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildProofDemandText());
      showToast("Proof of Demand pack copied.");
    } catch {
      showToast("Copy is blocked here, but the proof pack is visible.");
    }
  });

  document.querySelector("#copySupplierCommitmentButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildSupplierCommitmentText());
      showToast("Supplier commitment note copied.");
    } catch {
      showToast("Copy is blocked here, but the commitment note is visible.");
    }
  });

  document.querySelector("#copyListingActivationButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildListingActivationText());
      showToast("Listing activation plan copied.");
    } catch {
      showToast("Copy is blocked here, but the activation plan is visible.");
    }
  });

  document.querySelector("#copyTrustLedgerButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildTrustLedgerText());
      showToast("Trust and revenue ledger brief copied.");
    } catch {
      showToast("Copy is blocked here, but the ledger brief is visible.");
    }
  });

  document.querySelector("#applyJobsiteButton").addEventListener("click", () => {
    renderJobsitePlanner();
    renderMobilizationTower();
    renderDealTrail();
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

  document.querySelector("#copyHuntCallSheetButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildSupplierHuntCallSheetText());
      showToast("Supplier hunt call sheet copied.");
    } catch {
      showToast("Copy is blocked here, but the call sheet is visible.");
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

  document.querySelector("#copyMarketMatrixButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildMarketSignalMatrixText());
      showToast("Market matrix brief copied.");
    } catch {
      showToast("Copy is blocked here, but the matrix brief is visible.");
    }
  });

  document.querySelector("#copyLaunchReadinessButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildLaunchReadinessText());
      showToast("Launch readiness gate copied.");
    } catch {
      showToast("Copy is blocked here, but the launch readiness gate is visible.");
    }
  });

  document.querySelector("#copyBackendSprintButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildBackendSprintText());
      showToast("Backend sprint board copied.");
    } catch {
      showToast("Copy is blocked here, but the backend sprint board is visible.");
    }
  });

  document.querySelector("#copySupplierAccountMvpButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildSupplierAccountMvpText());
      showToast("Supplier account MVP brief copied.");
    } catch {
      showToast("Copy is blocked here, but the supplier account MVP preview is visible.");
    }
  });

  document.querySelector("#copySupplierOnboardingButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildSupplierOnboardingRunwayText());
      showToast("Supplier onboarding runway copied.");
    } catch {
      showToast("Copy is blocked here, but the supplier onboarding runway is visible.");
    }
  });

  document.querySelector("#copyBackendDataContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildBackendDataContractText());
      showToast("Backend data contract copied.");
    } catch {
      showToast("Copy is blocked here, but the backend data contract is visible.");
    }
  });

  document.querySelector("#copySchemaApiBlueprintButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildSchemaApiBlueprintText());
      showToast("Schema and API blueprint copied.");
    } catch {
      showToast("Copy is blocked here, but the schema and API blueprint is visible.");
    }
  });

  document.querySelector("#copyApiSmokeConsoleButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildApiSmokeConsoleText());
      showToast("API smoke console copied.");
    } catch {
      showToast("Copy is blocked here, but the API smoke console is visible.");
    }
  });

  document.querySelector("#copyBackendFixturePackButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildBackendFixturePackText());
      showToast("Backend fixture pack copied.");
    } catch {
      showToast("Copy is blocked here, but the backend fixture pack is visible.");
    }
  });

  document.querySelector("#copyBackendImplementationContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildBackendImplementationContractText());
      showToast("Backend implementation contract copied.");
    } catch {
      showToast("Copy is blocked here, but the backend implementation contract is visible.");
    }
  });

  document.querySelector("#copyMonetizationCommandButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildMonetizationCommandText());
      showToast("Monetization command copied.");
    } catch {
      showToast("Copy is blocked here, but the monetization command is visible.");
    }
  });

  document.querySelector("#copyPilotLaunchCommandButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildPilotLaunchCommandText());
      showToast("Pilot launch command copied.");
    } catch {
      showToast("Copy is blocked here, but the pilot launch command is visible.");
    }
  });

  document.querySelector("#copyGlobalLaunchPassportButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildGlobalLaunchPassportText());
      showToast("Global launch passport copied.");
    } catch {
      showToast("Copy is blocked here, but the global passport is visible.");
    }
  });

  document.querySelector("#copySimpleGlobalUxGuardButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildSimpleGlobalUxGuardText());
      showToast("Simple global UX guard copied.");
    } catch {
      showToast("Copy is blocked here, but the UX guard is visible.");
    }
  });

  document.querySelector("#copyCalmCommandCenterButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildCalmCommandCenterText());
      showToast("Calm command center copied.");
    } catch {
      showToast("Copy is blocked here, but the calm command center is visible.");
    }
  });

  document.querySelector("#copySerenityModeButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildSerenityModeText());
      showToast("Serenity mode brief copied.");
    } catch {
      showToast("Copy is blocked here, but the serenity brief is visible.");
    }
  });

  document.querySelector("#copyHeavenlyFocusButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildHeavenlyFocusText());
      showToast("Heavenly focus brief copied.");
    } catch {
      showToast("Copy is blocked here, but the heavenly focus brief is visible.");
    }
  });

  document.querySelector("#copyCalmBackendScaffoldButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildCalmBackendScaffoldText());
      showToast("Calm backend scaffold copied.");
    } catch {
      showToast("Copy is blocked here, but the backend scaffold is visible.");
    }
  });

  document.querySelector("#copySupplierAccountShellButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildSupplierAccountShellText());
      showToast("Supplier account shell copied.");
    } catch {
      showToast("Copy is blocked here, but the supplier account shell is visible.");
    }
  });

  document.querySelector("#copyCalmLaunchRoomButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildCalmLaunchRoomText());
      showToast("Calm launch room copied.");
    } catch {
      showToast("Copy is blocked here, but the calm launch room is visible.");
    }
  });

  document.querySelector("#copyCalmProofCardButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildCalmProofCardText());
      showToast("Calm proof card copied.");
    } catch {
      showToast("Copy is blocked here, but the calm proof card is visible.");
    }
  });

  document.querySelector("#copyCalmActionBarButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildCalmActionBarText());
      showToast("Calm action bar rule copied.");
    } catch {
      showToast("Copy is blocked here, but the action bar rule is visible.");
    }
  });

  document.querySelector("#copySereneRoutePlannerButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildSereneRoutePlannerText());
      showToast("Serene route planner rule copied.");
    } catch {
      showToast("Copy is blocked here, but the route planner rule is visible.");
    }
  });

  document.querySelector("#copyGlobalCalmCompassButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildGlobalCalmCompassText());
      showToast("Global compass rule copied.");
    } catch {
      showToast("Copy is blocked here, but the global compass rule is visible.");
    }
  });

  document.querySelector("#copyCalmDecisionConciergeButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildCalmDecisionConciergeText());
      showToast("Decision concierge rule copied.");
    } catch {
      showToast("Copy is blocked here, but the decision concierge rule is visible.");
    }
  });

  document.querySelector("#copyCalmBackendHandoffContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildCalmBackendHandoffText());
      showToast("Calm backend handoff rule copied.");
    } catch {
      showToast("Copy is blocked here, but the calm backend handoff rule is visible.");
    }
  });

  document.querySelector("#copyCalmLaunchPulseContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildCalmLaunchPulseText());
      showToast("Calm launch pulse rule copied.");
    } catch {
      showToast("Copy is blocked here, but the calm launch pulse rule is visible.");
    }
  });

  document.querySelector("#copyProductionAccountScaffoldContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildProductionAccountScaffoldText());
      showToast("Production account scaffold copied.");
    } catch {
      showToast("Copy is blocked here, but the account scaffold is visible.");
    }
  });

  document.querySelector("#copySaasLaunchGateContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildSaasLaunchGateText());
      showToast("SaaS launch gate copied.");
    } catch {
      showToast("Copy is blocked here, but the launch gate is visible.");
    }
  });

  document.querySelector("#copyProductionBackendStarterContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildProductionBackendStarterText());
      showToast("Production backend starter copied.");
    } catch {
      showToast("Copy is blocked here, but the backend starter is visible.");
    }
  });

  document.querySelector("#copyCalmBackendRouteContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildCalmBackendRouteContractText());
      showToast("Calm backend route handoff copied.");
    } catch {
      showToast("Copy is blocked here, but the route handoff is visible.");
    }
  });

  document.querySelector("#copyCalmFocusLensContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildCalmFocusLensContractText());
      showToast("Calm focus lens copied.");
    } catch {
      showToast("Copy is blocked here, but the calm focus lens is visible.");
    }
  });

  document.querySelector("#copyCalmDataRoomContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildCalmDataRoomContractText());
      showToast("Calm data room copied.");
    } catch {
      showToast("Copy is blocked here, but the calm data room is visible.");
    }
  });

  document.querySelector("#copyLaunchCountryRoomContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildLaunchCountryRoomContractText());
      showToast("Launch country room copied.");
    } catch {
      showToast("Copy is blocked here, but the country room is visible.");
    }
  });

  document.querySelector("#copyLaunchActivationSprintContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildLaunchActivationSprintContractText());
      showToast("Launch activation sprint copied.");
    } catch {
      showToast("Copy is blocked here, but the sprint room is visible.");
    }
  });

  document.querySelector("#copyProductionSprintRecordsContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildProductionSprintRecordsContractText());
      showToast("Production sprint records copied.");
    } catch {
      showToast("Copy is blocked here, but the record contract is visible.");
    }
  });

  document.querySelector("#copyProductionRoutePackContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildProductionRoutePackContractText());
      showToast("Production route pack copied.");
    } catch {
      showToast("Copy is blocked here, but the route pack is visible.");
    }
  });

  document.querySelector("#copyClosedLoopLearningContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildClosedLoopLearningContractText());
      showToast("Closed loop learning copied.");
    } catch {
      showToast("Copy is blocked here, but the learning contract is visible.");
    }
  });

  document.querySelector("#copyLearningFeedbackStoreContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildLearningFeedbackStoreContractText());
      showToast("Learning feedback store copied.");
    } catch {
      showToast("Copy is blocked here, but the feedback store is visible.");
    }
  });

  document.querySelector("#copyRecommendationWeightSimulatorContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildRecommendationWeightSimulatorContractText());
      showToast("Recommendation weight simulator copied.");
    } catch {
      showToast("Copy is blocked here, but the weight simulator is visible.");
    }
  });

  document.querySelector("#copyOrganizationLearningBoundaryContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildOrganizationLearningBoundaryContractText());
      showToast("Organization learning boundary copied.");
    } catch {
      showToast("Copy is blocked here, but the learning boundary is visible.");
    }
  });

  document.querySelector("#copyBoundaryPolicySmokeConsoleContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildBoundaryPolicySmokeConsoleContractText());
      showToast("Boundary policy smoke console copied.");
    } catch {
      showToast("Copy is blocked here, but the smoke console is visible.");
    }
  });

  document.querySelector("#copyBoundaryAuditFixturePackContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildBoundaryAuditFixturePackContractText());
      showToast("Boundary audit fixture pack copied.");
    } catch {
      showToast("Copy is blocked here, but the audit fixture pack is visible.");
    }
  });

  document.querySelector("#copyBoundaryAuditReplayConsoleContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildBoundaryAuditReplayConsoleContractText());
      showToast("Boundary audit replay console copied.");
    } catch {
      showToast("Copy is blocked here, but the audit replay console is visible.");
    }
  });

  document.querySelector("#copyHumanApprovalReplayGateContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildHumanApprovalReplayGateContractText());
      showToast("Human approval replay gate copied.");
    } catch {
      showToast("Copy is blocked here, but the approval gate is visible.");
    }
  });

  document.querySelector("#copyLearningBenefitLedgerContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildLearningBenefitLedgerContractText());
      showToast("Learning benefit ledger copied.");
    } catch {
      showToast("Copy is blocked here, but the benefit ledger is visible.");
    }
  });

  document.querySelector("#copyReinforcementEvaluationLabContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildReinforcementEvaluationLabContractText());
      showToast("Reinforcement evaluation lab copied.");
    } catch {
      showToast("Copy is blocked here, but the evaluation lab is visible.");
    }
  });

  document.querySelector("#copyNetworkLearningExchangeContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildNetworkLearningExchangeContractText());
      showToast("Network learning exchange copied.");
    } catch {
      showToast("Copy is blocked here, but the exchange is visible.");
    }
  });

  document.querySelector("#copyExchangePolicyAuditLogContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildExchangePolicyAuditLogContractText());
      showToast("Exchange policy audit log copied.");
    } catch {
      showToast("Copy is blocked here, but the audit log is visible.");
    }
  });

  document.querySelector("#copyLearningQualityDashboardContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildLearningQualityDashboardContractText());
      showToast("Learning quality dashboard copied.");
    } catch {
      showToast("Copy is blocked here, but the quality dashboard is visible.");
    }
  });

  document.querySelector("#copyLearningActionQueueContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildLearningActionQueueContractText());
      showToast("Learning action queue copied.");
    } catch {
      showToast("Copy is blocked here, but the action queue is visible.");
    }
  });

  document.querySelector("#copyQualityCompletionReceiptsContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildQualityCompletionReceiptsContractText());
      showToast("Quality completion receipts copied.");
    } catch {
      showToast("Copy is blocked here, but the completion receipts are visible.");
    }
  });

  document.querySelector("#copySereneProofGateContractButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildSereneProofGateContractText());
      showToast("Serene proof gate copied.");
    } catch {
      showToast("Copy is blocked here, but the proof gate is visible.");
    }
  });

  document.querySelector("#shortlistToggleButton").addEventListener("click", () => {
    toggleShortlist(getSelectedListing().id);
  });

  document.querySelector("#compareShortlistButton").addEventListener("click", () => {
    state.shortlistCompareOpen = !state.shortlistCompareOpen;
    saveState();
    renderShortlistTray();
    scrollToPageTarget(document.querySelector("#shortlistTray"), 120);
    showToast(state.shortlistCompareOpen ? "Shortlist compare opened." : "Shortlist compare hidden.");
  });

  document.querySelector("#quickSearchButton").addEventListener("click", () => openCommandPalette());
  document.querySelector("#workflowDockSearchButton").addEventListener("click", () => openCommandPalette());
  document.querySelector("#workflowDockPrevButton").addEventListener("click", () => openWorkflowGuideTarget("previous"));
  document.querySelector("#workflowDockNextButton").addEventListener("click", () => openWorkflowGuideTarget("next"));
  document.querySelector("#simplicityIntents").addEventListener("click", (event) => {
    const button = event.target.closest("[data-simplicity-intent]");
    if (!button) return;
    handleSimplicityIntent(button.dataset.simplicityIntent);
  });
  document.querySelector("#simplicityFocus").addEventListener("click", (event) => {
    const button = event.target.closest("[data-simplicity-focus-anchor]");
    if (!button) return;
    openSimplicityTarget(button.dataset.simplicityFocusAnchor, button.textContent.trim());
  });
  document.querySelector("#simplicityPrimaryButton").addEventListener("click", () => {
    const button = document.querySelector("#simplicityPrimaryButton");
    openSimplicityTarget(button.dataset.simplicityAnchor, button.textContent.trim());
  });
  document.querySelector("#simplicitySecondaryButton").addEventListener("click", () => {
    const button = document.querySelector("#simplicitySecondaryButton");
    openSimplicityTarget(button.dataset.simplicityAnchor, button.textContent.trim());
  });
  document.querySelector("#calmFocusLensPrimaryButton").addEventListener("click", () => {
    handleCalmFocusLensAction("primary");
  });
  document.querySelector("#calmFocusLensToggleButton").addEventListener("click", () => {
    handleCalmFocusLensAction("toggle");
  });
  document.querySelector("#copyCalmFocusLensButton").addEventListener("click", () => {
    handleCalmFocusLensAction("copy");
  });
  document.querySelector("#calmDataRoomPrimaryButton").addEventListener("click", () => {
    handleCalmDataRoomAction("primary");
  });
  document.querySelector("#copyCalmDataRoomButton").addEventListener("click", () => {
    handleCalmDataRoomAction("copy");
  });
  document.querySelector("#launchCountryRoomPrimaryButton").addEventListener("click", () => {
    handleLaunchCountryRoomAction("primary");
  });
  document.querySelector("#copyLaunchCountryRoomButton").addEventListener("click", () => {
    handleLaunchCountryRoomAction("copy");
  });
  document.querySelector("#launchActivationSprintPrimaryButton").addEventListener("click", () => {
    handleLaunchActivationSprintAction("primary");
  });
  document.querySelector("#copyLaunchActivationSprintButton").addEventListener("click", () => {
    handleLaunchActivationSprintAction("copy");
  });
  document.querySelector("#productionSprintRecordsPrimaryButton").addEventListener("click", () => {
    handleProductionSprintRecordsAction("primary");
  });
  document.querySelector("#copyProductionSprintRecordsButton").addEventListener("click", () => {
    handleProductionSprintRecordsAction("copy");
  });
  document.querySelector("#productionRoutePackPrimaryButton").addEventListener("click", () => {
    handleProductionRoutePackAction("primary");
  });
  document.querySelector("#copyProductionRoutePackButton").addEventListener("click", () => {
    handleProductionRoutePackAction("copy");
  });
  document.querySelector("#closedLoopLearningPrimaryButton").addEventListener("click", () => {
    handleClosedLoopLearningAction("primary");
  });
  document.querySelector("#copyClosedLoopLearningButton").addEventListener("click", () => {
    handleClosedLoopLearningAction("copy");
  });
  document.querySelector("#learningFeedbackStorePrimaryButton").addEventListener("click", () => {
    handleLearningFeedbackStoreAction("primary");
  });
  document.querySelector("#copyLearningFeedbackStoreButton").addEventListener("click", () => {
    handleLearningFeedbackStoreAction("copy");
  });
  document.querySelector("#recommendationWeightPrimaryButton").addEventListener("click", () => {
    handleRecommendationWeightSimulatorAction("primary");
  });
  document.querySelector("#copyRecommendationWeightButton").addEventListener("click", () => {
    handleRecommendationWeightSimulatorAction("copy");
  });
  document.querySelector("#organizationBoundaryPrimaryButton").addEventListener("click", () => {
    handleOrganizationLearningBoundaryAction("primary");
  });
  document.querySelector("#copyOrganizationBoundaryButton").addEventListener("click", () => {
    handleOrganizationLearningBoundaryAction("copy");
  });
  document.querySelector("#boundaryPolicySmokePrimaryButton").addEventListener("click", () => {
    handleBoundaryPolicySmokeConsoleAction("primary");
  });
  document.querySelector("#copyBoundaryPolicySmokeButton").addEventListener("click", () => {
    handleBoundaryPolicySmokeConsoleAction("copy");
  });
  document.querySelector("#boundaryAuditFixturePrimaryButton").addEventListener("click", () => {
    handleBoundaryAuditFixturePackAction("primary");
  });
  document.querySelector("#copyBoundaryAuditFixtureButton").addEventListener("click", () => {
    handleBoundaryAuditFixturePackAction("copy");
  });
  document.querySelector("#boundaryAuditReplayPrimaryButton").addEventListener("click", () => {
    handleBoundaryAuditReplayConsoleAction("primary");
  });
  document.querySelector("#copyBoundaryAuditReplayButton").addEventListener("click", () => {
    handleBoundaryAuditReplayConsoleAction("copy");
  });
  document.querySelector("#humanApprovalReplayPrimaryButton").addEventListener("click", () => {
    handleHumanApprovalReplayGateAction("primary");
  });
  document.querySelector("#copyHumanApprovalReplayButton").addEventListener("click", () => {
    handleHumanApprovalReplayGateAction("copy");
  });
  document.querySelector("#learningBenefitPrimaryButton").addEventListener("click", () => {
    handleLearningBenefitLedgerAction("primary");
  });
  document.querySelector("#copyLearningBenefitButton").addEventListener("click", () => {
    handleLearningBenefitLedgerAction("copy");
  });
  document.querySelector("#reinforcementEvaluationPrimaryButton").addEventListener("click", () => {
    handleReinforcementEvaluationLabAction("primary");
  });
  document.querySelector("#copyReinforcementEvaluationButton").addEventListener("click", () => {
    handleReinforcementEvaluationLabAction("copy");
  });
  document.querySelector("#networkLearningPrimaryButton").addEventListener("click", () => {
    handleNetworkLearningExchangeAction("primary");
  });
  document.querySelector("#copyNetworkLearningButton").addEventListener("click", () => {
    handleNetworkLearningExchangeAction("copy");
  });
  document.querySelector("#exchangePolicyAuditPrimaryButton").addEventListener("click", () => {
    handleExchangePolicyAuditLogAction("primary");
  });
  document.querySelector("#copyExchangePolicyAuditButton").addEventListener("click", () => {
    handleExchangePolicyAuditLogAction("copy");
  });
  document.querySelector("#learningQualityPrimaryButton").addEventListener("click", () => {
    handleLearningQualityDashboardAction("primary");
  });
  document.querySelector("#copyLearningQualityButton").addEventListener("click", () => {
    handleLearningQualityDashboardAction("copy");
  });
  document.querySelector("#learningActionPrimaryButton").addEventListener("click", () => {
    handleLearningActionQueueAction("primary");
  });
  document.querySelector("#copyLearningActionButton").addEventListener("click", () => {
    handleLearningActionQueueAction("copy");
  });
  document.querySelector("#qualityReceiptPrimaryButton").addEventListener("click", () => {
    handleQualityCompletionReceiptsAction("primary");
  });
  document.querySelector("#copyQualityReceiptButton").addEventListener("click", () => {
    handleQualityCompletionReceiptsAction("copy");
  });
  document.querySelector("#sereneRoutePrimaryButton").addEventListener("click", () => {
    handleSereneRoutePlannerAction("primary");
  });
  document.querySelector("#copySereneRouteButton").addEventListener("click", () => {
    handleSereneRoutePlannerAction("copy");
  });
  document.querySelector("#globalCalmPrimaryButton").addEventListener("click", () => {
    handleGlobalCalmCompassAction("primary");
  });
  document.querySelector("#copyGlobalCalmButton").addEventListener("click", () => {
    handleGlobalCalmCompassAction("copy");
  });
  document.querySelector("#calmDecisionPrimaryButton").addEventListener("click", () => {
    handleCalmDecisionConciergeAction("primary");
  });
  document.querySelector("#copyCalmDecisionButton").addEventListener("click", () => {
    handleCalmDecisionConciergeAction("copy");
  });
  document.querySelector("#calmBackendHandoffPrimaryButton").addEventListener("click", () => {
    handleCalmBackendHandoffAction("primary");
  });
  document.querySelector("#copyCalmBackendHandoffButton").addEventListener("click", () => {
    handleCalmBackendHandoffAction("copy");
  });
  document.querySelector("#calmLaunchPulsePrimaryButton").addEventListener("click", () => {
    handleCalmLaunchPulseAction("primary");
  });
  document.querySelector("#copyCalmLaunchPulseButton").addEventListener("click", () => {
    handleCalmLaunchPulseAction("copy");
  });
  document.querySelector("#productionAccountPrimaryButton").addEventListener("click", () => {
    handleProductionAccountScaffoldAction("primary");
  });
  document.querySelector("#copyProductionAccountButton").addEventListener("click", () => {
    handleProductionAccountScaffoldAction("copy");
  });
  document.querySelector("#saasLaunchGatePrimaryButton").addEventListener("click", () => {
    handleSaasLaunchGateAction("primary");
  });
  document.querySelector("#copySaasLaunchGateButton").addEventListener("click", () => {
    handleSaasLaunchGateAction("copy");
  });
  document.querySelector("#productionBackendPrimaryButton").addEventListener("click", () => {
    handleProductionBackendStarterAction("primary");
  });
  document.querySelector("#copyProductionBackendButton").addEventListener("click", () => {
    handleProductionBackendStarterAction("copy");
  });
  document.querySelector("#calmBackendRoutePrimaryButton").addEventListener("click", () => {
    handleCalmBackendRouteHandoffAction("primary");
  });
  document.querySelector("#copyCalmBackendRouteButton").addEventListener("click", () => {
    handleCalmBackendRouteHandoffAction("copy");
  });
  document.querySelector("#sereneProofGatePrimaryButton").addEventListener("click", () => {
    handleSereneProofGateAction("primary");
  });
  document.querySelector("#copySereneProofGateButton").addEventListener("click", () => {
    handleSereneProofGateAction("copy");
  });
  document.querySelector("#simplicityModeButton").addEventListener("click", () => {
    state.simpleMode = !state.simpleMode;
    state.simplicityRelease = SIMPLE_UX_RELEASE;
    saveState();
    renderSimplicityBar();
    renderCalmFocusLens();
    renderCalmDataRoom();
    renderLaunchCountryRoom();
    renderLaunchActivationSprint();
    renderProductionSprintRecords();
    renderProductionRoutePack();
    renderClosedLoopLearning();
    renderLearningFeedbackStore();
    renderRecommendationWeightSimulator();
    renderOrganizationLearningBoundary();
    renderBoundaryPolicySmokeConsole();
    renderBoundaryAuditFixturePack();
    renderBoundaryAuditReplayConsole();
    renderHumanApprovalReplayGate();
    renderLearningBenefitLedger();
    renderReinforcementEvaluationLab();
    renderNetworkLearningExchange();
    renderExchangePolicyAuditLog();
    renderLearningQualityDashboard();
    renderLearningActionQueue();
    renderQualityCompletionReceipts();
    renderCalmActionBar();
    renderSereneRoutePlanner();
    renderGlobalCalmCompass();
    renderCalmDecisionConcierge();
    renderCalmBackendHandoff();
    renderCalmLaunchPulse();
    renderProductionAccountScaffold();
    renderSaasLaunchGate();
    renderProductionBackendStarter();
    renderCalmBackendRouteHandoff();
    renderSereneProofGate();
    syncFocusLayerVisibility();
    document.body.classList.toggle("simple-mode", state.simpleMode);
    syncNavigationState();
    showToast(state.simpleMode ? "Quiet view enabled." : "Full workflow dock restored.");
  });
  document.querySelector("#commandPaletteCloseButton").addEventListener("click", () => closeCommandPalette());
  document.querySelector("#commandPaletteBackdrop").addEventListener("click", () => closeCommandPalette());
  const workflowMenu = document.querySelector("#workflowMenu");
  if (workflowMenu) {
    workflowMenu.addEventListener("toggle", () => {
      if (!workflowMenu.open) {
        resetWorkflowMenu();
        return;
      }
      prepareWorkflowMenuForOpen();
      renderWorkflowMenu();
      window.setTimeout(() => workflowMenuSearch?.focus(), 20);
    });
    workflowMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => closeWorkflowMenu());
    });
    document.addEventListener("click", (event) => {
      if (workflowMenu.open && !workflowMenu.contains(event.target)) closeWorkflowMenu();
    });
  }
  if (workflowMenuSearch) {
    workflowMenuSearch.addEventListener("input", (event) => {
      workflowMenuQuery = event.target.value;
      renderWorkflowMenu();
    });
  }
  if (workflowMenuFilters) {
    workflowMenuFilters.querySelectorAll("[data-workflow-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        workflowMenuRole = button.dataset.workflowFilter || "all";
        renderWorkflowMenu();
      });
    });
  }
  commandPaletteInput.addEventListener("input", (event) => renderCommandPalette(event.target.value));
  commandPaletteInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const first = document.querySelector("[data-command-index]");
      if (first) activateCommandPaletteItem(first.dataset.commandIndex);
    }
    if (event.key === "Escape") closeCommandPalette();
  });
  if (commandPaletteQuick) {
    commandPaletteQuick.addEventListener("click", (event) => {
      const button = event.target.closest("[data-palette-quick-index]");
      if (!button) return;
      activateCommandPaletteQuickAction(button.dataset.paletteQuickIndex);
    });
  }
  document.addEventListener("keydown", (event) => {
    const target = event.target;
    const isTyping = target && ["INPUT", "SELECT", "TEXTAREA"].includes(target.tagName);
    if (event.key === "Escape") {
      closeCommandPalette();
      closeWorkflowMenu();
      return;
    }
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openCommandPalette();
      return;
    }
    if (event.key === "/" && !isTyping) {
      event.preventDefault();
      openCommandPalette();
    }
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

  document.querySelector("#topSecondaryActionButton").addEventListener("click", () => {
    const button = document.querySelector("#topSecondaryActionButton");
    openWorkflowStep(button.dataset.topActionAnchor, button.textContent.trim(), button.dataset.topActionRole);
  });

  document.querySelector("#topPrimaryAction").addEventListener("click", (event) => {
    const link = document.querySelector("#topPrimaryAction");
    if (!link.dataset.topActionAnchor) return;
    event.preventDefault();
    openWorkflowStep(link.dataset.topActionAnchor, link.textContent.trim(), link.dataset.topActionRole);
  });

  document.querySelector("#addListingButton").addEventListener("click", () => {
    state.listingCount = Math.min(80, state.listingCount + 1);
    saveState();
    renderPricingCalculator();
    renderPaidListingActivation();
    renderSupplierAccountStarter();
    renderSupplierActivationReceipt();
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
  renderSupplierAccountStarter();
  renderSupplierListingStarter();
  renderSupplierDecisionCard();
  renderSupplierActivationReceipt();
}

function updateJobsiteState() {
  state.jobsiteType = document.querySelector("#jobsiteType").value;
  state.jobsiteRegion = document.querySelector("#jobsiteRegion").value;
  state.jobsiteUrgency = document.querySelector("#jobsiteUrgency").value;
  saveState();
  renderJobsitePlanner();
  renderQuoteGuard();
  renderMobilizationTower();
  renderDealTrail();
  renderDecisionReceipt();
  renderDecisionRouter();
  renderListingRoiProof();
  renderSupplierRenewalClosePack();
  renderBuyerWorkbench();
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
  renderDealTrail();
  renderDecisionReceipt();
  renderDecisionRouter();
  renderListingRoiProof();
  renderSupplierRenewalClosePack();
  renderBuyerWorkbench();
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
  renderWorkflowDock();
  renderWorkflowGuide();
  renderSimplicityBar();
  renderCalmFocusLens();
  renderCalmDataRoom();
  renderLaunchCountryRoom();
  renderLaunchActivationSprint();
  renderProductionSprintRecords();
  renderProductionRoutePack();
  renderClosedLoopLearning();
  renderLearningFeedbackStore();
  renderRecommendationWeightSimulator();
  renderOrganizationLearningBoundary();
  renderBoundaryPolicySmokeConsole();
  renderBoundaryAuditFixturePack();
  renderBoundaryAuditReplayConsole();
  renderHumanApprovalReplayGate();
  renderLearningBenefitLedger();
  renderReinforcementEvaluationLab();
  renderNetworkLearningExchange();
  renderExchangePolicyAuditLog();
  renderLearningQualityDashboard();
  renderLearningActionQueue();
  renderQualityCompletionReceipts();
  renderCalmActionBar();
  renderSereneRoutePlanner();
  renderGlobalCalmCompass();
  renderCalmDecisionConcierge();
  renderCalmBackendHandoff();
  renderCalmLaunchPulse();
  renderProductionAccountScaffold();
  renderSaasLaunchGate();
  renderProductionBackendStarter();
  renderCalmBackendRouteHandoff();
  renderSereneProofGate();
  syncFocusLayerVisibility();
  renderDemoFlightDeck();
  renderBoardroomSnapshot();
  renderPilotPack();
  renderFounderWorkbench();
  renderFounderMorningBrief();
  renderFounderDailyMoves();
  renderFounderCallSheet();
  renderCategoryButtons();
  renderMarketplaceDecisionCard();
  renderCalmProofCard();
  renderBuyerEnquiryReceipt();
  renderMarketplaceScaleGuard();
  renderMarketplaceAnswer();
  renderMarketplaceEnquiryStarter();
  renderMarketplaceConfidenceStrip();
  renderMarketplaceQuickPresets();
  renderMarketplaceResultBrief();
  renderMarketplaceSearchAssist();
  renderMarketplaceSmartViews();
  renderMarketplaceFilterTrail();
  renderMarketplaceStats();
  renderMarketplaceSupplyLens();
  renderMarketplaceIntelligence();
  renderPilotCommandStrip();
  renderCatalog();
  renderLeadPacket();
  renderEquipmentDetail();
  renderSupplierResponseRoute();
  renderResponseTracker();
  renderReplyQualityGate();
  renderReplyClarifier();
  renderDecisionReceipt();
  renderDecisionRouter();
  renderListingRoiProof();
  renderSupplierRenewalClosePack();
  renderDirectEnquiryComposer();
  renderCommandPalette(commandPaletteQuery);
  renderJobsitePlanner();
  renderTrustPassport();
  renderShortlistTray();
  renderRfqRoom();
  renderAwardRoom();
  renderQuoteGuard();
  renderMobilizationTower();
  renderDealTrail();
  renderBuyerWorkbench();
  renderYardAvailability();
  renderSupplierStorefront();
  renderSupplierWorkbench();
  renderFleetImport();
  renderProofVault();
  renderRevenueDesk();
  renderLeadDesk();
  renderAccountHealth();
  renderSupplierSuccessQueue();
  renderPageFactory();
  renderLaunchRoom();
  renderMarketTwin();
  renderLiquidityFlywheel();
  renderFounderAutopilot();
  renderDemandExchange();
  renderProofDemandRoom();
  renderSupplierCommitmentRoom();
  renderListingActivationRoom();
  renderTrustRevenueLedger();
  renderDemandCapture();
  renderSupplierAccountStarter();
  renderSupplierListingStarter();
  renderSupplierDecisionCard();
  renderSupplierActivationReceipt();
  renderSupplierTable();
  renderTrustChecklist();
  renderOnboardingFlow();
  renderBuilderSummary();
  renderCategoryDirectory();
  renderAdminBoard();
  renderSupplierHunt();
  renderMarketSignalMatrix();
  renderMarketMaker();
  renderPaidListingActivation();
  renderMonetizationCommand();
  renderPilotLaunchCommand();
  renderGlobalLaunchPassport();
  renderSimpleGlobalUxGuard();
  renderCalmCommandCenter();
  renderSerenityModePanel();
  renderHeavenlyFocusPanel();
  renderPricingCalculator();
  renderCommissionCalculator();
  renderWorkflowMenu();
  document.body.classList.toggle("supplier-view", state.supplierView);
  document.body.classList.toggle("simple-mode", state.simpleMode);
  syncNavigationState();
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

function scrollToPageTarget(target, offset = 86) {
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

function closeWorkflowMenu() {
  const menu = document.querySelector("#workflowMenu");
  if (menu) menu.open = false;
  resetWorkflowMenu();
}

function resetWorkflowMenu() {
  workflowMenuQuery = "";
  workflowMenuRole = getDefaultWorkflowMenuRole();
  const search = document.querySelector("#workflowMenuSearch");
  if (search) search.value = "";
  renderWorkflowMenu();
}

function getDefaultWorkflowMenuRole() {
  if (!state.simpleMode) return "all";
  return getActiveWorkflowRole();
}

function prepareWorkflowMenuForOpen() {
  if (!state.simpleMode || workflowMenuQuery.trim() || workflowMenuRole !== "all") return;
  workflowMenuRole = getDefaultWorkflowMenuRole();
}

function getActiveWorkflowRole() {
  const activeHash = window.location.hash || "#marketplace";
  return getWorkflowRouteForHash(activeHash)?.role || state.commandRole || "Buyer";
}

function syncCommandRoleToHash() {
  const activeHash = window.location.hash || "#marketplace";
  const route = getWorkflowRouteForHash(activeHash);
  if (!route || state.commandRole === route.role) return false;
  state.commandRole = route.role;
  saveState();
  return true;
}

function renderWorkflowMenu() {
  const menu = document.querySelector("#workflowMenu");
  if (!menu) return;

  if (state.simpleMode && !menu.open && !workflowMenuQuery.trim()) {
    workflowMenuRole = getDefaultWorkflowMenuRole();
  }

  const normalizedQuery = workflowMenuQuery.trim().toLowerCase();
  const queryParts = normalizedQuery.split(/\s+/).filter(Boolean);
  menu.dataset.workflowScope = workflowMenuRole.toLowerCase();
  menu.classList.toggle("is-focused-role", workflowMenuRole !== "all");
  let visibleCount = 0;

  menu.querySelectorAll(".workflow-menu-group").forEach((group) => {
    const role = group.dataset.workflowRole || "";
    let groupVisible = false;

    group.querySelectorAll("a[data-nav-target]").forEach((link) => {
      const searchableText = [
        link.textContent || "",
        role,
        link.dataset.navTarget || "",
        link.getAttribute("href") || ""
      ].join(" ").toLowerCase();
      const matchesRole = workflowMenuRole === "all" || workflowMenuRole === role;
      const matchesQuery = !queryParts.length || queryParts.every((part) => searchableText.includes(part));
      const isVisible = matchesRole && matchesQuery;
      link.hidden = !isVisible;
      link.classList.toggle("is-filtered", isVisible && queryParts.length > 0);
      if (isVisible) {
        visibleCount += 1;
        groupVisible = true;
      }
    });

    group.hidden = !groupVisible;
    const count = group.querySelector("[data-workflow-count]");
    if (count) count.textContent = String(group.querySelectorAll("a[data-nav-target]:not([hidden])").length);
  });

  menu.querySelectorAll("[data-workflow-filter]").forEach((button) => {
    button.classList.toggle("is-active", (button.dataset.workflowFilter || "all") === workflowMenuRole);
  });

  const empty = document.querySelector("#workflowMenuEmpty");
  if (empty) empty.hidden = visibleCount > 0;
  updateWorkflowMenuStatus(visibleCount, queryParts.length > 0);
  if (menu.open) {
    const activeLink = menu.querySelector(".workflow-menu-group a.is-active:not([hidden])");
    if (activeLink) activeLink.scrollIntoView({ block: "nearest", inline: "nearest" });
  }
}

function updateWorkflowMenuStatus(visibleCount, hasQuery) {
  const status = document.querySelector("#workflowMenuStatus");
  if (!status) return;

  const activeAnchor = window.location.hash || "#marketplace";
  const activeLink = getVisibleWorkflowActiveLink(activeAnchor);
  const activeRole = activeLink?.closest(".workflow-menu-group")?.dataset.workflowRole || workflowMenuRole;
  const label = workflowMenuRole === "all" ? "Workflow map" : `${workflowMenuRole} path`;
  const headline = hasQuery
    ? `${visibleCount} matching module${visibleCount === 1 ? "" : "s"}`
    : activeLink
      ? `${activeLink.textContent.trim()} is active`
      : getWorkflowMenuFallbackHeadline(visibleCount);
  const helper = activeLink
    ? `${activeRole} workflow. Search, filter, or jump without losing the current page.`
    : getWorkflowMenuFallbackHelper();

  status.innerHTML = `
    <span>${escapeHtml(label)}</span>
    <strong>${escapeHtml(headline)}</strong>
    <small>${escapeHtml(helper)}</small>
  `;
}

function getVisibleWorkflowActiveLink(activeAnchor) {
  const activeLink = [...document.querySelectorAll(".workflow-menu [data-nav-target]")]
    .find((link) => link.dataset.navTarget === activeAnchor);
  return activeLink && !activeLink.hidden ? activeLink : null;
}

function getWorkflowMenuFallbackHeadline(visibleCount) {
  if (workflowMenuRole === "all") {
    return `${visibleCount} module${visibleCount === 1 ? "" : "s"} ready`;
  }
  return `${visibleCount} ${workflowMenuRole.toLowerCase()} tool${visibleCount === 1 ? "" : "s"} ready`;
}

function getWorkflowMenuFallbackHelper() {
  if (workflowMenuRole === "all") {
    return "Search by buyer, supplier, founder, module name, or page anchor.";
  }
  return `${workflowMenuRole} tools only. Switch filters or search to find another module.`;
}

function syncNavigationState() {
  renderSimpleNavigation();
  renderTopActions();
  renderBrandContext();
  const activeAnchor = window.location.hash || "#marketplace";
  const links = [...document.querySelectorAll("[data-nav-target]")];
  links.forEach((link) => {
    const target = link.dataset.navTarget || link.getAttribute("href");
    link.classList.toggle("is-active", target === activeAnchor);
  });

  const workflowMenu = document.querySelector("#workflowMenu");
  if (workflowMenu) {
    const hasActive = [...workflowMenu.querySelectorAll("[data-nav-target]")]
      .some((link) => link.classList.contains("is-active"));
    workflowMenu.classList.toggle("has-active", hasActive);
  }
}

function renderBrandContext() {
  const brandLink = document.querySelector("#brandHomeLink");
  const subtitle = document.querySelector("#brandSubtitle");
  if (!brandLink || !subtitle) return;

  const role = getActiveWorkflowRole();
  const model = getBrandContextModel(role);
  brandLink.href = model.home;
  brandLink.setAttribute("aria-label", model.aria);
  subtitle.textContent = model.subtitle;
}

function getBrandContextModel(role) {
  if (role === "Supplier") {
    return {
      home: "#studio",
      aria: "Heavyster supplier home",
      subtitle: "Supplier path: listings, proof, direct leads"
    };
  }
  if (role === "Founder") {
    return {
      home: "#market-signal-matrix",
      aria: "Heavyster founder home",
      subtitle: "Founder path: demand, trust, listing ARR"
    };
  }
  return {
    home: "#marketplace",
    aria: "Heavyster buyer home",
    subtitle: "Buyer path: search, proof, direct enquiry"
  };
}

function renderTopActions() {
  const secondaryButton = document.querySelector("#topSecondaryActionButton");
  const primaryLink = document.querySelector("#topPrimaryAction");
  if (!secondaryButton || !primaryLink) return;

  const role = getActiveWorkflowRole();
  const model = getTopActionModel(role);
  secondaryButton.textContent = model.secondary.label;
  secondaryButton.dataset.topActionAnchor = model.secondary.anchor;
  secondaryButton.dataset.topActionRole = role;
  secondaryButton.setAttribute("aria-label", model.secondary.aria);
  primaryLink.textContent = model.primary.label;
  primaryLink.href = model.primary.anchor;
  primaryLink.dataset.topActionAnchor = model.primary.anchor;
  primaryLink.dataset.topActionRole = role;
  primaryLink.setAttribute("aria-label", model.primary.aria);
}

function getTopActionModel(role) {
  if (role === "Supplier") {
    return {
      secondary: { label: "Supplier desk", anchor: "#supplier-workbench", aria: "Open supplier desk" },
      primary: { label: "List equipment", anchor: "#studio", aria: "Open supplier listing workspace" }
    };
  }
  if (role === "Founder") {
    return {
      secondary: { label: "Founder desk", anchor: "#founder-workbench", aria: "Open founder desk" },
      primary: { label: "Market command", anchor: "#market-signal-matrix", aria: "Open market signal command" }
    };
  }
  return {
    secondary: { label: "Buyer desk", anchor: "#buyer-workbench", aria: "Open buyer desk" },
    primary: { label: "Search equipment", anchor: "#marketplace", aria: "Open marketplace search" }
  };
}

function renderSimpleNavigation() {
  const nav = document.querySelector(".topnav");
  if (!nav) return;

  const activeRole = getActiveWorkflowRole();
  const allowedTargets = new Set(getSimpleNavigationTargets(activeRole));
  nav.classList.toggle("is-simple-nav", state.simpleMode);
  document.body.dataset.simpleRole = activeRole.toLowerCase();

  nav.querySelectorAll(":scope > a[data-nav-target]").forEach((link) => {
    const target = link.dataset.navTarget || link.getAttribute("href");
    link.hidden = state.simpleMode && !allowedTargets.has(target);
  });

  const menuSummary = document.querySelector("#workflowMenu > summary");
  if (menuSummary) {
    menuSummary.textContent = state.simpleMode ? `${activeRole} tools` : "Workflows";
  }
}

function getSimpleNavigationTargets(role) {
  const shared = ["#marketplace", "#pricing", "#build-phase", "#roadmap"];
  if (role === "Supplier") {
    return ["#marketplace", "#command-center", "#studio", "#pricing", "#build-phase", "#roadmap"];
  }
  if (role === "Founder") {
    return ["#command-center", "#trust-revenue-ledger", "#pricing", "#build-phase", "#roadmap"];
  }
  return ["#marketplace", "#command-center", ...shared.slice(1)];
}

function renderWorkflowDock() {
  const root = document.querySelector("#workflowDock");
  const tabsRoot = document.querySelector("#workflowDockTabs");
  const pathRoot = document.querySelector("#workflowDockPath");
  if (!root || !tabsRoot || !pathRoot) return;

  const model = getWorkflowDockModel();
  root.dataset.activeRole = model.activeRole.toLowerCase();
  setText("#workflowDockSignal", model.signal);

  tabsRoot.innerHTML = model.roles.map((role) => `
    <button type="button" class="${role.isActive ? "is-active" : ""}" data-workflow-role="${escapeHtml(role.role)}" aria-pressed="${role.isActive ? "true" : "false"}" aria-label="${escapeHtml(role.role)} workflow readiness ${escapeHtml(role.score)}" title="${escapeHtml(role.role)} workflow readiness ${escapeHtml(role.score)}">
      <span class="workflow-role-full" aria-hidden="true">${escapeHtml(role.role)}</span>
      <span class="workflow-role-short" aria-hidden="true">${escapeHtml(getWorkflowRoleShortLabel(role.role))}</span>
      <b>${escapeHtml(role.score)}</b>
    </button>
  `).join("");

  pathRoot.innerHTML = model.steps.map((step) => `
    <button type="button" class="workflow-dock-step ${step.isActive ? "is-active" : ""}" data-workflow-anchor="${escapeHtml(step.anchor)}" data-workflow-label="${escapeHtml(step.label)}" title="Open ${escapeHtml(model.activeRole)} ${escapeHtml(step.label)}">
      <em>${String(step.index + 1).padStart(2, "0")}</em>
      <strong>${escapeHtml(step.label)}</strong>
    </button>
  `).join("");
  centerWorkflowDockStep(pathRoot);

  tabsRoot.querySelectorAll("[data-workflow-role]").forEach((button) => {
    button.addEventListener("click", () => {
      state.commandRole = button.dataset.workflowRole;
      saveState();
      renderCommandCenter();
      renderWorkflowDock();
      showToast(`${state.commandRole} workflow dock active.`);
    });
  });

  pathRoot.querySelectorAll("[data-workflow-anchor]").forEach((button) => {
    button.addEventListener("click", () => {
      openWorkflowStep(button.dataset.workflowAnchor, button.dataset.workflowLabel, model.activeRole);
    });
  });
}

function centerWorkflowDockStep(pathRoot = document.querySelector("#workflowDockPath")) {
  if (!pathRoot) return;
  const activeStep = pathRoot.querySelector(".workflow-dock-step.is-active");
  if (!activeStep) return;
  window.requestAnimationFrame(() => {
    const pathRect = pathRoot.getBoundingClientRect();
    const stepRect = activeStep.getBoundingClientRect();
    const left = pathRoot.scrollLeft
      + stepRect.left
      - pathRect.left
      - Math.max(0, (pathRoot.clientWidth - stepRect.width) / 2);
    pathRoot.scrollTo({ left: Math.max(0, left), behavior: "auto" });
  });
}

function getWorkflowRoleShortLabel(role) {
  return role === "Supplier" ? "Supp." : role === "Founder" ? "Found." : role;
}

function renderWorkflowGuide() {
  const guide = document.querySelector("#workflowDockGuide");
  if (!guide) return;

  const model = getWorkflowGuideModel();
  const previousButton = document.querySelector("#workflowDockPrevButton");
  const nextButton = document.querySelector("#workflowDockNextButton");
  setText("#workflowDockCurrentRoom", `${model.role} path`);
  setText("#workflowDockNextMove", model.moveText);
  setText("#workflowDockProgress", model.progressText);

  if (previousButton) {
    previousButton.disabled = !model.previous;
    previousButton.dataset.workflowGuideAnchor = model.previous?.anchor || "";
    previousButton.dataset.workflowGuideLabel = model.previous?.label || "";
    previousButton.dataset.workflowGuideRole = model.role;
  }
  if (nextButton) {
    nextButton.disabled = !model.next;
    nextButton.dataset.workflowGuideAnchor = model.next?.anchor || "";
    nextButton.dataset.workflowGuideLabel = model.next?.label || "";
    nextButton.dataset.workflowGuideRole = model.role;
  }
}

function renderSimplicityBar() {
  const root = document.querySelector("#simplicityBar");
  if (!root) return;

  const model = getSimplicityBarModel();
  root.dataset.role = model.role.toLowerCase();
  setText("#simplicityRole", model.roleLabel);
  setText("#simplicityHeadline", model.headline);
  setText("#simplicityDetail", model.detail);

  document.querySelector("#simplicityIntents").innerHTML = getSimplicityIntents().map((intent) => `
    <button type="button" class="${intent.role === model.role ? "is-active" : ""}" data-simplicity-intent="${escapeHtml(intent.id)}" aria-pressed="${intent.role === model.role ? "true" : "false"}">
      <strong>${escapeHtml(intent.label)}</strong>
      <span>${escapeHtml(intent.signal)}</span>
    </button>
  `).join("");

  document.querySelector("#simplicityFocus").innerHTML = `
    <div>
      <span>${escapeHtml(model.focus.eyebrow)}</span>
      <strong>${escapeHtml(model.focus.title)}</strong>
      <small>${escapeHtml(model.focus.detail)}</small>
    </div>
    <em>${escapeHtml(model.focus.proof)}</em>
    <button type="button" data-simplicity-focus-anchor="${escapeHtml(model.focus.anchor)}">${escapeHtml(model.focus.action)}</button>
  `;

  document.querySelector("#simplicityMetrics").innerHTML = model.metrics.map((metric) => `
    <span class="${escapeHtml(metric.kind)}"><strong>${escapeHtml(metric.value)}</strong>${escapeHtml(metric.label)}</span>
  `).join("");

  const primaryButton = document.querySelector("#simplicityPrimaryButton");
  const secondaryButton = document.querySelector("#simplicitySecondaryButton");
  const modeButton = document.querySelector("#simplicityModeButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.dataset.simplicityAnchor = model.primary.anchor;
  primaryButton.setAttribute("aria-label", model.primary.aria);
  secondaryButton.textContent = model.secondary.label;
  secondaryButton.dataset.simplicityAnchor = model.secondary.anchor;
  secondaryButton.setAttribute("aria-label", model.secondary.aria);
  modeButton.textContent = state.simpleMode ? "Full workflow" : "Quiet view";
  modeButton.setAttribute("aria-pressed", state.simpleMode ? "true" : "false");
}

function getSimplicityBarModel() {
  const command = getCommandCenterModel();
  const guide = getWorkflowGuideModel();
  const role = guide.role || command.activeRole;
  const roleScore = command.routes.find((route) => route.role === role)?.score || command.workspace.score;
  const defaults = getSimplicityDefaults(role);
  const routeSummary = getSimpleRouteSummary(role, guide, defaults, roleScore);
  const isMarketplaceStart = guide.current?.anchor === "#marketplace";
  const primary = isMarketplaceStart || !guide.next
    ? defaults.primary
    : {
        label: `Next: ${guide.next.label}`,
        anchor: guide.next.anchor,
        aria: `Open next ${role} workflow step, ${guide.next.label}`
      };

  return {
    role,
    roleLabel: `${role} path`,
    headline: defaults.headline,
    detail: isMarketplaceStart
      ? defaults.startDetail
      : routeSummary.detail,
    primary,
    secondary: defaults.secondary,
    focus: isMarketplaceStart ? defaults.focus : getSimpleRouteFocus(role, guide, defaults),
    metrics: routeSummary.metrics
  };
}

function getSimpleRouteFocus(role, guide, defaults) {
  const next = guide.next || defaults.primary;
  const current = guide.current?.label || defaults.primary.label;
  return {
    eyebrow: "Do this next",
    title: `Move from ${current} to ${next.label}.`,
    detail: defaults.detail,
    proof: defaults.focus.proof,
    action: `Open ${next.label}`,
    anchor: next.anchor
  };
}

function getSimpleRouteSummary(role, guide, defaults, roleScore) {
  const current = guide.current?.label || defaults.primary.label;
  const next = guide.next?.label || "Complete";
  return {
    detail: `You are in ${current}. Next: ${next}. ${defaults.detail}`,
    metrics: [
      { kind: "route-now", value: "Now", label: current },
      { kind: "route-next", value: "Next", label: next },
      { kind: "route-score", value: roleScore, label: "readiness" },
      { kind: "route-rule", value: defaults.ruleValue, label: defaults.ruleLabel }
    ]
  };
}

function getSimplicityDefaults(role) {
  if (role === "Supplier") {
    return {
      headline: "List one machine, verify proof, then receive direct enquiries.",
      detail: "Keep supplier work inside listing, proof, availability, and lead response.",
      startDetail: "A supplier should know exactly where to add equipment, proof, and availability.",
      ruleValue: "USD 9",
      ruleLabel: "per listing",
      primary: { label: "List equipment", anchor: "#studio", aria: "Open supplier listing workspace" },
      secondary: { label: "Supplier desk", anchor: "#supplier-workbench", aria: "Open supplier desk" },
      focus: {
        eyebrow: "Recommended next move",
        title: "Confirm availability before routing serious enquiries.",
        detail: "Gulf Lift Services has proof and revenue signals; freshness is the simple blocker.",
        proof: "3 paid listings",
        action: "Confirm availability",
        anchor: "#supplier-workbench"
      }
    };
  }

  if (role === "Founder") {
    return {
      headline: "Choose the next market by demand, supply, trust, and listing ARR.",
      detail: "Founder work should stay focused on proof, launch gates, and phase-one listing revenue.",
      startDetail: "Use the command layer to choose where Heavyster should grow without adding noise.",
      ruleValue: "Trust first",
      ruleLabel: "scale rule",
      primary: { label: "Market command", anchor: "#market-signal-matrix", aria: "Open market signal command" },
      secondary: { label: "Founder desk", anchor: "#founder-workbench", aria: "Open founder desk" },
      focus: {
        eyebrow: "Recommended next move",
        title: "Protect UAE Lifting before adding more traffic.",
        detail: "Demand is visible, but supply and trust gaps decide whether growth compounds cleanly.",
        proof: "USD 6,615 listing ARR",
        action: "Open trust ledger",
        anchor: "#trust-revenue-ledger"
      }
    };
  }

  return {
    headline: "Search, compare proof, and send a direct enquiry.",
    detail: "Buyer work should stay inside search, shortlist, proof, RFQ, and award.",
    startDetail: "A buyer should see the fastest path to verified equipment and direct supplier contact.",
    ruleValue: "0%",
    ruleLabel: "rental take",
    primary: { label: "Search equipment", anchor: "#marketplace", aria: "Open marketplace search" },
    secondary: { label: "Buyer desk", anchor: "#buyer-workbench", aria: "Open buyer desk" },
    focus: {
      eyebrow: "Recommended next move",
      title: "Use the cleanest crane path and send one direct enquiry.",
      detail: "Liebherr 130T Mobile Crane has the strongest visible match, proof, and supplier route.",
      proof: "Trust 88/100",
      action: "Copy enquiry",
      anchor: "#marketplace"
    }
  };
}

function getSimplicityIntents() {
  return [
    { id: "find", role: "Buyer", label: "Find equipment", signal: "Search and enquire", anchor: "#marketplace" },
    { id: "list", role: "Supplier", label: "List equipment", signal: "Add fleet and proof", anchor: "#studio" },
    { id: "grow", role: "Founder", label: "Grow market", signal: "Pick the next wedge", anchor: "#market-signal-matrix" }
  ];
}

function handleSimplicityIntent(intentId) {
  const intent = getSimplicityIntents().find((item) => item.id === intentId);
  if (!intent) return;
  state.commandRole = intent.role;
  state.simpleMode = true;
  state.simplicityRelease = SIMPLE_UX_RELEASE;
  saveState();
  renderCommandCenter();
  renderWorkflowDock();
  renderWorkflowGuide();
  renderSimplicityBar();
  renderCalmFocusLens();
  renderCalmDataRoom();
  renderLaunchCountryRoom();
  renderLaunchActivationSprint();
  renderProductionSprintRecords();
  renderProductionRoutePack();
  renderClosedLoopLearning();
  renderLearningFeedbackStore();
  renderRecommendationWeightSimulator();
  renderOrganizationLearningBoundary();
  renderBoundaryPolicySmokeConsole();
  renderBoundaryAuditFixturePack();
  renderBoundaryAuditReplayConsole();
  renderHumanApprovalReplayGate();
  renderLearningBenefitLedger();
  renderReinforcementEvaluationLab();
  renderNetworkLearningExchange();
  renderExchangePolicyAuditLog();
  renderLearningQualityDashboard();
  renderLearningActionQueue();
  renderQualityCompletionReceipts();
  renderCalmActionBar();
  renderSereneRoutePlanner();
  renderGlobalCalmCompass();
  renderCalmDecisionConcierge();
  renderCalmBackendHandoff();
  renderCalmLaunchPulse();
  renderProductionAccountScaffold();
  renderSaasLaunchGate();
  renderProductionBackendStarter();
  renderCalmBackendRouteHandoff();
  renderSereneProofGate();
  syncFocusLayerVisibility();
  document.body.classList.add("simple-mode");
  openWorkflowStep(intent.anchor, intent.label, intent.role);
}

function openSimplicityTarget(anchor, label) {
  if (!anchor) return;
  const route = getWorkflowRouteForHash(anchor);
  openWorkflowStep(anchor, label, route?.role || state.commandRole);
}

const focusLayerSelectors = [
  ".calm-action-bar",
  ".calm-data-room",
  ".launch-country-room",
  ".launch-activation-sprint",
  ".production-sprint-records",
  ".production-route-pack",
  ".closed-loop-learning",
  ".learning-feedback-store",
  ".recommendation-weight-simulator",
  ".organization-learning-boundary",
  ".boundary-policy-smoke-console",
  ".boundary-audit-fixture-pack",
  ".boundary-audit-replay-console",
  ".human-approval-replay-gate",
  ".learning-benefit-ledger",
  ".reinforcement-evaluation-lab",
  ".network-learning-exchange",
  ".exchange-policy-audit-log",
  ".learning-quality-dashboard",
  ".learning-action-queue",
  ".quality-completion-receipts",
  ".serene-route-planner",
  ".global-calm-compass",
  ".calm-decision-concierge",
  ".calm-backend-handoff",
  ".calm-launch-pulse",
  ".production-account-scaffold",
  ".saas-launch-gate",
  ".production-backend-starter",
  ".calm-backend-route-handoff",
  ".serene-proof-gate"
];

function renderCalmFocusLens() {
  const root = document.querySelector("#calmFocusLens");
  if (!root) return;

  const model = getCalmFocusLensModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#calmFocusLensRole").textContent = model.roleLabel;
  document.querySelector("#calmFocusLensHeadline").textContent = model.headline;
  document.querySelector("#calmFocusLensDetail").textContent = model.detail;
  document.querySelector("#calmFocusLensGrid").innerHTML = model.states.map((item) => `
    <span class="${escapeHtml(item.tone)}">
      <em>${escapeHtml(item.label)}</em>
      <strong>${escapeHtml(item.value)}</strong>
      <small>${escapeHtml(item.detail)}</small>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#calmFocusLensPrimaryButton");
  const toggleButton = document.querySelector("#calmFocusLensToggleButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
  toggleButton.textContent = state.focusLensExpanded ? "Hide build layers" : "Show build layers";
  toggleButton.setAttribute("aria-pressed", String(state.focusLensExpanded));
  syncFocusLayerVisibility();
}

function getCalmFocusLensModel() {
  const simplicity = getSimplicityBarModel();
  const guide = getWorkflowGuideModel();
  const listing = getSelectedListing();
  const role = simplicity.role || state.commandRole || "Buyer";
  const current = guide.current?.label || simplicity.primary.label;
  const next = guide.next?.label || simplicity.primary.label;
  const configs = {
    Buyer: {
      roleLabel: "Buyer focus lens",
      headline: "Start with the cleanest visible supply path.",
      detail: `${listing.name} gives the fastest calm path: proof visible, supplier route clear, rental payment direct.`,
      current: "Search",
      nowDetail: "crane, UAE, availability",
      primary: { label: "Open buyer desk", anchor: "#buyer-workbench", aria: "Open the buyer focus desk" },
      states: [
        { label: "Proof", value: "Trust 88/100", detail: "visible before enquiry", tone: "ready" },
        { label: "Money", value: "0% rental take", detail: "pay supplier direct", tone: "ready" },
        { label: "Supply", value: "1 match", detail: "clean path", tone: "ready" }
      ],
      next: "Desk",
      nextDetail: "copy or continue"
    },
    Supplier: {
      roleLabel: "Supplier focus lens",
      headline: "List one machine with proof and freshness.",
      detail: "Gulf Lift Services keeps the path calm: one listing, one proof check, one paid SaaS rule.",
      current: "Listing",
      nowDetail: "Cat 320 ready",
      primary: { label: "Open supplier desk", anchor: "#supplier-workbench", aria: "Open the supplier focus desk" },
      states: [
        { label: "Proof", value: "88/100", detail: "clean documents", tone: "ready" },
        { label: "Money", value: "USD 99/yr", detail: "listing SaaS", tone: "ready" },
        { label: "Freshness", value: "Confirm", detail: "before serious leads", tone: "watch" }
      ],
      next: "Lead Desk",
      nextDetail: "route one enquiry"
    },
    Founder: {
      roleLabel: "Founder focus lens",
      headline: "Grow one market wedge only when it stays calm.",
      detail: "UAE Lifting stays focused on demand, proof, listing ARR, and the next supply gap.",
      current: "Matrix",
      nowDetail: "UAE Lifting wedge",
      primary: { label: "Open market command", anchor: "#market-signal-matrix", aria: "Open the founder market command" },
      states: [
        { label: "Proof", value: "100/100", detail: "visible proof", tone: "ready" },
        { label: "Money", value: "USD 6,615 ARR", detail: "listing revenue", tone: "ready" },
        { label: "Gap", value: "21 supply", detail: "recruit first", tone: "watch" }
      ],
      next: "Hunt",
      nextDetail: "fill supply gap"
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    current: config.current || current,
    next: config.next || next,
    primary: config.primary,
    states: [
      { label: "Role", value: role, detail: "active path", tone: "neutral" },
      { label: "Now", value: config.current || current, detail: config.nowDetail, tone: "neutral" },
      ...config.states,
      { label: "Next", value: config.next || next, detail: config.nextDetail, tone: "watch" }
    ].slice(0, 6)
  };
}

function syncFocusLayerVisibility() {
  const collapsed = !state.focusLensExpanded;
  document.body.classList.toggle("focus-layers-collapsed", collapsed);
  focusLayerSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((node) => {
      node.setAttribute("aria-hidden", collapsed ? "true" : "false");
    });
  });
}

function toggleCalmFocusLayers() {
  state.focusLensExpanded = !state.focusLensExpanded;
  saveState();
  renderCalmFocusLens();
  renderCalmDataRoom();
  renderLaunchCountryRoom();
  renderLaunchActivationSprint();
  renderProductionSprintRecords();
  renderProductionRoutePack();
  renderClosedLoopLearning();
  renderLearningFeedbackStore();
  renderRecommendationWeightSimulator();
  renderOrganizationLearningBoundary();
  renderBoundaryPolicySmokeConsole();
  renderBoundaryAuditFixturePack();
  renderBoundaryAuditReplayConsole();
  renderHumanApprovalReplayGate();
  renderLearningBenefitLedger();
  renderReinforcementEvaluationLab();
  renderNetworkLearningExchange();
  renderExchangePolicyAuditLog();
  renderLearningQualityDashboard();
  renderLearningActionQueue();
  renderQualityCompletionReceipts();
  syncFocusLayerVisibility();
  showToast(state.focusLensExpanded ? "Build layers shown." : "Build layers hidden.");
}

async function handleCalmFocusLensAction(action, model = getCalmFocusLensModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  if (action === "toggle") {
    toggleCalmFocusLayers();
    return;
  }

  try {
    await navigator.clipboard.writeText(buildCalmFocusLensText(model));
    showToast("Calm focus copied.");
  } catch {
    showToast("Copy is blocked here, but the calm focus is visible.");
  }
}

function buildCalmFocusLensText(model = getCalmFocusLensModel()) {
  return [
    "Heavyster Calm Focus Lens",
    "Version: v155 Calm Focus Lens",
    "Rule: show one calm focus first, then reveal deeper build layers only on request.",
    "",
    `Role: ${model.role}`,
    `Focus: ${model.headline}`,
    `Current: ${model.current}`,
    `Proof/Money path: ${model.states.map((item) => `${item.label}: ${item.value}`).join(" -> ")}`,
    `Next action: ${model.next}`,
    `Primary button: ${model.primary.label}`,
    "",
    "Payment guardrail: buyer pays the rental company directly. Heavyster earns listing SaaS only in phase one.",
    "Rental take: 0%.",
    "UI promise: one visible path first; older proof and backend layers stay available behind Show build layers."
  ].join("\n");
}

function buildCalmFocusLensContractText() {
  return buildCalmFocusLensText();
}

function renderCalmDataRoom() {
  const root = document.querySelector("#calmDataRoom");
  if (!root) return;

  const model = getCalmDataRoomModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#calmDataRoomRole").textContent = model.roleLabel;
  document.querySelector("#calmDataRoomHeadline").textContent = model.headline;
  document.querySelector("#calmDataRoomDetail").textContent = model.detail;
  document.querySelector("#calmDataRoomGrid").innerHTML = model.records.map((record) => `
    <span class="${escapeHtml(record.tone)}">
      <em>${escapeHtml(record.label)}</em>
      <strong>${escapeHtml(record.name)}</strong>
      <small>${escapeHtml(record.detail)}</small>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#calmDataRoomPrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getCalmDataRoomModel() {
  const lens = getCalmFocusLensModel();
  const listing = getSelectedListing();
  const role = lens.role || state.commandRole || "Buyer";
  const configs = {
    Buyer: {
      roleLabel: "Buyer data room",
      headline: "Turn the enquiry path into clean records.",
      detail: `${listing.name} becomes DirectEnquiry, ProofSnapshot, LeadPacket, PaymentGuardrail, and SavedSearch without taking rental payment.`,
      primary: { label: "Open buyer records", anchor: "#buyer-workbench", aria: "Open buyer data room records" },
      records: [
        { label: "Record", name: "DirectEnquiry", detail: "one buyer message", tone: "ready" },
        { label: "Record", name: "ProofSnapshot", detail: "visible proof", tone: "ready" },
        { label: "Record", name: "LeadPacket", detail: "supplier route", tone: "ready" },
        { label: "Guardrail", name: "PaymentGuardrail", detail: "0% rental take", tone: "ready" },
        { label: "Signal", name: "SavedSearch", detail: "repeat demand", tone: "neutral" }
      ]
    },
    Supplier: {
      roleLabel: "Supplier data room",
      headline: "Turn one listing path into SaaS records.",
      detail: "Al Noor Heavy Rentals becomes SupplierAccount, EquipmentListing, ProofDocument, ListingSubscription, and DirectRoute while rental payment stays direct.",
      primary: { label: "Open supplier records", anchor: "#supplier-workbench", aria: "Open supplier data room records" },
      records: [
        { label: "Record", name: "SupplierAccount", detail: "company profile", tone: "ready" },
        { label: "Record", name: "EquipmentListing", detail: listing.name, tone: "ready" },
        { label: "Record", name: "ProofDocument", detail: "photos and docs", tone: "ready" },
        { label: "Money", name: "ListingSubscription", detail: "USD 99/yr", tone: "ready" },
        { label: "Route", name: "DirectRoute", detail: "buyer enquiry", tone: "neutral" }
      ]
    },
    Founder: {
      roleLabel: "Founder data room",
      headline: "Turn market focus into launch records.",
      detail: "UAE Lifting becomes AdminReview, MarketWedge, SupplierTarget, ListingARR, and LaunchGate before scaling traffic.",
      primary: { label: "Open founder records", anchor: "#market-signal-matrix", aria: "Open founder data room records" },
      records: [
        { label: "Record", name: "AdminReview", detail: "trust queue", tone: "ready" },
        { label: "Market", name: "MarketWedge", detail: "UAE Lifting", tone: "ready" },
        { label: "Record", name: "SupplierTarget", detail: "close supply", tone: "watch" },
        { label: "Money", name: "ListingARR", detail: "USD 6,615", tone: "ready" },
        { label: "Gate", name: "LaunchGate", detail: "scale when ready", tone: "neutral" }
      ]
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    primary: config.primary,
    records: config.records
  };
}

async function handleCalmDataRoomAction(action, model = getCalmDataRoomModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildCalmDataRoomText(model));
    showToast("Calm data room copied.");
  } catch {
    showToast("Copy is blocked here, but the data room is visible.");
  }
}

function buildCalmDataRoomText(model = getCalmDataRoomModel()) {
  return [
    "Heavyster Calm Data Room",
    "Version: v156 Calm Data Room",
    "Rule: turn one calm path into backend-ready records before production build work begins.",
    "",
    `Role: ${model.role}`,
    `Focus: ${model.headline}`,
    "Records:",
    ...model.records.map((record) => `- ${record.name}: ${record.detail}`),
    "",
    "Payment guardrail: buyer pays the rental company directly. Heavyster earns listing SaaS only in phase one.",
    "Rental take: 0%.",
    "Production note: these are record contracts for backend implementation; no rental custody route is created."
  ].join("\n");
}

function buildCalmDataRoomContractText() {
  return buildCalmDataRoomText();
}

function renderLaunchCountryRoom() {
  const root = document.querySelector("#launchCountryRoom");
  if (!root) return;

  const model = getLaunchCountryRoomModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#launchCountryRoomRole").textContent = model.roleLabel;
  document.querySelector("#launchCountryRoomHeadline").textContent = model.headline;
  document.querySelector("#launchCountryRoomDetail").textContent = model.detail;
  document.querySelector("#launchCountryRoomGrid").innerHTML = model.rooms.map((room) => `
    <span class="${escapeHtml(room.tone)}">
      <em>${escapeHtml(room.label)}</em>
      <strong>${escapeHtml(room.value)}</strong>
      <small>${escapeHtml(room.detail)}</small>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#launchCountryRoomPrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getLaunchCountryRoomModel() {
  const dataRoom = getCalmDataRoomModel();
  const listing = getSelectedListing();
  const role = dataRoom.role || state.commandRole || "Buyer";
  const configs = {
    Buyer: {
      roleLabel: "Buyer country room",
      headline: "Use UAE as the first visible supply room.",
      detail: `${listing.name} should stay simple: one country, one proven supplier route, one direct enquiry, and no rental take.`,
      primary: { label: "Open buyer route", anchor: "#buyer-workbench", aria: "Open the buyer country route" },
      rooms: [
        { label: "Country", value: "UAE", detail: "first search room", tone: "ready" },
        { label: "Category", value: listing.category, detail: "active result", tone: "neutral" },
        { label: "Proof", value: "Trust 100/100", detail: "visible before enquiry", tone: "ready" },
        { label: "Money", value: "0% rental take", detail: "pay supplier direct", tone: "ready" },
        { label: "Next", value: "Direct enquiry", detail: "one message", tone: "watch" }
      ]
    },
    Supplier: {
      roleLabel: "Supplier country room",
      headline: "Turn one UAE supplier account into paid listings.",
      detail: "Al Noor Heavy Rentals can launch a calm country room with account, proof, first machine, paid listing, and direct lead route.",
      primary: { label: "Open supplier desk", anchor: "#supplier-workbench", aria: "Open the supplier country desk" },
      rooms: [
        { label: "Country", value: "UAE", detail: "supplier market", tone: "ready" },
        { label: "Category", value: "Earthmoving", detail: "first paid wedge", tone: "neutral" },
        { label: "Proof", value: "100/100", detail: "documents clean", tone: "ready" },
        { label: "Money", value: "USD 1,026", detail: "modeled ARR", tone: "ready" },
        { label: "Next", value: "Lead Desk", detail: "route direct enquiries", tone: "watch" }
      ]
    },
    Founder: {
      roleLabel: "Founder country room",
      headline: "Launch UAE Lifting only after the supply gap is visible.",
      detail: "The founder room turns global ambition into one country/category launch command with proof, supplier hunt, ARR, and a calm scale gate.",
      primary: { label: "Open market command", anchor: "#market-signal-matrix", aria: "Open the founder country command" },
      rooms: [
        { label: "Country", value: "UAE", detail: "launch room", tone: "ready" },
        { label: "Category", value: "Lifting", detail: "highest wedge", tone: "neutral" },
        { label: "Supply", value: "21 gap", detail: "recruit before traffic", tone: "watch" },
        { label: "Money", value: "USD 2,178", detail: "listing ARR", tone: "ready" },
        { label: "Next", value: "Hunt", detail: "open supplier hunt", tone: "watch" }
      ]
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    primary: config.primary,
    rooms: config.rooms
  };
}

async function handleLaunchCountryRoomAction(action, model = getLaunchCountryRoomModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildLaunchCountryRoomText(model));
    showToast("Launch country room copied.");
  } catch {
    showToast("Copy is blocked here, but the country room is visible.");
  }
}

function buildLaunchCountryRoomText(model = getLaunchCountryRoomModel()) {
  return [
    "Heavyster Launch Country Room",
    "Version: v157 Launch Country Room",
    "Rule: choose one country, one category wedge, one proof gate, one listing SaaS rule, and one next action before scaling traffic.",
    "",
    `Role: ${model.role}`,
    `Focus: ${model.headline}`,
    "Country room:",
    ...model.rooms.map((room) => `- ${room.label}: ${room.value} (${room.detail})`),
    "",
    "Payment guardrail: buyer pays the rental company directly. Heavyster earns listing SaaS only in phase one.",
    "Rental take: 0%.",
    "Launch promise: global expansion stays calm by opening only the country room that has proof, supply logic, and listing revenue clarity."
  ].join("\n");
}

function buildLaunchCountryRoomContractText() {
  return buildLaunchCountryRoomText();
}

function renderLaunchActivationSprint() {
  const root = document.querySelector("#launchActivationSprint");
  if (!root) return;

  const model = getLaunchActivationSprintModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#launchActivationSprintRole").textContent = model.roleLabel;
  document.querySelector("#launchActivationSprintHeadline").textContent = model.headline;
  document.querySelector("#launchActivationSprintDetail").textContent = model.detail;
  document.querySelector("#launchActivationSprintGrid").innerHTML = model.moves.map((move) => `
    <span class="${escapeHtml(move.tone)}">
      <em>${escapeHtml(move.label)}</em>
      <strong>${escapeHtml(move.value)}</strong>
      <small>${escapeHtml(move.detail)}</small>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#launchActivationSprintPrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getLaunchActivationSprintModel() {
  const countryRoom = getLaunchCountryRoomModel();
  const listing = getSelectedListing();
  const role = countryRoom.role || state.commandRole || "Buyer";
  const supplierArr = Math.max(99, state.listingCount * 99);
  const configs = {
    Buyer: {
      roleLabel: "Buyer sprint",
      headline: "Turn the UAE room into one supplier-ready enquiry.",
      detail: `${listing.name} becomes a proof-first buyer move: check availability, copy one enquiry, and keep payment direct with the rental company.`,
      primary: { label: "Copy buyer enquiry", anchor: "#marketplace", aria: "Open the buyer launch sprint enquiry" },
      moves: [
        { label: "Day 1", value: "Proof check", detail: "trust before message", tone: "ready" },
        { label: "Day 2", value: listing.region, detail: "local supply lane", tone: "neutral" },
        { label: "Day 3", value: "Direct ask", detail: "one supplier note", tone: "ready" },
        { label: "Money", value: "0% take", detail: "pay supplier direct", tone: "ready" },
        { label: "Win", value: "Reply tracked", detail: "follow-up path", tone: "watch" }
      ]
    },
    Supplier: {
      roleLabel: "Supplier sprint",
      headline: "Convert one country account into paid listing motion.",
      detail: `Use ${state.listingCount} active listing slots as the calm sprint target: proof, freshness, direct lead route, and USD ${formatNumber(supplierArr)} annual listing ARR.`,
      primary: { label: "Open activation room", anchor: "#listing-activation", aria: "Open supplier activation sprint room" },
      moves: [
        { label: "Day 1", value: "Profile", detail: "account clean", tone: "ready" },
        { label: "Day 2", value: "Proof", detail: "docs visible", tone: "ready" },
        { label: "Day 3", value: "Freshness", detail: "availability live", tone: "watch" },
        { label: "Money", value: `USD ${formatNumber(supplierArr)}`, detail: "annual listing ARR", tone: "ready" },
        { label: "Win", value: "Lead route", detail: "direct enquiry", tone: "neutral" }
      ]
    },
    Founder: {
      roleLabel: "Founder sprint",
      headline: "Run the first UAE Lifting activation sprint before scale.",
      detail: "The founder sprint converts country choice into a seven-day operating lane: close supply, publish proof, activate paid listings, and block rental custody.",
      primary: { label: "Open founder ledger", anchor: "#trust-revenue-ledger", aria: "Open founder launch activation ledger" },
      moves: [
        { label: "Day 1", value: "21 gap", detail: "supplier hunt", tone: "watch" },
        { label: "Day 3", value: "Proof gate", detail: "trust before traffic", tone: "ready" },
        { label: "Day 5", value: "6 calls", detail: "anchor suppliers", tone: "neutral" },
        { label: "Money", value: "USD 2,178", detail: "listing ARR wedge", tone: "ready" },
        { label: "Win", value: "Go/no-go", detail: "scale decision", tone: "watch" }
      ]
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    primary: config.primary,
    moves: config.moves
  };
}

async function handleLaunchActivationSprintAction(action, model = getLaunchActivationSprintModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildLaunchActivationSprintText(model));
    showToast("Launch activation sprint copied.");
  } catch {
    showToast("Copy is blocked here, but the sprint room is visible.");
  }
}

function buildLaunchActivationSprintText(model = getLaunchActivationSprintModel()) {
  return [
    "Heavyster Launch Activation Sprint",
    "Version: v158 Launch Activation Sprint",
    "Rule: turn one country room into one seven-day activation lane before traffic, supplier onboarding, or paid listings scale.",
    "",
    `Role: ${model.role}`,
    `Focus: ${model.headline}`,
    "Sprint moves:",
    ...model.moves.map((move) => `- ${move.label}: ${move.value} (${move.detail})`),
    "",
    "Payment guardrail: buyer pays the rental company directly. Heavyster earns listing SaaS only in phase one.",
    "Rental take: 0%.",
    "Activation promise: launch work moves only when proof, supply, direct enquiry, and listing ARR are visible."
  ].join("\n");
}

function buildLaunchActivationSprintContractText() {
  return buildLaunchActivationSprintText();
}

function renderProductionSprintRecords() {
  const root = document.querySelector("#productionSprintRecords");
  if (!root) return;

  const model = getProductionSprintRecordsModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#productionSprintRecordsRole").textContent = model.roleLabel;
  document.querySelector("#productionSprintRecordsHeadline").textContent = model.headline;
  document.querySelector("#productionSprintRecordsDetail").textContent = model.detail;
  document.querySelector("#productionSprintRecordsGrid").innerHTML = model.records.map((record) => `
    <span class="${escapeHtml(record.tone)}">
      <em>${escapeHtml(record.label)}</em>
      <strong>${escapeHtml(record.value)}</strong>
      <small>${escapeHtml(record.detail)}</small>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#productionSprintRecordsPrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getProductionSprintRecordsModel() {
  const sprint = getLaunchActivationSprintModel();
  const listing = getSelectedListing();
  const role = sprint.role || state.commandRole || "Buyer";
  const supplierArr = Math.max(99, state.listingCount * 99);
  const configs = {
    Buyer: {
      roleLabel: "Buyer records",
      headline: "Persist one direct enquiry sprint without payment custody.",
      detail: `${listing.name} creates enquiry, proof snapshot, reply follow-up, and blocked payment records so the buyer path can become production-safe.`,
      primary: { label: "Open enquiry records", anchor: "#responseTracker", aria: "Open buyer sprint record route" },
      records: [
        { label: "Record", value: "DirectEnquiry", detail: "buyer note", tone: "ready" },
        { label: "Proof", value: "ProofSnapshot", detail: "trust state", tone: "ready" },
        { label: "Owner", value: "Buyer", detail: "reply follow-up", tone: "neutral" },
        { label: "Route", value: "SupplierDirect", detail: "no platform custody", tone: "ready" },
        { label: "Blocked", value: "PaymentIntent", detail: "not phase one", tone: "watch" }
      ]
    },
    Supplier: {
      roleLabel: "Supplier records",
      headline: "Persist paid-listing activation before supplier scale.",
      detail: `The supplier sprint becomes account, listing, proof, subscription, and lead-route records with USD ${formatNumber(supplierArr)} annual listing ARR visible.`,
      primary: { label: "Open listing records", anchor: "#listing-activation", aria: "Open supplier production sprint records" },
      records: [
        { label: "Record", value: "SupplierAccount", detail: "profile owner", tone: "ready" },
        { label: "Record", value: "EquipmentListing", detail: "publish gate", tone: "ready" },
        { label: "Proof", value: "ProofDocument", detail: "expiry state", tone: "watch" },
        { label: "Money", value: "ListingSubscription", detail: `USD ${formatNumber(supplierArr)}`, tone: "ready" },
        { label: "Route", value: "DirectLead", detail: "supplier inbox", tone: "neutral" }
      ]
    },
    Founder: {
      roleLabel: "Founder records",
      headline: "Persist the UAE Lifting go/no-go command.",
      detail: "The founder sprint becomes launch room, supplier target, proof gate, ARR signal, direct route, and blocked rental-custody records before scale.",
      primary: { label: "Open launch ledger", anchor: "#trust-revenue-ledger", aria: "Open founder production sprint records" },
      records: [
        { label: "Record", value: "LaunchRoom", detail: "UAE Lifting", tone: "ready" },
        { label: "Record", value: "SupplierTarget", detail: "21 gap", tone: "watch" },
        { label: "Proof", value: "ProofGate", detail: "trust before traffic", tone: "ready" },
        { label: "Money", value: "ARRSignal", detail: "USD 2,178", tone: "ready" },
        { label: "Decision", value: "GoNoGo", detail: "scale gate", tone: "neutral" }
      ]
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    primary: config.primary,
    records: config.records
  };
}

async function handleProductionSprintRecordsAction(action, model = getProductionSprintRecordsModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildProductionSprintRecordsText(model));
    showToast("Production sprint records copied.");
  } catch {
    showToast("Copy is blocked here, but the record plan is visible.");
  }
}

function buildProductionSprintRecordsText(model = getProductionSprintRecordsModel()) {
  return [
    "Heavyster Production Sprint Records",
    "Version: v159 Production Sprint Records",
    "Rule: convert one activation sprint into production-safe records before backend implementation begins.",
    "",
    `Role: ${model.role}`,
    `Focus: ${model.headline}`,
    "Records:",
    ...model.records.map((record) => `- ${record.value}: ${record.detail}`),
    "",
    "Payment guardrail: buyer pays the rental company directly. Heavyster earns listing SaaS only in phase one.",
    "Blocked route: no rental payment, deposit, escrow, payout, or booking commission record is created.",
    "Production promise: every sprint has an owner, proof state, direct route, ARR signal, and go/no-go decision before scale."
  ].join("\n");
}

function buildProductionSprintRecordsContractText() {
  return buildProductionSprintRecordsText();
}

function renderProductionRoutePack() {
  const root = document.querySelector("#productionRoutePack");
  if (!root) return;

  const model = getProductionRoutePackModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#productionRoutePackRole").textContent = model.roleLabel;
  document.querySelector("#productionRoutePackHeadline").textContent = model.headline;
  document.querySelector("#productionRoutePackDetail").textContent = model.detail;
  document.querySelector("#productionRoutePackGrid").innerHTML = model.routes.map((route) => `
    <span class="${escapeHtml(route.tone)}">
      <em>${escapeHtml(route.label)}</em>
      <strong>${escapeHtml(route.value)}</strong>
      <small>${escapeHtml(route.detail)}</small>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#productionRoutePackPrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getProductionRoutePackModel() {
  const records = getProductionSprintRecordsModel();
  const role = records.role || state.commandRole || "Buyer";
  const configs = {
    Buyer: {
      roleLabel: "Buyer route pack",
      headline: "Turn enquiry records into the first direct-enquiry API.",
      detail: "Buyer route pack maps direct enquiry, proof snapshot, selected equipment, reply follow-up, and blocked payment intent into a production-safe route.",
      primary: { label: "Open API console", anchor: "#api-smoke-console", aria: "Open buyer route API console" },
      routes: [
        { label: "Route", value: "/api/direct-enquiries", detail: "create enquiry", tone: "ready" },
        { label: "Table", value: "direct_enquiries", detail: "buyer note", tone: "ready" },
        { label: "Field", value: "proof_snapshot_id", detail: "trust state", tone: "neutral" },
        { label: "Validate", value: "supplier route", detail: "direct only", tone: "ready" },
        { label: "Blocked", value: "/api/rental-payments", detail: "no custody", tone: "watch" }
      ]
    },
    Supplier: {
      roleLabel: "Supplier route pack",
      headline: "Turn listing records into the first paid-listing APIs.",
      detail: "Supplier route pack maps supplier account, listing, proof document, subscription, and direct lead route into production-safe endpoints.",
      primary: { label: "Open schema blueprint", anchor: "#schema-api-blueprint", aria: "Open supplier route schema blueprint" },
      routes: [
        { label: "Route", value: "/api/equipment-listings", detail: "publish gate", tone: "ready" },
        { label: "Route", value: "/api/listing-subscriptions", detail: "SaaS billing", tone: "ready" },
        { label: "Table", value: "proof_documents", detail: "expiry state", tone: "watch" },
        { label: "Validate", value: "active listing", detail: "paid status", tone: "neutral" },
        { label: "Blocked", value: "/api/payouts", detail: "no rental flow", tone: "watch" }
      ]
    },
    Founder: {
      roleLabel: "Founder route pack",
      headline: "Turn launch records into market signal and go/no-go APIs.",
      detail: "Founder route pack maps launch room, supplier target, proof gate, ARR signal, and go/no-go decision into backend implementation routes.",
      primary: { label: "Open implementation contract", anchor: "#backend-implementation-contract", aria: "Open founder backend implementation contract" },
      routes: [
        { label: "Route", value: "/api/market-signals", detail: "launch room", tone: "ready" },
        { label: "Table", value: "supplier_targets", detail: "gap owner", tone: "watch" },
        { label: "Field", value: "go_no_go", detail: "scale gate", tone: "neutral" },
        { label: "Validate", value: "proof before traffic", detail: "trust rule", tone: "ready" },
        { label: "Blocked", value: "/api/booking-commissions", detail: "phase one", tone: "watch" }
      ]
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    primary: config.primary,
    routes: config.routes
  };
}

async function handleProductionRoutePackAction(action, model = getProductionRoutePackModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildProductionRoutePackText(model));
    showToast("Production route pack copied.");
  } catch {
    showToast("Copy is blocked here, but the route pack is visible.");
  }
}

function buildProductionRoutePackText(model = getProductionRoutePackModel()) {
  return [
    "Heavyster Production Route Pack",
    "Version: v160 Production Route Pack",
    "Rule: map one production record set into allowed API routes, table fields, validations, and blocked payment routes before backend implementation starts.",
    "",
    `Role: ${model.role}`,
    `Focus: ${model.headline}`,
    "Route pack:",
    ...model.routes.map((route) => `- ${route.label}: ${route.value} (${route.detail})`),
    "",
    "Allowed route promise: direct enquiries, supplier accounts, equipment listings, proof documents, listing subscriptions, admin reviews, and market signals.",
    "Blocked route promise: no rental payments, deposits, escrow, payouts, or booking commissions in phase one.",
    "Production promise: routes are ready for API smoke fixtures without adding payment custody."
  ].join("\n");
}

function buildProductionRoutePackContractText() {
  return buildProductionRoutePackText();
}

function renderClosedLoopLearning() {
  const root = document.querySelector("#closedLoopLearning");
  if (!root) return;

  const model = getClosedLoopLearningModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#closedLoopLearningRole").textContent = model.roleLabel;
  document.querySelector("#closedLoopLearningHeadline").textContent = model.headline;
  document.querySelector("#closedLoopLearningDetail").textContent = model.detail;
  document.querySelector("#closedLoopLearningGrid").innerHTML = model.signals.map((signal) => `
    <span class="${escapeHtml(signal.tone)}">
      <em>${escapeHtml(signal.label)}</em>
      <strong>${escapeHtml(signal.value)}</strong>
      <small>${escapeHtml(signal.detail)}</small>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#closedLoopLearningPrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getClosedLoopLearningModel() {
  const routePack = getProductionRoutePackModel();
  const role = routePack.role || state.commandRole || "Buyer";
  const configs = {
    Buyer: {
      roleLabel: "Buyer learning loop",
      headline: "Turn enquiry outcomes into better next matches.",
      detail: "Buyer loop records search intent, proof trust, supplier response, and outcome feedback so the next recommendation becomes calmer and sharper.",
      primary: { label: "Open result intelligence", anchor: "#resultIntelligence", aria: "Open buyer result intelligence" },
      signals: [
        { label: "Observe", value: "enquiry outcome", detail: "sent/replied/shortlisted", tone: "ready" },
        { label: "Learn", value: "match weight", detail: "proof + response", tone: "ready" },
        { label: "Recommend", value: "next supplier", detail: "better fit", tone: "neutral" },
        { label: "Org memory", value: "private pattern", detail: "buyer team only", tone: "ready" },
        { label: "Network lift", value: "aggregate signal", detail: "privacy safe", tone: "watch" }
      ]
    },
    Supplier: {
      roleLabel: "Supplier learning loop",
      headline: "Turn listing outcomes into better lead routing.",
      detail: "Supplier loop learns from listing freshness, proof quality, lead response, subscription state, and buyer fit without exposing a company's private playbook.",
      primary: { label: "Open lead desk", anchor: "#lead-desk", aria: "Open supplier lead desk" },
      signals: [
        { label: "Observe", value: "lead outcome", detail: "view/enquiry/reply", tone: "ready" },
        { label: "Learn", value: "listing quality", detail: "proof + freshness", tone: "ready" },
        { label: "Recommend", value: "next proof fix", detail: "higher trust", tone: "neutral" },
        { label: "Org memory", value: "yard pattern", detail: "supplier team", tone: "ready" },
        { label: "Network lift", value: "supply signal", detail: "category safe", tone: "watch" }
      ]
    },
    Founder: {
      roleLabel: "Founder learning loop",
      headline: "Turn market outcomes into a stronger launch playbook.",
      detail: "Founder loop learns from supplier hunt, proof gate, listing ARR, direct enquiry quality, and go/no-go decisions before scaling another country or category.",
      primary: { label: "Open market matrix", anchor: "#market-signal-matrix", aria: "Open market signal matrix" },
      signals: [
        { label: "Observe", value: "market result", detail: "ARR/enquiry/proof", tone: "ready" },
        { label: "Learn", value: "launch weight", detail: "wedge quality", tone: "ready" },
        { label: "Recommend", value: "next category", detail: "go/no-go", tone: "neutral" },
        { label: "Org memory", value: "operator rule", detail: "market team", tone: "ready" },
        { label: "Network lift", value: "playbook signal", detail: "aggregate only", tone: "watch" }
      ]
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    primary: config.primary,
    route: routePack.routes?.[0]?.value || "/api/direct-enquiries",
    signals: config.signals
  };
}

async function handleClosedLoopLearningAction(action, model = getClosedLoopLearningModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildClosedLoopLearningText(model));
    showToast("Closed loop learning copied.");
  } catch {
    showToast("Copy is blocked here, but the learning loop is visible.");
  }
}

function buildClosedLoopLearningText(model = getClosedLoopLearningModel()) {
  return [
    "Heavyster Closed Loop Learning",
    "Version: v161 Closed Loop Learning",
    "Rule: every completed action can create a human-approved feedback event that improves the next recommendation without exposing private organization data.",
    "",
    `Role: ${model.role}`,
    `Route source: ${model.route}`,
    `Focus: ${model.headline}`,
    "Learning loop:",
    ...model.signals.map((signal) => `- ${signal.label}: ${signal.value} (${signal.detail})`),
    "",
    "Reinforcement promise: accepted outcomes increase future recommendation weight; ignored or rejected suggestions reduce weight until better evidence appears.",
    "Privacy promise: each organization keeps private memory, and the network only receives aggregate, non-customer-specific learning signals.",
    "Human approval promise: recommendations stay suggestions until a buyer, supplier, or founder confirms the next action.",
    "Payment guardrail: no rental payment, deposit, escrow, payout, or booking commission feedback route is introduced in phase one."
  ].join("\n");
}

function buildClosedLoopLearningContractText() {
  return buildClosedLoopLearningText();
}

function renderLearningFeedbackStore() {
  const root = document.querySelector("#learningFeedbackStore");
  if (!root) return;

  const model = getLearningFeedbackStoreModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#learningFeedbackStoreRole").textContent = model.roleLabel;
  document.querySelector("#learningFeedbackStoreHeadline").textContent = model.headline;
  document.querySelector("#learningFeedbackStoreDetail").textContent = model.detail;
  document.querySelector("#learningFeedbackStoreGrid").innerHTML = model.events.map((event) => `
    <span class="${escapeHtml(event.tone)}">
      <em>${escapeHtml(event.label)}</em>
      <strong>${escapeHtml(event.value)}</strong>
      <small>${escapeHtml(event.detail)}</small>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#learningFeedbackStorePrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getLearningFeedbackStoreModel() {
  const loop = getClosedLoopLearningModel();
  const selected = getSelectedListing();
  const role = loop.role || state.commandRole || "Buyer";
  const listingLabel = selected?.name || "selected machine";
  const configs = {
    Buyer: {
      roleLabel: "Buyer feedback store",
      headline: "Store enquiry feedback as a match-weight change.",
      detail: "Buyer feedback store turns one enquiry result into event id, weight delta, approval state, private memory, and safe aggregate signal.",
      primary: { label: "Open API console", anchor: "#api-smoke-console", aria: "Open buyer feedback API console" },
      eventId: "FB-BUY-162",
      events: [
        { label: "Event", value: "enquiry_outcome", detail: "proof accepted", tone: "ready" },
        { label: "Weight", value: "+8 match", detail: listingLabel, tone: "ready" },
        { label: "Approval", value: "accepted", detail: "human confirmed", tone: "ready" },
        { label: "Memory", value: "org private", detail: "buyer pattern", tone: "neutral" },
        { label: "Share", value: "aggregate", detail: "proof trend only", tone: "watch" }
      ]
    },
    Supplier: {
      roleLabel: "Supplier feedback store",
      headline: "Store lead feedback as a listing-quality weight.",
      detail: "Supplier feedback store turns lead response, proof fix, freshness, and renewal movement into private memory plus safe category learning.",
      primary: { label: "Open lead desk", anchor: "#lead-desk", aria: "Open supplier feedback lead desk" },
      eventId: "FB-SUP-162",
      events: [
        { label: "Event", value: "lead_outcome", detail: "reply recorded", tone: "ready" },
        { label: "Weight", value: "+6 quality", detail: "proof + freshness", tone: "ready" },
        { label: "Approval", value: "accepted", detail: "supplier action", tone: "ready" },
        { label: "Memory", value: "org private", detail: "yard pattern", tone: "neutral" },
        { label: "Share", value: "aggregate", detail: "supply signal", tone: "watch" }
      ]
    },
    Founder: {
      roleLabel: "Founder feedback store",
      headline: "Store market feedback as a launch-weight change.",
      detail: "Founder feedback store turns supplier hunt, proof gate, ARR, direct enquiry, and go/no-go outcomes into a safer expansion signal.",
      primary: { label: "Open market matrix", anchor: "#market-signal-matrix", aria: "Open founder feedback market matrix" },
      eventId: "FB-FND-162",
      events: [
        { label: "Event", value: "launch_outcome", detail: "go/no-go saved", tone: "ready" },
        { label: "Weight", value: "+5 wedge", detail: "ARR + proof", tone: "ready" },
        { label: "Approval", value: "reviewed", detail: "founder gate", tone: "neutral" },
        { label: "Memory", value: "org private", detail: "operator rule", tone: "ready" },
        { label: "Share", value: "aggregate", detail: "market signal", tone: "watch" }
      ]
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    primary: config.primary,
    eventId: config.eventId,
    sourceRoute: loop.route || "/api/learning-feedback",
    events: config.events
  };
}

async function handleLearningFeedbackStoreAction(action, model = getLearningFeedbackStoreModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildLearningFeedbackStoreText(model));
    showToast("Learning feedback store copied.");
  } catch {
    showToast("Copy is blocked here, but the feedback store is visible.");
  }
}

function buildLearningFeedbackStoreText(model = getLearningFeedbackStoreModel()) {
  return [
    "Heavyster Learning Feedback Store",
    "Version: v162 Learning Feedback Store",
    "Rule: store each human-approved outcome as a feedback event with recommendation weight, private organization memory, and aggregate network signal before AI suggestions scale.",
    "",
    `Role: ${model.role}`,
    `Feedback event: ${model.eventId}`,
    `Source route: ${model.sourceRoute}`,
    `Focus: ${model.headline}`,
    "Feedback state:",
    ...model.events.map((event) => `- ${event.label}: ${event.value} (${event.detail})`),
    "",
    "Reinforcement promise: accepted outcomes raise recommendation weight; ignored, stale, or rejected outcomes lower it until better evidence appears.",
    "Privacy promise: organization memory stays private, while only aggregate category, proof, response, and market signals can improve the wider network.",
    "Approval promise: AI recommendations remain suggestions until a human approves the next buyer, supplier, or founder action.",
    "Blocked route promise: no rental payment, deposit, escrow, payout, booking commission, or payment-custody event enters phase one."
  ].join("\n");
}

function buildLearningFeedbackStoreContractText() {
  return buildLearningFeedbackStoreText();
}

function renderRecommendationWeightSimulator() {
  const root = document.querySelector("#recommendationWeightSimulator");
  if (!root) return;

  const model = getRecommendationWeightSimulatorModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#recommendationWeightRole").textContent = model.roleLabel;
  document.querySelector("#recommendationWeightHeadline").textContent = model.headline;
  document.querySelector("#recommendationWeightDetail").textContent = model.detail;
  document.querySelector("#recommendationWeightGrid").innerHTML = model.outcomes.map((outcome) => `
    <span class="${escapeHtml(outcome.tone)}">
      <em>${escapeHtml(outcome.label)}</em>
      <strong>${escapeHtml(outcome.value)}</strong>
      <small>${escapeHtml(outcome.detail)}</small>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#recommendationWeightPrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getRecommendationWeightSimulatorModel() {
  const store = getLearningFeedbackStoreModel();
  const role = store.role || state.commandRole || "Buyer";
  const configs = {
    Buyer: {
      roleLabel: "Buyer weight simulator",
      headline: "Show how buyer feedback changes the next supplier rank.",
      detail: "Accepted proof-matched enquiry lifts the supplier; ignored or rejected outcomes reduce the future match score before the next search.",
      primary: { label: "Open result intelligence", anchor: "#resultIntelligence", aria: "Open buyer result intelligence" },
      target: "verified supplier",
      outcomes: [
        { label: "Base", value: "72 score", detail: "before feedback", tone: "neutral" },
        { label: "Accepted", value: "+8", detail: "reply + proof", tone: "ready" },
        { label: "Ignored", value: "-2", detail: "no buyer action", tone: "watch" },
        { label: "Rejected", value: "-6", detail: "poor fit", tone: "watch" },
        { label: "Next", value: "80 rank", detail: "show higher", tone: "ready" }
      ]
    },
    Supplier: {
      roleLabel: "Supplier weight simulator",
      headline: "Show how lead feedback changes listing priority.",
      detail: "Answered leads and proof fixes raise listing quality; missed leads and stale proof reduce visibility until the supplier improves.",
      primary: { label: "Open lead desk", anchor: "#lead-desk", aria: "Open supplier lead desk" },
      target: "paid listing",
      outcomes: [
        { label: "Base", value: "68 score", detail: "before feedback", tone: "neutral" },
        { label: "Accepted", value: "+6", detail: "lead replied", tone: "ready" },
        { label: "Ignored", value: "-3", detail: "stale listing", tone: "watch" },
        { label: "Rejected", value: "-7", detail: "missed lead", tone: "watch" },
        { label: "Next", value: "74 rank", detail: "route better leads", tone: "ready" }
      ]
    },
    Founder: {
      roleLabel: "Founder weight simulator",
      headline: "Show how market feedback changes launch priority.",
      detail: "Proof-backed ARR and direct enquiry improve the wedge; weak supplier response or failed proof lowers expansion priority.",
      primary: { label: "Open market matrix", anchor: "#market-signal-matrix", aria: "Open founder market matrix" },
      target: "launch wedge",
      outcomes: [
        { label: "Base", value: "75 score", detail: "before feedback", tone: "neutral" },
        { label: "Accepted", value: "+5", detail: "ARR + proof", tone: "ready" },
        { label: "Ignored", value: "-4", detail: "no movement", tone: "watch" },
        { label: "Rejected", value: "-8", detail: "failed gate", tone: "watch" },
        { label: "Next", value: "80 rank", detail: "prioritize wedge", tone: "ready" }
      ]
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    primary: config.primary,
    feedbackEvent: store.eventId,
    target: config.target,
    outcomes: config.outcomes
  };
}

async function handleRecommendationWeightSimulatorAction(action, model = getRecommendationWeightSimulatorModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildRecommendationWeightSimulatorText(model));
    showToast("Recommendation weight simulator copied.");
  } catch {
    showToast("Copy is blocked here, but the weight simulator is visible.");
  }
}

function buildRecommendationWeightSimulatorText(model = getRecommendationWeightSimulatorModel()) {
  return [
    "Heavyster Recommendation Weight Simulator",
    "Version: v163 Recommendation Weight Simulator",
    "Rule: make every accepted, ignored, or rejected feedback outcome visible before it changes future AI recommendations.",
    "",
    `Role: ${model.role}`,
    `Feedback event: ${model.feedbackEvent}`,
    `Target: ${model.target}`,
    `Focus: ${model.headline}`,
    "Weight simulation:",
    ...model.outcomes.map((outcome) => `- ${outcome.label}: ${outcome.value} (${outcome.detail})`),
    "",
    "Reinforcement promise: accepted outcomes raise future ranking, ignored outcomes reduce confidence gently, and rejected outcomes lower priority until new proof appears.",
    "Explainability promise: users see the weight reason before Heavyster changes the next recommendation.",
    "Privacy promise: private organization memory and aggregate network signals stay separated.",
    "Payment guardrail: no rental payment, deposit, escrow, payout, booking commission, or payment-custody signal can affect phase-one weights."
  ].join("\n");
}

function buildRecommendationWeightSimulatorContractText() {
  return buildRecommendationWeightSimulatorText();
}

function renderOrganizationLearningBoundary() {
  const root = document.querySelector("#organizationLearningBoundary");
  if (!root) return;

  const model = getOrganizationLearningBoundaryModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#organizationBoundaryRole").textContent = model.roleLabel;
  document.querySelector("#organizationBoundaryHeadline").textContent = model.headline;
  document.querySelector("#organizationBoundaryDetail").textContent = model.detail;
  document.querySelector("#organizationBoundaryGrid").innerHTML = model.boundaries.map((boundary) => `
    <span class="${escapeHtml(boundary.tone)}">
      <em>${escapeHtml(boundary.label)}</em>
      <strong>${escapeHtml(boundary.value)}</strong>
      <small>${escapeHtml(boundary.detail)}</small>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#organizationBoundaryPrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getOrganizationLearningBoundaryModel() {
  const simulator = getRecommendationWeightSimulatorModel();
  const role = simulator.role || state.commandRole || "Buyer";
  const configs = {
    Buyer: {
      roleLabel: "Buyer learning boundary",
      headline: "Use network learning without exposing buyer intent.",
      detail: "Buyer search behavior stays private; only anonymized proof trust and supplier response trends can improve future matches.",
      primary: { label: "Open result intelligence", anchor: "#resultIntelligence", aria: "Open buyer result intelligence" },
      privateMemory: "search intent, shortlist, enquiry context",
      sharedSignal: "proof trust trend",
      approvalGate: "buyer-visible reason before re-rank",
      blockedSignal: "payment custody"
    },
    Supplier: {
      roleLabel: "Supplier learning boundary",
      headline: "Improve listing guidance without leaking supplier strategy.",
      detail: "Supplier response habits and listing edits stay private; only anonymized proof freshness and category readiness improve the network.",
      primary: { label: "Open lead desk", anchor: "#lead-desk", aria: "Open supplier lead desk" },
      privateMemory: "lead replies, proof edits, renewal intent",
      sharedSignal: "category readiness trend",
      approvalGate: "supplier approval before visibility change",
      blockedSignal: "booking commission"
    },
    Founder: {
      roleLabel: "Founder learning boundary",
      headline: "Learn across markets without mixing tenant decisions.",
      detail: "Founder launch decisions stay tenant-private; only anonymized category, country, proof, and response patterns can guide expansion.",
      primary: { label: "Open market matrix", anchor: "#market-signal-matrix", aria: "Open founder market matrix" },
      privateMemory: "country queue, launch gate, operator notes",
      sharedSignal: "market readiness pattern",
      approvalGate: "operator sign-off before rollout",
      blockedSignal: "rental payout"
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    primary: config.primary,
    sourceWeight: simulator.target,
    boundaries: [
      { label: "Private", value: "tenant only", detail: config.privateMemory, tone: "neutral" },
      { label: "Shared", value: "anonymous", detail: config.sharedSignal, tone: "ready" },
      { label: "Approval", value: "human gate", detail: config.approvalGate, tone: "ready" },
      { label: "Blocked", value: "0% rental take", detail: config.blockedSignal, tone: "watch" }
    ]
  };
}

async function handleOrganizationLearningBoundaryAction(action, model = getOrganizationLearningBoundaryModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildOrganizationLearningBoundaryText(model));
    showToast("Organization learning boundary copied.");
  } catch {
    showToast("Copy is blocked here, but the learning boundary is visible.");
  }
}

function buildOrganizationLearningBoundaryText(model = getOrganizationLearningBoundaryModel()) {
  return [
    "Heavyster Organization Learning Boundary",
    "Version: v164 Organization Learning Boundary",
    "Rule: every cross-organization learning signal must be anonymized, aggregated, permissioned, and explainable before it improves another tenant.",
    "",
    `Role: ${model.role}`,
    `Source recommendation target: ${model.sourceWeight}`,
    `Focus: ${model.headline}`,
    "Boundary map:",
    ...model.boundaries.map((boundary) => `- ${boundary.label}: ${boundary.value} (${boundary.detail})`),
    "",
    "Privacy promise: organization-private memory never leaves the tenant boundary.",
    "Network promise: only anonymized category, proof, response, and market patterns can improve recommendations across organizations.",
    "Approval promise: human approval stays required before learned behavior changes operational action.",
    "Payment guardrail: no rental payment, deposit, escrow, payout, booking commission, or payment-custody signal can enter shared learning."
  ].join("\n");
}

function buildOrganizationLearningBoundaryContractText() {
  return buildOrganizationLearningBoundaryText();
}

function renderBoundaryPolicySmokeConsole() {
  const root = document.querySelector("#boundaryPolicySmokeConsole");
  if (!root) return;

  const model = getBoundaryPolicySmokeConsoleModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#boundaryPolicySmokeRole").textContent = model.roleLabel;
  document.querySelector("#boundaryPolicySmokeHeadline").textContent = model.headline;
  document.querySelector("#boundaryPolicySmokeDetail").textContent = model.detail;
  document.querySelector("#boundaryPolicySmokeGrid").innerHTML = model.probes.map((probe) => `
    <span class="${escapeHtml(probe.tone)}">
      <em>${escapeHtml(probe.label)}</em>
      <strong>${escapeHtml(probe.status)}</strong>
      <small>${escapeHtml(probe.route)}</small>
      <b>${escapeHtml(probe.detail)}</b>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#boundaryPolicySmokePrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getBoundaryPolicySmokeConsoleModel() {
  const boundary = getOrganizationLearningBoundaryModel();
  const role = boundary.role || state.commandRole || "Buyer";
  const configs = {
    Buyer: {
      roleLabel: "Buyer policy smoke",
      headline: "Prove buyer learning stays private before network lift.",
      detail: "Smoke probes confirm buyer memory remains tenant-only, aggregate proof trends are anonymous, and payment custody is blocked.",
      primary: { label: "Open boundary audit", anchor: "#organizationLearningBoundary", aria: "Open buyer organization learning boundary" },
      privateDetail: "search + shortlist locked",
      aggregateDetail: "proof trend anonymized",
      approvalDetail: "reason shown first",
      blockedDetail: "payment custody denied",
      blockedRoute: "/api/rental-payments"
    },
    Supplier: {
      roleLabel: "Supplier policy smoke",
      headline: "Prove supplier learning improves guidance without leaking strategy.",
      detail: "Smoke probes confirm lead replies stay private, category readiness is anonymous, and booking commission signals are blocked.",
      primary: { label: "Open boundary audit", anchor: "#organizationLearningBoundary", aria: "Open supplier organization learning boundary" },
      privateDetail: "lead + renewal locked",
      aggregateDetail: "readiness anonymized",
      approvalDetail: "visibility approval",
      blockedDetail: "commission denied",
      blockedRoute: "/api/booking-commissions"
    },
    Founder: {
      roleLabel: "Founder policy smoke",
      headline: "Prove market learning scales without mixing tenant decisions.",
      detail: "Smoke probes confirm operator notes stay private, market readiness is anonymous, and rental payout signals are blocked.",
      primary: { label: "Open boundary audit", anchor: "#organizationLearningBoundary", aria: "Open founder organization learning boundary" },
      privateDetail: "launch notes locked",
      aggregateDetail: "market pattern anonymized",
      approvalDetail: "operator sign-off",
      blockedDetail: "rental payout denied",
      blockedRoute: "/api/payouts"
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    primary: config.primary,
    sourceBoundary: boundary.headline,
    probes: [
      { label: "Private", status: "PASS", route: "/api/organization-memory", detail: config.privateDetail, tone: "ready" },
      { label: "Aggregate", status: "PASS", route: "/api/aggregate-market-signals", detail: config.aggregateDetail, tone: "ready" },
      { label: "Approval", status: "PASS", route: "/api/boundary-audit-events", detail: config.approvalDetail, tone: "ready" },
      { label: "Payment", status: "BLOCK", route: config.blockedRoute, detail: config.blockedDetail, tone: "watch" }
    ]
  };
}

async function handleBoundaryPolicySmokeConsoleAction(action, model = getBoundaryPolicySmokeConsoleModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildBoundaryPolicySmokeConsoleText(model));
    showToast("Boundary policy smoke console copied.");
  } catch {
    showToast("Copy is blocked here, but the policy smoke console is visible.");
  }
}

function buildBoundaryPolicySmokeConsoleText(model = getBoundaryPolicySmokeConsoleModel()) {
  return [
    "Heavyster Boundary Policy Smoke Console",
    "Version: v165 Boundary Policy Smoke Console",
    "Rule: every private, aggregate, approval, and blocked payment boundary route must pass a visible smoke probe before network learning scales.",
    "",
    `Role: ${model.role}`,
    `Source boundary: ${model.sourceBoundary}`,
    `Focus: ${model.headline}`,
    "Smoke probes:",
    ...model.probes.map((probe) => `- ${probe.label}: ${probe.status} ${probe.route} (${probe.detail})`),
    "",
    "Private route promise: tenant memory stays inside /api/organization-memory.",
    "Aggregate route promise: network learning only uses anonymized /api/aggregate-market-signals.",
    "Approval route promise: /api/boundary-audit-events records human approval, purpose, audience, and rollback note.",
    "Blocked route promise: payment-custody routes fail the smoke console before shared learning can run."
  ].join("\n");
}

function buildBoundaryPolicySmokeConsoleContractText() {
  return buildBoundaryPolicySmokeConsoleText();
}

function renderBoundaryAuditFixturePack() {
  const root = document.querySelector("#boundaryAuditFixturePack");
  if (!root) return;

  const model = getBoundaryAuditFixturePackModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#boundaryAuditFixtureRole").textContent = model.roleLabel;
  document.querySelector("#boundaryAuditFixtureHeadline").textContent = model.headline;
  document.querySelector("#boundaryAuditFixtureDetail").textContent = model.detail;
  document.querySelector("#boundaryAuditFixtureGrid").innerHTML = model.fixtures.map((fixture) => `
    <span class="${escapeHtml(fixture.tone)}">
      <em>${escapeHtml(fixture.label)}</em>
      <strong>${escapeHtml(fixture.value)}</strong>
      <small>${escapeHtml(fixture.route)}</small>
      <b>${escapeHtml(fixture.detail)}</b>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#boundaryAuditFixturePrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getBoundaryAuditFixturePackModel() {
  const smoke = getBoundaryPolicySmokeConsoleModel();
  const role = smoke.role || state.commandRole || "Buyer";
  const configs = {
    Buyer: {
      roleLabel: "Buyer audit fixtures",
      headline: "Turn buyer policy probes into backend-ready audit fixtures.",
      detail: "Buyer private memory, aggregate proof trend, approval event, and payment block now have copy-ready fixture payloads.",
      primary: { label: "Open policy smoke", anchor: "#boundaryPolicySmokeConsole", aria: "Open buyer boundary policy smoke console" },
      auditId: "BA-BUY-166",
      payload: "buyer_proof_trust_trend",
      expected: "private pass",
      rollback: "restore prior supplier rank"
    },
    Supplier: {
      roleLabel: "Supplier audit fixtures",
      headline: "Turn supplier policy probes into backend-ready audit fixtures.",
      detail: "Supplier lead memory, category readiness, visibility approval, and commission block now have copy-ready fixture payloads.",
      primary: { label: "Open policy smoke", anchor: "#boundaryPolicySmokeConsole", aria: "Open supplier boundary policy smoke console" },
      auditId: "BA-SUP-166",
      payload: "supplier_category_readiness",
      expected: "aggregate pass",
      rollback: "restore listing visibility"
    },
    Founder: {
      roleLabel: "Founder audit fixtures",
      headline: "Turn founder policy probes into backend-ready audit fixtures.",
      detail: "Founder launch memory, market readiness, operator approval, and payout block now have copy-ready fixture payloads.",
      primary: { label: "Open policy smoke", anchor: "#boundaryPolicySmokeConsole", aria: "Open founder boundary policy smoke console" },
      auditId: "BA-FND-166",
      payload: "founder_market_readiness",
      expected: "approval pass",
      rollback: "restore country queue"
    }
  };
  const config = configs[role] || configs.Buyer;
  const blockedProbe = smoke.probes.find((probe) => probe.status === "BLOCK") || smoke.probes[3];

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    primary: config.primary,
    sourceSmoke: smoke.headline,
    fixtures: [
      { label: "Fixture", value: config.auditId, route: "/api/boundary-audit-events", detail: config.payload, tone: "neutral" },
      { label: "Expected", value: config.expected, route: "/api/aggregate-market-signals", detail: "policy pass asserted", tone: "ready" },
      { label: "Rollback", value: "ready", route: "/api/boundary-audit-events", detail: config.rollback, tone: "ready" },
      { label: "Blocked", value: "BLOCK", route: blockedProbe.route, detail: blockedProbe.detail, tone: "watch" }
    ]
  };
}

async function handleBoundaryAuditFixturePackAction(action, model = getBoundaryAuditFixturePackModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildBoundaryAuditFixturePackText(model));
    showToast("Boundary audit fixture pack copied.");
  } catch {
    showToast("Copy is blocked here, but the audit fixture pack is visible.");
  }
}

function buildBoundaryAuditFixturePackText(model = getBoundaryAuditFixturePackModel()) {
  return [
    "Heavyster Boundary Audit Fixture Pack",
    "Version: v166 Boundary Audit Fixture Pack",
    "Rule: every boundary smoke probe needs a backend-ready fixture id, route, payload, expected policy result, and rollback note before production learning runs.",
    "",
    `Role: ${model.role}`,
    `Source smoke console: ${model.sourceSmoke}`,
    `Focus: ${model.headline}`,
    "Audit fixtures:",
    ...model.fixtures.map((fixture) => `- ${fixture.label}: ${fixture.value} ${fixture.route} (${fixture.detail})`),
    "",
    "Fixture promise: backend teams can copy these route fixtures into API smoke tests without inventing policy behavior.",
    "Audit promise: every shared-learning pass records purpose, audience, anonymization state, approval, and rollback.",
    "Rollback promise: each learned recommendation path keeps a reversible prior state.",
    "Blocked route promise: payment-custody routes remain fixture-level failures before shared learning can run."
  ].join("\n");
}

function buildBoundaryAuditFixturePackContractText() {
  return buildBoundaryAuditFixturePackText();
}

function renderBoundaryAuditReplayConsole() {
  const root = document.querySelector("#boundaryAuditReplayConsole");
  if (!root) return;

  const model = getBoundaryAuditReplayConsoleModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#boundaryAuditReplayRole").textContent = model.roleLabel;
  document.querySelector("#boundaryAuditReplayHeadline").textContent = model.headline;
  document.querySelector("#boundaryAuditReplayDetail").textContent = model.detail;
  document.querySelector("#boundaryAuditReplayGrid").innerHTML = model.replay.map((step) => `
    <span class="${escapeHtml(step.tone)}">
      <em>${escapeHtml(step.label)}</em>
      <strong>${escapeHtml(step.value)}</strong>
      <small>${escapeHtml(step.route)}</small>
      <b>${escapeHtml(step.detail)}</b>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#boundaryAuditReplayPrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getBoundaryAuditReplayConsoleModel() {
  const fixture = getBoundaryAuditFixturePackModel();
  const role = fixture.role || state.commandRole || "Buyer";
  const configs = {
    Buyer: {
      roleLabel: "Buyer audit replay",
      headline: "Replay buyer fixture impact before the next supplier rank changes.",
      detail: "Operator sees prior rank, replay delta, approved after-rank, rollback, and blocked payment route before learning applies.",
      primary: { label: "Open fixture pack", anchor: "#boundaryAuditFixturePack", aria: "Open buyer boundary audit fixture pack" },
      before: "72 rank",
      delta: "+8 replay",
      after: "80 rank",
      rollback: "restore 72",
      block: "rental route blocked"
    },
    Supplier: {
      roleLabel: "Supplier audit replay",
      headline: "Replay supplier fixture impact before listing visibility changes.",
      detail: "Operator sees prior listing score, replay delta, approved after-score, rollback, and blocked commission route before learning applies.",
      primary: { label: "Open fixture pack", anchor: "#boundaryAuditFixturePack", aria: "Open supplier boundary audit fixture pack" },
      before: "68 score",
      delta: "+6 replay",
      after: "74 score",
      rollback: "restore visibility",
      block: "commission blocked"
    },
    Founder: {
      roleLabel: "Founder audit replay",
      headline: "Replay founder fixture impact before launch priority changes.",
      detail: "Operator sees prior launch score, replay delta, approved after-score, rollback, and blocked payout route before learning applies.",
      primary: { label: "Open fixture pack", anchor: "#boundaryAuditFixturePack", aria: "Open founder boundary audit fixture pack" },
      before: "75 score",
      delta: "+5 replay",
      after: "80 score",
      rollback: "restore queue",
      block: "payout blocked"
    }
  };
  const config = configs[role] || configs.Buyer;
  const fixtureId = fixture.fixtures[0]?.value || "BA-BUY-166";
  const blockedRoute = fixture.fixtures.find((item) => item.label === "Blocked")?.route || "/api/rental-payments";

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    primary: config.primary,
    fixtureId,
    replay: [
      { label: "Before", value: config.before, route: "/api/recommendation-weights", detail: "prior state", tone: "neutral" },
      { label: "Replay", value: config.delta, route: "/api/boundary-audit-events", detail: fixtureId, tone: "ready" },
      { label: "After", value: config.after, route: "/api/aggregate-market-signals", detail: "human approved", tone: "ready" },
      { label: "Rollback", value: config.rollback, route: "/api/boundary-audit-events", detail: "reversible", tone: "neutral" },
      { label: "Blocked", value: "BLOCK", route: blockedRoute, detail: config.block, tone: "watch" }
    ]
  };
}

async function handleBoundaryAuditReplayConsoleAction(action, model = getBoundaryAuditReplayConsoleModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildBoundaryAuditReplayConsoleText(model));
    showToast("Boundary audit replay copied.");
  } catch {
    showToast("Copy is blocked here, but the audit replay is visible.");
  }
}

function buildBoundaryAuditReplayConsoleText(model = getBoundaryAuditReplayConsoleModel()) {
  return [
    "Heavyster Boundary Audit Replay Console",
    "Version: v167 Boundary Audit Replay Console",
    "Rule: every boundary audit fixture must replay before/after learning impact, rollback state, and blocked payment behavior before production recommendations change.",
    "",
    `Role: ${model.role}`,
    `Fixture id: ${model.fixtureId}`,
    `Focus: ${model.headline}`,
    "Replay steps:",
    ...model.replay.map((step) => `- ${step.label}: ${step.value} ${step.route} (${step.detail})`),
    "",
    "Replay promise: operators can inspect before and after learning impact before AI changes recommendations.",
    "Approval promise: replay output remains a simulation until human approval applies the learned route.",
    "Rollback promise: every replay keeps a reversible prior state.",
    "Blocked route promise: payment-custody behavior remains blocked during replay and cannot become shared learning."
  ].join("\n");
}

function buildBoundaryAuditReplayConsoleContractText() {
  return buildBoundaryAuditReplayConsoleText();
}

function renderHumanApprovalReplayGate() {
  const root = document.querySelector("#humanApprovalReplayGate");
  if (!root) return;

  const model = getHumanApprovalReplayGateModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#humanApprovalReplayRole").textContent = model.roleLabel;
  document.querySelector("#humanApprovalReplayHeadline").textContent = model.headline;
  document.querySelector("#humanApprovalReplayDetail").textContent = model.detail;
  document.querySelector("#humanApprovalReplayGrid").innerHTML = model.gates.map((gate) => `
    <span class="${escapeHtml(gate.tone)}">
      <em>${escapeHtml(gate.label)}</em>
      <strong>${escapeHtml(gate.value)}</strong>
      <small>${escapeHtml(gate.route)}</small>
      <b>${escapeHtml(gate.detail)}</b>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#humanApprovalReplayPrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getHumanApprovalReplayGateModel() {
  const replay = getBoundaryAuditReplayConsoleModel();
  const role = replay.role || state.commandRole || "Buyer";
  const configs = {
    Buyer: {
      roleLabel: "Buyer replay approval",
      headline: "Require buyer approval before replay changes supplier rank.",
      detail: "Buyer approval keeps the replay paused until reason, approver, rollback, and blocked route are visible.",
      approver: "Buyer operator",
      reason: "proof-matched supplier accepted",
      state: "approved",
      approvedAt: "2026-06-12 09:00 GST",
      rollback: "restore 72 rank",
      blocked: "rental payment blocked"
    },
    Supplier: {
      roleLabel: "Supplier replay approval",
      headline: "Require supplier approval before replay changes listing visibility.",
      detail: "Supplier approval keeps the replay paused until proof freshness, approval reason, rollback, and blocked commission route are visible.",
      approver: "Supplier success lead",
      reason: "lead response and proof freshness confirmed",
      state: "approved",
      approvedAt: "2026-06-12 09:00 GST",
      rollback: "restore listing visibility",
      blocked: "booking commission blocked"
    },
    Founder: {
      roleLabel: "Founder replay approval",
      headline: "Require founder approval before replay changes launch priority.",
      detail: "Founder approval keeps the replay paused until market readiness, approval reason, rollback, and blocked payout route are visible.",
      approver: "Founder operator",
      reason: "market readiness and proof density confirmed",
      state: "approved",
      approvedAt: "2026-06-12 09:00 GST",
      rollback: "restore country queue",
      blocked: "payout route blocked"
    }
  };
  const config = configs[role] || configs.Buyer;
  const replayDelta = replay.replay.find((step) => step.label === "Replay")?.value || "replay delta";
  const afterState = replay.replay.find((step) => step.label === "After")?.value || "after state";
  const blockedRoute = replay.replay.find((step) => step.label === "Blocked")?.route || "/api/rental-payments";

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    fixtureId: replay.fixtureId,
    replaySummary: `${replayDelta} to ${afterState}`,
    approver: config.approver,
    reason: config.reason,
    state: config.state,
    approvedAt: config.approvedAt,
    rollback: config.rollback,
    blockedRoute,
    blocked: config.blocked,
    primary: { label: "Open replay console", anchor: "#boundaryAuditReplayConsole", aria: `Open ${role.toLowerCase()} boundary audit replay console` },
    gates: [
      { label: "Approver", value: config.approver, route: "/api/boundary-audit-events", detail: replay.fixtureId, tone: "ready" },
      { label: "Reason", value: config.reason, route: "/api/learning-feedback", detail: replayDelta, tone: "neutral" },
      { label: "State", value: config.state, route: "/api/recommendation-weights", detail: config.approvedAt, tone: "ready" },
      { label: "Rollback", value: config.rollback, route: "/api/boundary-audit-events", detail: "reversible", tone: "neutral" },
      { label: "Blocked", value: "BLOCK", route: blockedRoute, detail: config.blocked, tone: "watch" }
    ]
  };
}

async function handleHumanApprovalReplayGateAction(action, model = getHumanApprovalReplayGateModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildHumanApprovalReplayGateText(model));
    showToast("Human approval replay gate copied.");
  } catch {
    showToast("Copy is blocked here, but the approval gate is visible.");
  }
}

function buildHumanApprovalReplayGateText(model = getHumanApprovalReplayGateModel()) {
  return [
    "Heavyster Human Approval Replay Gate",
    "Version: v168 Human Approval Replay Gate",
    "Rule: replayed learning cannot apply to production recommendations until a named human approval state, reason, rollback note, and blocked payment route are visible.",
    "",
    `Role: ${model.role}`,
    `Fixture id: ${model.fixtureId}`,
    `Replay summary: ${model.replaySummary}`,
    `Approver: ${model.approver}`,
    `Approval state: ${model.state}`,
    `Approval reason: ${model.reason}`,
    `Approval timestamp: ${model.approvedAt}`,
    `Rollback: ${model.rollback}`,
    `Blocked route: ${model.blockedRoute}`,
    "Approval gate states:",
    ...model.gates.map((gate) => `- ${gate.label}: ${gate.value} ${gate.route} (${gate.detail})`),
    "",
    "Approval promise: replay output remains paused until the named approval state is visible.",
    "Explainability promise: every approval includes a reason that an operator can read before learning applies.",
    "Rollback promise: every approved replay keeps a reversible prior state.",
    "Blocked route promise: rental payments, deposits, escrow, payouts, booking commissions, and payment custody stay blocked during approval."
  ].join("\n");
}

function buildHumanApprovalReplayGateContractText() {
  return buildHumanApprovalReplayGateText();
}

function renderLearningBenefitLedger() {
  const root = document.querySelector("#learningBenefitLedger");
  if (!root) return;

  const model = getLearningBenefitLedgerModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#learningBenefitRole").textContent = model.roleLabel;
  document.querySelector("#learningBenefitHeadline").textContent = model.headline;
  document.querySelector("#learningBenefitDetail").textContent = model.detail;
  document.querySelector("#learningBenefitGrid").innerHTML = model.cards.map((card) => `
    <span class="${escapeHtml(card.tone)}">
      <em>${escapeHtml(card.label)}</em>
      <strong>${escapeHtml(card.value)}</strong>
      <small>${escapeHtml(card.route)}</small>
      <b>${escapeHtml(card.detail)}</b>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#learningBenefitPrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getLearningBenefitLedgerModel() {
  const approval = getHumanApprovalReplayGateModel();
  const boundary = getOrganizationLearningBoundaryModel();
  const role = approval.role || boundary.role || state.commandRole || "Buyer";
  const configs = {
    Buyer: {
      roleLabel: "Buyer benefit ledger",
      headline: "Turn accepted enquiry outcomes into safer future matches.",
      detail: "Buyer intent stays private while anonymized proof and response patterns improve the next verified route.",
      contribution: "buyer_enquiry_outcome",
      privateMemory: "search intent, shortlist, enquiry context",
      aggregatePattern: "proof-matched supplier accepted and replied",
      networkBenefit: "next buyer sees cleaner route",
      benefitMetric: "match trust +8",
      blockedDetail: "rental payment blocked"
    },
    Supplier: {
      roleLabel: "Supplier benefit ledger",
      headline: "Turn listing outcomes into better supplier guidance.",
      detail: "Supplier strategy stays private while anonymized proof freshness and response patterns improve listing recommendations.",
      contribution: "supplier_listing_outcome",
      privateMemory: "lead replies, proof edits, renewal intent",
      aggregatePattern: "fresh proof and fast response lifted trust",
      networkBenefit: "next supplier sees clearer listing guidance",
      benefitMetric: "readiness +6",
      blockedDetail: "booking commission blocked"
    },
    Founder: {
      roleLabel: "Founder benefit ledger",
      headline: "Turn launch outcomes into safer market expansion.",
      detail: "Founder launch notes stay private while anonymized proof density and response reliability improve country/category priority.",
      contribution: "market_launch_outcome",
      privateMemory: "country queue, launch gate, operator notes",
      aggregatePattern: "proof density improved launch confidence",
      networkBenefit: "next market gets safer priority",
      benefitMetric: "readiness +5",
      blockedDetail: "payout route blocked"
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    sourceApproval: approval.state,
    approvalReason: approval.reason,
    rollback: approval.rollback,
    blockedRoute: approval.blockedRoute,
    primary: { label: "Open approval gate", anchor: "#humanApprovalReplayGate", aria: `Open ${role.toLowerCase()} human approval replay gate` },
    cards: [
      { label: "Contribution", value: config.contribution, route: "/api/learning-feedback", detail: config.benefitMetric, tone: "ready" },
      { label: "Private", value: "tenant only", route: "/api/organization-memory", detail: config.privateMemory, tone: "neutral" },
      { label: "Aggregate", value: "anonymous", route: "/api/aggregate-market-signals", detail: config.aggregatePattern, tone: "ready" },
      { label: "Benefit", value: config.networkBenefit, route: "/api/recommendation-weights", detail: config.benefitMetric, tone: "ready" },
      { label: "Approval", value: approval.state, route: "/api/boundary-audit-events", detail: approval.reason, tone: "neutral" },
      { label: "Blocked", value: "BLOCK", route: approval.blockedRoute, detail: config.blockedDetail, tone: "watch" }
    ]
  };
}

async function handleLearningBenefitLedgerAction(action, model = getLearningBenefitLedgerModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildLearningBenefitLedgerText(model));
    showToast("Learning benefit ledger copied.");
  } catch {
    showToast("Copy is blocked here, but the benefit ledger is visible.");
  }
}

function buildLearningBenefitLedgerText(model = getLearningBenefitLedgerModel()) {
  return [
    "Heavyster Learning Benefit Ledger",
    "Version: v169 Learning Benefit Ledger",
    "Rule: every approved feedback event must show who benefits, what aggregate pattern was learned, what stayed private, approval state, rollback, and blocked payment route before network recommendations improve.",
    "",
    `Role: ${model.role}`,
    `Focus: ${model.headline}`,
    `Approval state: ${model.sourceApproval}`,
    `Approval reason: ${model.approvalReason}`,
    `Rollback: ${model.rollback}`,
    `Blocked route: ${model.blockedRoute}`,
    "Benefit ledger:",
    ...model.cards.map((card) => `- ${card.label}: ${card.value} ${card.route} (${card.detail})`),
    "",
    "Private-memory promise: tenant-specific intent, proof edits, lead replies, renewal plans, launch notes, and operator decisions stay inside the organization.",
    "Network-benefit promise: only anonymized aggregate proof, response, category, and market-readiness patterns can improve recommendations for another organization.",
    "Approval promise: the human approval gate remains visible before recommendation weight improves.",
    "Rollback promise: every network benefit keeps a reversible prior state.",
    "Payment guardrail: rental payments, deposits, escrow, payouts, booking commissions, and payment custody stay blocked from shared learning."
  ].join("\n");
}

function buildLearningBenefitLedgerContractText() {
  return buildLearningBenefitLedgerText();
}

function renderReinforcementEvaluationLab() {
  const root = document.querySelector("#reinforcementEvaluationLab");
  if (!root) return;

  const model = getReinforcementEvaluationLabModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#reinforcementEvaluationRole").textContent = model.roleLabel;
  document.querySelector("#reinforcementEvaluationHeadline").textContent = model.headline;
  document.querySelector("#reinforcementEvaluationDetail").textContent = model.detail;
  document.querySelector("#reinforcementEvaluationGrid").innerHTML = model.states.map((stateItem) => `
    <span class="${escapeHtml(stateItem.tone)}">
      <em>${escapeHtml(stateItem.label)}</em>
      <strong>${escapeHtml(stateItem.value)}</strong>
      <small>${escapeHtml(stateItem.route)}</small>
      <b>${escapeHtml(stateItem.detail)}</b>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#reinforcementEvaluationPrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getReinforcementEvaluationLabModel() {
  const benefit = getLearningBenefitLedgerModel();
  const role = benefit.role || state.commandRole || "Buyer";
  const configs = {
    Buyer: {
      roleLabel: "Buyer evaluation lab",
      headline: "Score buyer match outcomes before supplier rank moves.",
      detail: "Accepted enquiries lift rank only when proof, response, approval, rollback, and blocked payment route are visible.",
      event: "buyer_match_evaluation",
      accepted: "+8 replied",
      ignored: "-4 no action",
      rejected: "-6 mismatch",
      stale: "-5 expired",
      rollback: "restore supplier rank",
      blocked: "rental payment zero"
    },
    Supplier: {
      roleLabel: "Supplier evaluation lab",
      headline: "Score listing outcomes before visibility moves.",
      detail: "Supplier guidance lifts only when proof updates, lead response, approval, rollback, and blocked commission route are visible.",
      event: "supplier_listing_evaluation",
      accepted: "+6 updated",
      ignored: "-3 no update",
      rejected: "-5 failed proof",
      stale: "-4 expired",
      rollback: "restore visibility",
      blocked: "commission zero"
    },
    Founder: {
      roleLabel: "Founder evaluation lab",
      headline: "Score launch outcomes before market priority moves.",
      detail: "Founder recommendations lift only when market proof, response reliability, approval, rollback, and blocked payout route are visible.",
      event: "market_launch_evaluation",
      accepted: "+5 approved",
      ignored: "-3 parked",
      rejected: "-5 failed gate",
      stale: "-4 aged out",
      rollback: "restore country queue",
      blocked: "payout zero"
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    evaluationEvent: config.event,
    sourceBenefit: benefit.headline,
    blockedRoute: benefit.blockedRoute,
    primary: { label: "Open benefit ledger", anchor: "#learningBenefitLedger", aria: `Open ${role.toLowerCase()} learning benefit ledger` },
    states: [
      { label: "Accepted", value: config.accepted, route: "/api/recommendation-weights", detail: config.event, tone: "ready" },
      { label: "Ignored", value: config.ignored, route: "/api/learning-feedback", detail: "lower confidence", tone: "neutral" },
      { label: "Rejected", value: config.rejected, route: "/api/learning-feedback", detail: "penalize mismatch", tone: "watch" },
      { label: "Stale", value: config.stale, route: "/api/aggregate-market-signals", detail: "decay old signal", tone: "neutral" },
      { label: "Rollback", value: "ready", route: "/api/boundary-audit-events", detail: config.rollback, tone: "ready" },
      { label: "Blocked", value: "zero weight", route: benefit.blockedRoute, detail: config.blocked, tone: "watch" }
    ]
  };
}

async function handleReinforcementEvaluationLabAction(action, model = getReinforcementEvaluationLabModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildReinforcementEvaluationLabText(model));
    showToast("Reinforcement evaluation lab copied.");
  } catch {
    showToast("Copy is blocked here, but the evaluation lab is visible.");
  }
}

function buildReinforcementEvaluationLabText(model = getReinforcementEvaluationLabModel()) {
  return [
    "Heavyster Reinforcement Evaluation Lab",
    "Version: v170 Reinforcement Evaluation Lab",
    "Rule: recommendation weights cannot move until accepted, ignored, rejected, stale, rollback, and blocked outcomes are scored with human approval and payment-custody routes blocked.",
    "",
    `Role: ${model.role}`,
    `Evaluation event: ${model.evaluationEvent}`,
    `Source benefit: ${model.sourceBenefit}`,
    `Focus: ${model.headline}`,
    `Blocked route: ${model.blockedRoute}`,
    "Evaluation states:",
    ...model.states.map((stateItem) => `- ${stateItem.label}: ${stateItem.value} ${stateItem.route} (${stateItem.detail})`),
    "",
    "Accepted promise: only proven action with visible proof, response, approval, and rollback can lift a recommendation.",
    "Ignored promise: recommendations that do not earn action lose confidence without exposing private tenant memory.",
    "Rejected promise: mismatches and failed proof reduce future weight.",
    "Stale promise: old proof, availability, or market signals decay until refreshed.",
    "Rollback promise: every positive or negative delta keeps a reversible prior state.",
    "Payment guardrail: rental payments, deposits, escrow, payouts, booking commissions, and payment custody stay zero-weight."
  ].join("\n");
}

function buildReinforcementEvaluationLabContractText() {
  return buildReinforcementEvaluationLabText();
}

function renderNetworkLearningExchange() {
  const root = document.querySelector("#networkLearningExchange");
  if (!root) return;

  const model = getNetworkLearningExchangeModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#networkLearningRole").textContent = model.roleLabel;
  document.querySelector("#networkLearningHeadline").textContent = model.headline;
  document.querySelector("#networkLearningDetail").textContent = model.detail;
  document.querySelector("#networkLearningGrid").innerHTML = model.states.map((stateItem) => `
    <span class="${escapeHtml(stateItem.tone)}">
      <em>${escapeHtml(stateItem.label)}</em>
      <strong>${escapeHtml(stateItem.value)}</strong>
      <small>${escapeHtml(stateItem.route)}</small>
      <b>${escapeHtml(stateItem.detail)}</b>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#networkLearningPrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getNetworkLearningExchangeModel() {
  const evaluation = getReinforcementEvaluationLabModel();
  const role = evaluation.role || state.commandRole || "Buyer";
  const configs = {
    Buyer: {
      roleLabel: "Buyer network exchange",
      headline: "Anonymize buyer match lessons before they help another organization.",
      detail: "Buyer outcomes can lift the next verified route only after local memory stays private, sample threshold passes, consent and approval are visible, and payment routes stay blocked.",
      event: "buyer_network_match_lesson",
      local: "intent private",
      signal: "proof reply",
      threshold: "5 outcomes",
      benefit: "cleaner route",
      consent: "opt-in",
      approval: "marketplace approved",
      rollback: "restore rank",
      blocked: "rental payment zero",
      blockedRoute: "/api/rental-payments"
    },
    Supplier: {
      roleLabel: "Supplier network exchange",
      headline: "Anonymize supplier listing lessons before they guide another fleet.",
      detail: "Supplier outcomes can improve proof guidance only after lead replies and proof edits stay private, aggregate threshold passes, approval is visible, and commission routes stay blocked.",
      event: "supplier_network_listing_lesson",
      local: "proof edits private",
      signal: "fresh proof",
      threshold: "7 outcomes",
      benefit: "safer guidance",
      consent: "opt-in",
      approval: "success approved",
      rollback: "restore visibility",
      blocked: "commission zero",
      blockedRoute: "/api/booking-commissions"
    },
    Founder: {
      roleLabel: "Founder network exchange",
      headline: "Anonymize market lessons before they shape another launch.",
      detail: "Founder outcomes can improve country/category priority only after launch notes stay private, market sample threshold passes, approval is visible, and payout routes stay blocked.",
      event: "founder_network_market_lesson",
      local: "launch notes private",
      signal: "proof density",
      threshold: "4 markets",
      benefit: "safer priority",
      consent: "opt-in",
      approval: "founder approved",
      rollback: "restore queue",
      blocked: "payout zero",
      blockedRoute: "/api/payouts"
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    exchangeEvent: config.event,
    sourceEvaluation: evaluation.evaluationEvent,
    blockedRoute: config.blockedRoute || evaluation.blockedRoute,
    primary: { label: "Open evaluation lab", anchor: "#reinforcementEvaluationLab", aria: `Open ${role.toLowerCase()} reinforcement evaluation lab` },
    states: [
      { label: "Local", value: config.local, route: "/api/organization-memory", detail: "tenant boundary", tone: "neutral" },
      { label: "Signal", value: config.signal, route: "/api/aggregate-market-signals", detail: config.event, tone: "ready" },
      { label: "Threshold", value: config.threshold, route: "/api/network-learning-exchange", detail: "minimum sample", tone: "watch" },
      { label: "Consent", value: config.consent, route: "/api/network-learning-exchange", detail: "tenant allowed", tone: "ready" },
      { label: "Approval", value: config.approval, route: "/api/boundary-audit-events", detail: "human gate", tone: "ready" },
      { label: "Rollback", value: "ready", route: "/api/boundary-audit-events", detail: config.rollback, tone: "neutral" },
      { label: "Blocked", value: "zero cross-org", route: config.blockedRoute, detail: config.blocked, tone: "watch" }
    ]
  };
}

async function handleNetworkLearningExchangeAction(action, model = getNetworkLearningExchangeModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildNetworkLearningExchangeText(model));
    showToast("Network learning exchange copied.");
  } catch {
    showToast("Copy is blocked here, but the exchange is visible.");
  }
}

function buildNetworkLearningExchangeText(model = getNetworkLearningExchangeModel()) {
  return [
    "Heavyster Network Learning Exchange",
    "Version: v171 Network Learning Exchange",
    "Rule: approved evaluation outcomes can help another organization only as anonymized aggregate learning after consent, minimum sample size, tenant isolation, human approval, rollback, and blocked payment-custody routes are visible.",
    "",
    `Role: ${model.role}`,
    `Exchange event: ${model.exchangeEvent}`,
    `Source evaluation: ${model.sourceEvaluation}`,
    `Focus: ${model.headline}`,
    `Blocked route: ${model.blockedRoute}`,
    "Exchange states:",
    ...model.states.map((stateItem) => `- ${stateItem.label}: ${stateItem.value} ${stateItem.route} (${stateItem.detail})`),
    "",
    "Privacy promise: tenant-specific intent, proof edits, lead replies, renewal plans, launch notes, and operator decisions stay inside the organization.",
    "Aggregate promise: only anonymized patterns that pass a visible minimum sample can travel across organizations.",
    "Consent promise: opt-in and named human approval are required before network learning can influence another tenant.",
    "Benefit promise: the receiving organization sees a safer recommendation, not another tenant's private history.",
    "Rollback promise: every exchanged lesson keeps a reversible prior state.",
    "Payment guardrail: rental payments, deposits, escrow, payouts, booking commissions, and payment custody stay blocked from cross-organization learning."
  ].join("\n");
}

function buildNetworkLearningExchangeContractText() {
  return buildNetworkLearningExchangeText();
}

function renderExchangePolicyAuditLog() {
  const root = document.querySelector("#exchangePolicyAuditLog");
  if (!root) return;

  const model = getExchangePolicyAuditLogModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#exchangePolicyAuditRole").textContent = model.roleLabel;
  document.querySelector("#exchangePolicyAuditHeadline").textContent = model.headline;
  document.querySelector("#exchangePolicyAuditDetail").textContent = model.detail;
  document.querySelector("#exchangePolicyAuditGrid").innerHTML = model.states.map((stateItem) => `
    <span class="${escapeHtml(stateItem.tone)}">
      <em>${escapeHtml(stateItem.label)}</em>
      <strong>${escapeHtml(stateItem.value)}</strong>
      <small>${escapeHtml(stateItem.route)}</small>
      <b>${escapeHtml(stateItem.detail)}</b>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#exchangePolicyAuditPrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getExchangePolicyAuditLogModel() {
  const exchange = getNetworkLearningExchangeModel();
  const role = exchange.role || state.commandRole || "Buyer";
  const configs = {
    Buyer: {
      roleLabel: "Buyer exchange audit",
      headline: "Write the buyer match audit before supplier rank improves.",
      detail: "The audit log records the buyer lesson, sample evidence, consent, approver, applied route, rollback, and blocked rental-payment route.",
      event: "audit_buyer_network_match_lesson",
      lesson: "proof reply pattern",
      evidence: "5 / 3 orgs",
      consent: "opt-in logged",
      approver: "marketplace",
      rollback: "restore rank",
      blocked: "rental payment",
      blockedRoute: "/api/rental-payments"
    },
    Supplier: {
      roleLabel: "Supplier exchange audit",
      headline: "Write the supplier listing audit before visibility improves.",
      detail: "The audit log records the supplier lesson, sample evidence, consent, approver, applied route, rollback, and blocked commission route.",
      event: "audit_supplier_network_listing_lesson",
      lesson: "fresh proof pattern",
      evidence: "7 / 4 orgs",
      consent: "opt-in logged",
      approver: "success",
      rollback: "restore visibility",
      blocked: "commission",
      blockedRoute: "/api/booking-commissions"
    },
    Founder: {
      roleLabel: "Founder exchange audit",
      headline: "Write the market lesson audit before launch priority improves.",
      detail: "The audit log records the founder lesson, sample evidence, consent, approver, applied route, rollback, and blocked payout route.",
      event: "audit_founder_network_market_lesson",
      lesson: "market proof pattern",
      evidence: "4 / 3 orgs",
      consent: "opt-in logged",
      approver: "founder",
      rollback: "restore queue",
      blocked: "payout",
      blockedRoute: "/api/payouts"
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    auditEvent: config.event,
    sourceExchange: exchange.exchangeEvent,
    appliedRoute: "/api/recommendation-weights",
    blockedRoute: config.blockedRoute || exchange.blockedRoute,
    primary: { label: "Open network exchange", anchor: "#networkLearningExchange", aria: `Open ${role.toLowerCase()} network learning exchange` },
    states: [
      { label: "Event", value: config.event.replace("audit_", ""), route: "/api/exchange-policy-audit-log", detail: "written first", tone: "ready" },
      { label: "Lesson", value: config.lesson, route: "/api/network-learning-exchange", detail: "anonymous ref", tone: "neutral" },
      { label: "Evidence", value: config.evidence, route: "/api/exchange-policy-audit-log", detail: "sample proof", tone: "watch" },
      { label: "Consent", value: config.consent, route: "/api/network-learning-exchange", detail: "tenant allowed", tone: "ready" },
      { label: "Approver", value: config.approver, route: "/api/boundary-audit-events", detail: "human gate", tone: "ready" },
      { label: "Rollback", value: "ready", route: "/api/boundary-audit-events", detail: config.rollback, tone: "neutral" },
      { label: "Blocked", value: config.blocked, route: config.blockedRoute, detail: "not audited", tone: "watch" }
    ]
  };
}

async function handleExchangePolicyAuditLogAction(action, model = getExchangePolicyAuditLogModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildExchangePolicyAuditLogText(model));
    showToast("Exchange policy audit log copied.");
  } catch {
    showToast("Copy is blocked here, but the audit log is visible.");
  }
}

function buildExchangePolicyAuditLogText(model = getExchangePolicyAuditLogModel()) {
  return [
    "Heavyster Exchange Policy Audit Log",
    "Version: v172 Exchange Policy Audit Log",
    "Rule: no network learning exchange can influence another organization until an audit log records source role, anonymized lesson, minimum sample evidence, consent, approval, rollback, and blocked payment-custody route.",
    "",
    `Role: ${model.role}`,
    `Audit event: ${model.auditEvent}`,
    `Source exchange: ${model.sourceExchange}`,
    `Applied route: ${model.appliedRoute}`,
    `Focus: ${model.headline}`,
    `Blocked route: ${model.blockedRoute}`,
    "Audit states:",
    ...model.states.map((stateItem) => `- ${stateItem.label}: ${stateItem.value} ${stateItem.route} (${stateItem.detail})`),
    "",
    "Audit promise: exchanged learning writes an audit event before recommendation weights move.",
    "Privacy promise: audit payloads reference anonymized lessons, not tenant-private memory.",
    "Evidence promise: minimum sample proof stays attached to the exchange record.",
    "Approval promise: consent and named human approval remain visible beside the applied route.",
    "Rollback promise: every applied network lesson keeps a reversible prior state.",
    "Payment guardrail: rental payments, deposits, escrow, payouts, booking commissions, and payment custody stay blocked from audit payloads."
  ].join("\n");
}

function buildExchangePolicyAuditLogContractText() {
  return buildExchangePolicyAuditLogText();
}

function renderLearningQualityDashboard() {
  const root = document.querySelector("#learningQualityDashboard");
  if (!root) return;

  const model = getLearningQualityDashboardModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#learningQualityRole").textContent = model.roleLabel;
  document.querySelector("#learningQualityHeadline").textContent = model.headline;
  document.querySelector("#learningQualityDetail").textContent = model.detail;
  document.querySelector("#learningQualityGrid").innerHTML = model.states.map((stateItem) => `
    <span class="${escapeHtml(stateItem.tone)}">
      <em>${escapeHtml(stateItem.label)}</em>
      <strong>${escapeHtml(stateItem.value)}</strong>
      <small>${escapeHtml(stateItem.route)}</small>
      <b>${escapeHtml(stateItem.detail)}</b>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#learningQualityPrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getLearningQualityDashboardModel() {
  const audit = getExchangePolicyAuditLogModel();
  const role = audit.role || state.commandRole || "Buyer";
  const configs = {
    Buyer: {
      roleLabel: "Buyer quality dashboard",
      headline: "Check buyer learning quality before supplier confidence compounds.",
      detail: "Buyer quality shows accepted lessons, improved supplier match trust, rollbacks, blocked routes, stale signals, pending review, and next proof action.",
      event: "buyer_learning_quality_snapshot",
      accepted: "12 lessons",
      improved: "+8 trust",
      reverted: "2 rollbacks",
      blocked: "6 blocked",
      stale: "3 expired",
      review: "1 review",
      next: "raise proof freshness",
      blockedRoute: "/api/rental-payments"
    },
    Supplier: {
      roleLabel: "Supplier quality dashboard",
      headline: "Check supplier learning quality before listing visibility compounds.",
      detail: "Supplier quality shows accepted lessons, improved listing readiness, rollbacks, blocked commission routes, stale proof, pending reviews, and next freshness action.",
      event: "supplier_learning_quality_snapshot",
      accepted: "9 lessons",
      improved: "+6 readiness",
      reverted: "1 rollback",
      blocked: "4 blocked",
      stale: "2 expired",
      review: "2 reviews",
      next: "send freshness nudge",
      blockedRoute: "/api/booking-commissions"
    },
    Founder: {
      roleLabel: "Founder quality dashboard",
      headline: "Check market learning quality before launch priority compounds.",
      detail: "Founder quality shows accepted lessons, improved market priority, queue rollbacks, blocked payout routes, stale demand, pending review, and next scale action.",
      event: "founder_learning_quality_snapshot",
      accepted: "7 lessons",
      improved: "+5 priority",
      reverted: "2 rollbacks",
      blocked: "5 blocked",
      stale: "1 aged",
      review: "1 review",
      next: "hold weak wedge",
      blockedRoute: "/api/payouts"
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    dashboardEvent: config.event,
    sourceAudit: audit.auditEvent,
    blockedRoute: config.blockedRoute || audit.blockedRoute,
    primary: { label: "Open audit log", anchor: "#exchangePolicyAuditLog", aria: `Open ${role.toLowerCase()} exchange policy audit log` },
    states: [
      { label: "Accepted", value: config.accepted, route: "/api/learning-quality-dashboard", detail: "approved lessons", tone: "ready" },
      { label: "Improved", value: config.improved, route: "/api/recommendation-weights", detail: "quality lift", tone: "ready" },
      { label: "Reverted", value: config.reverted, route: "/api/boundary-audit-events", detail: "rollback count", tone: "neutral" },
      { label: "Blocked", value: config.blocked, route: config.blockedRoute, detail: "quality guard", tone: "watch" },
      { label: "Stale", value: config.stale, route: "/api/exchange-policy-audit-log", detail: "needs refresh", tone: "neutral" },
      { label: "Review", value: config.review, route: "/api/boundary-audit-events", detail: "human gate", tone: "watch" },
      { label: "Next", value: config.next, route: "/api/learning-quality-dashboard", detail: "one action", tone: "ready" }
    ]
  };
}

async function handleLearningQualityDashboardAction(action, model = getLearningQualityDashboardModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildLearningQualityDashboardText(model));
    showToast("Learning quality dashboard copied.");
  } catch {
    showToast("Copy is blocked here, but the quality dashboard is visible.");
  }
}

function buildLearningQualityDashboardText(model = getLearningQualityDashboardModel()) {
  return [
    "Heavyster Learning Quality Dashboard",
    "Version: v173 Learning Quality Dashboard",
    "Rule: shared learning cannot keep compounding unless a quality dashboard shows accepted lessons, improved recommendations, reverted lessons, blocked routes, stale signals, pending reviews, and the next quality action.",
    "",
    `Role: ${model.role}`,
    `Dashboard event: ${model.dashboardEvent}`,
    `Source audit: ${model.sourceAudit}`,
    `Focus: ${model.headline}`,
    `Blocked route: ${model.blockedRoute}`,
    "Quality states:",
    ...model.states.map((stateItem) => `- ${stateItem.label}: ${stateItem.value} ${stateItem.route} (${stateItem.detail})`),
    "",
    "Quality promise: recommendation confidence improves only when accepted and audited lessons are visible.",
    "Correction promise: reverted lessons stay visible so the system learns from what it had to undo.",
    "Review promise: stale, weak, or contradictory lessons pause at the human gate before compounding.",
    "Operator promise: each role gets one next quality action instead of hidden tuning.",
    "Payment guardrail: rental payments, deposits, escrow, payouts, booking commissions, and payment custody stay blocked from learning quality scores."
  ].join("\n");
}

function buildLearningQualityDashboardContractText() {
  return buildLearningQualityDashboardText();
}

function renderLearningActionQueue() {
  const root = document.querySelector("#learningActionQueue");
  if (!root) return;

  const model = getLearningActionQueueModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#learningActionRole").textContent = model.roleLabel;
  document.querySelector("#learningActionHeadline").textContent = model.headline;
  document.querySelector("#learningActionDetail").textContent = model.detail;
  document.querySelector("#learningActionGrid").innerHTML = model.states.map((stateItem) => `
    <span class="${escapeHtml(stateItem.tone)}">
      <em>${escapeHtml(stateItem.label)}</em>
      <strong>${escapeHtml(stateItem.value)}</strong>
      <small>${escapeHtml(stateItem.route)}</small>
      <b>${escapeHtml(stateItem.detail)}</b>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#learningActionPrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getLearningActionQueueModel() {
  const quality = getLearningQualityDashboardModel();
  const role = quality.role || state.commandRole || "Buyer";
  const configs = {
    Buyer: {
      roleLabel: "Buyer action queue",
      headline: "Assign proof review before buyer match confidence compounds.",
      detail: "Buyer queue turns proof conflicts into one owner, due state, rollback task, blocked payment task, and completion gate.",
      event: "buyer_learning_action_queue",
      owner: "marketplace operator",
      source: "buyer quality",
      action: "review proof conflict",
      due: "today",
      rollback: "restore rank",
      blocked: "block rental pay",
      gate: "proof approved",
      blockedRoute: "/api/rental-payments"
    },
    Supplier: {
      roleLabel: "Supplier action queue",
      headline: "Assign proof freshness before supplier visibility compounds.",
      detail: "Supplier queue turns stale proof into one owner, freshness nudge, rollback task, blocked commission task, and completion gate.",
      event: "supplier_learning_action_queue",
      owner: "success operator",
      source: "supplier quality",
      action: "send freshness nudge",
      due: "24 hours",
      rollback: "restore visibility",
      blocked: "block commission",
      gate: "proof refreshed",
      blockedRoute: "/api/booking-commissions"
    },
    Founder: {
      roleLabel: "Founder action queue",
      headline: "Assign scale hold before market priority compounds.",
      detail: "Founder queue turns weak wedge quality into one owner, hold action, rollback task, blocked payout task, and completion gate.",
      event: "founder_learning_action_queue",
      owner: "founder operator",
      source: "founder quality",
      action: "hold weak wedge",
      due: "launch review",
      rollback: "restore queue",
      blocked: "block payout",
      gate: "response approved",
      blockedRoute: "/api/payouts"
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    queueEvent: config.event,
    sourceQuality: quality.dashboardEvent,
    blockedRoute: config.blockedRoute || quality.blockedRoute,
    primary: { label: "Open quality dashboard", anchor: "#learningQualityDashboard", aria: `Open ${role.toLowerCase()} learning quality dashboard` },
    states: [
      { label: "Owner", value: config.owner, route: "/api/learning-action-queue", detail: "assigned", tone: "ready" },
      { label: "Source", value: config.source, route: "/api/learning-quality-dashboard", detail: quality.dashboardEvent, tone: "neutral" },
      { label: "Action", value: config.action, route: "/api/learning-action-queue", detail: "do next", tone: "ready" },
      { label: "Due", value: config.due, route: "/api/learning-action-queue", detail: "timebox", tone: "watch" },
      { label: "Rollback", value: config.rollback, route: "/api/boundary-audit-events", detail: "safe revert", tone: "neutral" },
      { label: "Blocked", value: config.blocked, route: config.blockedRoute, detail: "guardrail", tone: "watch" },
      { label: "Gate", value: config.gate, route: "/api/boundary-audit-events", detail: "complete first", tone: "ready" }
    ]
  };
}

async function handleLearningActionQueueAction(action, model = getLearningActionQueueModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildLearningActionQueueText(model));
    showToast("Learning action queue copied.");
  } catch {
    showToast("Copy is blocked here, but the action queue is visible.");
  }
}

function buildLearningActionQueueText(model = getLearningActionQueueModel()) {
  return [
    "Heavyster Learning Action Queue",
    "Version: v174 Learning Action Queue",
    "Rule: every weak, stale, reverted, blocked, or pending learning-quality signal must become an owner-visible action before recommendation confidence compounds again.",
    "",
    `Role: ${model.role}`,
    `Queue event: ${model.queueEvent}`,
    `Source quality: ${model.sourceQuality}`,
    `Focus: ${model.headline}`,
    `Blocked route: ${model.blockedRoute}`,
    "Action states:",
    ...model.states.map((stateItem) => `- ${stateItem.label}: ${stateItem.value} ${stateItem.route} (${stateItem.detail})`),
    "",
    "Ownership promise: weak learning quality signals get an accountable owner before weights move.",
    "Action promise: each queue item has one next action, due state, completion gate, and rollback task.",
    "Hold promise: unresolved actions keep confidence from compounding until completion or explicit hold.",
    "Operator promise: review tasks, supplier nudges, rollbacks, and scale holds are visible instead of hidden tuning.",
    "Payment guardrail: rental payments, deposits, escrow, payouts, booking commissions, and payment custody stay blocked from action queues."
  ].join("\n");
}

function buildLearningActionQueueContractText() {
  return buildLearningActionQueueText();
}

function renderQualityCompletionReceipts() {
  const root = document.querySelector("#qualityCompletionReceipts");
  if (!root) return;

  const model = getQualityCompletionReceiptsModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#qualityReceiptRole").textContent = model.roleLabel;
  document.querySelector("#qualityReceiptHeadline").textContent = model.headline;
  document.querySelector("#qualityReceiptDetail").textContent = model.detail;
  document.querySelector("#qualityReceiptGrid").innerHTML = model.states.map((stateItem) => `
    <span class="${escapeHtml(stateItem.tone)}">
      <em>${escapeHtml(stateItem.label)}</em>
      <strong>${escapeHtml(stateItem.value)}</strong>
      <small>${escapeHtml(stateItem.route)}</small>
      <b>${escapeHtml(stateItem.detail)}</b>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#qualityReceiptPrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getQualityCompletionReceiptsModel() {
  const action = getLearningActionQueueModel();
  const role = action.role || state.commandRole || "Buyer";
  const configs = {
    Buyer: {
      roleLabel: "Buyer completion receipts",
      headline: "Receipt proof review before proof confidence lifts.",
      detail: "Buyer receipt proves who closed the proof conflict, what proof changed, which gate passed, and which confidence lift is allowed.",
      receiptEvent: "buyer_quality_completion_receipt",
      completedAction: "proof conflict reviewed",
      approver: "trust reviewer",
      proofDelta: "inspection proof accepted",
      confidence: "allow freshness lift",
      rollback: "restore prior rank",
      blockedRoute: "/api/rental-payments"
    },
    Supplier: {
      roleLabel: "Supplier completion receipts",
      headline: "Receipt freshness work before visibility lifts.",
      detail: "Supplier receipt proves who closed the freshness task, what document changed, which gate passed, and which visibility lift is allowed.",
      receiptEvent: "supplier_quality_completion_receipt",
      completedAction: "freshness nudge completed",
      approver: "success lead",
      proofDelta: "fresh document received",
      confidence: "allow visibility lift",
      rollback: "restore visibility",
      blockedRoute: "/api/booking-commissions"
    },
    Founder: {
      roleLabel: "Founder completion receipts",
      headline: "Receipt scale review before market priority lifts.",
      detail: "Founder receipt proves who closed the weak-wedge review, what response quality changed, and which cautious market lift is allowed.",
      receiptEvent: "founder_quality_completion_receipt",
      completedAction: "weak wedge reviewed",
      approver: "founder",
      proofDelta: "response quality approved",
      confidence: "allow cautious lift",
      rollback: "restore market queue",
      blockedRoute: "/api/payouts"
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    receiptEvent: config.receiptEvent,
    sourceAction: action.queueEvent,
    owner: action.states.find((stateItem) => stateItem.label === "Owner")?.value || "operator",
    blockedRoute: config.blockedRoute || action.blockedRoute,
    primary: { label: "Open action queue", anchor: "#learningActionQueue", aria: `Open ${role.toLowerCase()} learning action queue` },
    states: [
      { label: "Receipt", value: config.receiptEvent, route: "/api/quality-completion-receipts", detail: "recorded", tone: "ready" },
      { label: "Completed", value: config.completedAction, route: "/api/learning-action-queue", detail: action.queueEvent, tone: "ready" },
      { label: "Approver", value: config.approver, route: "/api/boundary-audit-events", detail: "human close", tone: "neutral" },
      { label: "Proof delta", value: config.proofDelta, route: "/api/learning-quality-dashboard", detail: "changed", tone: "ready" },
      { label: "Gate", value: action.states.find((stateItem) => stateItem.label === "Gate")?.value || "completion gate", route: "/api/boundary-audit-events", detail: "passed", tone: "ready" },
      { label: "Confidence", value: config.confidence, route: "/api/recommendation-weights", detail: "allowed", tone: "watch" },
      { label: "Rollback", value: config.rollback, route: "/api/boundary-audit-events", detail: "attached", tone: "neutral" },
      { label: "Blocked", value: "payment route", route: config.blockedRoute, detail: "guardrail", tone: "watch" }
    ]
  };
}

async function handleQualityCompletionReceiptsAction(action, model = getQualityCompletionReceiptsModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildQualityCompletionReceiptsText(model));
    showToast("Quality completion receipt copied.");
  } catch {
    showToast("Copy is blocked here, but the completion receipt is visible.");
  }
}

function buildQualityCompletionReceiptsText(model = getQualityCompletionReceiptsModel()) {
  return [
    "Heavyster Quality Completion Receipts",
    "Version: v175 Quality Completion Receipts",
    "Rule: no completed learning action can increase recommendation confidence until a receipt shows who closed it, what proof changed, which gate passed, what rollback remains, and which confidence update is allowed.",
    "",
    `Role: ${model.role}`,
    `Receipt event: ${model.receiptEvent}`,
    `Source action: ${model.sourceAction}`,
    `Owner: ${model.owner}`,
    `Focus: ${model.headline}`,
    `Blocked route: ${model.blockedRoute}`,
    "Receipt states:",
    ...model.states.map((stateItem) => `- ${stateItem.label}: ${stateItem.value} ${stateItem.route} (${stateItem.detail})`),
    "",
    "Completion promise: learning actions become auditable receipts before weights move.",
    "Proof promise: every confidence lift names the proof delta and completion gate.",
    "Approval promise: human closure remains visible so learning cannot quietly self-approve.",
    "Rollback promise: the undo path stays attached after the action is closed.",
    "Payment guardrail: rental payments, deposits, escrow, payouts, booking commissions, and payment custody stay blocked from completion receipts."
  ].join("\n");
}

function buildQualityCompletionReceiptsContractText() {
  return buildQualityCompletionReceiptsText();
}

function renderCalmActionBar() {
  const root = document.querySelector("#calmActionBar");
  if (!root) return;

  const model = getCalmActionModel();
  root.dataset.role = model.role.toLowerCase();
  root.querySelector(".calm-action-copy").innerHTML = `
    <span>${escapeHtml(model.roleLabel)}</span>
    <strong>${escapeHtml(model.headline)}</strong>
    <small>${escapeHtml(model.detail)}</small>
  `;

  const metricsRoot = document.querySelector("#calmActionMetrics");
  metricsRoot.innerHTML = model.metrics.map((metric) => `
    <span class="${escapeHtml(metric.tone)}">
      <strong>${escapeHtml(metric.value)}</strong>
      ${escapeHtml(metric.label)}
      <small>${escapeHtml(metric.detail)}</small>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#calmActionPrimaryButton");
  const copyButton = document.querySelector("#copyCalmActionButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.dataset.calmAction = "primary";
  primaryButton.setAttribute("aria-label", model.primary.aria);
  copyButton.dataset.calmAction = "copy";

  root.querySelectorAll("[data-calm-action]").forEach((button) => {
    button.onclick = () => handleCalmActionBarAction(button.dataset.calmAction, model);
  });
}

function getCalmActionModel() {
  const simplicity = getSimplicityBarModel();
  const guide = getWorkflowGuideModel();
  const role = simplicity.role || state.commandRole || "Buyer";
  const current = guide.current?.label || simplicity.primary.label;
  const next = guide.next?.label || simplicity.primary.label;
  const roleConfig = {
    Buyer: {
      headline: "Use the cleanest visible supply path.",
      detail: "Check proof, then copy one direct enquiry. Rental payment stays with the supplier.",
      primary: { label: "Copy enquiry", anchor: "#marketplace", action: "copy", aria: "Copy the calm buyer enquiry brief" },
      metrics: [
        { label: "Trust", value: "88/100", detail: "visible proof", tone: "ready" },
        { label: "Supply", value: "1 match", detail: "clean path", tone: "ready" },
        { label: "Next", value: "Desk", detail: "if needed", tone: "neutral" }
      ]
    },
    Supplier: {
      headline: "Protect one paid listing action.",
      detail: "Finish the supplier move that protects proof, freshness, or listing revenue.",
      primary: { label: "Open supplier desk", anchor: "#supplier-workbench", action: "open", aria: "Open the supplier desk" },
      metrics: [
        { label: "Revenue", value: "USD 297", detail: "current ARR", tone: "ready" },
        { label: "Listing", value: "3 paid", detail: "active now", tone: "ready" },
        { label: "Proof", value: "88/100", detail: "clean docs", tone: "ready" }
      ]
    },
    Founder: {
      headline: "Scale only the strongest market command.",
      detail: "Push one wedge only when demand, supply, trust, and listing ARR are visible.",
      primary: { label: "Open market command", anchor: "#market-signal-matrix", action: "open", aria: "Open the founder market command" },
      metrics: [
        { label: "ARR", value: "USD 6,615", detail: "listing revenue", tone: "ready" },
        { label: "Demand", value: "9 signals", detail: "current wedge", tone: "ready" },
        { label: "Supply gap", value: "21", detail: "recruit first", tone: "watch" }
      ]
    }
  };
  const config = roleConfig[role] || roleConfig.Buyer;

  return {
    role,
    roleLabel: `${role} calm action`,
    headline: config.headline,
    detail: config.detail,
    current,
    next,
    primary: config.primary,
    metrics: [
      { label: "Role", value: role, detail: "active path", tone: "neutral" },
      { label: "Now", value: current, detail: "current step", tone: "neutral" },
      { label: "Next", value: next, detail: "one move", tone: "ready" },
      ...config.metrics,
      { label: "Money", value: "0%", detail: "rental take", tone: "ready" }
    ].slice(0, 6)
  };
}

async function handleCalmActionBarAction(action, model = getCalmActionModel()) {
  if (action === "primary" && model.primary.action !== "copy") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildCalmActionBarText(model));
    showToast(action === "primary" ? "Calm enquiry copied." : "Calm action brief copied.");
  } catch {
    showToast("Copy is blocked here, but the calm action brief is visible.");
  }
}

function buildCalmActionBarText(model = getCalmActionModel()) {
  return [
    "Heavyster Calm Action Bar",
    "Version: v151 SaaS Launch Gate / v143 Calm Action Bar",
    "Rule: one role, one proof reason, one money rule, one next action.",
    "",
    `Role: ${model.role}`,
    `Current step: ${model.current}`,
    `Next step: ${model.next}`,
    `Primary action: ${model.primary.label}`,
    "",
    "Payment rule: buyer pays the rental company directly. Heavyster earns listing SaaS only in phase one.",
    "Rental take: 0%.",
    "Simplicity promise: the user should see the next safe move before opening a deeper workflow."
  ].join("\n");
}

function renderSereneRoutePlanner() {
  const root = document.querySelector("#sereneRoutePlanner");
  if (!root) return;

  const model = getSereneRoutePlannerModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#sereneRouteRole").textContent = model.roleLabel;
  document.querySelector("#sereneRouteHeadline").textContent = model.headline;
  document.querySelector("#sereneRouteDetail").textContent = model.detail;
  document.querySelector("#sereneRouteSteps").innerHTML = model.steps.map((step) => `
    <span class="${escapeHtml(step.tone)}">
      <em>${escapeHtml(step.label)}</em>
      <strong>${escapeHtml(step.value)}</strong>
      <small>${escapeHtml(step.detail)}</small>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#sereneRoutePrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getSereneRoutePlannerModel() {
  const simplicity = getSimplicityBarModel();
  const guide = getWorkflowGuideModel();
  const role = simplicity.role || state.commandRole || "Buyer";
  const current = guide.current?.label || simplicity.primary.label;
  const next = guide.next?.label || simplicity.primary.label;
  const configs = {
    Buyer: {
      headline: "Search, trust, direct enquiry.",
      detail: "A buyer sees the cleanest equipment route before any deeper workflow.",
      start: "Search",
      startDetail: "crane, UAE, availability",
      proof: "Trust 88/100",
      proofDetail: "visible supplier proof",
      money: "0% rental take",
      moneyDetail: "pay supplier direct",
      nextDetail: "copy enquiry or desk",
      primary: { label: "Open buyer route", anchor: "#buyer-workbench", aria: "Open the buyer route planner target" }
    },
    Supplier: {
      headline: "Listing, proof, freshness, paid SaaS.",
      detail: "A supplier sees the simplest path from one machine to billable listing.",
      start: "Listing",
      startDetail: "one ready machine",
      proof: "Proof 88/100",
      proofDetail: "docs clean",
      money: "USD 99/yr",
      moneyDetail: "paid listing SaaS",
      nextDetail: "freshness or lead desk",
      primary: { label: "Open supplier route", anchor: "#supplier-workbench", aria: "Open the supplier route planner target" }
    },
    Founder: {
      headline: "Demand, supply gap, trust, ARR.",
      detail: "A founder sees where to grow without making the product feel heavy.",
      start: "Demand",
      startDetail: "UAE Lifting wedge",
      proof: "Supply gap 21",
      proofDetail: "recruit before traffic",
      money: "USD 6,615 ARR",
      moneyDetail: "listing revenue first",
      nextDetail: "market command",
      primary: { label: "Open founder route", anchor: "#market-signal-matrix", aria: "Open the founder route planner target" }
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: `${role} route planner`,
    headline: config.headline,
    detail: config.detail,
    current,
    next,
    primary: config.primary,
    steps: [
      { label: "Start", value: config.start, detail: config.startDetail, tone: "neutral" },
      { label: "Proof", value: config.proof, detail: config.proofDetail, tone: "ready" },
      { label: "Money", value: config.money, detail: config.moneyDetail, tone: "ready" },
      { label: "Next", value: next, detail: config.nextDetail, tone: "watch" }
    ]
  };
}

async function handleSereneRoutePlannerAction(action, model = getSereneRoutePlannerModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildSereneRoutePlannerText(model));
    showToast("Serene route copied.");
  } catch {
    showToast("Copy is blocked here, but the serene route is visible.");
  }
}

function buildSereneRoutePlannerText(model = getSereneRoutePlannerModel()) {
  return [
    "Heavyster Serene Route Planner",
    "Version: v151 SaaS Launch Gate / v145 Visible Serene Route",
    "Rule: one visible route, one proof reason, one money rule, one next screen.",
    "",
    `Role: ${model.role}`,
    `Current screen: ${model.current}`,
    `Route: ${model.steps.map((step) => `${step.label} ${step.value}`).join(" -> ")}`,
    `Next screen: ${model.next}`,
    "",
    "Payment guardrail: buyer pays supplier directly. Heavyster earns listing SaaS only in phase one.",
    "Rental take: 0%.",
    "Simplicity promise: the route should be understood in ten seconds."
  ].join("\n");
}

function renderGlobalCalmCompass() {
  const root = document.querySelector("#globalCalmCompass");
  if (!root) return;

  const model = getGlobalCalmCompassModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#globalCalmRole").textContent = model.roleLabel;
  document.querySelector("#globalCalmHeadline").textContent = model.headline;
  document.querySelector("#globalCalmDetail").textContent = model.detail;
  document.querySelector("#globalCalmMap").innerHTML = model.steps.map((step) => `
    <span class="${escapeHtml(step.tone)}">
      <em>${escapeHtml(step.label)}</em>
      <strong>${escapeHtml(step.value)}</strong>
      <small>${escapeHtml(step.detail)}</small>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#globalCalmPrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getGlobalCalmCompassModel() {
  const route = getSereneRoutePlannerModel();
  const selected = getSelectedListing();
  const role = route.role || state.commandRole || "Buyer";
  const category = state.category === "all" ? selected?.category || "Lifting" : state.category;
  const region = state.region === "all" ? "UAE first" : state.region;
  const configs = {
    Buyer: {
      roleLabel: "Buyer global compass",
      headline: "Choose the safest visible supply path.",
      detail: "Start in one region, confirm proof, then send one direct enquiry.",
      primary: { label: "Open buyer desk", anchor: "#buyer-workbench", aria: "Open the buyer global path" },
      steps: [
        { label: "Country", value: region, detail: "launch market", tone: "ready" },
        { label: "Category", value: category, detail: "active search", tone: "neutral" },
        { label: "Proof", value: "Trust 88/100", detail: "visible reason", tone: "ready" },
        { label: "Money", value: "0% rental take", detail: "pay supplier direct", tone: "ready" },
        { label: "Next", value: "Direct enquiry", detail: "copy one message", tone: "watch" }
      ]
    },
    Supplier: {
      roleLabel: "Supplier global compass",
      headline: "Publish one clean machine before expanding the yard.",
      detail: "Keep listing, proof, freshness, and SaaS revenue on one calm path.",
      primary: { label: "Open supplier desk", anchor: "#supplier-workbench", aria: "Open the supplier global path" },
      steps: [
        { label: "Country", value: region, detail: "first paid yard", tone: "ready" },
        { label: "Listing", value: selected?.name || "Cat 320 Excavator", detail: "one clean machine", tone: "neutral" },
        { label: "Proof", value: "88/100", detail: "docs first", tone: "ready" },
        { label: "Money", value: "USD 99/yr", detail: "listing SaaS", tone: "ready" },
        { label: "Next", value: "Add listing", detail: "activate paid supply", tone: "watch" }
      ]
    },
    Founder: {
      roleLabel: "Founder global compass",
      headline: "Scale one wedge only after proof is calm.",
      detail: "Use demand, supply gap, trust, and listing ARR to choose the next country move.",
      primary: { label: "Open market command", anchor: "#market-signal-matrix", aria: "Open the founder global path" },
      steps: [
        { label: "Market", value: "UAE Lifting", detail: "one wedge", tone: "ready" },
        { label: "Demand", value: "9 signals", detail: "visible pull", tone: "neutral" },
        { label: "Proof", value: "21 gap", detail: "fill before traffic", tone: "watch" },
        { label: "Money", value: "USD 6,615 ARR", detail: "listing revenue", tone: "ready" },
        { label: "Next", value: "Supplier hunt", detail: "recruit supply", tone: "watch" }
      ]
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    primary: config.primary,
    steps: config.steps
  };
}

async function handleGlobalCalmCompassAction(action, model = getGlobalCalmCompassModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildGlobalCalmCompassText(model));
    showToast("Global compass brief copied.");
  } catch {
    showToast("Copy is blocked here, but the global compass brief is visible.");
  }
}

function buildGlobalCalmCompassText(model = getGlobalCalmCompassModel()) {
  return [
    "Heavyster Calm Global Compass",
    "Version: v151 SaaS Launch Gate / v146 Calm Global Compass",
    "Rule: one country, one category, one proof reason, one money rule, one next action.",
    "",
    `Role: ${model.role}`,
    `Path: ${model.steps.map((step) => `${step.label} ${step.value}`).join(" -> ")}`,
    `Primary action: ${model.primary.label}`,
    "",
    "Payment guardrail: buyer pays supplier directly. Heavyster earns listing SaaS only in phase one.",
    "Rental take: 0%.",
    "Expansion promise: launch one market calmly before opening the next country."
  ].join("\n");
}

function renderCalmDecisionConcierge() {
  const root = document.querySelector("#calmDecisionConcierge");
  if (!root) return;

  const model = getCalmDecisionConciergeModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#calmDecisionRole").textContent = model.roleLabel;
  document.querySelector("#calmDecisionHeadline").textContent = model.headline;
  document.querySelector("#calmDecisionDetail").textContent = model.detail;
  document.querySelector("#calmDecisionFlow").innerHTML = model.tiles.map((tile) => `
    <span class="${escapeHtml(tile.tone)}">
      <em>${escapeHtml(tile.label)}</em>
      <strong>${escapeHtml(tile.value)}</strong>
      <small>${escapeHtml(tile.detail)}</small>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#calmDecisionPrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getCalmDecisionConciergeModel() {
  const route = getSereneRoutePlannerModel();
  const compass = getGlobalCalmCompassModel();
  const selected = getSelectedListing();
  const role = route.role || state.commandRole || "Buyer";
  const listingName = selected?.name || "Cat 320 Excavator";
  const supplierName = selected?.supplier || "Gulf Lift Services";
  const proofScore = selected?.verified ? "100/100" : "88/100";
  const region = state.region === "all" ? "UAE" : state.region;
  const category = state.category === "all" ? selected?.category || "Lifting" : state.category;
  const configs = {
    Buyer: {
      roleLabel: "Buyer decision concierge",
      headline: `Use ${listingName} and send one direct enquiry.`,
      detail: `${supplierName} gives the cleanest visible path: proof, availability, and payment stay simple.`,
      primary: { label: "Copy enquiry", aria: "Copy the calm buyer enquiry", mode: "copy", anchor: "#marketplace" },
      tiles: [
        { label: "Decision", value: listingName, detail: "one machine", tone: "ready" },
        { label: "Proof", value: `Trust ${proofScore}`, detail: "visible before enquiry", tone: "ready" },
        { label: "Money", value: "0% rental take", detail: "pay supplier direct", tone: "ready" },
        { label: "Next", value: "Direct enquiry", detail: "copy one message", tone: "watch" }
      ]
    },
    Supplier: {
      roleLabel: "Supplier decision concierge",
      headline: `Activate one paid ${category} listing.`,
      detail: `Publish one clean machine in ${region}, confirm proof, and keep the listing revenue path calm.`,
      primary: { label: "Open supplier desk", aria: "Open the calm supplier decision", mode: "open", anchor: "#supplier-workbench" },
      tiles: [
        { label: "Decision", value: "List one machine", detail: listingName, tone: "ready" },
        { label: "Proof", value: "Proof 88/100", detail: "documents clean", tone: "ready" },
        { label: "Money", value: "USD 99/yr", detail: "active listing", tone: "ready" },
        { label: "Next", value: "Supplier desk", detail: "finish listing", tone: "watch" }
      ]
    },
    Founder: {
      roleLabel: "Founder decision concierge",
      headline: "Fill UAE Lifting supply before traffic.",
      detail: `${compass.steps[0]?.value || "UAE"} and ${compass.steps[1]?.value || "Lifting"} stay the calmest growth wedge until proof is stronger.`,
      primary: { label: "Open market command", aria: "Open the calm founder decision", mode: "open", anchor: "#market-signal-matrix" },
      tiles: [
        { label: "Decision", value: "Fill UAE Lifting", detail: "one wedge", tone: "ready" },
        { label: "Proof", value: "21 supply gap", detail: "recruit before traffic", tone: "watch" },
        { label: "Money", value: "USD 6,615 ARR", detail: "listing revenue", tone: "ready" },
        { label: "Next", value: "Market command", detail: "one founder move", tone: "neutral" }
      ]
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    primary: config.primary,
    tiles: config.tiles
  };
}

async function handleCalmDecisionConciergeAction(action, model = getCalmDecisionConciergeModel()) {
  if (action === "primary" && model.primary.mode === "open") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildCalmDecisionConciergeText(model));
    showToast("Calm decision copied.");
  } catch {
    showToast("Copy is blocked here, but the calm decision is visible.");
  }
}

function buildCalmDecisionConciergeText(model = getCalmDecisionConciergeModel()) {
  const tileValue = (label) => model.tiles.find((tile) => tile.label === label)?.value || "";
  const tileDetail = (label) => model.tiles.find((tile) => tile.label === label)?.detail || "";
  return [
    "Heavyster Calm Decision Concierge",
    "Version: v151 SaaS Launch Gate / v147 Calm Decision Concierge",
    "Rule: one user, one decision, one proof reason, one money rule, one action.",
    "",
    `Role: ${model.role}`,
    `Decision: ${tileValue("Decision")} (${tileDetail("Decision")})`,
    `Proof reason: ${tileValue("Proof")} (${tileDetail("Proof")})`,
    `Money rule: ${tileValue("Money")} (${tileDetail("Money")})`,
    `Primary action: ${model.primary.label}`,
    "",
    "Payment guardrail: buyer pays supplier directly. Heavyster earns listing SaaS only in phase one.",
    "Rental take: 0%.",
    "Simplicity promise: remove every choice that does not help the current decision."
  ].join("\n");
}

function renderCalmBackendHandoff() {
  const root = document.querySelector("#calmBackendHandoff");
  if (!root) return;

  const model = getCalmBackendHandoffModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#calmBackendHandoffRole").textContent = model.roleLabel;
  document.querySelector("#calmBackendHandoffHeadline").textContent = model.headline;
  document.querySelector("#calmBackendHandoffDetail").textContent = model.detail;
  document.querySelector("#calmBackendHandoffFlow").innerHTML = model.records.map((record) => `
    <span class="${escapeHtml(record.tone)}">
      <em>${escapeHtml(record.label)}</em>
      <strong>${escapeHtml(record.value)}</strong>
      <small>${escapeHtml(record.detail)}</small>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#calmBackendHandoffPrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getCalmBackendHandoffModel() {
  const route = getSereneRoutePlannerModel();
  const selected = getSelectedListing();
  const role = route.role || state.commandRole || "Buyer";
  const listingName = selected?.name || "Cat 320 Excavator";
  const supplierName = selected?.supplier || "Gulf Lift Services";
  const proofScore = selected?.verified ? "100/100" : "88/100";
  const region = state.region === "all" ? "UAE" : state.region;
  const category = state.category === "all" ? selected?.category || "Lifting" : state.category;
  const configs = {
    Buyer: {
      roleLabel: "Buyer backend handoff",
      headline: "Save one direct enquiry as production state.",
      detail: `${listingName} becomes enquiry record, proof snapshot, supplier route, and no-payment guardrail.`,
      owner: "buyer_flow",
      primary: { label: "Open buyer desk", anchor: "#buyer-workbench", aria: "Open the buyer backend handoff", mode: "open" },
      records: [
        { label: "Record", value: "DirectEnquiry", detail: listingName, tone: "ready" },
        { label: "Proof", value: "ProofSnapshot", detail: `Trust ${proofScore}`, tone: "ready" },
        { label: "Route", value: "LeadPacket", detail: supplierName, tone: "neutral" },
        { label: "Money", value: "PaymentGuardrail", detail: "0% rental take", tone: "ready" }
      ]
    },
    Supplier: {
      roleLabel: "Supplier backend handoff",
      headline: "Turn one listing into supplier account state.",
      detail: `${supplierName} needs account, listing, proof, subscription, and freshness state before scale.`,
      owner: "supplier_flow",
      primary: { label: "Open supplier studio", anchor: "#supplier-workbench", aria: "Open the supplier backend handoff", mode: "open" },
      records: [
        { label: "Account", value: "SupplierAccount", detail: supplierName, tone: "ready" },
        { label: "Listing", value: "EquipmentListing", detail: listingName, tone: "ready" },
        { label: "Proof", value: "ProofUpload", detail: "documents clean", tone: "ready" },
        { label: "Money", value: "ListingSubscription", detail: "USD 99/yr", tone: "watch" }
      ]
    },
    Founder: {
      roleLabel: "Founder backend handoff",
      headline: "Turn one market command into backend gates.",
      detail: `${region} ${category} gets demand, supplier targets, admin review, and launch gate state before traffic.`,
      owner: "founder_flow",
      primary: { label: "Open build phase", anchor: "#build-phase", aria: "Open the founder backend handoff", mode: "open" },
      records: [
        { label: "Market", value: "MarketWedge", detail: `${region} ${category}`, tone: "ready" },
        { label: "Supply", value: "SupplierTarget", detail: "21 gap", tone: "watch" },
        { label: "Control", value: "AdminReview", detail: "proof before traffic", tone: "neutral" },
        { label: "Gate", value: "LaunchGate", detail: "listing ARR first", tone: "ready" }
      ]
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    owner: config.owner,
    primary: config.primary,
    records: config.records
  };
}

async function handleCalmBackendHandoffAction(action, model = getCalmBackendHandoffModel()) {
  if (action === "primary" && model.primary.mode === "open") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildCalmBackendHandoffText(model));
    showToast("Calm backend handoff copied.");
  } catch {
    showToast("Copy is blocked here, but the backend handoff is visible.");
  }
}

function buildCalmBackendHandoffText(model = getCalmBackendHandoffModel()) {
  return [
    "Heavyster Calm Backend Handoff",
    "Version: v151 SaaS Launch Gate / v148 Calm Backend Handoff",
    "Rule: one visible decision becomes one backend record path without adding UI weight.",
    "",
    `Role: ${model.role}`,
    `Owner: ${model.owner}`,
    `Record path: ${model.records.map((record) => `${record.label} ${record.value}`).join(" -> ")}`,
    `Primary action: ${model.primary.label}`,
    "",
    "Payment guardrail: buyer pays supplier directly. Heavyster earns listing SaaS only in phase one.",
    "Rental take: 0%.",
    "Backend promise: store account, listing, proof, lead, billing, and admin state quietly behind the calm UI."
  ].join("\n");
}

function renderCalmLaunchPulse() {
  const root = document.querySelector("#calmLaunchPulse");
  if (!root) return;

  const model = getCalmLaunchPulseModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#calmLaunchPulseRole").textContent = model.roleLabel;
  document.querySelector("#calmLaunchPulseHeadline").textContent = model.headline;
  document.querySelector("#calmLaunchPulseDetail").textContent = model.detail;
  document.querySelector("#calmLaunchPulseGrid").innerHTML = model.pulses.map((pulse) => `
    <span class="${escapeHtml(pulse.tone)}">
      <em>${escapeHtml(pulse.label)}</em>
      <strong>${escapeHtml(pulse.value)}</strong>
      <small>${escapeHtml(pulse.detail)}</small>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#calmLaunchPulsePrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getCalmLaunchPulseModel() {
  const route = getSereneRoutePlannerModel();
  const backend = getCalmBackendHandoffModel();
  const selected = getSelectedListing();
  const role = route.role || state.commandRole || "Buyer";
  const listingName = selected?.name || "Cat 320 Excavator";
  const supplierName = selected?.supplier || "Gulf Lift Services";
  const region = state.region === "all" ? "UAE" : state.region;
  const category = state.category === "all" ? selected?.category || "Lifting" : state.category;
  const configs = {
    Buyer: {
      roleLabel: "Buyer launch pulse",
      headline: "Live search is ready. Send one direct enquiry.",
      detail: `${listingName} has the clearest visible path: proof first, supplier direct, payment outside Heavyster.`,
      primary: { label: "Copy enquiry", aria: "Copy the buyer launch pulse enquiry", mode: "copy", anchor: "#marketplace" },
      pulses: [
        { label: "Live", value: "Search + proof", detail: "Verified listings and proof card are usable now.", tone: "ready" },
        { label: "Blocked", value: "Saved history", detail: "Buyer login and RFQ history need backend.", tone: "watch" },
        { label: "Money", value: "0% rental take", detail: "Buyer pays supplier directly.", tone: "ready" },
        { label: "Next", value: "Direct enquiry", detail: `Ask ${supplierName} to confirm availability.`, tone: "neutral" }
      ]
    },
    Supplier: {
      roleLabel: "Supplier launch pulse",
      headline: "Listing SaaS is ready. Confirm one machine.",
      detail: `${supplierName} can protect paid listing revenue by keeping proof, availability, and direct leads clean.`,
      primary: { label: "Open supplier studio", aria: "Open the supplier launch pulse", mode: "open", anchor: "#supplier-workbench" },
      pulses: [
        { label: "Live", value: "Listing desk", detail: "Supplier can model listing, proof, and lead flow.", tone: "ready" },
        { label: "Blocked", value: "Real uploads", detail: "Auth, storage, and billing are production gates.", tone: "watch" },
        { label: "Money", value: "USD 99/year", detail: "Paid listing SaaS, rental payment direct.", tone: "ready" },
        { label: "Next", value: "Confirm availability", detail: "Refresh the first billable machine.", tone: "neutral" }
      ]
    },
    Founder: {
      roleLabel: "Founder launch pulse",
      headline: "Scale only where demand, trust, and listing ARR agree.",
      detail: `${region} ${category} stays the calm wedge until supply gaps, proof gaps, and backend gates are clear.`,
      primary: { label: "Open market command", aria: "Open the founder launch pulse", mode: "open", anchor: "#market-signal-matrix" },
      pulses: [
        { label: "Live", value: "Market command", detail: "Demand, supply, proof, and ARR are visible.", tone: "ready" },
        { label: "Blocked", value: backend.records.find((item) => item.tone === "watch")?.value || "Backend gates", detail: "Do not push traffic before proof and data are ready.", tone: "watch" },
        { label: "Money", value: "Listing ARR first", detail: "Protect SaaS revenue before commission.", tone: "ready" },
        { label: "Next", value: "Fill supply gap", detail: "Recruit verified machines before scaling.", tone: "neutral" }
      ]
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    primary: config.primary,
    pulses: config.pulses
  };
}

async function handleCalmLaunchPulseAction(action, model = getCalmLaunchPulseModel()) {
  if (action === "primary" && model.primary.mode === "open") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildCalmLaunchPulseText(model));
    showToast("Calm launch pulse copied.");
  } catch {
    showToast("Copy is blocked here, but the launch pulse is visible.");
  }
}

function buildCalmLaunchPulseText(model = getCalmLaunchPulseModel()) {
  const pulseValue = (label) => model.pulses.find((pulse) => pulse.label === label)?.value || "";
  const pulseDetail = (label) => model.pulses.find((pulse) => pulse.label === label)?.detail || "";
  return [
    "Heavyster Calm Launch Pulse",
    "Version: v151 SaaS Launch Gate / v149 Calm Launch Pulse",
    "Rule: live, blocked, and next are visible before any workflow opens.",
    "",
    `Role: ${model.role}`,
    `Live: ${pulseValue("Live")} (${pulseDetail("Live")})`,
    `Blocked: ${pulseValue("Blocked")} (${pulseDetail("Blocked")})`,
    `Money: ${pulseValue("Money")} (${pulseDetail("Money")})`,
    `Next: ${pulseValue("Next")} (${pulseDetail("Next")})`,
    `Primary action: ${model.primary.label}`,
    "",
    "Payment guardrail: buyer pays supplier directly. Heavyster earns listing SaaS only in phase one.",
    "Rental take: 0%.",
    "Simplicity promise: one pulse, one proof reason, one money rule, one next action."
  ].join("\n");
}

function renderProductionAccountScaffold() {
  const root = document.querySelector("#productionAccountScaffold");
  if (!root) return;

  const model = getProductionAccountScaffoldModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#productionAccountRole").textContent = model.roleLabel;
  document.querySelector("#productionAccountHeadline").textContent = model.headline;
  document.querySelector("#productionAccountDetail").textContent = model.detail;
  document.querySelector("#productionAccountGrid").innerHTML = model.records.map((record) => `
    <span class="${escapeHtml(record.tone)}">
      <em>${escapeHtml(record.label)}</em>
      <strong>${escapeHtml(record.value)}</strong>
      <small>${escapeHtml(record.detail)}</small>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#productionAccountPrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getProductionAccountScaffoldModel() {
  const pulse = getCalmLaunchPulseModel();
  const selected = getSelectedListing();
  const role = pulse.role || state.commandRole || "Buyer";
  const listingName = selected?.name || "Cat 320 Excavator";
  const supplierName = selected?.supplier || "Gulf Lift Services";
  const region = state.region === "all" ? selected?.region || "UAE" : state.region;
  const category = state.category === "all" ? selected?.category || "Lifting" : state.category;
  const configs = {
    Buyer: {
      roleLabel: "Buyer account path",
      headline: "Search stays simple. Saved enquiry becomes the first account record.",
      detail: `${listingName} can become a saved search, proof snapshot, and direct supplier route when login exists.`,
      primary: { label: "Open buyer desk", aria: "Open the buyer account scaffold", anchor: "#buyer-workbench" },
      records: [
        { label: "Account", value: "Buyer profile", detail: "Company, jobsite, contact", tone: "ready" },
        { label: "Proof", value: "Trust snapshot", detail: "Saved score and docs", tone: "ready" },
        { label: "Money", value: "0% rental take", detail: "Pay supplier direct", tone: "ready" },
        { label: "Next record", value: "Saved enquiry", detail: "Backend handoff", tone: "watch" }
      ]
    },
    Supplier: {
      roleLabel: "Supplier account path",
      headline: "One listing becomes a real paid SaaS account.",
      detail: `${supplierName} needs company account, equipment listing, proof uploads, billing plan, and direct lead route.`,
      primary: { label: "Open supplier studio", aria: "Open the supplier account scaffold", anchor: "#studio" },
      records: [
        { label: "Account", value: "Supplier account", detail: "Company, regions, team", tone: "ready" },
        { label: "Listing", value: "Equipment record", detail: "Machine, location, status", tone: "ready" },
        { label: "Money", value: "Listing plan", detail: "USD 9/mo or 99/yr", tone: "ready" },
        { label: "Next record", value: "Lead route", detail: "Phone, email, WhatsApp", tone: "watch" }
      ]
    },
    Founder: {
      roleLabel: "Founder account path",
      headline: "Scale only after the record path is visible.",
      detail: `${region} ${category} should create admin review, market ledger, billing status, proof debt, and lead audit records before traffic scales.`,
      primary: { label: "Open build phase", aria: "Open the founder account scaffold", anchor: "#build-phase" },
      records: [
        { label: "Control", value: "Admin review", detail: "Approve supply and proof", tone: "ready" },
        { label: "Market", value: "Ledger entry", detail: "Demand, supply, ARR", tone: "ready" },
        { label: "Money", value: "Billing status", detail: "Listing SaaS only", tone: "ready" },
        { label: "Next record", value: "Lead audit", detail: "Response and proof trail", tone: "watch" }
      ]
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    primary: config.primary,
    records: config.records
  };
}

async function handleProductionAccountScaffoldAction(action, model = getProductionAccountScaffoldModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildProductionAccountScaffoldText(model));
    showToast("Production account scaffold copied.");
  } catch {
    showToast("Copy is blocked here, but the account scaffold is visible.");
  }
}

function buildProductionAccountScaffoldText(model = getProductionAccountScaffoldModel()) {
  return [
    "Heavyster Production Account Scaffold",
    "Version: v151 SaaS Launch Gate / v150 Production Account Scaffold",
    "Rule: one calm account path becomes one production record path.",
    "",
    `Role: ${model.role}`,
    `Account path: ${model.records.map((record) => `${record.label} ${record.value}`).join(" -> ")}`,
    `Primary action: ${model.primary.label}`,
    "",
    "Production records: buyer profile, supplier account, equipment listing, proof document, listing subscription, direct enquiry, admin review, and market ledger.",
    "Payment guardrail: buyer pays supplier directly. Heavyster earns listing SaaS only in phase one.",
    "Rental take: 0%.",
    "Simplicity promise: show the record path without exposing backend complexity."
  ].join("\n");
}

function renderSaasLaunchGate() {
  const root = document.querySelector("#saasLaunchGate");
  if (!root) return;

  const model = getSaasLaunchGateModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#saasLaunchGateRole").textContent = model.roleLabel;
  document.querySelector("#saasLaunchGateHeadline").textContent = model.headline;
  document.querySelector("#saasLaunchGateDetail").textContent = model.detail;
  document.querySelector("#saasLaunchGateGrid").innerHTML = model.gates.map((gate) => `
    <span class="${escapeHtml(gate.tone)}">
      <em>${escapeHtml(gate.label)}</em>
      <strong>${escapeHtml(gate.value)}</strong>
      <small>${escapeHtml(gate.detail)}</small>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#saasLaunchGatePrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getSaasLaunchGateModel() {
  const account = getProductionAccountScaffoldModel();
  const selected = getSelectedListing();
  const role = account.role || state.commandRole || "Buyer";
  const listingName = selected?.name || "Cat 320 Excavator";
  const supplierName = selected?.supplier || "Gulf Lift Services";
  const region = state.region === "all" ? selected?.region || "UAE" : state.region;
  const category = state.category === "all" ? selected?.category || "Lifting" : state.category;
  const configs = {
    Buyer: {
      roleLabel: "Buyer launch gate",
      headline: "Let buyers move only when one clean route is visible.",
      detail: `${listingName} should pass proof, availability, direct enquiry, and 0% rental take before traffic scales.`,
      primary: { label: "Open buyer desk", aria: "Open the buyer launch gate", anchor: "#buyer-workbench" },
      gates: [
        { label: "Buyer traffic", value: "Pass", detail: "Search has one clean result path.", tone: "ready" },
        { label: "Proof view", value: "Pass", detail: "Trust is visible before enquiry.", tone: "ready" },
        { label: "Direct enquiry", value: "Pass", detail: "Copy enquiry keeps payment direct.", tone: "ready" },
        { label: "Backend route", value: "Review", detail: "Save enquiry record next.", tone: "watch" }
      ]
    },
    Supplier: {
      roleLabel: "Supplier launch gate",
      headline: "Let suppliers publish only when proof and money are clean.",
      detail: `${supplierName} should see profile, first listing, proof, availability, paid listing, and lead route in one path.`,
      primary: { label: "Open supplier studio", aria: "Open the supplier launch gate", anchor: "#studio" },
      gates: [
        { label: "Onboarding", value: "Pass", detail: "Profile and first listing are visible.", tone: "ready" },
        { label: "Proof route", value: "Pass", detail: "Documents are clear enough to show.", tone: "ready" },
        { label: "Paid listing", value: "Pass", detail: "USD 99/year stays the clean offer.", tone: "ready" },
        { label: "Freshness", value: "Review", detail: "Confirm availability before serious leads.", tone: "watch" }
      ]
    },
    Founder: {
      roleLabel: "Founder launch gate",
      headline: "Scale only where demand, supply, trust, and revenue agree.",
      detail: `${region} ${category} should pass demand proof, supplier density, listing ARR, and backend ownership before a launch push.`,
      primary: { label: "Open market command", aria: "Open the founder launch gate", anchor: "#market-signal-matrix" },
      gates: [
        { label: "Demand proof", value: "Pass", detail: "Buyer signals support this wedge.", tone: "ready" },
        { label: "Supply density", value: "Hold", detail: "Recruit enough verified machines first.", tone: "hold" },
        { label: "Listing ARR", value: "Pass", detail: "Revenue remains listing SaaS only.", tone: "ready" },
        { label: "Backend route", value: "Review", detail: "Create records before production launch.", tone: "watch" }
      ]
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    primary: config.primary,
    gates: config.gates
  };
}

async function handleSaasLaunchGateAction(action, model = getSaasLaunchGateModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildSaasLaunchGateText(model));
    showToast("SaaS launch gate copied.");
  } catch {
    showToast("Copy is blocked here, but the launch gate is visible.");
  }
}

function buildSaasLaunchGateText(model = getSaasLaunchGateModel()) {
  return [
    "Heavyster SaaS Launch Gate",
    "Version: v151 SaaS Launch Gate",
    "Rule: pass, hold, or review before the product scales.",
    "",
    `Role: ${model.role}`,
    `Launch gate: ${model.gates.map((gate) => `${gate.label} ${gate.value}`).join(" -> ")}`,
    `Primary action: ${model.primary.label}`,
    "",
    "Phase-one rule: launch paid listings and direct enquiries first.",
    "Payment guardrail: buyer pays supplier directly. Heavyster earns listing SaaS only in phase one.",
    "Rental take: 0%.",
    "Simplicity promise: one launch gate, one proof reason, one money rule, one next backend route."
  ].join("\n");
}

function renderProductionBackendStarter() {
  const root = document.querySelector("#productionBackendStarter");
  if (!root) return;

  const model = getProductionBackendStarterModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#productionBackendRole").textContent = model.roleLabel;
  document.querySelector("#productionBackendHeadline").textContent = model.headline;
  document.querySelector("#productionBackendDetail").textContent = model.detail;
  document.querySelector("#productionBackendGrid").innerHTML = model.records.map((record) => `
    <span class="${escapeHtml(record.tone)}">
      <em>${escapeHtml(record.label)}</em>
      <strong>${escapeHtml(record.value)}</strong>
      <small>${escapeHtml(record.detail)}</small>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#productionBackendPrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getProductionBackendStarterModel() {
  const gate = getSaasLaunchGateModel();
  const selected = getSelectedListing();
  const role = gate.role || state.commandRole || "Buyer";
  const listingName = selected?.name || "Cat 320 Excavator";
  const supplierName = selected?.supplier || "Gulf Lift Services";
  const region = state.region === "all" ? selected?.region || "UAE" : state.region;
  const category = state.category === "all" ? selected?.category || "Lifting" : state.category;
  const configs = {
    Buyer: {
      roleLabel: "Buyer backend starter",
      headline: "A direct enquiry becomes one saved record.",
      detail: `${listingName} can save search context, proof snapshot, enquiry note, and supplier route without changing payment.`,
      primary: { label: "Open buyer desk", aria: "Open the buyer backend starter", anchor: "#buyer-workbench" },
      records: [
        { label: "DirectEnquiry", value: "Ready", detail: "message, supplier, status", tone: "ready" },
        { label: "ProofDocument", value: "Snapshot", detail: "trust score and docs", tone: "ready" },
        { label: "EquipmentListing", value: "Linked", detail: "machine and availability", tone: "ready" },
        { label: "RentalPayment", value: "Blocked", detail: "pay supplier direct", tone: "hold" }
      ]
    },
    Supplier: {
      roleLabel: "Supplier backend starter",
      headline: "A paid listing becomes the first SaaS record.",
      detail: `${supplierName} needs supplier account, listing, proof, subscription, and lead route.`,
      primary: { label: "Open supplier studio", aria: "Open the supplier backend starter", anchor: "#studio" },
      records: [
        { label: "SupplierAccount", value: "Ready", detail: "company and team", tone: "ready" },
        { label: "EquipmentListing", value: "Ready", detail: "machine, region, status", tone: "ready" },
        { label: "ListingSubscription", value: "Ready", detail: "USD 99/year option", tone: "ready" },
        { label: "ProofDocument", value: "Review", detail: "freshness before leads", tone: "watch" }
      ]
    },
    Founder: {
      roleLabel: "Founder backend starter",
      headline: "Build only the records that protect scale.",
      detail: `${region} ${category} needs admin review, market signal, paid listing status, and direct enquiry logs before production.`,
      primary: { label: "Open build phase", aria: "Open the founder backend starter", anchor: "#build-phase" },
      records: [
        { label: "MarketSignal", value: "Ready", detail: "demand and supply gap", tone: "ready" },
        { label: "AdminReview", value: "Ready", detail: "approval and support notes", tone: "ready" },
        { label: "ListingSubscription", value: "Ready", detail: "paid listing status", tone: "ready" },
        { label: "RentalPayment", value: "Blocked", detail: "0% rental take", tone: "hold" }
      ]
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    primary: config.primary,
    records: config.records
  };
}

async function handleProductionBackendStarterAction(action, model = getProductionBackendStarterModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildProductionBackendStarterText(model));
    showToast("Production backend starter copied.");
  } catch {
    showToast("Copy is blocked here, but the backend starter is visible.");
  }
}

function buildProductionBackendStarterText(model = getProductionBackendStarterModel()) {
  return [
    "Heavyster Production Backend Starter",
    "Version: v152 Production Backend Starter",
    "Rule: one visible business action maps to one production record.",
    "",
    `Role: ${model.role}`,
    `Starter path: ${model.records.map((record) => `${record.label} ${record.value}`).join(" -> ")}`,
    `Primary action: ${model.primary.label}`,
    "",
    "Core records: SupplierAccount, EquipmentListing, ProofDocument, DirectEnquiry, ListingSubscription, AdminReview, and MarketSignal.",
    "First API surface: /api/supplier-accounts, /api/equipment-listings, /api/proof-documents, /api/direct-enquiries, /api/listing-subscriptions, /api/admin-reviews, /api/market-signals.",
    "Blocked routes: /api/rental-payments, /api/escrow, /api/payouts, and /api/booking-commissions.",
    "Payment guardrail: buyer pays supplier directly. Heavyster earns listing SaaS only in phase one.",
    "Rental take: 0%.",
    "Simplicity promise: backend becomes real without adding UI weight."
  ].join("\n");
}

function renderCalmBackendRouteHandoff() {
  const root = document.querySelector("#calmBackendRouteHandoff");
  if (!root) return;

  const model = getCalmBackendRouteHandoffModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#calmBackendRouteRole").textContent = model.roleLabel;
  document.querySelector("#calmBackendRouteHeadline").textContent = model.headline;
  document.querySelector("#calmBackendRouteDetail").textContent = model.detail;
  document.querySelector("#calmBackendRouteGrid").innerHTML = model.routes.map((route) => `
    <span class="${escapeHtml(route.tone)}">
      <em>${escapeHtml(route.label)}</em>
      <strong>${escapeHtml(route.value)}</strong>
      <small>${escapeHtml(route.detail)}</small>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#calmBackendRoutePrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getCalmBackendRouteHandoffModel() {
  const starter = getProductionBackendStarterModel();
  const selected = getSelectedListing();
  const role = starter.role || state.commandRole || "Buyer";
  const listingName = selected?.name || "Cat 320 Excavator";
  const supplierName = selected?.supplier || "Gulf Lift Services";
  const region = state.region === "all" ? selected?.region || "UAE" : state.region;
  const category = state.category === "all" ? selected?.category || "Lifting" : state.category;
  const configs = {
    Buyer: {
      roleLabel: "Buyer route handoff",
      headline: "Copy enquiry becomes one backend route.",
      detail: `${listingName} can create one direct enquiry record, proof snapshot, and supplier response route without any checkout.`,
      primary: { label: "Open buyer desk", aria: "Open the buyer backend route handoff", anchor: "#buyer-workbench" },
      routes: [
        { label: "UI action", value: "Copy enquiry", detail: "one buyer note", tone: "ready" },
        { label: "API route", value: "/api/direct-enquiries", detail: "save listing and supplier", tone: "ready" },
        { label: "Record", value: "DirectEnquiry", detail: "proof and response log", tone: "ready" },
        { label: "Blocked", value: "/api/rental-payments", detail: "pay supplier direct", tone: "hold" }
      ]
    },
    Supplier: {
      roleLabel: "Supplier route handoff",
      headline: "Selected machine becomes one paid listing route.",
      detail: `${supplierName} can publish one active listing with proof and SaaS billing while rental payment stays direct.`,
      primary: { label: "Open supplier studio", aria: "Open the supplier backend route handoff", anchor: "#studio" },
      routes: [
        { label: "UI action", value: "Use selected machine", detail: "one publish action", tone: "ready" },
        { label: "API route", value: "/api/equipment-listings", detail: "machine, region, status", tone: "ready" },
        { label: "Record", value: "ListingSubscription", detail: "USD 99/year or USD 9/month", tone: "ready" },
        { label: "Blocked", value: "/api/payouts", detail: "no rental collection", tone: "hold" }
      ]
    },
    Founder: {
      roleLabel: "Founder route handoff",
      headline: "Market command becomes one controlled backend route.",
      detail: `${region} ${category} can move through market signal, admin review, and listing status without adding commission rails.`,
      primary: { label: "Open market command", aria: "Open the founder backend route handoff", anchor: "#market-signal-matrix" },
      routes: [
        { label: "UI action", value: "Open market command", detail: "one wedge decision", tone: "ready" },
        { label: "API route", value: "/api/market-signals", detail: "demand, supply, proof", tone: "ready" },
        { label: "Record", value: "AdminReview", detail: "approve, hold, recruit", tone: "watch" },
        { label: "Blocked", value: "/api/booking-commissions", detail: "success fee later only", tone: "hold" }
      ]
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    primary: config.primary,
    routes: config.routes
  };
}

async function handleCalmBackendRouteHandoffAction(action, model = getCalmBackendRouteHandoffModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildCalmBackendRouteHandoffText(model));
    showToast("Calm backend route handoff copied.");
  } catch {
    showToast("Copy is blocked here, but the route handoff is visible.");
  }
}

function buildCalmBackendRouteHandoffText(model = getCalmBackendRouteHandoffModel()) {
  return [
    "Heavyster Calm Backend Route Handoff",
    "Version: v153 Calm Backend Route Handoff",
    "Rule: one visible UI action maps to one allowed API route, one production record, and one blocked payment route.",
    "",
    `Role: ${model.role}`,
    `Route handoff: ${model.routes.map((route) => `${route.label}: ${route.value}`).join(" -> ")}`,
    `Primary action: ${model.primary.label}`,
    "",
    "Allowed routes: /api/direct-enquiries, /api/equipment-listings, /api/listing-subscriptions, /api/proof-documents, /api/supplier-accounts, /api/admin-reviews, and /api/market-signals.",
    "Blocked payment routes: /api/rental-payments, /api/deposits, /api/escrow, /api/payouts, and /api/booking-commissions.",
    "Payment guardrail: buyer pays supplier directly. Heavyster earns listing SaaS only in phase one.",
    "Rental take: 0%.",
    "Simplicity promise: backend routes become clear without making the UI heavier."
  ].join("\n");
}

function buildCalmBackendRouteContractText() {
  return buildCalmBackendRouteHandoffText();
}

function renderSereneProofGate() {
  const root = document.querySelector("#sereneProofGate");
  if (!root) return;

  const model = getSereneProofGateModel();
  root.dataset.role = model.role.toLowerCase();
  document.querySelector("#sereneProofGateRole").textContent = model.roleLabel;
  document.querySelector("#sereneProofGateHeadline").textContent = model.headline;
  document.querySelector("#sereneProofGateDetail").textContent = model.detail;
  document.querySelector("#sereneProofGateGrid").innerHTML = model.proofs.map((proof) => `
    <span class="${escapeHtml(proof.tone)}">
      <em>${escapeHtml(proof.label)}</em>
      <strong>${escapeHtml(proof.value)}</strong>
      <small>${escapeHtml(proof.detail)}</small>
    </span>
  `).join("");

  const primaryButton = document.querySelector("#sereneProofGatePrimaryButton");
  primaryButton.textContent = model.primary.label;
  primaryButton.setAttribute("aria-label", model.primary.aria);
}

function getSereneProofGateModel() {
  const route = getCalmBackendRouteHandoffModel();
  const selected = getSelectedListing();
  const role = route.role || state.commandRole || "Buyer";
  const listingName = selected?.name || "Cat 320 Excavator";
  const supplierName = selected?.supplier || "Gulf Lift Services";
  const region = state.region === "all" ? selected?.region || "UAE" : state.region;
  const category = state.category === "all" ? selected?.category || "Lifting" : state.category;
  const configs = {
    Buyer: {
      roleLabel: "Buyer proof gate",
      headline: "Ask only when proof feels calm.",
      detail: `${listingName} is safe to enquire when proof, availability, supplier route, and direct payment rule are visible.`,
      primary: { label: "Open proof card", aria: "Open the buyer proof gate", anchor: "#passport" },
      proofs: [
        { label: "Machine fit", value: "100/100", detail: "selected result", tone: "ready" },
        { label: "Proof", value: "5/5", detail: "docs visible", tone: "ready" },
        { label: "Availability", value: "Now", detail: "ready to ask", tone: "ready" },
        { label: "Payment", value: "0%", detail: "supplier direct", tone: "neutral" }
      ]
    },
    Supplier: {
      roleLabel: "Supplier proof gate",
      headline: "Publish when the machine can stand on proof.",
      detail: `${supplierName} should publish one paid listing only when proof, availability, and lead route are clean.`,
      primary: { label: "Open proof vault", aria: "Open the supplier proof gate", anchor: "#proof-vault" },
      proofs: [
        { label: "Listing", value: "Ready", detail: "machine and category", tone: "ready" },
        { label: "Proof", value: "88/100", detail: "documents clean", tone: "ready" },
        { label: "Availability", value: "Confirm", detail: "freshness needed", tone: "watch" },
        { label: "SaaS", value: "USD 99/yr", detail: "paid listing", tone: "neutral" }
      ]
    },
    Founder: {
      roleLabel: "Founder proof gate",
      headline: "Scale only where proof protects trust.",
      detail: `${region} ${category} should receive traffic only when demand, supply, proof, and listing ARR are visible.`,
      primary: { label: "Open market matrix", aria: "Open the founder proof gate", anchor: "#market-signal-matrix" },
      proofs: [
        { label: "Demand", value: "4 signals", detail: "buyer pull", tone: "ready" },
        { label: "Supply", value: "21 gap", detail: "recruit first", tone: "watch" },
        { label: "Proof", value: "100/100", detail: "launch proof", tone: "ready" },
        { label: "Revenue", value: "USD 2,178", detail: "listing ARR", tone: "neutral" }
      ]
    }
  };
  const config = configs[role] || configs.Buyer;

  return {
    role,
    roleLabel: config.roleLabel,
    headline: config.headline,
    detail: config.detail,
    primary: config.primary,
    proofs: config.proofs
  };
}

async function handleSereneProofGateAction(action, model = getSereneProofGateModel()) {
  if (action === "primary") {
    openSimplicityTarget(model.primary.anchor, model.primary.label);
    return;
  }

  try {
    await navigator.clipboard.writeText(buildSereneProofGateText(model));
    showToast("Serene proof gate copied.");
  } catch {
    showToast("Copy is blocked here, but the proof gate is visible.");
  }
}

function buildSereneProofGateText(model = getSereneProofGateModel()) {
  return [
    "Heavyster Serene Proof Gate",
    "Version: v154 Serene Proof Gate",
    "Rule: one proof score, one readiness state, one money rule, and one calm next move.",
    "",
    `Role: ${model.role}`,
    `Proof path: ${model.proofs.map((proof) => `${proof.label}: ${proof.value}`).join(" -> ")}`,
    `Primary action: ${model.primary.label}`,
    "",
    "Backend handoff: gate output feeds DirectEnquiry, ListingSubscription, or AdminReview only after proof is visible.",
    "Payment guardrail: buyer pays supplier directly. Heavyster earns listing SaaS only in phase one.",
    "Blocked routes: rental payments, deposits, escrow, payouts, and booking commissions.",
    "Rental take: 0%.",
    "Simplicity promise: proof decides the route before any production record is created."
  ].join("\n");
}

function buildSereneProofGateContractText() {
  return buildSereneProofGateText();
}

function openWorkflowGuideTarget(direction) {
  const button = document.querySelector(direction === "previous" ? "#workflowDockPrevButton" : "#workflowDockNextButton");
  if (!button || button.disabled) return;
  openWorkflowStep(button.dataset.workflowGuideAnchor, button.dataset.workflowGuideLabel, button.dataset.workflowGuideRole);
}

function openWorkflowStep(anchor, label, role) {
  if (!anchor) return;
  const target = document.querySelector(anchor);
  if (!target) return;
  if (role && commandRoles.includes(role)) state.commandRole = role;
  saveState();
  renderCommandCenter();
  renderWorkflowDock();
  renderWorkflowGuide();
  renderSimplicityBar();
  renderCalmFocusLens();
  renderCalmDataRoom();
  renderLaunchCountryRoom();
  renderLaunchActivationSprint();
  renderProductionSprintRecords();
  renderProductionRoutePack();
  renderClosedLoopLearning();
  renderLearningFeedbackStore();
  renderRecommendationWeightSimulator();
  renderOrganizationLearningBoundary();
  renderBoundaryPolicySmokeConsole();
  renderBoundaryAuditFixturePack();
  renderBoundaryAuditReplayConsole();
  renderHumanApprovalReplayGate();
  renderLearningBenefitLedger();
  renderReinforcementEvaluationLab();
  renderNetworkLearningExchange();
  renderExchangePolicyAuditLog();
  renderLearningQualityDashboard();
  renderLearningActionQueue();
  renderQualityCompletionReceipts();
  renderCalmActionBar();
  renderSereneRoutePlanner();
  renderGlobalCalmCompass();
  renderCalmDecisionConcierge();
  renderCalmBackendHandoff();
  renderCalmLaunchPulse();
  renderProductionAccountScaffold();
  renderSaasLaunchGate();
  renderProductionBackendStarter();
  renderCalmBackendRouteHandoff();
  renderSereneProofGate();
  syncFocusLayerVisibility();
  closeWorkflowMenu();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.location.hash = anchor;
  showToast(`${label || "Workflow step"} opened.`);
}

function getWorkflowDockModel() {
  const command = getCommandCenterModel();
  const activeRole = command.activeRole;
  const activeHash = window.location.hash || "#marketplace";
  const route = commandRoutes.find((item) => item.role === activeRole) || commandRoutes[0];
  const steps = getWorkflowDockSteps(route, activeHash).map((step, index) => ({
    ...step,
    index,
    isActive: step.anchor === activeHash
  }));
  const activeStep = steps.find((step) => step.isActive);

  return {
    activeRole,
    roles: command.routes.map((routeItem) => ({
      role: routeItem.role,
      score: routeItem.score,
      isActive: routeItem.role === activeRole
    })),
    steps,
    signal: activeStep
      ? `${activeRole} path: ${activeStep.label} is open. ${command.workspace.next}`
      : `${activeRole} path: ${command.workspace.title} - ${command.workspace.score}`
  };
}

function getWorkflowDockSteps(route, activeHash) {
  if (!route) return [];

  const priorityByRole = {
    Buyer: ["Search", "Desk", "Jobsite", "Passport", "RFQ", "Award", "Quote Guard", "Mobilize", "Deal Trail"],
    Supplier: ["Desk", "Storefront", "Import", "Proof", "Revenue", "Health", "Studio", "Lead Desk", "Yard"],
    Founder: ["Desk", "Morning", "Daily", "Call Sheet", "Success", "Launch", "Twin", "Flywheel", "Autopilot", "Exchange", "Proof Room", "Commit", "Activate", "Ledger", "Matrix", "Growth"]
  };
  const priority = priorityByRole[route.role] || route.steps.map((step) => step.label);
  const chosen = route.steps.filter((step) => priority.includes(step.label));
  const active = route.steps.find((step) => step.anchor === activeHash);

  if (active && !chosen.some((step) => step.anchor === active.anchor)) {
    return [...chosen.slice(0, 3), active, ...chosen.slice(3)];
  }

  return chosen;
}

function getWorkflowGuideModel() {
  const activeHash = window.location.hash || "#marketplace";
  const route = getWorkflowRouteForHash(activeHash)
    || commandRoutes.find((item) => item.role === state.commandRole)
    || commandRoutes[0];
  const steps = route.steps;
  const activeIndex = steps.findIndex((step) => step.anchor === activeHash);
  const currentIndex = activeIndex >= 0 ? activeIndex : 0;
  const current = steps[currentIndex] || route.steps[0];
  const previous = currentIndex > 0 ? steps[currentIndex - 1] : null;
  const next = currentIndex < steps.length - 1 ? steps[currentIndex + 1] : null;
  const progressText = `Step ${Math.min(currentIndex + 1, steps.length)} of ${steps.length}`;
  const moveText = next
    ? `${current.label} to ${next.label}`
    : `${current.label} completes this path`;

  return {
    role: route.role,
    current,
    previous,
    next,
    progressText,
    moveText
  };
}

function getWorkflowRouteForHash(activeHash) {
  return commandRoutes.find((route) => route.steps.some((step) => step.anchor === activeHash));
}

function renderDemoFlightDeck() {
  const root = document.querySelector("#demoFlightScenes");
  if (!root) return;

  const model = getDemoFlightDeckModel();
  setText("#demoFlightTitle", model.title);
  setText("#demoFlightBadge", model.badge);

  document.querySelector("#demoFlightScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${escapeHtml(model.summary)}</span>
  `;

  document.querySelector("#demoFlightMetrics").innerHTML = model.metrics.map((metric) => `
    <span>
      <strong>${escapeHtml(metric.value)}</strong>
      ${escapeHtml(metric.label)}
    </span>
  `).join("");

  root.innerHTML = model.scenes.map((scene, index) => `
    <button type="button" class="demo-flight-scene ${scene.isActive ? "is-active" : ""}" data-demo-scene="${index}">
      <em>${String(index + 1).padStart(2, "0")}</em>
      <span>
        <strong>${escapeHtml(scene.label)}</strong>
        ${escapeHtml(scene.signal)}
        <small>${escapeHtml(scene.outcome)}</small>
      </span>
      <b>${escapeHtml(scene.role)}</b>
    </button>
  `).join("");

  document.querySelector("#demoFlightScript").innerHTML = model.script.map((line, index) => `
    <div class="demo-flight-script-line">
      <strong>${index + 1}</strong>
      <span>${escapeHtml(line)}</span>
    </div>
  `).join("");

  root.querySelectorAll("[data-demo-scene]").forEach((button) => {
    button.addEventListener("click", () => {
      const scene = model.scenes[Number(button.dataset.demoScene)];
      if (!scene) return;
      applyDemoFlightScene(scene);
    });
  });
}

function getDemoFlightDeckModel() {
  const selected = getSelectedListing();
  const filtered = getFilteredListings();
  const rfq = getRfqModel();
  const leadDesk = getLeadDeskModel();
  const callSheet = getFounderCallSheetModel();
  const ledger = getTrustRevenueLedgerModel();
  const demandCount = getDemandSignals().reduce((total, signal) => total + Number(signal.count || 1), 0);
  const activeHash = window.location.hash || "#marketplace";
  const directPipeline = ledger.directPipeline || leadDesk.totalBudget || 0;
  const score = Math.max(0, Math.min(100, Math.round(
    72
    + Math.min(10, demandCount)
    + Math.min(8, rfq.listings.length * 2)
    + Math.min(6, callSheet.cards.length)
  )));
  const scenes = getDemoFlightScenes({ selected, filtered, rfq, leadDesk, callSheet, ledger, activeHash });
  const activeScene = scenes.find((scene) => scene.isActive) || scenes[0];
  const badge = score >= 88 ? "Boardroom ready" : score >= 78 ? "Demo ready" : "Tighten story";

  return {
    title: "Five-move Heavyster demo",
    badge,
    score,
    summary: `${activeScene.label} is the current proof point. The story stays simple: search demand, verified supply, direct enquiry, paid listing ARR, then disciplined scale.`,
    metrics: [
      { label: "guided scenes", value: String(scenes.length) },
      { label: "roles covered", value: "3" },
      { label: "direct pipeline", value: `USD ${directPipeline.toLocaleString()}` },
      { label: "rental take", value: "0%" }
    ],
    scenes,
    script: [
      "Start with the marketplace: a buyer searches by machine, region, and availability.",
      "When exact supply is missing, Heavyster captures demand instead of losing the buyer.",
      "The buyer path turns the search into RFQ, proof, award, quote clarity, and mobilization.",
      "The supplier path turns rental yards into verified storefronts and paid listings.",
      "The founder path uses demand proof, call scripts, trust gates, and listing ARR to scale one market at a time."
    ]
  };
}

function getDemoFlightScenes(context) {
  const callSupplier = context.callSheet.cards[0]?.supplier || "the first qualified supplier";
  const marketLabel = context.ledger.marketLabel || "UAE Lifting";

  return [
    {
      role: "Buyer",
      label: "Marketplace rescue",
      anchor: "#marketplace",
      listingId: "HY-CR-014",
      state: { search: "crane", region: "UAE", availability: "available", category: "all" },
      signal: "Show a real buyer search and convert the zero-result moment into recoverable demand.",
      outcome: "Buyer stays inside Heavyster instead of disappearing.",
      isActive: context.activeHash === "#marketplace"
    },
    {
      role: "Buyer",
      label: "Buyer decision desk",
      anchor: "#buyer-workbench",
      listingId: context.rfq.listings[0]?.id || context.selected.id,
      state: { search: "", region: "all", availability: "all", category: "all" },
      signal: `${context.rfq.listings.length} machine${context.rfq.listings.length === 1 ? "" : "s"} can move through RFQ, award, quote, and mobilization.`,
      outcome: "Rental payment remains direct while workflow proof is captured.",
      isActive: context.activeHash === "#buyer-workbench"
    },
    {
      role: "Supplier",
      label: "Supplier revenue path",
      anchor: "#supplier-workbench",
      listingId: "HY-EX-001",
      state: { search: "", region: "all", availability: "all", category: "all" },
      signal: `${context.leadDesk.profile.supplier} sees leads, proof gaps, revenue, and freshness in one workspace.`,
      outcome: "The supplier understands why a USD 99 annual listing is worth it.",
      isActive: context.activeHash === "#supplier-workbench"
    },
    {
      role: "Founder",
      label: "Supplier close script",
      anchor: "#founder-call-sheet",
      listingId: context.callSheet.cards[0]?.listingId || "HY-CR-014",
      state: { search: "", region: "all", availability: "all", category: "all" },
      signal: `${callSupplier} is converted into a call-ready listing conversation.`,
      outcome: "Demand proof becomes paid listing outreach without touching rental money.",
      isActive: context.activeHash === "#founder-call-sheet"
    },
    {
      role: "Founder",
      label: "Scale gate",
      anchor: "#trust-revenue-ledger",
      listingId: "HY-CR-014",
      state: { search: "", region: "all", availability: "all", category: "all" },
      signal: `${marketLabel} is checked for ARR, trust debt, renewal exposure, and direct pipeline before scaling.`,
      outcome: "The founder grows only where trust and listing revenue can support it.",
      isActive: context.activeHash === "#trust-revenue-ledger"
    }
  ];
}

function applyDemoFlightScene(scene) {
  state.commandRole = scene.role;
  if (scene.listingId) state.selectedListingId = scene.listingId;
  if (scene.state) Object.assign(state, scene.state);
  if (scene.anchor === "#trust-revenue-ledger") {
    state.activeMarketKey = state.activeMarketKey || getMarketKeyFromSignal(getDemandSignals()[0]);
    state.activeMatrixKey = state.activeMarketKey;
  }
  window.location.hash = scene.anchor;
  saveState();
  render();
  const target = document.querySelector(scene.anchor);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  showToast(`${scene.label} opened.`);
}

function renderBoardroomSnapshot() {
  const root = document.querySelector("#boardroomThesis");
  if (!root) return;

  const model = getBoardroomSnapshotModel();
  setText("#boardroomTitle", model.title);
  setText("#boardroomBadge", model.badge);

  document.querySelector("#boardroomScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${escapeHtml(model.summary)}</span>
  `;

  document.querySelector("#boardroomMetrics").innerHTML = model.metrics.map((metric) => `
    <span>
      <strong>${escapeHtml(metric.value)}</strong>
      ${escapeHtml(metric.label)}
    </span>
  `).join("");

  root.innerHTML = model.thesis.map((item, index) => `
    <div class="boardroom-thesis-row">
      <strong>${index + 1}</strong>
      <span>
        ${escapeHtml(item.label)}
        <small>${escapeHtml(item.detail)}</small>
      </span>
      <b>${escapeHtml(item.status)}</b>
    </div>
  `).join("");

  document.querySelector("#boardroomGates").innerHTML = model.gates.map((gate, index) => `
    <div class="boardroom-gate ${escapeHtml(gate.statusClass)}">
      <strong>${index + 1}</strong>
      <span>
        ${escapeHtml(gate.label)}
        <small>${escapeHtml(gate.detail)}</small>
      </span>
      <b>${escapeHtml(gate.status)}</b>
    </div>
  `).join("");

  document.querySelector("#boardroomMemo").innerHTML = buildBoardroomSnapshotText(model)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");
}

function getBoardroomSnapshotModel() {
  const demo = getDemoFlightDeckModel();
  const market = getActiveMarketOpportunity();
  const founder = getFounderWorkbenchModel();
  const ledger = getTrustRevenueLedgerModel();
  const callSheet = getFounderCallSheetModel();
  const revenue = getRevenueDeskModel();
  const success = getSupplierSuccessModel();
  const demandCount = getDemandSignals().reduce((total, signal) => total + Number(signal.count || 1), 0);
  const activeArr = ledger.activeListingArr || revenue.annualRevenue || 0;
  const directPipeline = ledger.directPipeline || 0;
  const nextPackageArr = ledger.nextPackageArr || callSheet.recommendedPackage.annualRevenue || 0;
  const trustDebt = Number(ledger.trustDebt || 0);
  const score = Math.max(0, Math.min(100, Math.round(
    demo.score * 0.28
    + founder.score * 0.28
    + ledger.score * 0.24
    + Math.min(12, demandCount)
    + Math.min(8, callSheet.cards.length * 2)
    - Math.min(10, trustDebt)
  )));
  const badge = score >= 84 ? "Investor ready" : score >= 68 ? "Proof story" : "Tighten proof";
  const marketLabel = ledger.marketLabel || market.title || `${market.region} ${market.category}`;
  const firstSupplier = callSheet.cards[0]?.supplier || success.callFirst?.profile?.supplier || "first anchor supplier";
  const firstAsk = callSheet.cards[0]?.ask || "close the first paid listing package";
  const summary = `${marketLabel} has USD ${activeArr.toLocaleString()} active listing ARR, USD ${directPipeline.toLocaleString()} direct enquiry pipeline, ${demandCount} demand signal${demandCount === 1 ? "" : "s"}, and ${trustDebt} trust gap${trustDebt === 1 ? "" : "s"} before scale.`;

  return {
    title: `${marketLabel} boardroom snapshot`,
    badge,
    score,
    summary,
    marketLabel,
    firstSupplier,
    firstAsk,
    activeArr,
    directPipeline,
    nextPackageArr,
    demandCount,
    trustDebt,
    metrics: [
      { label: "active listing ARR", value: `USD ${activeArr.toLocaleString()}` },
      { label: "direct pipeline", value: `USD ${directPipeline.toLocaleString()}` },
      { label: "next package ARR", value: `USD ${nextPackageArr.toLocaleString()}` },
      { label: "rental take", value: "0%" }
    ],
    thesis: [
      {
        label: "Wedge",
        detail: `Start with ${marketLabel}, one narrow category page, and supplier listings that buyers can trust.`,
        status: "Focused"
      },
      {
        label: "Monetization",
        detail: "Phase one charges USD 9 monthly or USD 99 yearly per active equipment listing, with rental payment kept direct.",
        status: "Clean"
      },
      {
        label: "Moat",
        detail: "Verified inventory, documents, availability, response history, demand gaps, and supplier trust proof compound into a category ledger.",
        status: "Data"
      },
      {
        label: "Scale rule",
        detail: "Open more supply only when trust, response, renewal protection, and paid listing activation can support the buyer demand.",
        status: "Disciplined"
      }
    ],
    gates: getBoardroomGates({ demo, founder, ledger, callSheet, success, demandCount, activeArr, directPipeline, nextPackageArr, trustDebt }),
    nextMove: `Call ${firstSupplier}: ${firstAsk}`
  };
}

function getBoardroomGates(context) {
  return [
    {
      label: "Demo clarity",
      detail: `${context.demo.scenes.length} guided scenes cover buyer, supplier, and founder workflows with a copy-ready story.`,
      status: context.demo.score >= 84 ? "Ready" : "Tighten",
      statusClass: context.demo.score >= 84 ? "ready" : "watch"
    },
    {
      label: "Demand proof",
      detail: `${context.demandCount} demand signal${context.demandCount === 1 ? "" : "s"} support the selected category wedge.`,
      status: context.demandCount >= 6 ? "Strong" : "Build",
      statusClass: context.demandCount >= 6 ? "ready" : "watch"
    },
    {
      label: "Revenue proof",
      detail: `USD ${context.activeArr.toLocaleString()} active listing ARR and USD ${context.nextPackageArr.toLocaleString()} next package ARR are modeled before any rental commission.`,
      status: context.activeArr ? "Live" : "Model",
      statusClass: context.activeArr ? "ready" : "watch"
    },
    {
      label: "Trust debt",
      detail: `${context.trustDebt} proof gap${context.trustDebt === 1 ? "" : "s"} should be reduced before pushing more buyer traffic.`,
      status: context.trustDebt <= 4 ? "Manage" : "Fix",
      statusClass: context.trustDebt <= 4 ? "ready" : "risk"
    },
    {
      label: "Supplier close",
      detail: `${context.callSheet.cards.length} supplier call card${context.callSheet.cards.length === 1 ? "" : "s"} are ready for demand-backed listing outreach.`,
      status: context.callSheet.score >= 80 ? "Call" : "Prepare",
      statusClass: context.callSheet.score >= 80 ? "ready" : "watch"
    },
    {
      label: "Founder control",
      detail: `Founder workbench score is ${context.founder.score}/100, keeping demand, trust, activation, and listing ARR in one operating loop.`,
      status: context.founder.score >= 80 ? "Controlled" : "Watch",
      statusClass: context.founder.score >= 80 ? "ready" : "watch"
    }
  ];
}

function renderPilotPack() {
  const root = document.querySelector("#pilotPackWeeks");
  if (!root) return;

  const model = getPilotPackModel();
  setText("#pilotPackTitle", model.title);
  setText("#pilotPackBadge", model.badge);

  document.querySelector("#pilotPackScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${escapeHtml(model.summary)}</span>
  `;

  document.querySelector("#pilotPackMetrics").innerHTML = model.metrics.map((metric) => `
    <span>
      <strong>${escapeHtml(metric.value)}</strong>
      ${escapeHtml(metric.label)}
    </span>
  `).join("");

  root.innerHTML = model.weeks.map((week) => `
    <div class="pilot-pack-week ${escapeHtml(week.statusClass)}">
      <strong>${escapeHtml(week.window)}</strong>
      <span>
        ${escapeHtml(week.label)}
        <small>${escapeHtml(week.detail)}</small>
      </span>
      <em>${escapeHtml(week.owner)}</em>
      <b>${escapeHtml(week.status)}</b>
    </div>
  `).join("");

  document.querySelector("#pilotPackGates").innerHTML = model.gates.map((gate, index) => `
    <div class="pilot-pack-gate ${escapeHtml(gate.statusClass)}">
      <strong>${index + 1}</strong>
      <span>
        ${escapeHtml(gate.label)}
        <small>${escapeHtml(gate.detail)}</small>
      </span>
      <b>${escapeHtml(gate.status)}</b>
    </div>
  `).join("");

  document.querySelector("#pilotPackMemo").innerHTML = buildPilotPackText(model)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");
}

function getPilotPackModel() {
  const boardroom = getBoardroomSnapshotModel();
  const launch = getLaunchRoomModel();
  const twin = getMarketTwinModel();
  const activation = getListingActivationModel();
  const callSheet = getFounderCallSheetModel();
  const success = getSupplierSuccessModel();
  const market = getActiveMarketOpportunity();
  const active = activation.active || launch.active || twin.active || market;
  const marketLabel = boardroom.marketLabel || active.title || `${active.region} ${active.category}`;
  const firstSupplier = boardroom.firstSupplier || callSheet.cards[0]?.supplier || success.callFirst?.profile?.supplier || "first anchor supplier";
  const recommendedPackage = activation.recommendedPackage || callSheet.recommendedPackage || { label: "Starter proof package", listings: 3, monthlyRevenue: 27, annualRevenue: 297 };
  const pilotArr = Math.max(boardroom.nextPackageArr, recommendedPackage.annualRevenue || 0, launch.firstWeekArr || 0);
  const pilotListings = Math.max(recommendedPackage.listings || 0, twin.totalListings || 0, active.launchListings || 0);
  const trustDebt = boardroom.trustDebt;
  const readyGateCount = activation.readyGateCount || 0;
  const launchScore = launch.score || 0;
  const twinScore = twin.score || 0;
  const activationScore = activation.activationScore || 0;
  const score = Math.max(0, Math.min(100, Math.round(
    boardroom.score * 0.3
    + launchScore * 0.22
    + twinScore * 0.2
    + activationScore * 0.18
    + Math.min(10, callSheet.cards.length * 2)
  )));
  const badge = score >= 84 ? "Pilot ready" : score >= 68 ? "30-day sprint" : "Prepare pilot";
  const weeks = getPilotPackWeeks({
    marketLabel,
    firstSupplier,
    recommendedPackage,
    boardroom,
    launch,
    twin,
    activation,
    callSheet,
    pilotArr,
    pilotListings,
    readyGateCount,
    trustDebt
  });
  const gates = getPilotPackGates({
    boardroom,
    launch,
    twin,
    activation,
    callSheet,
    recommendedPackage,
    trustDebt,
    pilotArr,
    pilotListings
  });
  const summary = `${marketLabel} pilot focuses on ${firstSupplier}, ${recommendedPackage.listings} paid listing${recommendedPackage.listings === 1 ? "" : "s"}, USD ${pilotArr.toLocaleString()} modeled listing ARR, and ${trustDebt} trust gap${trustDebt === 1 ? "" : "s"} to fix before heavier traffic.`;

  return {
    title: `${marketLabel} 30-day pilot`,
    badge,
    score,
    summary,
    marketLabel,
    firstSupplier,
    recommendedPackage,
    pilotArr,
    pilotListings,
    trustDebt,
    readyGateCount,
    metrics: [
      { label: "pilot listing ARR", value: `USD ${pilotArr.toLocaleString()}` },
      { label: "target listings", value: String(pilotListings || recommendedPackage.listings) },
      { label: "first supplier", value: firstSupplier },
      { label: "rental take", value: "0%" }
    ],
    weeks,
    gates,
    nextMove: weeks.find((week) => week.statusClass !== "ready")?.label || weeks[0]?.label || "Start pilot"
  };
}

function getPilotPackWeeks(context) {
  const launchReady = context.launch.score >= 68;
  const activationReady = context.activation.activationScore >= 68;
  const twinVerdict = context.twin.verdict?.label || "Build proof first";
  const callCount = context.callSheet.cards.length;

  return [
    {
      window: "Days 1-7",
      label: "Close the anchor supplier",
      detail: `Call ${context.firstSupplier}, show demand proof, and offer ${context.recommendedPackage.label} for ${context.recommendedPackage.listings} listing${context.recommendedPackage.listings === 1 ? "" : "s"}.`,
      owner: "Founder",
      status: callCount ? "Call" : "Prep",
      statusClass: callCount ? "ready" : "watch"
    },
    {
      window: "Days 8-14",
      label: "Publish verified listing shells",
      detail: `${context.marketLabel} needs photos, specs, availability, and direct lead routes before buyer traffic is trusted.`,
      owner: "Supplier",
      status: activationReady ? "Publish" : "Sprint",
      statusClass: activationReady ? "ready" : "watch"
    },
    {
      window: "Days 15-21",
      label: "Open controlled direct enquiries",
      detail: `${twinVerdict}. Route only proof-backed enquiries while measuring supplier response and buyer clarity.`,
      owner: "Success",
      status: launchReady ? "Route" : "Control",
      statusClass: launchReady ? "ready" : "watch"
    },
    {
      window: "Days 22-30",
      label: "Review ARR, proof, and renewal story",
      detail: `Compare USD ${context.pilotArr.toLocaleString()} modeled ARR against trust debt, supplier response, proof completion, and direct-payment discipline.`,
      owner: "Founder",
      status: context.trustDebt <= 4 ? "Review" : "Fix",
      statusClass: context.trustDebt <= 4 ? "ready" : "risk"
    }
  ];
}

function getPilotPackGates(context) {
  const readyActivation = context.activation.readyGateCount || 0;
  const readyCallCards = context.callSheet.cards.length;
  const proofGap = context.trustDebt;
  const twinRiskGaps = context.twin.verdict?.riskGaps || 0;

  return [
    {
      label: "Supplier call gate",
      detail: `${readyCallCards} supplier call card${readyCallCards === 1 ? "" : "s"} are available for demand-backed outreach.`,
      status: readyCallCards ? "Ready" : "Build",
      statusClass: readyCallCards ? "ready" : "watch"
    },
    {
      label: "Activation gate",
      detail: `${readyActivation}/${context.activation.gates?.length || 0} activation gate${(context.activation.gates?.length || 0) === 1 ? "" : "s"} are ready for paid listing go-live.`,
      status: readyActivation >= 3 ? "Sprint" : "Prepare",
      statusClass: readyActivation >= 3 ? "ready" : "watch"
    },
    {
      label: "Trust gate",
      detail: `${proofGap} trust gap${proofGap === 1 ? "" : "s"} must be visible in the pilot review before traffic scales.`,
      status: proofGap <= 4 ? "Manage" : "Fix",
      statusClass: proofGap <= 4 ? "ready" : "risk"
    },
    {
      label: "Twin gate",
      detail: `${twinRiskGaps} market twin risk gap${twinRiskGaps === 1 ? "" : "s"} remain before aggressive page growth.`,
      status: twinRiskGaps <= 1 ? "Controlled" : "Hold",
      statusClass: twinRiskGaps <= 1 ? "ready" : "watch"
    },
    {
      label: "Revenue gate",
      detail: `Pilot target is USD ${context.pilotArr.toLocaleString()} listing ARR without touching rental payments.`,
      status: context.pilotArr >= 500 ? "Visible" : "Model",
      statusClass: context.pilotArr >= 500 ? "ready" : "watch"
    },
    {
      label: "Payment gate",
      detail: "Buyer pays the rental company directly. Heavyster proves workflow value before any future booking fee.",
      status: "Locked",
      statusClass: "ready"
    }
  ];
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
        renderWorkflowDock();
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
      renderWorkflowDock();
      showToast(`${state.commandRole} workspace active.`);
    });
  });
}

function openCommandPalette(query = "") {
  const palette = document.querySelector("#commandPalette");
  const input = document.querySelector("#commandPaletteInput");
  commandPaletteQuery = query;
  palette.classList.add("is-open");
  palette.setAttribute("aria-hidden", "false");
  document.body.classList.add("command-palette-open");
  renderCommandPaletteContext();
  input.value = query;
  renderCommandPalette(query);
  window.setTimeout(() => {
    input.focus();
    input.select();
  }, 20);
}

function closeCommandPalette() {
  const palette = document.querySelector("#commandPalette");
  if (!palette) return;
  palette.classList.remove("is-open");
  palette.setAttribute("aria-hidden", "true");
  document.body.classList.remove("command-palette-open");
}

function renderCommandPalette(query = commandPaletteQuery) {
  const root = document.querySelector("#commandPaletteResults");
  if (!root) return;

  renderCommandPaletteContext();
  commandPaletteQuery = query;
  const results = getCommandPaletteResults(query);
  root.innerHTML = results.length ? results.map((item, index) => `
    <button type="button" class="command-palette-item ${escapeHtml(item.typeClass)}" data-command-index="${index}">
      <em>${escapeHtml(item.kind)}</em>
      <span>
        <strong>${escapeHtml(item.label)}</strong>
        <small>${escapeHtml(item.detail)}</small>
      </span>
      <b>${escapeHtml(item.action)}</b>
    </button>
  `).join("") : `
    <div class="command-palette-empty">
      <strong>No exact command found</strong>
      <span>Use the marketplace search or capture the missing demand signal.</span>
    </div>
  `;

  document.querySelectorAll("[data-command-index]").forEach((button) => {
    button.addEventListener("click", () => activateCommandPaletteItem(button.dataset.commandIndex));
  });
}

function renderCommandPaletteContext() {
  const palette = document.querySelector("#commandPalette");
  const eyebrow = document.querySelector("#commandPaletteEyebrow");
  const title = document.querySelector("#commandPaletteTitle");
  const input = document.querySelector("#commandPaletteInput");
  if (!palette || !title || !input) return;

  const role = getActiveWorkflowRole();
  const model = getCommandPaletteContextModel(role);
  palette.dataset.role = role.toLowerCase();
  if (eyebrow) eyebrow.textContent = model.eyebrow;
  title.textContent = model.title;
  input.placeholder = model.placeholder;
  input.setAttribute("aria-label", model.aria);
  renderCommandPaletteQuickActions(role);
}

function getCommandPaletteContextModel(role) {
  if (role === "Supplier") {
    return {
      eyebrow: "Supplier command",
      title: "Open listings, proof, revenue, leads, and supplier tools.",
      placeholder: "Search listing, proof, revenue, lead desk...",
      aria: "Search supplier tools and listings"
    };
  }
  if (role === "Founder") {
    return {
      eyebrow: "Founder command",
      title: "Open demand, trust, launch, ARR, and growth tools.",
      placeholder: "Search market, ledger, launch, supplier hunt...",
      aria: "Search founder growth and control tools"
    };
  }
  return {
    eyebrow: "Buyer command",
    title: "Find equipment, proof, RFQs, and buyer workflow steps.",
    placeholder: "Search crane, supplier, passport, RFQ...",
    aria: "Search buyer equipment and workflow tools"
  };
}

function renderCommandPaletteQuickActions(role) {
  const root = document.querySelector("#commandPaletteQuick");
  if (!root) return;

  root.innerHTML = getCommandPaletteQuickActions(role).map((action, index) => `
    <button type="button" class="${escapeHtml(action.typeClass)}" data-palette-quick-index="${index}">
      <strong>${escapeHtml(action.label)}</strong>
      <span>${escapeHtml(action.detail)}</span>
    </button>
  `).join("");
}

function getCommandPaletteQuickActions(role) {
  if (role === "Supplier") {
    return [
      { label: "Supplier desk", detail: "Control revenue", anchor: "#supplier-workbench", typeClass: "supplier" },
      { label: "Add listing", detail: "Fleet and proof", anchor: "#studio", typeClass: "supplier" },
      { label: "Proof vault", detail: "Verify docs", anchor: "#proof-vault", typeClass: "supplier" },
      { label: "Lead desk", detail: "Reply fast", anchor: "#lead-desk", typeClass: "supplier" }
    ];
  }

  if (role === "Founder") {
    return [
      { label: "Founder desk", detail: "Scale control", anchor: "#founder-workbench", typeClass: "founder" },
      { label: "Market matrix", detail: "Pick wedge", anchor: "#market-signal-matrix", typeClass: "founder" },
      { label: "Call sheet", detail: "Close supply", anchor: "#founder-call-sheet", typeClass: "founder" },
      { label: "Trust ledger", detail: "Protect ARR", anchor: "#trust-revenue-ledger", typeClass: "founder" }
    ];
  }

  return [
    { label: "Crane in UAE", detail: "Search supply", marketplace: { search: "crane", region: "UAE", availability: "all", category: "all" }, anchor: "#marketplace", typeClass: "buyer" },
    { label: "Buyer desk", detail: "Control path", anchor: "#buyer-workbench", typeClass: "buyer" },
    { label: "Trust passport", detail: "Check proof", anchor: "#passport", typeClass: "buyer" },
    { label: "RFQ room", detail: "Ask suppliers", anchor: "#rfq", typeClass: "buyer" }
  ];
}

function activateCommandPaletteQuickAction(index) {
  const action = getCommandPaletteQuickActions(getActiveWorkflowRole())[Number(index)];
  if (!action) return;

  if (action.query) {
    const input = document.querySelector("#commandPaletteInput");
    commandPaletteQuery = action.query;
    if (input) input.value = action.query;
    renderCommandPalette(action.query);
    showToast(`${action.label} loaded.`);
    return;
  }

  if (action.marketplace) {
    state.search = action.marketplace.search ?? state.search;
    state.region = action.marketplace.region ?? state.region;
    state.availability = action.marketplace.availability ?? state.availability;
    state.category = action.marketplace.category ?? state.category;
    saveState();
    closeCommandPalette();
    render();
    const target = document.querySelector(action.anchor || "#marketplace");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    showToast(`${action.label} opened.`);
    return;
  }

  closeCommandPalette();
  openSimplicityTarget(action.anchor, action.label);
}

function getCommandPaletteResults(query = "") {
  const normalized = query.trim().toLowerCase();
  const activeRole = getActiveWorkflowRole();
  const items = sortCommandPaletteForRole(getCommandPaletteItems(), activeRole);
  if (!normalized) {
    return items
      .filter((item) => item.default || getCommandPaletteItemRole(item) === activeRole)
      .slice(0, 12);
  }

  return items
    .map((item) => {
      const matchRank = getCommandPaletteRank(item, normalized);
      return {
        ...item,
        rank: matchRank ? matchRank + getCommandPaletteRoleBoost(item, activeRole) : 0
      };
    })
    .filter((item) => item.rank > 0)
    .sort((a, b) => b.rank - a.rank || a.label.localeCompare(b.label))
    .slice(0, 12);
}

function getCommandPaletteRank(item, query) {
  const haystack = [item.kind, item.label, item.detail, item.keywords].join(" ").toLowerCase();
  const label = String(item.label || "").toLowerCase();
  if (label === query) return 100;
  if (label.startsWith(query)) return 86;
  if (haystack.includes(query)) return 64;
  return query.split(/\s+/).filter((part) => haystack.includes(part)).length * 18;
}

function sortCommandPaletteForRole(items, role) {
  return items
    .map((item, index) => ({ ...item, paletteOrder: index }))
    .sort((a, b) => {
      const roleDiff = getCommandPaletteRoleBoost(b, role) - getCommandPaletteRoleBoost(a, role);
      if (roleDiff) return roleDiff;
      const kindDiff = getCommandPaletteKindPriority(a, role) - getCommandPaletteKindPriority(b, role);
      if (kindDiff) return kindDiff;
      const defaultDiff = Number(Boolean(b.default)) - Number(Boolean(a.default));
      if (defaultDiff) return defaultDiff;
      return a.paletteOrder - b.paletteOrder;
    });
}

function getCommandPaletteRoleBoost(item, role) {
  const itemRole = getCommandPaletteItemRole(item);
  if (itemRole === role) return 32;
  if (itemRole === "Shared") return 12;
  if (item.anchor === "#marketplace" && role === "Buyer") return 10;
  if (item.anchor === "#pricing" && role === "Supplier") return 10;
  return 0;
}

function getCommandPaletteKindPriority(item, role) {
  if (item.default && getCommandPaletteItemRole(item) === role && !item.role) return 0;
  if (item.role === role) return 1;
  if (role === "Buyer" && item.kind === "Equipment") return 2;
  if (role === "Supplier" && item.kind === "Supplier") return 2;
  if (role === "Founder" && item.kind === "Market") return 2;
  if (item.kind === "Action") return 3;
  return 4;
}

function getCommandPaletteItemRole(item) {
  if (item.role) return item.role;
  if (item.kind === "Equipment") return "Buyer";
  if (item.kind === "Supplier") return "Supplier";
  if (item.kind === "Market") return "Founder";
  if (item.kind === "Action" && item.anchor === "#pricing") return "Shared";
  if (item.kind === "Action") return "Founder";
  return "Shared";
}

function getCommandPaletteItems() {
  const supplierMap = new Map();
  listings.forEach((listing) => {
    const existing = supplierMap.get(listing.supplier) || {
      supplier: listing.supplier,
      regions: new Set(),
      categories: new Set(),
      listingIds: []
    };
    existing.regions.add(listing.region);
    existing.categories.add(listing.category);
    existing.listingIds.push(listing.id);
    supplierMap.set(listing.supplier, existing);
  });

  const moduleItems = commandModules.map((module) => ({
    kind: module.role,
    typeClass: module.role.toLowerCase(),
    label: module.label,
    detail: `${module.signal} - ${module.role} workflow`,
    keywords: `${module.role} ${module.signal} ${module.anchor}`,
    anchor: module.anchor,
    role: module.role,
    action: "Open",
    default: ["Marketplace", "Command", "Founder Desk", "Market Matrix", "Supplier Studio", "Revenue Desk", "Proof of Demand", "Supplier Commitment", "Listing Activation", "Trust Ledger", "Pricing"].includes(module.label)
  }));

  const listingItems = listings.map((listing) => ({
    kind: "Equipment",
    typeClass: "equipment",
    label: listing.name,
    detail: `${listing.supplier} - ${listing.city}, ${listing.region} - ${getAvailabilityLabel(listing.availability)}`,
    keywords: `${listing.category} ${listing.specs} ${listing.documents.join(" ")}`,
    anchor: "#marketplace",
    listingId: listing.id,
    action: "View",
    default: listing.id === state.selectedListingId
  }));

  const supplierItems = [...supplierMap.values()].map((supplier) => ({
    kind: "Supplier",
    typeClass: "supplier",
    label: supplier.supplier,
    detail: `${supplier.listingIds.length} listing${supplier.listingIds.length === 1 ? "" : "s"} - ${[...supplier.categories].join(", ")} - ${[...supplier.regions].join(", ")}`,
    keywords: `${[...supplier.categories].join(" ")} ${[...supplier.regions].join(" ")}`,
    anchor: "#storefront",
    supplier: supplier.supplier,
    listingId: supplier.listingIds[0],
    action: "Open",
    default: supplier.listingIds.includes(state.selectedListingId)
  }));

  const marketItems = getMarketOpportunities().slice(0, 8).map((market) => ({
    kind: "Market",
    typeClass: "market",
    label: market.title || `${market.region} ${market.category}`,
    detail: `${market.demandCount} demand signal${market.demandCount === 1 ? "" : "s"} - ${market.visibleSupply} live supply - USD ${market.annualRevenue.toLocaleString()} ARR`,
    keywords: `${market.region} ${market.category} ${market.persona} ${market.proof.join(" ")}`,
    anchor: "#market-maker",
    marketKey: market.key,
    demandKey: market.signalKey,
    action: "Focus",
    default: market.key === state.activeMarketKey
  }));

  const actionItems = [
    {
      kind: "Action",
      typeClass: "action",
      label: "Run the demo flight deck",
      detail: "Open the five-scene guided story for buyer, supplier, and founder workflows.",
      keywords: "demo story investor boardroom walkthrough flight deck workflow",
      anchor: "#demo-flight-deck",
      action: "Open",
      default: true
    },
    {
      kind: "Action",
      typeClass: "action",
      label: "Open the boardroom snapshot",
      detail: "Review wedge, ARR, direct pipeline, trust debt, and next founder move.",
      keywords: "investor boardroom memo fundraising thesis arr pipeline risk",
      anchor: "#boardroom-snapshot",
      action: "Open",
      default: true
    },
    {
      kind: "Action",
      typeClass: "action",
      label: "Open the 30-day pilot pack",
      detail: "Turn the boardroom read into supplier calls, activation gates, controlled enquiries, and pilot ARR review.",
      keywords: "pilot 30 day sprint launch execution supplier calls activation arr",
      anchor: "#pilot-pack",
      action: "Open",
      default: true
    },
    {
      kind: "Action",
      typeClass: "action",
      label: "Create a demand signal",
      detail: "Capture missing equipment demand and turn it into supplier acquisition.",
      keywords: "missing search demand capture supplier hunt",
      anchor: "#admin",
      action: "Capture",
      default: true
    },
    {
      kind: "Action",
      typeClass: "action",
      label: "Review phase-one monetization",
      detail: "Open listing pricing, annual revenue, and future 1% booking fee model.",
      keywords: "pricing monetization billing commission revenue",
      anchor: "#pricing",
      action: "Open",
      default: true
    }
  ];

  return [...actionItems, ...listingItems, ...supplierItems, ...marketItems, ...moduleItems];
}

function activateCommandPaletteItem(index) {
  const item = getCommandPaletteResults(commandPaletteQuery)[Number(index)];
  if (!item) return;

  if (item.listingId) {
    state.selectedListingId = item.listingId;
    state.search = item.supplier || "";
    state.region = "all";
    state.availability = "all";
    state.category = "all";
  }

  if (item.marketKey) {
    state.activeMarketKey = item.marketKey;
    if (item.demandKey) state.activeDemandKey = item.demandKey;
  }

  if (item.role) {
    state.commandRole = item.role;
  }

  saveState();
  closeCommandPalette();
  render();
  const target = document.querySelector(item.anchor);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  showToast(`${item.label} opened.`);
}

function getAvailabilityLabel(value) {
  if (value === "available") return "available now";
  if (value === "soon") return "available soon";
  return "call to confirm";
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
  const fleetImport = getFleetImportModel(selected);
  const proofVault = getProofVaultModel(selected);
  const revenueDesk = getRevenueDeskModel(selected);
  const leadDesk = getLeadDeskModel();
  const accountHealth = getAccountHealthModel(selected);
  const market = getActiveMarketOpportunity();
  const supplierSuccess = getSupplierSuccessModel();
  const demandCount = getDemandSignals().reduce((total, signal) => total + Number(signal.count || 1), 0);
  const buyerScore = Math.round((passport.score + rfq.averageScore + award.winner.total + quote.score + mobilize.score) / 5);
  const supplierScore = Math.round((storefront.score + yard.score + leadDesk.active.score + proofVault.score + revenueDesk.score + accountHealth.score) / 6);
  const founderScore = getFounderWorkbenchModel().score;
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
    fleetImport,
    proofVault,
    revenueDesk,
    leadDesk,
    accountHealth,
    market,
    supplierSuccess,
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
        detail: `${leadDesk.hotCount} hot lead${leadDesk.hotCount === 1 ? "" : "s"} and ${accountHealth.riskCount} risk signal${accountHealth.riskCount === 1 ? "" : "s"} for ${leadDesk.profile.supplier}.`
      },
      {
        label: "Founder demand",
        value: `${demandCount} signals`,
        detail: `${market.region} ${market.category} is the current expansion page.`
      },
      {
        label: "Phase-one money",
        value: `USD ${revenueDesk.monthlyRevenue.toLocaleString()}/mo`,
        detail: `${revenueDesk.paidListings} paid listing${revenueDesk.paidListings === 1 ? "" : "s"}, ${revenueDesk.renewalRiskCount} at renewal risk, 0% rental take.`
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
      detail: `${context.fleetImport.totalRows} import row${context.fleetImport.totalRows === 1 ? "" : "s"}, ${context.accountHealth.riskCount} health risk signal${context.accountHealth.riskCount === 1 ? "" : "s"}, ${context.revenueDesk.paidListings} paid listing${context.revenueDesk.paidListings === 1 ? "" : "s"}, USD ${context.revenueDesk.annualRevenue.toLocaleString()} listing ARR, ${context.yard.reviewCount} listing${context.yard.reviewCount === 1 ? "" : "s"} need freshness review.`,
      next: "Use Account Health to choose the save action, then protect renewals, proof, leads, and yard freshness in that order."
    };
  }

  if (role === "Founder") {
    return {
      title: `${context.market.region} ${context.market.category} growth workspace`,
      score: `${context.founderScore}/100 launch score`,
      detail: `${context.demandCount} demand signals are active. ${context.supplierSuccess.atRiskCount} supplier account${context.supplierSuccess.atRiskCount === 1 ? "" : "s"} need attention today. Current page target is ${context.market.slug}.`,
      next: "Start with Supplier Success Queue, save weak accounts, then use Growth and Market Map to recruit the next demand-led supply."
    };
  }

  return {
    title: `${context.selected.name} buyer workspace`,
    score: `${context.buyerScore}/100 buyer readiness`,
    detail: `${context.rfq.listings.length} machine${context.rfq.listings.length === 1 ? "" : "s"} in RFQ flow, ${context.quote.missingCount} quote term${context.quote.missingCount === 1 ? "" : "s"} unclear, award status ${context.award.badge.toLowerCase()}.`,
    next: "Start with Jobsite, confirm Trust Passport, then move through RFQ, Award, Quote Guard, and Mobilize."
  };
}

function renderFounderWorkbench() {
  const root = document.querySelector("#founderWorkbenchFlow");
  if (!root) return;

  const model = getFounderWorkbenchModel();
  setText("#founderWorkbenchTitle", model.title);
  setText("#founderWorkbenchBadge", model.badge);

  document.querySelector("#founderWorkbenchScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${escapeHtml(model.summary)}</span>
  `;

  document.querySelector("#founderWorkbenchNext").innerHTML = `
    <span>Next best move</span>
    <strong>${escapeHtml(model.nextStage.label)}</strong>
    <p>${escapeHtml(model.nextStage.detail)}</p>
    <button type="button" class="solid-button" data-founder-target="${escapeHtml(model.nextStage.anchor)}" data-founder-label="${escapeHtml(model.nextStage.label)}">${escapeHtml(model.nextStage.action)}</button>
  `;

  root.innerHTML = model.stages.map((stage, index) => `
    <button type="button" class="founder-workbench-step ${escapeHtml(stage.statusClass)}" data-founder-target="${escapeHtml(stage.anchor)}" data-founder-label="${escapeHtml(stage.label)}">
      <em>${index + 1}</em>
      <span>
        <strong>${escapeHtml(stage.label)}</strong>
        ${escapeHtml(stage.detail)}
      </span>
      <b>${stage.score}/100</b>
      <small>${escapeHtml(stage.status)}</small>
    </button>
  `).join("");

  document.querySelector("#founderWorkbenchPacket").innerHTML = model.packet.map((item) => `
    <div>
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.value)}</strong>
    </div>
  `).join("");

  document.querySelectorAll("[data-founder-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector(button.dataset.founderTarget);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.location.hash = button.dataset.founderTarget;
      showToast(`${button.dataset.founderLabel || "Founder step"} opened.`);
    });
  });
}

function getFounderWorkbenchModel() {
  const market = getActiveMarketOpportunity();
  const success = getSupplierSuccessModel();
  const pageFactory = getPageFactoryModel();
  const launch = getLaunchRoomModel();
  const twin = getMarketTwinModel();
  const flywheel = getLiquidityFlywheelModel();
  const autopilot = getFounderAutopilotModel();
  const exchange = getDemandExchangeModel();
  const proof = getProofDemandRoomModel();
  const commitment = getSupplierCommitmentModel();
  const activation = getListingActivationModel();
  const ledger = getTrustRevenueLedgerModel();
  const marketLabel = ledger.marketLabel || market.title || `${market.region} ${market.category}`;
  const demandScore = Math.max(0, Math.min(100, Math.round(
    market.score * 0.45
    + Math.min(30, market.demandCount * 7)
    + Math.min(16, market.urgencyHits * 8)
  )));
  const stages = [
    makeFounderStage({
      label: "Demand proof",
      anchor: "#admin",
      score: demandScore,
      detail: `${market.demandCount} buyer signal${market.demandCount === 1 ? "" : "s"} and ${market.urgencyHits} urgent signal${market.urgencyHits === 1 ? "" : "s"} support ${market.region} ${market.category}.`,
      action: demandScore >= 84 ? "Use demand" : "Capture demand"
    }),
    makeFounderStage({
      label: "Supplier success",
      anchor: "#supplier-success",
      score: success.averageHealth,
      detail: `${success.atRiskCount} at-risk account${success.atRiskCount === 1 ? "" : "s"}, ${success.hotLeadCount} hot lead${success.hotLeadCount === 1 ? "" : "s"}, USD ${success.expansionArr.toLocaleString()} expansion ARR.`,
      action: success.atRiskCount ? "Call first supplier" : "Grow accounts"
    }),
    makeFounderStage({
      label: "Page Factory",
      anchor: "#page-factory",
      score: pageFactory.active?.readiness || 0,
      detail: `${pageFactory.readyCount} launch-ready page${pageFactory.readyCount === 1 ? "" : "s"}, ${pageFactory.prepareCount} prepare page${pageFactory.prepareCount === 1 ? "" : "s"}, USD ${pageFactory.totalArr.toLocaleString()} modeled ARR.`,
      action: pageFactory.readyCount ? "Open page queue" : "Prepare page"
    }),
    makeFounderStage({
      label: "Launch Room",
      anchor: "#launch-room",
      score: launch.score,
      detail: `${launch.targetSuppliers} supplier invite${launch.targetSuppliers === 1 ? "" : "s"} and USD ${launch.firstWeekArr.toLocaleString()} first-week ARR target.`,
      action: launch.score >= 84 ? "Run sprint" : "Prep sprint"
    }),
    makeFounderStage({
      label: "Market Twin",
      anchor: "#market-twin",
      score: twin.score,
      detail: `${twin.scenario?.label || "Scenario"} models ${twin.totalListings || 0} paid listing${twin.totalListings === 1 ? "" : "s"} and ${twin.demandCoverage || 0}% demand coverage.`,
      action: twin.score >= 84 ? "Use scenario" : "Tune scenario"
    }),
    makeFounderStage({
      label: "Flywheel",
      anchor: "#liquidity-flywheel",
      score: flywheel.score,
      detail: `${flywheel.bottleneck?.label || "Marketplace loop"} is the current bottleneck; strongest loop is ${flywheel.strongest?.label || "still forming"}.`,
      action: flywheel.score >= 84 ? "Protect loop" : "Fix bottleneck"
    }),
    makeFounderStage({
      label: "Autopilot",
      anchor: "#founder-autopilot",
      score: autopilot.score,
      detail: `${autopilot.primary?.owner || "Founder"} owns ${autopilot.primary?.label || "the next command"} with USD ${autopilot.totalImpactArr.toLocaleString()} ARR impact modeled.`,
      action: autopilot.openCommandCount ? "Dispatch command" : "Review commands"
    }),
    makeFounderStage({
      label: "Demand Exchange",
      anchor: "#demand-exchange",
      score: exchange.score,
      detail: `Supplier pull is ${exchange.badge.toLowerCase()} with USD ${exchange.exchangeArr.toLocaleString()} exchange ARR across demand tickets.`,
      action: exchange.score >= 82 ? "Invite supplier" : "Warm market"
    }),
    makeFounderStage({
      label: "Proof of Demand",
      anchor: "#proof-demand",
      score: proof.score,
      detail: `${proof.badge} sales proof with USD ${proof.proofValue.toLocaleString()} proof value and ${proof.primaryObjection?.label || "supplier objection"} answered.`,
      action: proof.score >= 84 ? "Use proof pack" : "Build proof"
    }),
    makeFounderStage({
      label: "Commitment",
      anchor: "#supplier-commitment",
      score: commitment.score,
      detail: `${commitment.recommendedPackage?.label || "Starter package"} models ${commitment.recommendedPackage?.listings || 0} paid listing${commitment.recommendedPackage?.listings === 1 ? "" : "s"} and ${commitment.readyGateCount}/${commitment.gates.length} ready gates.`,
      action: commitment.score >= 84 ? "Close package" : "Clear gates"
    }),
    makeFounderStage({
      label: "Activation",
      anchor: "#listing-activation",
      score: activation.activationScore,
      detail: `${activation.readyQueueCount}/${activation.queue.length} activation items and ${activation.readyGateCount}/${activation.gates.length} launch gates are ready.`,
      action: activation.activationScore >= 84 ? "Publish listings" : "Run activation"
    }),
    makeFounderStage({
      label: "Trust Ledger",
      anchor: "#trust-revenue-ledger",
      score: ledger.score,
      detail: `USD ${ledger.activeListingArr.toLocaleString()} active listing ARR, USD ${ledger.directPipeline.toLocaleString()} direct pipeline, ${ledger.trustDebt} trust gap${ledger.trustDebt === 1 ? "" : "s"}.`,
      action: ledger.score >= 84 ? "Scale carefully" : "Protect ledger"
    })
  ];
  const score = Math.round(stages.reduce((total, stage) => total + stage.score, 0) / stages.length);
  const nextStage = [...stages]
    .filter((stage) => stage.status !== "Ready")
    .sort((a, b) => a.score - b.score)[0] || stages[stages.length - 1];
  const badge = score >= 84 && ledger.trustDebt <= 2 ? "Scale-ready" : score >= 70 ? "Founder control" : "Fix first";
  const summary = `${marketLabel} has ${market.demandCount} demand signal${market.demandCount === 1 ? "" : "s"}, USD ${ledger.activeListingArr.toLocaleString()} active listing ARR, ${ledger.trustDebt} trust gap${ledger.trustDebt === 1 ? "" : "s"}, and ${flywheel.bottleneck?.label || "market proof"} as the current control point.`;

  return {
    market,
    success,
    pageFactory,
    launch,
    twin,
    flywheel,
    autopilot,
    exchange,
    proof,
    commitment,
    activation,
    ledger,
    marketLabel,
    score,
    badge,
    title: `${marketLabel} founder desk`,
    summary,
    stages,
    nextStage,
    packet: [
      { label: "Market", value: marketLabel },
      { label: "Scale verdict", value: `${badge} - ${score}/100` },
      { label: "Active listing ARR", value: `USD ${ledger.activeListingArr.toLocaleString()}` },
      { label: "Direct enquiry pipeline", value: `USD ${ledger.directPipeline.toLocaleString()}` },
      { label: "Current bottleneck", value: flywheel.bottleneck?.label || "Collect market proof" },
      { label: "Next move", value: `${nextStage.label}: ${nextStage.action}` },
      { label: "Phase-one rule", value: "Scale paid listings and verified direct enquiries before any rental payment or commission workflow" }
    ]
  };
}

function makeFounderStage(stage) {
  const status = stage.score >= 84 ? "Ready" : stage.score >= 68 ? "Review" : "Gap";
  return {
    ...stage,
    status,
    statusClass: status.toLowerCase()
  };
}

function renderFounderMorningBrief() {
  const root = document.querySelector("#founderMorningSignals");
  if (!root) return;

  const model = getFounderMorningBriefModel();

  setText("#founderMorningTitle", model.title);
  setText("#founderMorningBadge", model.badge);

  document.querySelector("#founderMorningScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${escapeHtml(model.summary)}</span>
  `;

  document.querySelector("#founderMorningMetrics").innerHTML = model.metrics.map((metric) => `
    <span><strong>${escapeHtml(metric.value)}</strong>${escapeHtml(metric.label)}</span>
  `).join("");

  root.innerHTML = model.signals.map((signal) => `
    <button type="button" class="founder-morning-signal ${escapeHtml(signal.statusClass)}" data-morning-target="${escapeHtml(signal.anchor)}">
      <strong>${escapeHtml(signal.value)}</strong>
      <span>
        ${escapeHtml(signal.label)}
        <small>${escapeHtml(signal.detail)}</small>
      </span>
      <b>${escapeHtml(signal.status)}</b>
    </button>
  `).join("");

  document.querySelector("#founderMorningScript").innerHTML = model.script.map((line, index) => `
    <div class="founder-morning-script-line ${escapeHtml(line.statusClass)}">
      <strong>${index + 1}</strong>
      <span>
        ${escapeHtml(line.label)}
        <small>${escapeHtml(line.detail)}</small>
      </span>
    </div>
  `).join("");

  document.querySelector("#founderMorningLanes").innerHTML = model.lanes.map((lane) => `
    <button type="button" class="founder-morning-lane ${escapeHtml(lane.statusClass)}" data-morning-target="${escapeHtml(lane.anchor)}">
      <span>${escapeHtml(lane.label)}<small>${escapeHtml(lane.detail)}</small></span>
      <b>${escapeHtml(lane.status)}</b>
    </button>
  `).join("");

  document.querySelector("#founderMorningBrief").innerHTML = buildFounderMorningBriefText(model)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");

  document.querySelectorAll("[data-morning-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector(button.dataset.morningTarget);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.location.hash = button.dataset.morningTarget;
      showToast("Founder morning lane opened.");
    });
  });
}

function getFounderMorningBriefModel() {
  const daily = getFounderDailyMovesModel();
  const founder = daily.founder;
  const success = daily.success;
  const twin = daily.twin;
  const activation = daily.activation;
  const ledger = daily.ledger;
  const matrix = daily.matrix;
  const firstMove = daily.moves[0];
  const firstGuardrail = daily.guardrails.find((guardrail) => guardrail.statusClass !== "ready") || daily.guardrails[0];
  const matrixCell = matrix.topCells[0] || matrix.activeCell;
  const launchStatus = twin.verdict?.statusClass || (twin.score >= 84 ? "ready" : twin.score >= 68 ? "review" : "gap");
  const trustStatus = ledger.trustDebt <= 2 && ledger.score >= 74 ? "ready" : ledger.trustDebt <= 5 ? "review" : "gap";
  const supplierStatus = success.callFirst.priorityClass === "hot" ? "gap" : success.callFirst.priorityClass === "grow" ? "ready" : "review";
  const activationStatus = activation.activationScore >= 84 ? "ready" : activation.activationScore >= 68 ? "review" : "gap";
  const matrixStatus = matrixCell?.statusClass || "review";
  const signals = [
    makeFounderMorningSignal({
      label: "Daily pressure",
      value: `${daily.openMoveCount} open`,
      detail: `First command is ${firstMove.label}.`,
      anchor: "#founder-daily",
      statusClass: daily.openMoveCount >= 3 ? "gap" : daily.openMoveCount ? "review" : "ready"
    }),
    makeFounderMorningSignal({
      label: "Supplier call",
      value: success.callFirst.profile.supplier,
      detail: `${success.callFirst.reason}. ${success.callFirst.primaryAction.detail}`,
      anchor: "#supplier-success",
      statusClass: supplierStatus
    }),
    makeFounderMorningSignal({
      label: "Trust gate",
      value: `${ledger.score}/100`,
      detail: `${ledger.trustDebt} trust gap${ledger.trustDebt === 1 ? "" : "s"} before heavier traffic.`,
      anchor: "#trust-revenue-ledger",
      statusClass: trustStatus
    }),
    makeFounderMorningSignal({
      label: "Launch verdict",
      value: twin.verdict?.label || "Run twin",
      detail: twin.verdict?.rule || "Check supply, proof, response, revenue, and payment gates before scaling.",
      anchor: "#market-twin",
      statusClass: launchStatus
    }),
    makeFounderMorningSignal({
      label: "Activation gate",
      value: `${activation.readyGateCount}/${activation.gates.length}`,
      detail: `${activation.recommendedPackage?.label || "Recommended package"} must clear publish and billing gates.`,
      anchor: "#listing-activation",
      statusClass: activationStatus
    }),
    makeFounderMorningSignal({
      label: "Next wedge",
      value: matrixCell ? `${matrixCell.region} ${matrixCell.category}` : "Matrix",
      detail: matrixCell ? matrixCell.summary : "Open the matrix to choose a demand-led wedge.",
      anchor: "#market-signal-matrix",
      statusClass: matrixStatus
    })
  ];
  const gapCount = signals.filter((signal) => signal.statusClass === "gap").length;
  const reviewCount = signals.filter((signal) => signal.statusClass === "review").length;
  const score = Math.max(0, Math.min(100, Math.round(
    daily.score * 0.55
    + founder.score * 0.2
    + ledger.score * 0.15
    + Math.max(0, 100 - gapCount * 14 - reviewCount * 6) * 0.1
  )));
  const badge = gapCount ? "Open carefully" : reviewCount ? "Tight day" : "Ready day";
  const summary = `${daily.marketLabel}: ${firstMove.label} comes first; protect ${firstGuardrail.label.toLowerCase()} while keeping rental payment direct.`;
  const lanes = [
    {
      label: "Call",
      detail: `${success.callFirst.profile.supplier}: ${success.callFirst.primaryAction.label}.`,
      anchor: "#supplier-success",
      status: supplierStatus === "gap" ? "Now" : "Today",
      statusClass: supplierStatus
    },
    {
      label: "Protect",
      detail: `${firstGuardrail.label}: ${firstGuardrail.detail}`,
      anchor: getFounderMorningGuardrailAnchor(firstGuardrail),
      status: firstGuardrail.status,
      statusClass: firstGuardrail.statusClass
    },
    {
      label: "Push",
      detail: matrixCell ? `${matrixCell.region} ${matrixCell.category}: ${matrixCell.action}.` : "Choose the next expansion wedge.",
      anchor: "#market-signal-matrix",
      status: matrixCell?.status || "Scan",
      statusClass: matrixStatus
    },
    {
      label: "Copy",
      detail: "Send the morning brief before opening more market work.",
      anchor: "#founder-morning",
      status: "Brief",
      statusClass: "ready"
    }
  ];
  const script = [
    {
      label: "Start with the highest-friction move",
      detail: `${firstMove.label}: ${firstMove.detail}`,
      statusClass: firstMove.statusClass
    },
    {
      label: "Say the phase-one rule out loud",
      detail: "Listings are SaaS revenue. Buyer and rental company keep rental payment direct.",
      statusClass: "ready"
    },
    {
      label: "Repair the strongest blocker",
      detail: `${firstGuardrail.label}: ${firstGuardrail.detail}`,
      statusClass: firstGuardrail.statusClass
    },
    {
      label: "Only then open growth",
      detail: matrixCell ? `${matrixCell.region} ${matrixCell.category} is the next wedge to review.` : "Use the market matrix before pushing a new wedge.",
      statusClass: matrixStatus
    }
  ];

  return {
    daily,
    founder,
    success,
    twin,
    activation,
    ledger,
    matrix,
    matrixCell,
    firstMove,
    firstGuardrail,
    title: `${daily.marketLabel} morning brief`,
    badge,
    score,
    summary,
    gapCount,
    reviewCount,
    signals,
    script,
    lanes,
    metrics: [
      { label: "ARR in focus", value: `USD ${daily.arrAtStake.toLocaleString()}` },
      { label: "First owner", value: firstMove.owner },
      { label: "Risk signals", value: String(gapCount + reviewCount) },
      { label: "Rental take", value: "0%" }
    ]
  };
}

function makeFounderMorningSignal(signal) {
  const status = signal.statusClass === "ready" ? "Ready" : signal.statusClass === "review" ? "Watch" : "Fix";
  return {
    ...signal,
    status
  };
}

function getFounderMorningGuardrailAnchor(guardrail) {
  const label = `${guardrail.label} ${guardrail.owner}`.toLowerCase();
  if (label.includes("traffic") || label.includes("growth")) return "#market-twin";
  if (label.includes("trust")) return "#trust-revenue-ledger";
  if (label.includes("supplier") || label.includes("success")) return "#supplier-success";
  if (label.includes("activation") || label.includes("revenue")) return "#listing-activation";
  return "#founder-daily";
}

function renderFounderDailyMoves() {
  const root = document.querySelector("#founderDailyQueue");
  if (!root) return;

  const model = getFounderDailyMovesModel();

  setText("#founderDailyTitle", model.title);
  setText("#founderDailyBadge", model.badge);

  document.querySelector("#founderDailyScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${escapeHtml(model.summary)}</span>
  `;

  document.querySelector("#founderDailyMetrics").innerHTML = model.metrics.map((metric) => `
    <span><strong>${escapeHtml(metric.value)}</strong>${escapeHtml(metric.label)}</span>
  `).join("");

  root.innerHTML = model.moves.map((move, index) => `
    <button type="button" class="founder-daily-move ${escapeHtml(move.statusClass)} ${index === 0 ? "is-primary" : ""}" data-daily-target="${escapeHtml(move.anchor)}">
      <strong>${index + 1}</strong>
      <span>
        ${escapeHtml(move.label)}
        <small>${escapeHtml(move.detail)}</small>
      </span>
      <em>${escapeHtml(move.owner)} - ${escapeHtml(move.due)}</em>
      <b>${escapeHtml(move.status)}</b>
    </button>
  `).join("");

  document.querySelector("#founderDailyGuardrails").innerHTML = model.guardrails.map((guardrail, index) => `
    <div class="founder-daily-guardrail ${escapeHtml(guardrail.statusClass)}">
      <strong>${index + 1}</strong>
      <span>
        ${escapeHtml(guardrail.label)}
        <small>${escapeHtml(guardrail.detail)}</small>
      </span>
      <em>${escapeHtml(guardrail.owner)}</em>
      <b>${escapeHtml(guardrail.status)}</b>
    </div>
  `).join("");

  document.querySelector("#founderDailyBrief").innerHTML = buildFounderDailyMovesText(model)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");

  document.querySelectorAll("[data-daily-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector(button.dataset.dailyTarget);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.location.hash = button.dataset.dailyTarget;
      showToast("Founder daily move opened.");
    });
  });
}

function getFounderDailyMovesModel() {
  const founder = getFounderWorkbenchModel();
  const matrix = getMarketSignalMatrixModel();
  const success = founder.success;
  const twin = founder.twin;
  const autopilot = founder.autopilot;
  const activation = founder.activation;
  const ledger = founder.ledger;
  const marketLabel = founder.marketLabel;
  const activationGap = [...activation.queue, ...activation.gates].find((item) => item.statusClass !== "ready") || activation.queue[0];
  const ledgerControl = ledger.controls.find((control) => control.statusClass !== "ready") || ledger.controls[0];
  const matrixCell = matrix.topCells[0] || matrix.activeCell;
  const twinGapCount = twin.verdict?.riskGaps || twin.risks.filter((risk) => risk.statusClass === "gap").length;
  const moves = [
    makeFounderDailyMove({
      label: `Call ${success.callFirst.profile.supplier}`,
      detail: `${success.callFirst.reason}. Primary action: ${success.callFirst.primaryAction.label}.`,
      owner: "Success",
      due: "Today",
      anchor: "#supplier-success",
      priority: success.callFirst.urgency,
      impact: success.callFirst.health.revenueDesk.annualRevenue,
      statusClass: success.callFirst.priorityClass === "hot" ? "gap" : success.callFirst.priorityClass === "grow" ? "ready" : "review"
    }),
    makeFounderDailyMove({
      label: twin.verdict?.label || "Tune market twin",
      detail: `${twin.scenario?.label || "Scenario"} verdict for ${twin.active?.title || marketLabel}: ${twin.verdict?.rule || "Protect supply, proof, response, and revenue gates."}`,
      owner: "Founder",
      due: twinGapCount ? "Today" : "48h",
      anchor: "#market-twin",
      priority: Math.max(42, 100 - (twin.verdict?.score || twin.score) + twinGapCount * 12),
      impact: twin.annualArr || 0,
      statusClass: twin.verdict?.statusClass || (twin.score >= 84 ? "ready" : twin.score >= 68 ? "review" : "gap")
    }),
    makeFounderDailyMove({
      label: autopilot.primary?.label || "Dispatch founder command",
      detail: autopilot.primary?.detail || "Turn the weakest market loop into owned work.",
      owner: autopilot.primary?.owner || "Founder",
      due: autopilot.primary?.due || "Today",
      anchor: autopilot.primary?.anchor || "#founder-autopilot",
      priority: autopilot.primary?.urgency || Math.max(35, 100 - autopilot.score),
      impact: autopilot.primary?.impactArr || autopilot.totalImpactArr,
      statusClass: autopilot.primary?.statusClass || (autopilot.score >= 84 ? "ready" : autopilot.score >= 68 ? "review" : "gap")
    }),
    makeFounderDailyMove({
      label: activationGap?.label || "Prepare activation",
      detail: activationGap?.detail || activation.summary,
      owner: activationGap?.owner || "Founder",
      due: activation.activationScore >= 84 ? "This week" : "Today",
      anchor: "#listing-activation",
      priority: Math.max(30, 100 - activation.activationScore + (activation.gates.length - activation.readyGateCount) * 5),
      impact: activation.recommendedPackage?.annualRevenue || 0,
      statusClass: activationGap?.statusClass || (activation.activationScore >= 84 ? "ready" : activation.activationScore >= 68 ? "review" : "gap")
    }),
    makeFounderDailyMove({
      label: ledgerControl?.label || "Protect trust ledger",
      detail: ledgerControl?.detail || ledger.summary,
      owner: ledgerControl?.owner || "Founder",
      due: ledger.trustDebt ? "Today" : "This week",
      anchor: "#trust-revenue-ledger",
      priority: Math.max(28, 100 - ledger.score + ledger.trustDebt * 6),
      impact: ledger.activeListingArr + ledger.nextPackageArr,
      statusClass: ledgerControl?.statusClass || (ledger.score >= 84 ? "ready" : ledger.score >= 68 ? "review" : "gap")
    }),
    makeFounderDailyMove({
      label: matrixCell ? `${matrixCell.region} ${matrixCell.category}: ${matrixCell.action}` : "Read market matrix",
      detail: matrixCell ? matrixCell.summary : "Use the matrix to choose the next demand-led wedge.",
      owner: "Growth",
      due: "48h",
      anchor: "#market-signal-matrix",
      priority: matrixCell?.priorityScore || 40,
      impact: matrixCell?.annualRevenue || 0,
      statusClass: matrixCell?.statusClass || "review"
    })
  ].sort((a, b) => b.priority - a.priority || b.impact - a.impact).slice(0, 6);
  const guardrails = getFounderDailyGuardrails({ founder, success, twin, activation, ledger });
  const openMoveCount = moves.filter((move) => move.statusClass !== "ready").length;
  const blockedGuardrails = guardrails.filter((guardrail) => guardrail.statusClass === "gap").length;
  const score = Math.max(0, Math.min(100, Math.round(
    founder.score * 0.42
    + success.averageHealth * 0.18
    + ledger.score * 0.16
    + activation.activationScore * 0.14
    + Math.max(0, 100 - openMoveCount * 9 - blockedGuardrails * 12) * 0.1
  )));
  const badge = openMoveCount >= 3 || blockedGuardrails ? "Work today" : score >= 84 ? "Clean day" : "Tighten";
  const summary = `${marketLabel}: ${moves[0].label} is first, with ${openMoveCount} open move${openMoveCount === 1 ? "" : "s"} and ${blockedGuardrails} blocked guardrail${blockedGuardrails === 1 ? "" : "s"}.`;
  const arrAtStake = moves.reduce((total, move) => total + Number(move.impact || 0), 0);

  return {
    founder,
    matrix,
    success,
    twin,
    autopilot,
    activation,
    ledger,
    marketLabel,
    title: `${marketLabel} daily moves`,
    badge,
    score,
    summary,
    moves,
    guardrails,
    openMoveCount,
    blockedGuardrails,
    arrAtStake,
    metrics: [
      { label: "First move", value: moves[0].owner },
      { label: "Open moves", value: String(openMoveCount) },
      { label: "ARR at stake", value: `USD ${arrAtStake.toLocaleString()}` },
      { label: "Payment take", value: "0%" }
    ]
  };
}

function makeFounderDailyMove(move) {
  const status = move.statusClass === "ready" ? "Protect" : move.statusClass === "review" ? "Tighten" : "Dispatch";
  return {
    ...move,
    priority: Math.max(0, Math.min(100, Math.round(move.priority || 0))),
    status
  };
}

function getFounderDailyGuardrails({ founder, success, twin, activation, ledger }) {
  return [
    {
      label: "Rental payment stays direct",
      detail: "No rental payment collection and no rental commission in phase one.",
      owner: "Founder",
      status: "Locked",
      statusClass: "ready"
    },
    {
      label: "Traffic follows launch verdict",
      detail: twin.verdict?.rule || "Use Market Twin before opening heavier category traffic.",
      owner: "Growth",
      status: twin.verdict?.statusClass === "ready" ? "Open" : twin.verdict?.statusClass === "review" ? "Capped" : "Hold",
      statusClass: twin.verdict?.statusClass || "review"
    },
    {
      label: "Trust before scale",
      detail: `${ledger.trustDebt} trust gap${ledger.trustDebt === 1 ? "" : "s"} and ledger score ${ledger.score}/100.`,
      owner: "Trust",
      status: ledger.trustDebt <= 2 && ledger.score >= 74 ? "Ready" : ledger.trustDebt <= 5 ? "Tighten" : "Fix",
      statusClass: ledger.trustDebt <= 2 && ledger.score >= 74 ? "ready" : ledger.trustDebt <= 5 ? "review" : "gap"
    },
    {
      label: "Supplier saves before expansion",
      detail: `${success.atRiskCount} at-risk account${success.atRiskCount === 1 ? "" : "s"} and ${success.hotLeadCount} hot lead${success.hotLeadCount === 1 ? "" : "s"} in the book.`,
      owner: "Success",
      status: success.atRiskCount ? "Call" : "Grow",
      statusClass: success.atRiskCount ? "gap" : "ready"
    },
    {
      label: "Activation before promotion",
      detail: `${activation.readyGateCount}/${activation.gates.length} activation gates ready for ${activation.active?.title || founder.marketLabel}.`,
      owner: "Revenue",
      status: activation.activationScore >= 84 ? "Publish" : activation.activationScore >= 68 ? "Sprint" : "Prep",
      statusClass: activation.activationScore >= 84 ? "ready" : activation.activationScore >= 68 ? "review" : "gap"
    }
  ];
}

function renderFounderCallSheet() {
  const root = document.querySelector("#founderCallSheetCards");
  if (!root) return;

  const model = getFounderCallSheetModel();

  setText("#founderCallSheetTitle", model.title);
  setText("#founderCallSheetBadge", model.badge);

  document.querySelector("#founderCallSheetScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${escapeHtml(model.summary)}</span>
  `;

  document.querySelector("#founderCallSheetMetrics").innerHTML = model.metrics.map((metric) => `
    <span><strong>${escapeHtml(metric.value)}</strong>${escapeHtml(metric.label)}</span>
  `).join("");

  root.innerHTML = model.cards.map((card, index) => `
    <button type="button" class="founder-call-row ${escapeHtml(card.statusClass)} ${index === 0 ? "is-primary" : ""}" data-call-listing="${escapeHtml(card.listingId)}" data-call-anchor="${escapeHtml(card.anchor)}">
      <strong>${index + 1}</strong>
      <span>
        ${escapeHtml(card.supplier)}
        <small>${escapeHtml(card.hook)}</small>
      </span>
      <em>USD ${card.value.toLocaleString()}</em>
      <b>${escapeHtml(card.status)}</b>
    </button>
  `).join("");

  document.querySelector("#founderCallSheetScript").innerHTML = model.script.map((line, index) => `
    <div class="founder-call-script-line ${escapeHtml(line.statusClass)}">
      <strong>${index + 1}</strong>
      <span>
        ${escapeHtml(line.label)}
        <small>${escapeHtml(line.detail)}</small>
      </span>
    </div>
  `).join("");

  document.querySelector("#founderCallSheetProof").innerHTML = model.proofAsks.map((ask, index) => `
    <div class="founder-call-proof-row ${escapeHtml(ask.statusClass)}">
      <strong>${index + 1}</strong>
      <span>
        ${escapeHtml(ask.label)}
        <small>${escapeHtml(ask.detail)}</small>
      </span>
      <b>${escapeHtml(ask.status)}</b>
    </div>
  `).join("");

  document.querySelector("#founderCallSheetBrief").innerHTML = buildFounderCallSheetText(model)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");

  document.querySelectorAll("[data-call-anchor]").forEach((button) => {
    button.addEventListener("click", () => {
      const listing = listings.find((item) => item.id === button.dataset.callListing);
      if (listing) state.selectedListingId = listing.id;
      state.commandRole = "Founder";
      saveState();
      render();
      const target = document.querySelector(button.dataset.callAnchor);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.location.hash = button.dataset.callAnchor;
      showToast("Supplier call path opened.");
    });
  });
}

function getFounderCallSheetModel() {
  const morning = getFounderMorningBriefModel();
  const daily = morning.daily;
  const success = getSupplierSuccessModel();
  const exchange = getDemandExchangeModel();
  const proof = getProofDemandRoomModel();
  const commitment = getSupplierCommitmentModel();
  const active = commitment.active || proof.active || exchange.active;
  const recommendedPackage = commitment.recommendedPackage || { label: "Starter proof package", listings: 3, annualRevenue: 297, monthlyRevenue: 27 };
  const marketLabel = active ? `${active.region} ${active.category}` : daily.marketLabel;
  const cards = success.rows.slice(0, 5).map((row) => getFounderCallCard(row, {
    active,
    exchange,
    proof,
    commitment,
    recommendedPackage,
    marketLabel
  }));
  const proofAsks = getFounderCallProofAsks({ active, proof, commitment, recommendedPackage });
  const hotCount = cards.filter((card) => card.statusClass === "hot").length;
  const closeReadyCount = cards.filter((card) => card.statusClass === "grow").length;
  const proofGapCount = proofAsks.filter((ask) => ask.statusClass === "gap").length;
  const score = Math.max(0, Math.min(100, Math.round(
    success.averageHealth * 0.3
    + commitment.score * 0.25
    + proof.score * 0.18
    + exchange.score * 0.14
    + Math.max(0, 100 - hotCount * 9 - proofGapCount * 12) * 0.13
  )));
  const badge = commitment.score >= 84 && closeReadyCount ? "Close today" : hotCount ? "Call first" : "Build proof";
  const summary = `${marketLabel}: call ${cards[0].supplier} first, offer ${recommendedPackage.label.toLowerCase()}, and keep rental payment direct.`;
  const script = [
    {
      label: "Open with demand",
      detail: active ? `${active.demandCount} buyer signal${active.demandCount === 1 ? "" : "s"} show demand for ${marketLabel}.` : `${marketLabel} has active buyer and supplier signals.`,
      statusClass: active?.demandCount >= 3 ? "grow" : "watch"
    },
    {
      label: "Show the supplier value",
      detail: `${recommendedPackage.label}: ${recommendedPackage.listings} paid listing${recommendedPackage.listings === 1 ? "" : "s"} for USD ${recommendedPackage.monthlyRevenue.toLocaleString()}/month or USD ${recommendedPackage.annualRevenue.toLocaleString()}/year.`,
      statusClass: recommendedPackage.statusClass === "ready" ? "grow" : recommendedPackage.statusClass === "gap" ? "hot" : "watch"
    },
    {
      label: "Ask for proof before verified visibility",
      detail: proofAsks.slice(0, 3).map((ask) => ask.label).join(", ") || "Collect machine, company, and availability proof.",
      statusClass: proofGapCount ? "hot" : "grow"
    },
    {
      label: "Protect the phase-one promise",
      detail: "Heavyster sells listing SaaS and routes direct enquiries. Buyer and supplier keep rental payment direct.",
      statusClass: "grow"
    }
  ];

  return {
    morning,
    daily,
    success,
    exchange,
    proof,
    commitment,
    active,
    recommendedPackage,
    marketLabel,
    title: `${marketLabel} supplier call sheet`,
    badge,
    score,
    summary,
    cards,
    proofAsks,
    script,
    hotCount,
    closeReadyCount,
    proofGapCount,
    metrics: [
      { label: "First call", value: cards[0].supplier },
      { label: "Package", value: `${recommendedPackage.listings} listings` },
      { label: "Offer ARR", value: `USD ${recommendedPackage.annualRevenue.toLocaleString()}` },
      { label: "Rental take", value: "0%" }
    ]
  };
}

function getFounderCallCard(row, context) {
  const active = context.active;
  const packageValue = context.recommendedPackage.annualRevenue || 0;
  const expansionValue = row.health.expansionArr || 0;
  const renewalValue = row.health.revenueDesk.annualRevenue || 0;
  const value = Math.max(packageValue, expansionValue, Math.round(renewalValue * 0.35));
  const proofAsk = active?.proof?.slice(0, 2).join(" and ") || row.profile.proof.slice(0, 2).join(" and ");
  const categoryHook = active ? `${active.region} ${active.category}` : row.profile.fleet[0]?.label || "heavy equipment";
  const statusClass = row.priorityClass;
  const status = statusClass === "hot" ? "Call now" : statusClass === "grow" ? "Pitch" : "Warm";
  const anchor = statusClass === "hot" ? "#account-health" : context.commitment.score >= 68 ? "#supplier-commitment" : "#proof-demand";

  return {
    supplier: row.profile.supplier,
    listingId: row.listing.id,
    branch: row.profile.branch,
    response: row.profile.response,
    hook: `${categoryHook}: ${row.reason}. Ask for ${proofAsk.toLowerCase()} and route renters direct.`,
    ask: `${context.recommendedPackage.label}: ${context.recommendedPackage.listings} active listing${context.recommendedPackage.listings === 1 ? "" : "s"}.`,
    value,
    status,
    statusClass,
    anchor
  };
}

function getFounderCallProofAsks({ active, proof, commitment, recommendedPackage }) {
  const activeProof = active?.proof || [];
  const proofRows = proof.evidence.length ? proof.evidence : [];
  const gates = commitment.gates.length ? commitment.gates : [];
  const asks = [
    ...activeProof.slice(0, 3).map((item) => ({
      label: item,
      detail: "Attach this proof before using verified supplier language.",
      status: "Ask",
      statusClass: "watch"
    })),
    ...gates.filter((gate) => gate.statusClass !== "ready").slice(0, 2).map((gate) => ({
      label: gate.label,
      detail: gate.detail,
      status: gate.status,
      statusClass: gate.statusClass === "gap" ? "hot" : "watch"
    })),
    ...proofRows.filter((row) => row.statusClass === "gap").slice(0, 1).map((row) => ({
      label: row.label,
      detail: row.detail,
      status: row.status,
      statusClass: "hot"
    }))
  ];

  asks.push({
    label: "Direct enquiry route",
    detail: `${recommendedPackage.label} stays phase-one clean: phone, WhatsApp, email, or web enquiry goes directly to the supplier.`,
    status: "Locked",
    statusClass: "grow"
  });

  return asks.slice(0, 6);
}

function renderBuyerWorkbench() {
  const model = getBuyerWorkbenchModel();
  setText("#buyerWorkbenchTitle", model.title);
  setText("#buyerWorkbenchBadge", model.badge);

  document.querySelector("#buyerWorkbenchScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${escapeHtml(model.summary)}</span>
  `;

  document.querySelector("#buyerWorkbenchNext").innerHTML = `
    <span>Next best move</span>
    <strong>${escapeHtml(model.nextStage.label)}</strong>
    <p>${escapeHtml(model.nextStage.detail)}</p>
    <button type="button" class="solid-button" data-buyer-target="${escapeHtml(model.nextStage.anchor)}" data-buyer-label="${escapeHtml(model.nextStage.label)}">${escapeHtml(model.nextStage.action)}</button>
  `;

  document.querySelector("#buyerMissionControl").innerHTML = `
    <div class="buyer-mission-head ${escapeHtml(model.mission.statusClass)}">
      <span>${escapeHtml(model.mission.mode)}</span>
      <strong>${escapeHtml(model.mission.headline)}</strong>
      <small>${escapeHtml(model.mission.detail)}</small>
    </div>
    <div class="buyer-mission-metrics">
      ${model.mission.metrics.map((metric) => `
        <span class="${escapeHtml(metric.statusClass)}">
          <strong>${escapeHtml(metric.value)}</strong>
          <small>${escapeHtml(metric.label)}</small>
        </span>
      `).join("")}
    </div>
    <div class="buyer-mission-gates">
      ${model.mission.gates.map((gate) => `
        <div class="${escapeHtml(gate.statusClass)}">
          <span>${escapeHtml(gate.label)}</span>
          <strong>${escapeHtml(gate.status)}</strong>
          <small>${escapeHtml(gate.detail)}</small>
        </div>
      `).join("")}
    </div>
    <div class="buyer-mission-actions">
      ${model.mission.actions.map((action) => `
        <button type="button" data-buyer-mission-action="${escapeHtml(action.id)}">
          <strong>${escapeHtml(action.label)}</strong>
          <span>${escapeHtml(action.detail)}</span>
        </button>
      `).join("")}
    </div>
  `;

  document.querySelector("#buyerRentalMissionBrief").innerHTML = `
    <div class="buyer-brief-head ${escapeHtml(model.rentalBrief.statusClass)}">
      <span>${escapeHtml(model.rentalBrief.verdict)}</span>
      <strong>${escapeHtml(model.rentalBrief.title)}</strong>
      <small>${escapeHtml(model.rentalBrief.summary)}</small>
    </div>
    <div class="buyer-brief-lines">
      ${model.rentalBrief.lines.map((line) => `
        <div>
          <span>${escapeHtml(line.label)}</span>
          <strong>${escapeHtml(line.value)}</strong>
        </div>
      `).join("")}
    </div>
    <div class="buyer-brief-blockers">
      ${model.rentalBrief.blockers.map((blocker) => `
        <span class="${escapeHtml(blocker.statusClass)}">
          <strong>${escapeHtml(blocker.label)}</strong>
          <small>${escapeHtml(blocker.detail)}</small>
        </span>
      `).join("")}
    </div>
    <div class="buyer-brief-actions">
      <button type="button" data-buyer-brief-action="copy">
        <strong>Copy mission packet</strong>
        <span>Buyer-safe brief</span>
      </button>
      <button type="button" data-buyer-brief-action="${escapeHtml(model.rentalBrief.primaryAction.id)}">
        <strong>${escapeHtml(model.rentalBrief.primaryAction.label)}</strong>
        <span>${escapeHtml(model.rentalBrief.primaryAction.detail)}</span>
      </button>
    </div>
  `;

  document.querySelector("#buyerWorkbenchFlow").innerHTML = model.stages.map((stage, index) => `
    <button type="button" class="buyer-workbench-step ${escapeHtml(stage.statusClass)}" data-buyer-target="${escapeHtml(stage.anchor)}" data-buyer-label="${escapeHtml(stage.label)}">
      <em>${index + 1}</em>
      <span>
        <strong>${escapeHtml(stage.label)}</strong>
        ${escapeHtml(stage.detail)}
      </span>
      <b>${stage.score}/100</b>
      <small>${escapeHtml(stage.status)}</small>
    </button>
  `).join("");

  document.querySelector("#buyerWorkbenchPacket").innerHTML = model.packet.map((item) => `
    <div>
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.value)}</strong>
    </div>
  `).join("");

  document.querySelectorAll("[data-buyer-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector(button.dataset.buyerTarget);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.location.hash = button.dataset.buyerTarget;
      showToast(`${button.dataset.buyerLabel || "Buyer step"} opened.`);
    });
  });

  document.querySelectorAll("[data-buyer-mission-action]").forEach((button) => {
    button.addEventListener("click", () => handleBuyerMissionAction(button.dataset.buyerMissionAction));
  });

  document.querySelectorAll("[data-buyer-brief-action]").forEach((button) => {
    button.addEventListener("click", () => handleBuyerBriefAction(button.dataset.buyerBriefAction));
  });
}

function getBuyerWorkbenchModel() {
  const selected = getSelectedListing();
  const filtered = getFilteredListings();
  const nearby = getNearbyListings();
  const jobsite = getJobsiteModel();
  const passport = getTrustPassport(selected);
  const rfq = getRfqModel();
  const award = getAwardModel();
  const quote = getQuoteGuardModel();
  const mobilize = getMobilizationModel();
  const marketplaceScore = filtered.length
    ? Math.min(96, 68 + Math.min(filtered.length, 7) * 4 + (selected.verified ? 4 : 0))
    : nearby.length
      ? 56
      : 38;
  const rfqCoverageScore = Math.min(100, Math.round(
    rfq.averageScore * 0.72
    + Math.min(rfq.listings.length, 3) * 7
    + rfq.verifiedCount * 3
    + rfq.availableCount * 2
  ));
  const stages = [
    makeBuyerStage({
      label: "Search signal",
      anchor: "#marketplace",
      score: marketplaceScore,
      detail: filtered.length
        ? `${filtered.length} listing${filtered.length === 1 ? "" : "s"} visible for the current search.`
        : `${nearby.length} nearby option${nearby.length === 1 ? "" : "s"} found; capture missing demand if buyer needs exact supply.`,
      action: filtered.length ? "Review listings" : "Capture demand"
    }),
    makeBuyerStage({
      label: "Jobsite package",
      anchor: "#jobsite",
      score: jobsite.packageScore,
      detail: `${jobsite.matchedCount}/${jobsite.roles.length} machine role${jobsite.roles.length === 1 ? "" : "s"} covered for ${jobsite.region}.`,
      action: jobsite.gaps.length ? "Fill package gaps" : "Send package"
    }),
    makeBuyerStage({
      label: "Trust Passport",
      anchor: "#passport",
      score: passport.score,
      detail: `${selected.name} is ${passport.verdict.toLowerCase()} with ${passport.proofItems.filter((item) => !item.ready).length} proof gap${passport.proofItems.filter((item) => !item.ready).length === 1 ? "" : "s"}.`,
      action: passport.score >= 84 ? "Use proof" : "Close proof"
    }),
    makeBuyerStage({
      label: "RFQ coverage",
      anchor: "#rfq",
      score: rfqCoverageScore,
      detail: `${rfq.listings.length} supplier option${rfq.listings.length === 1 ? "" : "s"}, ${rfq.verifiedCount} verified, ${rfq.availableCount} available now.`,
      action: rfq.listings.length >= 2 ? "Review RFQ" : "Add supplier option"
    }),
    makeBuyerStage({
      label: "Award clarity",
      anchor: "#award",
      score: award.winner.total,
      detail: `${award.winner.listing.supplier} leads with ${award.badge.toLowerCase()} status.`,
      action: award.winner.total >= 84 ? "Review winner" : "Clarify award"
    }),
    makeBuyerStage({
      label: "Quote terms",
      anchor: "#quote-guard",
      score: quote.score,
      detail: `${quote.missingCount} quote term${quote.missingCount === 1 ? "" : "s"} still need clearer wording.`,
      action: quote.missingCount ? "Clarify quote" : "Use quote"
    }),
    makeBuyerStage({
      label: "Mobilization",
      anchor: "#mobilize",
      score: mobilize.score,
      detail: `${mobilize.checks.filter((check) => check.status === "Ready").length}/${mobilize.checks.length} dispatch gate${mobilize.checks.length === 1 ? "" : "s"} ready.`,
      action: mobilize.score >= 84 ? "Copy handoff" : "Lock dispatch"
    })
  ];
  const score = Math.round(stages.reduce((total, stage) => total + stage.score, 0) / stages.length);
  const nextStage = [...stages]
    .filter((stage) => stage.status !== "Ready")
    .sort((a, b) => a.score - b.score)[0] || stages[stages.length - 1];
  const badge = score >= 84 ? "Buyer-ready" : score >= 68 ? "Control path" : "Rescue path";
  const summary = `${selected.name} for ${getJobsiteRegion()} with ${state.jobsiteUrgency.toLowerCase()} start window and ${state.shortlistIds.length} saved option${state.shortlistIds.length === 1 ? "" : "s"}.`;
  const mission = getBuyerMissionControlModel({
    selected,
    filtered,
    nearby,
    jobsite,
    passport,
    rfq,
    award,
    quote,
    mobilize,
    stages,
    score,
    nextStage
  });
  const rentalBrief = getBuyerRentalMissionBriefModel({
    selected,
    filtered,
    nearby,
    jobsite,
    passport,
    rfq,
    award,
    quote,
    mobilize,
    mission,
    score
  });

  return {
    selected,
    badge,
    score,
    title: `${selected.name} buyer desk`,
    summary,
    mission,
    rentalBrief,
    stages,
    nextStage,
    packet: [
      { label: "Selected machine", value: `${selected.name} - ${selected.supplier}` },
      { label: "Project", value: `${jobsite.blueprint.label} in ${jobsite.region}` },
      { label: "Shortlist", value: `${rfq.listings.length} option${rfq.listings.length === 1 ? "" : "s"} / ${rfq.verifiedCount} verified` },
      { label: "Recommended award", value: `${award.winner.listing.supplier} - ${award.winner.total}/100` },
      { label: "Quote control", value: `${quote.badge}, ${quote.missingCount} missing term${quote.missingCount === 1 ? "" : "s"}` },
      { label: "Payment rule", value: "Buyer pays supplier direct; Heavyster does not collect rental payment" }
    ]
  };
}

function getBuyerMissionControlModel(context) {
  const exactCount = context.filtered.length;
  const nearbyCount = context.nearby.length;
  const shortlistCount = (state.shortlistIds || []).length;
  const dispatchReady = context.mobilize.checks.filter((check) => check.status === "Ready").length;
  const dispatchTotal = context.mobilize.checks.length;
  const proofGaps = context.passport.proofItems.filter((item) => !item.ready).length;
  const quoteGaps = context.quote.missingCount;
  const equipment = getDemandEquipmentFromSearch();
  const region = state.region === "all" ? context.selected.region : state.region;
  const supplyStatus = exactCount ? "Ready" : nearbyCount ? "Rescue" : "Gap";
  const comparisonStatus = shortlistCount >= 2 ? "Ready" : "Add backup";
  const proofStatus = context.passport.score >= 84 ? "Ready" : "Close proof";
  const quoteStatus = quoteGaps ? "Clarify" : "Ready";
  const dispatchStatus = context.mobilize.score >= 84 ? "Ready" : "Lock gates";
  const gates = [
    makeBuyerMissionGate("Supply", supplyStatus, exactCount ? `${exactCount} exact option${exactCount === 1 ? "" : "s"} visible.` : `${nearbyCount} nearby option${nearbyCount === 1 ? "" : "s"} can keep the buyer moving.`),
    makeBuyerMissionGate("Comparison", comparisonStatus, shortlistCount >= 2 ? `${shortlistCount} machines are saved for RFQ comparison.` : "Add one comparable backup before serious RFQ."),
    makeBuyerMissionGate("Proof", proofStatus, proofGaps ? `${proofGaps} proof gap${proofGaps === 1 ? "" : "s"} need supplier evidence.` : "Trust Passport is buyer-ready."),
    makeBuyerMissionGate("Quote", quoteStatus, quoteGaps ? `${quoteGaps} quote term${quoteGaps === 1 ? "" : "s"} should be named before award.` : "Commercial terms are clean enough for the buyer path."),
    makeBuyerMissionGate("Dispatch", dispatchStatus, `${dispatchReady}/${dispatchTotal} mobilization gate${dispatchTotal === 1 ? "" : "s"} ready.`)
  ];
  const primaryAction = !exactCount
    ? "rescue"
    : shortlistCount < 2
      ? "backup"
      : context.passport.score < 84
        ? "passport"
        : quoteGaps
          ? "quote"
          : context.mobilize.score < 84
            ? "mobilize"
            : "rfq";
  const actionMap = {
    "best-fit": { id: "best-fit", label: "Rank best fit", detail: "Sort the visible marketplace by buyer fit." },
    backup: { id: "backup", label: "Add backup", detail: "Save the strongest comparable machine." },
    rescue: { id: "rescue", label: "Capture demand", detail: "Turn the gap into supplier recruitment." },
    passport: { id: "passport", label: "Close proof", detail: "Open the Trust Passport gaps." },
    quote: { id: "quote", label: "Clarify quote", detail: "Open terms that block award." },
    mobilize: { id: "mobilize", label: "Lock dispatch", detail: "Open mobilization gates." },
    rfq: { id: "rfq", label: "Open RFQ", detail: "Move shortlist into supplier routing." },
    compare: { id: "compare", label: "Compare", detail: "Open shortlist decision matrix." }
  };
  const actions = [...new Set(["best-fit", primaryAction, "compare"])]
    .map((id) => actionMap[id])
    .filter(Boolean);
  const headline = !exactCount
    ? `No exact ${equipment.toLowerCase()} path in ${region}; capture demand before the buyer leaves.`
    : shortlistCount < 2
      ? `Add one backup supplier before ${context.selected.name} becomes the only option.`
      : quoteGaps
        ? `${context.award.winner.listing.supplier} can win, but quote language still needs cleanup.`
        : context.mobilize.score < 84
          ? "Supplier choice is strong; dispatch details now decide buyer confidence."
          : "Buyer path is ready for a clean direct RFQ and supplier handoff.";
  const detail = `Mission keeps search, proof, RFQ, award, quote, and mobilization in one path while payment stays direct.`;
  const mode = !exactCount ? "Demand rescue" : context.score >= 84 ? "Buyer-ready route" : "Decision control";

  return {
    mode,
    statusClass: context.score >= 84 && exactCount ? "is-ready" : exactCount ? "is-watch" : "is-gap",
    headline,
    detail,
    metrics: [
      { label: "Supply", value: exactCount ? `${exactCount} exact` : `${nearbyCount} nearby`, statusClass: exactCount ? "ready" : "gap" },
      { label: "Trust", value: `${context.passport.score}/100`, statusClass: context.passport.score >= 84 ? "ready" : "review" },
      { label: "Quote", value: quoteGaps ? `${quoteGaps} gaps` : "Clean", statusClass: quoteGaps ? "review" : "ready" },
      { label: "Dispatch", value: `${dispatchReady}/${dispatchTotal}`, statusClass: context.mobilize.score >= 84 ? "ready" : "review" }
    ],
    gates,
    actions
  };
}

function getBuyerRentalMissionBriefModel(context) {
  const selected = context.selected;
  const exactCount = context.filtered.length;
  const shortlistCount = (state.shortlistIds || []).length;
  const blockers = context.mission.gates.filter((gate) => gate.statusClass !== "ready");
  const quoteClean = context.quote.missingCount === 0;
  const dispatchReady = context.mobilize.score >= 84;
  const verdict = !exactCount
    ? "Demand brief"
    : blockers.length
      ? "Buyer-safe draft"
      : "RFQ-ready brief";
  const statusClass = !exactCount ? "is-gap" : blockers.length ? "is-watch" : "is-ready";
  const primaryAction = !exactCount
    ? { id: "rescue", label: "Capture demand", detail: "Create supply signal" }
    : context.passport.score < 84
      ? { id: "passport", label: "Close proof", detail: "Open Trust Passport" }
      : !quoteClean
        ? { id: "quote", label: "Clarify quote", detail: "Clean missing terms" }
        : !dispatchReady
          ? { id: "mobilize", label: "Lock dispatch", detail: "Check handoff gates" }
          : { id: "rfq", label: "Open RFQ", detail: "Route buyer packet" };
  const projectNote = state.projectNote || "Buyer needs rental terms, operator option, delivery, documents, and contact route.";
  const blockerRows = blockers.length ? blockers : [{
    label: "No critical blocker",
    detail: "Buyer can move forward with direct supplier routing.",
    statusClass: "ready"
  }];

  return {
    verdict,
    statusClass,
    title: `${selected.name} rental mission`,
    summary: blockers.length
      ? `${blockers.length} control gate${blockers.length === 1 ? "" : "s"} should be cleared before the buyer treats this as award-ready.`
      : "The buyer can receive a clean RFQ packet while rental payment stays direct with the supplier.",
    primaryAction,
    lines: [
      { label: "Machine", value: `${selected.name} - ${selected.category}` },
      { label: "Supplier", value: `${selected.supplier}, ${selected.city}, ${selected.region}` },
      { label: "Availability", value: selected.availability === "available" ? "Available now" : "Available soon / confirm before dispatch" },
      { label: "Project", value: `${context.jobsite.blueprint.label}; ${state.jobsiteUrgency}` },
      { label: "Shortlist", value: `${shortlistCount} saved option${shortlistCount === 1 ? "" : "s"}; ${context.rfq.verifiedCount} verified supplier${context.rfq.verifiedCount === 1 ? "" : "s"}` },
      { label: "Quote", value: `${context.quote.badge}; ${context.quote.missingCount} missing term${context.quote.missingCount === 1 ? "" : "s"}` },
      { label: "Buyer note", value: projectNote },
      { label: "Payment", value: "Buyer pays rental company directly; Heavyster routes clarity and proof only" }
    ],
    blockers: blockerRows.slice(0, 3)
  };
}

function makeBuyerMissionGate(label, status, detail) {
  const statusClass = status === "Ready" ? "ready" : status === "Rescue" || status === "Gap" ? "gap" : "review";
  return { label, status, detail, statusClass };
}

function handleBuyerMissionAction(actionId) {
  if (actionId === "best-fit") {
    state.sort = "fit";
    const matches = getFilteredListings();
    if (matches.length) state.selectedListingId = matches[0].id;
    saveState();
    syncFilterInputs();
    render();
    openBuyerMissionTarget("#catalogTitle", "Best fit marketplace opened.");
    return;
  }

  if (actionId === "backup") {
    const shortlistIds = state.shortlistIds || [];
    const suggestion = getShortlistSuggestion(shortlistIds);
    if (suggestion && !shortlistIds.includes(suggestion.id)) {
      state.shortlistIds = [...shortlistIds, suggestion.id];
      state.selectedListingId = suggestion.id;
    }
    state.shortlistCompareOpen = true;
    saveState();
    render();
    openBuyerMissionTarget("#shortlistTray", suggestion ? "Backup option added to shortlist." : "Shortlist compare opened.");
    return;
  }

  if (actionId === "rescue") {
    prepareDemandFromSearch();
    saveState();
    renderDemandCapture();
    renderDemandRadar();
    openBuyerMissionTarget("#demandRequest", "Demand capture opened.");
    return;
  }

  if (actionId === "compare") {
    state.shortlistCompareOpen = true;
    saveState();
    render();
    openBuyerMissionTarget("#shortlistTray", "Shortlist compare opened.");
    return;
  }

  const targets = {
    passport: ["#passport", "Trust Passport opened."],
    quote: ["#quote-guard", "Quote Guard opened."],
    mobilize: ["#mobilize", "Mobilization tower opened."],
    rfq: ["#rfq", "RFQ room opened."]
  };
  const [anchor, message] = targets[actionId] || ["#buyer-workbench", "Buyer Desk opened."];
  openBuyerMissionTarget(anchor, message);
}

async function handleBuyerBriefAction(actionId) {
  if (actionId === "copy") {
    try {
      await navigator.clipboard.writeText(buildBuyerRentalMissionBriefText());
      showToast("Rental mission packet copied.");
    } catch {
      showToast("Copy is blocked here, but the rental mission brief is visible.");
    }
    return;
  }

  handleBuyerMissionAction(actionId);
}

function openBuyerMissionTarget(anchor, message) {
  const target = document.querySelector(anchor);
  if (!target) return;
  if (window.location.hash !== anchor) window.location.hash = anchor;
  scrollToPageTarget(target);
  showToast(message);
}

function makeBuyerStage(stage) {
  const status = stage.score >= 84 ? "Ready" : stage.score >= 64 ? "Review" : "Gap";
  return {
    ...stage,
    status,
    statusClass: status.toLowerCase()
  };
}

function reconcileShortlist() {
  state.shortlistIds = (state.shortlistIds || []).filter((id) => listings.some((listing) => listing.id === id));
}

function getFilteredListings() {
  return getListingsForFilters(state);
}

function getCatalogPageSignature() {
  return [
    state.search || "",
    state.region || "all",
    state.availability || "all",
    state.category || "all",
    state.sort || "available"
  ].join("|");
}

function resetCatalogPage() {
  state.catalogPage = 1;
  state.catalogPageSignature = getCatalogPageSignature();
}

function getCatalogPageSize() {
  const size = Number(state.catalogPageSize) || 6;
  return [6, 12, 24, 48].includes(size) ? size : 6;
}

function getCatalogPagerModel() {
  const signature = getCatalogPageSignature();
  if (state.catalogPageSignature !== signature) {
    state.catalogPage = 1;
    state.catalogPageSignature = signature;
  }

  const filtered = getFilteredListings();
  const pageSize = getCatalogPageSize();
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const page = Math.min(Math.max(Number(state.catalogPage) || 1, 1), totalPages);
  state.catalogPage = page;
  const startIndex = filtered.length ? (page - 1) * pageSize : 0;
  const endIndex = Math.min(startIndex + pageSize, filtered.length);
  const rows = filtered.slice(startIndex, endIndex);

  return {
    filtered,
    rows,
    page,
    pageSize,
    totalPages,
    totalRows: filtered.length,
    startLabel: filtered.length ? startIndex + 1 : 0,
    endLabel: endIndex,
    hasPrevious: page > 1,
    hasNext: page < totalPages
  };
}

function getPagedCatalogListings() {
  return getCatalogPagerModel().rows;
}

function selectFirstPagedCatalogListing() {
  const first = getPagedCatalogListings()[0];
  if (first) state.selectedListingId = first.id;
}

function getListingsForFilters(filters) {
  const query = String(filters.search || "").toLowerCase();
  const region = filters.region || "all";
  const availability = filters.availability || "all";
  const category = filters.category || "all";
  const sort = filters.sort || "available";
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
      && (region === "all" || listing.region === region)
      && (availability === "all" || listing.availability === availability)
      && (category === "all" || listing.category === category);
  });
  return filtered.sort((a, b) => {
    if (sort === "available") return availabilityScore(a) - availabilityScore(b) || a.name.localeCompare(b.name);
    if (sort === "fit") return getBuyerFitScore(b, filters).score - getBuyerFitScore(a, filters).score || a.name.localeCompare(b.name);
    if (sort === "verified") return Number(b.verified) - Number(a.verified) || a.name.localeCompare(b.name);
    if (sort === "region") return a.region.localeCompare(b.region) || a.city.localeCompare(b.city);
    return a.name.localeCompare(b.name);
  });
}

function availabilityScore(listing) {
  if (listing.availability === "available") return 0;
  if (listing.availability === "soon") return 1;
  return 2;
}

function getBuyerFitScore(listing, filters = state) {
  const query = String(filters.search || "").trim().toLowerCase();
  const searchable = [listing.name, listing.category, listing.supplier, listing.region, listing.city, listing.specs].join(" ").toLowerCase();
  const reasons = [];
  let score = 26;

  if (!query) {
    score += 8;
    reasons.push("broad marketplace fit");
  } else if (listing.name.toLowerCase().includes(query)) {
    score += 24;
    reasons.push("machine name match");
  } else if (listing.category.toLowerCase().includes(query)) {
    score += 18;
    reasons.push("category match");
  } else if (listing.specs.toLowerCase().includes(query)) {
    score += 14;
    reasons.push("spec match");
  } else if (searchable.includes(query)) {
    score += 9;
    reasons.push("related supplier or location match");
  } else {
    score -= 10;
    reasons.push("weaker keyword fit");
  }

  if (filters.region === "all") {
    score += 6;
  } else if (listing.region === filters.region) {
    score += 14;
    reasons.push(`${listing.region} region match`);
  } else {
    score -= 8;
  }

  if (filters.category === "all") {
    score += 5;
  } else if (listing.category === filters.category) {
    score += 12;
    reasons.push(`${listing.category.toLowerCase()} category match`);
  } else {
    score -= 6;
  }

  if (filters.availability === "all") {
    score += listing.availability === "available" ? 8 : 4;
  } else if (listing.availability === filters.availability) {
    score += 14;
    reasons.push(listing.availability === "available" ? "available now" : "available soon");
  } else {
    score -= 7;
  }

  if (listing.verified) {
    score += 10;
    reasons.push("verified supplier");
  } else {
    score -= 4;
    reasons.push("verification review needed");
  }

  const passport = getTrustPassport(listing);
  score += Math.round(passport.score * 0.16);

  if ((state.shortlistIds || []).includes(listing.id)) {
    score += 5;
    reasons.push("already shortlisted");
  }

  const uniqueReasons = Array.from(new Set(reasons)).slice(0, 3);
  const safeScore = Math.max(0, Math.min(100, Math.round(score)));
  const status = safeScore >= 84 ? "Strong fit" : safeScore >= 68 ? "Good fit" : safeScore >= 52 ? "Review fit" : "Weak fit";

  return {
    score: safeScore,
    status,
    reasons: uniqueReasons,
    summary: uniqueReasons.join("; ")
  };
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

function renderMarketplaceSearchAssist() {
  const root = document.querySelector("#marketSearchAssist");
  if (!root) return;

  const items = getMarketplaceSearchAssistItems();
  root.innerHTML = `
    <div class="search-assist-head">
      <span>Search assist</span>
      <strong>${state.search ? `Matching "${escapeHtml(state.search)}"` : "Fast routes"}</strong>
    </div>
    <div class="search-assist-list">
      ${items.map((item) => `
        <button
          type="button"
          data-search-assist="${escapeHtml(item.kind)}"
          data-assist-id="${escapeHtml(item.id)}"
          data-assist-value="${escapeHtml(item.value)}"
        >
          <span>${escapeHtml(item.type)}</span>
          <strong>${escapeHtml(item.label)}</strong>
          <small>${escapeHtml(item.detail)}</small>
        </button>
      `).join("")}
    </div>
  `;

  root.querySelectorAll("[data-search-assist]").forEach((button) => {
    button.addEventListener("click", () => applyMarketplaceSearchAssist(button));
  });
}

function renderMarketplaceQuickPresets() {
  const root = document.querySelector("#marketQuickPresets");
  if (!root) return;

  const activeId = getActiveQuickPresetId();
  root.innerHTML = `
    <span>Quick search</span>
    <div>
      ${marketplaceQuickPresets.map((preset) => {
        const count = getListingsForFilters(preset).length;
        return `
          <button type="button" class="${activeId === preset.id ? "is-active" : ""}" data-market-preset="${escapeHtml(preset.id)}">
            <strong>${escapeHtml(preset.label)}</strong>
            <small>${escapeHtml(preset.signal)} - ${count || "gap"} ${count === 1 ? "listing" : "listings"}</small>
          </button>
        `;
      }).join("")}
    </div>
  `;

  root.querySelectorAll("[data-market-preset]").forEach((button) => {
    button.addEventListener("click", () => applyMarketplaceQuickPreset(button.dataset.marketPreset));
  });
}

function getActiveQuickPresetId() {
  const active = marketplaceQuickPresets.find((preset) =>
    String(state.search || "") === String(preset.search || "")
    && state.region === preset.region
    && state.availability === preset.availability
    && state.category === preset.category
    && state.sort === preset.sort
  );
  return active?.id || "";
}

function applyMarketplaceQuickPreset(presetId) {
  const preset = marketplaceQuickPresets.find((item) => item.id === presetId);
  if (!preset) return;

  state.search = preset.search;
  state.region = preset.region;
  state.availability = preset.availability;
  state.category = preset.category;
  state.sort = preset.sort;
  const matches = getListingsForFilters(state);
  if (matches.length) state.selectedListingId = matches[0].id;
  saveState();
  syncFilterInputs();
  render();
  scrollToPageTarget(document.querySelector("#marketDecisionCard"), 120);
  showToast(`${preset.label} opened.`);
}

function renderMarketplaceResultBrief() {
  const root = document.querySelector("#marketResultBrief");
  if (!root) return;

  const model = getMarketplaceResultBriefModel();
  root.innerHTML = `
    <div class="market-result-brief-card ${escapeHtml(model.statusClass)}">
      <div class="market-result-brief-copy">
        <span>${escapeHtml(model.label)}</span>
        <strong>${escapeHtml(model.headline)}</strong>
        <small>${escapeHtml(model.detail)}</small>
      </div>
      <div class="market-result-brief-facts">
        ${model.facts.map((fact) => `
          <b class="${fact.ready ? "is-ready" : "is-gap"}">
            <strong>${escapeHtml(fact.value)}</strong>
            <small>${escapeHtml(fact.label)}</small>
          </b>
        `).join("")}
      </div>
      <div class="market-result-brief-actions">
        ${model.actions.map((action) => `
          <button type="button" class="${action.primary ? "is-primary" : ""}" data-market-result-brief="${escapeHtml(action.id)}">
            ${escapeHtml(action.label)}
          </button>
        `).join("")}
      </div>
    </div>
  `;

  root.querySelectorAll("[data-market-result-brief]").forEach((button) => {
    button.addEventListener("click", () => handleMarketplaceResultBriefAction(button.dataset.marketResultBrief, model));
  });
}

function getMarketplaceResultBriefModel() {
  const filtered = getFilteredListings();
  const selected = filtered.find((listing) => listing.id === state.selectedListingId) || filtered[0];
  const exactMode = Boolean(selected);
  const equipment = getDemandEquipmentFromSearch();
  const region = state.region === "all" ? selected?.region || "all regions" : state.region;

  if (!exactMode) {
    const wider = getListingsForFilters({ ...state, availability: "all" });
    const widest = wider.length ? wider : getListingsForFilters({ ...state, region: "all", availability: "all" });
    return {
      statusClass: "is-gap",
      label: "Search result",
      headline: `No exact ${equipment.toLowerCase()} result yet.`,
      detail: widest.length
        ? `${widest[0].name} is the closest recovery path. Capture demand or widen availability.`
        : `Save the ${region} need and turn it into a supplier recruitment signal.`,
      facts: [
        { label: "Exact supply", value: "0", ready: false },
        { label: "Recovery", value: widest.length ? String(widest.length) : "Gap", ready: widest.length > 0 },
        { label: "Rental take", value: "0%", ready: true }
      ],
      actions: [
        { id: "demand", label: "Save demand", primary: true },
        { id: "hunt", label: "Find suppliers" },
        { id: "widen", label: "Widen search" }
      ]
    };
  }

  const passport = getTrustPassport(selected);
  const fit = getBuyerFitScore(selected);
  const statusClass = passport.score >= 84 && selected.availability === "available" ? "is-ready" : "is-watch";
  const availability = getAvailabilityLabel(selected.availability);

  return {
    listing: selected,
    statusClass,
    label: "Search result",
    headline: `${selected.name} is the cleanest visible path.`,
    detail: `${selected.supplier} in ${selected.city}, ${selected.region}. ${fit.summary || availability}.`,
    facts: [
      { label: "Matches", value: String(filtered.length), ready: filtered.length > 0 },
      { label: "Trust", value: `${passport.score}/100`, ready: passport.score >= 84 },
      { label: "Availability", value: availability, ready: selected.availability === "available" }
    ],
    actions: [
      { id: "copy", label: "Copy enquiry", primary: true },
      { id: "proof", label: "Check proof" },
      { id: "desk", label: "Buyer desk" }
    ]
  };
}

async function handleMarketplaceResultBriefAction(action, model) {
  if (model.listing) state.selectedListingId = model.listing.id;

  if (action === "copy") {
    saveState();
    try {
      await navigator.clipboard.writeText(buildLeadText());
      markEnquiryCopied();
      renderMarketplaceResultBrief();
      renderBuyerEnquiryReceipt();
      showToast("Direct enquiry copied from the search result brief.");
    } catch {
      showToast("Copy is blocked here, but the enquiry packet is visible.");
    }
    return;
  }

  if (action === "proof") {
    saveState();
    render();
    scrollToPageTarget(document.querySelector("#passport"), 120);
    showToast("Trust proof opened.");
    return;
  }

  if (action === "desk") {
    saveState();
    openSimplicityTarget("#buyer-workbench", "Buyer desk");
    return;
  }

  if (action === "widen") {
    const wider = getListingsForFilters({ ...state, availability: "all" });
    state.availability = "all";
    if (!wider.length) state.region = "all";
    state.sort = "fit";
    const matches = getFilteredListings();
    if (matches.length) state.selectedListingId = matches[0].id;
    saveState();
    syncFilterInputs();
    render();
    showToast("Wider search opened.");
    return;
  }

  if (action === "demand" || action === "hunt") {
    prepareDemandFromSearch();
    saveDemandSignal(action === "hunt" ? "Result brief supplier hunt" : "Result brief demand", false);
    const target = document.querySelector(action === "hunt" ? "#growth" : "#demandRequest");
    if (target) scrollToPageTarget(target, 110);
    showToast(action === "hunt" ? "Supplier hunt opened from search result." : "Buyer demand saved.");
  }
}

function renderMarketplaceDecisionCard() {
  const root = document.querySelector("#marketDecisionCard");
  if (!root) return;

  const model = getMarketplaceDecisionModel();
  root.innerHTML = `
    <div class="market-decision-card ${escapeHtml(model.statusClass)}">
      <div class="market-decision-main">
        <span>${escapeHtml(model.label)}</span>
        <strong>${escapeHtml(model.headline)}</strong>
        <small>${escapeHtml(model.detail)}</small>
      </div>
      <div class="market-decision-steps" aria-label="Buyer decision checks">
        ${model.steps.map((step) => `
          <b class="${step.ready ? "is-ready" : "is-gap"}">
            <span>${escapeHtml(step.label)}</span>
            <strong>${escapeHtml(step.value)}</strong>
          </b>
        `).join("")}
      </div>
      <label class="market-decision-note">
        <span>${escapeHtml(model.noteLabel)}</span>
        <textarea id="marketDecisionNote" rows="2" placeholder="${escapeHtml(model.placeholder)}">${escapeHtml(state.projectNote || "")}</textarea>
      </label>
      <div class="market-decision-actions">
        ${model.actions.map((action) => `
          <button type="button" class="${action.primary ? "is-primary" : ""}" data-market-decision="${escapeHtml(action.id)}">
            ${escapeHtml(action.label)}
          </button>
        `).join("")}
      </div>
    </div>
  `;

  const note = root.querySelector("#marketDecisionNote");
  if (note) {
    note.addEventListener("input", (event) => {
      state.projectNote = event.target.value;
      const fullNote = document.querySelector("#projectNote");
      const starterNote = document.querySelector("#marketProjectNote");
      if (fullNote && fullNote.value !== state.projectNote) fullNote.value = state.projectNote;
      if (starterNote && starterNote.value !== state.projectNote) starterNote.value = state.projectNote;
      saveState();
      renderDirectEnquiryComposer();
      renderSupplierResponseRoute();
      renderResponseTracker();
      renderReplyQualityGate();
      renderDecisionReceipt();
      renderBuyerWorkbench();
      renderBuyerEnquiryReceipt();
      renderCalmProofCard();
    });
  }

  root.querySelectorAll("[data-market-decision]").forEach((button) => {
    button.addEventListener("click", () => handleMarketplaceDecisionAction(button.dataset.marketDecision, model));
  });
}

function getMarketplaceDecisionModel() {
  const answer = getMarketplaceAnswerModel();
  const confidence = getMarketplaceConfidenceModel();
  const enquiry = getMarketplaceEnquiryStarterModel();
  const filtered = getFilteredListings();
  const listing = confidence.listing || enquiry.listing || getSelectedListing();
  const exactMode = filtered.length > 0;
  const readySteps = confidence.gates.filter((gate) => gate.ready).length;
  const statusClass = !exactMode ? "is-gap" : readySteps >= 3 ? "is-ready" : "is-watch";
  const machine = listing?.name || getDemandEquipmentFromSearch();
  const supplier = listing?.supplier || "verified supplier";
  const region = state.region === "all" ? listing?.region || "selected region" : state.region;
  const primaryAction = exactMode
    ? confidence.actions.find((action) => action.primary) || { id: "packet", label: "Open packet", primary: true }
    : { id: "demand", label: "Save need", primary: true };
  const secondaryAction = exactMode
    ? { id: "proof", label: "Check proof" }
    : { id: "hunt", label: "Find suppliers" };

  if (!exactMode) {
    return {
      listing,
      statusClass,
      label: "Buyer decision",
      headline: `No exact ${getDemandEquipmentFromSearch().toLowerCase()} supply yet.`,
      detail: `Save this ${region} need, recruit verified suppliers, and keep the buyer path honest.`,
      noteLabel: "Buyer need",
      placeholder: "Machine, region, dates, duration, operator, urgency",
      steps: [
        { label: "Match", value: "Gap", ready: false },
        { label: "Trust", value: `${confidence.gates[1]?.value || "Review"}`, ready: Boolean(confidence.gates[1]?.ready) },
        { label: "Next", value: "Recruit", ready: true }
      ],
      actions: [
        primaryAction,
        secondaryAction,
        { id: "available", label: "Any availability" }
      ]
    };
  }

  const exactActions = primaryAction.id === "packet"
    ? [
        primaryAction,
        secondaryAction
      ]
    : [
        primaryAction,
        { id: "packet", label: "Open packet" },
        secondaryAction
      ];

  return {
    listing,
    statusClass,
    label: "Buyer decision",
    headline: `${machine} is the cleanest path.`,
    detail: `${supplier} in ${region}. ${answer.detail}`,
    noteLabel: "Project note",
    placeholder: "Need machine with operator, dates, site, duration, delivery",
    steps: [
      { label: "Match", value: answer.facts[0]?.value || String(filtered.length), ready: filtered.length > 0 },
      { label: "Trust", value: confidence.gates.find((gate) => gate.label === "Proof")?.value || "Review", ready: confidence.gates.find((gate) => gate.label === "Proof")?.ready || false },
      { label: "Message", value: confidence.gates.find((gate) => gate.label === "Message")?.value || `${enquiry.direct.score}/100`, ready: confidence.gates.find((gate) => gate.label === "Message")?.ready || false }
    ],
    actions: exactActions
  };
}

async function handleMarketplaceDecisionAction(action, model) {
  if (model.listing) state.selectedListingId = model.listing.id;

  if (action === "copy") {
    saveState();
    try {
      await navigator.clipboard.writeText(buildLeadText());
      markEnquiryCopied();
      renderMarketplaceDecisionCard();
      renderCalmProofCard();
      renderBuyerEnquiryReceipt();
      showToast("Direct enquiry copied from the buyer decision card.");
    } catch {
      showToast("Copy is blocked here, but the enquiry packet is visible.");
    }
    return;
  }

  if (action === "packet") {
    saveState();
    render();
    scrollToPageTarget(document.querySelector("#leadTitle"), 130);
    showToast("Direct enquiry packet opened.");
    return;
  }

  if (action === "proof") {
    saveState();
    render();
    scrollToPageTarget(document.querySelector("#passport"), 120);
    showToast("Trust proof opened.");
    return;
  }

  if (action === "available") {
    state.availability = "all";
    state.sort = "available";
    saveState();
    syncFilterInputs();
    render();
    showToast("Showing wider availability options.");
    return;
  }

  if (action === "demand" || action === "hunt") {
    prepareDemandFromSearch();
    saveDemandSignal(action === "hunt" ? "Buyer decision supplier hunt" : "Buyer decision demand", false);
    const target = document.querySelector(action === "hunt" ? "#growth" : "#demandRequest");
    if (target) scrollToPageTarget(target, 110);
    showToast(action === "hunt" ? "Supplier hunt opened from buyer need." : "Buyer need saved.");
  }
}

function renderCalmProofCard() {
  const root = document.querySelector("#calmProofCard");
  if (!root) return;

  const model = getCalmProofCardModel();
  root.innerHTML = `
    <div class="calm-proof-card-panel ${escapeHtml(model.statusClass)}">
      <div class="calm-proof-copy">
        <span>${escapeHtml(model.label)}</span>
        <strong>${escapeHtml(model.headline)}</strong>
        <small>${escapeHtml(model.detail)}</small>
      </div>
      <div class="calm-proof-metrics" aria-label="Calm proof checks">
        ${model.metrics.map((metric) => `
          <b class="${metric.ready ? "is-ready" : "is-gap"}">
            <span>${escapeHtml(metric.label)}</span>
            <strong>${escapeHtml(metric.value)}</strong>
            <small>${escapeHtml(metric.detail)}</small>
          </b>
        `).join("")}
      </div>
      <div class="calm-proof-actions">
        ${model.actions.map((action) => `
          <button type="button" class="${action.primary ? "is-primary" : ""}" data-calm-proof-action="${escapeHtml(action.id)}">
            ${escapeHtml(action.label)}
          </button>
        `).join("")}
      </div>
    </div>
  `;

  root.querySelectorAll("[data-calm-proof-action]").forEach((button) => {
    button.addEventListener("click", () => handleCalmProofCardAction(button.dataset.calmProofAction, model));
  });
}

function getCalmProofCardModel() {
  const filtered = getFilteredListings();
  const listing = filtered[0] || getSelectedListing();
  const passport = getTrustPassport(listing);
  const fit = getBuyerFitScore(listing);
  const exactMode = filtered.length > 0;
  const readyProof = passport.proofItems.filter((item) => item.ready).length;
  const proofTotal = passport.proofItems.length;
  const availabilityReady = exactMode && listing.availability === "available";
  const proofReady = passport.score >= 84 || (passport.score >= 74 && readyProof >= Math.max(1, proofTotal - 1));
  const routeReady = exactMode && listing.verified;
  const readyCount = [exactMode, availabilityReady, proofReady, routeReady].filter(Boolean).length;
  const region = state.region === "all" ? listing.region : state.region;
  const statusClass = !exactMode ? "is-gap" : readyCount >= 3 ? "is-ready" : "is-watch";
  const next = !exactMode
    ? "Capture demand and recruit verified suppliers before promising supply."
    : availabilityReady && proofReady
      ? "Send one direct enquiry and keep payment with the supplier."
      : "Open the passport, confirm proof or availability, then send the enquiry.";

  if (!exactMode) {
    return {
      listing,
      passport,
      label: "Calm proof",
      statusClass,
      headline: `No safe ${getDemandEquipmentFromSearch().toLowerCase()} proof yet.`,
      detail: `Use the ${region} demand as supplier recruitment signal before pushing the buyer into a weak result.`,
      next,
      metrics: [
        { label: "Supply", value: "Gap", detail: "no exact listing", ready: false },
        { label: "Trust", value: `${passport.score}/100`, detail: passport.verdict, ready: proofReady },
        { label: "Route", value: "Recruit", detail: "supplier hunt", ready: true },
        { label: "Payment", value: "0%", detail: "rental take", ready: true }
      ],
      actions: [
        { id: "demand", label: "Capture demand", primary: true },
        { id: "hunt", label: "Open hunt" }
      ]
    };
  }

  return {
    listing,
    passport,
    label: "Calm proof",
    statusClass,
    headline: `${listing.name} is ${proofReady ? "safe to enquire" : "one proof check away"}.`,
    detail: `${listing.supplier} in ${listing.city}, ${listing.region}. ${fit.status}, ${passport.verdict.toLowerCase()}, ${listing.availability === "available" ? "available now" : "confirm availability"}.`,
    next,
    metrics: [
      { label: "Trust", value: `${passport.score}/100`, detail: passport.verdict, ready: proofReady },
      { label: "Proof", value: `${readyProof}/${proofTotal}`, detail: "checks visible", ready: readyProof >= Math.max(1, proofTotal - 1) },
      { label: "Availability", value: availabilityReady ? "Now" : "Confirm", detail: availabilityReady ? "ready to ask" : "supplier check", ready: availabilityReady },
      { label: "Payment", value: "0%", detail: "rental take", ready: true }
    ],
    actions: [
      { id: "copy", label: "Copy proof card", primary: true },
      { id: "passport", label: "Open passport" }
    ]
  };
}

async function handleCalmProofCardAction(action, model) {
  if (model.listing) state.selectedListingId = model.listing.id;

  if (action === "copy") {
    saveState();
    try {
      await navigator.clipboard.writeText(buildCalmProofCardText(model));
      showToast("Calm proof card copied.");
    } catch {
      showToast("Copy is blocked here, but the calm proof card is visible.");
    }
    return;
  }

  if (action === "passport") {
    saveState();
    render();
    scrollToPageTarget(document.querySelector("#passport"), 120);
    showToast("Trust passport opened.");
    return;
  }

  if (action === "demand" || action === "hunt") {
    prepareDemandFromSearch();
    saveDemandSignal(action === "hunt" ? "Calm proof supplier hunt" : "Calm proof demand", false);
    const target = document.querySelector(action === "hunt" ? "#growth" : "#demandRequest");
    if (target) scrollToPageTarget(target, 110);
    showToast(action === "hunt" ? "Supplier hunt opened from calm proof." : "Demand captured from calm proof.");
  }
}

function buildCalmProofCardText(model = getCalmProofCardModel()) {
  const listing = model.listing || getSelectedListing();
  const proofReady = model.passport.proofItems.filter((item) => item.ready).length;
  const proofTotal = model.passport.proofItems.length;

  return [
    "Heavyster Calm Proof Card",
    "Version: v142 Calm Proof Card",
    "Rule: one machine, one proof answer, one direct enquiry action.",
    "",
    `Machine: ${listing.name}`,
    `Supplier: ${listing.supplier} - ${listing.city}, ${listing.region}`,
    `Category: ${listing.category}`,
    `Trust: ${model.passport.score}/100 - ${model.passport.verdict}`,
    `Proof: ${proofReady}/${proofTotal} checks visible`,
    `Availability: ${listing.availability === "available" ? "available now" : "confirm before enquiry"}`,
    `Buyer action: ${model.next}`,
    "",
    "Payment rule: buyer pays the rental company directly. Heavyster earns listing SaaS only in phase one.",
    "Rental take: 0%.",
    "Simplicity promise: show the safest visible route before deeper RFQ, award, or booking workflows."
  ].join("\n");
}

function renderBuyerEnquiryReceipt() {
  const root = document.querySelector("#buyerEnquiryReceipt");
  if (!root) return;

  const model = getBuyerEnquiryReceiptModel();
  root.innerHTML = `
    <div class="buyer-receipt-card ${escapeHtml(model.statusClass)}">
      <div class="buyer-receipt-main">
        <div>
          <span>${escapeHtml(model.badge)}</span>
          <strong>${escapeHtml(model.headline)}</strong>
          <small>${escapeHtml(model.detail)}</small>
        </div>
        <b>${escapeHtml(model.scoreLabel)}</b>
      </div>
      <div class="buyer-receipt-lines">
        ${model.lines.map((line) => `
          <span class="${line.ready ? "is-ready" : "is-watch"}">
            <strong>${escapeHtml(line.value)}</strong>
            ${escapeHtml(line.label)}
            <small>${escapeHtml(line.detail)}</small>
          </span>
        `).join("")}
      </div>
      <div class="buyer-receipt-actions">
        ${model.actions.map((action) => `
          <button type="button" class="${action.primary ? "is-primary" : ""}" data-buyer-receipt-action="${escapeHtml(action.id)}">
            ${escapeHtml(action.label)}
          </button>
        `).join("")}
      </div>
    </div>
  `;

  root.querySelectorAll("[data-buyer-receipt-action]").forEach((button) => {
    button.addEventListener("click", () => handleBuyerEnquiryReceiptAction(button.dataset.buyerReceiptAction, model));
  });
}

function getBuyerEnquiryReceiptModel() {
  const filtered = getFilteredListings();
  const exactMode = filtered.length > 0;
  const direct = getDirectEnquiryModel();
  const route = getSupplierResponseRouteModel();
  const tracker = getResponseTrackerModel();
  const listing = direct.listing;
  const availabilityLabel = getAvailabilityLabel(listing.availability);
  const noteReady = Boolean(String(state.projectNote || "").trim());
  const proofReady = direct.passport.score >= 74;
  const messageReady = direct.score >= 86;
  const availableReady = exactMode && listing.availability === "available";
  const safeToSend = exactMode && proofReady && messageReady;
  const score = exactMode
    ? Math.min(100, Math.round(direct.score * 0.62 + direct.passport.score * 0.23 + direct.fit.score * 0.15))
    : Math.max(28, Math.min(62, Math.round(direct.passport.score * 0.48 + direct.fit.score * 0.26)));
  const statusClass = !exactMode ? "is-gap" : safeToSend ? "is-ready" : "is-watch";
  const equipment = getDemandEquipmentFromSearch();
  const region = state.region === "all" ? listing.region : state.region;
  const receiptStatus = tracker.status === "replied"
    ? "Replied"
    : tracker.status === "sent"
      ? "Sent"
      : tracker.status === "copied"
        ? "Copied"
        : "Draft";

  if (!exactMode) {
    return {
      listing,
      direct,
      route,
      tracker,
      exactMode,
      statusClass,
      score,
      scoreLabel: "Gap",
      badge: "Demand receipt",
      headline: `Save ${equipment.toLowerCase()} demand before forcing a weak match.`,
      detail: `No exact supply in ${region}. Capture the buyer need, recruit verified suppliers, and keep the path honest.`,
      lines: [
        { label: "Supply", value: "Gap", detail: "No exact match", ready: false },
        { label: "Closest proof", value: `${direct.passport.score}/100`, detail: direct.passport.verdict, ready: proofReady },
        { label: "Next", value: "Recruit", detail: "Use demand to find supply", ready: true },
        { label: "Payment", value: "Direct", detail: "0% rental commission", ready: true }
      ],
      actions: [
        { id: "demand", label: "Save demand", primary: true },
        { id: "hunt", label: "Find suppliers" },
        { id: "widen", label: "Widen search" }
      ]
    };
  }

  return {
    listing,
    direct,
    route,
    tracker,
    exactMode,
    statusClass,
    score,
    scoreLabel: `${score}/100`,
    badge: receiptStatus === "Draft" ? "Enquiry receipt" : `${receiptStatus} receipt`,
    headline: `${listing.name} enquiry is ready to control.`,
    detail: `${listing.supplier} in ${listing.city}, ${listing.region}. Use ${route.primaryChannel} first; rental payment stays direct.`,
    lines: [
      { label: "Machine", value: String(filtered.length), detail: `${listing.category} match`, ready: true },
      { label: "Proof", value: `${direct.passport.score}/100`, detail: direct.passport.verdict, ready: proofReady },
      { label: "Message", value: `${direct.score}/100`, detail: noteReady ? "Buyer note attached" : "Add dates and site", ready: messageReady },
      { label: "Availability", value: availabilityLabel, detail: availableReady ? "ready to ask" : "confirm before award", ready: availableReady }
    ],
    actions: [
      { id: "copy", label: "Copy receipt", primary: true },
      { id: "packet", label: "Open packet" },
      { id: "proof", label: "Check proof" }
    ]
  };
}

async function handleBuyerEnquiryReceiptAction(action, model) {
  if (model.listing) state.selectedListingId = model.listing.id;

  if (action === "copy") {
    saveState();
    try {
      await navigator.clipboard.writeText(buildBuyerEnquiryReceiptText(model));
      markEnquiryCopied();
      renderBuyerEnquiryReceipt();
      renderMarketplaceDecisionCard();
      renderCalmProofCard();
      showToast("Buyer enquiry receipt copied.");
    } catch {
      showToast("Copy is blocked here, but the buyer receipt is visible.");
    }
    return;
  }

  if (action === "packet") {
    saveState();
    render();
    scrollToPageTarget(document.querySelector("#leadTitle"), 130);
    showToast("Direct enquiry packet opened.");
    return;
  }

  if (action === "proof") {
    saveState();
    render();
    scrollToPageTarget(document.querySelector("#passport"), 120);
    showToast("Trust proof opened.");
    return;
  }

  if (action === "widen") {
    state.availability = "all";
    state.sort = "fit";
    saveState();
    syncFilterInputs();
    render();
    showToast("Wider search opened.");
    return;
  }

  if (action === "demand" || action === "hunt") {
    prepareDemandFromSearch();
    saveDemandSignal(action === "hunt" ? "Buyer receipt supplier hunt" : "Buyer receipt demand", false);
    const target = document.querySelector(action === "hunt" ? "#growth" : "#demandRequest");
    if (target) scrollToPageTarget(target, 110);
    showToast(action === "hunt" ? "Supplier hunt opened from buyer receipt." : "Buyer demand saved from receipt.");
  }
}

function buildBuyerEnquiryReceiptText(model = getBuyerEnquiryReceiptModel()) {
  if (!model.exactMode) {
    return [
      "Heavyster Buyer Demand Receipt",
      `Need: ${getDemandEquipmentFromSearch()}`,
      `Region: ${state.region === "all" ? "selected market" : state.region}`,
      `Closest recovery: ${model.listing.name} - ${model.listing.supplier}`,
      `Proof: ${model.direct.passport.score}/100 - ${model.direct.passport.verdict}`,
      "Next move: recruit verified suppliers or widen availability before routing a serious buyer.",
      "Payment rule: buyer pays rental company directly; Heavyster takes 0% rental commission in phase one."
    ].join("\n");
  }

  return [
    "Heavyster Buyer Enquiry Receipt",
    `Machine: ${model.listing.name}`,
    `Supplier: ${model.listing.supplier}`,
    `Location: ${model.listing.city}, ${model.listing.region}`,
    `Availability: ${getAvailabilityLabel(model.listing.availability)}`,
    `Proof: ${model.direct.passport.score}/100 - ${model.direct.passport.verdict}`,
    `Buyer fit: ${model.direct.fit.score}/100 - ${model.direct.fit.status}`,
    `Message: ${model.direct.score}/100 - ${model.direct.status}`,
    `Route: ${model.route.primaryChannel} first, backup ${model.route.backupChannel}, follow up after ${model.route.followUp}`,
    "Payment rule: buyer pays rental company directly; Heavyster takes 0% rental commission in phase one.",
    "",
    "Message:",
    ...model.direct.message
  ].join("\n");
}

function renderMarketplaceScaleGuard() {
  const root = document.querySelector("#marketScaleGuard");
  if (!root) return;

  const model = getMarketplaceScaleGuardModel();
  root.innerHTML = `
    <div class="market-scale-card ${escapeHtml(model.statusClass)}">
      <div class="market-scale-main">
        <span>${escapeHtml(model.badge)}</span>
        <strong>${escapeHtml(model.headline)}</strong>
        <small>${escapeHtml(model.detail)}</small>
      </div>
      <div class="market-scale-metrics">
        ${model.metrics.map((metric) => `
          <b class="${metric.ready ? "is-ready" : "is-watch"}">
            <strong>${escapeHtml(metric.value)}</strong>
            ${escapeHtml(metric.label)}
            <small>${escapeHtml(metric.detail)}</small>
          </b>
        `).join("")}
      </div>
      <div class="market-scale-actions">
        ${model.actions.map((action) => `
          <button type="button" class="${action.primary ? "is-primary" : ""}" data-market-scale-action="${escapeHtml(action.id)}">
            ${escapeHtml(action.label)}
          </button>
        `).join("")}
      </div>
    </div>
  `;

  root.querySelectorAll("[data-market-scale-action]").forEach((button) => {
    button.addEventListener("click", () => handleMarketplaceScaleGuardAction(button.dataset.marketScaleAction, model));
  });
}

function getMarketplaceScaleGuardModel() {
  const filtered = getFilteredListings();
  const exactCount = filtered.length;
  const availabilityWide = getListingsForFilters({ ...state, availability: "all" });
  const marketWide = getListingsForFilters({ ...state, region: "all", availability: "all" });
  const nearby = getNearbyListings();
  const recovery = availabilityWide.length ? availabilityWide : marketWide.length ? marketWide : nearby;
  const source = exactCount ? filtered : recovery;
  const best = source[0] || getSelectedListing();
  const equipment = getDemandEquipmentFromSearch();
  const region = state.region === "all" ? "selected markets" : state.region;
  const supplierCount = new Set(source.map((listing) => listing.supplier)).size;
  const verifiedCount = source.filter((listing) => listing.verified).length;
  const noExact = exactCount === 0;
  const tooMany = exactCount >= 18;
  const statusClass = noExact ? "is-gap" : tooMany ? "is-watch" : "is-ready";
  const bestTrust = best ? getTrustPassport(best).score : 0;
  const bestAvailability = best ? getAvailabilityLabel(best.availability) : "Unknown";

  const headline = noExact
    ? `No exact ${equipment.toLowerCase()} supply in ${region}.`
    : tooMany
      ? `${exactCount} matches found. Switch to compact rows first.`
      : `${best.name} stays as the clean buyer path.`;

  const detail = noExact
    ? recovery.length
      ? `${recovery.length} recovery option${recovery.length === 1 ? "" : "s"} found when filters loosen. Widen now or save the demand gap.`
      : "No visible recovery path yet. Save the demand and use it to recruit suppliers."
    : tooMany
      ? "Use compact rows for scanning, then return to one best machine before sending a direct enquiry."
      : `${best.supplier} in ${best.city}, ${best.region}; ${bestAvailability}; trust ${bestTrust}/100; 0% rental take.`;

  return {
    best,
    exactCount,
    noExact,
    tooMany,
    statusClass,
    badge: "Scale guard",
    headline,
    detail,
    metrics: [
      {
        label: "Visible",
        value: String(exactCount),
        detail: noExact ? "current filter gap" : "after filters",
        ready: exactCount > 0
      },
      {
        label: noExact ? "Recovery" : "Verified",
        value: noExact ? String(recovery.length) : String(verifiedCount),
        detail: noExact ? "looser filter paths" : `${supplierCount} supplier${supplierCount === 1 ? "" : "s"}`,
        ready: noExact ? recovery.length > 0 : verifiedCount > 0
      },
      {
        label: "Mode",
        value: noExact ? "Demand" : tooMany ? "Rows" : "Best",
        detail: noExact ? "save or widen" : tooMany ? "scan first" : "send clean",
        ready: !noExact
      }
    ],
    actions: noExact
      ? [
          { id: "widen", label: "Widen search", primary: true },
          { id: "demand", label: "Save demand" },
          { id: "rows", label: "Open rows" }
        ]
      : tooMany
        ? [
            { id: "rows", label: "Open rows", primary: true },
            { id: "best", label: "Best path" },
            { id: "copy", label: "Copy guard" }
          ]
        : [
            { id: "best", label: "Keep best", primary: true },
            { id: "rows", label: "Open rows" },
            { id: "copy", label: "Copy guard" }
          ]
  };
}

async function handleMarketplaceScaleGuardAction(action, model) {
  if (model.best) state.selectedListingId = model.best.id;

  if (action === "best") {
    state.sort = "fit";
    saveState();
    syncFilterInputs();
    render();
    showToast("Best buyer path kept in focus.");
    return;
  }

  if (action === "rows") {
    state.compactView = true;
    state.sort = "fit";
    if (model.noExact) {
      state.availability = "all";
      let matches = getListingsForFilters(state);
      if (!matches.length) {
        state.region = "all";
        matches = getListingsForFilters(state);
      }
      if (matches.length) state.selectedListingId = matches[0].id;
    }
    saveState();
    syncFilterInputs();
    render();
    scrollToPageTarget(document.querySelector("#compactCatalog"), 120);
    showToast("Compact rows opened for larger inventory scanning.");
    return;
  }

  if (action === "widen") {
    state.availability = "all";
    state.sort = "fit";
    let matches = getListingsForFilters(state);
    if (!matches.length) {
      state.region = "all";
      matches = getListingsForFilters(state);
    }
    if (matches.length) state.selectedListingId = matches[0].id;
    saveState();
    syncFilterInputs();
    render();
    showToast("Search widened without losing the buyer intent.");
    return;
  }

  if (action === "demand") {
    prepareDemandFromSearch();
    saveDemandSignal("Marketplace scale guard demand", false);
    const target = document.querySelector("#demandRequest");
    if (target) scrollToPageTarget(target, 110);
    showToast("Demand saved from the scale guard.");
    return;
  }

  if (action === "copy") {
    try {
      await navigator.clipboard.writeText(buildMarketplaceScaleGuardText(model));
      showToast("Marketplace scale guard copied.");
    } catch {
      showToast("Copy is blocked here, but the scale guard is visible.");
    }
  }
}

function buildMarketplaceScaleGuardText(model = getMarketplaceScaleGuardModel()) {
  const region = state.region === "all" ? "all regions" : state.region;
  const bestLine = model.best
    ? `${model.best.name} - ${model.best.supplier}, ${model.best.city}, ${model.best.region}`
    : "No visible machine path";

  return [
    "Heavyster Marketplace Scale Guard",
    `Search: ${state.search || "all equipment"}`,
    `Region: ${region}`,
    `Visible matches: ${model.exactCount}`,
    `Recommended mode: ${model.metrics[2].value}`,
    `Best path: ${bestLine}`,
    model.detail,
    "Rule: show one clean buyer path first, use compact rows for volume, and save demand when supply is missing.",
    "Payment rule: buyer pays rental company directly; Heavyster takes 0% rental commission in phase one."
  ].join("\n");
}

function renderMarketplaceAnswer() {
  const root = document.querySelector("#marketAnswer");
  if (!root) return;

  const model = getMarketplaceAnswerModel();
  root.innerHTML = `
    <div class="market-answer-card ${escapeHtml(model.statusClass)}">
      <div class="market-answer-copy">
        <span>${escapeHtml(model.label)}</span>
        <strong>${escapeHtml(model.headline)}</strong>
        <small>${escapeHtml(model.detail)}</small>
      </div>
      <div class="market-answer-facts">
        ${model.facts.map((fact) => `
          <b>
            <strong>${escapeHtml(fact.value)}</strong>
            <small>${escapeHtml(fact.label)}</small>
          </b>
        `).join("")}
      </div>
      <div class="market-answer-actions">
        ${model.actions.map((action) => `
          <button type="button" class="${action.primary ? "is-primary" : ""}" data-market-answer="${escapeHtml(action.id)}">
            ${escapeHtml(action.label)}
          </button>
        `).join("")}
      </div>
    </div>
  `;

  root.querySelectorAll("[data-market-answer]").forEach((button) => {
    button.addEventListener("click", () => handleMarketplaceAnswerAction(button.dataset.marketAnswer, model));
  });
}

function renderMarketplaceEnquiryStarter() {
  const root = document.querySelector("#marketEnquiryStarter");
  if (!root) return;

  const model = getMarketplaceEnquiryStarterModel();
  root.innerHTML = `
    <div class="market-enquiry-card ${escapeHtml(model.statusClass)}">
      <div class="market-enquiry-copy">
        <span>${escapeHtml(model.label)}</span>
        <strong>${escapeHtml(model.headline)}</strong>
        <small>${escapeHtml(model.detail)}</small>
      </div>
      <label class="market-enquiry-note">
        <span>${escapeHtml(model.noteLabel)}</span>
        <textarea id="marketProjectNote" rows="2" placeholder="${escapeHtml(model.placeholder)}">${escapeHtml(state.projectNote || "")}</textarea>
      </label>
      <div class="market-enquiry-controls">
        <div class="market-enquiry-modes" aria-label="Direct enquiry mode">
          ${model.modes.map((mode) => `
            <button type="button" class="${mode.id === model.mode ? "is-active" : ""}" data-enquiry-starter-mode="${escapeHtml(mode.id)}">
              ${escapeHtml(mode.label)}
            </button>
          `).join("")}
        </div>
        <div class="market-enquiry-actions">
          ${model.actions.map((action) => `
            <button type="button" class="${action.primary ? "is-primary" : ""}" data-enquiry-starter-action="${escapeHtml(action.id)}">
              ${escapeHtml(action.label)}
            </button>
          `).join("")}
        </div>
      </div>
    </div>
  `;

  const note = root.querySelector("#marketProjectNote");
  if (note) {
    note.addEventListener("input", (event) => {
      state.projectNote = event.target.value;
      const fullNote = document.querySelector("#projectNote");
      if (fullNote && fullNote.value !== state.projectNote) fullNote.value = state.projectNote;
      saveState();
      renderDirectEnquiryComposer();
      renderSupplierResponseRoute();
      renderResponseTracker();
      renderReplyQualityGate();
      renderDecisionReceipt();
      renderBuyerWorkbench();
      renderMarketplaceDecisionCard();
      renderCalmProofCard();
      renderBuyerEnquiryReceipt();
      renderMarketplaceConfidenceStrip();
    });
  }

  root.querySelectorAll("[data-enquiry-starter-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.enquiryMode = button.dataset.enquiryStarterMode;
      const fullMode = document.querySelector("#enquiryMode");
      if (fullMode) fullMode.value = state.enquiryMode;
      saveState();
      renderMarketplaceDecisionCard();
      renderCalmProofCard();
      renderBuyerEnquiryReceipt();
      renderMarketplaceEnquiryStarter();
      renderMarketplaceConfidenceStrip();
      renderDirectEnquiryComposer();
      renderSupplierResponseRoute();
      renderResponseTracker();
      renderReplyQualityGate();
      showToast(`${button.textContent.trim()} enquiry mode selected.`);
    });
  });

  root.querySelectorAll("[data-enquiry-starter-action]").forEach((button) => {
    button.addEventListener("click", () => handleMarketplaceEnquiryStarterAction(button.dataset.enquiryStarterAction, model));
  });
}

function renderMarketplaceConfidenceStrip() {
  const root = document.querySelector("#marketConfidenceStrip");
  if (!root) return;

  const model = getMarketplaceConfidenceModel();
  root.innerHTML = `
    <div class="market-confidence-card ${escapeHtml(model.statusClass)}">
      <div class="market-confidence-copy">
        <span>${escapeHtml(model.label)}</span>
        <strong>${escapeHtml(model.headline)}</strong>
        <small>${escapeHtml(model.detail)}</small>
      </div>
      <div class="market-confidence-gates">
        ${model.gates.map((gate) => `
          <b class="${gate.ready ? "is-ready" : "is-gap"}">
            <strong>${escapeHtml(gate.value)}</strong>
            <small>${escapeHtml(gate.label)}</small>
          </b>
        `).join("")}
      </div>
      <div class="market-confidence-actions">
        ${model.actions.map((action) => `
          <button type="button" class="${action.primary ? "is-primary" : ""}" data-market-confidence="${escapeHtml(action.id)}">
            ${escapeHtml(action.label)}
          </button>
        `).join("")}
      </div>
    </div>
  `;

  root.querySelectorAll("[data-market-confidence]").forEach((button) => {
    button.addEventListener("click", () => handleMarketplaceConfidenceAction(button.dataset.marketConfidence, model));
  });
}

function getMarketplaceConfidenceModel() {
  const answer = getMarketplaceAnswerModel();
  const filtered = getFilteredListings();
  const listing = listings.find((item) => item.id === answer.listingId) || getSelectedListing();
  const passport = getTrustPassport(listing);
  const direct = getDirectEnquiryModel();
  const fit = getBuyerFitScore(listing);
  const exactMode = filtered.length > 0;
  const availabilityReady = exactMode && listing.availability === "available";
  const proofReady = passport.score >= 74;
  const messageReady = direct.score >= 86;
  const fitReady = fit.score >= 68;
  const statusClass = !exactMode ? "is-gap" : availabilityReady && proofReady && messageReady && fitReady ? "is-ready" : "is-watch";
  const readyCount = [availabilityReady, proofReady, messageReady, fitReady].filter(Boolean).length;
  const region = state.region === "all" ? listing.region : state.region;
  const primaryAction = proofReady && messageReady
    ? { id: "copy", label: "Copy enquiry", primary: true }
    : proofReady
      ? { id: "packet", label: "Open packet", primary: true }
      : { id: "proof", label: "Check proof", primary: true };
  const secondaryAction = primaryAction.id === "packet"
    ? { id: "proof", label: "Check proof" }
    : { id: "packet", label: "Open packet" };

  if (!exactMode) {
    return {
      listing,
      statusClass,
      label: "Buyer confidence",
      headline: "Do not force a weak match.",
      detail: `No exact ${getDemandEquipmentFromSearch().toLowerCase()} supply in ${region}. Save the need and use it to recruit verified suppliers.`,
      gates: [
        { label: "Supply", value: "Gap", ready: false },
        { label: "Proof", value: `${passport.score}/100`, ready: proofReady },
        { label: "Next", value: "Recruit", ready: true }
      ],
      actions: [
        { id: "demand", label: "Save need", primary: true },
        { id: "hunt", label: "Find suppliers" }
      ]
    };
  }

  return {
    listing,
    statusClass,
    label: "Buyer confidence",
    headline: readyCount >= 3 ? "Safe to ask direct." : "Ask one clean check first.",
    detail: `${readyCount}/4 confidence gates ready for ${listing.name}. Keep payment direct and let the supplier confirm terms.`,
    gates: [
      { label: "Supply", value: availabilityReady ? "Live" : "Check", ready: availabilityReady },
      { label: "Proof", value: `${passport.score}/100`, ready: proofReady },
      { label: "Message", value: `${direct.score}/100`, ready: messageReady },
      { label: "Fit", value: `${fit.score}/100`, ready: fitReady }
    ],
    actions: [
      primaryAction,
      secondaryAction
    ]
  };
}

async function handleMarketplaceConfidenceAction(action, model) {
  if (model.listing) state.selectedListingId = model.listing.id;

  if (action === "copy") {
    saveState();
    try {
      await navigator.clipboard.writeText(buildLeadText());
      markEnquiryCopied();
      renderMarketplaceConfidenceStrip();
      renderBuyerEnquiryReceipt();
      showToast("Direct enquiry copied with confidence checks.");
    } catch {
      showToast("Copy is blocked here, but the enquiry packet is visible.");
    }
    return;
  }

  if (action === "packet") {
    saveState();
    render();
    scrollToPageTarget(document.querySelector("#leadTitle"), 130);
    showToast("Direct enquiry packet opened.");
    return;
  }

  if (action === "proof") {
    saveState();
    render();
    scrollToPageTarget(document.querySelector("#passport"), 120);
    showToast("Trust proof opened.");
    return;
  }

  if (action === "demand" || action === "hunt") {
    prepareDemandFromSearch();
    saveDemandSignal(action === "hunt" ? "Buyer confidence supplier hunt" : "Buyer confidence demand", false);
    const target = document.querySelector(action === "hunt" ? "#growth" : "#demandRequest");
    if (target) scrollToPageTarget(target, 110);
    showToast(action === "hunt" ? "Supplier hunt opened from buyer need." : "Buyer need saved.");
  }
}

function getMarketplaceEnquiryStarterModel() {
  const answer = getMarketplaceAnswerModel();
  const filtered = getFilteredListings();
  const listing = listings.find((item) => item.id === answer.listingId) || getSelectedListing();
  const direct = getDirectEnquiryModel();
  const exactMode = filtered.length > 0;
  const ready = direct.score >= 86;
  const statusClass = exactMode ? ready ? "is-ready" : "is-watch" : "is-gap";
  const supplier = listing?.supplier || "supplier";
  const machine = listing?.name || getDemandEquipmentFromSearch();
  return {
    answer,
    listing,
    direct,
    exactMode,
    statusClass,
    mode: state.enquiryMode || "proof",
    label: exactMode ? "Enquiry starter" : "Demand starter",
    headline: exactMode ? `Ask ${supplier} about ${machine}.` : `Capture this ${getDemandEquipmentFromSearch().toLowerCase()} request.`,
    detail: exactMode
      ? `${direct.score}/100 message readiness. One note here updates the full direct enquiry packet.`
      : "No exact supply yet. Save the buyer need and use it to recruit verified suppliers.",
    noteLabel: exactMode ? "Project note" : "Buyer need",
    placeholder: exactMode ? "Need machine with operator for 5 days near Jebel Ali" : "Needed machine, location, dates, duration, and urgency",
    modes: [
      { id: "quick", label: "Quick" },
      { id: "proof", label: "Proof" },
      { id: "quote", label: "Quote" }
    ],
    actions: exactMode
      ? [
          { id: "copy", label: "Copy enquiry", primary: true },
          { id: "packet", label: "Full packet" }
        ]
      : [
          { id: "demand", label: "Save demand", primary: true },
          { id: "hunt", label: "Supplier hunt" }
        ]
  };
}

async function handleMarketplaceEnquiryStarterAction(action, model) {
  if (action === "copy") {
    if (model.listing) state.selectedListingId = model.listing.id;
    saveState();
    try {
      await navigator.clipboard.writeText(buildLeadText());
      markEnquiryCopied();
      renderMarketplaceEnquiryStarter();
      renderBuyerEnquiryReceipt();
      showToast("Direct enquiry copied from marketplace.");
    } catch {
      showToast("Copy is blocked here, but the enquiry packet is visible.");
    }
    return;
  }

  if (action === "packet") {
    if (model.listing) state.selectedListingId = model.listing.id;
    saveState();
    render();
    scrollToPageTarget(document.querySelector("#leadTitle"), 130);
    showToast("Full direct enquiry packet opened.");
    return;
  }

  if (action === "demand" || action === "hunt") {
    prepareDemandFromSearch();
    saveDemandSignal(action === "hunt" ? "Marketplace enquiry starter supplier hunt" : "Marketplace enquiry starter demand", false);
    const target = document.querySelector(action === "hunt" ? "#growth" : "#demandRequest");
    if (target) scrollToPageTarget(target, 110);
    showToast(action === "hunt" ? "Supplier hunt opened from buyer need." : "Buyer demand saved.");
  }
}

function getMarketplaceAnswerModel() {
  const filtered = getFilteredListings();
  const nearby = filtered.length ? [] : getNearbyListings();
  const exactCount = filtered.length;
  const source = filtered.length ? filtered : nearby;
  const best = source[0] || getSelectedListing();
  const fit = getBuyerFitScore(best);
  const availableCount = filtered.filter((listing) => listing.availability === "available").length;
  const verifiedSuppliers = new Set(filtered.filter((listing) => listing.verified).map((listing) => listing.supplier)).size;
  const equipment = getDemandEquipmentFromSearch();
  const region = state.region === "all" ? "all regions" : state.region;

  if (!exactCount) {
    return {
      label: "Best answer",
      statusClass: "is-gap",
      headline: `No exact ${equipment.toLowerCase()} match in ${region}.`,
      detail: best
        ? `Closest recovery is ${best.name} from ${best.supplier}. Capture demand if the buyer needs this exact lane.`
        : "Capture the buyer demand and turn it into a supplier recruitment signal.",
      listingId: best?.id || "",
      facts: [
        { value: "0", label: "exact matches" },
        { value: String(nearby.length), label: "nearby options" },
        { value: "Recruit", label: "next move" }
      ],
      actions: [
        { id: "closest", label: "Show closest", primary: Boolean(best) },
        { id: "demand", label: "Capture demand", primary: !best },
        { id: "hunt", label: "Supplier hunt" }
      ]
    };
  }

  if (availableCount) {
    return {
      label: "Best answer",
      statusClass: "is-ready",
      headline: `${best.name} from ${best.supplier}`,
      detail: `${best.city}, ${best.region}. ${fit.status}. Send a direct enquiry and keep rental payment between buyer and supplier.`,
      listingId: best.id,
      facts: [
        { value: String(exactCount), label: "matches" },
        { value: `${fit.score}/100`, label: "buyer fit" },
        { value: "0%", label: "rental take" }
      ],
      actions: [
        { id: "packet", label: "Open packet", primary: true },
        { id: "proof", label: "Check proof" },
        { id: "shortlist", label: state.shortlistIds.includes(best.id) ? "Saved" : "Save" }
      ]
    };
  }

  return {
    label: "Best answer",
    statusClass: "is-watch",
    headline: `${best.name} is the closest current match.`,
    detail: `${best.supplier} has ${best.availability === "soon" ? "available soon" : "non-live"} status. Ask for confirmed availability before RFQ or award.`,
    listingId: best.id,
    facts: [
      { value: String(exactCount), label: "matches" },
      { value: String(verifiedSuppliers), label: "verified suppliers" },
      { value: "Confirm", label: "availability" }
    ],
    actions: [
      { id: "packet", label: "Open packet", primary: true },
      { id: "available", label: "Show available" },
      { id: "demand", label: "Capture demand" }
    ]
  };
}

function handleMarketplaceAnswerAction(action, model) {
  const listing = listings.find((item) => item.id === model.listingId);

  if (["packet", "closest", "proof", "shortlist"].includes(action) && listing) {
    state.selectedListingId = listing.id;
  }

  if (action === "packet" || action === "closest") {
    if (action === "closest") state.availability = "all";
    saveState();
    syncFilterInputs();
    render();
    scrollToPageTarget(document.querySelector("#leadTitle"), 130);
    showToast(action === "closest" ? "Closest supplier packet opened." : "Best supplier packet opened.");
    return;
  }

  if (action === "proof") {
    saveState();
    render();
    scrollToPageTarget(document.querySelector("#passport"), 120);
    showToast("Trust proof opened.");
    return;
  }

  if (action === "shortlist" && listing) {
    if (!state.shortlistIds.includes(listing.id)) {
      toggleShortlist(listing.id);
    } else {
      showToast("Already saved to shortlist.");
    }
    return;
  }

  if (action === "available") {
    state.availability = "available";
    state.sort = "available";
    saveState();
    syncFilterInputs();
    render();
    showToast("Showing available supply first.");
    return;
  }

  if (action === "hunt" || action === "demand") {
    prepareDemandFromSearch();
    saveDemandSignal(action === "hunt" ? "Answer-first supplier hunt" : "Answer-first demand", false);
    const target = document.querySelector(action === "hunt" ? "#growth" : "#demandRequest");
    if (target) scrollToPageTarget(target, 110);
    showToast(action === "hunt" ? "Supplier hunt opened." : "Demand captured from search.");
  }
}

function getMarketplaceSearchAssistItems() {
  const query = state.search.toLowerCase();
  const items = [];
  const seen = new Set();
  const add = (item) => {
    const key = `${item.kind}:${item.id}:${item.value}`;
    if (seen.has(key) || items.length >= 4) return;
    seen.add(key);
    items.push(item);
  };

  if (query) {
    listings
      .map((listing) => {
        const searchable = [listing.name, listing.category, listing.supplier, listing.region, listing.city, listing.specs].join(" ").toLowerCase();
        let score = 0;
        if (listing.name.toLowerCase().includes(query)) score += 8;
        if (listing.category.toLowerCase().includes(query)) score += 5;
        if (listing.supplier.toLowerCase().includes(query)) score += 4;
        if (searchable.includes(query)) score += 2;
        if (state.region !== "all" && listing.region === state.region) score += 1;
        return { listing, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.listing.name.localeCompare(b.listing.name))
      .slice(0, 2)
      .forEach(({ listing }) => add({
        kind: "listing",
        id: listing.id,
        value: listing.name,
        type: "Machine",
        label: listing.name,
        detail: `${listing.supplier} - ${listing.city}, ${listing.region}`
      }));

    categoryDirectory
      .filter((category) => [category.name, category.group, category.intent].join(" ").toLowerCase().includes(query))
      .slice(0, 1)
      .forEach((category) => add({
        kind: "category",
        id: category.group,
        value: category.name,
        type: "Category",
        label: category.name,
        detail: `${category.count.toLocaleString()} modeled listings - ${category.regions}`
      }));

    supplierProfiles
      .filter((profile) => [profile.supplier, profile.headline, profile.branch, profile.serviceArea].join(" ").toLowerCase().includes(query))
      .slice(0, 1)
      .forEach((profile) => add({
        kind: "supplier",
        id: profile.supplier,
        value: profile.supplier,
        type: "Supplier",
        label: profile.supplier,
        detail: `${profile.branch} - response ${profile.response}`
      }));

    state.demandSignals
      .filter((signal) => [signal.equipment, signal.region, signal.source].join(" ").toLowerCase().includes(query))
      .slice(0, 1)
      .forEach((signal) => add({
        kind: "gap",
        id: getDemandKey(signal),
        value: signal.equipment,
        type: "Demand gap",
        label: `${signal.equipment} in ${signal.region}`,
        detail: `${signal.count} demand signal${signal.count === 1 ? "" : "s"} - capture supplier pull`
      }));
  }

  [
    { kind: "view", id: "available-now", value: "available", type: "View", label: "Available now", detail: "Fastest route to direct enquiries" },
    { kind: "category", id: "Earthmoving", value: "Excavators", type: "Category", label: "Excavators", detail: "High-volume earthmoving lane" },
    { kind: "supplier", id: "Gulf Lift Services", value: "Gulf Lift Services", type: "Supplier", label: "Gulf Lift Services", detail: "Certified UAE lifting supplier" },
    { kind: "gap", id: "Crawler crane|UAE", value: "Crawler crane", type: "Demand gap", label: "Crawler crane in UAE", detail: "Open supplier recruitment signal" }
  ].forEach(add);

  return items;
}

function applyMarketplaceSearchAssist(button) {
  const kind = button.dataset.searchAssist;
  const id = button.dataset.assistId;
  const value = button.dataset.assistValue;

  if (kind === "view") {
    applyMarketplaceSmartView(id);
    return;
  }

  if (kind === "listing") {
    const listing = listings.find((item) => item.id === id);
    if (!listing) return;
    state.search = listing.name;
    state.region = listing.region;
    state.availability = "all";
    state.category = "all";
    state.sort = "verified";
    state.selectedListingId = listing.id;
  }

  if (kind === "category") {
    state.search = "";
    state.category = id;
    state.availability = "all";
    state.sort = "available";
  }

  if (kind === "supplier") {
    state.search = id;
    state.region = "all";
    state.availability = "all";
    state.category = "all";
    state.sort = "verified";
  }

  if (kind === "gap") {
    const signal = state.demandSignals.find((item) => getDemandKey(item) === id)
      || { equipment: value || "Crawler crane", region: "UAE" };
    state.search = signal.equipment;
    state.region = signal.region;
    state.availability = "available";
    state.category = "all";
    state.sort = "verified";
  }

  const matches = getListingsForFilters(state);
  if (matches.length) state.selectedListingId = matches[0].id;
  saveState();
  syncFilterInputs();
  render();
  scrollToPageTarget(document.querySelector("#resultIntelligence"), 160);
  showToast(`${toTitleCase(kind)} search route opened.`);
}

function renderCategoryButtons() {
  document.querySelectorAll(".category-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === state.category);
  });
}

function renderMarketplaceSmartViews() {
  const root = document.querySelector("#marketSmartViews");
  if (!root) return;

  const activeId = getActiveSmartViewId();
  root.innerHTML = marketplaceSmartViews.map((view) => {
    const matches = getListingsForFilters(view);
    const verifiedCount = new Set(matches.filter((listing) => listing.verified).map((listing) => listing.supplier)).size;
    const gapLabel = matches.length ? `${matches.length} listing${matches.length === 1 ? "" : "s"}` : "Gap";
    return `
      <button type="button" class="smart-view-card ${activeId === view.id ? "is-active" : ""}" data-smart-view="${escapeHtml(view.id)}">
        <span>${escapeHtml(view.label)}</span>
        <strong>${escapeHtml(gapLabel)}</strong>
        <small>${escapeHtml(view.cue)} - ${verifiedCount} verified</small>
      </button>
    `;
  }).join("");

  root.querySelectorAll("[data-smart-view]").forEach((button) => {
    button.addEventListener("click", () => applyMarketplaceSmartView(button.dataset.smartView));
  });
}

function getActiveSmartViewId() {
  const normalize = (value) => String(value || "");
  const active = marketplaceSmartViews.find((view) =>
    normalize(state.search) === normalize(view.search)
    && state.region === view.region
    && state.availability === view.availability
    && state.category === view.category
    && state.sort === view.sort
  );
  return active?.id || "";
}

function applyMarketplaceSmartView(viewId) {
  const view = marketplaceSmartViews.find((item) => item.id === viewId);
  if (!view) return;

  state.search = view.search;
  state.region = view.region;
  state.availability = view.availability;
  state.category = view.category;
  state.sort = view.sort;
  const matches = getListingsForFilters(state);
  if (matches.length) state.selectedListingId = matches[0].id;
  saveState();
  syncFilterInputs();
  render();
  const target = document.querySelector(matches.length ? "#catalogTitle" : "#resultIntelligence");
  scrollToPageTarget(target, matches.length ? 86 : 160);
  showToast(`${view.label} Smart View opened.`);
}

function renderMarketplaceFilterTrail() {
  const root = document.querySelector("#marketFilterTrail");
  if (!root) return;

  const chips = getMarketplaceFilterChips();
  const activeView = marketplaceSmartViews.find((view) => view.id === getActiveSmartViewId());
  const viewLabel = activeView ? activeView.label : chips.length ? "Custom view" : "All marketplace";
  const summary = chips.length
    ? chips.map((chip) => chip.label).join(" / ")
    : "No filters active";

  root.innerHTML = `
    <div class="filter-trail-head">
      <span>Active view</span>
      <strong>${escapeHtml(viewLabel)}</strong>
      <small>${escapeHtml(summary)}</small>
    </div>
    <div class="filter-chip-row">
      ${chips.length ? chips.map((chip) => `
        <button type="button" class="filter-chip" data-filter-clear="${escapeHtml(chip.key)}" title="Remove ${escapeHtml(chip.label)}">
          <span>${escapeHtml(chip.label)}</span>
          <b aria-hidden="true">x</b>
        </button>
      `).join("") : `<span class="filter-chip is-empty">All regions, categories, and availability</span>`}
      <button type="button" class="filter-reset" data-filter-clear-all ${chips.length ? "" : "disabled"}>Reset</button>
    </div>
  `;

  root.querySelectorAll("[data-filter-clear]").forEach((button) => {
    button.addEventListener("click", () => clearMarketplaceFilter(button.dataset.filterClear));
  });
  const reset = root.querySelector("[data-filter-clear-all]");
  if (reset) reset.addEventListener("click", clearAllMarketplaceFilters);
}

function getMarketplaceFilterChips() {
  const chips = [];
  if (state.search) chips.push({ key: "search", label: `Search: ${state.search}` });
  if (state.region !== "all") chips.push({ key: "region", label: `Region: ${state.region}` });
  if (state.availability !== "all") {
    chips.push({
      key: "availability",
      label: state.availability === "available" ? "Availability: now" : "Availability: soon"
    });
  }
  if (state.category !== "all") chips.push({ key: "category", label: `Category: ${state.category}` });
  if (state.sort !== "available") chips.push({ key: "sort", label: `Sort: ${getSortLabel(state.sort)}` });
  return chips;
}

function getSortLabel(sort) {
  if (sort === "fit") return "buyer fit";
  if (sort === "verified") return "verified first";
  if (sort === "region") return "region A-Z";
  if (sort === "name") return "equipment A-Z";
  return "available first";
}

function clearMarketplaceFilter(key) {
  if (key === "search") state.search = "";
  if (key === "region") state.region = "all";
  if (key === "availability") state.availability = "all";
  if (key === "category") state.category = "all";
  if (key === "sort") state.sort = "available";
  saveState();
  syncFilterInputs();
  render();
  showToast("Marketplace filter removed.");
}

function clearAllMarketplaceFilters() {
  state.search = "";
  state.region = "all";
  state.availability = "all";
  state.category = "all";
  state.sort = "available";
  saveState();
  syncFilterInputs();
  render();
  showToast("Marketplace filters reset.");
}

function renderMarketplaceStats() {
  const filtered = getFilteredListings();
  const verifiedSuppliers = new Set(filtered.filter((listing) => listing.verified).map((listing) => listing.supplier));
  setText("#resultCount", String(filtered.length));
  setText("#verifiedCount", String(verifiedSuppliers.size));
  renderSearchRescue(filtered);
}

function renderMarketplaceSupplyLens() {
  const root = document.querySelector("#marketSupplyLens");
  if (!root) return;

  const model = getMarketplaceSupplyLensModel();
  root.innerHTML = `
    <div class="supply-lens-head">
      <span>Supply lens</span>
      <strong>${escapeHtml(model.title)}</strong>
      <small>${escapeHtml(model.detail)}</small>
    </div>
    <div class="supply-lens-groups">
      ${model.groups.map((group) => `
        <div class="supply-lens-group">
          <span>${escapeHtml(group.label)}</span>
          ${group.items.map((item) => `
            <button
              type="button"
              class="${item.active ? "is-active" : ""}"
              data-supply-lens="${escapeHtml(item.kind)}"
              data-lens-value="${escapeHtml(item.value)}"
            >
              <strong>${escapeHtml(item.label)}</strong>
              <small>${escapeHtml(item.detail)}</small>
              <b>${escapeHtml(item.count)}</b>
            </button>
          `).join("")}
        </div>
      `).join("")}
    </div>
  `;

  root.querySelectorAll("[data-supply-lens]").forEach((button) => {
    button.addEventListener("click", () => applyMarketplaceSupplyLens(button));
  });
}

function getMarketplaceSupplyLensModel() {
  const exact = getFilteredListings();
  const source = exact.length ? exact : getNearbyListings();
  const sourceLabel = exact.length ? "matching supply" : "nearby recovery supply";
  const regionItems = getSupplyLensCountItems(source, "region")
    .map((item) => ({
      ...item,
      kind: "region",
      active: state.region === item.value
    }));
  const categoryItems = getSupplyLensCountItems(source, "category")
    .map((item) => ({
      ...item,
      kind: "category",
      active: state.category === item.value
    }));
  const availableCount = source.filter((listing) => listing.availability === "available").length;
  const verifiedSupplierCount = new Set(source.filter((listing) => listing.verified).map((listing) => listing.supplier)).size;
  const proofItems = [
    {
      kind: "proof",
      value: "available",
      label: "Available now",
      count: String(availableCount),
      detail: "ready to enquire",
      active: state.availability === "available"
    },
    {
      kind: "proof",
      value: "verified",
      label: "Verified",
      count: String(verifiedSupplierCount),
      detail: "supplier proof",
      active: state.sort === "verified"
    },
    {
      kind: "proof",
      value: "gap",
      label: "Demand gaps",
      count: String(state.demandSignals.length),
      detail: "recruit supply",
      active: !exact.length
    }
  ];

  return {
    title: `${source.length} ${sourceLabel}`,
    detail: exact.length ? "Strongest visible supply paths for this result set." : "No exact match, so the lens shows nearby rescue paths.",
    groups: [
      { label: "Regions", items: regionItems },
      { label: "Categories", items: categoryItems },
      { label: "Trust", items: proofItems }
    ]
  };
}

function getSupplyLensCountItems(source, key) {
  const counts = source.reduce((map, listing) => {
    const value = listing[key];
    if (!value) return map;
    map.set(value, (map.get(value) || 0) + 1);
    return map;
  }, new Map());

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 3)
    .map(([value, count]) => ({
      value,
      label: value,
      count: String(count),
      detail: count === 1 ? "1 listing" : `${count} listings`
    }));
}

function applyMarketplaceSupplyLens(button) {
  const kind = button.dataset.supplyLens;
  const value = button.dataset.lensValue;

  if (kind === "region") {
    state.region = value;
  }

  if (kind === "category") {
    state.category = value;
  }

  if (kind === "proof" && value === "available") {
    state.availability = "available";
    state.sort = "available";
  }

  if (kind === "proof" && value === "verified") {
    state.sort = "verified";
  }

  if (kind === "proof" && value === "gap") {
    const signal = getActiveDemandSignal();
    state.search = signal.equipment;
    state.region = signal.region;
    state.availability = "available";
    state.category = "all";
    state.sort = "verified";
  }

  const matches = getListingsForFilters(state);
  if (matches.length) state.selectedListingId = matches[0].id;
  saveState();
  syncFilterInputs();
  render();
  scrollToPageTarget(document.querySelector("#resultIntelligence"), 160);
  showToast("Supply lens applied.");
}

function renderMarketplaceIntelligence() {
  const root = document.querySelector("#resultIntelligence");
  if (!root) return;

  const model = getMarketplaceIntelligenceModel();
  root.innerHTML = `
    <div class="result-intelligence-card ${escapeHtml(model.statusClass)}">
      <div class="result-intelligence-copy">
        <span>${escapeHtml(model.status)}</span>
        <strong>${escapeHtml(model.headline)}</strong>
        <small>${escapeHtml(model.detail)}</small>
      </div>
      <div class="result-intelligence-metrics">
        ${model.metrics.map((metric) => `
          <b>
            <strong>${escapeHtml(metric.value)}</strong>
            <small>${escapeHtml(metric.label)}</small>
          </b>
        `).join("")}
      </div>
      <button type="button" class="result-intelligence-action" data-result-action="${escapeHtml(model.actionKind)}">
        ${escapeHtml(model.action)}
      </button>
    </div>
  `;

  const action = root.querySelector("[data-result-action]");
  if (action) action.addEventListener("click", () => handleMarketplaceIntelligenceAction(model));
}

function getMarketplaceIntelligenceModel() {
  const filtered = getFilteredListings();
  const nearby = filtered.length ? [] : getNearbyListings();
  const activeView = marketplaceSmartViews.find((view) => view.id === getActiveSmartViewId());
  const availableCount = filtered.filter((listing) => listing.availability === "available").length;
  const verifiedSupplierCount = new Set(filtered.filter((listing) => listing.verified).map((listing) => listing.supplier)).size;
  const supplierCount = new Set(filtered.map((listing) => listing.supplier)).size;
  const nearbyVerifiedCount = new Set(nearby.filter((listing) => listing.verified).map((listing) => listing.supplier)).size;
  const selected = filtered[0] || nearby[0] || getSelectedListing();
  const equipment = getDemandEquipmentFromSearch();
  const region = state.region === "all" ? "all regions" : state.region;
  const viewLabel = activeView?.label || (getMarketplaceFilterChips().length ? "Custom view" : "All marketplace");

  if (!filtered.length) {
    return {
      status: "Demand signal",
      statusClass: "is-gap",
      headline: `No exact ${equipment.toLowerCase()} supply in ${region}.`,
      detail: `${viewLabel} should become a supplier recruitment signal before the buyer leaves the marketplace.`,
      action: "Capture demand",
      actionKind: "demand",
      selectedListingId: selected?.id || "",
      metrics: [
        { value: "0", label: "exact listings" },
        { value: String(nearby.length), label: "nearby options" },
        { value: String(nearbyVerifiedCount), label: "verified nearby" }
      ]
    };
  }

  if (availableCount) {
    return {
      status: "Supply ready",
      statusClass: "is-ready",
      headline: `${filtered.length} listing${filtered.length === 1 ? "" : "s"} found across ${supplierCount} supplier${supplierCount === 1 ? "" : "s"}.`,
      detail: `${viewLabel} has live inventory. Keep the buyer moving toward the direct enquiry packet.`,
      action: "Open best match",
      actionKind: "listing",
      selectedListingId: selected?.id || "",
      metrics: [
        { value: String(availableCount), label: "available now" },
        { value: String(verifiedSupplierCount), label: "verified suppliers" },
        { value: "0%", label: "commission" }
      ]
    };
  }

  return {
    status: "Supply watch",
    statusClass: "is-watch",
    headline: `${filtered.length} matching listing${filtered.length === 1 ? "" : "s"}, but none marked available now.`,
    detail: `${viewLabel} is still useful. Show the closest supplier and ask for confirmed availability.`,
    action: "Open closest match",
    actionKind: "listing",
    selectedListingId: selected?.id || "",
    metrics: [
      { value: String(filtered.length), label: "matching listings" },
      { value: String(verifiedSupplierCount), label: "verified suppliers" },
      { value: "Call", label: "availability check" }
    ]
  };
}

function handleMarketplaceIntelligenceAction(model) {
  if (model.actionKind === "demand") {
    prepareDemandFromSearch();
    const target = document.querySelector("#demandRequest");
    if (target) {
      if (window.location.hash !== "#demandRequest") window.location.hash = "#demandRequest";
      scrollToPageTarget(target);
    }
    window.setTimeout(() => {
      const field = document.querySelector("#demandEquipment");
      if (field) field.focus();
    }, 260);
    showToast("Demand capture opened from Result Intelligence.");
    return;
  }

  if (model.selectedListingId) {
    state.selectedListingId = model.selectedListingId;
    saveState();
    render();
  }

  const target = document.querySelector("#leadTitle");
  if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
  showToast("Best matching supplier packet opened.");
}

function renderPilotCommandStrip() {
  const root = document.querySelector("#pilotCommandStrip");
  if (!root) return;

  const model = getPilotCommandModel();
  root.innerHTML = `
    <div class="pilot-command-main ${escapeHtml(model.statusClass)}">
      <div>
        <p class="eyebrow">Pilot command</p>
        <h2>${escapeHtml(model.headline)}</h2>
        <span>${escapeHtml(model.detail)}</span>
      </div>
      <strong>${model.score}/100</strong>
    </div>
    <div class="pilot-command-metrics">
      ${model.metrics.map((metric) => `
        <span>
          <strong>${escapeHtml(metric.value)}</strong>
          ${escapeHtml(metric.label)}
          <small>${escapeHtml(metric.detail)}</small>
        </span>
      `).join("")}
    </div>
    <div class="pilot-command-actions">
      ${model.actions.map((action) => `
        <button type="button" class="${action.primary ? "is-primary" : ""}" data-pilot-command="${escapeHtml(action.id)}">
          ${escapeHtml(action.label)}
        </button>
      `).join("")}
    </div>
  `;

  root.querySelectorAll("[data-pilot-command]").forEach((button) => {
    button.addEventListener("click", () => handlePilotCommandAction(button.dataset.pilotCommand));
  });
}

function getPilotCommandModel() {
  const filtered = getFilteredListings();
  const nearby = filtered.length ? [] : getNearbyListings();
  const visible = filtered.length;
  const available = filtered.filter((listing) => listing.availability === "available").length;
  const verifiedRows = filtered.filter((listing) => listing.verified).length;
  const verifiedSuppliers = new Set(filtered.filter((listing) => listing.verified).map((listing) => listing.supplier)).size;
  const supplierCount = new Set(filtered.map((listing) => listing.supplier)).size;
  const demandCount = getPilotDemandCount();
  const listingArr = visible * 99;
  const supplyScore = visible ? Math.min(30, visible * 5) : Math.min(12, nearby.length * 4);
  const availabilityScore = visible ? Math.round((available / visible) * 24) : 0;
  const proofScore = visible ? Math.round((verifiedRows / visible) * 22) : 0;
  const supplierScore = Math.min(16, supplierCount * 4);
  const demandScore = Math.min(8, demandCount * 2);
  const score = Math.max(0, Math.min(100, Math.round(18 + supplyScore + availabilityScore + proofScore + supplierScore + demandScore)));
  const regionLabel = state.region === "all" ? "global" : state.region;
  const categoryLabel = state.category === "all" ? getDemandEquipmentFromSearch() : state.category;

  if (!visible) {
    return {
      score,
      statusClass: "is-gap",
      headline: `Capture ${categoryLabel.toLowerCase()} demand before selling this pilot.`,
      detail: `${nearby.length} nearby option${nearby.length === 1 ? "" : "s"} can recover the buyer, but this exact ${regionLabel} view needs supplier recruitment first.`,
      metrics: [
        { value: "0", label: "exact listings", detail: "do not sell this lane yet" },
        { value: String(nearby.length), label: "nearby supply", detail: "recovery options" },
        { value: String(demandCount), label: "demand signals", detail: "supplier hunt proof" },
        { value: "USD 0", label: "visible ARR", detail: "activate listings first" }
      ],
      actions: [
        { id: "capture-demand", label: "Capture demand", primary: true },
        { id: "supplier-hunt", label: "Open supplier hunt" },
        { id: "copy", label: "Copy command" }
      ]
    };
  }

  if (score >= 82 && available >= 2 && verifiedSuppliers >= 2) {
    return {
      score,
      statusClass: "is-ready",
      headline: `${regionLabel} pilot is ready to sell as listing SaaS.`,
      detail: `${visible} visible machine${visible === 1 ? "" : "s"}, ${available} available now, ${verifiedSuppliers} verified supplier${verifiedSuppliers === 1 ? "" : "s"}, and USD ${listingArr.toLocaleString()} visible listing ARR.`,
      metrics: [
        { value: String(visible), label: "visible rows", detail: "buyer can browse now" },
        { value: `${available}/${visible}`, label: "available now", detail: "direct enquiry path" },
        { value: String(verifiedSuppliers), label: "verified suppliers", detail: "proof-backed supply" },
        { value: `USD ${listingArr.toLocaleString()}`, label: "visible ARR", detail: "annual listing SaaS" }
      ],
      actions: [
        { id: "open-pilot", label: "Open pilot pack", primary: true },
        { id: "verified-now", label: "Verified now" },
        { id: "copy", label: "Copy command" }
      ]
    };
  }

  return {
    score,
    statusClass: "is-watch",
    headline: `${regionLabel} pilot is workable, but supply depth should improve.`,
    detail: `${visible} machine${visible === 1 ? "" : "s"} are visible. Add verified available inventory before pushing heavier buyer traffic.`,
    metrics: [
      { value: String(visible), label: "visible rows", detail: "thin but usable" },
      { value: `${available}/${visible}`, label: "available now", detail: available ? "route carefully" : "confirm first" },
      { value: String(verifiedSuppliers), label: "verified suppliers", detail: "needs depth" },
      { value: `USD ${listingArr.toLocaleString()}`, label: "visible ARR", detail: "expand supplier package" }
    ],
    actions: [
      { id: "supplier-hunt", label: "Recruit suppliers", primary: true },
      { id: "open-studio", label: "Supplier workspace" },
      { id: "copy", label: "Copy command" }
    ]
  };
}

function getPilotDemandCount() {
  const region = state.region;
  const equipment = getDemandEquipmentFromSearch().toLowerCase();
  return getDemandSignals().reduce((total, signal) => {
    const signalEquipment = String(signal.equipment || "").toLowerCase();
    const matchesRegion = region === "all" || signal.region === region;
    const matchesEquipment = state.search || state.category !== "all"
      ? signalEquipment.includes(equipment) || equipment.includes(signalEquipment) || signalEquipment.includes(state.category.toLowerCase())
      : true;
    return matchesRegion && matchesEquipment ? total + Number(signal.count || 1) : total;
  }, 0);
}

async function handlePilotCommandAction(action) {
  if (action === "open-pilot") {
    const target = document.querySelector("#pilot-pack");
    if (target) {
      if (window.location.hash !== "#pilot-pack") window.location.hash = "#pilot-pack";
      scrollToPageTarget(target);
    }
    showToast("30-day pilot pack opened.");
    return;
  }

  if (action === "open-studio") {
    const target = document.querySelector("#studio");
    if (target) {
      if (window.location.hash !== "#studio") window.location.hash = "#studio";
      scrollToPageTarget(target);
    }
    showToast("Supplier workspace opened.");
    return;
  }

  if (action === "verified-now") {
    state.availability = "available";
    state.sort = "verified";
    state.compactView = true;
    const matches = getFilteredListings();
    if (matches.length) state.selectedListingId = matches[0].id;
    saveState();
    syncFilterInputs();
    render();
    scrollToPageTarget(document.querySelector("#fleetIndexPanel"), 120);
    showToast("Verified available supply opened.");
    return;
  }

  if (action === "capture-demand") {
    prepareDemandFromSearch();
    saveDemandSignal("Pilot Command", false);
    const target = document.querySelector("#demandRequest");
    if (target) scrollToPageTarget(target, 120);
    return;
  }

  if (action === "supplier-hunt") {
    prepareDemandFromSearch();
    saveDemandSignal("Pilot Command hunt", false);
    const target = document.querySelector("#growth") || document.querySelector("#huntSignalList");
    if (target) {
      if (target.id === "growth" && window.location.hash !== "#growth") window.location.hash = "#growth";
      scrollToPageTarget(target);
    }
    showToast("Supplier hunt opened from Pilot Command.");
    return;
  }

  if (action === "copy") {
    try {
      await navigator.clipboard.writeText(buildPilotCommandText());
      showToast("Pilot command copied.");
    } catch {
      showToast("Copy is blocked here, but the Pilot Command is visible.");
    }
  }
}

function buildPilotCommandText(model = getPilotCommandModel()) {
  return [
    "Heavyster Pilot Command",
    `${model.headline} (${model.score}/100)`,
    model.detail,
    "",
    "Metrics:",
    ...model.metrics.map((metric) => `- ${metric.label}: ${metric.value} (${metric.detail})`),
    "",
    "Next actions:",
    ...model.actions.map((action) => `- ${action.primary ? "Primary: " : ""}${action.label}`),
    "",
    "Phase-one rule: sell active listings and direct enquiries first. Buyer and rental company keep rental payment direct."
  ].join("\n");
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
  const sortFilter = document.querySelector("#sortFilter");
  if (sortFilter) sortFilter.value = state.sort;
}

function renderCatalogFocusBar() {
  const root = document.querySelector("#catalogFocusBar");
  if (!root) return;

  const model = getCatalogFocusBarModel();
  root.innerHTML = `
    <div class="catalog-focus-card ${escapeHtml(model.statusClass)}">
      <div class="catalog-focus-copy">
        <span>${escapeHtml(model.badge)}</span>
        <strong>${escapeHtml(model.headline)}</strong>
        <small>${escapeHtml(model.detail)}</small>
      </div>
      <div class="catalog-focus-metrics">
        ${model.metrics.map((metric) => `
          <b class="${escapeHtml(metric.statusClass)}">
            <strong>${escapeHtml(metric.value)}</strong>
            ${escapeHtml(metric.label)}
          </b>
        `).join("")}
      </div>
      <div class="catalog-focus-actions">
        ${model.actions.map((action) => `
          <button
            type="button"
            class="${action.active ? "is-active" : ""} ${action.primary ? "is-primary" : ""}"
            data-catalog-focus-action="${escapeHtml(action.id)}"
          >
            ${escapeHtml(action.label)}
          </button>
        `).join("")}
      </div>
    </div>
  `;

  root.querySelectorAll("[data-catalog-focus-action]").forEach((button) => {
    button.addEventListener("click", () => handleCatalogFocusAction(button.dataset.catalogFocusAction, model));
  });
}

function getCatalogFocusBarModel() {
  const filtered = getFilteredListings();
  const availabilityWide = getListingsForFilters({ ...state, availability: "all" });
  const bestSource = filtered.length ? filtered : availabilityWide.length ? availabilityWide : listings;
  const verifiedCount = filtered.filter((listing) => listing.verified).length;
  const availableCount = filtered.filter((listing) => listing.availability === "available").length;
  const savedIds = state.shortlistIds || [];
  const savedVisible = savedIds.filter((id) => filtered.some((listing) => listing.id === id)).length;
  const noRows = filtered.length === 0;
  const largeSet = filtered.length >= 18;
  const active = getCatalogFocusActive(noRows);
  const statusClass = noRows ? "is-gap" : largeSet ? "is-watch" : "is-ready";
  const best = bestSource[0] || getSelectedListing();
  const headline = noRows
    ? "No rows in this view."
    : largeSet
      ? `${filtered.length} rows. Scan compact first.`
      : `${filtered.length} row${filtered.length === 1 ? "" : "s"} kept simple.`;
  const detail = noRows
    ? `${availabilityWide.length} recovery row${availabilityWide.length === 1 ? "" : "s"} if availability opens. Save the gap if supply is still missing.`
    : `${availableCount} available now, ${verifiedCount} verified, ${savedIds.length} saved. Best path: ${best.name}.`;

  return {
    badge: "Catalog focus",
    headline,
    detail,
    statusClass,
    filteredCount: filtered.length,
    availableCount,
    verifiedCount,
    savedCount: savedIds.length,
    savedVisible,
    best,
    metrics: [
      {
        value: String(filtered.length),
        label: filtered.length === 1 ? "row" : "rows",
        statusClass: noRows ? "is-gap" : "is-ready"
      },
      {
        value: String(verifiedCount),
        label: "verified",
        statusClass: verifiedCount ? "is-ready" : "is-watch"
      },
      {
        value: String(savedIds.length),
        label: savedVisible ? "saved here" : "saved",
        statusClass: savedIds.length ? "is-ready" : "is-watch"
      }
    ],
    actions: [
      { id: "best", label: "Best fit", active: active === "best", primary: active === "best" },
      { id: "verified", label: "Verified", active: active === "verified", primary: active === "verified" },
      { id: "available", label: "Available", active: active === "available", primary: active === "available" },
      { id: "saved", label: "Saved", active: active === "saved", primary: active === "saved" },
      { id: "gap", label: "Save gap", active: active === "gap", primary: active === "gap" }
    ]
  };
}

function getCatalogFocusActive(noRows) {
  if (noRows) return "gap";
  if (state.shortlistCompareOpen) return "saved";
  if (state.availability === "available") return "available";
  if (state.sort === "verified") return "verified";
  return "best";
}

async function handleCatalogFocusAction(action, model = getCatalogFocusBarModel()) {
  if (action === "best") {
    state.sort = "fit";
    state.compactView = false;
    resetCatalogPage();
    const matches = getFilteredListings();
    if (matches.length) state.selectedListingId = matches[0].id;
    saveState();
    syncFilterInputs();
    render();
    scrollToPageTarget(document.querySelector("#catalogTitle"), 112);
    showToast("Best-fit catalog view opened.");
    return;
  }

  if (action === "verified") {
    state.sort = "verified";
    state.compactView = true;
    resetCatalogPage();
    const matches = getFilteredListings();
    if (matches.length) state.selectedListingId = matches[0].id;
    saveState();
    syncFilterInputs();
    render();
    scrollToPageTarget(document.querySelector("#catalogTitle"), 112);
    showToast("Verified rows moved into compact view.");
    return;
  }

  if (action === "available") {
    state.availability = "available";
    state.sort = "fit";
    state.compactView = true;
    resetCatalogPage();
    const matches = getFilteredListings();
    if (matches.length) state.selectedListingId = matches[0].id;
    saveState();
    syncFilterInputs();
    render();
    scrollToPageTarget(document.querySelector("#catalogTitle"), 112);
    showToast(matches.length ? "Available-now rows opened." : "No available-now row yet. Save the demand gap.");
    return;
  }

  if (action === "saved") {
    state.shortlistCompareOpen = true;
    state.compactView = true;
    resetCatalogPage();
    const saved = (state.shortlistIds || []).map((id) => listings.find((listing) => listing.id === id)).filter(Boolean);
    if (saved.length) state.selectedListingId = saved[0].id;
    saveState();
    render();
    scrollToPageTarget(document.querySelector("#shortlistTray"), 112);
    showToast(saved.length ? "Saved machines opened for comparison." : "Save a machine first, then compare.");
    return;
  }

  if (action === "gap") {
    prepareDemandFromSearch();
    saveDemandSignal("Catalog focus demand gap", false);
    resetCatalogPage();
    renderCatalogFocusBar();
    scrollToPageTarget(document.querySelector("#demandRequest"), 112);
    showToast("Catalog gap saved as demand.");
    return;
  }

  if (action === "copy") {
    try {
      await navigator.clipboard.writeText(buildCatalogFocusText(model));
      showToast("Catalog focus copied.");
    } catch {
      showToast("Copy is blocked here, but the catalog focus is visible.");
    }
  }
}

function buildCatalogFocusText(model = getCatalogFocusBarModel()) {
  const region = state.region === "all" ? "all regions" : state.region;
  const category = state.category === "all" ? "all categories" : state.category;
  const best = model.best ? `${model.best.name} - ${model.best.supplier}` : "No selected path";
  return [
    "Heavyster Catalog Focus Bar",
    `Search: ${state.search || "all equipment"}`,
    `Region: ${region}`,
    `Category: ${category}`,
    `Rows: ${model.filteredCount}`,
    `Available now: ${model.availableCount}`,
    `Verified: ${model.verifiedCount}`,
    `Saved: ${model.savedCount}`,
    `Best path: ${best}`,
    "Rule: choose the buyer intent before scanning the catalog, then use compact rows, saved machines, or demand capture as inventory grows."
  ].join("\n");
}

function renderCatalogPager() {
  const root = document.querySelector("#catalogPager");
  if (!root) return;

  const model = getCatalogPagerModel();
  root.innerHTML = `
    <div class="catalog-page-summary">
      <strong>${model.startLabel}-${model.endLabel} of ${model.totalRows}</strong>
      <small>Page ${model.page} of ${model.totalPages}</small>
    </div>
    <div class="catalog-page-controls">
      <button type="button" data-catalog-page-action="previous" ${model.hasPrevious ? "" : "disabled"}>Previous</button>
      <label>
        Rows
        <select data-catalog-page-size>
          <option value="6">6</option>
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="48">48</option>
        </select>
      </label>
      <button type="button" data-catalog-page-action="next" ${model.hasNext ? "" : "disabled"}>Next</button>
    </div>
  `;

  const size = root.querySelector("[data-catalog-page-size]");
  if (size) {
    size.value = String(model.pageSize);
    size.addEventListener("change", (event) => {
      state.catalogPageSize = Number(event.target.value);
      resetCatalogPage();
      selectFirstPagedCatalogListing();
      saveState();
      render();
      scrollToPageTarget(document.querySelector("#catalogTitle"), 112);
      showToast(`Showing ${state.catalogPageSize} catalog rows per page.`);
    });
  }

  root.querySelectorAll("[data-catalog-page-action]").forEach((button) => {
    button.addEventListener("click", () => handleCatalogPageAction(button.dataset.catalogPageAction, model));
  });
}

function handleCatalogPageAction(action, model = getCatalogPagerModel()) {
  if (!model.totalRows) return;
  if (action === "previous" && model.hasPrevious) state.catalogPage = model.page - 1;
  if (action === "next" && model.hasNext) state.catalogPage = model.page + 1;
  selectFirstPagedCatalogListing();
  saveState();
  render();
  scrollToPageTarget(document.querySelector("#catalogTitle"), 112);
  showToast(`Catalog page ${state.catalogPage} of ${model.totalPages}.`);
}

function renderCatalog() {
  renderCatalogFocusBar();
  renderCatalogPager();
  renderFleetIndex();
  renderListings();
  renderCompactCatalog();
  const page = getCatalogPagerModel();
  setText("#catalogSummary", `${page.startLabel}-${page.endLabel} of ${page.totalRows} listings`);
  document.querySelector("#viewToggleButton").textContent = state.compactView ? "Card view" : "Compact rows";
  document.querySelector(".catalog-panel").classList.toggle("is-compact", state.compactView);
}

function renderFleetIndex() {
  const root = document.querySelector("#fleetIndexPanel");
  if (!root) return;

  const model = getFleetIndexModel();
  root.innerHTML = `
    <div class="fleet-index-head">
      <div>
        <p class="eyebrow">Fleet Index</p>
        <h3>${escapeHtml(model.title)}</h3>
        <span>${escapeHtml(model.summary)}</span>
      </div>
      <div class="fleet-index-actions">
        ${model.actions.map((action) => `
          <button type="button" data-fleet-index-action="${escapeHtml(action.id)}">
            ${escapeHtml(action.label)}
          </button>
        `).join("")}
      </div>
    </div>
    <div class="fleet-index-metrics">
      ${model.metrics.map((metric) => `
        <span class="${escapeHtml(metric.statusClass)}">
          <strong>${escapeHtml(metric.value)}</strong>
          ${escapeHtml(metric.label)}
          <small>${escapeHtml(metric.detail)}</small>
        </span>
      `).join("")}
    </div>
    <div class="fleet-index-lanes">
      ${model.lanes.map((lane) => `
        <button type="button" class="${lane.active ? "is-active" : ""}" data-fleet-index-lane="${escapeHtml(lane.category)}">
          <span>
            <strong>${escapeHtml(lane.category)}</strong>
            <small>${escapeHtml(lane.detail)}</small>
          </span>
          <b>${escapeHtml(lane.count)}</b>
          <em>${escapeHtml(lane.status)}</em>
        </button>
      `).join("")}
    </div>
  `;

  root.querySelectorAll("[data-fleet-index-action]").forEach((button) => {
    button.addEventListener("click", () => handleFleetIndexAction(button.dataset.fleetIndexAction));
  });

  root.querySelectorAll("[data-fleet-index-lane]").forEach((button) => {
    button.addEventListener("click", () => handleFleetIndexLane(button.dataset.fleetIndexLane));
  });
}

function getFleetIndexModel() {
  const filtered = getFilteredListings();
  const base = filtered.length ? filtered : getNearbyListings();
  const visible = filtered.length;
  const available = filtered.filter((listing) => listing.availability === "available").length;
  const verified = filtered.filter((listing) => listing.verified).length;
  const suppliers = new Set(filtered.map((listing) => listing.supplier)).size;
  const saved = (state.shortlistIds || []).filter((id) => filtered.some((listing) => listing.id === id)).length;
  const exactMode = filtered.length > 0;
  const readiness = visible
    ? Math.round((available / visible) * 42 + (verified / visible) * 38 + Math.min(20, suppliers * 5))
    : 0;
  const status = !visible
    ? "Capture gap"
    : readiness >= 78
      ? "Buyer-ready"
      : readiness >= 58
        ? "Workable"
        : "Needs depth";
  const title = exactMode
    ? `${visible} visible machine${visible === 1 ? "" : "s"} indexed for this view.`
    : "No exact rows, but the index can recover nearby supply.";
  const regionLabel = state.region === "all" ? "all regions" : state.region;
  const categoryLabel = state.category === "all" ? "all categories" : state.category;
  const summary = exactMode
    ? `${regionLabel}, ${categoryLabel}, ${getSortLabel(state.sort)}. Use compact mode when the catalog grows from dozens to thousands.`
    : `Turn this ${getDemandEquipmentFromSearch().toLowerCase()} search into demand capture, then recruit matching suppliers.`;

  return {
    title,
    summary,
    metrics: [
      {
        value: `${readiness}/100`,
        label: "index readiness",
        detail: status,
        statusClass: readiness >= 78 ? "is-ready" : readiness >= 58 ? "is-watch" : "is-gap"
      },
      {
        value: String(available),
        label: "available now",
        detail: visible ? `${Math.round((available / visible) * 100)}% of current view` : "none exact",
        statusClass: available ? "is-ready" : "is-gap"
      },
      {
        value: String(verified),
        label: "verified rows",
        detail: `${suppliers} supplier${suppliers === 1 ? "" : "s"} visible`,
        statusClass: verified ? "is-ready" : "is-watch"
      },
      {
        value: String(saved),
        label: "shortlisted",
        detail: saved >= 2 ? "RFQ compare ready" : "add backup option",
        statusClass: saved >= 2 ? "is-ready" : "is-watch"
      }
    ],
    lanes: getFleetIndexLanes(base),
    actions: [
      { id: "best-fit", label: "Best-fit queue" },
      { id: "verified-now", label: "Verified now" },
      { id: "capture-gap", label: "Capture gap" },
      { id: "copy", label: "Copy index" }
    ]
  };
}

function getFleetIndexLanes(source) {
  const laneSource = source.length ? source : listings;
  const groups = new Map();
  laneSource.forEach((listing) => {
    if (!groups.has(listing.category)) groups.set(listing.category, []);
    groups.get(listing.category).push(listing);
  });

  return [...groups.entries()]
    .map(([category, rows]) => {
      const available = rows.filter((listing) => listing.availability === "available").length;
      const verified = rows.filter((listing) => listing.verified).length;
      const regions = Array.from(new Set(rows.map((listing) => listing.region))).join(", ");
      const score = available * 18 + verified * 12 + rows.length * 4;
      const status = available && verified ? "Ready" : rows.length ? "Build" : "Gap";
      return {
        category,
        count: String(rows.length),
        detail: `${available} available, ${verified} verified - ${regions}`,
        status,
        score,
        active: state.category === category
      };
    })
    .sort((a, b) => b.score - a.score || a.category.localeCompare(b.category))
    .slice(0, 4);
}

function handleFleetIndexLane(category) {
  if (!category) return;
  state.category = category;
  state.sort = "fit";
  state.compactView = true;
  const matches = getListingsForFilters(state);
  if (matches.length) state.selectedListingId = matches[0].id;
  saveState();
  syncFilterInputs();
  render();
  scrollToPageTarget(document.querySelector("#compactCatalog"), 120);
  showToast(`${category} lane opened in Fleet Index.`);
}

async function handleFleetIndexAction(action) {
  if (action === "best-fit") {
    state.sort = "fit";
    state.compactView = true;
    const matches = getFilteredListings();
    if (matches.length) state.selectedListingId = matches[0].id;
    saveState();
    syncFilterInputs();
    render();
    scrollToPageTarget(document.querySelector("#compactCatalog"), 120);
    showToast("Best-fit fleet queue opened.");
    return;
  }

  if (action === "verified-now") {
    state.availability = "available";
    state.sort = "verified";
    state.compactView = true;
    const matches = getFilteredListings();
    if (matches.length) state.selectedListingId = matches[0].id;
    saveState();
    syncFilterInputs();
    render();
    scrollToPageTarget(document.querySelector("#compactCatalog"), 120);
    showToast("Verified available fleet opened.");
    return;
  }

  if (action === "capture-gap") {
    prepareDemandFromSearch();
    saveDemandSignal("Fleet Index gap", false);
    const target = document.querySelector("#demandRequest");
    if (target) scrollToPageTarget(target, 120);
    return;
  }

  if (action === "copy") {
    try {
      await navigator.clipboard.writeText(buildFleetIndexText());
      showToast("Fleet Index brief copied.");
    } catch {
      showToast("Copy is blocked here, but the Fleet Index brief is visible.");
    }
  }
}

function buildFleetIndexText() {
  const model = getFleetIndexModel();
  return [
    "Heavyster Fleet Index",
    model.title,
    model.summary,
    "",
    "Metrics:",
    ...model.metrics.map((metric) => `- ${metric.label}: ${metric.value} (${metric.detail})`),
    "",
    "Category lanes:",
    ...model.lanes.map((lane) => `- ${lane.category}: ${lane.count} rows, ${lane.detail}, ${lane.status}`),
    "",
    "Operating rule: keep the buyer view compact, verified, and sortable before scaling to thousands of paid listings."
  ].join("\n");
}

function renderListings() {
  const pager = getCatalogPagerModel();
  const filtered = pager.filtered;
  const visibleRows = pager.rows;
  const grid = document.querySelector("#listingGrid");

  if (!filtered.length) {
    grid.innerHTML = renderNoResultsAdvisor();
    bindNoResultsAdvisor(grid);
    return;
  }

  grid.innerHTML = visibleRows.map((listing) => {
    const pillClass = listing.availability === "available" ? "good" : "wait";
    const isSaved = state.shortlistIds.includes(listing.id);
    const fit = getBuyerFitScore(listing);
    return `
      <button type="button" class="listing-card ${listing.id === state.selectedListingId ? "is-selected" : ""}" data-listing-id="${escapeHtml(listing.id)}">
        <span class="machine-art" aria-hidden="true"></span>
        <span class="listing-top">
          <span>
            <strong>${escapeHtml(listing.name)}</strong>
            <p>${escapeHtml(listing.supplier)} - ${escapeHtml(listing.city)}, ${escapeHtml(listing.region)}</p>
          </span>
          <span class="listing-pills">
            <span class="pill ${pillClass}">${listing.availability === "available" ? "Available" : "Soon"}</span>
            ${isSaved ? `<span class="pill good">Saved</span>` : ""}
          </span>
        </span>
        <p>${escapeHtml(listing.specs)}</p>
        <span class="listing-fit ${fit.score >= 84 ? "is-strong" : fit.score >= 68 ? "is-good" : "is-watch"}">
          <strong>${fit.score}/100 fit</strong>
          <small>${escapeHtml(fit.summary || fit.status)}</small>
        </span>
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
  const pager = getCatalogPagerModel();
  const filtered = pager.filtered;
  const visibleRows = pager.rows;
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
      <span>Fit</span>
      <span>Status</span>
      <span>Action</span>
    </div>
    ${visibleRows.map((listing) => {
      const fit = getBuyerFitScore(listing);
      return `
        <button type="button" class="compact-row ${listing.id === state.selectedListingId ? "is-selected" : ""}" data-listing-id="${escapeHtml(listing.id)}">
          <span><strong>${escapeHtml(listing.name)}</strong><small>${escapeHtml(listing.category)}</small></span>
          <span>${escapeHtml(listing.supplier)}</span>
          <span>${escapeHtml(listing.city)}, ${escapeHtml(listing.region)}</span>
          <span><strong>${fit.score}/100</strong><small>${escapeHtml(fit.status)}</small></span>
          <span>${state.shortlistIds.includes(listing.id) ? "Saved" : listing.verified ? "Verified" : "Review"}</span>
          <span>${listing.availability === "available" ? "Enquire" : "Watch"}</span>
        </button>
      `;
    }).join("")}
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
  const fit = getBuyerFitScore(listing);
  const status = listing.verified ? "Verified supplier" : "Needs verification";
  setText("#selectedListingStatus", status);
  document.querySelector("#selectedListingStatus").classList.toggle("good", listing.verified);
  document.querySelector("#selectedListingStatus").classList.toggle("wait", !listing.verified);

  document.querySelector("#leadPacket").innerHTML = `
    <div>
      <span>Buyer fit</span>
      <strong>${fit.score}/100 - ${escapeHtml(fit.status)}</strong>
    </div>
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
  const fit = getBuyerFitScore(listing);
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
    <div class="fit-explainer">
      <strong>${fit.score}/100 buyer fit</strong>
      <span>${escapeHtml(fit.summary || "Useful match for the current marketplace context.")}</span>
    </div>
  `;
}

function renderSupplierResponseRoute() {
  const root = document.querySelector("#responseRoute");
  if (!root) return;

  const model = getSupplierResponseRouteModel();
  root.innerHTML = `
    <div class="response-route-head">
      <span>Supplier response route</span>
      <strong>${model.score}/100 - ${escapeHtml(model.status)}</strong>
      <small>${escapeHtml(model.summary)}</small>
    </div>
    <div class="response-route-metrics">
      <span><strong>${escapeHtml(model.primaryChannel)}</strong>first route</span>
      <span><strong>${escapeHtml(model.responseTarget)}</strong>response target</span>
      <span><strong>${escapeHtml(model.followUp)}</strong>follow-up</span>
    </div>
    <div class="response-route-steps">
      ${model.steps.map((step, index) => `
        <span class="${step.ready ? "is-ready" : "is-watch"}">
          <b>${index + 1}</b>
          <strong>${escapeHtml(step.label)}</strong>
          <small>${escapeHtml(step.detail)}</small>
        </span>
      `).join("")}
    </div>
  `;
}

function getSupplierResponseRouteModel() {
  const listing = getSelectedListing();
  const profile = getSupplierProfile(listing.supplier);
  const composer = getDirectEnquiryModel();
  const responseHours = getResponseTargetHours(profile.response);
  const channel = getPreferredSupplierChannel(listing, composer.mode);
  const backupChannel = channel === "WhatsApp" ? "Email" : "WhatsApp";
  const followUp = responseHours <= 2
    ? "2 hours"
    : responseHours <= 4
      ? "4 hours"
      : responseHours <= 8
        ? "same day"
        : "next business day";
  const responseScore = Math.max(20, 100 - Math.max(0, responseHours - 1) * 6);
  const score = Math.min(100, Math.round(
    composer.score * 0.44
    + responseScore * 0.28
    + (listing.verified ? 12 : 4)
    + (listing.availability === "available" ? 10 : 5)
    + (profile.proof.length >= 3 ? 6 : 2)
  ));
  const status = score >= 86 ? "Fast response path" : score >= 70 ? "Managed response path" : "Needs founder chase";
  const summary = `${profile.supplier} targets ${profile.response.toLowerCase()} replies via ${channel.toLowerCase()} first.`;
  const steps = [
    {
      label: `Send by ${channel}`,
      ready: composer.score >= 70,
      detail: `${composer.status}; include project note and selected listing.`
    },
    {
      label: `Backup by ${backupChannel}`,
      ready: profile.proof.length >= 3,
      detail: `Attach proof request and direct contact route if ${channel.toLowerCase()} is quiet.`
    },
    {
      label: `Chase after ${followUp}`,
      ready: score >= 70,
      detail: "Ask for availability, rate, operator, documents, and quote validity before dispatch."
    }
  ];

  return {
    listing,
    profile,
    composer,
    primaryChannel: channel,
    backupChannel,
    responseTarget: profile.response,
    responseHours,
    followUp,
    score,
    status,
    summary,
    steps
  };
}

function getPreferredSupplierChannel(listing, mode) {
  if (mode === "quote") return "Email";
  if (listing.region === "UAE" || listing.region === "India") return "WhatsApp";
  if (listing.availability === "available") return "Phone";
  return "Email";
}

function getResponseTargetHours(responseText) {
  const text = String(responseText || "").toLowerCase();
  const underMatch = text.match(/under\s+(\d+)/);
  if (underMatch) return Number(underMatch[1]);
  if (text.includes("next business hour")) return 1;
  if (text.includes("same day")) return 8;
  if (text.includes("confirm")) return 24;
  return 12;
}

function renderResponseTracker() {
  const root = document.querySelector("#responseTracker");
  if (!root) return;

  const model = getResponseTrackerModel();
  root.innerHTML = `
    <div class="response-tracker-head">
      <span>Response tracker</span>
      <strong>${escapeHtml(model.statusLabel)}</strong>
      <small>${escapeHtml(model.summary)}</small>
    </div>
    <div class="response-tracker-metrics">
      ${model.metrics.map((metric) => `
        <span>
          <strong>${escapeHtml(metric.value)}</strong>
          ${escapeHtml(metric.label)}
        </span>
      `).join("")}
    </div>
    <div class="response-tracker-actions">
      ${model.actions.map((action) => `
        <button type="button" class="${action.kind === "primary" ? "solid-button" : "ghost-button"}" data-response-action="${escapeHtml(action.action)}">
          ${escapeHtml(action.label)}
        </button>
      `).join("")}
    </div>
  `;

  root.querySelectorAll("[data-response-action]").forEach((button) => {
    button.addEventListener("click", () => handleResponseTrackerAction(button.dataset.responseAction));
  });
}

function getResponseTrackerModel(now = new Date()) {
  const listing = getSelectedListing();
  const route = getSupplierResponseRouteModel();
  const record = getResponseTrackerRecord(listing.id);
  const status = record.status || "draft";
  const dueLabel = getTrackerDueLabel(record.followUpAt, now);
  const routeLabel = `${route.primaryChannel} / ${route.backupChannel}`;
  const sentLabel = record.sentAt ? formatTrackerTime(record.sentAt) : record.copiedAt ? "Copied only" : "Not sent";
  const replyLabel = record.replyAt ? formatTrackerTime(record.replyAt) : "No reply yet";
  let statusLabel = "Draft enquiry";
  let summary = `Copy the enquiry, then send through ${route.primaryChannel.toLowerCase()} first.`;
  const actions = [];

  if (status === "copied") {
    statusLabel = "Copied, ready to send";
    summary = `Send by ${route.primaryChannel.toLowerCase()}, then chase after ${route.followUp}.`;
    actions.push({ action: "sent", label: "Mark sent", kind: "primary" });
  } else if (status === "sent") {
    const isDue = record.followUpAt && new Date(record.followUpAt).getTime() <= now.getTime();
    statusLabel = isDue ? "Follow up now" : "Waiting for supplier";
    summary = isDue
      ? `Follow up by ${route.backupChannel.toLowerCase()} and ask for availability, rate, and quote validity.`
      : `Waiting on ${route.profile.supplier}; next chase ${dueLabel}.`;
    actions.push({ action: "replied", label: "Mark replied", kind: "primary" });
    actions.push({ action: "followup", label: "Log follow-up", kind: "secondary" });
  } else if (status === "replied") {
    statusLabel = "Supplier replied";
    summary = "Move the reply into RFQ, Quote Guard, or Mobilization before dispatch.";
    actions.push({ action: "sent", label: "Reopen chase", kind: "secondary" });
  } else {
    actions.push({ action: "sent", label: "Mark sent", kind: "primary" });
  }

  actions.push({ action: "reset", label: "Reset", kind: "secondary" });

  return {
    listing,
    route,
    record,
    status,
    statusLabel,
    summary,
    metrics: [
      { label: "route", value: routeLabel },
      { label: "sent", value: sentLabel },
      { label: "next chase", value: status === "sent" ? dueLabel : route.followUp },
      { label: "reply", value: replyLabel }
    ],
    actions
  };
}

function getResponseTrackerRecord(listingId) {
  const record = state.responseTracker || {};
  if (record.listingId === listingId) return { ...defaultState().responseTracker, ...record };
  return { ...defaultState().responseTracker, listingId, status: "draft" };
}

function markEnquiryCopied() {
  const listing = getSelectedListing();
  const current = getResponseTrackerRecord(listing.id);
  const protectedStatus = current.status === "sent" || current.status === "replied";
  state.responseTracker = {
    ...current,
    listingId: listing.id,
    status: protectedStatus ? current.status : "copied",
    copiedAt: new Date().toISOString()
  };
  saveState();
  renderResponseTracker();
  renderReplyQualityGate();
  renderReplyClarifier();
  renderDecisionReceipt();
  renderDecisionRouter();
  renderBuyerEnquiryReceipt();
  renderListingRoiProof();
  renderSupplierRenewalClosePack();
}

function handleResponseTrackerAction(action) {
  const listing = getSelectedListing();
  const route = getSupplierResponseRouteModel();
  const current = getResponseTrackerRecord(listing.id);
  const now = new Date();

  if (action === "reset") {
    state.responseTracker = { ...defaultState().responseTracker, listingId: listing.id };
    saveState();
    renderResponseTracker();
    renderReplyQualityGate();
    renderReplyClarifier();
    renderDecisionReceipt();
    renderDecisionRouter();
    renderBuyerEnquiryReceipt();
    renderListingRoiProof();
    renderSupplierRenewalClosePack();
    showToast("Response tracker reset.");
    return;
  }

  if (action === "sent") {
    const followUpAt = addHours(now, Math.max(1, route.responseHours)).toISOString();
    state.responseTracker = {
      ...current,
      listingId: listing.id,
      status: "sent",
      sentAt: current.sentAt || now.toISOString(),
      followUpAt,
      replyAt: ""
    };
    saveState();
    renderResponseTracker();
    renderReplyQualityGate();
    renderReplyClarifier();
    renderDecisionReceipt();
    renderDecisionRouter();
    renderBuyerEnquiryReceipt();
    renderListingRoiProof();
    renderSupplierRenewalClosePack();
    showToast(`Supplier chase set for ${route.followUp}.`);
    return;
  }

  if (action === "followup") {
    state.responseTracker = {
      ...current,
      listingId: listing.id,
      status: "sent",
      followUpAt: addHours(now, Math.max(1, route.responseHours)).toISOString()
    };
    saveState();
    renderResponseTracker();
    renderReplyQualityGate();
    renderReplyClarifier();
    renderDecisionReceipt();
    renderDecisionRouter();
    renderBuyerEnquiryReceipt();
    renderListingRoiProof();
    renderSupplierRenewalClosePack();
    showToast("Follow-up logged and next chase reset.");
    return;
  }

  if (action === "replied") {
    state.responseTracker = {
      ...current,
      listingId: listing.id,
      status: "replied",
      replyAt: now.toISOString()
    };
    saveState();
    renderResponseTracker();
    renderReplyQualityGate();
    renderReplyClarifier();
    renderDecisionReceipt();
    renderDecisionRouter();
    renderBuyerEnquiryReceipt();
    renderListingRoiProof();
    renderSupplierRenewalClosePack();
    showToast("Supplier reply recorded.");
  }
}

function addHours(date, hours) {
  return new Date(date.getTime() + hours * 60 * 60 * 1000);
}

function formatTrackerTime(value) {
  if (!value) return "Not set";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Not set";
  return `${date.toLocaleDateString(undefined, { month: "short", day: "numeric" })} ${date.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })}`;
}

function getTrackerDueLabel(value, now = new Date()) {
  if (!value) return "Not set";
  const due = new Date(value);
  if (Number.isNaN(due.getTime())) return "Not set";
  const delta = due.getTime() - now.getTime();
  if (delta <= 0) return "due now";
  const minutes = Math.ceil(delta / 60000);
  if (minutes < 60) return `in ${minutes} min`;
  const hours = Math.ceil(minutes / 60);
  if (hours < 24) return `in ${hours} hr`;
  const days = Math.ceil(hours / 24);
  return `in ${days} day${days === 1 ? "" : "s"}`;
}

function renderReplyQualityGate() {
  const root = document.querySelector("#replyQualityGate");
  if (!root) return;

  const model = getReplyQualityGateModel();
  root.innerHTML = `
    <div class="reply-quality-head">
      <span>Reply quality gate</span>
      <strong>${model.score}/100 - ${escapeHtml(model.status)}</strong>
      <small>${escapeHtml(model.summary)}</small>
    </div>
    <div class="reply-quality-gates">
      ${model.gates.map((gate) => `
        <span class="${gate.ready ? "is-ready" : "is-gap"}">
          <strong>${escapeHtml(gate.label)}</strong>
          <small>${escapeHtml(gate.detail)}</small>
        </span>
      `).join("")}
    </div>
    <div class="reply-quality-next">
      <strong>${escapeHtml(model.nextAction)}</strong>
      <span>${escapeHtml(model.nextDetail)}</span>
    </div>
  `;
}

function getReplyQualityGateModel() {
  const listing = getSelectedListing();
  const tracker = getResponseTrackerModel();
  const quote = getQuoteGuardModel();
  const passport = getTrustPassport(listing);
  const route = getSupplierResponseRouteModel();
  const hasReply = tracker.status === "replied";
  const availabilityReady = hasReply && listing.availability === "available";
  const quoteReady = hasReply && quote.score >= 74;
  const operatorReady = hasReply && (state.quoteIncludes.operator || /operator|crew|supervisor/i.test(listing.specs));
  const documentReady = hasReply && passport.score >= 74;
  const validityReady = hasReply && state.quoteIncludes.validity;
  const routeReady = hasReply && route.score >= 70;
  const gates = [
    {
      label: "Availability",
      ready: availabilityReady,
      detail: availabilityReady ? "Supplier reply can support a live rental path." : "Confirm current machine availability."
    },
    {
      label: "Rate terms",
      ready: quoteReady,
      detail: quoteReady ? `${quote.score}/100 quote clarity.` : "Clarify rate, inclusions, and exclusions."
    },
    {
      label: "Operator",
      ready: operatorReady,
      detail: operatorReady ? "Operator or crew path is visible." : "Ask whether operator, crew, or supervisor is included."
    },
    {
      label: "Documents",
      ready: documentReady,
      detail: documentReady ? `${passport.score}/100 trust proof.` : "Confirm insurance, inspection, license, or load proof."
    },
    {
      label: "Validity",
      ready: validityReady,
      detail: validityReady ? "Quote validity is requested." : "Ask how long the quote is valid."
    },
    {
      label: "Direct payment",
      ready: routeReady,
      detail: routeReady ? "Contact route and direct payment rule are clear." : "Confirm best direct payment/contact route."
    }
  ];
  const readyCount = gates.filter((gate) => gate.ready).length;
  const baseScore = Math.round((readyCount / gates.length) * 100);
  const score = hasReply ? Math.round(baseScore * 0.7 + quote.score * 0.18 + passport.score * 0.12) : Math.min(48, tracker.status === "sent" ? 44 : tracker.status === "copied" ? 36 : 24);
  const status = !hasReply
    ? "Awaiting supplier reply"
    : score >= 86
      ? "Move forward"
      : score >= 68
        ? "Clarify before award"
        : "Hold and chase";
  const summary = hasReply
    ? `${readyCount}/${gates.length} reply gates are ready for ${listing.supplier}.`
    : `${tracker.statusLabel}; reply quality can be scored after the supplier answers.`;
  const nextAction = !hasReply
    ? "Wait for reply or chase on schedule"
    : score >= 86
      ? "Move into Quote Guard and Mobilization"
      : score >= 68
        ? "Send clarification before award"
        : "Hold dispatch until supplier closes gaps";
  const nextDetail = !hasReply
    ? `Use ${route.primaryChannel} first and ${route.backupChannel} if the supplier misses the ${route.followUp} follow-up window.`
    : gates.filter((gate) => !gate.ready).slice(0, 2).map((gate) => gate.label).join(" and ") || "Reply is clean enough for the buyer workbench.";

  return {
    listing,
    tracker,
    quote,
    passport,
    route,
    hasReply,
    gates,
    readyCount,
    score,
    status,
    summary,
    nextAction,
    nextDetail
  };
}

function renderReplyClarifier() {
  const root = document.querySelector("#replyClarifier");
  if (!root) return;

  const model = getReplyClarifierModel();
  root.innerHTML = `
    <div class="reply-clarifier-head">
      <span>Reply clarifier</span>
      <strong>${escapeHtml(model.title)}</strong>
      <small>${escapeHtml(model.summary)}</small>
    </div>
    <div class="reply-clarifier-metrics">
      <span><strong>${escapeHtml(model.channel)}</strong>channel</span>
      <span><strong>${escapeHtml(model.urgency)}</strong>timing</span>
      <span><strong>${escapeHtml(model.focus)}</strong>focus</span>
    </div>
    <div class="reply-clarifier-message">
      ${buildReplyClarifierText(model)
        .split("\n")
        .filter(Boolean)
        .map((line) => `<p>${escapeHtml(line)}</p>`)
        .join("")}
    </div>
    <button type="button" class="ghost-button" data-reply-clarifier-copy>Copy supplier follow-up</button>
  `;

  root.querySelector("[data-reply-clarifier-copy]").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildReplyClarifierText());
      showToast("Supplier follow-up copied.");
    } catch {
      showToast("Copy is blocked here, but the supplier follow-up is visible.");
    }
  });
}

function getReplyClarifierModel() {
  const quality = getReplyQualityGateModel();
  const missingGates = quality.gates.filter((gate) => !gate.ready);
  const missingLabels = missingGates.map((gate) => gate.label);
  const mode = !quality.hasReply
    ? "chase"
    : missingGates.length
      ? "clarify"
      : "handoff";
  const channel = mode === "chase"
    ? `${quality.route.primaryChannel} then ${quality.route.backupChannel}`
    : quality.route.primaryChannel === "Phone"
      ? "Phone + written note"
      : quality.route.primaryChannel;
  const title = mode === "chase"
    ? "Chase before the buyer cools"
    : mode === "clarify"
      ? "Clean the reply before award"
      : "Reply is handoff-ready";
  const summary = mode === "chase"
    ? `${quality.listing.supplier} has not replied yet; send a tight chase that asks for the missing commercial proof.`
    : mode === "clarify"
      ? `${missingLabels.join(", ")} still need confirmation before the buyer should rely on the reply.`
      : `${quality.listing.supplier} has enough reply clarity for the next buyer workflow.`;
  const focus = mode === "handoff"
    ? "ready"
    : missingLabels.slice(0, 2).join(" + ") || "reply";
  const urgency = mode === "chase"
    ? quality.route.followUp
    : mode === "clarify"
      ? "before award"
      : "same day";

  return {
    ...quality,
    mode,
    missingGates,
    missingLabels,
    channel,
    title,
    summary,
    focus,
    urgency
  };
}

function renderDecisionReceipt() {
  const root = document.querySelector("#decisionReceipt");
  if (!root) return;

  const model = getDecisionReceiptModel();
  root.innerHTML = `
    <div class="decision-receipt-head">
      <span>Decision receipt</span>
      <strong>${model.score}/100 - ${escapeHtml(model.status)}</strong>
      <small>${escapeHtml(model.summary)}</small>
    </div>
    <div class="decision-receipt-metrics">
      <span><strong>${model.fit.score}/100</strong>buyer fit</span>
      <span><strong>${model.quality.readyCount}/${model.quality.gates.length}</strong>reply gates</span>
      <span><strong>${escapeHtml(model.paymentRuleShort)}</strong>payment</span>
    </div>
    <div class="decision-receipt-evidence">
      ${model.evidence.map((item) => `
        <span class="${item.ready ? "is-ready" : "is-watch"}">
          <strong>${escapeHtml(item.label)}</strong>
          <small>${escapeHtml(item.detail)}</small>
        </span>
      `).join("")}
    </div>
    <div class="decision-receipt-next">
      <strong>${escapeHtml(model.nextAction)}</strong>
      <span>${escapeHtml(model.nextDetail)}</span>
    </div>
    <button type="button" class="ghost-button" data-decision-receipt-copy>Copy decision receipt</button>
  `;

  root.querySelector("[data-decision-receipt-copy]").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildDecisionReceiptText());
      showToast("Buyer decision receipt copied.");
    } catch {
      showToast("Copy is blocked here, but the decision receipt is visible.");
    }
  });
}

function getDecisionReceiptModel() {
  const listing = getSelectedListing();
  const fit = getBuyerFitScore(listing);
  const passport = getTrustPassport(listing);
  const quote = getQuoteGuardModel();
  const quality = getReplyQualityGateModel();
  const clarifier = getReplyClarifierModel();
  const route = getSupplierResponseRouteModel();
  const missingLabels = quality.gates.filter((gate) => !gate.ready).map((gate) => gate.label);
  const availabilityBonus = listing.availability === "available" ? 6 : 2;
  const replyBonus = quality.hasReply ? 6 : 0;
  const score = Math.max(0, Math.min(100, Math.round(
    fit.score * 0.18
    + passport.score * 0.2
    + quote.score * 0.2
    + quality.score * 0.24
    + route.score * 0.12
    + availabilityBonus
    + replyBonus
  )));
  const status = !quality.hasReply
    ? "Waiting on supplier"
    : score >= 86 && missingLabels.length === 0
      ? "Decision-ready"
      : score >= 70
        ? "Proceed with controls"
        : "Hold decision";
  const paymentRule = "Buyer pays rental company directly; Heavyster provides listing, proof, reply, and decision workflow only.";
  const evidence = [
    {
      label: "Equipment fit",
      ready: fit.score >= 70,
      detail: `${fit.score}/100 buyer fit for the current search and selected machine.`
    },
    {
      label: "Supplier proof",
      ready: passport.score >= 74,
      detail: `${passport.score}/100 Trust Passport; ${passport.verdict}.`
    },
    {
      label: "Reply completeness",
      ready: quality.hasReply && missingLabels.length <= 1,
      detail: quality.hasReply ? `${quality.readyCount}/${quality.gates.length} reply gates ready.` : "Supplier reply has not been recorded yet."
    },
    {
      label: "Commercial clarity",
      ready: quote.score >= 74,
      detail: `${quote.score}/100 Quote Guard; ${quote.missingCount} unclear term${quote.missingCount === 1 ? "" : "s"}.`
    },
    {
      label: "Direct payment",
      ready: true,
      detail: "Rental payment remains directly between renter and rental company."
    }
  ];
  const risks = [
    !quality.hasReply ? "supplier reply not recorded" : "",
    ...missingLabels.map((label) => `${label.toLowerCase()} missing`),
    quote.missingCount ? `${quote.missingCount} quote term${quote.missingCount === 1 ? "" : "s"} unclear` : "",
    listing.availability !== "available" ? "availability is soon, not now" : ""
  ].filter(Boolean);
  const summary = risks.length
    ? `${listing.supplier} has ${risks.length} decision risk${risks.length === 1 ? "" : "s"} to close before the buyer relies on the machine.`
    : `${listing.supplier} is ready for buyer decision work while payment stays direct.`;
  const nextAction = !quality.hasReply
    ? "Copy the chase before deciding"
    : missingLabels.length
      ? "Close missing reply terms"
      : score >= 86
        ? "Move to award or mobilization"
        : "Use Quote Guard before award";
  const nextDetail = !quality.hasReply
    ? `Use the ${clarifier.channel.toLowerCase()} path and chase after ${route.followUp}.`
    : missingLabels.length
      ? `Ask for ${missingLabels.slice(0, 3).join(", ")} before dispatch or award.`
      : "Receipt is clean enough to support RFQ, award, quote guard, or mobilization handoff.";

  return {
    listing,
    fit,
    passport,
    quote,
    quality,
    clarifier,
    route,
    score,
    status,
    paymentRule,
    paymentRuleShort: "direct",
    evidence,
    risks,
    summary,
    nextAction,
    nextDetail
  };
}

function renderDecisionRouter() {
  const root = document.querySelector("#decisionRouter");
  if (!root) return;

  const model = getDecisionRouterModel();
  root.innerHTML = `
    <div class="decision-router-head">
      <span>Decision router</span>
      <strong>${escapeHtml(model.title)}</strong>
      <small>${escapeHtml(model.summary)}</small>
    </div>
    <div class="decision-router-metrics">
      <span><strong>${model.receipt.score}/100</strong>receipt</span>
      <span><strong>${escapeHtml(model.destination)}</strong>destination</span>
      <span><strong>${model.routes.length}</strong>moves</span>
    </div>
    <div class="decision-router-actions">
      ${model.routes.map((route) => `
        <button
          type="button"
          class="${route.kind === "primary" ? "solid-button" : "ghost-button"}"
          data-decision-route-action="${escapeHtml(route.action)}"
          data-decision-route-target="${escapeHtml(route.anchor)}"
        >
          <strong>${escapeHtml(route.label)}</strong>
          <span>${escapeHtml(route.detail)}</span>
        </button>
      `).join("")}
    </div>
  `;

  root.querySelectorAll("[data-decision-route-action]").forEach((button) => {
    button.addEventListener("click", async () => {
      const action = button.dataset.decisionRouteAction;

      if (action === "copy-clarifier" || action === "copy-receipt" || action === "copy-router") {
        try {
          const text = action === "copy-clarifier"
            ? buildReplyClarifierText()
            : action === "copy-receipt"
              ? buildDecisionReceiptText()
              : buildDecisionRouterText();
          await navigator.clipboard.writeText(text);
          showToast(action === "copy-clarifier" ? "Supplier clarification copied." : action === "copy-receipt" ? "Decision receipt copied." : "Decision route copied.");
        } catch {
          showToast("Copy is blocked here, but the route is visible.");
        }
        return;
      }

      const target = document.querySelector(button.dataset.decisionRouteTarget);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.location.hash = button.dataset.decisionRouteTarget;
      showToast(`${button.textContent.trim().split(/\s+/).slice(0, 3).join(" ")} opened.`);
    });
  });
}

function getDecisionRouterModel() {
  const receipt = getDecisionReceiptModel();
  const missingReplyCount = receipt.quality.gates.filter((gate) => !gate.ready).length;
  const title = receipt.status === "Waiting on supplier"
    ? "Chase supplier first"
    : receipt.status === "Decision-ready"
      ? "Move buyer forward"
      : receipt.status === "Proceed with controls"
        ? "Control gaps, then decide"
        : "Hold until proof improves";
  const destination = receipt.status === "Decision-ready"
    ? "award"
    : receipt.status === "Waiting on supplier"
      ? "reply"
      : receipt.quote.missingCount || missingReplyCount
        ? "quote guard"
        : "RFQ";
  const summary = receipt.risks.length
    ? `${receipt.risks.length} risk${receipt.risks.length === 1 ? "" : "s"} shape the next route for ${receipt.listing.supplier}.`
    : `${receipt.listing.supplier} can move into award or mobilization without payment collection.`;

  let routes;
  if (receipt.status === "Waiting on supplier") {
    routes = [
      {
        label: "Copy supplier chase",
        detail: "Ask for availability, rate, proof, validity, and direct contact.",
        action: "copy-clarifier",
        anchor: "#marketplace",
        kind: "primary"
      },
      {
        label: "Open RFQ",
        detail: "Prepare alternatives while the supplier responds.",
        action: "open",
        anchor: "#rfq",
        kind: "secondary"
      },
      {
        label: "Copy route plan",
        detail: "Share the next-best action note internally.",
        action: "copy-router",
        anchor: "#marketplace",
        kind: "secondary"
      }
    ];
  } else if (receipt.status === "Decision-ready") {
    routes = [
      {
        label: "Open Award",
        detail: "Move the clean machine into decision comparison.",
        action: "open",
        anchor: "#award",
        kind: "primary"
      },
      {
        label: "Open Mobilize",
        detail: "Prepare dispatch, proof, site access, and direct handoff.",
        action: "open",
        anchor: "#mobilize",
        kind: "secondary"
      },
      {
        label: "Copy receipt",
        detail: "Send the buyer a decision proof note.",
        action: "copy-receipt",
        anchor: "#marketplace",
        kind: "secondary"
      }
    ];
  } else {
    routes = [
      {
        label: missingReplyCount ? "Copy clarification" : "Open Quote Guard",
        detail: missingReplyCount ? "Close the supplier reply gaps first." : "Clean quote terms before award.",
        action: missingReplyCount ? "copy-clarifier" : "open",
        anchor: missingReplyCount ? "#marketplace" : "#quote-guard",
        kind: "primary"
      },
      {
        label: "Open Quote Guard",
        detail: "Check operator, transport, fuel, permit, overtime, and validity.",
        action: "open",
        anchor: "#quote-guard",
        kind: "secondary"
      },
      {
        label: "Open RFQ",
        detail: "Keep backup suppliers warm while gaps close.",
        action: "open",
        anchor: "#rfq",
        kind: "secondary"
      }
    ];
  }

  return {
    receipt,
    title,
    destination,
    summary,
    routes
  };
}

function renderListingRoiProof() {
  const root = document.querySelector("#listingRoiProof");
  if (!root) return;

  const model = getListingRoiProofModel();
  root.innerHTML = `
    <div class="listing-roi-proof-head">
      <span>Listing ROI proof</span>
      <strong>${model.score}/100 - ${escapeHtml(model.status)}</strong>
      <small>${escapeHtml(model.summary)}</small>
    </div>
    <div class="listing-roi-proof-metrics">
      <span><strong>USD ${model.listingAnnualValue.toLocaleString()}</strong>listing ARR</span>
      <span><strong>USD ${model.leadBudget.toLocaleString()}</strong>lead value</span>
      <span><strong>${model.renewalSignal}</strong>renewal proof</span>
    </div>
    <div class="listing-roi-proof-evidence">
      ${model.evidence.map((item) => `
        <span class="${item.ready ? "is-ready" : "is-watch"}">
          <strong>${escapeHtml(item.label)}</strong>
          <small>${escapeHtml(item.detail)}</small>
        </span>
      `).join("")}
    </div>
    <div class="listing-roi-proof-actions">
      <button type="button" class="solid-button" data-listing-roi-action="copy">Copy ROI proof</button>
      <button type="button" class="ghost-button" data-listing-roi-action="lead">Open Lead Desk</button>
      <button type="button" class="ghost-button" data-listing-roi-action="revenue">Open Revenue Desk</button>
    </div>
  `;

  root.querySelectorAll("[data-listing-roi-action]").forEach((button) => {
    button.addEventListener("click", async () => {
      const action = button.dataset.listingRoiAction;
      if (action === "copy") {
        try {
          await navigator.clipboard.writeText(buildListingRoiProofText());
          showToast("Listing ROI proof copied.");
        } catch {
          showToast("Copy is blocked here, but the ROI proof is visible.");
        }
        return;
      }

      const target = document.querySelector(action === "lead" ? "#lead-desk" : "#revenue-desk");
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.location.hash = action === "lead" ? "#lead-desk" : "#revenue-desk";
      showToast(action === "lead" ? "Lead Desk opened." : "Revenue Desk opened.");
    });
  });
}

function getListingRoiProofModel() {
  const listing = getSelectedListing();
  const receipt = getDecisionReceiptModel();
  const router = getDecisionRouterModel();
  const tracker = getResponseTrackerModel();
  const revenue = getRevenueDeskModel(listing);
  const leadDesk = getLeadDeskModel(listing);
  const activeLead = leadDesk.active;
  const listingAnnualValue = 99;
  const leadBudget = activeLead?.lead?.budget || 0;
  const trackerProof = tracker.status === "replied" ? 100 : tracker.status === "sent" ? 72 : tracker.status === "copied" ? 58 : 35;
  const routeProof = router.destination === "award" || router.destination === "mobilization" ? 100 : router.destination === "quote guard" ? 78 : router.destination === "RFQ" ? 72 : 58;
  const score = Math.max(0, Math.min(100, Math.round(
    receipt.score * 0.34
    + activeLead.score * 0.18
    + revenue.score * 0.18
    + trackerProof * 0.15
    + routeProof * 0.15
  )));
  const status = score >= 86
    ? "Renewal-grade proof"
    : score >= 70
      ? "Useful proof"
      : "Build more proof";
  const renewalSignal = score >= 86 ? "strong" : score >= 70 ? "warm" : "weak";
  const evidence = [
    {
      label: "Buyer intent",
      ready: receipt.fit.score >= 70,
      detail: `${receipt.fit.score}/100 buyer fit for ${listing.name}.`
    },
    {
      label: "Direct enquiry proof",
      ready: tracker.status === "sent" || tracker.status === "replied",
      detail: `${tracker.statusLabel}; ${tracker.summary}`
    },
    {
      label: "Decision movement",
      ready: receipt.status !== "Waiting on supplier",
      detail: `${router.title}; routed toward ${router.destination}.`
    },
    {
      label: "Supplier lead value",
      ready: activeLead.score >= 70,
      detail: `${activeLead.score}/100 lead, USD ${leadBudget.toLocaleString()} modeled budget.`
    },
    {
      label: "Renewal economics",
      ready: revenue.score >= 62 || revenue.paidListings > 0,
      detail: `Paid listing ARR stays simple at USD ${listingAnnualValue}/year per active machine.`
    }
  ];
  const proofGaps = evidence.filter((item) => !item.ready).map((item) => item.label);
  const summary = proofGaps.length
    ? `${listing.supplier} needs ${proofGaps.length} proof gap${proofGaps.length === 1 ? "" : "s"} closed before this becomes renewal-grade.`
    : `${listing.supplier} has a clean paid-listing proof story without Heavyster touching rental payment.`;
  const nextAction = proofGaps.length
    ? `Close ${proofGaps.slice(0, 2).join(" and ")}`
    : "Use this in renewal or annual plan conversation";

  return {
    listing,
    receipt,
    router,
    tracker,
    revenue,
    leadDesk,
    activeLead,
    listingAnnualValue,
    leadBudget,
    score,
    status,
    renewalSignal,
    evidence,
    proofGaps,
    summary,
    nextAction
  };
}

function renderSupplierRenewalClosePack() {
  const root = document.querySelector("#supplierRenewalClosePack");
  if (!root) return;

  const model = getSupplierRenewalClosePackModel();
  root.innerHTML = `
    <div class="supplier-renewal-close-head">
      <span>Renewal close pack</span>
      <strong>${model.score}/100 - ${escapeHtml(model.status)}</strong>
      <small>${escapeHtml(model.summary)}</small>
    </div>
    <div class="supplier-renewal-close-metrics">
      <span><strong>${model.revenue.paidListings}</strong>paid listings</span>
      <span><strong>USD ${model.closeValue.toLocaleString()}</strong>${escapeHtml(model.valueLabel)}</span>
      <span><strong>${escapeHtml(model.closeType)}</strong>close type</span>
    </div>
    <div class="supplier-renewal-close-offer">
      <strong>${escapeHtml(model.offerTitle)}</strong>
      <span>${escapeHtml(model.offerDetail)}</span>
    </div>
    <div class="supplier-renewal-close-proof">
      ${model.proof.map((item) => `
        <span class="${item.ready ? "is-ready" : "is-watch"}">
          <strong>${escapeHtml(item.label)}</strong>
          <small>${escapeHtml(item.detail)}</small>
        </span>
      `).join("")}
    </div>
    <div class="supplier-renewal-close-actions">
      <button type="button" class="solid-button" data-renewal-close-action="copy">Copy close pack</button>
      <button type="button" class="ghost-button" data-renewal-close-action="pricing">Open Pricing</button>
      <button type="button" class="ghost-button" data-renewal-close-action="revenue">Open Revenue Desk</button>
    </div>
  `;

  root.querySelectorAll("[data-renewal-close-action]").forEach((button) => {
    button.addEventListener("click", async () => {
      const action = button.dataset.renewalCloseAction;
      if (action === "copy") {
        try {
          await navigator.clipboard.writeText(buildSupplierRenewalCloseText());
          showToast("Supplier renewal close pack copied.");
        } catch {
          showToast("Copy is blocked here, but the renewal close pack is visible.");
        }
        return;
      }

      const target = document.querySelector(action === "pricing" ? "#pricing" : "#revenue-desk");
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.location.hash = action === "pricing" ? "#pricing" : "#revenue-desk";
      showToast(action === "pricing" ? "Pricing opened." : "Revenue Desk opened.");
    });
  });
}

function getSupplierRenewalClosePackModel() {
  const roi = getListingRoiProofModel();
  const listing = roi.listing;
  const revenue = roi.revenue;
  const monthlyListings = revenue.rows
    .filter((row) => row.isPaid && row.plan === "monthly")
    .reduce((total, row) => total + row.listings, 0);
  const renewalRiskValue = revenue.rows
    .filter((row) => row.statusClass === "renewal-risk")
    .reduce((total, row) => total + row.annualRevenue, 0);
  const closeListings = Math.max(1, monthlyListings || revenue.renewalRiskCount || revenue.paidListings || 1);
  const annualPlanValue = closeListings * 99;
  const monthlyEquivalentValue = closeListings * 108;
  const annualSavings = Math.max(0, monthlyEquivalentValue - annualPlanValue);
  const closeValue = renewalRiskValue || annualPlanValue;
  const valueLabel = renewalRiskValue ? "ARR to save" : "annual plan";
  const closeType = renewalRiskValue
    ? "renewal save"
    : monthlyListings
      ? "annual upgrade"
      : roi.score >= 86
        ? "proof close"
        : "proof nurture";
  const score = Math.max(0, Math.min(100, Math.round(
    roi.score * 0.46
    + revenue.score * 0.24
    + (monthlyListings ? 10 : 4)
    + (revenue.renewalRiskCount ? 8 : 4)
    + (roi.renewalSignal === "strong" ? 12 : roi.renewalSignal === "warm" ? 7 : 2)
  )));
  const status = score >= 86
    ? "Close now"
    : score >= 70
      ? "Warm close"
      : "Build proof first";
  const offerTitle = closeType === "renewal save"
    ? "Save the active listing package"
    : closeType === "annual upgrade"
      ? "Move monthly listings to annual"
      : closeType === "proof close"
        ? "Use ROI proof to close annual"
        : "Send proof before asking for renewal";
  const offerDetail = closeType === "renewal save"
    ? `Protect USD ${closeValue.toLocaleString()} modeled listing ARR before visibility drops.`
    : closeType === "annual upgrade"
      ? `Convert ${closeListings} monthly listing${closeListings === 1 ? "" : "s"} to USD 99/year and show USD ${annualSavings.toLocaleString()} annual savings versus monthly.`
      : closeType === "proof close"
        ? `Use the buyer decision receipt and ROI proof to ask for an annual listing commitment.`
        : `Close ${roi.proofGaps.slice(0, 2).join(" and ") || "buyer proof"} before asking for an annual plan.`;
  const proof = [
    {
      label: "ROI proof",
      ready: roi.score >= 70,
      detail: `${roi.score}/100 ${roi.status.toLowerCase()} for ${listing.name}.`
    },
    {
      label: "Lead value",
      ready: roi.leadBudget > 0,
      detail: `Modeled buyer lead value is USD ${roi.leadBudget.toLocaleString()}.`
    },
    {
      label: "Renewal economics",
      ready: closeValue > 0,
      detail: `Close value is USD ${closeValue.toLocaleString()} with no rental commission.`
    },
    {
      label: "Annual logic",
      ready: closeType !== "proof nurture",
      detail: monthlyListings ? `Annual plan saves USD ${annualSavings.toLocaleString()} versus monthly for this modeled package.` : "Annual plan reduces renewal friction once proof is visible."
    },
    {
      label: "Payment discipline",
      ready: true,
      detail: "Heavyster sells listing SaaS; rental payment remains direct."
    }
  ];
  const summary = `${listing.supplier} can be approached with a ${closeType} using buyer proof, listing ARR, and direct-payment discipline.`;

  return {
    roi,
    listing,
    revenue,
    monthlyListings,
    renewalRiskValue,
    closeListings,
    annualPlanValue,
    annualSavings,
    closeValue,
    valueLabel,
    closeType,
    score,
    status,
    offerTitle,
    offerDetail,
    proof,
    summary
  };
}

function renderDirectEnquiryComposer() {
  const root = document.querySelector("#enquiryComposer");
  if (!root) return;

  const model = getDirectEnquiryModel();
  root.innerHTML = `
    <div class="enquiry-composer-head">
      <span>Message readiness</span>
      <strong>${model.score}/100 - ${escapeHtml(model.status)}</strong>
      <small>${escapeHtml(model.subject)}</small>
    </div>
    <div class="enquiry-gates">
      ${model.gates.map((gate) => `
        <span class="${gate.ready ? "is-ready" : "is-gap"}">
          <strong>${escapeHtml(gate.label)}</strong>
          <small>${escapeHtml(gate.detail)}</small>
        </span>
      `).join("")}
    </div>
    <div class="enquiry-preview">
      ${model.message.map((line) => line ? `<p>${escapeHtml(line)}</p>` : `<br />`).join("")}
    </div>
  `;
}

function getDirectEnquiryModel() {
  const listing = getSelectedListing();
  const fit = getBuyerFitScore(listing);
  const passport = getTrustPassport(listing);
  const quote = getQuoteGuardModel();
  const mode = state.enquiryMode || "proof";
  const hasProjectNote = Boolean(String(state.projectNote || "").trim());
  const readyProof = passport.score >= 74;
  const quoteReady = quote.score >= 70;
  const availableNow = listing.availability === "available";
  const gates = [
    {
      label: "Machine",
      ready: fit.score >= 68,
      detail: `${fit.score}/100 buyer fit`
    },
    {
      label: "Project",
      ready: hasProjectNote,
      detail: hasProjectNote ? "Buyer context attached" : "Add scope, dates, and location"
    },
    {
      label: "Proof",
      ready: readyProof,
      detail: `${passport.score}/100 ${passport.verdict.toLowerCase()}`
    },
    {
      label: "Quote",
      ready: quoteReady,
      detail: `${quote.score}/100 quote clarity`
    },
    {
      label: "Payment",
      ready: true,
      detail: "Buyer pays supplier direct"
    }
  ];
  const score = Math.min(100, Math.round(
    28
    + fit.score * 0.18
    + passport.score * 0.18
    + (hasProjectNote ? 14 : 4)
    + (availableNow ? 9 : 4)
    + (quoteReady ? 9 : 3)
    + (listing.verified ? 8 : 2)
  ));
  const status = score >= 86 ? "Ready to send" : score >= 70 ? "Send after quick check" : "Needs buyer context";
  const subject = `${listing.name} rental enquiry - ${listing.city}, ${listing.region}`;
  const base = [
    `Hi ${listing.supplier},`,
    "",
    `I found your ${listing.name} on Heavyster for ${listing.city}, ${listing.region}.`
  ];
  const proofLines = [
    `The listing shows ${listing.documents.join(", ")} and ${passport.verdict.toLowerCase()} proof status.`,
    `Please confirm current availability, rate, operator option, delivery terms, document freshness, and best direct contact route.`
  ];
  const quickLines = [
    `Please confirm if it is ${availableNow ? "still available now" : "available soon"} and who should be contacted for the rental quote.`,
    "Please also share the fastest phone, WhatsApp, or email route for direct coordination."
  ];
  const quoteLines = [
    `Please quote for USD ${state.quoteAmount.toLocaleString()} / ${state.quoteDays} day${state.quoteDays === 1 ? "" : "s"} reference scope, or send your direct rental terms if different.`,
    "Please separate machine hire, operator, transport, fuel, permit, overtime, validity, deposit, and cancellation terms."
  ];
  const modeLines = mode === "quick" ? quickLines : mode === "quote" ? quoteLines : proofLines;
  const message = [
    ...base,
    hasProjectNote ? `Project note: ${state.projectNote}` : "Project note: buyer will share exact scope, dates, and site access details.",
    ...modeLines,
    "",
    "Payment will be arranged directly between buyer and rental company. Heavyster is only routing the enquiry."
  ];

  return {
    listing,
    fit,
    passport,
    quote,
    mode,
    subject,
    score,
    status,
    gates,
    message
  };
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
  renderCatalog();
  renderShortlistTray();
  renderLeadPacket();
  renderRfqRoom();
  renderAwardRoom();
  renderQuoteGuard();
  renderMobilizationTower();
  renderDealTrail();
  renderBuyerWorkbench();
  renderMarketplaceAnswer();
  showToast(exists ? "Removed from shortlist." : "Saved to shortlist.");
}

function renderShortlistTray() {
  const selected = getSelectedListing();
  const model = getShortlistCompareModel();
  const shortlisted = state.shortlistIds
    .map((id) => listings.find((listing) => listing.id === id))
    .filter(Boolean);
  const isSaved = state.shortlistIds.includes(selected.id);
  const toggle = document.querySelector("#shortlistToggleButton");
  toggle.textContent = isSaved ? "Remove from shortlist" : "Save to shortlist";
  const compareButton = document.querySelector("#compareShortlistButton");
  if (compareButton) compareButton.textContent = state.shortlistCompareOpen ? "Hide compare" : "Compare shortlist";
  const commandClass = model.decisionScore >= 82 ? "is-ready" : model.decisionScore >= 68 ? "is-watch" : "is-gap";

  document.querySelector("#shortlistTray").innerHTML = `
    <div class="shortlist-head">
      <strong>${shortlisted.length} shortlisted</strong>
      <span>${state.shortlistCompareOpen ? "Decision cockpit" : "Buyer memory"}</span>
    </div>
    <div class="shortlist-command ${commandClass}">
      <span>Shortlist command</span>
      <strong>${escapeHtml(model.command)}</strong>
      <small>${escapeHtml(model.commandDetail)}</small>
      <b>${model.decisionScore}/100</b>
    </div>
    <div class="shortlist-scoreboard" aria-label="Shortlist scorecard">
      <span><strong>${model.availableCount}</strong> available now</span>
      <span><strong>${model.verifiedCount}</strong> verified</span>
      <span><strong>${model.averageScore}/100</strong> avg award score</span>
      <span><strong>USD ${model.visibleArr.toLocaleString()}</strong> visible ARR</span>
    </div>
    <div class="shortlist-action-row">
      <button type="button" class="is-primary" data-shortlist-action="rfq">Open RFQ</button>
      <button type="button" data-shortlist-action="backup">${model.suggestion ? "Add backup" : "Best set"}</button>
      <button type="button" data-shortlist-action="copy">Copy pack</button>
    </div>
    ${shortlisted.length ? shortlisted.map((listing) => `
      <button type="button" class="shortlist-item ${listing.id === selected.id ? "is-selected" : ""}" data-shortlist-id="${escapeHtml(listing.id)}">
        <span><strong>${escapeHtml(listing.name)}</strong>${escapeHtml(listing.city)}, ${escapeHtml(listing.region)}</span>
        <em>${listing.availability === "available" ? "Now" : "Soon"}</em>
      </button>
    `).join("") : `<p>No saved machines yet. Select a listing and save it for comparison.</p>`}
    ${state.shortlistCompareOpen ? renderShortlistCompare(model) : ""}
  `;

  document.querySelectorAll("[data-shortlist-action]").forEach((button) => {
    button.addEventListener("click", () => handleShortlistAction(button.dataset.shortlistAction));
  });
  document.querySelectorAll("[data-shortlist-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedListingId = button.dataset.shortlistId;
      saveState();
      render();
    });
  });
  document.querySelectorAll("[data-compare-select]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedListingId = button.dataset.compareSelect;
      saveState();
      render();
    });
  });
  document.querySelectorAll("[data-shortlist-add]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.shortlistAdd;
      if (!id || state.shortlistIds.includes(id)) return;
      state.shortlistIds = [...state.shortlistIds, id];
      state.selectedListingId = id;
      state.shortlistCompareOpen = true;
      saveState();
      render();
      showToast("Suggested machine added to compare.");
    });
  });
}

function renderShortlistCompare(model = getShortlistCompareModel()) {
  return `
    <div class="shortlist-compare">
      <div class="shortlist-compare-head">
        <span>Compare matrix</span>
        <strong>${escapeHtml(model.verdict)}</strong>
        <small>${escapeHtml(model.summary)}</small>
      </div>
      <div class="shortlist-compare-list">
        ${model.rows.map((row) => `
          <button type="button" class="shortlist-compare-row ${row.statusClass} ${row.listing.id === state.selectedListingId ? "is-selected" : ""}" data-compare-select="${escapeHtml(row.listing.id)}">
            <span>
              <strong>${escapeHtml(row.listing.name)}</strong>
              <small>${escapeHtml(row.listing.supplier)} - ${escapeHtml(row.listing.city)}, ${escapeHtml(row.listing.region)}</small>
            </span>
            <b>${row.award.total}/100</b>
            <em>${escapeHtml(row.action)}</em>
            <small>${escapeHtml(row.detail)}</small>
          </button>
        `).join("")}
      </div>
      ${model.suggestion ? `
        <button type="button" class="shortlist-suggestion" data-shortlist-add="${escapeHtml(model.suggestion.id)}">
          <span>Add stronger comparison option</span>
          <strong>${escapeHtml(model.suggestion.name)}</strong>
          <small>${escapeHtml(model.suggestion.supplier)} - ${escapeHtml(model.suggestion.city)}, ${escapeHtml(model.suggestion.region)}</small>
        </button>
      ` : ""}
    </div>
  `;
}

function getShortlistCompareModel() {
  const selected = getSelectedListing();
  const shortlisted = state.shortlistIds
    .map((id) => listings.find((listing) => listing.id === id))
    .filter(Boolean);
  const base = shortlisted.length ? shortlisted : [selected];
  const rows = base
    .map((listing) => {
      const award = getAwardScore(listing);
      const passport = getTrustPassport(listing);
      const documents = listing.documents.filter((document) => !document.toLowerCase().includes("pending")).length;
      const action = award.total >= 86 ? "Best" : award.total >= 74 ? "Good" : award.total >= 62 ? "Backup" : "Hold";
      const statusClass = award.total >= 86 ? "is-best" : award.total >= 74 ? "is-good" : award.total >= 62 ? "is-backup" : "is-hold";
      const detail = `${passport.verdict}; ${listing.availability === "available" ? "available now" : "confirm availability"}; ${documents} clean document${documents === 1 ? "" : "s"}.`;
      return { listing, award, passport, documents, action, detail, statusClass };
    })
    .sort((a, b) => b.award.total - a.award.total || a.listing.name.localeCompare(b.listing.name));
  const best = rows[0];
  const suggestion = getShortlistSuggestion(base.map((listing) => listing.id));
  const readyCount = rows.filter((row) => row.award.total >= 74).length;
  const availableCount = rows.filter((row) => row.listing.availability === "available").length;
  const verifiedCount = rows.filter((row) => row.listing.verified).length;
  const averageScore = rows.length
    ? Math.round(rows.reduce((total, row) => total + row.award.total, 0) / rows.length)
    : 0;
  const visibleArr = rows.length * 99;
  const decisionScore = rows.length
    ? Math.max(0, Math.min(100, Math.round(
      averageScore * 0.58
      + (readyCount / rows.length) * 18
      + (availableCount / rows.length) * 13
      + (verifiedCount / rows.length) * 11
    )))
    : 0;
  const command = rows.length < 2
    ? "Add one comparable backup"
    : decisionScore >= 82
      ? "RFQ-ready shortlist"
      : decisionScore >= 68
        ? "RFQ with proof checks"
        : "Hold before serious RFQ";
  const commandDetail = best
    ? `${best.listing.name} leads; ${readyCount}/${rows.length} RFQ-ready, ${availableCount} available now, ${verifiedCount} verified.`
    : "Select a machine to start the buyer shortlist.";
  const verdict = rows.length >= 2
    ? `${best.listing.supplier} leads`
    : "Add one more option";
  const summary = rows.length >= 2
    ? `${readyCount}/${rows.length} option${rows.length === 1 ? "" : "s"} are good enough to keep in RFQ; ${availableCount} can move now.`
    : "Save or add one more comparable machine before sending a serious RFQ.";

  return {
    rows,
    best,
    suggestion,
    readyCount,
    availableCount,
    verifiedCount,
    averageScore,
    visibleArr,
    decisionScore,
    command,
    commandDetail,
    verdict,
    summary
  };
}

function getShortlistSuggestion(existingIds) {
  const selected = getSelectedListing();
  const existing = new Set(existingIds);
  return listings
    .filter((listing) => !existing.has(listing.id))
    .map((listing) => {
      let score = getAwardScore(listing).total;
      if (listing.region === selected.region) score += 8;
      if (listing.category === selected.category) score += 6;
      if (listing.availability === "available") score += 4;
      if (listing.verified) score += 3;
      return { listing, score };
    })
    .sort((a, b) => b.score - a.score || a.listing.name.localeCompare(b.listing.name))[0]?.listing || null;
}

async function handleShortlistAction(action) {
  const model = getShortlistCompareModel();
  if (action === "rfq") {
    state.shortlistCompareOpen = true;
    saveState();
    render();
    scrollToPageTarget(document.querySelector("#rfq"), 100);
    showToast("RFQ room opened with the current shortlist.");
    return;
  }

  if (action === "backup") {
    if (!model.suggestion) {
      showToast("Shortlist already has the best local backup.");
      return;
    }
    state.shortlistIds = Array.from(new Set([...state.shortlistIds, model.suggestion.id]));
    state.selectedListingId = model.suggestion.id;
    state.shortlistCompareOpen = true;
    saveState();
    render();
    scrollToPageTarget(document.querySelector("#shortlistTray"), 120);
    showToast("Backup machine added to shortlist.");
    return;
  }

  if (action === "copy") {
    try {
      await navigator.clipboard.writeText(buildShortlistCompareText(model));
      showToast("Shortlist command pack copied.");
    } catch {
      showToast("Copy is blocked here, but the shortlist command is visible.");
    }
  }
}

function buildShortlistCompareText(model = getShortlistCompareModel()) {
  return [
    "Heavyster Shortlist Command",
    `Command: ${model.command} (${model.decisionScore}/100)`,
    `Summary: ${model.commandDetail}`,
    `Shortlist: ${model.rows.length} machine${model.rows.length === 1 ? "" : "s"}, ${model.availableCount} available now, ${model.verifiedCount} verified supplier${model.verifiedCount === 1 ? "" : "s"}, USD ${model.visibleArr.toLocaleString()} listing ARR visible.`,
    "",
    ...model.rows.map((row, index) => `${index + 1}. ${row.listing.name} - ${row.listing.supplier}, ${row.listing.city}, ${row.listing.region}: ${row.award.total}/100, ${row.action}, ${row.detail}`),
    "",
    model.suggestion
      ? `Backup to add: ${model.suggestion.name} - ${model.suggestion.supplier}, ${model.suggestion.city}, ${model.suggestion.region}.`
      : "Backup to add: shortlist already has the best visible backup.",
    "Next action: open RFQ, ask each supplier for availability confirmation, document proof, operator option, delivery terms, and quote validity."
  ].join("\n");
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

function renderDealTrail() {
  const model = getDealTrailModel();

  setText("#dealTrailTitle", model.title);
  setText("#dealTrailBadge", model.badge);

  document.querySelector("#dealTrailScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${escapeHtml(model.summary)}</span>
  `;

  document.querySelector("#dealTrailMetrics").innerHTML = model.metrics.map((metric) => `
    <span><strong>${escapeHtml(metric.value)}</strong>${escapeHtml(metric.label)}</span>
  `).join("");

  document.querySelector("#dealTrailSteps").innerHTML = model.steps.map((step, index) => `
    <button type="button" class="deal-trail-step ${escapeHtml(step.statusClass)}" data-deal-target="${escapeHtml(step.anchor)}">
      <em>${index + 1}</em>
      <span>
        <strong>${escapeHtml(step.label)}</strong>
        ${escapeHtml(step.detail)}
      </span>
      <b>${step.score}/100</b>
      <small>${escapeHtml(step.status)}</small>
    </button>
  `).join("");

  document.querySelector("#dealTrailGates").innerHTML = model.gates.map((gate, index) => `
    <div class="deal-trail-gate ${escapeHtml(gate.statusClass)}">
      <em>${index + 1}</em>
      <span>
        <strong>${escapeHtml(gate.label)}</strong>
        ${escapeHtml(gate.detail)}
      </span>
      <b>${escapeHtml(gate.owner)}</b>
      <small>${escapeHtml(gate.status)}</small>
    </div>
  `).join("");

  document.querySelector("#dealTrailPacket").innerHTML = buildDealTrailText(model)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");

  document.querySelectorAll("[data-deal-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector(button.dataset.dealTarget);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.location.hash = button.dataset.dealTarget;
      showToast("Deal proof step opened.");
    });
  });
}

function getDealTrailModel() {
  const selected = getSelectedListing();
  const passport = getTrustPassport(selected);
  const rfq = getRfqModel();
  const award = getAwardModel();
  const quote = getQuoteGuardModel();
  const mobilize = getMobilizationModel();
  const leadDesk = getLeadDeskModel(award.winner.listing);
  const activeLead = leadDesk.active;
  const readyMobilize = mobilize.checks.filter((check) => check.status === "Ready").length;
  const clearQuoteTerms = quote.board.filter((item) => item.status === "Ready" || item.status === "Direct").length;
  const paymentRule = "Buyer pays rental company directly; Heavyster records workflow proof, clarity, and handoff only.";
  const enquiryScore = Math.min(100, Math.round(55 + passport.score * 0.18 + (state.projectNote ? 18 : 6) + (selected.availability === "available" ? 8 : 2)));
  const futureFeeReady = quote.gapCount === 0 && quote.score >= 86 && award.winner.total >= 86 && mobilize.score >= 86 && activeLead.score >= 84;
  const steps = [
    getDealTrailStep({
      label: "Enquiry captured",
      anchor: "#marketplace",
      score: enquiryScore,
      detail: `Selected ${selected.name} from ${selected.supplier}; ${state.projectNote ? "project note is attached" : "project note still needs buyer context"}.`,
      action: "Open listing"
    }),
    getDealTrailStep({
      label: "Trust proof",
      anchor: "#passport",
      score: passport.score,
      detail: `${passport.verdict}; ${passport.proofItems.filter((item) => item.ready).length}/${passport.proofItems.length} proof items ready.`,
      action: "Check proof"
    }),
    getDealTrailStep({
      label: "RFQ packet",
      anchor: "#rfq",
      score: rfq.averageScore,
      detail: `${rfq.listings.length} machine${rfq.listings.length === 1 ? "" : "s"}, ${rfq.verifiedCount} verified supplier${rfq.verifiedCount === 1 ? "" : "s"}, ${rfq.availableCount} available now.`,
      action: "Review RFQ"
    }),
    getDealTrailStep({
      label: "Award intent",
      anchor: "#award",
      score: award.winner.total,
      detail: `${award.winner.listing.supplier} leads the decision board with ${award.badge.toLowerCase()} status.`,
      action: "Review award"
    }),
    getDealTrailStep({
      label: "Quote clarity",
      anchor: "#quote-guard",
      score: quote.score,
      detail: `${clearQuoteTerms}/${quote.board.length} quote controls are ready or direct; ${quote.missingCount} term${quote.missingCount === 1 ? "" : "s"} unclear.`,
      action: "Clean quote"
    }),
    getDealTrailStep({
      label: "Supplier response",
      anchor: "#lead-desk",
      score: activeLead.score,
      detail: `${leadDesk.profile.supplier} has ${leadDesk.hotCount} hot lead${leadDesk.hotCount === 1 ? "" : "s"}; active route is ${activeLead.lead.channel}.`,
      action: "Open lead"
    }),
    getDealTrailStep({
      label: "Mobilization",
      anchor: "#mobilize",
      score: mobilize.score,
      detail: `${readyMobilize}/${mobilize.checks.length} dispatch gates ready before the buyer depends on the machine.`,
      action: "Lock dispatch"
    })
  ];
  const gates = [
    getDealTrailGate({
      label: "No payment collection",
      owner: "Founder",
      status: "Locked",
      detail: paymentRule,
      statusClass: "ready"
    }),
    getDealTrailGate({
      label: "Supplier contact route",
      owner: "Supplier",
      status: activeLead.lead.channel ? "Ready" : "Review",
      detail: `Reply channel: ${activeLead.lead.channel || "not set"}. Buyer can still settle directly with the rental company.`,
      statusClass: activeLead.lead.channel ? "ready" : "review"
    }),
    getDealTrailGate({
      label: "Quote trail",
      owner: "Buyer",
      status: quote.gapCount ? "Fix" : "Ready",
      detail: quote.gapCount ? `${quote.gapCount} quote gap${quote.gapCount === 1 ? "" : "s"} before a clean booking trail.` : "Quote terms are clear enough to attach to the trail.",
      statusClass: quote.gapCount ? "gap" : "ready"
    }),
    getDealTrailGate({
      label: "Award decision",
      owner: "Buyer",
      status: award.winner.total >= 86 ? "Ready" : award.winner.total >= 74 ? "Review" : "Hold",
      detail: `${award.winner.listing.supplier} score is ${award.winner.total}/100 with ${award.badge.toLowerCase()} status.`,
      statusClass: award.winner.total >= 86 ? "ready" : award.winner.total >= 74 ? "review" : "gap"
    }),
    getDealTrailGate({
      label: "Dispatch proof",
      owner: "Ops",
      status: mobilize.score >= 86 ? "Ready" : mobilize.score >= 66 ? "Review" : "Hold",
      detail: `${readyMobilize}/${mobilize.checks.length} mobilization gates ready; use this before promising the start window.`,
      statusClass: mobilize.score >= 86 ? "ready" : mobilize.score >= 66 ? "review" : "gap"
    }),
    getDealTrailGate({
      label: "Future 1% eligibility",
      owner: "Founder",
      status: futureFeeReady ? "Earned" : "Not yet",
      detail: futureFeeReady ? "The workflow has enough proof to later justify a success-fee conversation." : "Keep phase one clean until quote, award, supplier response, and mobilization proof are stronger.",
      statusClass: futureFeeReady ? "ready" : "review"
    })
  ];
  const stepAverage = Math.round(steps.reduce((total, step) => total + step.score, 0) / steps.length);
  const readyGateShare = Math.round((gates.filter((gate) => gate.statusClass === "ready").length / gates.length) * 100);
  const score = Math.max(0, Math.min(100, Math.round(stepAverage * 0.72 + readyGateShare * 0.28)));
  const badge = score >= 86 && futureFeeReady
    ? "Workflow earned"
    : score >= 72
      ? "Proof trail"
      : "Gaps remain";
  const summary = `${award.winner.listing.name} has a ${badge.toLowerCase()} path: ${steps.filter((step) => step.status === "Ready").length}/${steps.length} workflow steps ready, with rental payment still direct.`;

  return {
    title: `${award.winner.listing.name} deal trail`,
    badge,
    score,
    summary,
    selected,
    passport,
    rfq,
    award,
    quote,
    mobilize,
    leadDesk,
    activeLead,
    steps,
    gates,
    paymentRule,
    futureFeeReady,
    metrics: [
      { label: "Supplier response", value: `${activeLead.score}/100` },
      { label: "Quote clarity", value: `${quote.score}/100` },
      { label: "Mobilization", value: `${mobilize.score}/100` },
      { label: "Payment take", value: "0%" }
    ]
  };
}

function getDealTrailStep({ label, anchor, score, detail, action }) {
  const status = score >= 84 ? "Ready" : score >= 62 ? "Review" : "Gap";
  return {
    label,
    anchor,
    score,
    detail,
    action,
    status,
    statusClass: status.toLowerCase()
  };
}

function getDealTrailGate({ label, owner, status, detail, statusClass }) {
  return {
    label,
    owner,
    status,
    detail,
    statusClass
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

function renderSupplierWorkbench() {
  const model = getSupplierWorkbenchModel();
  setText("#supplierWorkbenchTitle", model.title);
  setText("#supplierWorkbenchBadge", model.badge);

  document.querySelector("#supplierWorkbenchScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${escapeHtml(model.summary)}</span>
  `;

  document.querySelector("#supplierWorkbenchNext").innerHTML = `
    <span>Next best move</span>
    <strong>${escapeHtml(model.nextStage.label)}</strong>
    <p>${escapeHtml(model.nextStage.detail)}</p>
    <button type="button" class="solid-button" data-supplier-target="${escapeHtml(model.nextStage.anchor)}" data-supplier-label="${escapeHtml(model.nextStage.label)}">${escapeHtml(model.nextStage.action)}</button>
  `;

  document.querySelector("#supplierWorkbenchFlow").innerHTML = model.stages.map((stage, index) => `
    <button type="button" class="supplier-workbench-step ${escapeHtml(stage.statusClass)}" data-supplier-target="${escapeHtml(stage.anchor)}" data-supplier-label="${escapeHtml(stage.label)}">
      <em>${index + 1}</em>
      <span>
        <strong>${escapeHtml(stage.label)}</strong>
        ${escapeHtml(stage.detail)}
      </span>
      <b>${stage.score}/100</b>
      <small>${escapeHtml(stage.status)}</small>
    </button>
  `).join("");

  document.querySelector("#supplierWorkbenchPacket").innerHTML = model.packet.map((item) => `
    <div>
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.value)}</strong>
    </div>
  `).join("");

  document.querySelectorAll("[data-supplier-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector(button.dataset.supplierTarget);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.location.hash = button.dataset.supplierTarget;
      showToast(`${button.dataset.supplierLabel || "Supplier step"} opened.`);
    });
  });
}

function getSupplierWorkbenchModel() {
  const selected = getSelectedListing();
  const profile = getSupplierProfile(selected.supplier);
  const studio = getSupplierStudioModel(selected);
  const storefront = getSupplierStorefrontModel(selected);
  const fleetImport = getFleetImportModel(selected);
  const proofVault = getProofVaultModel(selected);
  const revenueDesk = getRevenueDeskModel(selected);
  const leadDesk = getLeadDeskModel(selected);
  const accountHealth = getAccountHealthModel(selected);
  const stages = [
    makeSupplierStage({
      label: "Studio profile",
      anchor: "#studio",
      score: studio.profileCompletion,
      detail: `${studio.listings.length} visible listing${studio.listings.length === 1 ? "" : "s"}, ${studio.docGaps} proof gap${studio.docGaps === 1 ? "" : "s"}, ${studio.availabilityGaps} availability item${studio.availabilityGaps === 1 ? "" : "s"} to confirm.`,
      action: studio.profileCompletion >= 84 ? "Review studio" : "Complete profile"
    }),
    makeSupplierStage({
      label: "Storefront",
      anchor: "#storefront",
      score: storefront.score,
      detail: `/suppliers/${profile.slug}/ with ${storefront.visibleFleetCount} public listing${storefront.visibleFleetCount === 1 ? "" : "s"} and Trust Passport average ${storefront.averagePassport}/100.`,
      action: storefront.score >= 84 ? "Use storefront" : "Improve storefront"
    }),
    makeSupplierStage({
      label: "Fleet import",
      anchor: "#fleet-import",
      score: fleetImport.score,
      detail: `${fleetImport.readyListings} import-ready paid listing${fleetImport.readyListings === 1 ? "" : "s"} can add USD ${fleetImport.annualRevenue.toLocaleString()} ARR.`,
      action: fleetImport.readyListings ? "Publish rows" : "Clean import"
    }),
    makeSupplierStage({
      label: "Proof Vault",
      anchor: "#proof-vault",
      score: proofVault.score,
      detail: `${proofVault.readyCount} buyer-ready proof item${proofVault.readyCount === 1 ? "" : "s"}, ${proofVault.expiringCount} expiring, ${proofVault.missingCount} missing.`,
      action: proofVault.expiringCount || proofVault.missingCount ? "Clean proof" : "Use proof"
    }),
    makeSupplierStage({
      label: "Revenue Desk",
      anchor: "#revenue-desk",
      score: revenueDesk.score,
      detail: `${revenueDesk.paidListings} paid listing${revenueDesk.paidListings === 1 ? "" : "s"}, USD ${revenueDesk.annualRevenue.toLocaleString()} ARR, ${revenueDesk.renewalRiskCount} renewal risk.`,
      action: revenueDesk.renewalRiskCount ? "Save renewals" : "Grow listings"
    }),
    makeSupplierStage({
      label: "Lead Desk",
      anchor: "#lead-desk",
      score: leadDesk.active.score,
      detail: `${leadDesk.hotCount} hot lead${leadDesk.hotCount === 1 ? "" : "s"}, USD ${leadDesk.totalBudget.toLocaleString()} direct enquiry pipeline.`,
      action: leadDesk.hotCount ? "Reply now" : "Review leads"
    }),
    makeSupplierStage({
      label: "Account Health",
      anchor: "#account-health",
      score: accountHealth.score,
      detail: `${accountHealth.riskCount} risk signal${accountHealth.riskCount === 1 ? "" : "s"} before renewal, with USD ${accountHealth.expansionArr.toLocaleString()} expansion ARR visible.`,
      action: accountHealth.riskCount ? "Fix account" : "Expand account"
    }),
    makeSupplierStage({
      label: "Yard freshness",
      anchor: "#yard",
      score: studio.yardScore,
      detail: `${studio.freshnessLabel}. Reconfirm availability before routing serious buyer enquiries.`,
      action: studio.yardScore >= 84 ? "Keep fresh" : "Refresh yard"
    })
  ];
  const score = Math.round(stages.reduce((total, stage) => total + stage.score, 0) / stages.length);
  const nextStage = [...stages]
    .filter((stage) => stage.status !== "Ready")
    .sort((a, b) => a.score - b.score)[0] || stages[stages.length - 1];
  const badge = score >= 84 ? "Supplier-ready" : score >= 68 ? "Revenue path" : "Repair desk";
  const proofGaps = proofVault.expiringCount + proofVault.missingCount;
  const summary = `${profile.supplier} has USD ${revenueDesk.annualRevenue.toLocaleString()} listing ARR, USD ${leadDesk.totalBudget.toLocaleString()} direct pipeline, ${proofGaps} proof risk${proofGaps === 1 ? "" : "s"}, and ${fleetImport.readyListings} import-ready listing${fleetImport.readyListings === 1 ? "" : "s"}.`;

  return {
    selected,
    profile,
    studio,
    storefront,
    fleetImport,
    proofVault,
    revenueDesk,
    leadDesk,
    accountHealth,
    score,
    badge,
    title: `${profile.supplier} supplier desk`,
    summary,
    stages,
    nextStage,
    packet: [
      { label: "Supplier", value: `${profile.supplier} - ${profile.branch}` },
      { label: "Public profile", value: `/suppliers/${profile.slug}/` },
      { label: "Current listing ARR", value: `USD ${revenueDesk.annualRevenue.toLocaleString()}` },
      { label: "Direct enquiry pipeline", value: `USD ${leadDesk.totalBudget.toLocaleString()} / ${leadDesk.hotCount} hot lead${leadDesk.hotCount === 1 ? "" : "s"}` },
      { label: "Import upside", value: `USD ${fleetImport.annualRevenue.toLocaleString()} ARR from ${fleetImport.readyListings} ready listing${fleetImport.readyListings === 1 ? "" : "s"}` },
      { label: "Next action", value: `${nextStage.label}: ${nextStage.action}` },
      { label: "Payment rule", value: "Supplier keeps rental payment direct; Heavyster earns listing SaaS revenue" }
    ]
  };
}

function makeSupplierStage(stage) {
  const status = stage.score >= 84 ? "Ready" : stage.score >= 64 ? "Review" : "Gap";
  return {
    ...stage,
    status,
    statusClass: status.toLowerCase()
  };
}

function renderFleetImport() {
  const model = getFleetImportModel();
  setText("#fleetImportTitle", model.profile.supplier);
  setText("#fleetImportBadge", model.badge);

  document.querySelector("#fleetImportScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${model.readyRows} clean row${model.readyRows === 1 ? "" : "s"} can become ${model.readyListings} paid listing${model.readyListings === 1 ? "" : "s"}.</span>
  `;

  document.querySelector("#fleetImportMetrics").innerHTML = [
    ["Import rows", String(model.totalRows)],
    ["Machine count", String(model.totalListings)],
    ["Ready listings", String(model.readyListings)],
    ["Annual ARR", `USD ${model.annualRevenue.toLocaleString()}`]
  ].map(([label, value]) => `
    <span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>
  `).join("");

  document.querySelector("#fleetImportQueue").innerHTML = model.rows.map((row) => `
    <button type="button" class="fleet-import-row ${row.statusClass}" data-import-listing="${escapeHtml(row.matchingListingId)}">
      <span>
        <strong>${escapeHtml(row.source.equipment)}</strong>
        ${escapeHtml(row.source.count)} item${row.source.count === 1 ? "" : "s"} - ${escapeHtml(row.source.category)} - ${escapeHtml(row.source.region)}
      </span>
      <em>${row.score}/100</em>
      <small>${escapeHtml(row.status)}</small>
      <b>${escapeHtml(row.action)}</b>
    </button>
  `).join("");

  document.querySelector("#fleetImportGates").innerHTML = model.gates.map((gate, index) => `
    <div class="fleet-import-gate ${gate.statusClass}">
      <strong>${index + 1}</strong>
      <span>${escapeHtml(gate.label)}<small>${escapeHtml(gate.detail)}</small></span>
      <em>${escapeHtml(gate.status)}</em>
    </div>
  `).join("");

  document.querySelector("#fleetImportPlan").innerHTML = buildFleetImportText(model)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");

  document.querySelectorAll("[data-import-listing]").forEach((button) => {
    button.addEventListener("click", () => {
      const listing = listings.find((item) => item.id === button.dataset.importListing);
      if (!listing) return;
      state.selectedListingId = listing.id;
      state.commandRole = "Supplier";
      saveState();
      render();
      document.querySelector("#fleet-import").scrollIntoView({ behavior: "smooth", block: "start" });
      showToast("Import row matched to supplier listing.");
    });
  });
}

function getFleetImportModel(listing = getSelectedListing()) {
  const profile = getSupplierProfile(listing.supplier);
  const supplierListings = listings.filter((item) => item.supplier === profile.supplier);
  const sourceRows = fleetImportRows.filter((row) => row.supplier === profile.supplier);
  const fallbackRows = sourceRows.length ? sourceRows : [{
    id: `FI-${listing.id}`,
    supplier: profile.supplier,
    source: "starter-import.csv",
    equipment: listing.name,
    category: listing.category,
    region: listing.region,
    count: 1,
    photos: true,
    documents: listing.documents.length > 1,
    availability: listing.availability === "available",
    rateTerms: Boolean(listing.rate),
    contact: true
  }];
  const rows = fallbackRows.map((row) => getFleetImportRow(row, supplierListings, listing));
  const totalRows = rows.length;
  const totalListings = rows.reduce((total, row) => total + row.source.count, 0);
  const readyRows = rows.filter((row) => row.status === "Ready").length;
  const readyListings = rows.filter((row) => row.score >= 78).reduce((total, row) => total + row.source.count, 0);
  const gapRows = rows.filter((row) => row.status === "Gap").length;
  const averageScore = Math.round(rows.reduce((total, row) => total + row.score, 0) / rows.length);
  const score = Math.max(0, Math.min(100, Math.round(averageScore + Math.min(8, readyRows * 2) - gapRows * 4)));
  const badge = score >= 84 ? "Import-ready" : score >= 64 ? "Clean gaps" : "Hold import";
  const annualRevenue = readyListings * 99;
  const gates = getFleetImportGates(rows, profile);

  return {
    profile,
    rows,
    totalRows,
    totalListings,
    readyRows,
    readyListings,
    gapRows,
    score,
    badge,
    annualRevenue,
    gates
  };
}

function getFleetImportRow(row, supplierListings, selected) {
  const matching = supplierListings.find((listing) =>
    listing.name.toLowerCase().includes(row.equipment.toLowerCase().split(" ")[0])
    || row.equipment.toLowerCase().includes(listing.name.toLowerCase().split(" ")[0])
  ) || selected;
  const checks = [
    row.photos,
    row.documents,
    row.availability,
    row.rateTerms,
    row.contact
  ];
  const complete = checks.filter(Boolean).length;
  const score = Math.round((complete / checks.length) * 100);
  const missing = [
    !row.photos ? "photos" : "",
    !row.documents ? "documents" : "",
    !row.availability ? "availability" : "",
    !row.rateTerms ? "rate terms" : "",
    !row.contact ? "contact route" : ""
  ].filter(Boolean);
  const status = score >= 80 ? "Ready" : score >= 60 ? "Review" : "Gap";
  const action = status === "Ready" ? "Publish" : missing.length ? `Add ${missing[0]}` : "Review";

  return {
    source: row,
    matchingListingId: matching.id,
    score,
    status,
    statusClass: status.toLowerCase(),
    missing,
    action
  };
}

function getFleetImportGates(rows, profile) {
  const total = rows.length || 1;
  const photoReady = rows.filter((row) => row.source.photos).length;
  const documentReady = rows.filter((row) => row.source.documents).length;
  const availabilityReady = rows.filter((row) => row.source.availability).length;
  const termsReady = rows.filter((row) => row.source.rateTerms).length;
  const contactReady = rows.filter((row) => row.source.contact).length;
  const gates = [
    ["Photos", photoReady, "Each machine needs at least one clear yard or site photo."],
    ["Documents", documentReady, "License, insurance, inspection, load test, or operator proof should be linked where relevant."],
    ["Availability", availabilityReady, "Rows need available now, available soon, or call-to-confirm status before publish."],
    ["Rate terms", termsReady, "Direct quote is fine, but operator, transport, fuel, permit, and validity notes should be visible."],
    ["Lead route", contactReady, "Phone, email, WhatsApp, or web enquiry route must be attached to the supplier profile."]
  ];

  return gates.map(([label, count, detail]) => {
    const status = count === total ? "Ready" : count >= Math.ceil(total * 0.6) ? "Review" : "Gap";
    return {
      label,
      detail: `${count}/${total} ${profile.supplier} row${total === 1 ? "" : "s"} pass. ${detail}`,
      status,
      statusClass: status.toLowerCase()
    };
  });
}

function renderProofVault() {
  const model = getProofVaultModel();
  setText("#proofVaultTitle", model.profile.supplier);
  setText("#proofVaultBadge", model.badge);

  document.querySelector("#proofVaultScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${model.readyCount} buyer-ready proof item${model.readyCount === 1 ? "" : "s"}, ${model.expiringCount} expiring soon, ${model.missingCount} missing.</span>
  `;

  document.querySelector("#proofVaultMetrics").innerHTML = [
    ["Proof items", String(model.rows.length)],
    ["Buyer-ready", String(model.readyCount)],
    ["Expiring", String(model.expiringCount)],
    ["Blocked", String(model.missingCount)]
  ].map(([label, value]) => `
    <span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>
  `).join("");

  document.querySelector("#proofVaultQueue").innerHTML = model.rows.map((row) => `
    <button type="button" class="proof-vault-row ${row.statusClass}" data-proof-listing="${escapeHtml(row.listingId)}">
      <span>
        <strong>${escapeHtml(row.type)}</strong>
        ${escapeHtml(row.target)} - ${escapeHtml(row.holder)}
      </span>
      <em>${row.score}/100</em>
      <small>${escapeHtml(row.expiryLabel)}</small>
      <b>${escapeHtml(row.action)}</b>
    </button>
  `).join("");

  document.querySelector("#proofVaultGates").innerHTML = model.gates.map((gate, index) => `
    <div class="proof-vault-gate ${gate.statusClass}">
      <strong>${index + 1}</strong>
      <span>${escapeHtml(gate.label)}<small>${escapeHtml(gate.detail)}</small></span>
      <em>${escapeHtml(gate.status)}</em>
    </div>
  `).join("");

  document.querySelector("#proofVaultPacket").innerHTML = buildProofVaultText(model)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");

  document.querySelectorAll("[data-proof-listing]").forEach((button) => {
    button.addEventListener("click", () => {
      const listing = listings.find((item) => item.id === button.dataset.proofListing);
      if (!listing) return;
      state.selectedListingId = listing.id;
      state.commandRole = "Supplier";
      saveState();
      render();
      document.querySelector("#proof-vault").scrollIntoView({ behavior: "smooth", block: "start" });
      showToast("Proof item matched to supplier listing.");
    });
  });
}

function getProofVaultModel(listing = getSelectedListing()) {
  const profile = getSupplierProfile(listing.supplier);
  const supplierListings = listings.filter((item) => item.supplier === profile.supplier);
  const sourceRows = proofVaultRows.filter((row) => row.supplier === profile.supplier);
  const fallbackRows = sourceRows.length ? sourceRows : listing.documents.map((document, index) => ({
    id: `PV-${listing.id}-${index}`,
    supplier: profile.supplier,
    listingId: listing.id,
    type: document,
    target: listing.name,
    status: document.toLowerCase().includes("pending") ? "missing" : "ready",
    expiresInDays: document.toLowerCase().includes("pending") ? null : 75 + index * 18,
    holder: "Supplier admin",
    action: document.toLowerCase().includes("pending") ? "Upload before verified badge" : "Attach to listing"
  }));
  const rows = sourceRows.length ? sourceRows.map((row) => enrichProofVaultRow(row, supplierListings, listing)) : fallbackRows.map((row) => enrichProofVaultRow(row, supplierListings, listing));
  const readyCount = rows.filter((row) => row.status === "Ready").length;
  const expiringCount = rows.filter((row) => row.status === "Expiring").length;
  const missingCount = rows.filter((row) => row.status === "Missing").length;
  const averageScore = Math.round(rows.reduce((total, row) => total + row.score, 0) / rows.length);
  const score = Math.max(0, Math.min(100, Math.round(averageScore + Math.min(8, readyCount) - expiringCount * 3 - missingCount * 8)));
  const badge = score >= 86 && missingCount === 0 ? "Buyer-ready" : score >= 66 ? "Refresh proof" : "Hold badge";
  const gates = getProofVaultGates(rows, profile);

  return {
    profile,
    rows,
    readyCount,
    expiringCount,
    missingCount,
    score,
    badge,
    gates
  };
}

function enrichProofVaultRow(row, supplierListings, selected) {
  const listing = listings.find((item) => item.id === row.listingId)
    || supplierListings.find((item) => item.name.toLowerCase().includes(row.target.toLowerCase().split(" ")[0]))
    || selected;
  const normalized = row.status === "ready" && row.expiresInDays !== null && row.expiresInDays <= 30 ? "expiring" : row.status;
  const status = normalized === "ready" ? "Ready" : normalized === "expiring" ? "Expiring" : "Missing";
  const score = status === "Ready" ? Math.min(100, 82 + Math.min(16, Math.floor((row.expiresInDays || 0) / 18))) : status === "Expiring" ? 58 : 24;
  const expiryLabel = status === "Missing"
    ? "Not uploaded"
    : row.expiresInDays <= 0
      ? "Expired"
      : `${row.expiresInDays}d to expiry`;

  return {
    ...row,
    listingId: listing.id,
    status,
    statusClass: status.toLowerCase(),
    score,
    expiryLabel,
    action: row.action || (status === "Ready" ? "Attach" : status === "Expiring" ? "Renew" : "Upload")
  };
}

function getProofVaultGates(rows, profile) {
  const hasCompany = rows.some((row) => row.status !== "Missing" && /license|registry|gst|business/i.test(row.type));
  const hasInsurance = rows.some((row) => row.status !== "Missing" && /insurance/i.test(row.type));
  const hasInspection = rows.some((row) => row.status !== "Missing" && /inspection|load test|service|maintenance/i.test(row.type));
  const hasOperator = rows.some((row) => row.status !== "Missing" && /operator|crew|permit/i.test(row.type));
  const noUrgentExpiry = rows.every((row) => row.status !== "Expiring");
  const gates = [
    ["Company proof", hasCompany, `${profile.supplier} needs current legal or trade proof attached to the public profile.`],
    ["Insurance proof", hasInsurance, "Insurance should be visible before buyers route serious enquiries."],
    ["Machine proof", hasInspection, "Inspection, load test, service record, or maintenance evidence should support equipment pages."],
    ["Operator or permit proof", hasOperator, "Operator license, crew proof, city permit note, or site access note should be visible when relevant."],
    ["Expiry control", noUrgentExpiry, "No proof item should be inside a 30-day expiry window before high-value enquiries are routed."]
  ];

  return gates.map(([label, ready, detail]) => ({
    label,
    detail,
    status: ready ? "Ready" : "Gap",
    statusClass: ready ? "ready" : "gap"
  }));
}

function renderRevenueDesk() {
  const model = getRevenueDeskModel();
  setText("#revenueDeskTitle", model.profile.supplier);
  setText("#revenueDeskBadge", model.badge);

  document.querySelector("#revenueDeskScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${model.paidListings} paid listing${model.paidListings === 1 ? "" : "s"}, USD ${model.monthlyRevenue.toLocaleString()} monthly SaaS revenue, USD ${model.annualRevenue.toLocaleString()} annualized listing revenue.</span>
  `;

  document.querySelector("#revenueDeskMetrics").innerHTML = [
    ["Paid listings", String(model.paidListings)],
    ["Monthly SaaS", `USD ${model.monthlyRevenue.toLocaleString()}`],
    ["Annualized ARR", `USD ${model.annualRevenue.toLocaleString()}`],
    ["Renewal risk", String(model.renewalRiskCount)]
  ].map(([label, value]) => `
    <span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>
  `).join("");

  document.querySelector("#revenueDeskQueue").innerHTML = model.rows.map((row) => `
    <button type="button" class="revenue-desk-row ${row.statusClass}" data-revenue-listing="${escapeHtml(row.listingId)}">
      <span>
        <strong>${escapeHtml(row.package)}</strong>
        ${row.listings} listing${row.listings === 1 ? "" : "s"} - ${escapeHtml(row.planLabel)}
        <small>${escapeHtml(row.signal)} - ${escapeHtml(row.action)}</small>
      </span>
      <em>USD ${row.monthlyRevenue.toLocaleString()}/mo</em>
      <small>${escapeHtml(row.renewalLabel)}</small>
      <b>${escapeHtml(row.status)}</b>
    </button>
  `).join("");

  document.querySelector("#revenueDeskPlaybook").innerHTML = model.playbook.map((step, index) => `
    <div class="revenue-desk-step ${step.statusClass}">
      <strong>${index + 1}</strong>
      <span>${escapeHtml(step.label)}<small>${escapeHtml(step.detail)}</small></span>
      <em>${escapeHtml(step.status)}</em>
    </div>
  `).join("");

  document.querySelector("#revenueDeskPacket").innerHTML = buildRevenueDeskText(model)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");

  document.querySelectorAll("[data-revenue-listing]").forEach((button) => {
    button.addEventListener("click", () => {
      const listing = listings.find((item) => item.id === button.dataset.revenueListing);
      if (!listing) return;
      state.selectedListingId = listing.id;
      state.commandRole = "Supplier";
      saveState();
      render();
      document.querySelector("#revenue-desk").scrollIntoView({ behavior: "smooth", block: "start" });
      showToast("Revenue row matched to supplier listing.");
    });
  });
}

function getRevenueDeskModel(listing = getSelectedListing()) {
  const profile = getSupplierProfile(listing.supplier);
  const supplierListings = listings.filter((item) => item.supplier === profile.supplier);
  const sourceRows = listingRevenueRows.filter((row) => row.supplier === profile.supplier);
  const fallbackListings = supplierListings.length ? supplierListings : [listing];
  const fallbackRows = fallbackListings.map((item, index) => ({
    id: `RD-${item.id}-${index}`,
    supplier: profile.supplier,
    listingId: item.id,
    package: item.name,
    plan: index % 2 === 0 ? "annual" : "monthly",
    status: item.availability === "available" ? "active" : "paused",
    listings: 1,
    renewalDays: item.availability === "available" ? 45 + index * 14 : null,
    signal: `${item.category} listing in ${item.region}`,
    action: "Confirm billing status"
  }));
  const rows = (sourceRows.length ? sourceRows : fallbackRows).map((row) => enrichRevenueDeskRow(row, supplierListings, listing));
  const paidRows = rows.filter((row) => row.isPaid);
  const paidListings = paidRows.reduce((total, row) => total + row.listings, 0);
  const pendingListings = rows.filter((row) => !row.isPaid).reduce((total, row) => total + row.listings, 0);
  const monthlyRevenue = paidRows.reduce((total, row) => total + row.monthlyRevenue, 0);
  const annualRevenue = paidRows.reduce((total, row) => total + row.annualRevenue, 0);
  const renewalRiskCount = rows.filter((row) => row.statusClass === "renewal-risk").reduce((total, row) => total + row.listings, 0);
  const pausedCount = rows.filter((row) => row.statusClass === "paused").reduce((total, row) => total + row.listings, 0);
  const draftCount = rows.filter((row) => row.statusClass === "draft").reduce((total, row) => total + row.listings, 0);
  const annualListings = paidRows.filter((row) => row.plan === "annual").reduce((total, row) => total + row.listings, 0);
  const annualShare = paidListings ? Math.round((annualListings / paidListings) * 100) : 0;
  const score = Math.max(0, Math.min(100, Math.round(58 + Math.min(18, paidListings) + annualShare * 0.12 - renewalRiskCount * 3 - pausedCount * 4 - draftCount * 2)));
  const badge = score >= 86 && renewalRiskCount === 0 ? "Revenue clean" : score >= 70 ? "Renewal focus" : "Activate listings";
  const proofVault = getProofVaultModel(listing);
  const playbook = getRevenueDeskPlaybook(rows, profile, proofVault);

  return {
    profile,
    rows,
    paidRows,
    paidListings,
    pendingListings,
    monthlyRevenue,
    annualRevenue,
    renewalRiskCount,
    pausedCount,
    draftCount,
    annualShare,
    score,
    badge,
    playbook
  };
}

function enrichRevenueDeskRow(row, supplierListings, selected) {
  const listing = listings.find((item) => item.id === row.listingId)
    || supplierListings.find((item) => String(row.package || "").toLowerCase().includes(item.name.toLowerCase().split(" ")[0]))
    || selected;
  const statusClass = ["active", "renewal-risk", "paused", "draft"].includes(row.status) ? row.status : "active";
  const status = statusClass === "renewal-risk"
    ? "Renewal risk"
    : statusClass.charAt(0).toUpperCase() + statusClass.slice(1);
  const plan = row.plan === "annual" ? "annual" : "monthly";
  const listingsCount = Math.max(1, Number(row.listings || 1));
  const isPaid = statusClass === "active" || statusClass === "renewal-risk";
  const monthlyRevenue = isPaid ? plan === "annual" ? Math.round((listingsCount * 99) / 12) : listingsCount * 9 : 0;
  const annualRevenue = isPaid ? plan === "annual" ? listingsCount * 99 : listingsCount * 108 : 0;
  const renewalDays = row.renewalDays === null ? null : Number(row.renewalDays || 0);
  const renewalLabel = statusClass === "draft"
    ? "Not live"
    : statusClass === "paused"
      ? "Paused"
      : renewalDays <= 14
        ? `Renew in ${renewalDays}d`
        : `${renewalDays}d renewal`;
  const planLabel = plan === "annual" ? "Annual USD 99" : "Monthly USD 9";
  const score = statusClass === "active"
    ? Math.min(100, (plan === "annual" ? 86 : 76) + Math.min(12, Math.floor((renewalDays || 45) / 10)))
    : statusClass === "renewal-risk"
      ? Math.max(42, 66 - Math.max(0, 14 - (renewalDays || 0)))
      : statusClass === "draft"
        ? 48
        : 34;

  return {
    ...row,
    listingId: listing.id,
    plan,
    listings: listingsCount,
    status,
    statusClass,
    isPaid,
    monthlyRevenue,
    annualRevenue,
    renewalLabel,
    planLabel,
    score,
    action: row.action || (statusClass === "active" ? "Keep live" : statusClass === "renewal-risk" ? "Renew now" : statusClass === "draft" ? "Publish" : "Reactivate")
  };
}

function getRevenueDeskPlaybook(rows, profile, proofVault) {
  const renewalRisk = rows.filter((row) => row.statusClass === "renewal-risk").reduce((total, row) => total + row.listings, 0);
  const monthlyPaid = rows.filter((row) => row.isPaid && row.plan === "monthly").reduce((total, row) => total + row.listings, 0);
  const dormant = rows.filter((row) => row.statusClass === "paused" || row.statusClass === "draft").reduce((total, row) => total + row.listings, 0);
  const proofRisk = proofVault.expiringCount + proofVault.missingCount;

  return [
    {
      label: "Save renewals",
      detail: renewalRisk ? `${renewalRisk} ${profile.supplier} paid listing${renewalRisk === 1 ? "" : "s"} need renewal attention before visibility drops.` : "No urgent renewal risk in this supplier workspace.",
      status: renewalRisk ? "Action" : "Ready",
      statusClass: renewalRisk ? "review" : "ready"
    },
    {
      label: "Shift monthly to annual",
      detail: monthlyPaid ? `${monthlyPaid} monthly listing${monthlyPaid === 1 ? "" : "s"} can move from USD 9 monthly to USD 99 yearly and reduce churn.` : "Paid listings are already mostly annual or clean.",
      status: monthlyPaid ? "Upsell" : "Ready",
      statusClass: monthlyPaid ? "review" : "ready"
    },
    {
      label: "Activate dormant inventory",
      detail: dormant ? `${dormant} paused or draft listing${dormant === 1 ? "" : "s"} can become new listing revenue after photos, proof, or availability are clean.` : "No dormant supplier rows are blocking paid-listing revenue.",
      status: dormant ? "Open" : "Ready",
      statusClass: dormant ? "gap" : "ready"
    },
    {
      label: "Protect trust before billing",
      detail: proofRisk ? `${proofRisk} proof item${proofRisk === 1 ? "" : "s"} should be refreshed so renewal feels tied to buyer trust, not only a bill.` : "Proof Vault is clean enough to support renewal and annual-plan conversations.",
      status: proofRisk ? "Review" : "Ready",
      statusClass: proofRisk ? "review" : "ready"
    },
    {
      label: "Keep rental payment direct",
      detail: "Revenue Desk tracks Heavyster listing subscription value only. Buyer and supplier still settle rental payment directly in phase one.",
      status: "Clean",
      statusClass: "ready"
    }
  ];
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
  renderMarketSignalMatrix();
  renderMarketMaker();
  renderPageFactory();
  renderLaunchRoom();
  renderMarketTwin();
  renderLiquidityFlywheel();
  renderFounderAutopilot();
  renderDemandExchange();
  renderProofDemandRoom();
  renderSupplierCommitmentRoom();
  renderListingActivationRoom();
  renderTrustRevenueLedger();
  renderFounderWorkbench();
  renderFounderMorningBrief();
  renderFounderDailyMoves();
  renderFounderCallSheet();
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

function renderSupplierAccountStarter() {
  const root = document.querySelector("#supplierAccountStarter");
  if (!root) return;
  const model = getSupplierAccountStarterModel();

  root.innerHTML = `
    <div class="account-starter-main ${escapeHtml(model.statusClass)}">
      <div>
        <span>${escapeHtml(model.badge)}</span>
        <strong>${escapeHtml(model.headline)}</strong>
        <small>${escapeHtml(model.detail)}</small>
      </div>
      <b>${model.score}/100</b>
    </div>
    <div class="account-starter-steps">
      ${model.steps.map((step) => `
        <button type="button" class="${step.ready ? "is-ready" : "needs-work"}" data-account-starter-action="${escapeHtml(step.action)}">
          <span>${escapeHtml(step.label)}</span>
          <strong>${escapeHtml(step.value)}</strong>
          <small>${escapeHtml(step.detail)}</small>
        </button>
      `).join("")}
    </div>
    <div class="account-starter-actions">
      ${model.actions.map((action) => `
        <button type="button" class="${action.primary ? "is-primary" : ""}" data-account-starter-action="${escapeHtml(action.id)}">
          ${escapeHtml(action.label)}
        </button>
      `).join("")}
    </div>
  `;

  root.querySelectorAll("[data-account-starter-action]").forEach((button) => {
    button.addEventListener("click", () => handleSupplierAccountStarterAction(button.dataset.accountStarterAction, model));
  });
}

function getSupplierAccountStarterModel(listing = getSelectedListing()) {
  const studio = getSupplierStudioModel(listing);
  const starter = getSupplierListingStarterModel();
  const passport = getTrustPassport(listing);
  const paidListings = studio.revenueDesk.paidListings;
  const availableListings = studio.listings.filter((item) => item.availability === "available").length;
  const accountReady = studio.profileCompletion >= 82;
  const proofReady = passport.score >= 84 && studio.docGaps === 0;
  const machineReady = starter.machine.trim().length >= 3;
  const paidReady = paidListings > 0;
  const routeReady = studio.storefront.score >= 72 && availableListings > 0;
  const steps = [
    {
      label: "Account",
      value: `${studio.profileCompletion}/100`,
      detail: `${studio.profile.supplier} profile`,
      ready: accountReady,
      action: "profile"
    },
    {
      label: "Proof",
      value: `${passport.score}/100`,
      detail: proofReady
        ? "documents clean"
        : studio.docGaps
          ? `${studio.docGaps} proof gap${studio.docGaps === 1 ? "" : "s"}`
          : "proof score needs review",
      ready: proofReady,
      action: "proof"
    },
    {
      label: "First machine",
      value: starter.machine,
      detail: `${starter.category} - ${starter.region}`,
      ready: machineReady,
      action: "builder"
    },
    {
      label: "Paid listing",
      value: "USD 99/yr",
      detail: paidReady ? `${paidListings} active paid` : "activate after proof",
      ready: paidReady,
      action: "billing"
    },
    {
      label: "Lead route",
      value: "Direct",
      detail: routeReady ? "buyer enquiry ready" : "confirm available machine",
      ready: routeReady,
      action: "leads"
    }
  ];
  const readyCount = steps.filter((step) => step.ready).length;
  const score = Math.round((readyCount / steps.length) * 100);
  const nextStep = steps.find((step) => !step.ready) || steps[steps.length - 1];
  const statusClass = score >= 80 ? "is-ready" : score >= 60 ? "is-watch" : "is-gap";
  const headline = score >= 80
    ? `${studio.profile.supplier} is close to a paid supplier account.`
    : `Finish ${nextStep.label.toLowerCase()} before pushing buyer demand.`;
  const detail = score >= 80
    ? "Account, proof, first machine, paid listing, and direct enquiry route are visible in one setup path."
    : `Next move: ${nextStep.detail}. Keep the supplier journey calm and direct.`;
  const firstAction = score >= 80
    ? { id: "copy", label: "Copy account plan", primary: true }
    : { id: nextStep.action, label: getSupplierAccountActionLabel(nextStep.action), primary: true };

  return {
    studio,
    starter,
    passport,
    score,
    statusClass,
    badge: "Supplier account starter",
    headline,
    detail,
    nextStep,
    steps,
    actions: [
      firstAction,
      firstAction.id === "copy" ? { id: "billing", label: "Open pricing" } : { id: "copy", label: "Copy account plan" },
      { id: routeReady ? "leads" : "builder", label: routeReady ? "Open lead desk" : "Open builder" }
    ]
  };
}

function getSupplierAccountActionLabel(action) {
  const labels = {
    profile: "Open storefront",
    proof: "Check proof",
    builder: "Open builder",
    billing: "Open pricing",
    leads: "Open lead desk"
  };
  return labels[action] || "Open next step";
}

async function handleSupplierAccountStarterAction(action, model = getSupplierAccountStarterModel()) {
  if (action === "copy") {
    try {
      await navigator.clipboard.writeText(buildSupplierAccountStarterText(model));
      showToast("Supplier account plan copied.");
    } catch {
      showToast("Copy is blocked here, but the account plan is visible.");
    }
    return;
  }

  const targetMap = {
    profile: "#storefront",
    proof: "#trustChecklist",
    builder: "#listingBuilder",
    billing: "#pricing",
    leads: "#lead-desk"
  };
  const target = document.querySelector(targetMap[action] || "#studio");
  if (action === "profile") renderSupplierStorefront();
  if (action === "billing") renderPricingCalculator();
  if (action === "builder") syncBuilderInputs();
  scrollToPageTarget(target || document.querySelector("#studio"), 118);
  if (action === "builder") {
    window.setTimeout(() => document.querySelector("#builderModel")?.focus(), 260);
  }

  const messages = {
    profile: "Supplier storefront opened.",
    proof: "Trust checklist opened.",
    builder: "Listing builder opened.",
    billing: "Pricing opened.",
    leads: "Lead desk opened."
  };
  showToast(messages[action] || "Supplier account step opened.");
}

function buildSupplierAccountStarterText(model = getSupplierAccountStarterModel()) {
  return [
    "Heavyster Supplier Account Starter",
    `Supplier: ${model.studio.profile.supplier} - ${model.studio.profile.branch}`,
    `Status: ${model.score}/100`,
    `Next move: ${model.nextStep.label} - ${model.nextStep.detail}`,
    ...model.steps.map((step) => `${step.label}: ${step.value} - ${step.detail}`),
    "Plan: USD 9/month or USD 99/year per active equipment listing",
    "Payment rule: supplier keeps rental payment direct; Heavyster earns listing SaaS revenue in phase one"
  ].join("\n");
}

function renderSupplierDecisionCard() {
  const root = document.querySelector("#supplierDecisionCard");
  if (!root) return;
  const model = getSupplierDecisionModel();

  root.innerHTML = `
    <div class="supplier-decision-main ${model.statusClass}">
      <span class="supplier-decision-kicker">${escapeHtml(model.badge)}</span>
      <div>
        <h3>${escapeHtml(model.title)}</h3>
        <p>${escapeHtml(model.detail)}</p>
      </div>
      <strong>${model.score}/100</strong>
    </div>
    <div class="supplier-decision-steps">
      ${model.steps.map((step) => `
        <span class="${step.ready ? "is-ready" : "needs-work"}">
          <b>${escapeHtml(step.value)}</b>
          ${escapeHtml(step.label)}
          <small>${escapeHtml(step.detail)}</small>
        </span>
      `).join("")}
    </div>
    <div class="supplier-decision-actions">
      ${model.actions.map((action, index) => `
        <button type="button" class="${index === 0 ? "primary" : ""}" data-supplier-decision-action="${escapeHtml(action.type)}">
          ${escapeHtml(action.label)}
        </button>
      `).join("")}
    </div>
  `;

  root.querySelectorAll("[data-supplier-decision-action]").forEach((button) => {
    button.addEventListener("click", () => handleSupplierDecisionAction(button.dataset.supplierDecisionAction));
  });
}

function getSupplierDecisionModel(listing = getSelectedListing()) {
  const studio = getSupplierStudioModel(listing);
  const passport = getTrustPassport(listing);
  const revenue = studio.revenueDesk;
  const listingCount = studio.listings.length;
  const availableCount = studio.listings.filter((item) => item.availability === "available").length;
  const verifiedCount = studio.listings.filter((item) => item.verified).length;
  const readyCount = [
    studio.profileCompletion >= 82,
    passport.score >= 84,
    studio.docGaps === 0,
    availableCount > 0,
    revenue.paidListings > 0
  ].filter(Boolean).length;
  const score = Math.round((readyCount / 5) * 100);
  const primaryGap = studio.docGaps
    ? `${studio.docGaps} proof gap${studio.docGaps === 1 ? "" : "s"}`
    : availableCount === 0
      ? "availability needs confirmation"
      : revenue.paidListings === 0
        ? "billing needs activation"
        : "ready to publish";
  const title = score >= 80
    ? `${studio.profile.supplier} can publish with confidence.`
    : `Make ${listing.name} publish-ready before pushing demand.`;
  const detail = score >= 80
    ? `Keep the direct enquiry route clean: ${listing.name} has proof, supply, and listing revenue signals aligned.`
    : `Focus on ${primaryGap}, then show the supplier storefront to buyers without touching rental payment.`;
  const badge = score >= 80 ? "Supplier next move" : "Supplier focus";
  const statusClass = score >= 80 ? "ready" : score >= 60 ? "watch" : "gap";

  return {
    studio,
    listing,
    score,
    badge,
    title,
    detail,
    statusClass,
    steps: [
      {
        label: "Profile",
        value: `${studio.profileCompletion}/100`,
        detail: studio.profileCompletion >= 82 ? "company page ready" : "complete supplier profile",
        ready: studio.profileCompletion >= 82
      },
      {
        label: "Proof",
        value: `${passport.score}/100`,
        detail: studio.docGaps ? `${studio.docGaps} gap${studio.docGaps === 1 ? "" : "s"}` : "documents clean",
        ready: passport.score >= 84 && studio.docGaps === 0
      },
      {
        label: "Availability",
        value: `${availableCount}/${listingCount}`,
        detail: availableCount ? "machines visible" : "confirm first machine",
        ready: availableCount > 0
      },
      {
        label: "Revenue",
        value: `USD ${studio.annualRevenue.toLocaleString()}`,
        detail: `${revenue.paidListings} paid listing${revenue.paidListings === 1 ? "" : "s"}`,
        ready: revenue.paidListings > 0
      }
    ],
    actions: [
      studio.docGaps ? { label: "Fix proof", type: "proof" }
        : availableCount === 0 ? { label: "Confirm availability", type: "builder" }
          : revenue.paidListings === 0 ? { label: "Activate billing", type: "billing" }
            : { label: "View storefront", type: "storefront" },
      { label: "Add listing", type: "builder" },
      { label: "Revenue desk", type: "revenue" }
    ],
    verifiedCount
  };
}

function handleSupplierDecisionAction(action) {
  const targetMap = {
    proof: "#trustChecklist",
    builder: "#listingBuilder",
    billing: "#pricing",
    storefront: "#storefront",
    revenue: "#revenue-desk"
  };
  const target = document.querySelector(targetMap[action] || "#studio");
  if (action === "storefront") renderSupplierStorefront();
  if (target) target.scrollIntoView({ behavior: "smooth", block: action === "proof" ? "center" : "start" });
  if (action === "builder") {
    window.setTimeout(() => document.querySelector("#builderModel")?.focus(), 260);
  }
  const messages = {
    proof: "Proof checklist opened.",
    builder: "Listing builder opened.",
    billing: "Pricing path opened.",
    storefront: "Supplier storefront opened.",
    revenue: "Revenue desk opened."
  };
  showToast(messages[action] || "Supplier next move opened.");
}

function renderSupplierListingStarter() {
  const root = document.querySelector("#supplierListingStarter");
  if (!root) return;
  const model = getSupplierListingStarterModel();

  root.innerHTML = `
    <div class="listing-starter-main ${escapeHtml(model.statusClass)}">
      <div>
        <span>${escapeHtml(model.badge)}</span>
        <strong>${escapeHtml(model.headline)}</strong>
        <small>${escapeHtml(model.detail)}</small>
      </div>
      <b>${model.score}/100</b>
    </div>
    <div class="listing-starter-facts">
      ${model.facts.map((fact) => `
        <span class="${fact.ready ? "is-ready" : "is-watch"}">
          <strong>${escapeHtml(fact.value)}</strong>
          ${escapeHtml(fact.label)}
          <small>${escapeHtml(fact.detail)}</small>
        </span>
      `).join("")}
    </div>
    <div class="listing-starter-actions">
      ${model.actions.map((action) => `
        <button type="button" class="${action.primary ? "is-primary" : ""}" data-listing-starter-action="${escapeHtml(action.id)}">
          ${escapeHtml(action.label)}
        </button>
      `).join("")}
    </div>
  `;

  root.querySelectorAll("[data-listing-starter-action]").forEach((button) => {
    button.addEventListener("click", () => handleSupplierListingStarterAction(button.dataset.listingStarterAction, model));
  });
}

function getSupplierListingStarterModel() {
  const selected = getSelectedListing();
  const studio = getSupplierStudioModel(selected);
  const passport = getTrustPassport(selected);
  const machine = state.builderModel || selected.name;
  const category = state.builderCategory || selected.category;
  const region = state.builderRegion || selected.region;
  const availability = state.builderAvailability || selected.availability;
  const machineReady = machine.trim().length >= 3;
  const proofReady = passport.score >= 84 && studio.docGaps === 0;
  const availabilityReady = availability === "available";
  const revenueReady = true;
  const readyCount = [machineReady, proofReady, availabilityReady, revenueReady].filter(Boolean).length;
  const score = Math.round((readyCount / 4) * 100);
  const statusClass = score >= 85 ? "is-ready" : score >= 60 ? "is-watch" : "is-gap";
  const nextMove = !machineReady
    ? "name the machine"
    : !proofReady
      ? "attach proof"
      : !availabilityReady
        ? "confirm availability"
        : "publish as a paid listing";

  return {
    selected,
    studio,
    passport,
    machine,
    category,
    region,
    availability,
    availabilityLabel: getAvailabilityLabel(availability),
    score,
    statusClass,
    nextMove,
    badge: "Listing starter",
    headline: `List ${machine} in ${region}.`,
    detail: `Next: ${nextMove}. Heavyster earns USD 99/year per active listing and keeps rental payment direct.`,
    facts: [
      {
        label: "Machine",
        value: machineReady ? "Ready" : "Name it",
        detail: `${category} - ${region}`,
        ready: machineReady
      },
      {
        label: "Proof",
        value: `${passport.score}/100`,
        detail: proofReady ? "supplier proof clean" : `${studio.docGaps} proof gap${studio.docGaps === 1 ? "" : "s"}`,
        ready: proofReady
      },
      {
        label: "Availability",
        value: availabilityReady ? "Now" : "Confirm",
        detail: getAvailabilityLabel(availability),
        ready: availabilityReady
      },
      {
        label: "Listing revenue",
        value: "USD 99/yr",
        detail: "0% rental commission",
        ready: revenueReady
      }
    ],
    actions: [
      { id: "selected", label: "Use selected machine", primary: true },
      { id: "copy", label: "Copy listing brief" },
      { id: proofReady ? "builder" : "proof", label: proofReady ? "Open builder" : "Open proof" }
    ]
  };
}

async function handleSupplierListingStarterAction(action, model) {
  if (action === "selected") {
    state.builderCategory = model.selected.category;
    state.builderModel = model.selected.name;
    state.builderRegion = model.selected.region;
    state.builderAvailability = model.selected.availability;
    saveState();
    syncBuilderInputs();
    renderBuilderSummary();
    renderSupplierListingStarter();
    scrollToPageTarget(document.querySelector("#listingBuilder"), 118);
    document.querySelector("#builderModel")?.focus();
    showToast("Selected machine loaded into the listing starter.");
    return;
  }

  if (action === "copy") {
    try {
      await navigator.clipboard.writeText(buildSupplierListingStarterText(model));
      showToast("Supplier listing brief copied.");
    } catch {
      showToast("Copy is blocked here, but the listing brief is visible.");
    }
    return;
  }

  if (action === "proof") {
    scrollToPageTarget(document.querySelector("#trustChecklist"), 118);
    showToast("Proof checklist opened.");
    return;
  }

  scrollToPageTarget(document.querySelector("#listingBuilder"), 118);
  document.querySelector("#builderModel")?.focus();
  showToast("Listing builder opened.");
}

function syncBuilderInputs() {
  const category = document.querySelector("#builderCategory");
  const model = document.querySelector("#builderModel");
  const region = document.querySelector("#builderRegion");
  const availability = document.querySelector("#builderAvailability");
  if (category) category.value = state.builderCategory;
  if (model) model.value = state.builderModel;
  if (region) region.value = state.builderRegion;
  if (availability) availability.value = state.builderAvailability;
}

function buildSupplierListingStarterText(model = getSupplierListingStarterModel()) {
  return [
    "Heavyster Supplier Listing Starter",
    `Supplier: ${model.studio.profile.supplier} - ${model.studio.profile.branch}`,
    `Machine: ${model.machine}`,
    `Category / region: ${model.category} / ${model.region}`,
    `Availability: ${model.availabilityLabel}`,
    `Proof score: ${model.passport.score}/100`,
    "Plan: USD 9/month or USD 99/year per active equipment listing",
    "Payment rule: supplier keeps rental payment direct; Heavyster charges listing SaaS revenue only in phase one",
    `Next move: ${model.nextMove}`
  ].join("\n");
}

function renderSupplierActivationReceipt() {
  const root = document.querySelector("#supplierActivationReceipt");
  if (!root) return;
  const model = getSupplierActivationReceiptModel();

  root.innerHTML = `
    <div class="supplier-receipt-main ${escapeHtml(model.statusClass)}">
      <div>
        <span>${escapeHtml(model.badge)}</span>
        <strong>${escapeHtml(model.headline)}</strong>
        <small>${escapeHtml(model.detail)}</small>
      </div>
      <b>${model.score}/100</b>
    </div>
    <div class="supplier-receipt-lines">
      ${model.lines.map((line) => `
        <span class="${line.ready ? "is-ready" : "is-watch"}">
          <strong>${escapeHtml(line.value)}</strong>
          ${escapeHtml(line.label)}
          <small>${escapeHtml(line.detail)}</small>
        </span>
      `).join("")}
    </div>
    <div class="supplier-receipt-actions">
      ${model.actions.map((action) => `
        <button type="button" class="${action.primary ? "is-primary" : ""}" data-supplier-receipt-action="${escapeHtml(action.id)}">
          ${escapeHtml(action.label)}
        </button>
      `).join("")}
    </div>
  `;

  root.querySelectorAll("[data-supplier-receipt-action]").forEach((button) => {
    button.addEventListener("click", () => handleSupplierActivationReceiptAction(button.dataset.supplierReceiptAction, model));
  });
}

function getSupplierActivationReceiptModel() {
  const selected = getSelectedListing();
  const studio = getSupplierStudioModel(selected);
  const revenue = studio.revenueDesk;
  const passport = getTrustPassport(selected);
  const paidListings = revenue.paidListings;
  const supplierListingCount = Math.max(1, studio.listings.length);
  const activationCount = Math.max(1, paidListings || supplierListingCount);
  const monthlyDue = paidListings ? revenue.monthlyRevenue : activationCount * 9;
  const annualDue = paidListings ? revenue.annualRevenue : activationCount * 99;
  const proofReady = passport.score >= 84 && studio.docGaps === 0;
  const freshnessReady = studio.yardScore >= 82 && studio.availabilityGaps === 0;
  const paidReady = paidListings > 0;
  const score = Math.max(0, Math.min(100, Math.round(
    revenue.score * 0.34
    + studio.profileCompletion * 0.22
    + studio.storefront.score * 0.18
    + passport.score * 0.16
    + (paidReady ? 10 : 0)
    - studio.docGaps * 4
    - studio.availabilityGaps * 3
  )));
  const statusClass = score >= 82 ? "ready" : score >= 64 ? "watch" : "gap";
  const badge = paidReady ? "Activation receipt" : "Pre-activation receipt";
  const headline = paidReady
    ? `${studio.profile.supplier} has ${paidListings} paid listing${paidListings === 1 ? "" : "s"} live.`
    : `${studio.profile.supplier} can activate ${activationCount} listing${activationCount === 1 ? "" : "s"}.`;
  const detail = paidReady
    ? `Current listing SaaS is USD ${monthlyDue.toLocaleString()}/mo or USD ${annualDue.toLocaleString()}/yr. Rental payment stays outside Heavyster.`
    : `Use this receipt before billing: publish proof, confirm availability, then charge listing SaaS only.`;

  return {
    selected,
    studio,
    revenue,
    passport,
    paidListings,
    supplierListingCount,
    activationCount,
    monthlyDue,
    annualDue,
    score,
    statusClass,
    badge,
    headline,
    detail,
    lines: [
      {
        label: "Billable listings",
        value: String(activationCount),
        detail: paidReady ? `${paidListings} currently paid` : `${supplierListingCount} visible in Studio`,
        ready: paidReady
      },
      {
        label: "Listing SaaS",
        value: `USD ${monthlyDue.toLocaleString()}/mo`,
        detail: `USD ${annualDue.toLocaleString()}/yr if kept live`,
        ready: monthlyDue > 0
      },
      {
        label: "Proof",
        value: `${passport.score}/100`,
        detail: proofReady ? "clean enough for buyer view" : `${studio.docGaps} proof gap${studio.docGaps === 1 ? "" : "s"}`,
        ready: proofReady
      },
      {
        label: "Rental payment",
        value: "Direct",
        detail: "0% rental commission in phase one",
        ready: true
      }
    ],
    actions: [
      { id: "copy", label: "Copy receipt", primary: true },
      { id: "match-count", label: "Match pricing count" },
      { id: freshnessReady ? "pricing" : "freshness", label: freshnessReady ? "Open pricing" : "Fix freshness" }
    ]
  };
}

async function handleSupplierActivationReceiptAction(action, model) {
  if (action === "copy") {
    try {
      await navigator.clipboard.writeText(buildSupplierActivationReceiptText(model));
      showToast("Supplier activation receipt copied.");
    } catch {
      showToast("Copy is blocked here, but the receipt is visible.");
    }
    return;
  }

  if (action === "match-count") {
    state.listingCount = Math.min(80, model.activationCount);
    saveState();
    renderPricingCalculator();
    renderPaidListingActivation();
    renderSupplierActivationReceipt();
    showToast("Pricing count matched to this supplier receipt.");
    return;
  }

  if (action === "freshness") {
    scrollToPageTarget(document.querySelector("#studioOps"), 118);
    showToast("Freshness and proof actions opened.");
    return;
  }

  scrollToPageTarget(document.querySelector("#pricing"), 108);
  showToast("Pricing opened.");
}

function buildSupplierActivationReceiptText(model = getSupplierActivationReceiptModel()) {
  return [
    "Heavyster Supplier Activation Receipt",
    `Supplier: ${model.studio.profile.supplier} - ${model.studio.profile.branch}`,
    `Selected machine: ${model.selected.name}`,
    `Status: ${model.badge} - ${model.score}/100`,
    `Billable listings: ${model.activationCount}`,
    `Monthly listing SaaS: USD ${model.monthlyDue.toLocaleString()}`,
    `Annual listing SaaS: USD ${model.annualDue.toLocaleString()}`,
    `Proof score: ${model.passport.score}/100`,
    `Freshness: ${model.studio.yardScore}/100 - ${model.studio.freshnessLabel}`,
    `Document gaps: ${model.studio.docGaps}`,
    `Availability gaps: ${model.studio.availabilityGaps}`,
    "Payment rule: supplier keeps rental payment direct; Heavyster charges only listing SaaS revenue in phase one.",
    "Supplier promise: publish visible machine proof, keep availability fresh, and respond to direct enquiries."
  ].join("\n");
}

function renderSupplierTable() {
  const model = getSupplierStudioModel();
  setText("#studioSupplierName", model.profile.supplier);

  document.querySelector("#studioHealth").innerHTML = [
    ["Profile", `${model.profileCompletion}/100`, model.profileCompletion >= 82 ? "Ready" : "Improve"],
    ["Storefront", `${model.storefront.score}/100`, model.storefront.badge],
    ["Listing revenue", `USD ${model.monthlyRevenue.toLocaleString()}/mo`, `USD ${model.annualRevenue.toLocaleString()}/yr`],
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

function getSupplierStudioModel(listing = getSelectedListing()) {
  const selected = listing;
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
  const revenueDesk = getRevenueDeskModel(selected);
  const monthlyRevenue = revenueDesk.monthlyRevenue;
  const annualRevenue = revenueDesk.annualRevenue;
  const modeledListings = profile.fleet.reduce((total, lane) => total + lane.count, 0);
  const modeledAnnualRevenue = modeledListings * 99;
  const freshnessLabel = yardScore >= 82 ? "Fresh yard" : yardScore >= 64 ? "Refresh needed" : "Trust risk";
  const publishReady = profileCompletion >= 82 && storefront.score >= 72 && docGaps === 0;

  return {
    profile,
    storefront,
    revenueDesk,
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
        status: revenueDesk.renewalRiskCount ? "Renew" : "Track",
        statusClass: revenueDesk.renewalRiskCount ? "confirm" : "direct",
        detail: `${revenueDesk.paidListings} paid listing${revenueDesk.paidListings === 1 ? "" : "s"} = USD ${annualRevenue.toLocaleString()}/yr. Modeled fleet upside: ${modeledListings} listings = USD ${modeledAnnualRevenue.toLocaleString()}/yr.`
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

function getLeadDeskModel(listing = getSelectedListing()) {
  const selected = listing;
  const studio = getSupplierStudioModel(selected);
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

function renderAccountHealth() {
  const model = getAccountHealthModel();
  setText("#accountHealthTitle", model.profile.supplier);
  setText("#accountHealthBadge", model.badge);

  document.querySelector("#accountHealthScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${model.summary}</span>
  `;

  document.querySelector("#accountHealthMetrics").innerHTML = [
    ["Risk signals", String(model.riskCount)],
    ["Listing ARR", `USD ${model.revenueDesk.annualRevenue.toLocaleString()}`],
    ["Lead pipeline", `USD ${model.leadDesk.totalBudget.toLocaleString()}`],
    ["Expansion ARR", `USD ${model.expansionArr.toLocaleString()}`]
  ].map(([label, value]) => `
    <span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>
  `).join("");

  document.querySelector("#accountHealthSignals").innerHTML = model.signals.map((signal) => `
    <div class="account-health-signal ${signal.statusClass}">
      <span>
        <strong>${escapeHtml(signal.label)}</strong>
        ${escapeHtml(signal.detail)}
      </span>
      <em>${signal.score}/100</em>
      <b>${escapeHtml(signal.status)}</b>
    </div>
  `).join("");

  document.querySelector("#accountHealthActions").innerHTML = model.actions.map((action, index) => `
    <button type="button" class="account-health-action ${action.priorityClass}" data-health-anchor="${escapeHtml(action.anchor)}" data-health-label="${escapeHtml(action.label)}">
      <strong>${index + 1}</strong>
      <span>${escapeHtml(action.label)}<small>${escapeHtml(action.detail)}</small></span>
      <em>${escapeHtml(action.status)}</em>
    </button>
  `).join("");

  document.querySelector("#accountHealthPlan").innerHTML = buildAccountHealthText(model)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");

  document.querySelectorAll("[data-health-anchor]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector(button.dataset.healthAnchor);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      showToast(`${button.dataset.healthLabel} opened.`);
    });
  });
}

function getAccountHealthModel(listing = getSelectedListing()) {
  const profile = getSupplierProfile(listing.supplier);
  const storefront = getSupplierStorefrontModel(listing);
  const fleetImport = getFleetImportModel(listing);
  const proofVault = getProofVaultModel(listing);
  const revenueDesk = getRevenueDeskModel(listing);
  const leadDesk = getLeadDeskModel(listing);
  const supplierYardRows = getYardModel().rows.filter((row) => row.listing.supplier === profile.supplier);
  const yardScore = supplierYardRows.length
    ? Math.round(supplierYardRows.reduce((total, row) => total + row.score, 0) / supplierYardRows.length)
    : storefront.yardScore;
  const supplierReviewRows = supplierYardRows.filter((row) => row.status !== "fresh");
  const expansionArr = revenueDesk.pendingListings * 99 + fleetImport.annualRevenue;
  const signals = [
    getAccountHealthSignal("Listing retention", revenueDesk.score, `${revenueDesk.paidListings} paid listing${revenueDesk.paidListings === 1 ? "" : "s"}, ${revenueDesk.renewalRiskCount} renewal risk, ${revenueDesk.annualShare}% annual share.`),
    getAccountHealthSignal("Proof confidence", proofVault.score, `${proofVault.readyCount} ready proof item${proofVault.readyCount === 1 ? "" : "s"}, ${proofVault.expiringCount} expiring, ${proofVault.missingCount} missing.`),
    getAccountHealthSignal("Lead response", leadDesk.active.score, `${leadDesk.hotCount} hot lead${leadDesk.hotCount === 1 ? "" : "s"}, USD ${leadDesk.totalBudget.toLocaleString()} direct enquiry pipeline.`),
    getAccountHealthSignal("Yard freshness", yardScore, `${supplierReviewRows.length} supplier listing${supplierReviewRows.length === 1 ? "" : "s"} need reconfirmation before serious routing.`),
    getAccountHealthSignal("Storefront strength", storefront.score, `${storefront.visibleFleetCount} public listing${storefront.visibleFleetCount === 1 ? "" : "s"}, Trust Passport average ${storefront.averagePassport}/100.`),
    getAccountHealthSignal("Import upside", fleetImport.score, `${fleetImport.readyListings} import-ready paid listing${fleetImport.readyListings === 1 ? "" : "s"}, USD ${fleetImport.annualRevenue.toLocaleString()} potential ARR.`)
  ];
  const score = Math.max(0, Math.min(100, Math.round(
    revenueDesk.score * 0.26
    + proofVault.score * 0.18
    + leadDesk.active.score * 0.2
    + yardScore * 0.14
    + storefront.score * 0.12
    + fleetImport.score * 0.1
  )));
  const riskCount = signals.filter((signal) => signal.statusClass !== "ready").length;
  const badge = score >= 86 && riskCount <= 1 ? "Grow account" : score >= 70 ? "Save and grow" : "Retention risk";
  const summary = riskCount
    ? `${riskCount} risk signal${riskCount === 1 ? "" : "s"} need attention before renewal or expansion.`
    : "Account is healthy enough for annual expansion and category growth.";
  const actions = getAccountHealthActions({
    profile,
    proofVault,
    revenueDesk,
    leadDesk,
    fleetImport,
    supplierReviewRows,
    expansionArr
  });

  return {
    profile,
    storefront,
    fleetImport,
    proofVault,
    revenueDesk,
    leadDesk,
    yardScore,
    supplierReviewRows,
    expansionArr,
    signals,
    score,
    riskCount,
    badge,
    summary,
    actions
  };
}

function getAccountHealthSignal(label, score, detail) {
  const statusClass = score >= 80 ? "ready" : score >= 65 ? "watch" : "risk";
  return {
    label,
    score,
    detail,
    status: statusClass === "ready" ? "Ready" : statusClass === "watch" ? "Watch" : "Risk",
    statusClass
  };
}

function getAccountHealthActions(context) {
  const actions = [];
  const proofGaps = context.proofVault.expiringCount + context.proofVault.missingCount;
  const dormantListings = context.revenueDesk.pausedCount + context.revenueDesk.draftCount;

  if (context.revenueDesk.renewalRiskCount) {
    actions.push({
      label: "Save renewal risk",
      detail: `${context.revenueDesk.renewalRiskCount} paid listing${context.revenueDesk.renewalRiskCount === 1 ? "" : "s"} need renewal attention before visibility drops.`,
      status: "Save",
      priorityClass: "hot",
      anchor: "#revenue-desk"
    });
  }

  if (proofGaps) {
    actions.push({
      label: "Clean proof before renewal",
      detail: `${proofGaps} proof item${proofGaps === 1 ? "" : "s"} could weaken trust, renewal confidence, or high-value lead routing.`,
      status: "Trust",
      priorityClass: proofGaps > 2 ? "hot" : "warm",
      anchor: "#proof-vault"
    });
  }

  if (context.leadDesk.hotCount) {
    actions.push({
      label: "Answer hot direct leads",
      detail: `${context.leadDesk.hotCount} hot lead${context.leadDesk.hotCount === 1 ? "" : "s"} can prove listing ROI before the supplier questions renewal.`,
      status: "Reply",
      priorityClass: "hot",
      anchor: "#lead-desk"
    });
  }

  if (context.supplierReviewRows.length) {
    actions.push({
      label: "Refresh yard freshness",
      detail: `${context.supplierReviewRows.length} listing${context.supplierReviewRows.length === 1 ? "" : "s"} need availability, documents, photos, or contact reconfirmation.`,
      status: "Refresh",
      priorityClass: "warm",
      anchor: "#yard"
    });
  }

  if (context.fleetImport.readyListings) {
    actions.push({
      label: "Publish import-ready rows",
      detail: `${context.fleetImport.readyListings} clean import listing${context.fleetImport.readyListings === 1 ? "" : "s"} can add USD ${context.fleetImport.annualRevenue.toLocaleString()} ARR.`,
      status: "Grow",
      priorityClass: "grow",
      anchor: "#fleet-import"
    });
  }

  if (dormantListings) {
    actions.push({
      label: "Reactivate dormant inventory",
      detail: `${dormantListings} paused or draft listing${dormantListings === 1 ? "" : "s"} can become paid inventory once proof and availability are clean.`,
      status: "Grow",
      priorityClass: "grow",
      anchor: "#revenue-desk"
    });
  }

  if (!actions.length) {
    actions.push({
      label: "Prepare annual expansion",
      detail: `${context.profile.supplier} is healthy enough to pitch annual renewal, branch pages, or more category coverage.`,
      status: "Expand",
      priorityClass: "grow",
      anchor: "#pricing"
    });
  }

  return actions.slice(0, 5);
}

function renderSupplierSuccessQueue() {
  const model = getSupplierSuccessModel();
  setText("#supplierSuccessBadge", model.badge);

  document.querySelector("#supplierSuccessScore").innerHTML = `
    <strong>${model.averageHealth}/100</strong>
    <span>${model.summary}</span>
  `;

  document.querySelector("#supplierSuccessMetrics").innerHTML = [
    ["Call first", model.callFirst.profile.supplier],
    ["At-risk accounts", String(model.atRiskCount)],
    ["Hot leads", String(model.hotLeadCount)],
    ["Expansion ARR", `USD ${model.expansionArr.toLocaleString()}`]
  ].map(([label, value]) => `
    <span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>
  `).join("");

  document.querySelector("#supplierSuccessQueue").innerHTML = model.rows.map((row) => `
    <button type="button" class="supplier-success-row ${row.priorityClass}" data-success-listing="${escapeHtml(row.listing.id)}">
      <span>
        <strong>${escapeHtml(row.profile.supplier)}</strong>
        ${escapeHtml(row.primaryAction.label)}
        <small>${escapeHtml(row.reason)}</small>
      </span>
      <em>${row.urgency}/100</em>
      <small>Health ${row.health.score}/100</small>
      <b>${escapeHtml(row.primaryAction.status)}</b>
    </button>
  `).join("");

  document.querySelector("#supplierSuccessActions").innerHTML = model.rhythm.map((item, index) => `
    <div class="supplier-success-action ${item.statusClass}">
      <strong>${index + 1}</strong>
      <span>${escapeHtml(item.label)}<small>${escapeHtml(item.detail)}</small></span>
      <em>${escapeHtml(item.status)}</em>
    </div>
  `).join("");

  document.querySelector("#supplierSuccessPlan").innerHTML = buildSupplierSuccessText(model)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");

  document.querySelectorAll("[data-success-listing]").forEach((button) => {
    button.addEventListener("click", () => {
      const listing = listings.find((item) => item.id === button.dataset.successListing);
      if (!listing) return;
      state.selectedListingId = listing.id;
      state.commandRole = "Founder";
      saveState();
      render();
      document.querySelector("#account-health").scrollIntoView({ behavior: "smooth", block: "start" });
      showToast(`${listing.supplier} health opened.`);
    });
  });
}

function getSupplierSuccessModel() {
  const rows = supplierProfiles
    .map((profile) => getSupplierSuccessRow(profile))
    .sort((a, b) => b.urgency - a.urgency || a.profile.supplier.localeCompare(b.profile.supplier));
  const averageHealth = Math.round(rows.reduce((total, row) => total + row.health.score, 0) / rows.length);
  const atRiskCount = rows.filter((row) => row.health.score < 74 || row.health.riskCount >= 3).length;
  const hotLeadCount = rows.reduce((total, row) => total + row.health.leadDesk.hotCount, 0);
  const renewalRiskCount = rows.reduce((total, row) => total + row.health.revenueDesk.renewalRiskCount, 0);
  const proofGapCount = rows.reduce((total, row) => total + row.health.proofVault.expiringCount + row.health.proofVault.missingCount, 0);
  const expansionArr = rows.reduce((total, row) => total + row.health.expansionArr, 0);
  const callFirst = rows[0];
  const badge = atRiskCount ? "Work today" : expansionArr ? "Grow accounts" : "Healthy book";
  const summary = atRiskCount
    ? `${atRiskCount} supplier account${atRiskCount === 1 ? "" : "s"} need founder attention today. Start with ${callFirst.profile.supplier}.`
    : `Supplier book is stable. Use the queue to convert USD ${expansionArr.toLocaleString()} visible expansion ARR.`;
  const rhythm = getSupplierSuccessRhythm({
    rows,
    callFirst,
    atRiskCount,
    hotLeadCount,
    renewalRiskCount,
    proofGapCount,
    expansionArr
  });

  return {
    rows,
    averageHealth,
    atRiskCount,
    hotLeadCount,
    renewalRiskCount,
    proofGapCount,
    expansionArr,
    callFirst,
    badge,
    summary,
    rhythm
  };
}

function getSupplierSuccessRow(profile) {
  const listing = getSupplierRepresentativeListing(profile);
  const health = getAccountHealthModel(listing);
  const primaryAction = health.actions[0];
  const urgency = Math.max(0, Math.min(100, Math.round(
    100 - health.score
    + health.riskCount * 7
    + health.revenueDesk.renewalRiskCount * 3
    + health.leadDesk.hotCount * 4
    + health.proofVault.expiringCount * 2
    + health.proofVault.missingCount * 4
  )));
  const priorityClass = urgency >= 56 ? "hot" : health.expansionArr >= 600 ? "grow" : "watch";
  const reasonParts = [
    `${health.riskCount} risk signal${health.riskCount === 1 ? "" : "s"}`,
    `USD ${health.revenueDesk.annualRevenue.toLocaleString()} ARR`,
    `USD ${health.leadDesk.totalBudget.toLocaleString()} pipeline`
  ];

  if (health.expansionArr) {
    reasonParts.push(`USD ${health.expansionArr.toLocaleString()} expansion ARR`);
  }

  return {
    profile,
    listing,
    health,
    primaryAction,
    urgency,
    priorityClass,
    reason: reasonParts.join(" - ")
  };
}

function getSupplierRepresentativeListing(profile) {
  return listings.find((listing) => listing.supplier === profile.supplier)
    || {
      id: `HY-${profile.slug}`,
      name: profile.fleet[0] ? profile.fleet[0].label : "Starter equipment",
      category: profile.fleet[0] ? profile.fleet[0].label : "Equipment",
      supplier: profile.supplier,
      region: profile.branch.split(", ").pop() || "Global",
      city: profile.branch.split(", ")[0] || "Branch",
      rate: "Quote direct",
      availability: "call",
      verified: false,
      documents: profile.proof,
      specs: profile.headline
    };
}

function getSupplierSuccessRhythm(context) {
  const rhythm = [
    {
      label: `Call ${context.callFirst.profile.supplier}`,
      detail: `${context.callFirst.primaryAction.label}: ${context.callFirst.primaryAction.detail}`,
      status: "First",
      statusClass: "hot"
    },
    {
      label: "Save renewal and proof risks",
      detail: `${context.renewalRiskCount} renewal-risk listing${context.renewalRiskCount === 1 ? "" : "s"} and ${context.proofGapCount} proof gap${context.proofGapCount === 1 ? "" : "s"} need action before supplier confidence drops.`,
      status: context.renewalRiskCount || context.proofGapCount ? "Save" : "Clean",
      statusClass: context.renewalRiskCount || context.proofGapCount ? "hot" : "grow"
    },
    {
      label: "Prove listing ROI",
      detail: `${context.hotLeadCount} hot lead${context.hotLeadCount === 1 ? "" : "s"} should be answered fast so suppliers see direct enquiry value.`,
      status: context.hotLeadCount ? "Reply" : "Monitor",
      statusClass: context.hotLeadCount ? "watch" : "grow"
    },
    {
      label: "Grow ready suppliers",
      detail: `The queue shows USD ${context.expansionArr.toLocaleString()} visible expansion ARR from import-ready and dormant listings.`,
      status: context.expansionArr ? "Grow" : "Later",
      statusClass: "grow"
    }
  ];

  if (context.atRiskCount > 2) {
    rhythm.push({
      label: "Hold new expansion until saves are done",
      detail: "More than two suppliers need attention, so protect trust and renewal before pushing new paid listings.",
      status: "Focus",
      statusClass: "hot"
    });
  }

  return rhythm.slice(0, 5);
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
      state.activeHuntTarget = "";
      state.huntOutcome = "agreed";
      saveState();
      renderDemandRadar();
      renderSupplierHunt();
      renderMarketSignalMatrix();
      renderMarketMaker();
      renderPageFactory();
      renderLaunchRoom();
      renderMarketTwin();
      renderLiquidityFlywheel();
      renderFounderAutopilot();
      renderDemandExchange();
      renderProofDemandRoom();
      renderSupplierCommitmentRoom();
      renderListingActivationRoom();
      renderTrustRevenueLedger();
      renderFounderWorkbench();
      renderFounderMorningBrief();
      renderFounderDailyMoves();
      renderFounderCallSheet();
      document.querySelector("#growth").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderSupplierHunt() {
  const signals = getDemandSignals();
  if (!signals.length) return;

  const active = getActiveDemandSignal();
  const plan = getHuntPlan(active);
  const selectedTarget = plan.selectedTarget;
  setText("#huntPriority", plan.priority);
  setText("#huntPersona", plan.persona);

  const commandRoot = document.querySelector("#huntCommand");
  if (commandRoot) {
    commandRoot.innerHTML = `
      <div class="hunt-command-main ${escapeHtml(plan.priorityClass)}">
        <span>Supplier hunt queue</span>
        <strong>${escapeHtml(selectedTarget ? `${selectedTarget.supplier}: ${selectedTarget.action} for ${active.region} ${plan.category}` : `${active.region} ${plan.category} hunt`)}</strong>
        <small>${Number(active.count || 1)} demand signals, ${plan.supplyGap} supply gap, USD ${plan.annualRevenue.toLocaleString()} modeled listing ARR.</small>
      </div>
      <div class="hunt-command-metrics">
        <span><strong>${plan.score}/100</strong>hunt pressure</span>
        <span><strong>${selectedTarget ? `${selectedTarget.fit}/100` : "0/100"}</strong>target fit</span>
        <span><strong>${selectedTarget ? selectedTarget.packageListings : plan.starterListings}</strong>starter listings</span>
        <span><strong>${selectedTarget ? `USD ${selectedTarget.annualRevenue.toLocaleString()}` : `USD ${plan.annualRevenue.toLocaleString()}`}</strong>first package ARR</span>
      </div>
      <div class="hunt-command-actions">
        <button type="button" data-hunt-action="copy-queue">Copy call queue</button>
        <button type="button" data-hunt-action="open-matrix">Open matrix</button>
        <button type="button" class="solid-button" data-hunt-action="copy-pitch">Copy pitch</button>
      </div>
    `;
  }

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

  const targetRoot = document.querySelector("#huntTargetQueue");
  if (targetRoot) {
    targetRoot.innerHTML = plan.targets.map((target, index) => `
      <button type="button" class="hunt-target ${escapeHtml(target.statusClass)} ${selectedTarget && target.id === selectedTarget.id ? "is-active" : ""}" data-hunt-target="${escapeHtml(target.id)}">
        <strong>${index + 1}</strong>
        <span>
          <b>${escapeHtml(target.supplier)}</b>
          <small>${escapeHtml(target.branch)} - ${escapeHtml(target.reason)}</small>
        </span>
        <em>${target.fit}/100</em>
        <i>${escapeHtml(target.status)}</i>
      </button>
    `).join("");
  }

  renderSupplierHuntCallSheet(plan);

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
      state.activeHuntTarget = "";
      state.huntOutcome = "agreed";
      saveState();
      renderDemandRadar();
      renderSupplierHunt();
      renderMarketSignalMatrix();
      renderMarketMaker();
      renderPageFactory();
      renderLaunchRoom();
      renderMarketTwin();
      renderLiquidityFlywheel();
      renderFounderAutopilot();
      renderDemandExchange();
      renderProofDemandRoom();
      renderSupplierCommitmentRoom();
      renderListingActivationRoom();
      renderTrustRevenueLedger();
      renderFounderWorkbench();
      renderFounderMorningBrief();
      renderFounderDailyMoves();
      renderFounderCallSheet();
    });
  });

  document.querySelectorAll("[data-hunt-target]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeHuntTarget = button.dataset.huntTarget;
      state.huntOutcome = "agreed";
      saveState();
      renderSupplierHunt();
      showToast("Supplier target selected.");
    });
  });

  document.querySelectorAll("[data-hunt-action]").forEach((button) => {
    button.addEventListener("click", () => {
      handleSupplierHuntAction(button.dataset.huntAction, plan);
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
  const supplyGap = Math.max(0, starterListings - visibleSupply);
  const targets = getSupplierHuntTargets({
    signal,
    blueprint,
    score,
    visibleSupply,
    starterListings,
    supplyGap,
    annualRevenue: starterListings * 99
  });
  const selectedTarget = targets.find((target) => target.id === state.activeHuntTarget) || targets[0] || null;

  return {
    signal,
    persona: blueprint.persona,
    category: blueprint.category,
    proof: blueprint.proof,
    hook: blueprint.hook,
    visibleSupply,
    score,
    starterListings,
    supplyGap,
    monthlyRevenue: starterListings * 9,
    annualRevenue: starterListings * 99,
    priority,
    priorityClass: score >= 72 ? "ready" : score >= 45 ? "review" : "gap",
    targets,
    selectedTarget
  };
}

function getSupplierHuntTargets(context) {
  const { signal, blueprint, score, starterListings, supplyGap } = context;
  const targetRows = supplierProfiles.map((profile, index) => {
    const fit = getSupplierTargetFitScore(profile, context, index);
    const packageListings = Math.max(3, Math.min(12, Math.round(starterListings / 4) + (fit >= 82 ? 2 : fit >= 68 ? 1 : 0)));
    const status = getSupplierTargetStatus(fit);
    const branchRegion = profile.branch.split(",").pop().trim();
    const ask = blueprint.proof[index % blueprint.proof.length];
    const reason = [
      `${blueprint.category} fit`,
      `${branchRegion === signal.region ? signal.region : profile.serviceArea.split(",")[0].trim()} route`,
      `${profile.proof.length} proof signals`
    ].join(", ");

    return {
      id: profile.slug,
      supplier: profile.supplier,
      branch: profile.branch,
      fit,
      status: status.label,
      statusClass: status.className,
      action: status.action,
      ask,
      reason,
      packageListings,
      annualRevenue: packageListings * 99,
      supplyGap
    };
  });

  return targetRows
    .sort((a, b) => b.fit - a.fit || b.packageListings - a.packageListings || a.supplier.localeCompare(b.supplier))
    .slice(0, 4);
}

function getSupplierTargetFitScore(profile, context, index) {
  const { signal, blueprint, score, supplyGap } = context;
  const haystack = [
    profile.supplier,
    profile.headline,
    profile.branch,
    profile.serviceArea,
    profile.services.join(" "),
    profile.proof.join(" "),
    profile.fleet.map((item) => `${item.label} ${item.status}`).join(" ")
  ].join(" ").toLowerCase();
  const regionFit = haystack.includes(signal.region.toLowerCase()) ? 24 : 8;
  const categoryFit = haystack.includes(blueprint.category.toLowerCase()) || blueprint.keywords.some((keyword) => haystack.includes(keyword)) ? 28 : 10;
  const proofFit = Math.min(22, profile.proof.length * 5 + (profile.proof.some((item) => item.toLowerCase().includes("pending")) ? -6 : 2));
  const fleetCount = profile.fleet.reduce((total, item) => total + Number(item.count || 0), 0);
  const scaleFit = Math.min(18, Math.round(fleetCount / 2));
  const urgencyFit = score >= 72 ? 8 : score >= 45 ? 5 : 2;
  const gapFit = Math.min(8, Math.ceil(supplyGap / 4));
  return Math.max(35, Math.min(100, regionFit + categoryFit + proofFit + scaleFit + urgencyFit + gapFit - index));
}

function getSupplierTargetStatus(fit) {
  if (fit >= 82) {
    return { label: "Call today", className: "ready", action: "Call" };
  }
  if (fit >= 68) {
    return { label: "Qualify", className: "review", action: "Qualify" };
  }
  return { label: "Find proof", className: "gap", action: "Research" };
}

async function handleSupplierHuntAction(action, plan = getHuntPlan(getActiveDemandSignal())) {
  if (action === "open-matrix") {
    document.querySelector("#market-signal-matrix")?.scrollIntoView({ behavior: "smooth", block: "start" });
    showToast("Market Matrix opened.");
    return;
  }

  const text = action === "copy-queue" ? buildSupplierHuntQueueText(plan) : buildSupplierHuntText(plan);
  try {
    await navigator.clipboard.writeText(text);
    showToast(action === "copy-queue" ? "Supplier call queue copied." : "Supplier hunt pitch copied.");
  } catch {
    showToast("Copy is blocked here, but the supplier hunt text is visible.");
  }
}

function renderSupplierHuntCallSheet(plan = getHuntPlan(getActiveDemandSignal())) {
  const root = document.querySelector("#huntCallSheet");
  if (!root) return;

  const model = getSupplierHuntCallSheetModel(plan);
  if (!model.target) {
    root.innerHTML = `
      <div class="hunt-call-empty">
        <strong>No supplier target selected yet.</strong>
        <span>Choose a demand signal and Heavyster will build the call sheet.</span>
      </div>
    `;
    renderSupplierHuntOutcomeGate(model);
    return;
  }

  root.innerHTML = `
    <div class="hunt-call-main ${escapeHtml(model.statusClass)}">
      <span>${escapeHtml(model.badge)}</span>
      <strong>${escapeHtml(model.headline)}</strong>
      <small>${escapeHtml(model.detail)}</small>
      <em>${model.score}/100</em>
    </div>
    <div class="hunt-call-steps">
      ${model.steps.map((step) => `
        <div class="hunt-call-step ${escapeHtml(step.statusClass)}">
          <strong>${escapeHtml(step.label)}</strong>
          <span>${escapeHtml(step.detail)}</span>
          <em>${escapeHtml(step.status)}</em>
        </div>
      `).join("")}
    </div>
    <div class="hunt-call-note">
      <strong>${escapeHtml(model.packageLabel)}</strong>
      <span>${escapeHtml(model.directRule)}</span>
    </div>
    <div class="hunt-call-actions">
      <button type="button" data-hunt-call-action="copy-call">Copy script</button>
      <button type="button" data-hunt-call-action="open-call-sheet">Founder call sheet</button>
      <button type="button" data-hunt-call-action="open-studio">Open supplier studio</button>
    </div>
  `;

  root.querySelectorAll("[data-hunt-call-action]").forEach((button) => {
    button.addEventListener("click", () => {
      handleSupplierHuntCallAction(button.dataset.huntCallAction, model);
    });
  });

  renderSupplierHuntOutcomeGate(model);
}

function getSupplierHuntCallSheetModel(plan = getHuntPlan(getActiveDemandSignal())) {
  const signal = plan.signal;
  const target = plan.selectedTarget || plan.targets[0] || null;
  const profile = target ? supplierProfiles.find((supplier) => supplier.slug === target.id || supplier.supplier === target.supplier) : null;
  const listing = target ? (
    listings.find((item) => item.supplier === target.supplier && item.region === signal.region) ||
    listings.find((item) => item.supplier === target.supplier)
  ) : null;
  const demandCount = Number(signal.count || 1);
  const packageListings = target ? target.packageListings : plan.starterListings;
  const annualRevenue = target ? target.annualRevenue : plan.annualRevenue;
  const score = target ? Math.min(100, Math.round((target.fit * 0.58) + (plan.score * 0.42))) : plan.score;
  const statusClass = score >= 82 ? "ready" : score >= 68 ? "review" : "gap";
  const badge = score >= 82 ? "Call today" : score >= 68 ? "Call after proof" : "Research first";
  const proofAsk = target ? target.ask : plan.proof[0];
  const proofStack = [proofAsk, ...plan.proof.filter((item) => item !== proofAsk)].slice(0, 3);
  const supplierName = target ? target.supplier : `${signal.region} ${plan.category} supplier`;
  const listingLabel = listing ? listing.name : `${plan.category} listing package`;
  const responseRoute = profile ? profile.response : "direct response route";
  const profilePath = target ? `/suppliers/${target.id}/` : "/suppliers/";
  const visibleSupply = getVisibleSupplyLabel(plan.visibleSupply);
  const demandLabel = `${demandCount} ${signal.equipment} demand signal${demandCount === 1 ? "" : "s"}`;

  const steps = [
    {
      label: "Open",
      detail: `${demandLabel} in ${signal.region}; current visible supply is ${visibleSupply}.`,
      status: "Demand",
      statusClass: "ready"
    },
    {
      label: "Ask",
      detail: `Request ${proofStack.join(", ").toLowerCase()} before showing a verified badge.`,
      status: "Proof",
      statusClass: "review"
    },
    {
      label: "Offer",
      detail: `${packageListings} paid listings at USD 99/year can create USD ${annualRevenue.toLocaleString()}/yr.`,
      status: "SaaS",
      statusClass: "ready"
    },
    {
      label: "Route",
      detail: `Publish ${profilePath} and send enquiries through ${responseRoute.toLowerCase()}.`,
      status: "Direct",
      statusClass: "ready"
    }
  ];

  const scriptLines = [
    `Hi ${supplierName}, Heavyster is opening verified ${plan.category.toLowerCase()} listings for ${signal.region}.`,
    `We already see ${demandLabel} with ${signal.urgency.toLowerCase()} urgency and ${signal.duration} duration.`,
    `You look like the first supplier to call because your target fit is ${target ? `${target.fit}/100` : `${score}/100`} and the visible supply gap is ${plan.supplyGap}.`,
    `Can you confirm ${listingLabel} availability and share ${proofStack.join(", ").toLowerCase()}?`,
    `If proof is clean, start with ${packageListings} paid listings at USD 99/year each. Heavyster sends direct enquiries; rental payment stays between buyer and supplier.`
  ];

  return {
    signal,
    plan,
    target,
    profile,
    listing,
    score,
    statusClass,
    badge,
    headline: `Call ${supplierName} for ${packageListings} paid ${plan.category.toLowerCase()} listings.`,
    detail: `Start from ${signal.region} ${signal.equipment} demand, confirm ${proofAsk.toLowerCase()}, and keep the rental payment direct.`,
    packageLabel: `${packageListings} listings = USD ${annualRevenue.toLocaleString()}/yr`,
    directRule: "Buyer pays supplier directly. Heavyster earns listing SaaS first.",
    proofStack,
    steps,
    scriptLines
  };
}

async function handleSupplierHuntCallAction(action, model = getSupplierHuntCallSheetModel()) {
  if (action === "open-call-sheet") {
    document.querySelector("#founder-call-sheet")?.scrollIntoView({ behavior: "smooth", block: "start" });
    showToast("Founder call sheet opened.");
    return;
  }

  if (action === "open-studio") {
    if (model.listing?.id) state.selectedListingId = model.listing.id;
    state.commandRole = "Supplier";
    state.supplierView = true;
    saveState();
    render();
    document.querySelector("#studio")?.scrollIntoView({ behavior: "smooth", block: "start" });
    showToast("Supplier Studio opened for the hunt target.");
    return;
  }

  try {
    await navigator.clipboard.writeText(buildSupplierHuntCallSheetText(model));
    showToast("Supplier hunt call script copied.");
  } catch {
    showToast("Copy is blocked here, but the hunt call sheet is visible.");
  }
}

function renderSupplierHuntOutcomeGate(model = getSupplierHuntCallSheetModel()) {
  const root = document.querySelector("#huntOutcomeGate");
  if (!root) return;

  const outcomeModel = getSupplierHuntOutcomeModel(model);
  if (!outcomeModel.target) {
    root.innerHTML = "";
    return;
  }

  root.innerHTML = `
    <div class="hunt-outcome-head ${escapeHtml(outcomeModel.option.statusClass)}">
      <span>Outcome gate</span>
      <strong>${escapeHtml(outcomeModel.headline)}</strong>
      <small>${escapeHtml(outcomeModel.detail)}</small>
      <em>${outcomeModel.score}/100</em>
    </div>
    <div class="hunt-outcome-options" aria-label="Supplier call outcomes">
      ${huntOutcomeOptions.map((option) => `
        <button type="button" class="${option.id === outcomeModel.option.id ? "is-active" : ""} ${escapeHtml(option.statusClass)}" data-hunt-outcome="${escapeHtml(option.id)}">
          <strong>${escapeHtml(option.label)}</strong>
          <span>${escapeHtml(option.cue)}</span>
        </button>
      `).join("")}
    </div>
    <div class="hunt-outcome-note">
      <strong>${escapeHtml(outcomeModel.noteLabel)}</strong>
      <span>${escapeHtml(outcomeModel.note)}</span>
    </div>
    <div class="hunt-outcome-actions">
      ${outcomeModel.actions.map((action) => `
        <button type="button" class="${action.primary ? "solid-button" : ""}" data-hunt-outcome-action="${escapeHtml(action.id)}">${escapeHtml(action.label)}</button>
      `).join("")}
    </div>
  `;

  root.querySelectorAll("[data-hunt-outcome]").forEach((button) => {
    button.addEventListener("click", () => {
      state.huntOutcome = button.dataset.huntOutcome;
      saveState();
      renderSupplierHuntOutcomeGate(model);
    });
  });

  root.querySelectorAll("[data-hunt-outcome-action]").forEach((button) => {
    button.addEventListener("click", () => {
      handleSupplierHuntOutcomeAction(button.dataset.huntOutcomeAction, outcomeModel);
    });
  });
}

function getSupplierHuntOutcomeModel(model = getSupplierHuntCallSheetModel()) {
  const plan = model.plan || getHuntPlan(getActiveDemandSignal());
  const target = model.target || plan.selectedTarget || plan.targets[0] || null;
  const option = huntOutcomeOptions.find((item) => item.id === state.huntOutcome) || huntOutcomeOptions[0];
  const nextTarget = target ? plan.targets.find((item) => item.id !== target.id) || null : null;
  const scoreBase = model.score || plan.score;
  const proofAsk = model.proofStack?.[0] || target?.ask || plan.proof[0];
  const packageListings = target ? target.packageListings : plan.starterListings;
  const annualRevenue = target ? target.annualRevenue : plan.annualRevenue;
  const profilePath = target ? `/suppliers/${target.id}/` : "/suppliers/";

  const outcome = {
    agreed: {
      score: Math.min(100, scoreBase + 8),
      headline: `Activate ${packageListings} paid listings for ${target ? target.supplier : "the supplier"}.`,
      detail: `Move to pricing, publish ${profilePath}, and route direct enquiries once availability is confirmed.`,
      noteLabel: "Activation rule",
      note: `Phase one stays clean: USD ${annualRevenue.toLocaleString()}/yr listing SaaS, supplier keeps rental payment direct.`,
      actions: [
        { id: "copy-outcome", label: "Copy outcome", primary: true },
        { id: "open-pricing", label: "Open pricing" },
        { id: "open-studio", label: "Open Studio" }
      ]
    },
    proof: {
      score: Math.max(1, scoreBase - 12),
      headline: `Chase ${proofAsk.toLowerCase()} before activation.`,
      detail: `${target ? target.supplier : "The supplier"} can stay in the hunt, but do not show a verified path until proof is clean.`,
      noteLabel: "Proof rule",
      note: `Ask for ${model.proofStack.join(", ").toLowerCase()} and keep the listing hidden or limited until documents are usable.`,
      actions: [
        { id: "copy-outcome", label: "Copy proof ask", primary: true },
        { id: "open-studio", label: "Open Studio" },
        { id: "next-target", label: "Next supplier" }
      ]
    },
    later: {
      score: Math.max(1, scoreBase - 6),
      headline: `Keep ${target ? target.supplier : "the supplier"} warm and protect the queue.`,
      detail: "Schedule a short follow-up, keep demand visible, and do not slow the next supplier call.",
      noteLabel: "Follow-up rule",
      note: `${plan.signal.region} ${plan.category} demand still needs supply. Keep the call sheet alive, then move to the next target if the reply slips.`,
      actions: [
        { id: "copy-outcome", label: "Copy follow-up", primary: true },
        { id: "open-call-sheet", label: "Call sheet" },
        { id: "next-target", label: "Next supplier" }
      ]
    },
    pass: {
      score: Math.max(1, scoreBase - 20),
      headline: `Move to ${nextTarget ? nextTarget.supplier : "the next supplier"}.`,
      detail: `${target ? target.supplier : "This supplier"} is not the shortest path for ${plan.signal.region} ${plan.category} supply right now.`,
      noteLabel: "Queue rule",
      note: nextTarget
        ? `Next best target: ${nextTarget.supplier}, ${nextTarget.branch}, ${nextTarget.fit}/100 fit. Keep the market wedge moving.`
        : "No backup target is ready. Return to the Market Matrix and open a new supplier hunt.",
      actions: [
        { id: "copy-outcome", label: "Copy pass note", primary: true },
        { id: "next-target", label: "Next supplier" },
        { id: "open-matrix", label: "Open Matrix" }
      ]
    }
  }[option.id];

  return {
    ...outcome,
    option,
    model,
    plan,
    target,
    listing: model.listing || null,
    nextTarget,
    packageListings,
    annualRevenue,
    proofAsk,
    profilePath
  };
}

async function handleSupplierHuntOutcomeAction(action, outcomeModel = getSupplierHuntOutcomeModel()) {
  if (action === "open-pricing") {
    document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth", block: "start" });
    showToast("Pricing opened for paid listing activation.");
    return;
  }

  if (action === "open-studio") {
    if (outcomeModel.target) state.activeHuntTarget = outcomeModel.target.id;
    if (outcomeModel.listing?.id) state.selectedListingId = outcomeModel.listing.id;
    state.commandRole = "Supplier";
    state.supplierView = true;
    saveState();
    render();
    document.querySelector("#studio")?.scrollIntoView({ behavior: "smooth", block: "start" });
    showToast("Supplier Studio opened for this outcome.");
    return;
  }

  if (action === "open-call-sheet") {
    document.querySelector("#founder-call-sheet")?.scrollIntoView({ behavior: "smooth", block: "start" });
    showToast("Founder call sheet opened.");
    return;
  }

  if (action === "open-matrix") {
    document.querySelector("#market-signal-matrix")?.scrollIntoView({ behavior: "smooth", block: "start" });
    showToast("Market Matrix opened.");
    return;
  }

  if (action === "next-target") {
    if (outcomeModel.nextTarget) {
      state.activeHuntTarget = outcomeModel.nextTarget.id;
      state.huntOutcome = "agreed";
      saveState();
      renderSupplierHunt();
      showToast("Next supplier selected.");
    } else {
      document.querySelector("#market-signal-matrix")?.scrollIntoView({ behavior: "smooth", block: "start" });
      showToast("No backup supplier ready. Market Matrix opened.");
    }
    return;
  }

  try {
    await navigator.clipboard.writeText(buildSupplierHuntOutcomeText(outcomeModel));
    showToast("Supplier hunt outcome copied.");
  } catch {
    showToast("Copy is blocked here, but the outcome gate is visible.");
  }
}

function renderMarketSignalMatrix() {
  const root = document.querySelector("#marketSignalMatrix");
  if (!root) return;

  const model = getMarketSignalMatrixModel();
  const active = model.activeCell;
  if (!active) return;

  renderMarketSignalCommand(model);
  setText("#marketSignalTitle", `${active.region} ${active.category}`);
  setText("#marketSignalBadge", active.status);

  document.querySelector("#marketSignalMetrics").innerHTML = [
    ["Demand", `${model.totalDemand} signals`],
    ["Live supply", `${model.totalSupply} listings`],
    ["Verified", `${model.totalVerified} listings`],
    ["Matrix ARR", `USD ${model.totalArr.toLocaleString()}`]
  ].map(([label, value]) => `
    <span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>
  `).join("");

  document.querySelector("#marketSignalFocus").innerHTML = `
    <strong>${active.score}/100</strong>
    <span>${escapeHtml(active.summary)}</span>
    <button type="button" class="solid-button" data-matrix-key="${escapeHtml(active.key)}">${escapeHtml(active.action)}</button>
  `;

  root.innerHTML = [
    `<div class="market-signal-head">Region</div>`,
    ...model.categories.map((category) => `<div class="market-signal-head">${escapeHtml(category)}</div>`),
    ...model.rows.flatMap((row) => [
      `<div class="market-signal-region">${escapeHtml(row.region)}</div>`,
      ...row.cells.map((cell) => `
        <button type="button" class="market-signal-cell ${cell.statusClass} ${cell.key === active.key ? "is-active" : ""}" data-matrix-key="${escapeHtml(cell.key)}">
          <strong>${cell.score}/100</strong>
          <span>${cell.demandCount} demand / ${cell.visibleSupply} supply</span>
          <small>${escapeHtml(cell.action)}</small>
        </button>
      `)
    ])
  ].join("");

  document.querySelector("#marketSignalMoves").innerHTML = model.topCells.map((cell, index) => `
    <button type="button" class="market-signal-move ${cell.statusClass} ${cell.key === active.key ? "is-active" : ""}" data-matrix-key="${escapeHtml(cell.key)}">
      <strong>${index + 1}</strong>
      <span>
        ${escapeHtml(cell.region)} ${escapeHtml(cell.category)}
        <small>${escapeHtml(cell.summary)}</small>
      </span>
      <em>USD ${cell.annualRevenue.toLocaleString()}</em>
      <b>${escapeHtml(cell.status)}</b>
    </button>
  `).join("");

  document.querySelector("#marketSignalBrief").innerHTML = buildMarketSignalMatrixText(model)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");

  document.querySelectorAll("[data-matrix-key]:not([data-matrix-command-action])").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.matrixKey;
      const cell = getMarketSignalMatrixModel().cells.find((item) => item.key === key);
      if (!cell) return;
      state.activeMatrixKey = key;
      if (cell.opportunity) {
        state.activeMarketKey = key;
        if (cell.signalKey) state.activeDemandKey = cell.signalKey;
      }
      saveState();
      renderDemandRadar();
      renderSupplierHunt();
      renderMarketSignalMatrix();
      renderMarketMaker();
      renderPageFactory();
      renderLaunchRoom();
      renderMarketTwin();
      renderLiquidityFlywheel();
      renderFounderAutopilot();
      renderDemandExchange();
      renderProofDemandRoom();
      renderSupplierCommitmentRoom();
      renderListingActivationRoom();
      renderTrustRevenueLedger();
      renderFounderWorkbench();
      renderFounderMorningBrief();
      renderFounderDailyMoves();
      renderFounderCallSheet();
      showToast(cell.opportunity ? `${cell.region} ${cell.category} market focused.` : `${cell.region} ${cell.category} needs demand capture first.`);
    });
  });
}

function renderMarketSignalCommand(model = getMarketSignalMatrixModel()) {
  const root = document.querySelector("#marketSignalCommand");
  if (!root) return;

  const active = model.activeCell;
  if (!active) {
    root.innerHTML = "";
    return;
  }

  const command = getMarketSignalCommand(active, model);
  root.innerHTML = `
    <div class="market-signal-command-main ${active.statusClass}">
      <span>${escapeHtml(command.label)}</span>
      <strong>${escapeHtml(command.headline)}</strong>
      <small>${escapeHtml(command.detail)}</small>
    </div>
    <div class="market-signal-command-metrics" aria-label="Selected market metrics">
      <span><strong>${active.score}/100</strong>readiness</span>
      <span><strong>${active.demandCount}</strong>demand signals</span>
      <span><strong>${active.supplyGap}</strong>supply gap</span>
      <span><strong>USD ${active.annualRevenue.toLocaleString()}</strong>listing ARR</span>
    </div>
    <div class="market-signal-command-actions">
      <button type="button" class="ghost-button" data-matrix-command-action="hunt" data-matrix-key="${escapeHtml(active.key)}">Open supplier hunt</button>
      <button type="button" class="ghost-button" data-matrix-command-action="launch" data-matrix-key="${escapeHtml(active.key)}">Build launch brief</button>
      <button type="button" class="solid-button" data-matrix-command-action="copy" data-matrix-key="${escapeHtml(active.key)}">Copy command</button>
    </div>
  `;

  root.querySelectorAll("[data-matrix-command-action]").forEach((button) => {
    button.addEventListener("click", () => {
      handleMarketSignalCommandAction(button.dataset.matrixCommandAction, button.dataset.matrixKey);
    });
  });
}

function getMarketSignalCommand(active, model) {
  const topCell = model.topCells[0] || active;
  const leaderText = topCell.key === active.key
    ? "This is the highest-priority wedge in the current matrix."
    : `${topCell.region} ${topCell.category} is the current highest-priority wedge.`;

  if (active.demandCount && active.supplyGap > 0) {
    return {
      label: "Founder command",
      headline: `Fill ${active.region} ${active.category} supply before traffic`,
      detail: `${active.demandCount} demand signals can support paid listings, but ${active.supplyGap} verified machines should be recruited first. ${leaderText}`
    };
  }

  if (active.visibleSupply && active.proofScore < 70) {
    return {
      label: "Trust command",
      headline: `Clean proof for ${active.region} ${active.category}`,
      detail: `${active.visibleSupply} visible listings are useful, but proof is only ${active.proofScore}/100. Fix documents before routing serious buyer demand.`
    };
  }

  if (active.demandCount) {
    return {
      label: "Launch command",
      headline: `Launch ${active.region} ${active.category} as a focused page`,
      detail: `Demand is visible and the current wedge can model USD ${active.annualRevenue.toLocaleString()} in listing ARR without touching rental payments.`
    };
  }

  if (active.visibleSupply) {
    return {
      label: "Demand command",
      headline: `Turn ${active.region} ${active.category} supply into demand`,
      detail: `${active.visibleSupply} listings already exist. Use search pages, direct enquiries, and proof to create buyer pull before scaling.`
    };
  }

  return {
    label: "Listening command",
    headline: `Capture demand before building ${active.region} ${active.category}`,
    detail: `No live signal is strong yet. Keep the wedge in the matrix and use unmet searches to prove buyer demand first.`
  };
}

async function handleMarketSignalCommandAction(action, key) {
  const model = getMarketSignalMatrixModel();
  const cell = model.cells.find((item) => item.key === key) || model.activeCell;
  if (!cell) return;

  state.activeMatrixKey = cell.key;
  if (cell.opportunity) {
    state.activeMarketKey = cell.key;
    if (cell.signalKey) state.activeDemandKey = cell.signalKey;
  }
  saveState();
  renderDemandRadar();
  renderSupplierHunt();
  renderMarketSignalMatrix();
  renderMarketMaker();
  renderPageFactory();
  renderLaunchRoom();
  renderMarketTwin();
  renderLiquidityFlywheel();
  renderFounderAutopilot();
  renderDemandExchange();
  renderProofDemandRoom();
  renderSupplierCommitmentRoom();
  renderListingActivationRoom();
  renderTrustRevenueLedger();
  renderFounderWorkbench();
  renderFounderMorningBrief();
  renderFounderDailyMoves();
  renderFounderCallSheet();

  if (action === "copy") {
    try {
      await navigator.clipboard.writeText(buildMarketSignalMatrixText(getMarketSignalMatrixModel()));
      showToast("Market matrix command copied.");
    } catch {
      showToast("Copy is blocked here, but the matrix command is visible.");
    }
    return;
  }

  const targetSelector = action === "hunt" ? "#growth" : "#market-maker";
  document.querySelector(targetSelector)?.scrollIntoView({ behavior: "smooth", block: "start" });
  showToast(action === "hunt"
    ? `${cell.region} ${cell.category} supplier hunt opened.`
    : `${cell.region} ${cell.category} launch brief opened.`);
}

function getMarketSignalMatrixModel() {
  const opportunities = getMarketOpportunities();
  const opportunityMap = new Map(opportunities.map((opportunity) => [opportunity.key, opportunity]));
  const demandSignals = getDemandSignals();
  const categories = getMarketSignalCategories(demandSignals);
  const regions = getMarketSignalRegions(demandSignals);
  const cells = [];
  const rows = regions.map((region) => {
    const rowCells = categories.map((category) => {
      const cell = getMarketSignalCell(region, category, opportunityMap, demandSignals);
      cells.push(cell);
      return cell;
    });
    return { region, cells: rowCells };
  });
  const topCells = [...cells]
    .sort((a, b) => b.priorityScore - a.priorityScore || b.annualRevenue - a.annualRevenue || a.key.localeCompare(b.key))
    .slice(0, 5);
  const activeCell = cells.find((cell) => cell.key === state.activeMatrixKey)
    || cells.find((cell) => cell.key === state.activeMarketKey)
    || topCells[0]
    || cells[0];

  if (activeCell) state.activeMatrixKey = activeCell.key;

  return {
    categories,
    regions,
    rows,
    cells,
    topCells,
    activeCell,
    totalDemand: cells.reduce((total, cell) => total + cell.demandCount, 0),
    totalSupply: cells.reduce((total, cell) => total + cell.visibleSupply, 0),
    totalVerified: cells.reduce((total, cell) => total + cell.verifiedSupply, 0),
    totalArr: cells.reduce((total, cell) => total + (cell.demandCount || cell.visibleSupply ? cell.annualRevenue : 0), 0)
  };
}

function getMarketSignalCategories(demandSignals) {
  const categories = new Set([
    ...categoryDirectory.map((category) => category.group),
    ...listings.map((listing) => listing.category),
    ...demandSignals.map((signal) => getHuntPlan(signal).category)
  ]);
  return [...categories].sort((a, b) => {
    const order = ["Earthmoving", "Lifting", "Roadwork", "Power", "Transport"];
    const diff = order.indexOf(a) - order.indexOf(b);
    return diff || a.localeCompare(b);
  });
}

function getMarketSignalRegions(demandSignals) {
  const regions = new Set([
    ...listings.map((listing) => listing.region),
    ...demandSignals.map((signal) => signal.region)
  ]);
  categoryDirectory.forEach((category) => {
    category.regions.split(",").map((region) => region.trim()).filter(Boolean).forEach((region) => regions.add(region));
  });
  return [...regions].sort();
}

function getMarketSignalCell(region, category, opportunityMap, demandSignals) {
  const key = `${region}::${category}`;
  const opportunity = opportunityMap.get(key);
  const signals = demandSignals.filter((signal) => signal.region === region && getHuntPlan(signal).category === category);
  const demandCount = signals.reduce((total, signal) => total + Number(signal.count || 1), 0);
  const urgentCount = signals.filter((signal) => signal.urgency === "This week" || signal.urgency === "Next week").length;
  const visibleListings = listings.filter((listing) => listing.region === region && listing.category === category);
  const visibleSupply = visibleListings.length;
  const verifiedSupply = visibleListings.filter((listing) => listing.verified).length;
  const pendingProof = visibleListings.reduce((total, listing) =>
    total + listing.documents.filter((document) => document.toLowerCase().includes("pending")).length, 0
  );
  const directoryMatches = categoryDirectory.filter((item) =>
    item.group === category && item.regions.split(",").map((regionName) => regionName.trim()).includes(region)
  );
  const modeledInventory = directoryMatches.reduce((total, item) =>
    total + Math.max(1, Math.round(item.count / Math.max(1, item.regions.split(",").length))), 0
  );
  const launchTarget = opportunity?.launchListings
    || Math.max(visibleSupply, demandCount ? demandCount * 4 : Math.ceil(modeledInventory / 20));
  const supplyGap = Math.max(0, launchTarget - visibleSupply);
  const annualRevenue = opportunity?.annualRevenue || Math.max(1, launchTarget) * 99;
  const proofScore = visibleSupply
    ? Math.max(0, Math.min(100, Math.round((verifiedSupply / visibleSupply) * 100 - pendingProof * 14)))
    : 0;
  const demandScore = Math.min(42, demandCount * 8 + urgentCount * 6);
  const supplyScore = visibleSupply ? Math.min(22, visibleSupply * 7) : 0;
  const revenueScore = Math.min(18, Math.round(annualRevenue / 90));
  const gapPenalty = Math.min(20, supplyGap * 2);
  const score = Math.max(0, Math.min(100, Math.round(18 + demandScore + supplyScore + proofScore * 0.18 + revenueScore - gapPenalty)));
  const statusClass = score >= 76 && demandCount ? "ready" : score >= 52 || demandCount || visibleSupply ? "review" : "gap";
  const action = demandCount && !visibleSupply ? "Recruit supply"
    : demandCount && supplyGap > 0 ? "Fill gap"
      : visibleSupply && proofScore < 70 ? "Clean proof"
        : demandCount ? "Launch page"
          : visibleSupply ? "Protect supply"
            : "Capture demand";
  const status = statusClass === "ready" ? "Launch" : statusClass === "review" ? "Work" : "Listen";
  const summary = demandCount
    ? `${demandCount} demand signal${demandCount === 1 ? "" : "s"}, ${visibleSupply} visible listing${visibleSupply === 1 ? "" : "s"}, ${supplyGap} supply gap${supplyGap === 1 ? "" : "s"}, proof ${proofScore}/100.`
    : visibleSupply
      ? `${visibleSupply} visible listing${visibleSupply === 1 ? "" : "s"} with proof ${proofScore}/100; capture demand before heavier growth.`
      : `No active signal yet; monitor modeled ${category.toLowerCase()} inventory in ${region}.`;

  return {
    key,
    region,
    category,
    opportunity: Boolean(opportunity),
    signalKey: opportunity?.signalKey || (signals[0] ? getDemandKey(signals[0]) : ""),
    demandCount,
    urgentCount,
    visibleSupply,
    verifiedSupply,
    pendingProof,
    modeledInventory,
    launchTarget,
    supplyGap,
    annualRevenue,
    proofScore,
    score,
    priorityScore: score + demandCount * 5 + (demandCount && supplyGap ? 10 : 0) + (statusClass === "ready" ? 8 : 0),
    status,
    statusClass,
    action,
    summary
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
      renderMarketSignalMatrix();
      renderMarketMaker();
      renderPageFactory();
      renderLaunchRoom();
      renderMarketTwin();
      renderLiquidityFlywheel();
      renderFounderAutopilot();
      renderDemandExchange();
      renderProofDemandRoom();
      renderSupplierCommitmentRoom();
      renderListingActivationRoom();
      renderTrustRevenueLedger();
      renderFounderWorkbench();
      renderFounderMorningBrief();
      renderFounderDailyMoves();
      renderFounderCallSheet();
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

function renderPageFactory() {
  const queue = document.querySelector("#pageFactoryQueue");
  if (!queue) return;

  const model = getPageFactoryModel();
  if (!model.active) return;

  setText("#pageFactoryTitle", model.active.title);
  setText("#pageFactoryBadge", model.badge);

  document.querySelector("#pageFactoryScore").innerHTML = `
    <strong>${model.active.readiness}/100</strong>
    <span>${escapeHtml(model.active.summary)}</span>
  `;

  document.querySelector("#pageFactoryMetrics").innerHTML = [
    ["Ready pages", String(model.readyCount)],
    ["Supplier targets", String(model.supplierTargets)],
    ["Page ARR", `USD ${model.totalArr.toLocaleString()}`],
    ["Demand signals", String(model.demandSignals)]
  ].map(([label, value]) => `
    <span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>
  `).join("");

  queue.innerHTML = model.pages.map((page) => `
    <button type="button" class="page-factory-row ${page.statusClass} ${page.key === model.active.key ? "is-active" : ""}" data-page-key="${escapeHtml(page.key)}">
      <span>
        <strong>${escapeHtml(page.title)}</strong>
        ${escapeHtml(page.slug)}
        <small>${escapeHtml(page.summary)}</small>
      </span>
      <em>${page.readiness}/100</em>
      <small>${page.demandCount} demand / ${page.visibleSupply} supply</small>
      <b>${escapeHtml(page.status)}</b>
    </button>
  `).join("");

  document.querySelector("#pageFactoryGates").innerHTML = model.gates.map((gate, index) => `
    <div class="page-factory-gate ${gate.statusClass}">
      <strong>${index + 1}</strong>
      <span>${escapeHtml(gate.label)}<small>${escapeHtml(gate.detail)}</small></span>
      <em>${escapeHtml(gate.status)}</em>
    </div>
  `).join("");

  document.querySelector("#pageFactoryPack").innerHTML = buildPageFactoryText(model)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");

  document.querySelectorAll("[data-page-key]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeMarketKey = button.dataset.pageKey;
      const selected = getMarketOpportunities().find((item) => item.key === state.activeMarketKey);
      if (selected?.signalKey) state.activeDemandKey = selected.signalKey;
      saveState();
      renderDemandRadar();
      renderSupplierHunt();
      renderMarketSignalMatrix();
      renderMarketMaker();
      renderPageFactory();
      renderLaunchRoom();
      renderMarketTwin();
      renderLiquidityFlywheel();
      renderFounderAutopilot();
      renderDemandExchange();
      renderProofDemandRoom();
      renderSupplierCommitmentRoom();
      renderListingActivationRoom();
      renderTrustRevenueLedger();
      renderFounderWorkbench();
      renderFounderMorningBrief();
      renderFounderDailyMoves();
      renderFounderCallSheet();
      document.querySelector("#page-factory").scrollIntoView({ behavior: "smooth", block: "start" });
      showToast("Market page factory focused.");
    });
  });
}

function getPageFactoryModel() {
  const opportunities = getMarketOpportunities();
  const pages = opportunities
    .map((opportunity) => getPageFactoryPage(opportunity))
    .sort((a, b) => b.readiness - a.readiness || b.demandCount - a.demandCount || a.title.localeCompare(b.title));
  const active = pages.find((page) => page.key === state.activeMarketKey) || pages[0];

  if (active) state.activeMarketKey = active.key;

  const readyCount = pages.filter((page) => page.statusClass === "launch").length;
  const prepareCount = pages.filter((page) => page.statusClass === "prepare").length;
  const supplierTargets = pages.reduce((total, page) => total + page.supplierTarget, 0);
  const totalArr = pages.reduce((total, page) => total + page.annualRevenue, 0);
  const demandSignals = pages.reduce((total, page) => total + page.demandCount, 0);
  const badge = readyCount ? "Ready to publish" : prepareCount ? "Supply work" : "Listen first";

  return {
    pages,
    active,
    gates: active ? getPageFactoryGates(active) : [],
    readyCount,
    prepareCount,
    supplierTargets,
    totalArr,
    demandSignals,
    badge
  };
}

function getPageFactoryPage(opportunity) {
  const matchedListings = listings.filter((listing) =>
    listing.region === opportunity.region && listing.category === opportunity.category
  );
  const verifiedSupply = matchedListings.filter((listing) => listing.verified).length;
  const pendingProof = matchedListings.reduce((total, listing) =>
    total + listing.documents.filter((document) => document.toLowerCase().includes("pending")).length, 0
  );
  const proofGap = Math.max(0, Math.min(3, opportunity.proof.length - verifiedSupply)) + pendingProof;
  const supplyGap = Math.max(0, opportunity.supplyGap);
  const readiness = Math.max(0, Math.min(100, Math.round(
    opportunity.score
    + Math.min(16, verifiedSupply * 7)
    + Math.min(10, opportunity.visibleSupply * 3)
    - Math.min(18, proofGap * 5)
    - Math.min(16, supplyGap * 2)
  )));
  const statusClass = readiness >= 78 ? "launch" : readiness >= 58 ? "prepare" : "watch";
  const status = statusClass === "launch" ? "Launch" : statusClass === "prepare" ? "Prepare" : "Watch";
  const supplierTarget = Math.max(0, opportunity.launchListings - opportunity.visibleSupply);
  const title = `${opportunity.category} equipment rental in ${opportunity.region}`;
  const slug = `/${opportunity.slug}/`;
  const summary = statusClass === "launch"
    ? `${verifiedSupply} verified supplier${verifiedSupply === 1 ? "" : "s"} and ${opportunity.demandCount} demand signal${opportunity.demandCount === 1 ? "" : "s"} make this page publishable.`
    : statusClass === "prepare"
      ? `Recruit ${supplierTarget || 1} more verified listing${supplierTarget === 1 ? "" : "s"} before pushing this page hard.`
      : "Keep collecting buyer demand until supply and proof are stronger.";

  return {
    ...opportunity,
    title,
    slug,
    matchedListings,
    verifiedSupply,
    proofGap,
    readiness,
    status,
    statusClass,
    supplierTarget,
    summary
  };
}

function getPageFactoryGates(active) {
  const supplyStatus = active.visibleSupply >= 2 ? "ready" : active.visibleSupply ? "review" : "gap";
  const proofStatus = active.verifiedSupply >= 1 && active.proofGap <= 1 ? "ready" : active.verifiedSupply ? "review" : "gap";
  const gapStatus = active.supplierTarget <= 2 ? "ready" : active.supplierTarget <= 6 ? "review" : "gap";
  const revenueStatus = active.annualRevenue >= 1200 ? "ready" : active.annualRevenue >= 700 ? "review" : "gap";

  return [
    {
      label: "Demand proof",
      detail: `${active.demandCount} buyer signal${active.demandCount === 1 ? "" : "s"} for ${active.category.toLowerCase()} in ${active.region}.`,
      status: active.demandCount >= 3 ? "Ready" : active.demandCount >= 1 ? "Review" : "Gap",
      statusClass: active.demandCount >= 3 ? "ready" : active.demandCount >= 1 ? "review" : "gap"
    },
    {
      label: "Live supply",
      detail: `${active.visibleSupply} visible listing${active.visibleSupply === 1 ? "" : "s"} on the marketplace.`,
      status: supplyStatus === "ready" ? "Ready" : supplyStatus === "review" ? "Review" : "Gap",
      statusClass: supplyStatus
    },
    {
      label: "Verified proof",
      detail: `${active.verifiedSupply} verified supplier listing${active.verifiedSupply === 1 ? "" : "s"}, ${active.proofGap} proof gap${active.proofGap === 1 ? "" : "s"}.`,
      status: proofStatus === "ready" ? "Ready" : proofStatus === "review" ? "Review" : "Gap",
      statusClass: proofStatus
    },
    {
      label: "Supplier target",
      detail: `${active.supplierTarget} additional paid listing${active.supplierTarget === 1 ? "" : "s"} needed for strong launch coverage.`,
      status: gapStatus === "ready" ? "Ready" : gapStatus === "review" ? "Review" : "Gap",
      statusClass: gapStatus
    },
    {
      label: "Listing revenue",
      detail: `Page can model USD ${active.annualRevenue.toLocaleString()} first-year listing ARR without touching rental payment.`,
      status: revenueStatus === "ready" ? "Ready" : revenueStatus === "review" ? "Review" : "Gap",
      statusClass: revenueStatus
    }
  ];
}

function renderLaunchRoom() {
  const root = document.querySelector("#launchRoomTimeline");
  if (!root) return;

  const model = getLaunchRoomModel();
  if (!model.active) return;

  setText("#launchRoomTitle", `${model.active.region} ${model.active.category} launch sprint`);
  setText("#launchRoomBadge", model.badge);

  document.querySelector("#launchRoomScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${escapeHtml(model.summary)}</span>
  `;

  document.querySelector("#launchRoomMetrics").innerHTML = [
    ["Sprint status", model.badge],
    ["Supplier target", `${model.targetSuppliers} invites`],
    ["First-week ARR", `USD ${model.firstWeekArr.toLocaleString()}`],
    ["Proof gaps", String(model.active.proofGap)]
  ].map(([label, value]) => `
    <span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>
  `).join("");

  root.innerHTML = model.steps.map((step) => `
    <div class="launch-room-step ${step.statusClass}">
      <strong>${escapeHtml(step.day)}</strong>
      <span>${escapeHtml(step.label)}<small>${escapeHtml(step.detail)}</small></span>
      <em>${escapeHtml(step.owner)}</em>
      <b>${escapeHtml(step.status)}</b>
    </div>
  `).join("");

  document.querySelector("#launchRoomSuppliers").innerHTML = model.suppliers.map((supplier) => `
    <button type="button" class="launch-room-supplier ${supplier.statusClass} ${supplier.listingId === state.selectedListingId ? "is-active" : ""}" data-launch-supplier="${escapeHtml(supplier.listingId)}">
      <strong>${supplier.rank}</strong>
      <span>${escapeHtml(supplier.name)}<small>${escapeHtml(supplier.reason)}</small></span>
      <em>${supplier.score}/100</em>
      <b>${escapeHtml(supplier.status)}</b>
    </button>
  `).join("");

  document.querySelector("#launchRoomPacket").innerHTML = buildLaunchRoomText(model)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");

  document.querySelectorAll("[data-launch-supplier]").forEach((button) => {
    button.addEventListener("click", () => {
      const listing = listings.find((item) => item.id === button.dataset.launchSupplier);
      if (!listing) return;
      state.selectedListingId = listing.id;
      state.commandRole = "Founder";
      saveState();
      render();
      document.querySelector("#account-health").scrollIntoView({ behavior: "smooth", block: "start" });
      showToast(`${listing.supplier} opened for launch follow-up.`);
    });
  });
}

function getLaunchRoomModel() {
  const pageModel = getPageFactoryModel();
  const active = pageModel.active;
  if (!active) {
    return { active: null, score: 0, badge: "Listen first", summary: "", targetSuppliers: 0, firstWeekArr: 0, steps: [], suppliers: [] };
  }

  const suppliers = getLaunchSupplierProspects(active);
  const steps = getLaunchRoomSteps(active, suppliers);
  const bestSupplierScore = suppliers[0]?.score || 0;
  const score = Math.max(0, Math.min(100, Math.round(
    active.readiness * 0.5
    + bestSupplierScore * 0.22
    + Math.min(100, active.demandCount * 12) * 0.16
    + (active.annualRevenue >= 1200 ? 12 : 6)
  )));
  const badge = score >= 84 ? "Run sprint" : score >= 68 ? "Prep sprint" : "Recruit first";
  const targetSuppliers = Math.max(3, Math.min(8, active.supplierTarget || active.launchListings || 3));
  const firstWeekArr = Math.min(active.annualRevenue, targetSuppliers * 99);
  const openActions = steps.filter((step) => step.statusClass !== "ready").length;
  const summary = score >= 84
    ? `${active.title} is strong enough for a seven-day founder sprint. Start with ${suppliers[0]?.name || active.persona}.`
    : `${active.title} needs ${openActions} sprint action${openActions === 1 ? "" : "s"} before the founder pushes it hard.`;

  return {
    active,
    pageModel,
    score,
    badge,
    targetSuppliers,
    firstWeekArr,
    openActions,
    steps,
    suppliers,
    summary
  };
}

function getLaunchSupplierProspects(active) {
  return supplierProfiles.map((profile) => {
    const supplierListings = listings.filter((listing) => listing.supplier === profile.supplier);
    const firstListing = supplierListings[0] || listings[0];
    const categoryMatches = supplierListings.filter((listing) => listing.category === active.category).length;
    const regionMatches = supplierListings.filter((listing) => listing.region === active.region).length;
    const proofHits = active.proof.filter((required) => {
      const requiredNeedle = required.toLowerCase().split(" ")[0];
      return profile.proof.some((proof) => proof.toLowerCase().includes(requiredNeedle));
    }).length;
    const fastResponse = profile.response.includes("Under") || profile.response.includes("Same day") || profile.response.includes("Next");
    const score = Math.max(0, Math.min(100,
      42
      + categoryMatches * 16
      + regionMatches * 14
      + proofHits * 5
      + (fastResponse ? 8 : 0)
      - (categoryMatches ? 0 : 12)
      - (regionMatches ? 0 : 6)
    ));
    const statusClass = score >= 78 ? "ready" : score >= 62 ? "review" : "gap";
    const status = statusClass === "ready" ? "Invite" : statusClass === "review" ? "Verify" : "Warm";
    const reason = categoryMatches && regionMatches
      ? `${categoryMatches} matching listing${categoryMatches === 1 ? "" : "s"} in ${active.region}, proof overlap ${proofHits}/${active.proof.length}.`
      : categoryMatches
        ? `${categoryMatches} category match${categoryMatches === 1 ? "" : "es"}; ask for ${active.region} coverage or partner route.`
        : `${profile.branch} can be warmed for ${active.category.toLowerCase()} supply if fleet proof is available.`;

    return {
      name: profile.supplier,
      listingId: firstListing.id,
      score,
      status,
      statusClass,
      reason
    };
  }).sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))
    .slice(0, 5)
    .map((supplier, index) => ({ ...supplier, rank: index + 1 }));
}

function getLaunchRoomSteps(active, suppliers) {
  const demandReady = active.demandCount >= 3;
  const supplyReady = active.visibleSupply >= 2;
  const proofReady = active.proofGap <= 1 && active.verifiedSupply >= 1;
  const supplierReady = suppliers.some((supplier) => supplier.statusClass === "ready");
  const revenueReady = active.annualRevenue >= 1200;

  return [
    {
      day: "D1",
      label: "Publish page shell",
      detail: `${active.slug} with demand proof, direct enquiry rule, and supplier trust placeholders.`,
      owner: "Founder",
      status: active.readiness >= 78 ? "Ready" : "Prep",
      statusClass: active.readiness >= 78 ? "ready" : "review"
    },
    {
      day: "D2",
      label: "Invite supplier anchors",
      detail: `Start with ${suppliers[0]?.name || active.persona}; target ${Math.max(3, active.supplierTarget || 3)} paid listings.`,
      owner: "Growth",
      status: supplierReady ? "Ready" : "Gap",
      statusClass: supplierReady ? "ready" : "gap"
    },
    {
      day: "D3",
      label: "Collect launch proof",
      detail: `${active.proof.join(", ")} before verified badges or serious routing.`,
      owner: "Trust",
      status: proofReady ? "Ready" : "Review",
      statusClass: proofReady ? "ready" : "review"
    },
    {
      day: "D4",
      label: "Open first supply block",
      detail: `${active.visibleSupply} visible listing${active.visibleSupply === 1 ? "" : "s"} now; ${active.supplierTarget} additional listing${active.supplierTarget === 1 ? "" : "s"} still targeted.`,
      owner: "Studio",
      status: supplyReady ? "Ready" : "Gap",
      statusClass: supplyReady ? "ready" : "gap"
    },
    {
      day: "D5",
      label: "Route demand safely",
      detail: `${active.demandCount} demand signal${active.demandCount === 1 ? "" : "s"} can be converted into direct supplier enquiries once proof is clean.`,
      owner: "Desk",
      status: demandReady ? "Ready" : "Review",
      statusClass: demandReady ? "ready" : "review"
    },
    {
      day: "D7",
      label: "Review listing ARR",
      detail: `Target USD ${active.annualRevenue.toLocaleString()} first-year listing ARR without touching rental payment.`,
      owner: "Founder",
      status: revenueReady ? "Ready" : "Review",
      statusClass: revenueReady ? "ready" : "review"
    }
  ];
}

function renderMarketTwin() {
  const root = document.querySelector("#marketTwinScenarios");
  if (!root) return;

  const model = getMarketTwinModel();
  if (!model.active) return;

  setText("#marketTwinTitle", `${model.active.region} ${model.active.category} market twin`);
  setText("#marketTwinBadge", model.badge);

  document.querySelector("#marketTwinScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${escapeHtml(model.summary)}</span>
  `;

  document.querySelector("#marketTwinMetrics").innerHTML = [
    ["Paid listings", `${model.totalListings} after sprint`],
    ["Listing ARR", `USD ${model.annualArr.toLocaleString()}`],
    ["Demand coverage", `${model.demandCoverage}%`],
    ["Trust score", `${model.trustScore}/100`]
  ].map(([label, value]) => `
    <span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>
  `).join("");

  root.innerHTML = model.scenarios.map((scenario) => `
    <button type="button" class="market-twin-scenario ${scenario.key === model.scenario.key ? "is-active" : ""}" data-twin-scenario="${escapeHtml(scenario.key)}">
      <span>
        <strong>${escapeHtml(scenario.label)}</strong>
        ${escapeHtml(scenario.detail)}
        <small>${escapeHtml(scenario.rule)}</small>
      </span>
      <em>${scenario.predictedListings} listings</em>
      <b>${escapeHtml(scenario.posture)}</b>
    </button>
  `).join("");

  document.querySelector("#marketTwinRisks").innerHTML = model.risks.map((risk) => `
    <div class="market-twin-risk ${risk.statusClass}">
      <span>
        <strong>${escapeHtml(risk.label)}</strong>
        ${escapeHtml(risk.detail)}
        <small>${escapeHtml(risk.action)}</small>
      </span>
      <em>${risk.score}/100</em>
      <b>${escapeHtml(risk.status)}</b>
    </div>
  `).join("");

  document.querySelector("#marketTwinVerdict").innerHTML = `
    <div class="market-twin-verdict-head ${escapeHtml(model.verdict.statusClass)}">
      <span>
        <strong>${escapeHtml(model.verdict.label)}</strong>
        ${escapeHtml(model.verdict.detail)}
        <small>${escapeHtml(model.verdict.rule)}</small>
      </span>
      <b>${model.verdict.score}/100</b>
    </div>
    <div class="market-twin-verdict-grid">
      ${model.verdict.controls.map((control) => `
        <div class="market-twin-verdict-control ${escapeHtml(control.statusClass)}">
          <span>
            <strong>${escapeHtml(control.label)}</strong>
            ${escapeHtml(control.detail)}
          </span>
          <em>${escapeHtml(control.status)}</em>
        </div>
      `).join("")}
    </div>
    <div class="market-twin-verdict-actions">
      ${model.verdict.actions.map((action, index) => `
        <div>
          <strong>${index + 1}</strong>
          <span>${escapeHtml(action)}</span>
        </div>
      `).join("")}
    </div>
  `;

  document.querySelector("#marketTwinPacket").innerHTML = buildMarketTwinText(model)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");

  document.querySelectorAll("[data-twin-scenario]").forEach((button) => {
    button.addEventListener("click", () => {
      state.marketTwinScenario = button.dataset.twinScenario;
      saveState();
      renderMarketTwin();
      renderLiquidityFlywheel();
      renderFounderAutopilot();
      renderDemandExchange();
      renderProofDemandRoom();
      renderSupplierCommitmentRoom();
      renderListingActivationRoom();
      renderTrustRevenueLedger();
      renderFounderWorkbench();
      renderFounderMorningBrief();
      renderFounderDailyMoves();
      renderFounderCallSheet();
      showToast(`${button.textContent.trim().split(/\s+/)[0]} twin selected.`);
    });
  });
}

function getMarketTwinModel() {
  const launch = getLaunchRoomModel();
  const active = launch.active;
  if (!active) {
    return { active: null, score: 0, badge: "Listen first", summary: "", scenarios: [], risks: [] };
  }

  const scenarios = getMarketTwinScenarios(active, launch);
  const scenario = scenarios.find((item) => item.key === state.marketTwinScenario) || scenarios[1];
  state.marketTwinScenario = scenario.key;

  const totalListings = Math.max(active.visibleSupply, scenario.predictedListings);
  const annualArr = totalListings * 99;
  const monthlyRevenue = totalListings * 9;
  const demandCoverage = Math.min(100, Math.round((totalListings / Math.max(1, active.launchListings)) * 100));
  const trustScore = Math.max(0, Math.min(100, Math.round(active.readiness + scenario.proofLift - active.proofGap * 3)));
  const responseScore = Math.max(0, Math.min(100, Math.round(launch.score + scenario.responseLift - Math.max(0, active.supplierTarget - scenario.convertedSuppliers) * 2)));
  const score = Math.max(0, Math.min(100, Math.round(
    demandCoverage * 0.28
    + trustScore * 0.28
    + responseScore * 0.22
    + Math.min(100, annualArr / 18) * 0.22
  )));
  const badge = score >= 86 ? "Dominate wedge" : score >= 72 ? "Open wedge" : "Build proof";
  const risks = getMarketTwinRisks({
    active,
    scenario,
    totalListings,
    demandCoverage,
    trustScore,
    responseScore,
    annualArr
  });
  const verdict = getMarketTwinVerdict({
    active,
    scenario,
    risks,
    totalListings,
    demandCoverage,
    trustScore,
    responseScore,
    annualArr,
    monthlyRevenue,
    score
  });
  const summary = score >= 86
    ? `${scenario.label} can turn ${active.title} into a defensible page-led market wedge.`
    : score >= 72
      ? `${scenario.label} can open ${active.title}, but the founder must protect trust and supply density.`
      : `${scenario.label} is still fragile for ${active.title}; proof and supplier density should come first.`;

  return {
    active,
    launch,
    scenarios,
    scenario,
    totalListings,
    annualArr,
    monthlyRevenue,
    demandCoverage,
    trustScore,
    responseScore,
    score,
    badge,
    risks,
    verdict,
    summary
  };
}

function getMarketTwinScenarios(active, launch) {
  const base = [
    {
      key: "lean",
      label: "Lean launch",
      invites: 3,
      conversionRate: 0.45,
      proofLift: 5,
      responseLift: 4,
      posture: "Careful",
      detail: "Use a narrow page, one anchor supplier, and proof-first routing.",
      rule: "Best when trust is still thin and founder time is limited."
    },
    {
      key: "balanced",
      label: "Balanced launch",
      invites: 6,
      conversionRate: 0.5,
      proofLift: 11,
      responseLift: 10,
      posture: "Operate",
      detail: "Recruit several suppliers, publish a useful page, and open direct enquiry routing.",
      rule: "Best default for phase-one listing revenue without over-promising supply."
    },
    {
      key: "aggressive",
      label: "Aggressive launch",
      invites: 10,
      conversionRate: 0.58,
      proofLift: 16,
      responseLift: 15,
      posture: "Attack",
      detail: "Push the page, recruit hard, and turn demand into supplier urgency quickly.",
      rule: "Best when proof is strong and the category can support fast supplier onboarding."
    }
  ];

  return base.map((scenario) => {
    const convertedSuppliers = Math.max(1, Math.round(scenario.invites * scenario.conversionRate));
    const predictedListings = Math.max(active.visibleSupply + convertedSuppliers, Math.min(active.launchListings + convertedSuppliers, active.visibleSupply + scenario.invites));
    return {
      ...scenario,
      convertedSuppliers,
      predictedListings,
      score: Math.min(100, launch.score + scenario.proofLift + scenario.responseLift)
    };
  });
}

function getMarketTwinRisks(context) {
  const supplyScore = Math.min(100, Math.round(context.demandCoverage));
  const trustScore = context.trustScore;
  const responseScore = context.responseScore;
  const revenueScore = Math.min(100, Math.round(context.annualArr / 18));

  return [
    getMarketTwinRisk(
      "Supply density",
      supplyScore,
      `${context.totalListings} modeled paid listing${context.totalListings === 1 ? "" : "s"} against ${context.active.launchListings} launch target.`,
      context.totalListings >= context.active.launchListings ? "Keep page live and recruit depth." : "Recruit more verified listings before scaling traffic."
    ),
    getMarketTwinRisk(
      "Trust burden",
      trustScore,
      `${context.active.proofGap} proof gap${context.active.proofGap === 1 ? "" : "s"} after ${context.scenario.label.toLowerCase()}.`,
      trustScore >= 80 ? "Use verified badges carefully." : "Collect missing documents before routing serious enquiries."
    ),
    getMarketTwinRisk(
      "Lead response",
      responseScore,
      `${context.scenario.invites} supplier invite${context.scenario.invites === 1 ? "" : "s"} with ${context.scenario.convertedSuppliers} modeled conversion${context.scenario.convertedSuppliers === 1 ? "" : "s"}.`,
      responseScore >= 80 ? "Open direct routing and measure reply speed." : "Keep founder follow-up tight until supplier response is proven."
    ),
    getMarketTwinRisk(
      "Revenue pull",
      revenueScore,
      `USD ${context.annualArr.toLocaleString()} modeled listing ARR and USD ${(context.totalListings * 9).toLocaleString()} monthly subscription revenue.`,
      revenueScore >= 80 ? "Protect annual-plan upsell after proof is stable." : "Keep price simple until suppliers see demand."
    )
  ];
}

function getMarketTwinRisk(label, score, detail, action) {
  const statusClass = score >= 80 ? "ready" : score >= 62 ? "review" : "gap";
  return {
    label,
    score,
    detail,
    action,
    statusClass,
    status: statusClass === "ready" ? "Ready" : statusClass === "review" ? "Watch" : "Gap"
  };
}

function getMarketTwinVerdict(context) {
  const riskGaps = context.risks.filter((risk) => risk.statusClass === "gap").length;
  const readyRisks = context.risks.filter((risk) => risk.statusClass === "ready").length;
  const supplyShortfall = Math.max(0, context.active.launchListings - context.totalListings);
  const proofGap = Math.max(0, context.active.proofGap);
  const responseShortfall = Math.max(0, 72 - context.responseScore);
  const annualTarget = Math.max(990, context.active.launchListings * 99);
  const revenueShortfall = Math.max(0, annualTarget - context.annualArr);
  const statusClass = context.score >= 86 && riskGaps === 0
    ? "ready"
    : context.score >= 72 && riskGaps <= 1
      ? "review"
      : "gap";
  const label = statusClass === "ready"
    ? "Scale the wedge"
    : statusClass === "review"
      ? "Open carefully"
      : "Build proof first";
  const detail = statusClass === "ready"
    ? `${context.scenario.label} can open traffic while the founder protects annual listing conversion.`
    : statusClass === "review"
      ? `${context.scenario.label} can start, but only with controlled enquiry routing and active supplier follow-up.`
      : `${context.scenario.label} should stay in proof mode until supply, trust, response, and revenue pull improve.`;
  const rule = statusClass === "ready"
    ? "Route verified enquiries, measure replies, and push annual listing plans after proof is visible."
    : statusClass === "review"
      ? "Open the page, cap traffic, recruit suppliers, and route only proof-backed direct enquiries."
      : "Hold heavy traffic; recruit verified listings and close proof gaps before scaling.";
  const controls = [
    getMarketTwinVerdictControl({
      label: "Traffic gate",
      status: context.demandCoverage >= 70 && riskGaps <= 1 ? "Open" : "Hold",
      statusClass: context.demandCoverage >= 70 && riskGaps <= 1 ? "ready" : "gap",
      detail: `${context.demandCoverage}% demand coverage with ${riskGaps} gap${riskGaps === 1 ? "" : "s"} on the twin.`
    }),
    getMarketTwinVerdictControl({
      label: "Supplier gate",
      status: supplyShortfall ? "Recruit" : "Ready",
      statusClass: supplyShortfall ? "gap" : "ready",
      detail: supplyShortfall ? `${supplyShortfall} more verified paid listing${supplyShortfall === 1 ? "" : "s"} needed.` : "Launch target is covered by modeled listings."
    }),
    getMarketTwinVerdictControl({
      label: "Proof gate",
      status: proofGap ? "Fix" : "Ready",
      statusClass: proofGap ? "review" : "ready",
      detail: proofGap ? `${proofGap} document or proof gap${proofGap === 1 ? "" : "s"} still affects trust.` : "Proof burden is clean for this twin."
    }),
    getMarketTwinVerdictControl({
      label: "Response gate",
      status: responseShortfall ? "Chase" : "Ready",
      statusClass: responseShortfall ? "gap" : "ready",
      detail: responseShortfall ? `Supplier response needs ${responseShortfall} more point${responseShortfall === 1 ? "" : "s"}.` : "Response score can support direct enquiries."
    }),
    getMarketTwinVerdictControl({
      label: "Revenue gate",
      status: revenueShortfall ? "Build" : "Ready",
      statusClass: revenueShortfall ? "review" : "ready",
      detail: revenueShortfall ? `USD ${revenueShortfall.toLocaleString()} ARR short of the first credible wedge.` : `USD ${context.annualArr.toLocaleString()} modeled annual listing revenue.`
    }),
    getMarketTwinVerdictControl({
      label: "Payment gate",
      status: "Locked",
      statusClass: "ready",
      detail: "0% rental take; buyer pays the rental company directly."
    })
  ];
  const actions = [
    supplyShortfall ? `Recruit ${supplyShortfall} more verified paid listing${supplyShortfall === 1 ? "" : "s"} before opening serious traffic.` : "Keep supplier density fresh and ask each anchor supplier for annual listing commitment.",
    proofGap ? `Close ${proofGap} proof gap${proofGap === 1 ? "" : "s"} before routing high-value buyers.` : "Use proof strength in the supplier pitch and buyer page.",
    responseShortfall ? "Keep founder follow-up tight until supplier replies can support buyer expectations." : "Route direct enquiries and measure supplier reply speed.",
    revenueShortfall ? "Keep USD 9/99 pricing simple and sell demand proof before upsell." : "Convert the strongest suppliers to annual listing plans after first proof.",
    "Do not introduce rental commission until the direct deal trail proves quote, award, response, and mobilization value."
  ];

  return {
    label,
    detail,
    rule,
    score: context.score,
    statusClass,
    readyRisks,
    riskGaps,
    controls,
    actions
  };
}

function getMarketTwinVerdictControl({ label, status, statusClass, detail }) {
  return {
    label,
    status,
    statusClass,
    detail
  };
}

function renderLiquidityFlywheel() {
  const root = document.querySelector("#liquidityFlywheelLoops");
  if (!root) return;

  const model = getLiquidityFlywheelModel();
  if (!model.active) return;

  setText("#liquidityFlywheelTitle", `${model.active.region} ${model.active.category} flywheel`);
  setText("#liquidityFlywheelBadge", model.badge);

  document.querySelector("#liquidityFlywheelScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${escapeHtml(model.summary)}</span>
  `;

  document.querySelector("#liquidityFlywheelMetrics").innerHTML = [
    ["Bottleneck", model.bottleneck.label],
    ["Compounding loop", model.strongest.label],
    ["Revenue pull", `USD ${model.twin.annualArr.toLocaleString()}`],
    ["Next action", model.bottleneck.status]
  ].map(([label, value]) => `
    <span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>
  `).join("");

  root.innerHTML = model.loops.map((loop, index) => `
    <div class="liquidity-flywheel-loop ${loop.statusClass}">
      <strong>${index + 1}</strong>
      <span>
        ${escapeHtml(loop.label)}
        <small>${escapeHtml(loop.detail)}</small>
      </span>
      <em>${loop.score}/100</em>
      <b>${escapeHtml(loop.status)}</b>
    </div>
  `).join("");

  document.querySelector("#liquidityFlywheelBottlenecks").innerHTML = model.fixes.map((fix, index) => `
    <div class="liquidity-flywheel-fix ${fix.statusClass}">
      <strong>${index + 1}</strong>
      <span>
        ${escapeHtml(fix.label)}
        <small>${escapeHtml(fix.detail)}</small>
      </span>
      <em>${escapeHtml(fix.owner)}</em>
      <b>${escapeHtml(fix.status)}</b>
    </div>
  `).join("");

  document.querySelector("#liquidityFlywheelPacket").innerHTML = buildLiquidityFlywheelText(model)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");
}

function getLiquidityFlywheelModel() {
  const twin = getMarketTwinModel();
  const active = twin.active;
  if (!active) {
    return { active: null, score: 0, badge: "Listen first", summary: "", loops: [], fixes: [] };
  }

  const demandScore = Math.min(100, Math.round(active.demandCount * 13 + active.urgencyHits * 9 + twin.demandCoverage * 0.25));
  const supplyScore = Math.min(100, Math.round(twin.demandCoverage + Math.min(18, twin.totalListings * 2)));
  const trustScore = twin.trustScore;
  const responseScore = twin.responseScore;
  const revenueScore = Math.min(100, Math.round(twin.annualArr / 18));

  const loops = [
    getLiquidityLoop(
      "Demand to page",
      demandScore,
      `${active.demandCount} demand signal${active.demandCount === 1 ? "" : "s"} make ${active.title} worth a focused page.`,
      "Capture more unmet searches and keep the page tied to real buyer language."
    ),
    getLiquidityLoop(
      "Page to supply",
      supplyScore,
      `${twin.totalListings} modeled paid listing${twin.totalListings === 1 ? "" : "s"} cover ${twin.demandCoverage}% of launch target.`,
      "Recruit anchor suppliers until the page has enough visible supply to feel real."
    ),
    getLiquidityLoop(
      "Supply to trust",
      trustScore,
      `${active.verifiedSupply} verified listing${active.verifiedSupply === 1 ? "" : "s"} and ${active.proofGap} proof gap${active.proofGap === 1 ? "" : "s"}.`,
      "Close license, insurance, inspection, operator, or photo proof before pushing traffic."
    ),
    getLiquidityLoop(
      "Trust to response",
      responseScore,
      `${twin.scenario.convertedSuppliers} modeled supplier conversion${twin.scenario.convertedSuppliers === 1 ? "" : "s"} under the ${twin.scenario.label.toLowerCase()} scenario.`,
      "Measure supplier response speed before adding booking rails or heavier buyer promises."
    ),
    getLiquidityLoop(
      "Response to revenue",
      revenueScore,
      `USD ${twin.annualArr.toLocaleString()} modeled listing ARR while rental payment stays direct.`,
      "Use direct enquiry proof to convert monthly listings into annual supplier plans."
    )
  ];

  const sorted = [...loops].sort((a, b) => a.score - b.score);
  const bottleneck = sorted[0];
  const strongest = sorted[sorted.length - 1];
  const score = Math.round(loops.reduce((total, loop) => total + loop.score, 0) / loops.length);
  const badge = score >= 84 && bottleneck.score >= 70 ? "Compounding" : score >= 70 ? "Turning" : "Founder push";
  const summary = badge === "Compounding"
    ? `${active.title} is close to a self-reinforcing supplier and buyer loop. Protect ${bottleneck.label.toLowerCase()}.`
    : badge === "Turning"
      ? `${active.title} has a working flywheel, but ${bottleneck.label.toLowerCase()} still slows compounding.`
      : `${active.title} still needs founder force. Fix ${bottleneck.label.toLowerCase()} before scaling traffic.`;
  const fixes = getLiquidityFixes(loops, active, twin);

  return {
    active,
    twin,
    loops,
    fixes,
    bottleneck,
    strongest,
    score,
    badge,
    summary
  };
}

function getLiquidityLoop(label, score, detail, action) {
  const statusClass = score >= 80 ? "ready" : score >= 62 ? "review" : "gap";
  return {
    label,
    score,
    detail,
    action,
    statusClass,
    status: statusClass === "ready" ? "Ready" : statusClass === "review" ? "Watch" : "Gap"
  };
}

function getLiquidityFixes(loops, active, twin) {
  return [...loops]
    .sort((a, b) => a.score - b.score)
    .slice(0, 3)
    .map((loop) => {
      const owner = loop.label.includes("Demand") ? "Growth"
        : loop.label.includes("Page") ? "Founder"
          : loop.label.includes("Trust") ? "Trust"
            : loop.label.includes("Response") ? "Success"
              : "Revenue";
      const detail = loop.label.includes("Revenue")
        ? `${twin.totalListings} paid listing${twin.totalListings === 1 ? "" : "s"} can become USD ${twin.annualArr.toLocaleString()} ARR if supplier ROI is visible.`
        : loop.action;
      return {
        label: `Fix ${loop.label.toLowerCase()}`,
        detail,
        owner,
        status: loop.status,
        statusClass: loop.statusClass,
        market: active.title
      };
    });
}

function renderFounderAutopilot() {
  const queueRoot = document.querySelector("#founderAutopilotQueue");
  if (!queueRoot) return;

  const model = getFounderAutopilotModel();
  if (!model.active) return;

  setText("#founderAutopilotTitle", `${model.active.region} ${model.active.category} founder autopilot`);
  setText("#founderAutopilotBadge", model.badge);

  document.querySelector("#founderAutopilotScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${escapeHtml(model.summary)}</span>
  `;

  document.querySelector("#founderAutopilotMetrics").innerHTML = [
    ["First command", model.primary.owner],
    ["Bottleneck", model.flywheel.bottleneck.label],
    ["ARR unlocked", `USD ${model.totalImpactArr.toLocaleString()}`],
    ["Open commands", String(model.openCommandCount)]
  ].map(([label, value]) => `
    <span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>
  `).join("");

  queueRoot.innerHTML = model.commands.map((command, index) => `
    <button type="button" class="founder-autopilot-command ${command.statusClass} ${index === 0 ? "is-primary" : ""}" data-autopilot-anchor="${escapeHtml(command.anchor)}">
      <strong>${index + 1}</strong>
      <span>
        ${escapeHtml(command.label)}
        <small>${escapeHtml(command.detail)}</small>
      </span>
      <em>${escapeHtml(command.owner)} - ${escapeHtml(command.due)}</em>
      <b>${escapeHtml(command.status)}</b>
    </button>
  `).join("");

  document.querySelector("#founderAutopilotImpact").innerHTML = model.impactRows.map((row, index) => `
    <div class="founder-autopilot-impact-row ${row.statusClass}">
      <strong>${index + 1}</strong>
      <span>
        ${escapeHtml(row.label)}
        <small>${escapeHtml(row.detail)}</small>
      </span>
      <em>USD ${row.impactArr.toLocaleString()}</em>
      <b>${escapeHtml(row.status)}</b>
    </div>
  `).join("");

  document.querySelector("#founderAutopilotPacket").innerHTML = buildFounderAutopilotText(model)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");

  document.querySelectorAll("[data-autopilot-anchor]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector(button.dataset.autopilotAnchor);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      showToast("Autopilot command opened.");
    });
  });
}

function getFounderAutopilotModel() {
  const flywheel = getLiquidityFlywheelModel();
  const active = flywheel.active;
  if (!active) {
    return {
      active: null,
      flywheel,
      score: 0,
      badge: "Listen first",
      summary: "",
      primary: null,
      commands: [],
      impactRows: [],
      totalImpactArr: 0,
      openCommandCount: 0
    };
  }

  const commands = getFounderAutopilotCommands(flywheel);
  const primary = commands[0];
  const totalImpactArr = commands.reduce((total, command) => total + command.impactArr, 0);
  const openCommandCount = commands.filter((command) => command.statusClass !== "ready").length;
  const actionLift = Math.min(14, Math.round((totalImpactArr / Math.max(99, flywheel.twin.annualArr)) * 14));
  const score = Math.max(0, Math.min(100, Math.round(flywheel.score + actionLift - openCommandCount * 4)));
  const badge = getFounderAutopilotStatus(score, openCommandCount);
  const summary = `Start with ${primary.owner}: ${primary.label}. This turns ${flywheel.bottleneck.label.toLowerCase()} into owned weekly work for ${active.title}.`;
  const impactRows = commands.map((command) => ({
    label: command.label,
    detail: `${command.owner} owns ${command.due.toLowerCase()} execution through ${command.anchor.replace("#", "")}.`,
    status: command.status,
    statusClass: command.statusClass,
    impactArr: command.impactArr
  }));

  return {
    active,
    flywheel,
    score,
    badge,
    summary,
    primary,
    commands,
    impactRows,
    totalImpactArr,
    openCommandCount
  };
}

function getFounderAutopilotCommands(flywheel) {
  const impactWeights = [0.36, 0.22, 0.14];
  const dueWindows = ["Today", "48h", "This week"];
  const commands = flywheel.fixes.map((fix, index) => {
    const loop = flywheel.loops.find((item) => fix.label.toLowerCase().includes(item.label.toLowerCase())) || flywheel.bottleneck;
    const status = fix.statusClass === "ready" ? "Protect" : fix.statusClass === "review" ? "Tighten" : "Dispatch";
    const urgency = Math.max(18, Math.min(99, 100 - loop.score + index * 5));
    const impactArr = Math.max(99, Math.round(flywheel.twin.annualArr * impactWeights[index]));

    return {
      label: `Repair ${loop.label.toLowerCase()}`,
      detail: fix.detail,
      owner: fix.owner,
      due: dueWindows[index],
      status,
      statusClass: fix.statusClass,
      urgency,
      impactArr,
      anchor: getAutopilotOwnerAnchor(fix.owner)
    };
  });

  const protectOwner = getAutopilotOwnerForLoop(flywheel.strongest.label);
  commands.push({
    label: `Protect ${flywheel.strongest.label.toLowerCase()}`,
    detail: flywheel.strongest.action,
    owner: protectOwner,
    due: "This week",
    status: "Protect",
    statusClass: "ready",
    urgency: Math.max(12, 100 - flywheel.strongest.score),
    impactArr: Math.max(99, Math.round(flywheel.twin.annualArr * 0.1)),
    anchor: getAutopilotOwnerAnchor(protectOwner)
  });

  return commands.sort((a, b) => b.urgency - a.urgency || b.impactArr - a.impactArr);
}

function getFounderAutopilotStatus(score, openCommandCount) {
  if (score >= 84 && openCommandCount <= 1) return "Autopilot ready";
  if (score >= 70) return "Run this week";
  return "Founder push";
}

function getAutopilotOwnerForLoop(label) {
  return label.includes("Demand") ? "Growth"
    : label.includes("Page") ? "Founder"
      : label.includes("Trust") ? "Trust"
        : label.includes("Response") ? "Success"
          : "Revenue";
}

function getAutopilotOwnerAnchor(owner) {
  return owner === "Growth" ? "#growth"
    : owner === "Trust" ? "#proof-vault"
      : owner === "Success" ? "#supplier-success"
        : owner === "Revenue" ? "#revenue-desk"
          : "#launch-room";
}

function renderDemandExchange() {
  const ticketRoot = document.querySelector("#demandExchangeTickets");
  if (!ticketRoot) return;

  const model = getDemandExchangeModel();
  if (!model.active) return;

  setText("#demandExchangeTitle", `${model.active.region} ${model.active.category} demand exchange`);
  setText("#demandExchangeBadge", model.badge);

  document.querySelector("#demandExchangeScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${escapeHtml(model.summary)}</span>
  `;

  document.querySelector("#demandExchangeMetrics").innerHTML = [
    ["Buyer signals", String(model.active.demandCount)],
    ["Supply gap", `${model.active.supplyGap} listings`],
    ["Supplier pull", model.badge],
    ["Exchange ARR", `USD ${model.exchangeArr.toLocaleString()}`]
  ].map(([label, value]) => `
    <span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>
  `).join("");

  ticketRoot.innerHTML = model.tickets.map((ticket, index) => `
    <button type="button" class="demand-exchange-ticket ${ticket.statusClass} ${ticket.key === model.active.key ? "is-active" : ""}" data-exchange-key="${escapeHtml(ticket.key)}">
      <strong>${index + 1}</strong>
      <span>
        ${escapeHtml(ticket.title)}
        <small>${escapeHtml(ticket.detail)}</small>
      </span>
      <em>${ticket.pullScore}/100</em>
      <b>${escapeHtml(ticket.status)}</b>
    </button>
  `).join("");

  document.querySelector("#demandExchangeLanes").innerHTML = model.lanes.map((lane, index) => `
    <div class="demand-exchange-lane ${lane.statusClass}">
      <strong>${index + 1}</strong>
      <span>
        ${escapeHtml(lane.label)}
        <small>${escapeHtml(lane.detail)}</small>
      </span>
      <em>${escapeHtml(lane.value)}</em>
      <b>${escapeHtml(lane.status)}</b>
    </div>
  `).join("");

  document.querySelector("#demandExchangePacket").innerHTML = buildDemandExchangeText(model)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");

  document.querySelectorAll("[data-exchange-key]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeMarketKey = button.dataset.exchangeKey;
      const selected = getMarketOpportunities().find((item) => item.key === state.activeMarketKey);
      if (selected?.signalKey) state.activeDemandKey = selected.signalKey;
      saveState();
      renderDemandRadar();
      renderSupplierHunt();
      renderMarketSignalMatrix();
      renderMarketMaker();
      renderPageFactory();
      renderLaunchRoom();
      renderMarketTwin();
      renderLiquidityFlywheel();
      renderFounderAutopilot();
      renderDemandExchange();
      renderProofDemandRoom();
      renderSupplierCommitmentRoom();
      renderListingActivationRoom();
      renderTrustRevenueLedger();
      renderFounderWorkbench();
      renderFounderMorningBrief();
      renderFounderDailyMoves();
      renderFounderCallSheet();
      showToast("Demand Exchange market selected.");
    });
  });
}

function getDemandExchangeModel() {
  const opportunities = getMarketOpportunities();
  const active = opportunities.length ? getActiveMarketOpportunity(opportunities) : null;
  if (!active) {
    return {
      active: null,
      tickets: [],
      lanes: [],
      score: 0,
      badge: "Listen first",
      summary: "",
      exchangeArr: 0
    };
  }

  const tickets = opportunities.map((opportunity) => getDemandExchangeTicket(opportunity));
  const activeTicket = tickets.find((ticket) => ticket.key === active.key) || tickets[0];
  const lanes = getDemandExchangeLanes(active, activeTicket);
  const exchangeArr = tickets.reduce((total, ticket) => total + ticket.annualRevenue, 0);
  const score = activeTicket.pullScore;
  const badge = score >= 82 ? "Supplier pull" : score >= 62 ? "Recruit now" : "Seed demand";
  const summary = score >= 82
    ? `${active.title || `${active.region} ${active.category}`} has enough visible demand to invite suppliers with confidence.`
    : score >= 62
      ? `${active.region} ${active.category} has a useful gap. Recruit anchor suppliers and prove response before scaling.`
      : `${active.region} ${active.category} needs more demand capture before it becomes a strong supplier magnet.`;

  return {
    active,
    activeTicket,
    tickets,
    lanes,
    score,
    badge,
    summary,
    exchangeArr
  };
}

function getDemandExchangeTicket(opportunity) {
  const zeroSupplyLift = opportunity.visibleSupply === 0 ? 10 : 0;
  const gapLift = Math.min(24, opportunity.supplyGap * 3);
  const urgencyLift = Math.min(18, opportunity.urgencyHits * 6);
  const pullScore = Math.max(0, Math.min(100, Math.round(opportunity.score * 0.52 + gapLift + urgencyLift + zeroSupplyLift)));
  const statusClass = pullScore >= 82 ? "ready" : pullScore >= 62 ? "review" : "gap";
  const needed = opportunity.supplyGap || Math.max(1, Math.ceil(opportunity.launchListings * 0.35));

  return {
    key: opportunity.key,
    title: `${opportunity.region} ${opportunity.category}`,
    detail: `${opportunity.demandCount} buyer signal${opportunity.demandCount === 1 ? "" : "s"}, ${needed} listing${needed === 1 ? "" : "s"} to recruit, USD ${opportunity.annualRevenue.toLocaleString()} first-year listing ARR.`,
    pullScore,
    statusClass,
    status: statusClass === "ready" ? "Invite" : statusClass === "review" ? "Warm" : "Capture",
    demandCount: opportunity.demandCount,
    supplyGap: opportunity.supplyGap,
    annualRevenue: opportunity.annualRevenue,
    persona: opportunity.persona,
    proof: opportunity.proof
  };
}

function getDemandExchangeLanes(active, ticket) {
  const proofReady = active.proof.length >= 3;
  const supplierNeed = active.supplyGap || Math.max(1, Math.ceil(active.launchListings * 0.35));

  return [
    {
      label: "Prove buyer demand",
      detail: `${active.demandCount} captured search signal${active.demandCount === 1 ? "" : "s"} can become the supplier hook.`,
      value: `${active.demandCount} signals`,
      status: active.demandCount >= 3 ? "Ready" : "Collect",
      statusClass: active.demandCount >= 3 ? "ready" : "review"
    },
    {
      label: "Show the supply gap",
      detail: `${active.visibleSupply} live listing${active.visibleSupply === 1 ? "" : "s"} are visible against a ${active.launchListings} listing launch target.`,
      value: `${supplierNeed} needed`,
      status: active.supplyGap > 0 ? "Gap" : "Covered",
      statusClass: active.supplyGap > 0 ? "gap" : "ready"
    },
    {
      label: "Ask for proof",
      detail: `Request ${active.proof.slice(0, 3).join(", ").toLowerCase()} before a verified badge appears.`,
      value: proofReady ? "Proof list" : "Define proof",
      status: proofReady ? "Ready" : "Review",
      statusClass: proofReady ? "ready" : "review"
    },
    {
      label: "Convert to listing SaaS",
      detail: `Position the opportunity as USD ${active.annualRevenue.toLocaleString()} first-year listing visibility, no rental commission.`,
      value: `USD ${active.annualRevenue.toLocaleString()}`,
      status: ticket.status,
      statusClass: ticket.statusClass
    }
  ];
}

function renderProofDemandRoom() {
  const evidenceRoot = document.querySelector("#proofDemandEvidence");
  if (!evidenceRoot) return;

  const model = getProofDemandRoomModel();
  if (!model.active) return;

  setText("#proofDemandTitle", `${model.active.region} ${model.active.category} proof room`);
  setText("#proofDemandBadge", model.badge);

  document.querySelector("#proofDemandScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${escapeHtml(model.summary)}</span>
  `;

  document.querySelector("#proofDemandMetrics").innerHTML = [
    ["Supplier answer", model.primaryObjection.label],
    ["Demand proof", `${model.active.demandCount} signals`],
    ["Trust proof", `${model.active.proof.length} asks`],
    ["Listing ROI", `USD ${model.proofValue.toLocaleString()}`]
  ].map(([label, value]) => `
    <span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>
  `).join("");

  evidenceRoot.innerHTML = model.evidence.map((item, index) => `
    <div class="proof-demand-evidence-row ${item.statusClass}">
      <strong>${index + 1}</strong>
      <span>
        ${escapeHtml(item.label)}
        <small>${escapeHtml(item.detail)}</small>
      </span>
      <em>${escapeHtml(item.value)}</em>
      <b>${escapeHtml(item.status)}</b>
    </div>
  `).join("");

  document.querySelector("#proofDemandObjections").innerHTML = model.objections.map((item, index) => `
    <div class="proof-demand-objection ${item.statusClass}">
      <strong>${index + 1}</strong>
      <span>
        ${escapeHtml(item.label)}
        <small>${escapeHtml(item.answer)}</small>
      </span>
      <em>${escapeHtml(item.owner)}</em>
      <b>${escapeHtml(item.status)}</b>
    </div>
  `).join("");

  document.querySelector("#proofDemandPacket").innerHTML = buildProofDemandText(model)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");
}

function getProofDemandRoomModel() {
  const exchange = getDemandExchangeModel();
  const active = exchange.active;
  if (!active) {
    return {
      active: null,
      exchange,
      score: 0,
      badge: "Listen first",
      summary: "",
      evidence: [],
      objections: [],
      primaryObjection: null,
      proofValue: 0
    };
  }

  const evidence = getProofDemandEvidence(active, exchange.activeTicket);
  const objections = getProofDemandObjections(active, exchange);
  const readyEvidence = evidence.filter((item) => item.statusClass === "ready").length;
  const objectionScore = objections.filter((item) => item.statusClass !== "gap").length * 7;
  const proofValue = Math.max(active.annualRevenue, Math.round(exchange.exchangeArr * 0.32));
  const score = Math.max(0, Math.min(100, Math.round(exchange.score * 0.52 + readyEvidence * 8 + objectionScore)));
  const badge = score >= 84 ? "Proof ready" : score >= 68 ? "Sales ready" : "Collect proof";
  const primaryObjection = objections[0];
  const summary = score >= 84
    ? `${active.region} ${active.category} has enough proof to invite suppliers with a demand-backed listing offer.`
    : score >= 68
      ? `${active.region} ${active.category} can be sold now, but the proof pack should stay honest about the open gap.`
      : `${active.region} ${active.category} needs stronger evidence before supplier outreach feels undeniable.`;

  return {
    active,
    exchange,
    score,
    badge,
    summary,
    evidence,
    objections,
    primaryObjection,
    proofValue
  };
}

function getProofDemandEvidence(active, ticket) {
  const supplierNeed = active.supplyGap || Math.max(1, Math.ceil(active.launchListings * 0.35));
  const demandReady = active.demandCount >= 3;
  const gapReady = supplierNeed > 0;
  const proofReady = active.proof.length >= 3;
  const roiReady = active.annualRevenue >= 900;

  return [
    {
      label: "Buyer demand captured",
      detail: `${active.demandCount} buyer signal${active.demandCount === 1 ? "" : "s"} are already tied to this market page.`,
      value: `${active.demandCount} signals`,
      status: demandReady ? "Ready" : "Build",
      statusClass: demandReady ? "ready" : "review"
    },
    {
      label: "Supply shortage visible",
      detail: `${active.visibleSupply} live listing${active.visibleSupply === 1 ? "" : "s"} against ${active.launchListings} launch listing target.`,
      value: `${supplierNeed} needed`,
      status: gapReady ? "Open" : "Covered",
      statusClass: gapReady ? "ready" : "review"
    },
    {
      label: "Verification proof defined",
      detail: `Ask for ${active.proof.slice(0, 3).join(", ").toLowerCase()} before promising a verified supplier badge.`,
      value: `${active.proof.length} checks`,
      status: proofReady ? "Ready" : "Define",
      statusClass: proofReady ? "ready" : "gap"
    },
    {
      label: "Listing ROI visible",
      detail: `A ${active.launchListings} listing wedge models USD ${active.annualRevenue.toLocaleString()} first-year listing ARR.`,
      value: `USD ${active.annualRevenue.toLocaleString()}`,
      status: roiReady ? "Clear" : "Small",
      statusClass: roiReady ? "ready" : "review"
    },
    {
      label: "Direct payment promise",
      detail: "The supplier keeps the rental relationship and payment. Heavyster earns only from active listings in phase one.",
      value: "0% take",
      status: ticket.status,
      statusClass: "ready"
    }
  ];
}

function getProofDemandObjections(active, exchange) {
  const supplyGap = active.supplyGap || Math.max(1, Math.ceil(active.launchListings * 0.35));
  const urgent = active.urgencyHits > 0;

  return [
    {
      label: "We already get rental enquiries.",
      answer: `Good. Heavyster adds searchable demand proof for ${active.region} ${active.category} and routes direct enquiries without taking rental payment.`,
      owner: "Founder",
      status: "Answer",
      statusClass: "ready"
    },
    {
      label: "We do not want marketplace commission.",
      answer: "Phase one is listing SaaS only: USD 9 monthly or USD 99 yearly per active listing, and customer payment stays direct.",
      owner: "Revenue",
      status: "Answer",
      statusClass: "ready"
    },
    {
      label: "Will serious buyers trust the listing?",
      answer: `Trust comes from ${active.proof.slice(0, 3).join(", ").toLowerCase()}, fresh availability, and a verified supplier profile before high-value enquiries are routed.`,
      owner: "Trust",
      status: active.proof.length >= 3 ? "Ready" : "Tighten",
      statusClass: active.proof.length >= 3 ? "ready" : "review"
    },
    {
      label: "Is this urgent enough for our team?",
      answer: urgent
        ? `${active.urgencyHits} urgent signal${active.urgencyHits === 1 ? "" : "s"} and ${supplyGap} open listing slot${supplyGap === 1 ? "" : "s"} make this a near-term supplier pull.`
        : `${exchange.score}/100 supplier pull means start with a small fleet lane, then expand after response proof.`,
      owner: "Growth",
      status: urgent ? "Now" : "Warm",
      statusClass: urgent ? "ready" : "review"
    }
  ];
}

function renderSupplierCommitmentRoom() {
  const packageRoot = document.querySelector("#supplierCommitmentPackages");
  if (!packageRoot) return;

  const model = getSupplierCommitmentModel();
  if (!model.active) return;

  setText("#supplierCommitmentTitle", `${model.active.region} ${model.active.category} commitment`);
  setText("#supplierCommitmentBadge", model.badge);

  document.querySelector("#supplierCommitmentScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${escapeHtml(model.summary)}</span>
  `;

  document.querySelector("#supplierCommitmentMetrics").innerHTML = [
    ["Recommended package", model.recommendedPackage.label],
    ["Paid listings", `${model.recommendedPackage.listings} machines`],
    ["Annual close", `USD ${model.recommendedPackage.annualRevenue.toLocaleString()}`],
    ["Go-live gates", `${model.readyGateCount}/${model.gates.length} ready`]
  ].map(([label, value]) => `
    <span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>
  `).join("");

  packageRoot.innerHTML = model.packages.map((item, index) => `
    <button type="button" class="supplier-commitment-package ${item.statusClass} ${item.id === model.recommendedPackage.id ? "is-recommended" : ""}" data-commitment-anchor="#pricing">
      <strong>${index + 1}</strong>
      <span>
        ${escapeHtml(item.label)}
        <small>${escapeHtml(item.detail)}</small>
      </span>
      <em>USD ${item.annualRevenue.toLocaleString()}/yr</em>
      <b>${escapeHtml(item.status)}</b>
    </button>
  `).join("");

  document.querySelector("#supplierCommitmentGates").innerHTML = model.gates.map((gate, index) => `
    <div class="supplier-commitment-gate ${gate.statusClass}">
      <strong>${index + 1}</strong>
      <span>
        ${escapeHtml(gate.label)}
        <small>${escapeHtml(gate.detail)}</small>
      </span>
      <em>${escapeHtml(gate.owner)}</em>
      <b>${escapeHtml(gate.status)}</b>
    </div>
  `).join("");

  document.querySelector("#supplierCommitmentPacket").innerHTML = buildSupplierCommitmentText(model)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");

  document.querySelectorAll("[data-commitment-anchor]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector(button.dataset.commitmentAnchor);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      showToast("Listing pricing opened.");
    });
  });
}

function getSupplierCommitmentModel() {
  const proof = getProofDemandRoomModel();
  const active = proof.active;
  if (!active) {
    return {
      active: null,
      proof,
      score: 0,
      badge: "Listen first",
      summary: "",
      packages: [],
      gates: [],
      recommendedPackage: null,
      readyGateCount: 0
    };
  }

  const packages = getSupplierCommitmentPackages(active, proof);
  const recommendedPackage = packages.find((item) => item.recommended) || packages[0];
  const gates = getSupplierCommitmentGates(active, proof, recommendedPackage);
  const readyGateCount = gates.filter((gate) => gate.statusClass === "ready").length;
  const score = Math.max(0, Math.min(100, Math.round(proof.score * 0.5 + recommendedPackage.closeScore * 0.32 + readyGateCount * 5)));
  const badge = score >= 84 ? "Close now" : score >= 68 ? "Close with proof" : "Nurture";
  const summary = score >= 84
    ? `${active.region} ${active.category} is ready for a paid listing close without touching rental payment.`
    : score >= 68
      ? `${active.region} ${active.category} can close with a focused starter package and honest proof gates.`
      : `${active.region} ${active.category} needs more proof before asking for a paid listing commitment.`;

  return {
    active,
    proof,
    score,
    badge,
    summary,
    packages,
    gates,
    recommendedPackage,
    readyGateCount
  };
}

function getSupplierCommitmentPackages(active, proof) {
  const baseNeed = active.supplyGap || Math.max(3, Math.ceil(active.launchListings * 0.35));
  const starter = Math.max(3, Math.min(8, baseNeed));
  const anchor = Math.max(starter + 2, Math.min(16, active.launchListings));
  const annual = Math.max(anchor, Math.min(24, active.launchListings + Math.ceil(active.demandCount / 2)));

  return [
    getCommitmentPackage(
      "starter",
      "Starter proof package",
      starter,
      `Start with the machines that match current ${active.region} buyer demand and clear the minimum proof gates.`,
      proof.score >= 62,
      proof.score
    ),
    getCommitmentPackage(
      "anchor",
      "Market anchor package",
      anchor,
      `Own the visible ${active.category.toLowerCase()} lane with enough active listings to make the page feel real.`,
      proof.score >= 76,
      proof.score + 6
    ),
    getCommitmentPackage(
      "annual",
      "Annual visibility package",
      annual,
      "Convert the supplier into an annual listing account after proof, availability, and direct enquiry routing are clear.",
      proof.score >= 84,
      proof.score + 10
    )
  ];
}

function getCommitmentPackage(id, label, listings, detail, recommended, closeScore) {
  const annualRevenue = listings * 99;
  const monthlyRevenue = listings * 9;
  const statusClass = recommended ? "ready" : closeScore >= 70 ? "review" : "gap";
  return {
    id,
    label,
    listings,
    detail,
    recommended,
    monthlyRevenue,
    annualRevenue,
    closeScore: Math.max(0, Math.min(100, Math.round(closeScore))),
    statusClass,
    status: recommended ? "Recommend" : statusClass === "review" ? "Option" : "Later"
  };
}

function getSupplierCommitmentGates(active, proof, recommendedPackage) {
  const proofReady = active.proof.length >= 3;
  const demandReady = active.demandCount >= 3;
  const roiReady = recommendedPackage.annualRevenue >= 300;
  const availabilityReady = proof.evidence.some((item) => item.label.includes("Supply") && item.statusClass !== "gap");

  return [
    {
      label: "Package accepted",
      detail: `${recommendedPackage.label}: ${recommendedPackage.listings} active listing${recommendedPackage.listings === 1 ? "" : "s"} at USD ${recommendedPackage.monthlyRevenue.toLocaleString()}/month or USD ${recommendedPackage.annualRevenue.toLocaleString()}/year.`,
      owner: "Revenue",
      status: roiReady ? "Ready" : "Review",
      statusClass: roiReady ? "ready" : "review"
    },
    {
      label: "Demand proof attached",
      detail: `${active.demandCount} buyer signal${active.demandCount === 1 ? "" : "s"} and ${active.urgencyHits} urgent signal${active.urgencyHits === 1 ? "" : "s"} support the close.`,
      owner: "Growth",
      status: demandReady ? "Ready" : "Collect",
      statusClass: demandReady ? "ready" : "review"
    },
    {
      label: "Verification proof ready",
      detail: `Attach ${active.proof.slice(0, 3).join(", ").toLowerCase()} before using verified supplier language.`,
      owner: "Trust",
      status: proofReady ? "Ready" : "Gap",
      statusClass: proofReady ? "ready" : "gap"
    },
    {
      label: "Availability lane clear",
      detail: "Each listing needs available now, available soon, or call-to-confirm status before go-live.",
      owner: "Success",
      status: availabilityReady ? "Ready" : "Review",
      statusClass: availabilityReady ? "ready" : "review"
    },
    {
      label: "Direct enquiry route set",
      detail: "Phone, WhatsApp, email, or web route must send the renter directly to the supplier in phase one.",
      owner: "Founder",
      status: "Ready",
      statusClass: "ready"
    }
  ];
}

function renderListingActivationRoom() {
  const queueRoot = document.querySelector("#listingActivationQueue");
  if (!queueRoot) return;

  const model = getListingActivationModel();
  if (!model.active) return;

  setText("#listingActivationTitle", `${model.active.region} ${model.active.category} activation`);
  setText("#listingActivationBadge", model.badge);

  document.querySelector("#listingActivationScore").innerHTML = `
    <strong>${model.activationScore}/100</strong>
    <span>${escapeHtml(model.summary)}</span>
  `;

  document.querySelector("#listingActivationMetrics").innerHTML = [
    ["Listing package", `${model.recommendedPackage.listings} machines`],
    ["First invoice", `USD ${model.recommendedPackage.monthlyRevenue.toLocaleString()}/mo`],
    ["Annual value", `USD ${model.recommendedPackage.annualRevenue.toLocaleString()}`],
    ["Launch gates", `${model.readyGateCount}/${model.gates.length} ready`]
  ].map(([label, value]) => `
    <span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>
  `).join("");

  queueRoot.innerHTML = model.queue.map((item, index) => `
    <div class="listing-activation-item ${item.statusClass}">
      <strong>${index + 1}</strong>
      <span>
        ${escapeHtml(item.label)}
        <small>${escapeHtml(item.detail)}</small>
      </span>
      <em>${escapeHtml(item.owner)}</em>
      <b>${escapeHtml(item.status)}</b>
    </div>
  `).join("");

  document.querySelector("#listingActivationGates").innerHTML = model.gates.map((gate, index) => `
    <div class="listing-activation-gate ${gate.statusClass}">
      <strong>${index + 1}</strong>
      <span>
        ${escapeHtml(gate.label)}
        <small>${escapeHtml(gate.detail)}</small>
      </span>
      <em>${escapeHtml(gate.owner)}</em>
      <b>${escapeHtml(gate.status)}</b>
    </div>
  `).join("");

  document.querySelector("#listingActivationPacket").innerHTML = buildListingActivationText(model)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");
}

function getListingActivationModel() {
  const commitment = getSupplierCommitmentModel();
  const active = commitment.active;
  if (!active) {
    return {
      active: null,
      commitment,
      activationScore: 0,
      badge: "Prep first",
      summary: "",
      queue: [],
      gates: [],
      recommendedPackage: null,
      readyQueueCount: 0,
      readyGateCount: 0
    };
  }

  const recommendedPackage = commitment.recommendedPackage;
  const queue = getListingActivationQueue(active, commitment);
  const gates = getListingActivationGates(active, commitment, queue);
  const readyQueueCount = queue.filter((item) => item.statusClass === "ready").length;
  const readyGateCount = gates.filter((gate) => gate.statusClass === "ready").length;
  const activationScore = Math.max(0, Math.min(100, Math.round(commitment.score * 0.5 + readyQueueCount * 7 + readyGateCount * 6)));
  const badge = activationScore >= 84 ? "Ready to publish" : activationScore >= 68 ? "Activation sprint" : "Prep first";
  const summary = activationScore >= 84
    ? `${active.region} ${active.category} can move from commitment to live paid listings now.`
    : activationScore >= 68
      ? `${active.region} ${active.category} has enough momentum for a focused activation sprint.`
      : `${active.region} ${active.category} needs billing, proof, and availability tightened before go-live.`;

  return {
    active,
    commitment,
    activationScore,
    badge,
    summary,
    queue,
    gates,
    recommendedPackage,
    readyQueueCount,
    readyGateCount
  };
}

function getListingActivationQueue(active, commitment) {
  const recommendedPackage = commitment.recommendedPackage;
  const proofGate = commitment.gates.find((gate) => gate.label.includes("Verification")) || commitment.gates[2];
  const availabilityGate = commitment.gates.find((gate) => gate.label.includes("Availability")) || commitment.gates[3];
  const hasEnoughVisibleSupply = active.visibleSupply >= recommendedPackage.listings;
  const launchReady = commitment.score >= 68 && commitment.readyGateCount >= 3;

  return [
    {
      label: "Create paid listing shells",
      detail: `${recommendedPackage.label}: ${recommendedPackage.listings} active listing${recommendedPackage.listings === 1 ? "" : "s"} at USD ${recommendedPackage.monthlyRevenue.toLocaleString()}/month or USD ${recommendedPackage.annualRevenue.toLocaleString()}/year.`,
      owner: "Revenue",
      status: "Ready",
      statusClass: "ready"
    },
    {
      label: "Attach photos and specs",
      detail: hasEnoughVisibleSupply
        ? `${active.visibleSupply} visible listing${active.visibleSupply === 1 ? "" : "s"} can seed the supplier storefront.`
        : `Collect clean photos, model specs, and simple rate notes for ${recommendedPackage.listings} machine${recommendedPackage.listings === 1 ? "" : "s"}.`,
      owner: "Supplier",
      status: hasEnoughVisibleSupply ? "Ready" : "Review",
      statusClass: hasEnoughVisibleSupply ? "ready" : "review"
    },
    {
      label: "Link verification proof",
      detail: proofGate.detail,
      owner: "Trust",
      status: proofGate.status,
      statusClass: proofGate.statusClass
    },
    {
      label: "Set availability and lead route",
      detail: `${availabilityGate.detail} Direct enquiry routes stay with the supplier in phase one.`,
      owner: "Success",
      status: availabilityGate.statusClass === "ready" ? "Ready" : "Review",
      statusClass: availabilityGate.statusClass === "gap" ? "review" : availabilityGate.statusClass
    },
    {
      label: "Publish market page",
      detail: `${active.region} ${active.category.toLowerCase()} page opens with verified inventory, proof notes, and no rental payment collection.`,
      owner: "Founder",
      status: launchReady ? "Publish" : "Sprint",
      statusClass: launchReady ? "ready" : "review"
    }
  ];
}

function getListingActivationGates(active, commitment, queue) {
  const recommendedPackage = commitment.recommendedPackage;
  const proofGate = commitment.gates.find((gate) => gate.label.includes("Verification")) || commitment.gates[2];
  const availabilityGate = commitment.gates.find((gate) => gate.label.includes("Availability")) || commitment.gates[3];
  const billingMode = recommendedPackage.id === "annual" || commitment.score >= 84 ? "Annual" : "Monthly";
  const readyQueueCount = queue.filter((item) => item.statusClass === "ready").length;
  const launchReady = readyQueueCount >= 3 && commitment.readyGateCount >= 3;

  return [
    {
      label: "Billing plan selected",
      detail: `${billingMode} listing plan for ${recommendedPackage.listings} machine${recommendedPackage.listings === 1 ? "" : "s"}: USD ${recommendedPackage.monthlyRevenue.toLocaleString()}/month or USD ${recommendedPackage.annualRevenue.toLocaleString()}/year.`,
      owner: "Revenue",
      status: "Ready",
      statusClass: "ready"
    },
    {
      label: "Proof gate",
      detail: proofGate.detail,
      owner: "Trust",
      status: proofGate.status,
      statusClass: proofGate.statusClass
    },
    {
      label: "Availability gate",
      detail: availabilityGate.detail,
      owner: "Success",
      status: availabilityGate.status,
      statusClass: availabilityGate.statusClass === "gap" ? "review" : availabilityGate.statusClass
    },
    {
      label: "Direct enquiry route",
      detail: "Phone, WhatsApp, email, or web enquiry path is visible before the page is promoted.",
      owner: "Supplier",
      status: "Ready",
      statusClass: "ready"
    },
    {
      label: "Launch review",
      detail: `${active.region} ${active.category} can publish when at least three activation queue items and three commitment gates are ready.`,
      owner: "Founder",
      status: launchReady ? "Ready" : "Sprint",
      statusClass: launchReady ? "ready" : "review"
    }
  ];
}

function renderTrustRevenueLedger() {
  const rowRoot = document.querySelector("#trustLedgerRows");
  if (!rowRoot) return;

  const model = getTrustRevenueLedgerModel();
  if (!model.active) return;

  setText("#trustLedgerTitle", `${model.marketLabel} ledger`);
  setText("#trustLedgerBadge", model.badge);

  document.querySelector("#trustLedgerScore").innerHTML = `
    <strong>${model.score}/100</strong>
    <span>${escapeHtml(model.summary)}</span>
  `;

  document.querySelector("#trustLedgerMetrics").innerHTML = [
    ["Active listing ARR", `USD ${model.activeListingArr.toLocaleString()}`],
    ["Next package ARR", `USD ${model.nextPackageArr.toLocaleString()}`],
    ["Lead pipeline", `USD ${model.directPipeline.toLocaleString()}`],
    ["Trust debt", `${model.trustDebt} gap${model.trustDebt === 1 ? "" : "s"}`]
  ].map(([label, value]) => `
    <span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>
  `).join("");

  rowRoot.innerHTML = model.rows.map((row, index) => `
    <div class="trust-ledger-row ${row.statusClass}">
      <strong>${index + 1}</strong>
      <span>
        ${escapeHtml(row.label)}
        <small>${escapeHtml(row.detail)}</small>
      </span>
      <em>${escapeHtml(row.value)}</em>
      <b>${escapeHtml(row.status)}</b>
    </div>
  `).join("");

  document.querySelector("#trustLedgerControls").innerHTML = model.controls.map((control, index) => `
    <div class="trust-ledger-control ${control.statusClass}">
      <strong>${index + 1}</strong>
      <span>
        ${escapeHtml(control.label)}
        <small>${escapeHtml(control.detail)}</small>
      </span>
      <em>${escapeHtml(control.owner)}</em>
      <b>${escapeHtml(control.status)}</b>
    </div>
  `).join("");

  document.querySelector("#trustLedgerPacket").innerHTML = buildTrustLedgerText(model)
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");
}

function getTrustRevenueLedgerModel() {
  const activation = getListingActivationModel();
  const flywheel = getLiquidityFlywheelModel();
  const success = getSupplierSuccessModel();
  const market = flywheel.active || activation.active || getActiveMarketOpportunity();
  const active = activation.active || market;
  if (!active) {
    return {
      active: null,
      marketLabel: "Market",
      score: 0,
      badge: "Listen first",
      summary: "",
      rows: [],
      controls: [],
      activeListingArr: 0,
      nextPackageArr: 0,
      directPipeline: 0,
      trustDebt: 0
    };
  }

  const marketLabel = getTrustLedgerMarketLabel(market);
  const activeListingArr = success.rows.reduce((total, row) => total + row.health.revenueDesk.annualRevenue, 0);
  const directPipeline = success.rows.reduce((total, row) => total + row.health.leadDesk.totalBudget, 0);
  const trustDebt = success.proofGapCount + Number(market?.proofGap || 0);
  const nextPackageArr = activation.recommendedPackage?.annualRevenue || active.annualRevenue || 0;
  const renewalRiskArr = success.renewalRiskCount * 99;
  const rows = getTrustLedgerRows({ activation, flywheel, success, market, marketLabel, activeListingArr, directPipeline, trustDebt, nextPackageArr, renewalRiskArr });
  const controls = getTrustLedgerControls({ activation, flywheel, success, market, trustDebt, renewalRiskArr });
  const readyControls = controls.filter((control) => control.statusClass === "ready").length;
  const score = Math.max(0, Math.min(100, Math.round(
    (flywheel.score || 0) * 0.28
    + (activation.activationScore || 0) * 0.28
    + success.averageHealth * 0.24
    + readyControls * 4
    + Math.min(12, activeListingArr / 1200)
    - Math.min(10, trustDebt * 1.5)
  )));
  const badge = score >= 84 && trustDebt <= 2 ? "Scale-ready" : score >= 70 ? "Protect growth" : "Fix trust debt";
  const summary = badge === "Scale-ready"
    ? `${marketLabel} has enough listing revenue, proof, and response quality to scale carefully.`
    : badge === "Protect growth"
      ? `${marketLabel} is monetizing, but trust or renewal debt should be cleared before heavier growth.`
      : `${marketLabel} needs proof, renewal, or response fixes before Heavyster pushes more buyer demand.`;

  return {
    active,
    activation,
    flywheel,
    success,
    market,
    marketLabel,
    score,
    badge,
    summary,
    rows,
    controls,
    readyControls,
    activeListingArr,
    nextPackageArr,
    directPipeline,
    trustDebt,
    renewalRiskArr
  };
}

function getTrustLedgerRows(context) {
  const { activation, flywheel, success, marketLabel, activeListingArr, directPipeline, trustDebt, nextPackageArr, renewalRiskArr } = context;
  return [
    {
      label: "Active listing revenue",
      detail: `${success.rows.length} supplier account${success.rows.length === 1 ? "" : "s"} currently model paid listing ARR without touching rental payments.`,
      value: `USD ${activeListingArr.toLocaleString()}`,
      status: activeListingArr >= 3000 ? "Strong" : activeListingArr >= 1000 ? "Building" : "Seed",
      statusClass: activeListingArr >= 3000 ? "ready" : activeListingArr >= 1000 ? "review" : "gap"
    },
    {
      label: "Next paid package",
      detail: `${marketLabel} can move through activation with ${activation.recommendedPackage?.listings || 0} paid listing${activation.recommendedPackage?.listings === 1 ? "" : "s"}.`,
      value: `USD ${nextPackageArr.toLocaleString()}`,
      status: activation.activationScore >= 84 ? "Publish" : activation.activationScore >= 68 ? "Sprint" : "Prep",
      statusClass: activation.activationScore >= 84 ? "ready" : activation.activationScore >= 68 ? "review" : "gap"
    },
    {
      label: "Direct enquiry pipeline",
      detail: `${success.hotLeadCount} hot lead${success.hotLeadCount === 1 ? "" : "s"} show buyer intent while customer payment stays direct to suppliers.`,
      value: `USD ${directPipeline.toLocaleString()}`,
      status: success.hotLeadCount ? "Live" : "Quiet",
      statusClass: success.hotLeadCount ? "ready" : "review"
    },
    {
      label: "Trust debt",
      detail: "Proof gaps, expiring documents, and verified-supply weakness reduce how hard Heavyster should push traffic.",
      value: `${trustDebt} gap${trustDebt === 1 ? "" : "s"}`,
      status: trustDebt <= 2 ? "Controlled" : trustDebt <= 6 ? "Review" : "Blocker",
      statusClass: trustDebt <= 2 ? "ready" : trustDebt <= 6 ? "review" : "gap"
    },
    {
      label: "Renewal exposure",
      detail: `${success.renewalRiskCount} paid listing${success.renewalRiskCount === 1 ? "" : "s"} at renewal risk should be saved before selling more inventory.`,
      value: `USD ${renewalRiskArr.toLocaleString()}`,
      status: success.renewalRiskCount ? "Save" : "Clean",
      statusClass: success.renewalRiskCount ? "review" : "ready"
    },
    {
      label: "Compounding signal",
      detail: flywheel.bottleneck ? `${flywheel.bottleneck.label} is the current bottleneck in the marketplace loop.` : "Flywheel signal is still forming.",
      value: `${flywheel.score || 0}/100`,
      status: flywheel.score >= 84 ? "Compound" : flywheel.score >= 70 ? "Turn" : "Push",
      statusClass: flywheel.score >= 84 ? "ready" : flywheel.score >= 70 ? "review" : "gap"
    }
  ];
}

function getTrustLedgerControls(context) {
  const { activation, flywheel, success, market, trustDebt, renewalRiskArr } = context;
  const listingReady = activation.activationScore >= 84;
  const trustReady = trustDebt <= 2;
  const renewalReady = success.renewalRiskCount === 0;
  const responseReady = success.hotLeadCount > 0 && success.averageHealth >= 72;
  const scaleReady = listingReady && trustReady && renewalReady && flywheel.score >= 70;

  return [
    {
      label: "Scale gate",
      detail: scaleReady ? "Market can accept more buyer traffic without overpromising trust." : "Hold aggressive growth until activation, trust, renewal, and flywheel gates improve.",
      owner: "Founder",
      status: scaleReady ? "Ready" : "Hold",
      statusClass: scaleReady ? "ready" : "review"
    },
    {
      label: "Trust gate",
      detail: trustReady ? "Proof debt is controlled enough for verified marketplace language." : `${trustDebt} trust gap${trustDebt === 1 ? "" : "s"} should be cleared before scaling category traffic.`,
      owner: "Trust",
      status: trustReady ? "Ready" : "Fix",
      statusClass: trustReady ? "ready" : "gap"
    },
    {
      label: "Revenue gate",
      detail: renewalReady ? "No modeled renewal leakage is blocking new listing sales." : `Protect USD ${renewalRiskArr.toLocaleString()} modeled renewal exposure before pushing expansion.`,
      owner: "Revenue",
      status: renewalReady ? "Ready" : "Save",
      statusClass: renewalReady ? "ready" : "review"
    },
    {
      label: "Response gate",
      detail: responseReady ? "Supplier response and lead quality are good enough for direct routing." : "Supplier response proof should improve before Heavyster promises faster buyer outcomes.",
      owner: "Success",
      status: responseReady ? "Ready" : "Watch",
      statusClass: responseReady ? "ready" : "review"
    },
    {
      label: "No-commission gate",
      detail: "Phase one remains clean: listing SaaS revenue first, rental payment direct, booking fee only after workflow proof.",
      owner: "Founder",
      status: "Locked",
      statusClass: "ready"
    },
    {
      label: "Market proof gate",
      detail: market?.demandCount ? `${market.demandCount} demand signal${market.demandCount === 1 ? "" : "s"} support this ledger.` : "Keep capturing demand until the market ledger has enough buyer language.",
      owner: "Growth",
      status: market?.demandCount >= 3 ? "Ready" : "Collect",
      statusClass: market?.demandCount >= 3 ? "ready" : "review"
    }
  ];
}

function getTrustLedgerMarketLabel(market) {
  if (!market) return "Selected market";
  return market.title || `${market.region} ${market.category}`;
}


function renderPaidListingActivation() {
  const root = document.querySelector("#paidListingActivation");
  if (!root) return;
  const model = getPaidListingActivationModel();

  root.innerHTML = `
    <div class="paid-activation-main ${escapeHtml(model.statusClass)}">
      <div>
        <span>${escapeHtml(model.badge)}</span>
        <strong>${escapeHtml(model.headline)}</strong>
        <small>${escapeHtml(model.detail)}</small>
      </div>
      <b>${escapeHtml(model.plan)}</b>
    </div>
    <div class="paid-activation-metrics">
      ${model.metrics.map((metric) => `
        <span class="${metric.ready ? "is-ready" : "is-watch"}">
          <strong>${escapeHtml(metric.value)}</strong>
          ${escapeHtml(metric.label)}
          <small>${escapeHtml(metric.detail)}</small>
        </span>
      `).join("")}
    </div>
    <div class="paid-activation-actions">
      ${model.actions.map((action) => `
        <button type="button" class="${action.primary ? "is-primary" : ""}" data-paid-activation-action="${escapeHtml(action.id)}">
          ${escapeHtml(action.label)}
        </button>
      `).join("")}
    </div>
  `;

  root.querySelectorAll("[data-paid-activation-action]").forEach((button) => {
    button.addEventListener("click", () => handlePaidListingActivationAction(button.dataset.paidActivationAction, model));
  });
}

function getPaidListingActivationModel() {
  const selected = getSelectedListing();
  const studio = getSupplierStudioModel(selected);
  const starter = getSupplierListingStarterModel();
  const activeListings = Math.max(1, Number(state.listingCount) || 1);
  const supplierListingCount = Math.max(1, studio.listings.length);
  const monthlyRevenue = activeListings * 9;
  const annualRevenue = activeListings * 99;
  const annualSaving = activeListings * ((9 * 12) - 99);
  const proofReady = starter.passport.score >= 84 && studio.docGaps === 0;
  const availabilityReady = studio.availabilityGaps === 0 || starter.availability === "available";
  const activationReady = proofReady && availabilityReady && activeListings >= supplierListingCount;
  const statusClass = activationReady ? "is-ready" : proofReady ? "is-watch" : "is-gap";
  const badge = activationReady ? "Ready to activate" : proofReady ? "Confirm availability" : "Proof before billing";
  const headline = activationReady
    ? `${studio.profile.supplier} can start paid listing revenue.`
    : `${studio.profile.supplier} is one cleanup step from paid activation.`;
  const detail = activationReady
    ? `${activeListings} active listing${activeListings === 1 ? "" : "s"} = USD ${annualRevenue.toLocaleString()}/year, with rental payment staying direct to the supplier.`
    : `Match the pricing count to the supplier fleet, close proof or freshness gaps, then activate without touching rental payments.`;

  return {
    selected,
    studio,
    starter,
    activeListings,
    supplierListingCount,
    monthlyRevenue,
    annualRevenue,
    annualSaving,
    proofReady,
    availabilityReady,
    activationReady,
    statusClass,
    badge,
    headline,
    detail,
    plan: "USD 99/yr",
    metrics: [
      {
        label: "Active listings",
        value: String(activeListings),
        detail: `${supplierListingCount} visible in supplier studio`,
        ready: activeListings >= supplierListingCount
      },
      {
        label: "Monthly SaaS",
        value: `USD ${monthlyRevenue.toLocaleString()}`,
        detail: "USD 9 per active listing",
        ready: true
      },
      {
        label: "Annual SaaS",
        value: `USD ${annualRevenue.toLocaleString()}`,
        detail: `USD ${annualSaving.toLocaleString()} saved vs monthly`,
        ready: true
      },
      {
        label: "Rental take",
        value: "0%",
        detail: "supplier keeps rental payment direct",
        ready: true
      }
    ],
    actions: [
      { id: "supplier-count", label: "Use supplier count", primary: true },
      { id: "copy", label: "Copy activation note" },
      { id: proofReady ? "studio" : "proof", label: proofReady ? "Open Studio" : "Open proof" }
    ]
  };
}

async function handlePaidListingActivationAction(action, model) {
  if (action === "supplier-count") {
    state.listingCount = Math.min(80, Math.max(1, model.supplierListingCount));
    saveState();
    renderPricingCalculator();
    renderMonetizationCommand();
    renderPaidListingActivation();
    scrollToPageTarget(document.querySelector("#pricing"), 110);
    showToast("Pricing now matches the supplier's active listing count.");
    return;
  }

  if (action === "copy") {
    try {
      await navigator.clipboard.writeText(buildPaidListingActivationText(model));
      showToast("Paid listing activation note copied.");
    } catch {
      showToast("Copy is blocked here, but the activation note is visible.");
    }
    return;
  }

  if (action === "proof") {
    scrollToPageTarget(document.querySelector("#trustChecklist"), 118);
    showToast("Proof checklist opened.");
    return;
  }

  scrollToPageTarget(document.querySelector("#studio"), 108);
  showToast("Supplier Studio opened.");
}

function buildPaidListingActivationText(model = getPaidListingActivationModel()) {
  return [
    "Heavyster Paid Listing Activation",
    `Supplier: ${model.studio.profile.supplier} - ${model.studio.profile.branch}`,
    `Machine focus: ${model.selected.name}`,
    `Activation status: ${model.badge}`,
    `Active listing count: ${model.activeListings}`,
    `Supplier studio count: ${model.supplierListingCount}`,
    `Monthly SaaS: USD ${model.monthlyRevenue.toLocaleString()}`,
    `Annual SaaS: USD ${model.annualRevenue.toLocaleString()}`,
    `Annual saving vs monthly: USD ${model.annualSaving.toLocaleString()}`,
    "Payment rule: supplier keeps rental payment direct; Heavyster earns listing SaaS revenue only in phase one.",
    "Phase two rule: consider 1% confirmed-booking success fee only after quote, enquiry, or payment workflow proof exists.",
    `Next move: ${model.activationReady ? "activate paid listings" : "close proof, availability, or count alignment first"}`
  ].join("\n");
}

function renderMonetizationCommand() {
  const root = document.querySelector("#monetizationCommand");
  if (!root) return;
  const model = getMonetizationCommandModel();

  root.innerHTML = `
    <article class="monetization-command-main">
      <span>${escapeHtml(model.badge)}</span>
      <strong>${escapeHtml(model.headline)}</strong>
      <p>${escapeHtml(model.detail)}</p>
      <b>${escapeHtml(model.recommendation)}</b>
    </article>
    <div class="monetization-command-steps">
      ${model.steps.map((step) => `
        <article class="${step.primary ? "is-primary" : ""}">
          <span>${escapeHtml(step.label)}</span>
          <strong>${escapeHtml(step.value)}</strong>
          <small>${escapeHtml(step.detail)}</small>
        </article>
      `).join("")}
    </div>
    <div class="monetization-command-actions">
      ${model.actions.map((action) => `
        <button type="button" class="${action.primary ? "is-primary" : ""}" data-monetization-action="${escapeHtml(action.id)}">
          ${escapeHtml(action.label)}
        </button>
      `).join("")}
    </div>
  `;

  root.querySelectorAll("[data-monetization-action]").forEach((button) => {
    button.addEventListener("click", () => handleMonetizationCommandAction(button.dataset.monetizationAction, model));
  });
}

function getMonetizationCommandModel() {
  const selected = getSelectedListing();
  const studio = getSupplierStudioModel(selected);
  const activeListings = Math.max(1, Number(state.listingCount) || 1);
  const supplierListingCount = Math.max(1, studio.listings.length);
  const monthlyRevenue = activeListings * 9;
  const annualRevenue = activeListings * 99;
  const privatePackThreshold = Math.max(10, supplierListingCount);
  const privatePackAnnual = privatePackThreshold * 79;

  return {
    selected,
    studio,
    activeListings,
    supplierListingCount,
    monthlyRevenue,
    annualRevenue,
    privatePackThreshold,
    privatePackAnnual,
    badge: "Monetization command",
    headline: "Free profile, paid active listings, success fee only after proof.",
    detail: "This keeps Heavyster simple for rental yards: claim a supplier profile, activate paid machines, route direct enquiries, and let the supplier keep the rental payment.",
    recommendation: "Best model: listing SaaS first",
    steps: [
      {
        label: "01 Free profile",
        value: "Claim supplier",
        detail: "Let rental companies create a basic profile so onboarding starts before payment friction.",
        primary: false
      },
      {
        label: "02 Paid listing",
        value: "USD 9/mo",
        detail: "Charge per active equipment listing, or USD 99/year for committed suppliers.",
        primary: true
      },
      {
        label: "03 Yard pack later",
        value: `10+ machines`,
        detail: `Private annual packs can start around USD ${privatePackAnnual.toLocaleString()}/yr after bulk import works.`,
        primary: false
      },
      {
        label: "04 Phase two",
        value: "1% proven",
        detail: "Only add success fee after quote, award, enquiry trail, or deposit workflow proof exists.",
        primary: false
      },
      {
        label: "Current count",
        value: `${activeListings}`,
        detail: `Modeled now: USD ${monthlyRevenue.toLocaleString()}/mo or USD ${annualRevenue.toLocaleString()}/yr.`,
        primary: false
      },
      {
        label: "Guardrail",
        value: "0% rental take",
        detail: "No escrow, deposit, or rental payment collection in phase one.",
        primary: true
      }
    ],
    actions: [
      { id: "copy", label: "Copy model", primary: true },
      { id: "supplier-count", label: "Use supplier count" },
      { id: "studio", label: "Open Studio" }
    ]
  };
}

async function handleMonetizationCommandAction(action, model) {
  if (action === "copy") {
    try {
      await navigator.clipboard.writeText(buildMonetizationCommandText(model));
      showToast("Monetization model copied.");
    } catch {
      showToast("Copy is blocked here, but the model is visible.");
    }
    return;
  }

  if (action === "supplier-count") {
    state.listingCount = Math.min(80, Math.max(1, model.supplierListingCount));
    saveState();
    renderPricingCalculator();
    renderMonetizationCommand();
    renderPaidListingActivation();
    renderSupplierActivationReceipt();
    showToast("Pricing now uses the visible supplier count.");
    return;
  }

  scrollToPageTarget(document.querySelector("#studio"), 108);
  showToast("Supplier Studio opened.");
}

function buildMonetizationCommandText(model = getMonetizationCommandModel()) {
  return [
    "Heavyster Monetization Command",
    "Recommendation: free supplier profile + paid active equipment listings first.",
    `Core price: USD 9/month or USD 99/year per active listing.`,
    `Current modeled count: ${model.activeListings} active listings = USD ${model.monthlyRevenue.toLocaleString()}/month or USD ${model.annualRevenue.toLocaleString()}/year.`,
    `Supplier example: ${model.studio.profile.supplier} has ${model.supplierListingCount} visible listing${model.supplierListingCount === 1 ? "" : "s"} in Supplier Studio.`,
    `Later yard pack: offer private annual packs after bulk import works, starting around ${model.privatePackThreshold}+ machines; do not hide the simple per-listing price.`,
    "Phase-two rule: add 1% confirmed-booking success fee only after Heavyster proves quote acceptance, direct enquiry trail, award workflow, or payment/deposit workflow value.",
    "Guardrail: buyer and supplier keep rental payment direct; Heavyster takes 0% rental commission in phase one.",
    "Why this wins: heavy rental is trust-heavy and operational, so Heavyster should first sell verified visibility, proof, freshness, and direct enquiries before becoming a transaction operator."
  ].join("\n");
}

function renderPilotLaunchCommand() {
  const root = document.querySelector("#pilotLaunchCommand");
  if (!root) return;
  const model = getPilotLaunchCommandModel();

  root.innerHTML = `
    <article class="pilot-launch-main">
      <span>${escapeHtml(model.badge)}</span>
      <strong>${escapeHtml(model.command)}</strong>
      <p>${escapeHtml(model.reason)}</p>
      <b>${escapeHtml(model.verdict)}</b>
    </article>
    <div class="pilot-launch-metrics">
      ${model.metrics.map((metric) => `
        <article>
          <span>${escapeHtml(metric.label)}</span>
          <strong>${escapeHtml(metric.value)}</strong>
          <small>${escapeHtml(metric.detail)}</small>
        </article>
      `).join("")}
    </div>
    <div class="pilot-launch-steps">
      ${model.steps.map((step, index) => `
        <article class="${index === 0 ? "is-primary" : ""}">
          <span>${escapeHtml(String(index + 1).padStart(2, "0"))}</span>
          <div>
            <strong>${escapeHtml(step.name)}</strong>
            <p>${escapeHtml(step.detail)}</p>
          </div>
          <b>${escapeHtml(step.status)}</b>
        </article>
      `).join("")}
    </div>
    <div class="pilot-launch-actions">
      ${model.actions.map((action) => `
        <button type="button" class="${action.primary ? "is-primary" : ""}" data-pilot-launch-action="${escapeHtml(action.id)}">
          ${escapeHtml(action.label)}
        </button>
      `).join("")}
    </div>
  `;

  root.querySelectorAll("[data-pilot-launch-action]").forEach((button) => {
    button.addEventListener("click", () => handlePilotLaunchCommandAction(button.dataset.pilotLaunchAction, model));
  });
}

function getPilotLaunchCommandModel() {
  const targetSuppliers = 6;
  const launchListings = 24;
  const annualRevenue = launchListings * 99;
  const proofPacks = 18;
  const freshnessChecks = 12;
  const enquiryDrills = 3;

  return {
    badge: "Pilot launch command",
    market: "UAE Lifting",
    targetSuppliers,
    launchListings,
    annualRevenue,
    proofPacks,
    freshnessChecks,
    enquiryDrills,
    command: "Launch UAE Lifting only after 6 suppliers and 24 paid listings are ready.",
    reason: "This gives Heavyster visible supply, trust proof, direct enquiry response, and listing SaaS validation before any rental commission.",
    verdict: "Founder rule: supply, proof, and direct enquiries before traffic.",
    metrics: [
      { label: "Suppliers", value: String(targetSuppliers), detail: "anchor rental yards" },
      { label: "Listings", value: String(launchListings), detail: `USD ${annualRevenue.toLocaleString()}/yr listing ARR` },
      { label: "Proof", value: `${proofPacks}/${launchListings}`, detail: "verified proof packs" },
      { label: "Freshness", value: `${freshnessChecks}/${launchListings}`, detail: "availability checks" }
    ],
    steps: [
      {
        name: "Recruit anchors",
        detail: "Use supplier hunt to close 6 UAE lifting suppliers with proof-first outreach.",
        status: "Start"
      },
      {
        name: "Activate listings",
        detail: "Publish 24 paid listings at USD 99/year or USD 9/month per active machine.",
        status: "Revenue"
      },
      {
        name: "Run enquiry drills",
        detail: "Send 3 controlled buyer enquiries and measure response time without touching rental payment.",
        status: "Proof"
      },
      {
        name: "Hold commission",
        detail: "Keep 1% success fee locked until quote acceptance and booking workflow proof exist.",
        status: "Guardrail"
      }
    ],
    actions: [
      { id: "copy", label: "Copy pilot command", primary: true },
      { id: "hunt", label: "Open supplier hunt" },
      { id: "matrix", label: "Open market matrix" }
    ]
  };
}

async function handlePilotLaunchCommandAction(action, model) {
  if (action === "copy") {
    try {
      await navigator.clipboard.writeText(buildPilotLaunchCommandText(model));
      showToast("Pilot launch command copied.");
    } catch {
      showToast("Copy is blocked here, but the pilot command is visible.");
    }
    return;
  }

  const targetSelector = action === "hunt" ? "#growth" : "#market-signal-matrix";
  const target = document.querySelector(targetSelector);
  if (target) {
    if (window.location.hash !== targetSelector) window.location.hash = targetSelector;
    scrollToPageTarget(target, 108);
    showToast(action === "hunt" ? "Supplier hunt opened." : "Market matrix opened.");
  }
}

function buildPilotLaunchCommandText(model = getPilotLaunchCommandModel()) {
  return [
    "Heavyster Pilot Launch Command",
    `Market: ${model.market}`,
    `Command: ${model.command}`,
    `Reason: ${model.reason}`,
    "Pilot targets:",
    ...model.metrics.map((metric) => `- ${metric.label}: ${metric.value} (${metric.detail})`),
    "Action order:",
    ...model.steps.map((step, index) => `${index + 1}. ${step.name}: ${step.detail}`),
    "Guardrail: buyer pays supplier directly in phase one; Heavyster earns listing SaaS first.",
    "Phase two: consider 1% confirmed-booking success fee only after quote, award, or booking workflow proof exists."
  ].join("\n");
}

function renderGlobalLaunchPassport() {
  const root = document.querySelector("#globalLaunchPassport");
  if (!root) return;
  const model = getGlobalLaunchPassportModel();

  root.innerHTML = `
    <article class="global-passport-main">
      <span>${escapeHtml(model.badge)}</span>
      <strong>${escapeHtml(model.command)}</strong>
      <p>${escapeHtml(model.reason)}</p>
      <b>${escapeHtml(model.rule)}</b>
    </article>
    <div class="global-passport-metrics">
      ${model.metrics.map((metric) => `
        <article>
          <span>${escapeHtml(metric.label)}</span>
          <strong>${escapeHtml(metric.value)}</strong>
          <small>${escapeHtml(metric.detail)}</small>
        </article>
      `).join("")}
    </div>
    <div class="global-passport-queue">
      ${model.launchQueue.map((market, index) => `
        <article class="${index === 0 ? "is-primary" : ""}">
          <span>${escapeHtml(String(index + 1).padStart(2, "0"))}</span>
          <div>
            <strong>${escapeHtml(market.market)}</strong>
            <p>${escapeHtml(market.focus)}</p>
          </div>
          <b>${escapeHtml(market.status)}</b>
        </article>
      `).join("")}
    </div>
    <div class="global-passport-actions">
      ${model.actions.map((action) => `
        <button type="button" class="${action.primary ? "is-primary" : ""}" data-global-passport-action="${escapeHtml(action.id)}">
          ${escapeHtml(action.label)}
        </button>
      `).join("")}
    </div>
  `;

  root.querySelectorAll("[data-global-passport-action]").forEach((button) => {
    button.addEventListener("click", () => handleGlobalLaunchPassportAction(button.dataset.globalPassportAction, model));
  });
}

function getGlobalLaunchPassportModel() {
  const launchQueue = [
    { market: "UAE Lifting", focus: "Close proof-first crane and lifting supply before wider traffic.", status: "Pilot" },
    { market: "India Roadwork", focus: "Recruit roadwork suppliers only after demand and proof are visible.", status: "Next" },
    { market: "UK Lifting", focus: "Use local proof labels while keeping the same listing object.", status: "Queue" },
    { market: "USA Power", focus: "Treat regional demand as a separate wedge, not a new product.", status: "Queue" }
  ];

  return {
    badge: "Global launch passport",
    version: "v134 Global Launch Passport",
    command: "Scale countries through one product model, one price anchor, and local trust labels.",
    reason: "Heavyster can look global without becoming complicated: every country starts with supplier profiles, paid listings, proof, direct enquiries, and no rental payment collection.",
    rule: "Global product, local trust, direct payment.",
    launchQueue,
    metrics: [
      { label: "Country queue", value: String(launchQueue.length), detail: "markets staged, not scattered" },
      { label: "Billing anchor", value: "USD 99/yr", detail: "or USD 9/mo per active listing" },
      { label: "Trust model", value: "1 checklist", detail: "localized labels, same proof stack" },
      { label: "Rental take", value: "0%", detail: "payment stays buyer to supplier" }
    ],
    environments: [
      "Prototype: static GitHub Pages demo with simple role paths.",
      "Staging: supplier account, fixture API, uploads placeholder, billing status, admin review.",
      "Production: real auth, database, storage, billing, permissions, lead logs, and support notes."
    ],
    guardrails: [
      "Localize wording, proof labels, and currency display; do not fork the product.",
      "Keep USD listing SaaS as the phase-one billing anchor until local payment operations are proven.",
      "Do not collect rental payments or expose rental commission in phase one.",
      "Open a new country only when supply, proof, availability freshness, and direct response are measurable."
    ],
    actions: [
      { id: "copy", label: "Copy passport", primary: true },
      { id: "build", label: "Open Build Phase" },
      { id: "roadmap", label: "Open Roadmap" }
    ]
  };
}

async function handleGlobalLaunchPassportAction(action, model) {
  if (action === "copy") {
    try {
      await navigator.clipboard.writeText(buildGlobalLaunchPassportText(model));
      showToast("Global launch passport copied.");
    } catch {
      showToast("Copy is blocked here, but the global passport is visible.");
    }
    return;
  }

  const targetSelector = action === "roadmap" ? "#roadmap" : "#build-phase";
  const target = document.querySelector(targetSelector);
  if (target) {
    if (window.location.hash !== targetSelector) window.location.hash = targetSelector;
    scrollToPageTarget(target, 108);
    showToast(action === "roadmap" ? "Roadmap opened." : "Build Phase opened.");
  }
}

function buildGlobalLaunchPassportText(model = getGlobalLaunchPassportModel()) {
  return [
    "Heavyster Global Launch Passport",
    `Version: ${model.version}`,
    `Command: ${model.command}`,
    `Rule: ${model.rule}`,
    `Reason: ${model.reason}`,
    "Launch queue:",
    ...model.launchQueue.map((market, index) => `${index + 1}. ${market.market}: ${market.focus} (${market.status})`),
    "Metrics:",
    ...model.metrics.map((metric) => `- ${metric.label}: ${metric.value} (${metric.detail})`),
    "Environment gates:",
    ...model.environments.map((item) => `- ${item}`),
    "Guardrails:",
    ...model.guardrails.map((item) => `- ${item}`),
    "Monetization: keep the phase-one model global and simple: free profile, paid active listings, USD 9/month or USD 99/year, 0% rental take.",
    "Phase two: add 1% confirmed-booking success fee only after quote, award, direct enquiry trail, or booking workflow proof exists."
  ].join("\n");
}

function renderSimpleGlobalUxGuard() {
  const root = document.querySelector("#simpleGlobalUxGuard");
  if (!root) return;
  const model = getSimpleGlobalUxGuardModel();

  root.innerHTML = `
    <article class="simple-ux-main">
      <span>${escapeHtml(model.badge)}</span>
      <strong>${escapeHtml(model.command)}</strong>
      <p>${escapeHtml(model.reason)}</p>
      <b>${escapeHtml(model.rule)}</b>
    </article>
    <div class="simple-ux-metrics">
      ${model.metrics.map((metric) => `
        <article>
          <span>${escapeHtml(metric.label)}</span>
          <strong>${escapeHtml(metric.value)}</strong>
          <small>${escapeHtml(metric.detail)}</small>
        </article>
      `).join("")}
    </div>
    <div class="simple-ux-checks">
      ${model.checks.map((check, index) => `
        <article class="${check.ready ? "is-ready" : ""}">
          <span>${escapeHtml(String(index + 1).padStart(2, "0"))}</span>
          <div>
            <strong>${escapeHtml(check.label)}</strong>
            <p>${escapeHtml(check.detail)}</p>
          </div>
          <b>${escapeHtml(check.status)}</b>
        </article>
      `).join("")}
    </div>
    <div class="simple-ux-actions">
      ${model.actions.map((action) => `
        <button type="button" class="${action.primary ? "is-primary" : ""}" data-simple-ux-action="${escapeHtml(action.id)}">
          ${escapeHtml(action.label)}
        </button>
      `).join("")}
    </div>
  `;

  root.querySelectorAll("[data-simple-ux-action]").forEach((button) => {
    button.addEventListener("click", () => handleSimpleGlobalUxGuardAction(button.dataset.simpleUxAction, model));
  });
}

function getSimpleGlobalUxGuardModel() {
  return {
    badge: "Simple global UX guard",
    version: "v135 Simple Global UX Guard",
    command: "Keep every country, role, and AI feature inside one simple next action.",
    reason: "Heavyster can become global without feeling heavy if every release removes friction before it adds power.",
    rule: "One screen, one role, one next action.",
    metrics: [
      { label: "Primary action", value: "1", detail: "one clear next move per screen" },
      { label: "Role paths", value: "3", detail: "buyer, supplier, founder" },
      { label: "Product forks", value: "0", detail: "countries reuse the same objects" },
      { label: "Rental take", value: "0%", detail: "phase-one payment stays direct" }
    ],
    checks: [
      { label: "Navigation budget", detail: "Public nav stays short; depth lives in role tools, not in the header.", status: "Guard", ready: true },
      { label: "Country reuse", detail: "UAE, India, UK, USA, and later markets share account, listing, proof, enquiry, and billing objects.", status: "Reuse", ready: true },
      { label: "AI discipline", detail: "AI may summarize, route, classify, and draft only when it removes a manual step.", status: "Simplify", ready: true },
      { label: "Pricing clarity", detail: "Show two listing prices, keep rental commission at 0%, and delay success fees until workflow proof.", status: "Locked", ready: true },
      { label: "Build proof", detail: "Every release must show version, purpose, test focus, and the next simplest action.", status: "v135", ready: true }
    ],
    actions: [
      { id: "copy", label: "Copy UX guard", primary: true },
      { id: "build", label: "Open Build Phase" },
      { id: "roadmap", label: "Open Roadmap" }
    ]
  };
}

async function handleSimpleGlobalUxGuardAction(action, model) {
  if (action === "copy") {
    try {
      await navigator.clipboard.writeText(buildSimpleGlobalUxGuardText(model));
      showToast("Simple global UX guard copied.");
    } catch {
      showToast("Copy is blocked here, but the UX guard is visible.");
    }
    return;
  }

  const targetSelector = action === "roadmap" ? "#roadmap" : "#build-phase";
  const target = document.querySelector(targetSelector);
  if (target) {
    if (window.location.hash !== targetSelector) window.location.hash = targetSelector;
    scrollToPageTarget(target, 108);
    showToast(action === "roadmap" ? "Roadmap opened." : "Build Phase opened.");
  }
}

function buildSimpleGlobalUxGuardText(model = getSimpleGlobalUxGuardModel()) {
  return [
    "Heavyster Simple Global UX Guard",
    `Version: ${model.version}`,
    `Command: ${model.command}`,
    `Rule: ${model.rule}`,
    `Reason: ${model.reason}`,
    "Complexity budget:",
    ...model.metrics.map((metric) => `- ${metric.label}: ${metric.value} (${metric.detail})`),
    "Release checks:",
    ...model.checks.map((check, index) => `${index + 1}. ${check.label}: ${check.detail} (${check.status})`),
    "Global rule: every country reuses the same supplier account, equipment listing, proof, availability, direct enquiry, billing, and admin review objects.",
    "AI rule: add AI only when it summarizes, routes, classifies, drafts, or removes manual work; never add hidden decisions or extra screens for the user.",
    "Monetization rule: free profile, USD 9/month or USD 99/year per active listing, 0% rental take in phase one, optional 1% only after confirmed workflow proof.",
    "Founder promise: if a feature cannot make the next action clearer, it waits."
  ].join("\n");
}

function renderCalmCommandCenter() {
  const root = document.querySelector("#calmCommandCenter");
  if (!root) return;
  const model = getCalmCommandCenterModel();

  root.innerHTML = `
    <article class="calm-command-main">
      <span>${escapeHtml(model.badge)}</span>
      <strong>${escapeHtml(model.command)}</strong>
      <p>${escapeHtml(model.reason)}</p>
      <b>${escapeHtml(model.verdict)}</b>
    </article>
    <div class="calm-command-lanes">
      ${model.lanes.map((lane) => `
        <article>
          <span>${escapeHtml(lane.role)}</span>
          <strong>${escapeHtml(lane.title)}</strong>
          <p>${escapeHtml(lane.detail)}</p>
          <small>${escapeHtml(lane.next)}</small>
        </article>
      `).join("")}
    </div>
    <div class="calm-command-metrics">
      ${model.metrics.map((metric) => `
        <article>
          <span>${escapeHtml(metric.label)}</span>
          <strong>${escapeHtml(metric.value)}</strong>
          <small>${escapeHtml(metric.detail)}</small>
        </article>
      `).join("")}
    </div>
    <div class="calm-command-actions">
      ${model.actions.map((action) => `
        <button type="button" class="${action.primary ? "is-primary" : ""}" data-calm-command-action="${escapeHtml(action.id)}">
          ${escapeHtml(action.label)}
        </button>
      `).join("")}
    </div>
  `;

  root.querySelectorAll("[data-calm-command-action]").forEach((button) => {
    button.addEventListener("click", () => handleCalmCommandAction(button.dataset.calmCommandAction, model));
  });
}

function getCalmCommandCenterModel() {
  return {
    badge: "Calm command center",
    version: "v136 Calm Command Center",
    command: "Make Heavyster feel peaceful while the marketplace gets bigger.",
    reason: "The product should feel like one quiet desk, even when it supports many countries, thousands of listings, and AI-assisted routing.",
    verdict: "Calm rule: remove noise before adding power.",
    lanes: [
      {
        role: "Buyer",
        title: "Search, proof, one direct enquiry.",
        detail: "The buyer sees the cleanest machine path first, then checks proof before sending one direct supplier message.",
        next: "Next: copy enquiry"
      },
      {
        role: "Supplier",
        title: "List, verify, stay fresh.",
        detail: "The supplier sees paid listings, proof gaps, availability freshness, and lead response without opening a heavy admin maze.",
        next: "Next: confirm availability"
      },
      {
        role: "Founder",
        title: "Demand, trust, listing ARR.",
        detail: "The founder chooses the next market by signal strength, supply gap, proof, and paid-listing revenue, not by noise.",
        next: "Next: open market command"
      }
    ],
    metrics: [
      { label: "Primary next move", value: "1", detail: "one visible action per role" },
      { label: "Global core objects", value: "7", detail: "account, listing, proof, availability, enquiry, billing, admin" },
      { label: "AI rule", value: "Only simplify", detail: "summarize, route, draft, and remove work" },
      { label: "Rental take", value: "0%", detail: "phase-one rental payment stays direct" }
    ],
    actions: [
      { id: "copy", label: "Copy calm brief", primary: true },
      { id: "marketplace", label: "Open Marketplace" },
      { id: "build", label: "Open Build Phase" }
    ]
  };
}

async function handleCalmCommandAction(action, model) {
  if (action === "copy") {
    try {
      await navigator.clipboard.writeText(buildCalmCommandCenterText(model));
      showToast("Calm command center copied.");
    } catch {
      showToast("Copy is blocked here, but the calm command center is visible.");
    }
    return;
  }

  const targetSelector = action === "marketplace" ? "#marketplace" : "#build-phase";
  const target = document.querySelector(targetSelector);
  if (target) {
    if (window.location.hash !== targetSelector) window.location.hash = targetSelector;
    scrollToPageTarget(target, 108);
    showToast(action === "marketplace" ? "Marketplace opened." : "Build Phase opened.");
  }
}

function buildCalmCommandCenterText(model = getCalmCommandCenterModel()) {
  return [
    "Heavyster Calm Command Center",
    `Version: ${model.version}`,
    `Command: ${model.command}`,
    `Rule: ${model.verdict}`,
    `Reason: ${model.reason}`,
    "Role lanes:",
    ...model.lanes.map((lane) => `- ${lane.role}: ${lane.title} ${lane.detail} ${lane.next}`),
    "Calm metrics:",
    ...model.metrics.map((metric) => `- ${metric.label}: ${metric.value} (${metric.detail})`),
    "UI promise: the product should feel like one quiet desk, not a maze of pages.",
    "Global promise: every country reuses the same seven core objects before any local workflow fork is considered.",
    "AI promise: add AI only when it removes clicks, summarizes proof, drafts a useful message, or explains the next action.",
    "Monetization promise: keep phase one calm with free profile, USD 9/month or USD 99/year per active listing, 0% rental take, and optional 1% success fee only after workflow proof."
  ].join("\n");
}

function renderSerenityModePanel() {
  const root = document.querySelector("#serenityModePanel");
  if (!root) return;
  const model = getSerenityModeModel();

  root.innerHTML = `
    <article class="serenity-mode-lead">
      <span>${escapeHtml(model.badge)}</span>
      <strong>${escapeHtml(model.command)}</strong>
      <p>${escapeHtml(model.reason)}</p>
      <b>${escapeHtml(model.rule)}</b>
    </article>
    <div class="serenity-mode-lanes">
      ${model.lanes.map((lane) => `
        <article>
          <span>${escapeHtml(lane.role)}</span>
          <strong>${escapeHtml(lane.title)}</strong>
          <p>${escapeHtml(lane.detail)}</p>
          <small>${escapeHtml(lane.next)}</small>
        </article>
      `).join("")}
    </div>
    <div class="serenity-mode-tokens">
      ${model.designTokens.map((token) => `
        <article>
          <span>${escapeHtml(token.label)}</span>
          <strong>${escapeHtml(token.value)}</strong>
          <small>${escapeHtml(token.detail)}</small>
        </article>
      `).join("")}
    </div>
    <div class="serenity-mode-actions">
      ${model.actions.map((action) => `
        <button type="button" class="${action.primary ? "is-primary" : ""}" data-serenity-action="${escapeHtml(action.id)}">
          ${escapeHtml(action.label)}
        </button>
      `).join("")}
    </div>
  `;

  root.querySelectorAll("[data-serenity-action]").forEach((button) => {
    button.addEventListener("click", () => handleSerenityModeAction(button.dataset.serenityAction, model));
  });
}

function getSerenityModeModel() {
  return {
    badge: "Serenity mode",
    version: "v137 Serenity Mode",
    command: "Make every screen feel like a calm operating room, not a crowded marketplace.",
    reason: "Heavyster should scale to thousands of machines by making the next useful step feel obvious, light, and trustworthy.",
    rule: "Breathe first: show the role, the next move, and the proof before any secondary feature.",
    lanes: [
      {
        role: "Buyer",
        title: "Find one clean path.",
        detail: "Search resolves into the strongest machine, proof, availability, and direct supplier route.",
        next: "Next: copy enquiry"
      },
      {
        role: "Supplier",
        title: "Publish with confidence.",
        detail: "Supplier work stays inside listing, proof, freshness, revenue, and lead response.",
        next: "Next: confirm availability"
      },
      {
        role: "Founder",
        title: "Grow without noise.",
        detail: "Expansion decisions stay tied to demand, supply gap, trust, and paid listing ARR.",
        next: "Next: open Build Phase"
      }
    ],
    designTokens: [
      { label: "Contrast", value: "Soft", detail: "quiet surface, strong text, fewer loud panels" },
      { label: "Spacing", value: "Breathing", detail: "room between choices so the eye can rest" },
      { label: "Proof", value: "Teal", detail: "trust and readiness use calm proof color" },
      { label: "Revenue", value: "Warm", detail: "listing money stays visible without pressure" },
      { label: "AI", value: "Invisible until useful", detail: "assist only when it removes work" }
    ],
    actions: [
      { id: "copy", label: "Copy serenity brief", primary: true },
      { id: "marketplace", label: "Open Marketplace" },
      { id: "build", label: "Open Build Phase" }
    ]
  };
}

async function handleSerenityModeAction(action, model) {
  if (action === "copy") {
    try {
      await navigator.clipboard.writeText(buildSerenityModeText(model));
      showToast("Serenity mode brief copied.");
    } catch {
      showToast("Copy is blocked here, but the serenity brief is visible.");
    }
    return;
  }

  const targetSelector = action === "marketplace" ? "#marketplace" : "#build-phase";
  const target = document.querySelector(targetSelector);
  if (target) {
    if (window.location.hash !== targetSelector) window.location.hash = targetSelector;
    scrollToPageTarget(target, 108);
    showToast(action === "marketplace" ? "Marketplace opened." : "Build Phase opened.");
  }
}

function buildSerenityModeText(model = getSerenityModeModel()) {
  return [
    "Heavyster Serenity Mode",
    `Version: ${model.version}`,
    `Command: ${model.command}`,
    `Rule: ${model.rule}`,
    `Reason: ${model.reason}`,
    "Role lanes:",
    ...model.lanes.map((lane) => `- ${lane.role}: ${lane.title} ${lane.detail} ${lane.next}`),
    "Design tokens:",
    ...model.designTokens.map((token) => `- ${token.label}: ${token.value} (${token.detail})`),
    "Product promise: every new feature must make Heavyster feel calmer, faster, and easier to understand.",
    "AI promise: AI stays quiet until it can summarize proof, draft a better message, route a lead, or remove a manual step.",
    "Monetization rule: free profile, USD 9/month or USD 99/year per active listing, 0% rental take in phase one, optional 1% only after confirmed workflow proof."
  ].join("\n");
}

function renderHeavenlyFocusPanel() {
  const root = document.querySelector("#heavenlyFocusPanel");
  if (!root) return;
  const model = getHeavenlyFocusModel();

  root.innerHTML = `
    <article class="heavenly-focus-lead">
      <span>${escapeHtml(model.badge)}</span>
      <strong>${escapeHtml(model.command)}</strong>
      <p>${escapeHtml(model.reason)}</p>
      <b>${escapeHtml(model.rule)}</b>
    </article>
    <div class="heavenly-focus-steps">
      ${model.steps.map((step) => `
        <article>
          <span>${escapeHtml(step.label)}</span>
          <strong>${escapeHtml(step.value)}</strong>
          <p>${escapeHtml(step.detail)}</p>
        </article>
      `).join("")}
    </div>
    <div class="heavenly-focus-routes">
      ${model.routes.map((route) => `
        <article>
          <span>${escapeHtml(route.role)}</span>
          <strong>${escapeHtml(route.action)}</strong>
          <p>${escapeHtml(route.why)}</p>
          <small>${escapeHtml(route.metric)}</small>
        </article>
      `).join("")}
    </div>
    <div class="heavenly-focus-actions">
      ${model.actions.map((action) => `
        <button type="button" class="${action.primary ? "is-primary" : ""}" data-heavenly-focus-action="${escapeHtml(action.id)}">
          ${escapeHtml(action.label)}
        </button>
      `).join("")}
    </div>
  `;

  root.querySelectorAll("[data-heavenly-focus-action]").forEach((button) => {
    button.addEventListener("click", () => handleHeavenlyFocusAction(button.dataset.heavenlyFocusAction, model));
  });
}

function getHeavenlyFocusModel() {
  return {
    badge: "Heavenly focus",
    version: "v138 Heavenly Focus",
    command: "Show one calm path, one proof reason, one money rule, and one next action.",
    reason: "Heavyster can become global only if every user feels less pressure after every release. v138 makes simplicity a visible operating rule, not just a design preference.",
    rule: "Stillness wins: breathe, choose, act, then expand only if the action became easier.",
    steps: [
      {
        label: "01",
        value: "One path",
        detail: "Start each role from the cleanest route instead of showing every module at once."
      },
      {
        label: "02",
        value: "One proof",
        detail: "Explain the trust reason before asking a buyer, supplier, or founder to decide."
      },
      {
        label: "03",
        value: "One money rule",
        detail: "Keep phase one calm: active listing SaaS revenue, 0% rental take, direct supplier payment."
      },
      {
        label: "04",
        value: "One action",
        detail: "Each screen should make the next useful click obvious before any secondary option appears."
      }
    ],
    routes: [
      {
        role: "Buyer",
        action: "Use the cleanest machine path.",
        why: "Search should lead to a verified machine, proof, availability, and one direct enquiry.",
        metric: "Trust 88/100"
      },
      {
        role: "Supplier",
        action: "Publish one paid listing.",
        why: "A rental yard should see profile, proof, availability, revenue, and lead route in one calm desk.",
        metric: "USD 99/year"
      },
      {
        role: "Founder",
        action: "Fill supply before traffic.",
        why: "Scale only where demand, proof, supply gap, and listing ARR are visible.",
        metric: "USD 6,615 ARR"
      }
    ],
    actions: [
      { id: "copy", label: "Copy focus brief", primary: true },
      { id: "quiet", label: "Enable quiet view" },
      { id: "build", label: "Open Build Phase" }
    ]
  };
}

async function handleHeavenlyFocusAction(action, model) {
  if (action === "copy") {
    try {
      await navigator.clipboard.writeText(buildHeavenlyFocusText(model));
      showToast("Heavenly focus brief copied.");
    } catch {
      showToast("Copy is blocked here, but the heavenly focus brief is visible.");
    }
    return;
  }

  if (action === "quiet") {
    state.simpleMode = true;
    state.simplicityRelease = SIMPLE_UX_RELEASE;
    saveState();
    renderSimplicityBar();
    renderCalmFocusLens();
    renderCalmDataRoom();
    renderLaunchCountryRoom();
    renderLaunchActivationSprint();
    renderProductionSprintRecords();
    renderProductionRoutePack();
    renderClosedLoopLearning();
    renderLearningFeedbackStore();
    renderRecommendationWeightSimulator();
    renderOrganizationLearningBoundary();
    renderBoundaryPolicySmokeConsole();
    renderBoundaryAuditFixturePack();
    renderBoundaryAuditReplayConsole();
    renderHumanApprovalReplayGate();
    renderLearningBenefitLedger();
    renderReinforcementEvaluationLab();
    renderNetworkLearningExchange();
    renderExchangePolicyAuditLog();
    renderLearningQualityDashboard();
    renderLearningActionQueue();
    renderQualityCompletionReceipts();
    syncFocusLayerVisibility();
    document.body.classList.add("simple-mode");
    syncNavigationState();
    showToast("Heavenly focus enabled.");
    return;
  }

  const target = document.querySelector("#build-phase");
  if (target) {
    if (window.location.hash !== "#build-phase") window.location.hash = "#build-phase";
    scrollToPageTarget(target, 108);
    showToast("Build Phase opened.");
  }
}

function buildHeavenlyFocusText(model = getHeavenlyFocusModel()) {
  return [
    "Heavyster Heavenly Focus",
    `Version: ${model.version}`,
    `Command: ${model.command}`,
    `Rule: ${model.rule}`,
    `Reason: ${model.reason}`,
    "Focus steps:",
    ...model.steps.map((step) => `- ${step.value}: ${step.detail}`),
    "Role routes:",
    ...model.routes.map((route) => `- ${route.role}: ${route.action} ${route.why} ${route.metric}`),
    "UI promise: every release should reduce visible effort before it increases visible power.",
    "Global promise: use the same calm buyer, supplier, and founder paths before adding country-specific complexity.",
    "AI promise: AI appears only when it makes the next action easier, not louder.",
    "Monetization rule: free profile, USD 9/month or USD 99/year per active listing, 0% rental take in phase one, optional 1% only after confirmed workflow proof."
  ].join("\n");
}

function buildCalmBackendScaffoldText() {
  return [
    "Heavyster Calm Backend Scaffold",
    "Version: v139 Calm Backend Scaffold",
    "Rule: Quiet backend, calm product.",
    "Purpose: make the production SaaS spine visible without making the interface feel technical.",
    "",
    "Phase-one guardrail:",
    "- No rental payment collection.",
    "- No rental commission.",
    "- Supplier keeps rental payment direct.",
    "- Heavyster earns listing SaaS revenue only.",
    "",
    "Core records:",
    "- SupplierAccount: legal company, owner contact, regions, status, plan.",
    "- EquipmentListing: category, make, model, region, availability, paid status.",
    "- ProofDocument: photos, license, insurance, inspection, expiry, review state.",
    "- ListingSubscription: USD 9/month or USD 99/year per active listing.",
    "- DirectEnquiry: buyer message, supplier route, response state, copied packet.",
    "- AdminReview: approve supplier, approve listing, flag proof, hide risky inventory.",
    "",
    "Acceptance test:",
    "- One supplier can exist.",
    "- One listing can be created.",
    "- One proof record can be attached.",
    "- One enquiry can be logged.",
    "- One paid-listing status can be shown.",
    "- Zero rental payment records exist in phase one.",
    "",
    "UI promise: users see calm decisions; the backend keeps the complexity behind the glass."
  ].join("\n");
}

function buildSupplierAccountShellText() {
  return [
    "Heavyster Supplier Account Shell",
    "Version: v140 Supplier Account Shell",
    "Rule: One supplier, one listing, one direct route.",
    "Purpose: make the first real supplier SaaS account understandable before backend auth is connected.",
    "",
    "Phase-one guardrail:",
    "- No rental payment collection.",
    "- No rental commission.",
    "- Supplier keeps rental payment direct.",
    "- Heavyster earns listing SaaS revenue only.",
    "",
    "First production records:",
    "- SupplierAccount: owner email, phone, WhatsApp, legal name, country, account status.",
    "- SupplierProfile: public name, slug, branch, service regions, response target, storefront visibility.",
    "- FirstListing: category, make, model, region, availability, paid status, public listing state.",
    "- ProofChecklist: photo, license, insurance, inspection, operator certificate, expiry date.",
    "- ListingPlan: free profile, USD 9/month active listing, USD 99/year active listing.",
    "- DirectRoute: phone, email, WhatsApp, enquiry packet, response note, direct-payment reminder.",
    "- AdminReview: approve supplier, approve listing, request proof, pause risky inventory.",
    "",
    "Acceptance test:",
    "- A rental company can create a supplier account shell.",
    "- The supplier can add one company profile.",
    "- The supplier can create one paid-ready machine listing.",
    "- The supplier can attach one proof checklist.",
    "- The buyer can send one direct enquiry route.",
    "- The admin can approve or hold the supplier without rental payment records.",
    "",
    "UI promise: the supplier sees one calm next action at a time, even when the SaaS backend grows."
  ].join("\n");
}

function buildCalmLaunchRoomText() {
  return [
    "Heavyster Calm Launch Room",
    "Version: v141 Calm Launch Room",
    "Rule: launch only the calmest useful wedge.",
    "Purpose: keep the founder, supplier, buyer, and revenue decision on one page before expanding countries or modules.",
    "",
    "Phase-one launch command:",
    "- Start with UAE Lifting.",
    "- Recruit 6 verified supplier accounts.",
    "- Publish 24 paid-ready listings.",
    "- Keep USD 9/month or USD 99/year per active listing.",
    "- Keep 0% rental take and no rental payment custody.",
    "",
    "Launch gates:",
    "- Supply: enough verified machines exist for the buyer search.",
    "- Trust: proof documents and availability are clear enough to enquire.",
    "- Revenue: paid listing count is visible before traffic is scaled.",
    "- Response: supplier can receive and answer direct enquiries.",
    "- Simplicity: buyer, supplier, and founder each see one next action.",
    "",
    "Calm launch sequence:",
    "1. Confirm one market wedge.",
    "2. Activate anchor suppliers.",
    "3. Publish paid-ready listings.",
    "4. Send direct enquiries.",
    "5. Measure response and renewal risk.",
    "6. Expand only when the wedge is simple.",
    "",
    "UI promise: Heavyster grows like a calm operating system, not a crowded marketplace."
  ].join("\n");
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
  const model = getDirectEnquiryModel();
  const route = getSupplierResponseRouteModel();
  const tracker = getResponseTrackerModel();
  const listing = model.listing;
  return [
    "Heavyster direct rental enquiry",
    `Subject: ${model.subject}`,
    `Readiness: ${model.score}/100 - ${model.status}`,
    `Equipment: ${listing.name}`,
    `Supplier: ${listing.supplier}`,
    `Location: ${listing.city}, ${listing.region}`,
    `Availability: ${listing.availability}`,
    `Buyer fit: ${model.fit.score}/100 - ${model.fit.status}`,
    `Trust: ${model.passport.score}/100 - ${model.passport.verdict}`,
    `Quote clarity: ${model.quote.score}/100 - ${model.quote.badge}`,
    `Response route: ${route.primaryChannel} first, backup ${route.backupChannel}, follow up after ${route.followUp}`,
    `Supplier response target: ${route.responseTarget}`,
    `Tracker: ${tracker.statusLabel} - ${tracker.summary}`,
    `Documents: ${listing.documents.join(", ")}`,
    `Project note: ${state.projectNote || "No note provided"}`,
    "",
    "Message:",
    ...model.message,
    "",
    "Payment: customer and rental company arrange directly"
  ].join("\n");
}

function buildReplyClarifierText(model = getReplyClarifierModel()) {
  const listing = model.listing;
  const supplier = listing.supplier;
  const missingQuestions = {
    "Availability": `- Confirm current availability for ${listing.name} in ${listing.city}, ${listing.region}.`,
    "Rate terms": "- Confirm rental rate, billing period, inclusions, exclusions, mobilization, fuel, permit, overtime, and standby terms.",
    "Operator": "- Confirm whether operator, crew, supervisor, or banksman support is included, optional, or not available.",
    "Documents": "- Share current license, insurance, inspection, load test, operator certificate, or permit proof where relevant.",
    "Validity": "- Confirm how long the quote and availability can be held.",
    "Direct payment": "- Confirm the best direct payment and contact route between renter and supplier."
  };

  if (model.mode === "chase") {
    return [
      `Hello ${supplier},`,
      `Following up on the enquiry for ${listing.name} (${listing.id}) in ${listing.city}, ${listing.region}.`,
      "Please confirm availability, rate terms, operator or crew option, relevant documents, quote validity, and best direct contact route.",
      "Heavyster is only routing the enquiry. The rental payment stays directly between renter and supplier.",
      "Once confirmed, the buyer can move to RFQ, quote check, award, or mobilization with less back-and-forth."
    ].join("\n");
  }

  if (model.mode === "handoff") {
    return [
      `Hello ${supplier},`,
      `Thank you for confirming the reply details for ${listing.name} (${listing.id}).`,
      "The buyer now has enough availability, commercial, proof, validity, and direct-payment clarity to continue the decision workflow.",
      "Next step: keep the direct contact route open and be ready for RFQ, quote guard, award, or mobilization questions.",
      "Heavyster will keep the rental payment direct between renter and supplier."
    ].join("\n");
  }

  return [
    `Hello ${supplier},`,
    `Thank you for the reply on ${listing.name} (${listing.id}). Before the buyer moves toward award or dispatch, please confirm:`,
    ...model.missingLabels.map((label) => missingQuestions[label] || `- Confirm ${label.toLowerCase()}.`),
    "Once these points are clear, the buyer can compare the quote with confidence and continue directly with your team.",
    "Heavyster is not collecting rental payment in phase one; this is only to make the direct enquiry cleaner."
  ].join("\n");
}

function buildDecisionReceiptText(model = getDecisionReceiptModel()) {
  return [
    "Heavyster Buyer Decision Receipt",
    `Receipt status: ${model.status} - ${model.score}/100`,
    `Equipment: ${model.listing.name} (${model.listing.id})`,
    `Supplier: ${model.listing.supplier}`,
    `Location: ${model.listing.city}, ${model.listing.region}`,
    `Buyer fit: ${model.fit.score}/100 - ${model.fit.status}`,
    `Trust Passport: ${model.passport.score}/100 - ${model.passport.verdict}`,
    `Reply quality: ${model.quality.score}/100 - ${model.quality.status}`,
    `Quote Guard: ${model.quote.score}/100, ${model.quote.missingCount} unclear term${model.quote.missingCount === 1 ? "" : "s"}`,
    `Response route: ${model.route.primaryChannel} first, backup ${model.route.backupChannel}`,
    `Payment rule: ${model.paymentRule}`,
    "Decision evidence:",
    ...model.evidence.map((item) => `- ${item.ready ? "Ready" : "Watch"}: ${item.label} - ${item.detail}`),
    "Open risks:",
    ...(model.risks.length ? model.risks.map((risk) => `- ${risk}`) : ["- No major decision risks in this prototype receipt."]),
    "Next move:",
    `${model.nextAction}: ${model.nextDetail}`
  ].join("\n");
}

function buildDecisionRouterText(model = getDecisionRouterModel()) {
  return [
    "Heavyster Decision Action Router",
    `Router status: ${model.title}`,
    `Destination: ${model.destination}`,
    `Receipt: ${model.receipt.status} - ${model.receipt.score}/100`,
    `Equipment: ${model.receipt.listing.name} (${model.receipt.listing.id})`,
    `Supplier: ${model.receipt.listing.supplier}`,
    `Open risks: ${model.receipt.risks.length ? model.receipt.risks.join(", ") : "none"}`,
    "Recommended moves:",
    ...model.routes.map((route, index) => `${index + 1}. ${route.label} - ${route.detail}`),
    `Payment rule: ${model.receipt.paymentRule}`
  ].join("\n");
}

function buildListingRoiProofText(model = getListingRoiProofModel()) {
  return [
    "Heavyster Listing ROI Proof",
    `Proof status: ${model.status} - ${model.score}/100`,
    `Supplier: ${model.listing.supplier}`,
    `Equipment: ${model.listing.name} (${model.listing.id})`,
    `Location: ${model.listing.city}, ${model.listing.region}`,
    `Modeled listing ARR: USD ${model.listingAnnualValue.toLocaleString()} per active machine`,
    `Modeled lead value: USD ${model.leadBudget.toLocaleString()}`,
    `Buyer receipt: ${model.receipt.status} - ${model.receipt.score}/100`,
    `Decision route: ${model.router.title}, destination ${model.router.destination}`,
    `Response tracker: ${model.tracker.statusLabel}`,
    `Supplier lead score: ${model.activeLead.score}/100`,
    `Revenue Desk: ${model.revenue.badge} - ${model.revenue.score}/100`,
    "Renewal evidence:",
    ...model.evidence.map((item) => `- ${item.ready ? "Ready" : "Watch"}: ${item.label} - ${item.detail}`),
    "Next supplier conversation:",
    model.nextAction,
    "Phase one rule: supplier pays for active listings; buyer pays the rental company directly; Heavyster does not collect rental payment."
  ].join("\n");
}

function buildSupplierRenewalCloseText(model = getSupplierRenewalClosePackModel()) {
  return [
    "Heavyster Supplier Renewal Close Pack",
    `Close status: ${model.status} - ${model.score}/100`,
    `Supplier: ${model.listing.supplier}`,
    `Equipment: ${model.listing.name} (${model.listing.id})`,
    `Close type: ${model.closeType}`,
    `Close value: USD ${model.closeValue.toLocaleString()} (${model.valueLabel})`,
    `Paid listings: ${model.revenue.paidListings}`,
    `Current listing ARR: USD ${model.revenue.annualRevenue.toLocaleString()}`,
    `ROI proof: ${model.roi.status} - ${model.roi.score}/100`,
    `Lead value: USD ${model.roi.leadBudget.toLocaleString()}`,
    `Offer: ${model.offerTitle}`,
    model.offerDetail,
    "Proof to mention:",
    ...model.proof.map((item) => `- ${item.ready ? "Ready" : "Watch"}: ${item.label} - ${item.detail}`),
    "Supplier ask:",
    model.closeType === "annual upgrade"
      ? `Move ${model.closeListings} active listing${model.closeListings === 1 ? "" : "s"} to the annual USD 99 plan.`
      : model.closeType === "renewal save"
        ? "Keep the active listing package live so buyer visibility and direct enquiries continue."
        : model.closeType === "proof close"
          ? "Approve the annual listing commitment now that buyer proof is visible."
          : "Let us close the remaining proof gaps, then revisit the annual listing plan.",
    "Phase one rule: Heavyster charges only for active listings. Buyer and rental company handle rental payment directly."
  ].join("\n");
}

function buildBuyerWorkbenchText(model = getBuyerWorkbenchModel()) {
  return [
    "Heavyster Buyer Workbench",
    `Buyer desk status: ${model.badge} - ${model.score}/100`,
    `Selected machine: ${model.selected.name}`,
    `Supplier: ${model.selected.supplier}`,
    `Location: ${model.selected.city}, ${model.selected.region}`,
    `Project note: ${state.projectNote || "No project note provided"}`,
    `Next best move: ${model.nextStage.label} - ${model.nextStage.action}`,
    `Mission control: ${model.mission.mode} - ${model.mission.headline}`,
    "Mission gates:",
    ...model.mission.gates.map((gate) => `- ${gate.status}: ${gate.label}. ${gate.detail}`),
    "Rental mission brief:",
    ...model.rentalBrief.lines.map((line) => `- ${line.label}: ${line.value}`),
    "Brief blockers:",
    ...model.rentalBrief.blockers.map((blocker) => `- ${blocker.label}: ${blocker.detail}`),
    "Decision path:",
    ...model.stages.map((stage) => `- ${stage.status}: ${stage.label}, ${stage.score}/100. ${stage.detail}`),
    "Control brief:",
    ...model.packet.map((item) => `- ${item.label}: ${item.value}`),
    "Operating rule: keep the buyer-supplier rental payment direct in phase one. Heavyster supports search, proof, RFQ, award, quote clarity, and mobilization control."
  ].join("\n");
}

function buildBuyerRentalMissionBriefText(model = getBuyerWorkbenchModel().rentalBrief) {
  return [
    "Heavyster Rental Mission Brief",
    `Status: ${model.verdict}`,
    `Mission: ${model.title}`,
    `Summary: ${model.summary}`,
    "Buyer packet:",
    ...model.lines.map((line) => `- ${line.label}: ${line.value}`),
    "Control gates:",
    ...model.blockers.map((blocker) => `- ${blocker.label}: ${blocker.detail}`),
    `Next action: ${model.primaryAction.label} - ${model.primaryAction.detail}`,
    "Payment rule: buyer pays the rental company directly. Heavyster does not collect rental payment in phase one."
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

function buildDealTrailText(model = getDealTrailModel()) {
  return [
    "Heavyster Direct Deal Trail",
    `Trail status: ${model.badge} - ${model.score}/100`,
    `Equipment: ${model.award.winner.listing.name}`,
    `Supplier: ${model.award.winner.listing.supplier}`,
    `Location: ${model.award.winner.listing.city}, ${model.award.winner.listing.region}`,
    `Project note: ${state.projectNote || "No project note provided"}`,
    `Award signal: ${model.award.badge} - ${model.award.winner.total}/100`,
    `Quote Guard: ${model.quote.score}/100, ${model.quote.missingCount} unclear term${model.quote.missingCount === 1 ? "" : "s"}`,
    `Supplier response: ${model.activeLead.score}/100 by ${model.activeLead.lead.channel}`,
    `Mobilization: ${model.mobilize.score}/100`,
    `Payment rule: ${model.paymentRule}`,
    `Future success fee: ${model.futureFeeReady ? "eligible to discuss later after workflow proof" : "not active; keep paid listings first"}`,
    "Workflow steps:",
    ...model.steps.map((step) => `- ${step.status}: ${step.label}, ${step.score}/100. ${step.detail} Action: ${step.action}`),
    "Control gates:",
    ...model.gates.map((gate) => `- ${gate.status}: ${gate.label} (${gate.owner}) - ${gate.detail}`)
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

function buildSupplierWorkbenchText(model = getSupplierWorkbenchModel()) {
  return [
    "Heavyster Supplier Workbench",
    `Supplier desk status: ${model.badge} - ${model.score}/100`,
    `Supplier: ${model.profile.supplier}`,
    `Branch: ${model.profile.branch}`,
    `Public profile: /suppliers/${model.profile.slug}/`,
    `Current listing ARR: USD ${model.revenueDesk.annualRevenue.toLocaleString()}`,
    `Direct enquiry pipeline: USD ${model.leadDesk.totalBudget.toLocaleString()}`,
    `Import upside: USD ${model.fleetImport.annualRevenue.toLocaleString()} ARR from ${model.fleetImport.readyListings} ready listing${model.fleetImport.readyListings === 1 ? "" : "s"}`,
    `Next best move: ${model.nextStage.label} - ${model.nextStage.action}`,
    "Supplier revenue path:",
    ...model.stages.map((stage) => `- ${stage.status}: ${stage.label}, ${stage.score}/100. ${stage.detail}`),
    "Operating brief:",
    ...model.packet.map((item) => `- ${item.label}: ${item.value}`),
    "Operating rule: supplier keeps the rental relationship and rental payment direct. Heavyster earns phase-one SaaS listing revenue from clean, verified, active inventory."
  ].join("\n");
}

function buildFounderWorkbenchText(model = getFounderWorkbenchModel()) {
  return [
    "Heavyster Founder Workbench",
    `Founder desk status: ${model.badge} - ${model.score}/100`,
    `Market: ${model.marketLabel}`,
    `Demand signals: ${model.market.demandCount}`,
    `Active listing ARR: USD ${model.ledger.activeListingArr.toLocaleString()}`,
    `Direct enquiry pipeline: USD ${model.ledger.directPipeline.toLocaleString()}`,
    `Trust debt: ${model.ledger.trustDebt} gap${model.ledger.trustDebt === 1 ? "" : "s"}`,
    `Current bottleneck: ${model.flywheel.bottleneck?.label || "Collect market proof"}`,
    `Next best move: ${model.nextStage.label} - ${model.nextStage.action}`,
    "Scale path:",
    ...model.stages.map((stage) => `- ${stage.status}: ${stage.label}, ${stage.score}/100. ${stage.detail}`),
    "Founder operating brief:",
    ...model.packet.map((item) => `- ${item.label}: ${item.value}`),
    "Operating rule: scale paid listing revenue only as fast as supply, trust, response, and activation can support. Rental payment stays direct between buyer and rental company in phase one."
  ].join("\n");
}

function buildFounderMorningBriefText(model = getFounderMorningBriefModel()) {
  return [
    "Heavyster Founder Morning Brief",
    `Morning status: ${model.badge} - ${model.score}/100`,
    `Market: ${model.daily.marketLabel}`,
    `First move: ${model.firstMove.label} - ${model.firstMove.detail}`,
    `Guardrail to protect: ${model.firstGuardrail.label} - ${model.firstGuardrail.detail}`,
    `ARR in focus: USD ${model.daily.arrAtStake.toLocaleString()}`,
    `Risk signals: ${model.gapCount + model.reviewCount}`,
    "Overnight signals:",
    ...model.signals.map((signal) => `- ${signal.status}: ${signal.label}, ${signal.value}. ${signal.detail}`),
    "Today script:",
    ...model.script.map((line) => `- ${line.label}: ${line.detail}`),
    "Action lanes:",
    ...model.lanes.map((lane) => `- ${lane.status}: ${lane.label}. ${lane.detail}`),
    "Founder rule:",
    "Move supplier, trust, activation, and market proof forward before opening more traffic. Phase one remains listing SaaS: buyer and rental company keep rental payment direct and Heavyster takes 0% rental commission."
  ].join("\n");
}

function buildFounderDailyMovesText(model = getFounderDailyMovesModel()) {
  return [
    "Heavyster Founder Daily Moves",
    `Daily status: ${model.badge} - ${model.score}/100`,
    `Market: ${model.marketLabel}`,
    `Open moves: ${model.openMoveCount}`,
    `Blocked guardrails: ${model.blockedGuardrails}`,
    `ARR at stake: USD ${model.arrAtStake.toLocaleString()}`,
    "Move queue:",
    ...model.moves.map((move) => `- ${move.status}: ${move.label}. Owner ${move.owner}, due ${move.due}, priority ${move.priority}/100, impact USD ${Number(move.impact || 0).toLocaleString()}. ${move.detail}`),
    "Guardrails:",
    ...model.guardrails.map((guardrail) => `- ${guardrail.status}: ${guardrail.label} (${guardrail.owner}) - ${guardrail.detail}`),
    "Today instruction:",
    `Start with ${model.moves[0].label}. Then protect the 0% payment-take rule while fixing the highest trust, supplier, launch, or activation gap.`,
    "Phase-one rule: Heavyster earns listing SaaS revenue first. Buyer and rental company keep rental payment direct."
  ].join("\n");
}

function buildFounderCallSheetText(model = getFounderCallSheetModel()) {
  return [
    "Heavyster Founder Supplier Call Sheet",
    `Call sheet status: ${model.badge} - ${model.score}/100`,
    `Market: ${model.marketLabel}`,
    `Recommended package: ${model.recommendedPackage.label}, ${model.recommendedPackage.listings} listings, USD ${model.recommendedPackage.monthlyRevenue.toLocaleString()}/month or USD ${model.recommendedPackage.annualRevenue.toLocaleString()}/year`,
    `First call: ${model.cards[0].supplier}`,
    "Supplier call queue:",
    ...model.cards.map((card, index) => `${index + 1}. ${card.status}: ${card.supplier}, value USD ${card.value.toLocaleString()}. ${card.hook} Ask: ${card.ask}`),
    "Close script:",
    ...model.script.map((line) => `- ${line.label}: ${line.detail}`),
    "Proof asks:",
    ...model.proofAsks.map((ask) => `- ${ask.status}: ${ask.label} - ${ask.detail}`),
    "Phase-one rule:",
    "Charge for active listings only. Buyer and rental company keep rental payment direct. Heavyster takes 0% rental commission until a later confirmed-booking workflow is proven."
  ].join("\n");
}

function buildDemoFlightDeckText(model = getDemoFlightDeckModel()) {
  return [
    "Heavyster Demo Flight Deck",
    `Demo status: ${model.badge} - ${model.score}/100`,
    `Current story: ${model.summary}`,
    "Guided scenes:",
    ...model.scenes.map((scene, index) => `${index + 1}. ${scene.role}: ${scene.label} - ${scene.signal} Outcome: ${scene.outcome}`),
    "Talk track:",
    ...model.script.map((line) => `- ${line}`),
    "Close:",
    "Heavyster is a paid-listing SaaS first. It helps buyers find verified rental supply, helps suppliers publish and respond, and helps founders scale markets from demand proof while keeping rental payment direct."
  ].join("\n");
}

function buildBoardroomSnapshotText(model = getBoardroomSnapshotModel()) {
  return [
    "Heavyster Boardroom Snapshot",
    `Market: ${model.marketLabel}`,
    `Status: ${model.badge} - ${model.score}/100`,
    `Summary: ${model.summary}`,
    "Metrics:",
    ...model.metrics.map((metric) => `- ${metric.label}: ${metric.value}`),
    "Founder thesis:",
    ...model.thesis.map((item) => `- ${item.status}: ${item.label}. ${item.detail}`),
    "Diligence gates:",
    ...model.gates.map((gate) => `- ${gate.status}: ${gate.label}. ${gate.detail}`),
    "Next move:",
    model.nextMove,
    "Phase-one rule:",
    "Heavyster earns from active equipment listings first. Buyer and rental company keep rental payment direct; commission stays at 0% until booking workflow proof is earned."
  ].join("\n");
}

function buildPilotPackText(model = getPilotPackModel()) {
  return [
    "Heavyster 30-Day Pilot Pack",
    `Market: ${model.marketLabel}`,
    `Pilot status: ${model.badge} - ${model.score}/100`,
    `Summary: ${model.summary}`,
    `First supplier: ${model.firstSupplier}`,
    `Pilot package: ${model.recommendedPackage.label}, ${model.recommendedPackage.listings} listing${model.recommendedPackage.listings === 1 ? "" : "s"}, USD ${model.recommendedPackage.monthlyRevenue.toLocaleString()}/month or USD ${model.recommendedPackage.annualRevenue.toLocaleString()}/year`,
    "Metrics:",
    ...model.metrics.map((metric) => `- ${metric.label}: ${metric.value}`),
    "30-day sprint:",
    ...model.weeks.map((week) => `- ${week.window}: ${week.status} - ${week.label}. Owner ${week.owner}. ${week.detail}`),
    "Pilot gates:",
    ...model.gates.map((gate) => `- ${gate.status}: ${gate.label}. ${gate.detail}`),
    "Next move:",
    model.nextMove,
    "Phase-one rule:",
    "Keep the pilot as listing SaaS. Buyer and rental company keep rental payment direct; Heavyster takes 0% rental commission."
  ].join("\n");
}

function buildFleetImportText(model = getFleetImportModel()) {
  return [
    "Heavyster Fleet Import Console",
    `Supplier: ${model.profile.supplier}`,
    `Import status: ${model.badge} - ${model.score}/100`,
    `Import rows: ${model.totalRows}`,
    `Modeled machine count: ${model.totalListings}`,
    `Ready paid listings: ${model.readyListings}`,
    `Annual listing ARR if published: USD ${model.annualRevenue.toLocaleString()}`,
    "Import queue:",
    ...model.rows.map((row) => `- ${row.source.equipment}: ${row.source.count} item${row.source.count === 1 ? "" : "s"}, ${row.status}, score ${row.score}/100, action ${row.action}, source ${row.source.source}`),
    "Validation gates:",
    ...model.gates.map((gate) => `- ${gate.status}: ${gate.label} - ${gate.detail}`),
    "Supplier instruction:",
    "Clean photos, documents, availability, rate-term notes, and contact routes before publishing rows as paid listings.",
    "Phase one rule: Heavyster charges for active listings only. Rental payment stays direct between buyer and rental company."
  ].join("\n");
}

function buildProofVaultText(model = getProofVaultModel()) {
  return [
    "Heavyster Proof Vault",
    `Supplier: ${model.profile.supplier}`,
    `Vault status: ${model.badge} - ${model.score}/100`,
    `Buyer-ready proof items: ${model.readyCount}`,
    `Expiring soon: ${model.expiringCount}`,
    `Missing proof items: ${model.missingCount}`,
    "Proof register:",
    ...model.rows.map((row) => `- ${row.status}: ${row.type} for ${row.target}, ${row.expiryLabel}, holder ${row.holder}, action ${row.action}`),
    "Buyer trust gates:",
    ...model.gates.map((gate) => `- ${gate.status}: ${gate.label} - ${gate.detail}`),
    "Supplier instruction:",
    "Refresh expiring documents, upload missing proof, and attach buyer-safe proof to public listings before routing high-value enquiries.",
    "Phase one rule: proof improves listing trust and conversion. Rental payment still stays direct between buyer and rental company."
  ].join("\n");
}

function buildRevenueDeskText(model = getRevenueDeskModel()) {
  return [
    "Heavyster Listing Revenue Desk",
    `Supplier: ${model.profile.supplier}`,
    `Revenue status: ${model.badge} - ${model.score}/100`,
    `Paid listings: ${model.paidListings}`,
    `Pending paused or draft listings: ${model.pendingListings}`,
    `Monthly listing SaaS revenue: USD ${model.monthlyRevenue.toLocaleString()}`,
    `Annualized listing revenue: USD ${model.annualRevenue.toLocaleString()}`,
    `Annual-plan share: ${model.annualShare}%`,
    `Renewal-risk listings: ${model.renewalRiskCount}`,
    "Paid listing queue:",
    ...model.rows.map((row) => `- ${row.status}: ${row.package}, ${row.listings} listing${row.listings === 1 ? "" : "s"}, ${row.planLabel}, USD ${row.monthlyRevenue.toLocaleString()}/mo, USD ${row.annualRevenue.toLocaleString()} ARR, ${row.renewalLabel}, action ${row.action}`),
    "Renewal playbook:",
    ...model.playbook.map((step) => `- ${step.status}: ${step.label} - ${step.detail}`),
    "Supplier instruction:",
    "Renew at-risk paid listings first, move monthly listings to annual where trust is proven, then activate paused or draft inventory only after photos, proof, and availability are clean.",
    "Phase one rule: Heavyster charges for active listings only. Buyer-supplier rental payment stays direct and Heavyster takes 0% rental commission."
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

function buildAccountHealthText(model = getAccountHealthModel()) {
  return [
    "Heavyster Supplier Account Health Radar",
    `Supplier: ${model.profile.supplier}`,
    `Health status: ${model.badge} - ${model.score}/100`,
    `Risk signals: ${model.riskCount}`,
    `Listing ARR: USD ${model.revenueDesk.annualRevenue.toLocaleString()}`,
    `Direct enquiry pipeline: USD ${model.leadDesk.totalBudget.toLocaleString()}`,
    `Expansion ARR visible: USD ${model.expansionArr.toLocaleString()}`,
    "Health signals:",
    ...model.signals.map((signal) => `- ${signal.status}: ${signal.label}, ${signal.score}/100, ${signal.detail}`),
    "Next best actions:",
    ...model.actions.map((action) => `- ${action.status}: ${action.label} - ${action.detail}`),
    "Founder instruction:",
    "Use this account health view before renewal calls. Save renewal-risk listings first, prove lead ROI, clean proof gaps, refresh stale yard data, then pitch annual expansion or more active listings.",
    "Phase one rule: account health is about supplier retention and listing SaaS growth. Rental payment still stays direct between buyer and rental company."
  ].join("\n");
}

function buildSupplierSuccessText(model = getSupplierSuccessModel()) {
  return [
    "Heavyster Supplier Success Daily Queue",
    `Book health: ${model.averageHealth}/100 - ${model.badge}`,
    `Call first: ${model.callFirst.profile.supplier}`,
    `At-risk accounts: ${model.atRiskCount}`,
    `Hot leads to protect ROI: ${model.hotLeadCount}`,
    `Renewal-risk listings: ${model.renewalRiskCount}`,
    `Proof gaps: ${model.proofGapCount}`,
    `Visible expansion ARR: USD ${model.expansionArr.toLocaleString()}`,
    "Priority suppliers:",
    ...model.rows.map((row) => `- ${row.urgency}/100 urgency: ${row.profile.supplier}, health ${row.health.score}/100, action ${row.primaryAction.label}, reason ${row.reason}`),
    "Daily operating rhythm:",
    ...model.rhythm.map((item) => `- ${item.status}: ${item.label} - ${item.detail}`),
    "Founder instruction:",
    "Open the first supplier, execute the save action, prove lead ROI, clean proof or freshness gaps, then move to expansion only after the renewal risk is controlled.",
    "Phase one rule: success work protects listing SaaS revenue and supplier trust. Heavyster still takes 0% rental commission."
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
  const target = plan.selectedTarget;
  const supplyLabel = plan.visibleSupply === 1 ? "1 matching listing is" : `${plan.visibleSupply} matching listings are`;
  return [
    `Hi${target ? ` ${target.supplier}` : ""}, we are opening verified ${plan.category.toLowerCase()} listings for ${signal.region} on Heavyster.`,
    `Buyers are already asking for ${signal.equipment} with ${signal.urgency.toLowerCase()} urgency and ${signal.duration} duration.`,
    `The gap is clear: ${supplyLabel} visible in this prototype, and ${plan.hook}.`,
    target
      ? `You are our first target because the fit is ${target.fit}/100. Suggested starter package: ${target.packageListings} listings, USD ${target.annualRevenue.toLocaleString()} per year if kept live.`
      : `We want to onboard ${plan.starterListings} paid listings from a strong supplier at USD 9 monthly or USD 99 yearly per active listing.`,
    `First proof ask: ${target ? target.ask : plan.proof[0]}. If your fleet can provide ${plan.proof.join(", ").toLowerCase()}, we can build your supplier page and route direct enquiries to you without touching the rental payment.`
  ].join("\n");
}

function buildSupplierHuntQueueText(plan = getHuntPlan(getActiveDemandSignal())) {
  const signal = plan.signal;
  return [
    "Heavyster Supplier Hunt Queue",
    `Signal: ${signal.equipment} in ${signal.region}, ${signal.urgency}, ${Number(signal.count || 1)} demand signals.`,
    `Goal: recruit ${plan.supplyGap} missing ${plan.category.toLowerCase()} listings and protect USD ${plan.annualRevenue.toLocaleString()} modeled listing ARR.`,
    "Call order:",
    ...plan.targets.map((target, index) =>
      `${index + 1}. ${target.supplier}, ${target.branch}: ${target.fit}/100 fit, ${target.status}. Ask for ${target.ask}. Starter package ${target.packageListings} listings = USD ${target.annualRevenue.toLocaleString()}/yr.`
    ),
    "Founder rule: recruit proof-first suppliers, keep rental payment direct, and activate listing SaaS before adding booking commission."
  ].join("\n");
}

function buildSupplierHuntCallSheetText(model = getSupplierHuntCallSheetModel()) {
  if (!model.target) {
    return "Heavyster Hunt Call Sheet\nNo supplier target is selected yet.";
  }

  return [
    "Heavyster Hunt Call Sheet",
    `Supplier: ${model.target.supplier}`,
    `Branch: ${model.target.branch}`,
    `Signal: ${model.signal.equipment} in ${model.signal.region}, ${model.signal.urgency}, ${Number(model.signal.count || 1)} demand signal${Number(model.signal.count || 1) === 1 ? "" : "s"}.`,
    `Call score: ${model.score}/100 - ${model.badge}`,
    `Paid listing offer: ${model.packageLabel}`,
    `Proof asks: ${model.proofStack.join(", ")}`,
    `Direct-payment rule: ${model.directRule}`,
    "Call steps:",
    ...model.steps.map((step, index) => `${index + 1}. ${step.label}: ${step.detail}`),
    "Call script:",
    ...model.scriptLines.map((line) => `- ${line}`)
  ].join("\n");
}

function buildSupplierHuntOutcomeText(outcomeModel = getSupplierHuntOutcomeModel()) {
  if (!outcomeModel.target) {
    return "Heavyster Hunt Outcome Gate\nNo supplier call outcome is selected yet.";
  }

  return [
    "Heavyster Hunt Outcome Gate",
    `Outcome: ${outcomeModel.option.label} - ${outcomeModel.option.cue}`,
    `Supplier: ${outcomeModel.target.supplier}`,
    `Branch: ${outcomeModel.target.branch}`,
    `Market: ${outcomeModel.plan.signal.region} ${outcomeModel.plan.category}`,
    `Score after call: ${outcomeModel.score}/100`,
    `Next action: ${outcomeModel.headline}`,
    `Reason: ${outcomeModel.detail}`,
    `Proof ask: ${outcomeModel.proofAsk}`,
    `Listing package: ${outcomeModel.packageListings} paid listings = USD ${outcomeModel.annualRevenue.toLocaleString()}/yr`,
    `Supplier page: ${outcomeModel.profilePath}`,
    `Operating note: ${outcomeModel.note}`,
    "Phase-one rule: rental payment stays direct between buyer and supplier; Heavyster earns listing SaaS first."
  ].join("\n");
}

function buildLaunchReadinessText() {
  return [
    "Heavyster Launch Readiness Gate",
    "Version: v123 Launch Readiness Gate",
    "Production readiness: 42/100",
    "Ready now:",
    "- Buyer demo: marketplace search, proof, direct enquiry, and simple buyer path.",
    "- Supplier demo: listing workspace, proof checklist, paid-listing math, and direct lead story.",
    "Production blockers:",
    "- Accounts: supplier signup, login, company profile, team permissions, and account ownership.",
    "- Data layer: listings, photos, documents, availability, enquiries, and billing records.",
    "- Billing: USD 9 monthly and USD 99 yearly listing plans, invoices, renewal, and cancellation.",
    "- Trust ops: admin approval, document expiry, fraud checks, and support notes.",
    "Next backend sprint: Supplier account MVP.",
    "Sprint scope: signup, supplier profile, listing CRUD, proof upload placeholders, paid-listing status, and direct enquiry logs.",
    "Phase-one rule: keep rental payment direct; Heavyster earns listing SaaS before any booking commission."
  ].join("\n");
}

function buildBackendSprintText() {
  return [
    "Heavyster Backend Sprint Board",
    "Version: v124 Backend Sprint Board",
    "Sprint objective: make Heavyster usable by a real rental company without changing the simple public marketplace.",
    "Sprint 1: Supplier account MVP.",
    "Build lanes:",
    "- Accounts: signup, login, company profile, account owner, and team contact fields.",
    "- Listings: create, edit, pause, publish, category, region, make, model, and availability status.",
    "- Proof: photo/document placeholders, license/insurance/inspection labels, expiry date, and admin status.",
    "- Direct enquiries: buyer message log, supplier contact route, response state, and copied enquiry packet.",
    "- Paid listing status: monthly/yearly plan flag, billable listing count, renewal date, and invoice placeholder.",
    "- Admin review: approve supplier, approve listing, flag document gap, hide unsafe listing, and support note.",
    "Acceptance gates:",
    "1. A supplier can create an account and save a company profile.",
    "2. A supplier can publish one paid listing with proof placeholders and availability.",
    "3. A buyer enquiry is stored and shown to the supplier without Heavyster touching rental payment.",
    "4. Founder/admin can see approval state, trust gaps, listing revenue, and next action.",
    "Phase-one rule: build accounts, data, proof, billing status, and direct enquiry logs before booking commission."
  ].join("\n");
}

function buildSupplierAccountMvpText() {
  return [
    "Heavyster Supplier Account MVP Preview",
    "Version: v125 Supplier Account MVP Preview",
    "MVP promise: one rental company can create an account, publish one paid listing, and receive one direct enquiry.",
    "Primary user: Gulf Lift Services, Abu Dhabi, UAE.",
    "Minimum account record:",
    "- Supplier: legal name, display name, country, city, service regions, owner contact, phone, email, WhatsApp, verification status.",
    "- Company profile: branch, service area, response target, years in market, public slug, storefront status.",
    "- First listing: category, make, model, region, availability, rate note, paid-listing status, publish status.",
    "- Proof placeholders: machine photo, license, insurance, inspection, expiry date, review state.",
    "- Direct enquiry log: buyer message, source listing, supplier route, copied packet, response state.",
    "- Billing status: USD 9 monthly or USD 99 yearly plan, billable listing count, renewal date, invoice placeholder.",
    "- Admin review: supplier approval, listing approval, proof gap, visibility, support note.",
    "Acceptance test:",
    "1. Supplier signs up and saves a profile.",
    "2. Supplier publishes one paid listing with proof placeholders.",
    "3. Buyer sends a direct enquiry and the supplier sees the lead log.",
    "4. Admin can approve, flag, or hide the supplier/listing.",
    "Phase-one rule: Heavyster stores listing SaaS and enquiry history, but rental payment remains direct between buyer and supplier."
  ].join("\n");
}

function buildSupplierOnboardingRunwayText() {
  return [
    "Heavyster Supplier Onboarding Runway",
    "Version: v126 Supplier Onboarding Runway",
    "Goal: make the first supplier account release easy enough for a rental yard to complete without support.",
    "Primary supplier: Gulf Lift Services, Abu Dhabi, UAE.",
    "Runway steps:",
    "1. Create account: legal name, display name, owner name, email, phone, WhatsApp, country, city, and service regions.",
    "2. Complete profile: public slug, branch, service area, response target, fleet categories, storefront status, and support note.",
    "3. Add first machine: category, make, model, region, availability, rate note, paid-listing flag, and publish state.",
    "4. Attach proof: machine photo, license, insurance, inspection, expiry date, document status, and reviewer note.",
    "5. Activate listing: choose USD 9 monthly or USD 99 yearly, billable count, renewal date, invoice placeholder, and cancellation state.",
    "6. Receive direct enquiry: buyer message, source listing, supplier route, copied packet, response state, and direct-payment reminder.",
    "Day-one acceptance:",
    "- Supplier can see exactly what is complete, missing, and blocked.",
    "- Admin can approve account, listing, proof, visibility, and support note.",
    "- Buyer can send one direct enquiry after approval.",
    "- Heavyster records listing SaaS and lead history while rental payment stays supplier-direct.",
    "Simplicity rule: one page, one primary action, one next missing field, and no rental payment workflow in phase one."
  ].join("\n");
}

function buildBackendDataContractText() {
  return [
    "Heavyster Backend Data Contract",
    "Version: v127 Backend Data Contract",
    "Purpose: define the smallest real backend needed to turn the static prototype into phase-one listing SaaS.",
    "Primary flow: supplier account -> profile -> first listing -> proof -> paid listing status -> direct enquiry -> admin review.",
    "Core records:",
    "- SupplierAccount: owner, legal name, display name, contact routes, service regions, account status.",
    "- SupplierProfile: public slug, branch, service area, response target, storefront status, support note.",
    "- EquipmentListing: supplier, category, make, model, region, availability, rate note, publish status.",
    "- ProofDocument: listing, proof type, file placeholder, expiry date, review status, reviewer note.",
    "- ListingSubscription: supplier, plan, billable listing count, renewal date, invoice status, cancellation status.",
    "- DirectEnquiry: buyer message, source listing, supplier route, copied packet, response state, direct-payment reminder.",
    "- AdminReview: supplier approval, listing approval, proof gap, visibility state, support action, reviewed by.",
    "Minimum screens:",
    "1. Supplier saves account and profile.",
    "2. Supplier adds one listing and proof placeholders.",
    "3. Admin approves supplier, listing, and proof state.",
    "4. Buyer sends one direct enquiry.",
    "5. Supplier sees the lead log and billing status.",
    "Phase-one rule: store listing SaaS and enquiry history only. Do not collect rental payment or rental commission yet."
  ].join("\n");
}

function buildSchemaApiBlueprintText() {
  return [
    "Heavyster Schema + API Blueprint",
    "Version: v128 Schema + API Blueprint",
    "Purpose: convert the v127 data contract into the smallest backend route map for the supplier account MVP.",
    "API routes:",
    "- POST /api/supplier-accounts: create supplier account, owner contact, service regions, and account status.",
    "- PATCH /api/supplier-accounts/:id/profile: update public slug, branch, response target, storefront state, and support note.",
    "- POST /api/equipment-listings: create first listing with category, make, model, region, availability, rate note, and publish state.",
    "- POST /api/proof-documents: attach machine photo, license, insurance, inspection, expiry date, and review state.",
    "- POST /api/listing-subscriptions: create USD 9/month or USD 99/year listing plan and billable listing count.",
    "- POST /api/direct-enquiries: store buyer message, source listing, supplier route, copied packet, and response state.",
    "- PATCH /api/admin-reviews/:id: approve supplier, listing, proof, visibility, and support action.",
    "Schema rule:",
    "- Every buyer-visible listing must have supplier account, supplier profile, listing, proof, subscription, direct enquiry readiness, and admin approval state.",
    "MVP response shape:",
    "- account_status, profile_status, listing_status, proof_status, billing_status, enquiry_status, admin_status, next_action.",
    "Acceptance:",
    "1. Create Gulf Lift Services account.",
    "2. Publish Liebherr 130T Mobile Crane as one paid listing.",
    "3. Mark proof placeholders and admin approval.",
    "4. Capture one direct enquiry without collecting rental payment.",
    "Phase-one rule: Heavyster earns listing SaaS and records enquiry history; suppliers keep rental payment direct."
  ].join("\n");
}

function buildApiSmokeConsoleText() {
  return [
    "Heavyster API Smoke Console",
    "Version: v129 API Smoke Console",
    "Purpose: prove the first supplier account backend can create one paid listing and one direct enquiry without touching rental payment.",
    "Smoke sequence:",
    "1. POST /api/supplier-accounts with Gulf Lift Services, Abu Dhabi, UAE, owner contact, email, phone, WhatsApp, and service regions.",
    "2. PATCH /api/supplier-accounts/:id/profile with public slug, branch, response target, storefront state, and support note.",
    "3. POST /api/equipment-listings with Liebherr 130T Mobile Crane, Lifting, UAE, availability soon, rate note, and draft publish state.",
    "4. POST /api/proof-documents with machine photo placeholder, license, insurance, inspection, expiry date, and review state.",
    "5. POST /api/listing-subscriptions with annual plan, USD 99 per active listing, billable count 1, and invoice placeholder.",
    "6. POST /api/direct-enquiries with buyer message, source listing, copied packet, supplier route, and direct-payment reminder.",
    "7. PATCH /api/admin-reviews/:id with supplier approval, listing approval, proof status, visibility, and next support note.",
    "Expected status object:",
    "- account_status: active",
    "- profile_status: public_ready",
    "- listing_status: buyer_visible",
    "- proof_status: placeholder_clean",
    "- billing_status: listing_saas_active",
    "- enquiry_status: direct_route_ready",
    "- admin_status: approved",
    "- next_action: route buyer enquiry to supplier",
    "Hard guardrail: there is no rental payment endpoint in phase one.",
    "Pass condition: one supplier, one paid listing, one proof placeholder set, one direct enquiry, one admin approval, and zero rental payment collection."
  ].join("\n");
}

function buildBackendFixturePackText() {
  return JSON.stringify({
    title: "Heavyster Backend Fixture Pack",
    version: "v130 Backend Fixture Pack",
    phase_one_guardrail: "Heavyster records listing SaaS and direct enquiry history only. Supplier keeps rental payment direct.",
    supplier_account: {
      id: "sup_gulf_lift_services",
      legal_name: "Gulf Lift Services LLC",
      display_name: "Gulf Lift Services",
      country: "UAE",
      city: "Abu Dhabi",
      service_regions: ["UAE"],
      owner_contact: "Operations Desk",
      email: "ops@gulf-lift.example",
      phone: "+971 50 000 0000",
      whatsapp: "+971 50 000 0000",
      account_status: "active"
    },
    supplier_profile: {
      supplier_id: "sup_gulf_lift_services",
      public_slug: "gulf-lift-services",
      public_path: "/suppliers/gulf-lift-services/",
      branch: "Abu Dhabi yard",
      response_target: "same day",
      storefront_status: "public_ready",
      support_note: "Keep availability fresh before routing serious enquiries."
    },
    equipment_listing: {
      id: "listing_liebherr_130t_mobile_crane",
      supplier_id: "sup_gulf_lift_services",
      name: "Liebherr 130T Mobile Crane",
      category: "Lifting",
      region: "UAE",
      city: "Abu Dhabi",
      availability: "available_soon",
      rate_note: "Quote direct",
      listing_status: "buyer_visible",
      paid_listing: true
    },
    proof_document_set: {
      listing_id: "listing_liebherr_130t_mobile_crane",
      machine_photo_status: "placeholder_clean",
      license_status: "received",
      insurance_status: "received",
      inspection_status: "received",
      expiry_review: "review_monthly",
      proof_status: "placeholder_clean"
    },
    listing_subscription: {
      supplier_id: "sup_gulf_lift_services",
      plan: "annual",
      currency: "USD",
      price_per_active_listing: 99,
      billable_listing_count: 1,
      invoice_status: "placeholder_ready",
      billing_status: "listing_saas_active"
    },
    direct_enquiry: {
      id: "lead_crane_abudhabi_001",
      listing_id: "listing_liebherr_130t_mobile_crane",
      buyer_message: "Need equipment for next week. Please confirm rental terms, operator option, delivery, and documents.",
      supplier_route: "email_whatsapp_phone",
      response_state: "route_ready",
      payment_rule: "buyer pays supplier direct"
    },
    admin_review: {
      supplier_status: "approved",
      listing_status: "approved",
      proof_status: "approved_for_prototype",
      visibility: "buyer_visible",
      admin_status: "approved",
      next_action: "route buyer enquiry to supplier"
    },
    pass_condition: "Create these seven objects, return the combined status object, and expose no rental payment endpoint."
  }, null, 2);
}

function buildBackendImplementationContractText() {
  return JSON.stringify({
    title: "Heavyster Backend Implementation Contract",
    version: "v131 Backend Implementation Contract",
    source_fixture_file: "docs/API_SMOKE_FIXTURES.json",
    phase_one_guardrail: "Heavyster earns listing SaaS and stores direct enquiry history only. Supplier keeps rental payment direct.",
    required_tables: [
      "supplier_accounts",
      "supplier_profiles",
      "equipment_listings",
      "proof_document_sets",
      "listing_subscriptions",
      "direct_enquiries",
      "admin_reviews"
    ],
    route_contracts: [
      {
        step: 1,
        method: "POST",
        route: "/api/supplier-accounts",
        fixture_key: "supplier_account",
        expected_status: 201,
        returns: "account_status=active"
      },
      {
        step: 2,
        method: "PATCH",
        route: "/api/supplier-accounts/sup_gulf_lift_services/profile",
        fixture_key: "supplier_profile",
        expected_status: 200,
        returns: "profile_status=public_ready"
      },
      {
        step: 3,
        method: "POST",
        route: "/api/equipment-listings",
        fixture_key: "equipment_listing",
        expected_status: 201,
        returns: "listing_status=buyer_visible"
      },
      {
        step: 4,
        method: "POST",
        route: "/api/proof-document-sets",
        fixture_key: "proof_document_set",
        expected_status: 201,
        returns: "proof_status=placeholder_clean"
      },
      {
        step: 5,
        method: "POST",
        route: "/api/listing-subscriptions",
        fixture_key: "listing_subscription",
        expected_status: 201,
        returns: "billing_status=listing_saas_active"
      },
      {
        step: 6,
        method: "POST",
        route: "/api/direct-enquiries",
        fixture_key: "direct_enquiry",
        expected_status: 201,
        returns: "enquiry_status=direct_route_ready"
      },
      {
        step: 7,
        method: "PATCH",
        route: "/api/admin-reviews/review_gulf_lift_001",
        fixture_key: "admin_review",
        expected_status: 200,
        returns: "admin_status=approved"
      }
    ],
    combined_status_response: {
      account_status: "active",
      profile_status: "public_ready",
      listing_status: "buyer_visible",
      proof_status: "placeholder_clean",
      billing_status: "listing_saas_active",
      enquiry_status: "direct_route_ready",
      admin_status: "approved",
      next_action: "route buyer enquiry to supplier"
    },
    blocked_routes: [
      "/api/rental-payments",
      "/api/booking-payments",
      "/api/rental-commission"
    ],
    pass_condition: "Seed fixtures, run seven route contracts, return the combined status object, and confirm no rental payment endpoint exists."
  }, null, 2);
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

function buildMarketSignalMatrixText(model = getMarketSignalMatrixModel()) {
  const active = model.activeCell;
  if (!active) return "Heavyster Market Signal Matrix\nNo market signals are ready yet.";

  return [
    "Heavyster Market Signal Matrix",
    `Selected wedge: ${active.region} ${active.category}`,
    `Matrix status: ${active.status} - ${active.score}/100`,
    `Demand: ${active.demandCount} signal${active.demandCount === 1 ? "" : "s"}`,
    `Visible supply: ${active.visibleSupply} listing${active.visibleSupply === 1 ? "" : "s"}`,
    `Verified supply: ${active.verifiedSupply} listing${active.verifiedSupply === 1 ? "" : "s"}`,
    `Supply gap: ${active.supplyGap} listing${active.supplyGap === 1 ? "" : "s"}`,
    `Proof score: ${active.proofScore}/100`,
    `Modeled listing ARR: USD ${active.annualRevenue.toLocaleString()}`,
    `Recommended action: ${active.action}`,
    "Top market moves:",
    ...model.topCells.map((cell, index) => `${index + 1}. ${cell.region} ${cell.category}: ${cell.status}, ${cell.score}/100, ${cell.demandCount} demand, ${cell.visibleSupply} supply, USD ${cell.annualRevenue.toLocaleString()} ARR. ${cell.action}.`),
    "Matrix totals:",
    `- Demand signals: ${model.totalDemand}`,
    `- Live supply: ${model.totalSupply}`,
    `- Verified listings: ${model.totalVerified}`,
    `- Modeled matrix ARR: USD ${model.totalArr.toLocaleString()}`,
    "Operating rule: choose markets from demand, supply, proof, and listing ARR together. Scale paid listings and verified direct enquiries before any rental payment or commission workflow."
  ].join("\n");
}

function buildPageFactoryText(model = getPageFactoryModel()) {
  const active = model.active;
  if (!active) return "Heavyster Market Page Factory\nNo market pages are ready yet.";

  return [
    "Heavyster Market Page Factory",
    `Page title: ${active.title}`,
    `Slug: ${active.slug}`,
    `Status: ${active.status} - ${active.readiness}/100 readiness`,
    `Demand: ${active.demandCount} buyer signal${active.demandCount === 1 ? "" : "s"} and ${active.urgencyHits} urgent hit${active.urgencyHits === 1 ? "" : "s"}`,
    `Supply: ${active.visibleSupply} visible listing${active.visibleSupply === 1 ? "" : "s"}, ${active.verifiedSupply} verified listing${active.verifiedSupply === 1 ? "" : "s"}, ${active.supplierTarget} supplier target${active.supplierTarget === 1 ? "" : "s"}`,
    `Listing ARR target: USD ${active.annualRevenue.toLocaleString()} in phase-one paid listing revenue`,
    `Opening copy: Contractors searching for ${active.category.toLowerCase()} equipment rental in ${active.region} need verified machines, document clarity, availability, and a direct supplier route.`,
    `Trust proof: ${active.proof.join(", ")}.`,
    "Launch gates:",
    ...model.gates.map((gate) => `- ${gate.status}: ${gate.label} - ${gate.detail}`),
    "Founder instruction:",
    "Publish only when demand, live supply, verified proof, supplier target, and listing revenue are good enough to protect buyer trust.",
    "Phase one rule: Heavyster monetizes supplier listing visibility. Buyer and rental company still arrange rental payment directly."
  ].join("\n");
}

function buildLaunchRoomText(model = getLaunchRoomModel()) {
  const active = model.active;
  if (!active) return "Heavyster Market Launch Room\nNo launch sprint is ready yet.";

  return [
    "Heavyster Market Launch Room",
    `Launch page: ${active.title}`,
    `Slug: ${active.slug}`,
    `Sprint status: ${model.badge} - ${model.score}/100`,
    `First-week target: invite ${model.targetSuppliers} suppliers and create USD ${model.firstWeekArr.toLocaleString()} first-week listing ARR capacity`,
    `Demand signal: ${active.demandCount} buyer signal${active.demandCount === 1 ? "" : "s"}, ${active.urgencyHits} urgent hit${active.urgencyHits === 1 ? "" : "s"}`,
    `Supply signal: ${active.visibleSupply} live listing${active.visibleSupply === 1 ? "" : "s"}, ${active.verifiedSupply} verified listing${active.verifiedSupply === 1 ? "" : "s"}, ${active.supplierTarget} listing target${active.supplierTarget === 1 ? "" : "s"}`,
    "Seven-day sprint:",
    ...model.steps.map((step) => `- ${step.day}: ${step.status} - ${step.label}. ${step.detail}`),
    "Supplier strike list:",
    ...model.suppliers.map((supplier) => `- ${supplier.status}: ${supplier.name}, ${supplier.score}/100. ${supplier.reason}`),
    "Founder instruction:",
    "Run the page only as far as trust allows. Publish the shell, recruit anchor suppliers, collect proof, open direct enquiries, and review listing ARR before adding any rental payment workflow.",
    "Phase one rule: Heavyster sells listing visibility and operating tools. Rental payment stays direct between buyer and rental company."
  ].join("\n");
}

function buildMarketTwinText(model = getMarketTwinModel()) {
  const active = model.active;
  if (!active) return "Heavyster Market Twin\nNo market twin is ready yet.";

  return [
    "Heavyster Market Twin",
    `Market: ${active.title}`,
    `Scenario: ${model.scenario.label}`,
    `Twin score: ${model.score}/100 - ${model.badge}`,
    `Modeled paid listings: ${model.totalListings}`,
    `Modeled listing revenue: USD ${model.monthlyRevenue.toLocaleString()}/month, USD ${model.annualArr.toLocaleString()}/year`,
    `Demand coverage: ${model.demandCoverage}% of the launch target`,
    `Trust score: ${model.trustScore}/100`,
    `Lead response score: ${model.responseScore}/100`,
    "Launch verdict:",
    `- Founder move: ${model.verdict.label}, ${model.verdict.score}/100. ${model.verdict.detail}`,
    `- Traffic rule: ${model.verdict.rule}`,
    "Verdict gates:",
    ...model.verdict.controls.map((control) => `- ${control.status}: ${control.label} - ${control.detail}`),
    "Next 72 hours:",
    ...model.verdict.actions.map((action) => `- ${action}`),
    "Risk map:",
    ...model.risks.map((risk) => `- ${risk.status}: ${risk.label}, ${risk.score}/100. ${risk.detail} Action: ${risk.action}`),
    "Founder decision:",
    model.score >= 86
      ? "Run the wedge now: publish, recruit, verify, and convert the first suppliers into annual listing proof."
      : model.score >= 72
        ? "Open the wedge carefully: recruit suppliers and route only the enquiries the proof stack can support."
        : "Hold heavy promotion: build verified supply and proof first, then reopen the market twin.",
    "Phase one rule: the twin models listing SaaS revenue and trust readiness only. Heavyster still does not collect rental payment."
  ].join("\n");
}

function buildLiquidityFlywheelText(model = getLiquidityFlywheelModel()) {
  const active = model.active;
  if (!active) return "Heavyster Liquidity Flywheel\nNo liquidity flywheel is ready yet.";

  return [
    "Heavyster Liquidity Flywheel",
    `Market: ${active.title}`,
    `Flywheel score: ${model.score}/100 - ${model.badge}`,
    `Active scenario: ${model.twin.scenario.label}`,
    `Main bottleneck: ${model.bottleneck.label} - ${model.bottleneck.score}/100`,
    `Strongest loop: ${model.strongest.label} - ${model.strongest.score}/100`,
    `Modeled listing ARR: USD ${model.twin.annualArr.toLocaleString()}`,
    "Loop health:",
    ...model.loops.map((loop) => `- ${loop.status}: ${loop.label}, ${loop.score}/100. ${loop.detail} Action: ${loop.action}`),
    "Founder fixes:",
    ...model.fixes.map((fix) => `- ${fix.status}: ${fix.owner} owns ${fix.label}. ${fix.detail}`),
    "Founder decision:",
    model.score >= 84 && model.bottleneck.score >= 70
      ? "Keep the loop turning: add suppliers, protect proof, measure response, and convert visible ROI into annual listing plans."
      : model.score >= 70
        ? "Push carefully: fix the bottleneck first, then scale supplier invites and page traffic."
        : "Do not force traffic yet: repair the bottleneck and rebuild trust before asking the market to compound.",
    "Phase one rule: liquidity means more verified listings and direct enquiries. Heavyster still earns from listing SaaS and keeps rental payment direct."
  ].join("\n");
}

function buildFounderAutopilotText(model = getFounderAutopilotModel()) {
  const active = model.active;
  if (!active) return "Heavyster Founder Autopilot\nNo founder autopilot is ready yet.";

  return [
    "Heavyster Founder Autopilot",
    `Market: ${active.title}`,
    `Autopilot status: ${model.badge} - ${model.score}/100`,
    `Flywheel bottleneck: ${model.flywheel.bottleneck.label} - ${model.flywheel.bottleneck.score}/100`,
    `Primary command: ${model.primary.owner} - ${model.primary.label}`,
    `ARR unlocked: USD ${model.totalImpactArr.toLocaleString()}`,
    `Open commands: ${model.openCommandCount}`,
    "Command queue:",
    ...model.commands.map((command, index) => `${index + 1}. ${command.due} - ${command.owner}: ${command.label} (${command.status}). ${command.detail} Impact: USD ${command.impactArr.toLocaleString()} ARR.`),
    "Operating rule:",
    "Run the smallest command that repairs the market bottleneck first. Keep phase one monetization clean: paid listings, verified supplier pages, direct enquiries, and no rental payment collection."
  ].join("\n");
}

function buildDemandExchangeText(model = getDemandExchangeModel()) {
  const active = model.active;
  if (!active) return "Heavyster Demand Exchange\nNo supplier demand exchange is ready yet.";

  return [
    "Heavyster Demand Exchange",
    `Market: ${active.region} ${active.category}`,
    `Supplier pull score: ${model.score}/100 - ${model.badge}`,
    `Captured buyer demand: ${active.demandCount} signal${active.demandCount === 1 ? "" : "s"}`,
    `Visible supply: ${active.visibleSupply} listing${active.visibleSupply === 1 ? "" : "s"}`,
    `Open supply gap: ${active.supplyGap} listing${active.supplyGap === 1 ? "" : "s"}`,
    `Modeled listing ARR: USD ${active.annualRevenue.toLocaleString()}`,
    `Best-fit supplier: ${active.persona}`,
    "Supplier invite:",
    `Buyers are already searching for ${active.category.toLowerCase()} equipment in ${active.region}. Heavyster can give your fleet a verified page, direct enquiry route, and demand-backed category visibility.`,
    "Proof requested:",
    ...active.proof.map((item) => `- ${item}`),
    "Conversion path:",
    ...model.lanes.map((lane) => `- ${lane.status}: ${lane.label}. ${lane.detail}`),
    "Phase one rule:",
    "The supplier pays only for active equipment listings. The customer still pays the rental company directly, and Heavyster does not collect rental payment."
  ].join("\n");
}

function buildProofDemandText(model = getProofDemandRoomModel()) {
  const active = model.active;
  if (!active) return "Heavyster Proof of Demand Room\nNo proof room is ready yet.";

  return [
    "Heavyster Proof of Demand Room",
    `Market: ${active.region} ${active.category}`,
    `Proof score: ${model.score}/100 - ${model.badge}`,
    `Buyer demand: ${active.demandCount} signal${active.demandCount === 1 ? "" : "s"}`,
    `Supply gap: ${active.supplyGap} listing${active.supplyGap === 1 ? "" : "s"}`,
    `Proof value: USD ${model.proofValue.toLocaleString()}`,
    `Best-fit supplier: ${active.persona}`,
    "Evidence chain:",
    ...model.evidence.map((item) => `- ${item.status}: ${item.label}. ${item.detail}`),
    "Supplier objections answered:",
    ...model.objections.map((item) => `- ${item.label} ${item.answer}`),
    "Supplier pitch:",
    `We are seeing buyer demand for ${active.category.toLowerCase()} equipment in ${active.region}, but visible verified supply is still thin. Heavyster can publish your machines as paid active listings, add proof, route enquiries directly to your team, and keep rental payment between you and the customer.`,
    "Phase one rule:",
    "Use this proof pack to sell active listing subscriptions, not rental commission."
  ].join("\n");
}

function buildSupplierCommitmentText(model = getSupplierCommitmentModel()) {
  const active = model.active;
  if (!active) return "Heavyster Supplier Commitment Room\nNo supplier commitment is ready yet.";

  return [
    "Heavyster Supplier Commitment Room",
    `Market: ${active.region} ${active.category}`,
    `Commitment status: ${model.badge} - ${model.score}/100`,
    `Recommended package: ${model.recommendedPackage.label}`,
    `Active listings: ${model.recommendedPackage.listings}`,
    `Monthly listing revenue: USD ${model.recommendedPackage.monthlyRevenue.toLocaleString()}`,
    `Annual listing revenue: USD ${model.recommendedPackage.annualRevenue.toLocaleString()}`,
    `Proof score: ${model.proof.score}/100 - ${model.proof.badge}`,
    "Package options:",
    ...model.packages.map((item) => `- ${item.status}: ${item.label}, ${item.listings} listings, USD ${item.monthlyRevenue.toLocaleString()}/month or USD ${item.annualRevenue.toLocaleString()}/year. ${item.detail}`),
    "Go-live gates:",
    ...model.gates.map((gate) => `- ${gate.status}: ${gate.owner} owns ${gate.label}. ${gate.detail}`),
    "Commitment note:",
    `We recommend starting with ${model.recommendedPackage.listings} active ${active.category.toLowerCase()} listings for ${active.region}. The market already has buyer demand proof, a visible supply gap, and a clean no-commission model. Heavyster routes enquiries directly to your team while the rental payment stays between you and the customer.`,
    "Phase one rule:",
    "Close the listing subscription first. Do not introduce rental commission until Heavyster earns the booking workflow."
  ].join("\n");
}

function buildListingActivationText(model = getListingActivationModel()) {
  const active = model.active;
  if (!active) return "Heavyster Listing Activation Room\nNo listing activation plan is ready yet.";

  return [
    "Heavyster Listing Activation Room",
    `Market: ${active.region} ${active.category}`,
    `Activation status: ${model.badge} - ${model.activationScore}/100`,
    `Supplier package: ${model.recommendedPackage.label}`,
    `Active paid listings: ${model.recommendedPackage.listings}`,
    `First invoice: USD ${model.recommendedPackage.monthlyRevenue.toLocaleString()}/month or USD ${model.recommendedPackage.annualRevenue.toLocaleString()}/year`,
    `Commitment score: ${model.commitment.score}/100 - ${model.commitment.badge}`,
    "Activation queue:",
    ...model.queue.map((item) => `- ${item.status}: ${item.owner} owns ${item.label}. ${item.detail}`),
    "Billing and launch gates:",
    ...model.gates.map((gate) => `- ${gate.status}: ${gate.owner} owns ${gate.label}. ${gate.detail}`),
    "Go-live note:",
    `${active.region} ${active.category.toLowerCase()} can start with ${model.recommendedPackage.listings} active paid listings, verified proof, availability, and direct enquiry routing. Customers still pay the rental company directly, and Heavyster does not collect rental payment in phase one.`,
    "Phase one rule:",
    "Activate paid listings before booking rails."
  ].join("\n");
}

function buildTrustLedgerText(model = getTrustRevenueLedgerModel()) {
  if (!model.active) return "Heavyster Trust & Revenue Ledger\nNo trust ledger is ready yet.";

  return [
    "Heavyster Trust & Revenue Ledger",
    `Market: ${model.marketLabel}`,
    `Ledger status: ${model.badge} - ${model.score}/100`,
    `Active listing ARR: USD ${model.activeListingArr.toLocaleString()}`,
    `Next package ARR: USD ${model.nextPackageArr.toLocaleString()}`,
    `Direct enquiry pipeline: USD ${model.directPipeline.toLocaleString()}`,
    `Trust debt: ${model.trustDebt} gap${model.trustDebt === 1 ? "" : "s"}`,
    "Market ledger:",
    ...model.rows.map((row) => `- ${row.status}: ${row.label}, ${row.value}. ${row.detail}`),
    "Control gates:",
    ...model.controls.map((control) => `- ${control.status}: ${control.owner} owns ${control.label}. ${control.detail}`),
    "Founder decision:",
    `${model.marketLabel} should scale only when paid listing activation, trust proof, supplier response, and renewal protection are clean. Heavyster keeps rental payment direct in phase one and uses the ledger to protect listing SaaS revenue before any booking rails.`,
    "Phase one rule:",
    "Grow listing ARR only as fast as trust can support."
  ].join("\n");
}

function setText(selector, value) {
  document.querySelector(selector).textContent = value;
}

function formatNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number.toLocaleString("en-US") : "0";
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
