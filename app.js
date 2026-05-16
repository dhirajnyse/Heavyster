const DATA_VERSION = "20260516-heavyster-v1";
const STORAGE_KEY = "heavyster.commandDesk.v1";

const jobs = [
  {
    id: "HX-2407",
    site: "North Quay Lift Pad",
    move: "Crawler crane main boom transfer",
    asset: "Liebherr LR 1300",
    crew: "Rigging A",
    route: "Yard 3 to Quay B",
    window: "14:20",
    eta: "16:05",
    weight: 148,
    bridge: 162,
    risk: "high",
    permit: "escort pending",
    status: "critical",
    blocker: "Police escort not confirmed",
    timeline: [
      ["13:50", "Counterweight load checked at Yard 3"],
      ["14:20", "Escort gate call due"],
      ["15:05", "Bridge A7 crossing slot"],
      ["16:05", "Pad arrival and mat walkdown"]
    ]
  },
  {
    id: "HX-2412",
    site: "Metro Vent Shaft",
    move: "Excavator lowbed dispatch",
    asset: "Cat 352F",
    crew: "Lowbed 2",
    route: "Workshop to Shaft 4",
    window: "15:10",
    eta: "17:00",
    weight: 54,
    bridge: 70,
    risk: "medium",
    permit: "clear",
    status: "ready",
    blocker: "Lane marshal handoff",
    timeline: [
      ["14:40", "Hydraulic inspection closes"],
      ["15:10", "Lowbed lock and chain"],
      ["16:15", "City lane closure active"],
      ["17:00", "Shaft 4 unload"]
    ]
  },
  {
    id: "HX-2419",
    site: "South Port Laydown",
    move: "Telehandler swap",
    asset: "Merlo P72.10",
    crew: "Site support",
    route: "Laydown loop",
    window: "16:30",
    eta: "17:20",
    weight: 18,
    bridge: 44,
    risk: "low",
    permit: "clear",
    status: "ready",
    blocker: "None",
    timeline: [
      ["16:05", "Fork carriage check"],
      ["16:30", "Operator changeover"],
      ["17:05", "Laydown north gate"],
      ["17:20", "Handover to steel crew"]
    ]
  },
  {
    id: "HX-2423",
    site: "Airport Apron East",
    move: "Pile rig demob",
    asset: "Soilmec SR-75",
    crew: "Rig Move C",
    route: "Apron East to Holding Bay",
    window: "18:15",
    eta: "21:30",
    weight: 92,
    bridge: 98,
    risk: "high",
    permit: "route variance",
    status: "blocked",
    blocker: "Variance needs client signature",
    timeline: [
      ["17:10", "Tool string split"],
      ["18:15", "Apron access opens"],
      ["19:30", "Security convoy meet"],
      ["21:30", "Holding Bay stand-down"]
    ]
  },
  {
    id: "HX-2431",
    site: "District Cooling Plant",
    move: "Chiller module receiving",
    asset: "Goldhofer PST",
    crew: "Heavy haul A",
    route: "Port Gate 6 to Plant 2",
    window: "22:40",
    eta: "02:10",
    weight: 126,
    bridge: 150,
    risk: "medium",
    permit: "night clear",
    status: "ready",
    blocker: "Final utility spotter call",
    timeline: [
      ["21:35", "Port gate documents"],
      ["22:40", "Night clear window"],
      ["00:20", "Utility corridor crawl"],
      ["02:10", "Plant 2 receiving"]
    ]
  }
];

const assets = [
  { id: "A-17", name: "Liebherr LR 1300", type: "Crawler crane", readiness: 82, status: "Watched", note: "Boom dolly sensor due" },
  { id: "A-22", name: "Cat 352F", type: "Excavator", readiness: 91, status: "Ready", note: "Service clear" },
  { id: "A-34", name: "Merlo P72.10", type: "Telehandler", readiness: 88, status: "Ready", note: "Operator assigned" },
  { id: "A-41", name: "Soilmec SR-75", type: "Pile rig", readiness: 63, status: "Hold", note: "Travel variance open" },
  { id: "A-52", name: "Goldhofer PST", type: "Modular trailer", readiness: 76, status: "Watched", note: "Hydraulic bank 2 warm" }
];

