const DATA_VERSION = "20260516-heavyster-marketplace-v1";
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

const trustItems = [
  ["Company profile", "Legal name, service regions, contact desk, and fleet categories."],
  ["Equipment proof", "Photos, serial-friendly internal ID, make, model, specs, and attachments."],
  ["Documents", "License, insurance, inspection, operator certificate, and optional permit notes."],
  ["Availability", "Available now, available soon, or call-to-confirm status for each listing."],
  ["Lead routing", "Phone, WhatsApp, email, and enquiry packet copied to supplier CRM."],
  ["Billing", "USD 9 monthly or USD 99 yearly per active listing, no rental commission."]
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
    selectedListingId: "HY-EX-001",
    projectNote: "Need equipment for next week. Please confirm rental terms, operator option, delivery, and documents.",
    listingCount: 12,
    bookingValue: 8500,
    confirmedBookings: 6,
    supplierView: false,
    trustChecked: [true, true, true, false, false, false]
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    return { ...defaultState(), ...(saved || {}) };
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

  search.value = state.search;
  region.value = state.region;
  availability.value = state.availability;
  note.value = state.projectNote;
  listingCount.value = String(state.listingCount);
  bookingValue.value = String(state.bookingValue);
  confirmedBookings.value = String(state.confirmedBookings);

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

function render() {
  reconcileSelectedListing();
  renderCategoryButtons();
  renderMarketplaceStats();
  renderListings();
  renderLeadPacket();
  renderSupplierTable();
  renderTrustChecklist();
  renderPricingCalculator();
  renderCommissionCalculator();
  document.body.classList.toggle("supplier-view", state.supplierView);
}

function getFilteredListings() {
  const query = state.search.toLowerCase();
  return listings.filter((listing) => {
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
}

function reconcileSelectedListing() {
  const filtered = getFilteredListings();
  if (!listings.some((listing) => listing.id === state.selectedListingId)) {
    state.selectedListingId = listings[0].id;
  }
  if (filtered.length && !filtered.some((listing) => listing.id === state.selectedListingId)) {
    state.selectedListingId = filtered[0].id;
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

function renderListings() {
  const filtered = getFilteredListings();
  const grid = document.querySelector("#listingGrid");

  if (!filtered.length) {
    grid.innerHTML = `<div class="listing-card"><h3>No matching equipment yet</h3><p>Try another region, category, or availability view.</p></div>`;
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

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
}
