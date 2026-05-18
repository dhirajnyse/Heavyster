const DATA_VERSION = "20260518-heavyster-listing-activation-v34";
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
    anchor: "#growth",
    detail: "Use missing demand to recruit suppliers, launch category pages, and keep phase-one monetization clean.",
    steps: [
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
  { role: "Supplier", label: "Fleet Import", anchor: "#fleet-import", signal: "Bulk upload" },
  { role: "Supplier", label: "Proof Vault", anchor: "#proof-vault", signal: "Verify docs" },
  { role: "Supplier", label: "Revenue Desk", anchor: "#revenue-desk", signal: "Renew listings" },
  { role: "Supplier", label: "Account Health", anchor: "#account-health", signal: "Save account" },
  { role: "Supplier", label: "Supplier Studio", anchor: "#studio", signal: "Manage fleet" },
  { role: "Supplier", label: "Lead Desk", anchor: "#lead-desk", signal: "Reply faster" },
  { role: "Supplier", label: "Yard Board", anchor: "#yard", signal: "Fresh stock" },
  { role: "Supplier", label: "Pricing", anchor: "#pricing", signal: "Listing revenue" },
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
  { role: "Founder", label: "Growth", anchor: "#growth", signal: "Recruit supply" },
  { role: "Founder", label: "Market Map", anchor: "#market-maker", signal: "Launch pages" },
  { role: "Founder", label: "Categories", anchor: "#categories", signal: "Plan inventory" },
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
    marketTwinScenario: "balanced",
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
      saveState();
      renderDemandRadar();
      renderSupplierHunt();
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
      renderPageFactory();
      renderLaunchRoom();
      renderMarketTwin();
      renderLiquidityFlywheel();
      renderFounderAutopilot();
      renderDemandExchange();
      renderProofDemandRoom();
      renderSupplierCommitmentRoom();
      renderListingActivationRoom();
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
      renderPageFactory();
      renderLaunchRoom();
      renderMarketTwin();
      renderLiquidityFlywheel();
      renderFounderAutopilot();
      renderDemandExchange();
      renderProofDemandRoom();
      renderSupplierCommitmentRoom();
      renderListingActivationRoom();
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