const permitGates = [
  { gate: "Escort desk", owner: "Municipality", due: "14:20", state: "Pending", count: 1 },
  { gate: "Bridge A7", owner: "Road authority", due: "15:05", state: "Watched", count: 2 },
  { gate: "Airport access", owner: "Client security", due: "18:15", state: "Signature", count: 1 },
  { gate: "Night haul", owner: "Traffic control", due: "22:40", state: "Clear", count: 3 }
];

let state = loadState();
let toastTimer = 0;

document.addEventListener("DOMContentLoaded", () => {
  bindControls();
  render();
});

function defaultState() {
  return {
    filter: "all",
    selectedJobId: "HX-2407",
    search: "",
    stormHold: false,
    shift: "day",
    routeMargin: 18,
    note: "Confirm escort desk before Bridge A7 slot. Keep Rig Move C on signature watch."
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
  const searchInput = document.querySelector("#searchInput");
  const stormHoldToggle = document.querySelector("#stormHoldToggle");
  const shiftSelect = document.querySelector("#shiftSelect");
  const marginSlider = document.querySelector("#marginSlider");
  const noteInput = document.querySelector("#noteInput");

  searchInput.value = state.search;
  stormHoldToggle.checked = state.stormHold;
  shiftSelect.value = state.shift;
  marginSlider.value = String(state.routeMargin);
  noteInput.value = state.note;

  searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim();
    saveState();
    render();
  });

  stormHoldToggle.addEventListener("change", (event) => {
    state.stormHold = event.target.checked;
    saveState();
    render();
    showToast(state.stormHold ? "Storm hold applied to route windows." : "Storm hold released.");
  });

  shiftSelect.addEventListener("change", (event) => {
    state.shift = event.target.value;
    saveState();
    render();
  });

  marginSlider.addEventListener("input", (event) => {
    state.routeMargin = Number(event.target.value);
    saveState();
    render();
  });

  noteInput.addEventListener("input", (event) => {
    state.note = event.target.value;
    saveState();
    renderHandoff();
  });

  document.querySelector("#refreshButton").addEventListener("click", () => {
    showToast("Dispatch refreshed. No new blockers.");
    render();
  });

  document.querySelector("#rebalanceButton").addEventListener("click", () => {
    state.filter = "crew";
    saveState();
    showToast("Crew view opened for rebalance.");
    render();
  });

  document.querySelector("#copySummaryButton").addEventListener("click", async () => {
    const summary = buildHandoffText();
    try {
      await navigator.clipboard.writeText(summary);
      showToast("Handoff summary copied.");
    } catch {
      showToast("Copy unavailable. Summary is ready on screen.");
    }
  });

  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      saveState();
      render();
    });
  });

  document.querySelectorAll(".nav-item").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("is-active"));
      link.classList.add("is-active");
    });
  });
}

function render() {
  reconcileSelectedJob();
  renderCommandStrip();
  renderMetrics();
  renderJobs();
  renderRoute();
  renderDetail();
  renderAssets();
  renderPermits();
  renderHandoff();
}

function reconcileSelectedJob() {
  const filtered = getFilteredJobs();
  if (!jobs.some((job) => job.id === state.selectedJobId)) {
    state.selectedJobId = jobs[0].id;
  }
  if (filtered.length && !filtered.some((job) => job.id === state.selectedJobId)) {
    state.selectedJobId = filtered[0].id;
  }
}

function getSelectedJob() {
  return jobs.find((job) => job.id === state.selectedJobId) || jobs[0];
}

function getFilteredJobs() {
  const query = state.search.toLowerCase();
  return jobs.filter((job) => {
    const matchesQuery = !query || [
      job.id,
      job.site,
      job.move,
      job.asset,
      job.route,
      job.crew,
      job.permit
    ].join(" ").toLowerCase().includes(query);

    if (!matchesQuery) return false;
    if (state.filter === "critical") return job.risk === "high" || job.status === "blocked";
    if (state.filter === "permits") return job.permit !== "clear" && job.permit !== "night clear";
    if (state.filter === "crew") return job.crew.toLowerCase().includes("rig") || job.blocker.toLowerCase().includes("marshal") || job.blocker.toLowerCase().includes("spotter");
    return true;
  });
}

function renderCommandStrip() {
  const now = new Date();
  const clock = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const shiftLabel = state.shift.charAt(0).toUpperCase() + state.shift.slice(1);
  document.querySelector("#clockBadge").textContent = `${shiftLabel} ${clock}`;
  document.querySelector("#weatherBadge").textContent = state.stormHold ? "Storm hold active" : "Wind 18 km/h";
  document.querySelector("#planBadge").textContent = state.routeMargin < 12 ? "Plan tight" : "Plan normal";
}

