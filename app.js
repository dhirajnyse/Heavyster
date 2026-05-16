const DATA_VERSION = "20260516-heavyster-rfq-room-v8";
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

let state = loadState();
let toastTimer = 0;

document.addEventListener("DOMContentLoaded", () => {
  bindControls();
  render();
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
    builderCategory: "Earthmoving",
    builderModel: "Cat 320 Excavator",
    builderRegion: "UAE",
    builderAvailability: "available",
    demandEquipment: "Crawler crane",
    demandRegion: "UAE",
    demandUrgency: "This week",
    demandDuration: "5 days",
    demandSignals: seedDemandSignals.map((signal) => ({ ...signal })),
    activeDemandKey: "",
    activeMarketKey: "",
    supplierView: false,
    trustChecked: [true, true, true, false, false, false]
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    const base = defaultState();
    const merged = { ...base, ...(saved || {}) };
    if (!Array.isArray(merged.demandSignals)) merged.demandSignals = base.demandSignals;
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
  const sort = document.querySelector("#sortFilter");
  const builderCategory = document.querySelector("#builderCategory");
  const builderModel = document.querySelector("#builderModel");
  const builderRegion = document.querySelector("#builderRegion");
  const builderAvailability = document.querySelector("#builderAvailability");
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
  sort.value = state.sort;
  builderCategory.value = state.builderCategory;
  builderModel.value = state.builderModel;
  builderRegion.value = state.builderRegion;
  builderAvailability.value = state.builderAvailability;
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
    renderRfqRoom();
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
  renderCategoryButtons();
  renderMarketplaceStats();
  renderCatalog();
  renderLeadPacket();
  renderEquipmentDetail();
  renderTrustPassport();
  renderShortlistTray();
  renderRfqRoom();
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
  const owned = listings.slice(0, 4);
  document.querySelector("#supplierTable").innerHTML = owned.map((listing, index) => `
    <div class="supplier-row">
      <div>
        <strong>${escapeHtml(listing.name)}</strong>
        <span>${escapeHtml(listing.category)} - ${escapeHtml(listing.city)}</span>
      </div>
      <span>${listing.availability === "available" ? "Available" : "Soon"}</span>
      <em>${index < 3 ? "Paid" : "Draft"}</em>
    </div>
  `).join("");
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