function renderMetrics() {
  const activeMoves = jobs.filter((job) => job.status !== "complete").length;
  const critical = jobs.filter((job) => job.risk === "high" || job.status === "blocked").length;
  const readyAssets = Math.round(average(assets.map((asset) => asset.readiness)));
  const liveAssets = assets.filter((asset) => asset.status !== "Hold").length;
  const permitsReady = Math.round((jobs.filter((job) => job.permit === "clear" || job.permit === "night clear").length / jobs.length) * 100);
  const pending = jobs.length - jobs.filter((job) => job.permit === "clear" || job.permit === "night clear").length;
  const tonnes = jobs.reduce((total, job) => total + job.weight, 0);
  const watchedRoutes = jobs.filter((job) => job.risk !== "low").length;

  setText("#activeMovesMetric", String(activeMoves));
  setText("#activeMovesDelta", `${critical} critical`);
  setText("#fleetReadyMetric", `${readyAssets}%`);
  setText("#fleetReadyDelta", `${liveAssets} assets live`);
  setText("#permitMetric", `${permitsReady}%`);
  setText("#permitDelta", `${pending} pending`);
  setText("#tonnageMetric", `${tonnes} t`);
  setText("#tonnageDelta", `${watchedRoutes} routes watched`);
  setText("#sidebarReadiness", `${readyAssets}%`);
  document.querySelector("#sidebarReadinessBar").style.width = `${readyAssets}%`;
}

function renderJobs() {
  const table = document.querySelector("#jobTable");
  const filtered = getFilteredJobs();
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === state.filter);
  });

  if (!filtered.length) {
    table.innerHTML = `<div class="timeline-item"><time>None</time><div>No moves match this view.</div></div>`;
    return;
  }

  table.innerHTML = filtered.map((job) => `
    <button type="button" class="job-row ${job.id === state.selectedJobId ? "is-selected" : ""}" data-job-id="${escapeHtml(job.id)}" role="listitem">
      <span class="job-main">
        <strong>${escapeHtml(job.move)}</strong>
        <span>${escapeHtml(job.id)} - ${escapeHtml(job.site)}</span>
      </span>
      <span class="job-time">${escapeHtml(job.window)}</span>
      <span class="risk-pill ${escapeHtml(job.risk)}">${escapeHtml(job.risk)}</span>
      <span class="job-weight">${job.weight} t</span>
    </button>
  `).join("");

  table.querySelectorAll(".job-row").forEach((row) => {
    row.addEventListener("click", () => {
      state.selectedJobId = row.dataset.jobId;
      saveState();
      render();
    });
  });
}

function renderRoute() {
  const job = getSelectedJob();
  const requiredMargin = Math.round(((job.bridge - job.weight) / job.bridge) * 100);
  const marginDelta = requiredMargin - state.routeMargin;
  const safe = marginDelta >= 0 && !state.stormHold;
  const riskLabel = safe ? "Route inside margin" : state.stormHold ? "Weather hold" : "Bridge margin tight";

  setText("#marginOutput", `${state.routeMargin}%`);
  setText("#routeRiskChip", riskLabel);
  document.querySelector("#routeRiskChip").classList.toggle("strong", !safe);

  document.querySelector("#routeFacts").innerHTML = [
    ["Selected load", `${job.weight} t`],
    ["Bridge limit", `${job.bridge} t`],
    ["Actual margin", `${requiredMargin}%`]
  ].map(([label, value]) => `
    <div>
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `).join("");
}

function renderDetail() {
  const job = getSelectedJob();
  setText("#detailTitle", job.site);
  setText("#selectedStatusChip", job.status);
  document.querySelector("#selectedStatusChip").classList.toggle("strong", job.status !== "ready");

  document.querySelector("#moveDetail").innerHTML = `
    <div class="move-title">
      <div>
        <h3>${escapeHtml(job.move)}</h3>
        <p class="detail-meta">${escapeHtml(job.asset)} - ${escapeHtml(job.route)}</p>
      </div>
      <span class="risk-pill ${escapeHtml(job.risk)}">${escapeHtml(job.risk)}</span>
    </div>
    <div class="detail-stats">
      <div class="detail-stat"><span>Window</span><strong>${escapeHtml(job.window)}</strong></div>
      <div class="detail-stat"><span>ETA</span><strong>${escapeHtml(job.eta)}</strong></div>
      <div class="detail-stat"><span>Crew</span><strong>${escapeHtml(job.crew)}</strong></div>
    </div>
    <div class="detail-stats">
      <div class="detail-stat"><span>Permit</span><strong>${escapeHtml(job.permit)}</strong></div>
      <div class="detail-stat"><span>Blocker</span><strong>${escapeHtml(job.blocker)}</strong></div>
      <div class="detail-stat"><span>Version</span><strong>${DATA_VERSION.slice(-2)}</strong></div>
    </div>
    <div class="action-row">
      <button type="button" class="primary" data-action="clear">Clear permit</button>
      <button type="button" data-action="escort">Assign escort</button>
      <button type="button" data-action="hold">Route hold</button>
    </div>
    <div class="timeline">
      ${job.timeline.map(([time, label]) => `
        <div class="timeline-item">
          <time>${escapeHtml(time)}</time>
          <div>${escapeHtml(label)}</div>
        </div>
      `).join("")}
    </div>
  `;

  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => handleMoveAction(button.dataset.action));
  });
}

function handleMoveAction(action) {
  const job = getSelectedJob();
  if (action === "clear") {
    job.permit = "clear";
    job.status = job.risk === "high" ? "watched" : "ready";
    job.blocker = job.risk === "high" ? "Keep supervisor signoff" : "None";
    showToast(`${job.id} permit marked clear.`);
  }
  if (action === "escort") {
    job.permit = "escort assigned";
    job.blocker = "Escort assigned, arrival call pending";
    showToast(`${job.id} escort assigned.`);
  }
  if (action === "hold") {
    job.status = "blocked";
    job.blocker = "Route hold set by supervisor";
    showToast(`${job.id} moved to route hold.`);
  }
  saveState();
  render();
}

function renderAssets() {
  document.querySelector("#assetList").innerHTML = assets.map((asset) => {
    const tagClass = asset.status === "Hold" ? "stop" : asset.status === "Watched" ? "warn" : "";
    return `
      <div class="asset-row">
        <span class="asset-main">
          <strong>${escapeHtml(asset.name)}</strong>
          <span>${escapeHtml(asset.type)} - ${escapeHtml(asset.note)}</span>
        </span>
        <span class="asset-bar" aria-label="${asset.readiness}% ready"><span style="width: ${asset.readiness}%"></span></span>
        <span class="asset-tag ${tagClass}">${escapeHtml(asset.status)}</span>
      </div>
    `;
  }).join("");
}

function renderPermits() {
  document.querySelector("#permitGrid").innerHTML = permitGates.map((permit) => `
    <div class="permit-card">
      <span>${escapeHtml(permit.owner)} - ${escapeHtml(permit.due)}</span>
      <strong>${escapeHtml(permit.gate)}</strong>
      <em>${escapeHtml(permit.state)} - ${permit.count} move${permit.count === 1 ? "" : "s"}</em>
    </div>
  `).join("");
}

function renderHandoff() {
  const selected = getSelectedJob();
  const critical = jobs.filter((job) => job.risk === "high" || job.status === "blocked");
  const note = state.note || "No supervisor note.";
  document.querySelector("#handoffSummary").innerHTML = `
    <p><strong>${critical.length} critical moves:</strong> ${critical.map((job) => job.id).join(", ")}</p>
    <p><strong>Selected focus:</strong> ${escapeHtml(selected.id)} ${escapeHtml(selected.site)} at ${escapeHtml(selected.window)}.</p>
    <p><strong>Route posture:</strong> ${state.stormHold ? "storm hold active" : "standard watch"} with ${state.routeMargin}% bridge margin target.</p>
    <small>${escapeHtml(note)}</small>
  `;
}

function buildHandoffText() {
  const selected = getSelectedJob();
  const critical = jobs.filter((job) => job.risk === "high" || job.status === "blocked");
  return [
    "Heavyster shift handoff",
    `Critical moves: ${critical.map((job) => job.id).join(", ") || "none"}`,
    `Selected focus: ${selected.id} ${selected.site} at ${selected.window}`,
    `Route posture: ${state.stormHold ? "storm hold active" : "standard watch"}, bridge margin ${state.routeMargin}%`,
    `Supervisor note: ${state.note || "No supervisor note"}`
  ].join("\n");
}

function setText(selector, value) {
  document.querySelector(selector).textContent = value;
}

function average(values) {
  return values.reduce((total, value) => total + value, 0) / values.length;
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
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2400);
}
