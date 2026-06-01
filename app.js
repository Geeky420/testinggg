const defaultVehicles = [
  { name: "Yukon", type: "SUV" },
  { name: "MINI", type: "Car" },
  { name: "BMW", type: "Car" },
  { name: "Dakota", type: "Truck" },
  { name: "Boat", type: "Boat" }
];

const vehicleTypeOptions = ["Car", "Truck", "SUV", "Motorcycle", "Dirt Bike", "Side-by-side", "ATV", "Boat", "Trailer", "Other"];

// Customize future vehicle color schemes here.
const vehicleThemes = {
  Yukon: {
    accent: "#ff7a1a",
    accentStrong: "#c2410c",
    accentSoft: "#fff0e2",
    accentDark: "#32160a"
  },
  MINI: {
    accent: "#ff9f1c",
    accentStrong: "#b45309",
    accentSoft: "#fff4dc",
    accentDark: "#33200a"
  },
  BMW: {
    accent: "#f97316",
    accentStrong: "#9a3412",
    accentSoft: "#ffedd5",
    accentDark: "#351809"
  },
  Dakota: {
    accent: "#ea580c",
    accentStrong: "#7c2d12",
    accentSoft: "#ffeadb",
    accentDark: "#351407"
  },
  Boat: {
    accent: "#fb923c",
    accentStrong: "#c2410c",
    accentSoft: "#fff1e7",
    accentDark: "#33180b"
  }
};

const typeThemes = {
  default: {
    accent: "#ff7a1a",
    accentStrong: "#c2410c",
    accentSoft: "#fff0e2",
    accentDark: "#32160a"
  },
  Boat: {
    accent: "#fb923c",
    accentStrong: "#c2410c",
    accentSoft: "#fff1e7",
    accentDark: "#33180b"
  },
  Motorcycle: {
    accent: "#ff8a2a",
    accentStrong: "#b94d0f",
    accentSoft: "#fff1e6",
    accentDark: "#2e1608"
  },
  "Dirt Bike": {
    accent: "#ff9f1c",
    accentStrong: "#a3440d",
    accentSoft: "#fff4dc",
    accentDark: "#301706"
  },
  "Side-by-side": {
    accent: "#f97316",
    accentStrong: "#9a3412",
    accentSoft: "#ffedd5",
    accentDark: "#351809"
  },
  ATV: {
    accent: "#ea580c",
    accentStrong: "#7c2d12",
    accentSoft: "#ffeadb",
    accentDark: "#351407"
  },
  Trailer: {
    accent: "#f59e0b",
    accentStrong: "#92400e",
    accentSoft: "#fffbeb",
    accentDark: "#2c1907"
  }
};

const workspaceViews = [
  { id: "dashboard", label: "Dashboard", icon: "dashboard" },
  { id: "logbook", label: "Logbook", icon: "list" },
  { id: "profile", label: "Vehicle Profile", icon: "profile" },
  { id: "diagnostics", label: "Diagnostics", icon: "activity" }
];

const categories = [
  { id: "all", label: "All", icon: "list" },
  { id: "maintenance", label: "Maintenance", icon: "wrench" },
  { id: "repairs", label: "Repairs", icon: "alert" },
  { id: "upgrades", label: "Upgrades", icon: "bolt" },
  { id: "notes", label: "Notes", icon: "note" },
  { id: "costs", label: "Costs", icon: "receipt" }
];

const costModes = [
  { id: "logged", label: "Logged", header: "Total spent" },
  { id: "invested", label: "Invested", header: "Total invested" },
  { id: "value", label: "Value", header: "Sell value" }
];

const statusSymbols = [
  { id: "good", label: "Good", icon: "check", color: "#22c55e" },
  { id: "attention", label: "Needs Attention", icon: "alert", color: "#f97316" },
  { id: "urgent", label: "Urgent", icon: "warning", color: "#dc2626" },
  { id: "dueSoon", label: "Due Soon", icon: "clock", color: "#eab308" },
  { id: "repair", label: "Repair", icon: "wrench", color: "#f97316" },
  { id: "electrical", label: "Electrical / Upgrade", icon: "bolt", color: "#f59e0b" },
  { id: "cost", label: "Cost Watch", icon: "receipt", color: "#0f766e" },
  { id: "waiting", label: "Waiting", icon: "hourglass", color: "#64748b" },
  { id: "parts", label: "Parts Ordered", icon: "box", color: "#2563eb" },
  { id: "testing", label: "Testing / Diagnosis", icon: "activity", color: "#7c3aed" },
  { id: "note", label: "Note", icon: "note", color: "#6b7280" },
  { id: "done", label: "Done", icon: "check", color: "#16a34a" }
];

const priorityLevels = [
  { id: "Low", label: "Low", weight: 1 },
  { id: "Medium", label: "Medium", weight: 2 },
  { id: "High", label: "High", weight: 3 },
  { id: "Urgent", label: "Urgent", weight: 4 }
];

const diagnosticStatuses = ["Open", "Watching", "Waiting on parts", "Scheduled", "Done"];

const storageKey = "geeky-garage-state-v1";

const seedProfiles = {
  Yukon: {
    profileType: "Automotive",
    year: "2007",
    make: "GMC",
    model: "Yukon",
    trim: "",
    engine: "5.3L V8",
    transmission: "4L60E automatic",
    transCode: "4L60E",
    vin: "",
    mileage: "154230",
    drivetrain: "4WD",
    fuel: "Gasoline",
    obdCodes: "",
    batteryVoltage: "",
    notes: "Dash came back when OBD scanner plugged in."
  },
  MINI: {
    profileType: "Automotive",
    year: "2012",
    make: "MINI",
    model: "Cooper S",
    trim: "",
    engine: "",
    transmission: "",
    transCode: "",
    vin: "",
    mileage: "",
    drivetrain: "FWD",
    fuel: "Gasoline",
    obdCodes: "",
    batteryVoltage: "",
    notes: ""
  },
  BMW: {
    profileType: "Automotive",
    year: "2015",
    make: "BMW",
    model: "328i",
    trim: "",
    engine: "",
    transmission: "",
    transCode: "",
    vin: "",
    mileage: "",
    drivetrain: "",
    fuel: "Gasoline",
    obdCodes: "",
    batteryVoltage: "",
    notes: ""
  },
  Dakota: {
    profileType: "Automotive",
    year: "2001",
    make: "Dodge",
    model: "Dakota",
    trim: "",
    engine: "",
    transmission: "",
    transCode: "",
    vin: "",
    mileage: "",
    drivetrain: "",
    fuel: "Gasoline",
    obdCodes: "",
    batteryVoltage: "",
    notes: ""
  },
  Boat: {
    profileType: "Boat",
    year: "",
    make: "",
    model: "Boat",
    hullId: "",
    engine: "",
    engineSerial: "",
    outdrive: "",
    electronics: "",
    batterySetup: "",
    mileageHours: "",
    notes: ""
  }
};

const seedEntries = [
  {
    id: "seed-yukon-oil",
    vehicle: "Yukon",
    category: "maintenance",
    title: "Oil Change",
    cost: 86.42,
    date: "2026-05-04",
    notes: "5W-30, filter, and quick underside check."
  },
  {
    id: "seed-yukon-transmission",
    vehicle: "Yukon",
    category: "maintenance",
    title: "Transmission Service",
    cost: 219,
    date: "2026-04-18",
    notes: "Fluid and pan service logged."
  },
  {
    id: "seed-yukon-brakes",
    vehicle: "Yukon",
    category: "maintenance",
    title: "Brakes",
    cost: 365.12,
    date: "2026-03-22",
    notes: "Front pads and rotor inspection."
  },
  {
    id: "seed-yukon-electrical",
    vehicle: "Yukon",
    category: "repairs",
    title: "Yukon Electrical Issue",
    cost: 74.99,
    date: "2026-05-30",
    notes: "Dash came back when OBD scanner plugged in."
  },
  {
    id: "seed-boat-electronics",
    vehicle: "Boat",
    category: "upgrades",
    title: "Boat Electronics",
    cost: 642.11,
    date: "2026-05-12",
    notes: "Electronics refresh and wiring parts."
  }
];

const seedDiagnostics = [
  {
    id: "diag-yukon-electrical",
    vehicle: "Yukon",
    linkedRepairId: "seed-yukon-electrical",
    title: "Yukon Electrical Issue",
    system: "Electrical / instrument cluster",
    mileage: "154230",
    codes: "",
    symptoms: "Dash came back when OBD scanner plugged in.",
    testsTried: "Confirmed dash response when scanner was connected. Next useful steps: battery voltage, grounds, DLC power/ground, and cluster power feeds.",
    createdAt: "2026-05-30",
    status: "Open",
    statusSymbol: "attention",
    statusLabel: "Electrical issue open",
    priority: "High",
    flagged: true,
    scheduledDate: "",
    scheduledTime: "",
    durationHours: "1.5",
    resources: [
      {
        label: "Saved search: 2007 GMC Yukon instrument cluster ground DLC",
        url: "https://www.google.com/search?q=2007+GMC+Yukon+instrument+cluster+ground+DLC"
      }
    ]
  }
];

let state = loadState();
let selectedVehicle = state.selectedVehicle || getVehicleNames(state.vehicles)[0] || "Yukon";
let activeFilter = "all";
let activeView = workspaceViews.some((view) => view.id === state.activeView) ? state.activeView : "dashboard";
let costMode = costModes.some((mode) => mode.id === state.costMode) ? state.costMode : "logged";
let vehicleMenuOpen = false;
let addVehicleModalOpen = false;

const els = {
  vehicleNav: document.querySelector("#vehicleNav"),
  workspaceTabs: document.querySelector("#workspaceTabs"),
  dashboardView: document.querySelector("#dashboardView"),
  filterBar: document.querySelector("#filterBar"),
  garageSummary: document.querySelector("#garageSummary"),
  logbookView: document.querySelector("#logbookView"),
  profileView: document.querySelector("#profileView"),
  diagnosticsView: document.querySelector("#diagnosticsView"),
  vehicleTitle: document.querySelector("#vehicleTitle"),
  headerTotalLabel: document.querySelector("#headerTotalLabel"),
  headerTotal: document.querySelector("#headerTotal"),
  headerEntries: document.querySelector("#headerEntries"),
  activeVehicleLabel: document.querySelector("#activeVehicleLabel"),
  entryForm: document.querySelector("#entryForm"),
  categoryInput: document.querySelector("#categoryInput"),
  titleInput: document.querySelector("#titleInput"),
  costInput: document.querySelector("#costInput"),
  dateInput: document.querySelector("#dateInput"),
  statusSymbolInput: document.querySelector("#statusSymbolInput"),
  priorityInput: document.querySelector("#priorityInput"),
  scheduleDateInput: document.querySelector("#scheduleDateInput"),
  scheduleTimeInput: document.querySelector("#scheduleTimeInput"),
  durationInput: document.querySelector("#durationInput"),
  statusLabelInput: document.querySelector("#statusLabelInput"),
  flaggedInput: document.querySelector("#flaggedInput"),
  notesInput: document.querySelector("#notesInput"),
  logTitle: document.querySelector("#logTitle"),
  visibleCount: document.querySelector("#visibleCount"),
  entryList: document.querySelector("#entryList"),
  costTitle: document.querySelector("#costTitle"),
  costSubtitle: document.querySelector("#costSubtitle"),
  costModeToggle: document.querySelector("#costModeToggle"),
  valueSummary: document.querySelector("#valueSummary"),
  costBreakdown: document.querySelector("#costBreakdown"),
  noteCount: document.querySelector("#noteCount"),
  noteList: document.querySelector("#noteList"),
  themeToggle: document.querySelector("#themeToggle"),
  themeLabel: document.querySelector("#themeLabel")
};

init();

function init() {
  state.theme = state.theme === "night" ? "night" : "day";
  state.vehicles = normalizeVehicles(state.vehicles);
  state.entries = normalizeEntries(state.entries, state.vehicles);
  state.profiles = mergeProfiles(state.profiles, state.vehicles);
  state.diagnostics = normalizeDiagnostics(state.diagnostics, state.vehicles);
  selectedVehicle = getVehicleNames(state.vehicles).includes(selectedVehicle) ? selectedVehicle : getVehicleNames(state.vehicles)[0];
  applyTheme(state.theme);
  renderStaticFormOptions();
  els.dateInput.value = today();
  render();

  els.vehicleNav.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-toggle-vehicles]");
    if (toggle) {
      vehicleMenuOpen = !vehicleMenuOpen;
      addVehicleModalOpen = false;
      renderVehicles();
      return;
    }

    const openAddVehicle = event.target.closest("[data-open-add-vehicle]");
    if (openAddVehicle) {
      vehicleMenuOpen = false;
      addVehicleModalOpen = true;
      renderVehicles();
      requestAnimationFrame(() => document.querySelector("#addVehicleForm input[name='vehicleName']")?.focus());
      return;
    }

    const closeAddVehicle = event.target.closest("[data-close-add-vehicle]");
    if (closeAddVehicle) {
      addVehicleModalOpen = false;
      renderVehicles();
      return;
    }

    if (event.target.matches("[data-add-vehicle-backdrop]")) {
      addVehicleModalOpen = false;
      renderVehicles();
      return;
    }

    const removePhoto = event.target.closest("[data-remove-photo]");
    if (removePhoto) {
      removeVehiclePhoto(selectedVehicle);
      return;
    }

    const button = event.target.closest(".vehicle-option[data-vehicle]");
    if (!button) return;
    selectedVehicle = button.dataset.vehicle;
    activeFilter = "all";
    vehicleMenuOpen = false;
    addVehicleModalOpen = false;
    state.selectedVehicle = selectedVehicle;
    saveState();
    render();
  });

  els.vehicleNav.addEventListener("submit", async (event) => {
    if (!event.target.matches("#addVehicleForm")) return;
    event.preventDefault();
    await addVehicle(event.target);
  });

  els.vehicleNav.addEventListener("change", async (event) => {
    const input = event.target.closest("[data-vehicle-photo]");
    if (!input?.files?.[0]) return;
    await updateVehiclePhoto(selectedVehicle, input.files[0]);
  });

  document.addEventListener("click", (event) => {
    const clickPath = event.composedPath ? event.composedPath() : [];
    if (els.vehicleNav.contains(event.target) || clickPath.includes(els.vehicleNav)) return;
    if (!vehicleMenuOpen) return;
    vehicleMenuOpen = false;
    renderVehicles();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !addVehicleModalOpen) return;
    addVehicleModalOpen = false;
    renderVehicles();
  });

  els.workspaceTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-view]");
    if (!button) return;
    activeView = button.dataset.view;
    state.activeView = activeView;
    saveState();
    render();
  });

  els.filterBar.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    render();
  });

  els.dashboardView.addEventListener("click", (event) => {
    const item = event.target.closest("[data-dashboard-item]");
    if (item) {
      selectedVehicle = item.dataset.dashboardVehicle;
      activeView = item.dataset.dashboardSource === "diagnostic" ? "diagnostics" : "logbook";
      activeFilter = item.dataset.dashboardCategory || "all";
      state.selectedVehicle = selectedVehicle;
      state.activeView = activeView;
      saveState();
      render();
      return;
    }

    const target = event.target.closest("[data-dashboard-vehicle]");
    if (!target) return;
    selectedVehicle = target.dataset.dashboardVehicle;
    state.selectedVehicle = selectedVehicle;
    saveState();
    render();
  });

  els.categoryInput.addEventListener("change", () => {
    els.statusSymbolInput.value = defaultSymbolForCategory(els.categoryInput.value);
    if (els.categoryInput.value === "repairs") {
      els.priorityInput.value = "High";
      els.flaggedInput.checked = true;
      return;
    }
    els.priorityInput.value = "Medium";
    els.flaggedInput.checked = false;
  });

  els.costModeToggle.addEventListener("click", (event) => {
    const button = event.target.closest("[data-cost-mode]");
    if (!button) return;
    costMode = button.dataset.costMode;
    state.costMode = costMode;
    saveState();
    render();
  });

  els.entryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addEntry();
  });

  els.entryList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-delete]");
    if (!button) return;
    state.entries = state.entries.filter((entry) => entry.id !== button.dataset.delete);
    saveState();
    render();
  });

  els.profileView.addEventListener("submit", (event) => {
    if (!event.target.matches("#profileForm")) return;
    event.preventDefault();
    saveProfile(event.target);
  });

  els.profileView.addEventListener("change", async (event) => {
    const input = event.target.closest("#profilePhotoInput");
    if (!input?.files?.[0]) return;
    await updateVehiclePhoto(selectedVehicle, input.files[0]);
  });

  els.profileView.addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove-profile-photo]");
    if (!button) return;
    removeVehiclePhoto(selectedVehicle);
  });

  els.diagnosticsView.addEventListener("submit", (event) => {
    if (!event.target.matches("#diagnosticForm")) return;
    event.preventDefault();
    addDiagnostic(event.target);
  });

  els.diagnosticsView.addEventListener("click", (event) => {
    const button = event.target.closest("[data-delete-diagnostic]");
    if (!button) return;
    state.diagnostics = state.diagnostics.filter((item) => item.id !== button.dataset.deleteDiagnostic);
    saveState();
    render();
  });

  els.themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "night" ? "day" : "night";
    applyTheme(state.theme);
    saveState();
  });
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (saved && Array.isArray(saved.entries)) {
      const vehicles = normalizeVehicles(saved.vehicles);
      const vehicleNames = getVehicleNames(vehicles);
      const selected = vehicleNames.includes(saved.selectedVehicle) ? saved.selectedVehicle : vehicleNames[0];

      return {
        vehicles,
        selectedVehicle: selected,
        entries: normalizeEntries(saved.entries.filter((entry) => vehicleNames.includes(entry.vehicle)), vehicles),
        profiles: mergeProfiles(saved.profiles, vehicles),
        diagnostics: normalizeDiagnostics(saved.diagnostics, vehicles),
        theme: saved.theme === "night" ? "night" : "day",
        costMode: costModes.some((mode) => mode.id === saved.costMode) ? saved.costMode : "logged",
        activeView: workspaceViews.some((view) => view.id === saved.activeView) ? saved.activeView : "dashboard"
      };
    }
  } catch {
    localStorage.removeItem(storageKey);
  }

  return {
    vehicles: normalizeVehicles(),
    selectedVehicle: "Yukon",
    entries: normalizeEntries(seedEntries),
    profiles: mergeProfiles(),
    diagnostics: normalizeDiagnostics(seedDiagnostics),
    theme: "day",
    costMode: "logged",
    activeView: "dashboard"
  };
}

function normalizeVehicles(savedVehicles) {
  const source = Array.isArray(savedVehicles) ? savedVehicles : defaultVehicles;
  const normalized = [];
  const seen = new Set();

  source.forEach((vehicle) => {
    const record = typeof vehicle === "string" ? { name: vehicle, type: "Automotive" } : vehicle;
    const name = String(record?.name || "").trim();
    if (!name) return;

    const key = name.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);

    normalized.push({
      name,
      type: String(record?.type || record?.profileType || "Automotive").trim() || "Automotive"
    });
  });

  defaultVehicles.forEach((vehicle) => {
    const key = vehicle.name.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    normalized.push({ ...vehicle });
  });

  return normalized.length ? normalized : defaultVehicles.map((vehicle) => ({ ...vehicle }));
}

function mergeProfiles(savedProfiles = {}, vehicleRecords = defaultVehicles) {
  return normalizeVehicles(vehicleRecords).reduce((profiles, record) => {
    const vehicle = record.name;
    profiles[vehicle] = {
      ...defaultProfileFor(record),
      ...(seedProfiles[vehicle] || {}),
      ...(savedProfiles?.[vehicle] || {})
    };
    profiles[vehicle].profileType = profiles[vehicle].profileType || record.type;
    return profiles;
  }, {});
}

function normalizeEntries(savedEntries, vehicleRecords = defaultVehicles) {
  const vehicleNames = getVehicleNames(normalizeVehicles(vehicleRecords));
  const entries = Array.isArray(savedEntries) ? savedEntries : seedEntries;
  return entries
    .filter((entry) => vehicleNames.includes(entry.vehicle))
    .map((entry) => normalizeEntry(entry));
}

function normalizeEntry(entry) {
  const category = entry.category || "notes";
  const isRepair = category === "repairs";

  return {
    ...entry,
    category,
    status: entry.status || (isRepair ? "Open" : "Logged"),
    statusSymbol: statusSymbols.some((symbol) => symbol.id === entry.statusSymbol) ? entry.statusSymbol : defaultSymbolForCategory(category),
    statusLabel: entry.statusLabel || (isRepair ? "Repair open" : ""),
    priority: priorityLevels.some((priority) => priority.id === entry.priority) ? entry.priority : isRepair ? "High" : "Medium",
    flagged: typeof entry.flagged === "boolean" ? entry.flagged : isRepair,
    scheduledDate: entry.scheduledDate || "",
    scheduledTime: entry.scheduledTime || "",
    durationHours: entry.durationHours || ""
  };
}

function normalizeDiagnostics(savedDiagnostics, vehicleRecords = defaultVehicles) {
  const diagnostics = Array.isArray(savedDiagnostics) ? savedDiagnostics : seedDiagnostics;
  const vehicleNames = getVehicleNames(normalizeVehicles(vehicleRecords));
  return diagnostics
    .filter((item) => vehicleNames.includes(item.vehicle))
    .map((item) => normalizeDiagnostic(item));
}

function normalizeDiagnostic(item) {
  return {
    ...item,
    status: item.status || "Open",
    statusSymbol: statusSymbols.some((symbol) => symbol.id === item.statusSymbol) ? item.statusSymbol : "testing",
    statusLabel: item.statusLabel || item.status || "Diagnostic open",
    priority: priorityLevels.some((priority) => priority.id === item.priority) ? item.priority : item.status === "Done" ? "Low" : "High",
    flagged: typeof item.flagged === "boolean" ? item.flagged : item.status !== "Done",
    scheduledDate: item.scheduledDate || "",
    scheduledTime: item.scheduledTime || "",
    durationHours: item.durationHours || ""
  };
}

function defaultProfileFor(record) {
  const type = String(record?.type || "Automotive");
  const name = String(record?.name || "");
  const valueFields = {
    pricePaid: "",
    sellValue: ""
  };

  if (type === "Boat") {
    return {
      ...valueFields,
      profileType: "Boat",
      year: "",
      make: "",
      model: name,
      hullId: "",
      engine: "",
      engineSerial: "",
      outdrive: "",
      electronics: "",
      batterySetup: "",
      mileageHours: "",
      notes: ""
    };
  }

  if (["Motorcycle", "Dirt Bike", "Side-by-side", "ATV"].includes(type)) {
    return {
      ...valueFields,
      profileType: type,
      year: "",
      make: "",
      model: name,
      engine: "",
      vin: "",
      mileageHours: "",
      drivetrain: "",
      fuel: "Gasoline",
      batteryVoltage: "",
      obdCodes: "",
      tireSize: "",
      notes: ""
    };
  }

  if (type === "Trailer") {
    return {
      ...valueFields,
      profileType: "Trailer",
      year: "",
      make: "",
      model: name,
      vin: "",
      axles: "",
      tireSize: "",
      hitch: "",
      brakeType: "",
      notes: ""
    };
  }

  return {
    ...valueFields,
    profileType: type === "Other" ? "Other" : "Automotive",
    year: "",
    make: "",
    model: name,
    trim: "",
    engine: "",
    transmission: "",
    transCode: "",
    vin: "",
    mileage: "",
    drivetrain: "",
    fuel: "Gasoline",
    obdCodes: "",
    batteryVoltage: "",
    notes: ""
  };
}

function saveState() {
  state.activeView = activeView;
  state.selectedVehicle = selectedVehicle;
  state.costMode = costMode;
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function renderStaticFormOptions() {
  els.statusSymbolInput.innerHTML = renderStatusSymbolOptions("repair");
  els.priorityInput.innerHTML = renderPriorityOptions("Medium");
  els.statusSymbolInput.value = defaultSymbolForCategory(els.categoryInput.value);
  els.priorityInput.value = "Medium";
}

async function addVehicle(form) {
  const formData = new FormData(form);
  const requestedName = String(formData.get("vehicleName") || "").trim();
  if (!requestedName) return;

  const type = String(formData.get("profileType") || "Other").trim() || "Other";
  const name = uniqueVehicleName(requestedName);
  const record = { name, type };
  const photoFile = form.querySelector('input[name="vehiclePhoto"]')?.files?.[0];
  const photoDataUrl = photoFile ? await readImageFile(photoFile).catch(() => "") : "";

  state.vehicles = [...normalizeVehicles(state.vehicles), record];
  state.profiles = {
    ...state.profiles,
    [name]: {
      ...defaultProfileFor(record),
      profileType: type,
      year: String(formData.get("year") || "").trim(),
      make: String(formData.get("make") || "").trim(),
      model: String(formData.get("model") || name).trim() || name,
      pricePaid: normalizeMoneyInput(formData.get("pricePaid")),
      sellValue: normalizeMoneyInput(formData.get("sellValue")),
      photoDataUrl
    }
  };

  selectedVehicle = name;
  activeFilter = "all";
  activeView = "profile";
  vehicleMenuOpen = false;
  addVehicleModalOpen = false;
  saveState();
  form.reset();
  render();
}

async function updateVehiclePhoto(vehicle, file) {
  const photoDataUrl = await readImageFile(file).catch(() => "");
  if (!photoDataUrl) return;
  state.profiles[vehicle] = {
    ...getProfile(vehicle),
    photoDataUrl
  };
  saveState();
  render();
}

function removeVehiclePhoto(vehicle) {
  const profile = { ...getProfile(vehicle) };
  delete profile.photoDataUrl;
  state.profiles[vehicle] = profile;
  saveState();
  render();
}

function readImageFile(file) {
  if (!file || !file.type.startsWith("image/")) return Promise.resolve("");

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(String(reader.result || "")));
    reader.addEventListener("error", () => reject(new Error("Could not read image file.")));
    reader.readAsDataURL(file);
  });
}

function addEntry() {
  const title = els.titleInput.value.trim();
  if (!title) return;
  const category = els.categoryInput.value;
  const scheduledDate = els.scheduleDateInput.value || "";

  const entry = {
    id: `entry-${Date.now()}`,
    vehicle: selectedVehicle,
    category,
    title,
    cost: Number.parseFloat(els.costInput.value || "0"),
    date: els.dateInput.value || today(),
    status: scheduledDate ? "Scheduled" : defaultStatusForCategory(category),
    statusSymbol: els.statusSymbolInput.value || defaultSymbolForCategory(category),
    statusLabel: els.statusLabelInput.value.trim(),
    priority: els.priorityInput.value || "Medium",
    flagged: els.flaggedInput.checked,
    scheduledDate,
    scheduledTime: els.scheduleTimeInput.value || "",
    durationHours: els.durationInput.value || "",
    notes: els.notesInput.value.trim()
  };

  state.entries = [normalizeEntry(entry), ...state.entries];
  saveState();

  els.entryForm.reset();
  els.dateInput.value = today();
  els.categoryInput.value = entry.category;
  els.statusSymbolInput.value = defaultSymbolForCategory(entry.category);
  els.priorityInput.value = entry.category === "repairs" ? "High" : "Medium";
  els.flaggedInput.checked = entry.category === "repairs";
  els.titleInput.focus();
  render();
}

function saveProfile(form) {
  const formData = new FormData(form);
  const current = getProfile(selectedVehicle);
  const updates = profileFieldsFor(selectedVehicle).reduce((profile, field) => {
    const value = formData.get(field.key);
    profile[field.key] = field.money ? normalizeMoneyInput(value) : String(value || "").trim();
    return profile;
  }, {});

  state.profiles[selectedVehicle] = {
    ...current,
    ...updates
  };
  if (updates.profileType) {
    state.vehicles = state.vehicles.map((record) => (record.name === selectedVehicle ? { ...record, type: updates.profileType } : record));
  }
  saveState();
  render();
}

function addDiagnostic(form) {
  const formData = new FormData(form);
  const linkedRepairId = String(formData.get("linkedRepairId") || "");
  const linkedRepair = getVehicleEntries(selectedVehicle).find((entry) => entry.id === linkedRepairId);
  const title = String(formData.get("title") || linkedRepair?.title || "").trim();
  if (!title) return;

  const resourceLabel = String(formData.get("resourceLabel") || "").trim();
  const resourceUrl = String(formData.get("resourceUrl") || "").trim();

  const diagnostic = {
    id: `diag-${Date.now()}`,
    vehicle: selectedVehicle,
    linkedRepairId,
    title,
    status: String(formData.get("status") || "Open"),
    statusSymbol: String(formData.get("statusSymbol") || "testing"),
    statusLabel: String(formData.get("statusLabel") || "").trim(),
    priority: String(formData.get("priority") || "High"),
    flagged: formData.get("flagged") === "on",
    scheduledDate: String(formData.get("scheduledDate") || ""),
    scheduledTime: String(formData.get("scheduledTime") || ""),
    durationHours: String(formData.get("durationHours") || ""),
    system: String(formData.get("system") || "").trim(),
    mileage: String(formData.get("mileage") || "").trim(),
    codes: String(formData.get("codes") || "").trim(),
    symptoms: String(formData.get("symptoms") || "").trim(),
    testsTried: String(formData.get("testsTried") || "").trim(),
    createdAt: today(),
    resources: resourceUrl
      ? [
          {
            label: resourceLabel || resourceUrl,
            url: resourceUrl
          }
        ]
      : []
  };

  state.diagnostics = [normalizeDiagnostic(diagnostic), ...state.diagnostics];
  saveState();
  form.reset();
  render();
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isNight = theme === "night";
  els.themeLabel.textContent = isNight ? "Night" : "Day";
  els.themeToggle.setAttribute("aria-label", isNight ? "Switch to day mode" : "Switch to night mode");
  els.themeToggle.setAttribute("aria-pressed", String(isNight));
}

function render() {
  const vehicleEntries = getVehicleEntries(selectedVehicle);
  const shownEntries = filterEntries(vehicleEntries, activeFilter);
  const costSummary = getCostSummary(vehicleEntries, getProfile(selectedVehicle));
  const costDisplay = getCostDisplay(costSummary);

  applyVehicleTheme(selectedVehicle);
  els.garageSummary.textContent = `${state.vehicles.length} ${state.vehicles.length === 1 ? "toy" : "toys"} tracked`;
  els.vehicleTitle.textContent = selectedVehicle;
  els.headerTotalLabel.textContent = costDisplay.header;
  els.headerTotal.textContent = money(costDisplay.value);
  els.headerEntries.textContent = String(vehicleEntries.length);
  els.activeVehicleLabel.textContent = selectedVehicle;
  els.logTitle.textContent = activeFilter === "all" ? "All entries" : getCategoryLabel(activeFilter);
  els.visibleCount.textContent = `${shownEntries.length} shown`;
  els.costTitle.textContent = money(costDisplay.value);
  els.costSubtitle.textContent = costDisplay.subtitle;

  renderVehicles();
  renderWorkspaceTabs();
  renderDashboard();
  renderFilters();
  renderEntries(shownEntries);
  renderCosts(vehicleEntries, costSummary);
  renderNotes(vehicleEntries);
  renderProfile();
  renderDiagnostics();
  syncViews();
}

function syncViews() {
  els.dashboardView.classList.toggle("is-hidden", activeView !== "dashboard");
  els.filterBar.classList.toggle("is-hidden", activeView !== "logbook");
  els.logbookView.classList.toggle("is-hidden", activeView !== "logbook");
  els.profileView.classList.toggle("is-hidden", activeView !== "profile");
  els.diagnosticsView.classList.toggle("is-hidden", activeView !== "diagnostics");
}

function renderWorkspaceTabs() {
  const diagnosticsCount = getDiagnostics(selectedVehicle).length;
  const dashboardItems = getDashboardItems();
  const attentionCount = dashboardItems.filter((item) => needsAttention(item)).length;
  const scheduledCount = dashboardItems.filter((item) => item.scheduledDate && !isDoneItem(item)).length;

  els.workspaceTabs.innerHTML = workspaceViews
    .map((view) => {
      const count = view.id === "dashboard" ? attentionCount : view.id === "logbook" ? scheduledCount : view.id === "diagnostics" ? diagnosticsCount : 0;
      const suffix = count ? ` <span>${count}</span>` : "";
      return `
        <button class="workspace-tab ${view.id === activeView ? "active" : ""}" type="button" data-view="${view.id}" aria-pressed="${view.id === activeView}">
          ${icon(view.icon)}
          ${view.label}${suffix}
        </button>
      `;
    })
    .join("");
}

function renderDashboard() {
  const data = getDashboardData();
  const attentionItems = data.attentionItems.slice(0, 6);
  const scheduleGroups = getScheduleGroups(data.activeItems);

  els.dashboardView.innerHTML = `
    <div class="feature-heading dashboard-heading">
      <div>
        <p class="label">Garage dashboard</p>
        <h3>Totals, attention, and scheduled work</h3>
      </div>
      <span>${data.activeItems.length} active ${data.activeItems.length === 1 ? "item" : "items"}</span>
    </div>

    <section class="dashboard-stat-grid" aria-label="Garage totals">
      ${renderDashboardStat("Total invested", money(data.totals.totalInvested), "Price paid + logged work", "receipt")}
      ${renderDashboardStat("Logged spend", money(data.totals.loggedTotal), `${state.entries.length} saved ${state.entries.length === 1 ? "entry" : "entries"}`, "list")}
      ${renderDashboardStat("Sell value", money(data.totals.sellValue), data.totals.sellValue ? "Across all profiles" : "Add values in profiles", "tag")}
      ${renderDashboardStat("Attention", String(data.attentionItems.length), "Flagged, urgent, or due soon", "alert", data.attentionItems.length ? "warning" : "good")}
      ${renderDashboardStat("Scheduled", String(data.scheduledItems.length), "Work with dates set", "calendar")}
    </section>

    <div class="dashboard-layout">
      <section class="dashboard-panel vehicle-dashboard-panel" aria-label="Vehicle status">
        <div class="panel-heading">
          <div>
            <p class="label">Vehicle status</p>
            <h4>All toys at a glance</h4>
          </div>
          <span>${state.vehicles.length} tracked</span>
        </div>
        <div class="vehicle-status-grid">
          ${data.vehicleSummaries.map(renderVehicleStatusCard).join("")}
        </div>
      </section>

      <section class="dashboard-panel attention-panel" aria-label="Attention needed">
        <div class="panel-heading">
          <div>
            <p class="label">Attention needed</p>
            <h4>Fix first</h4>
          </div>
          <span>${data.attentionItems.length}</span>
        </div>
        <div class="dashboard-list">
          ${attentionItems.length ? attentionItems.map((item) => renderDashboardItem(item, "attention")).join("") : `<div class="empty-state compact-dashboard">Nothing is flagged right now.</div>`}
        </div>
      </section>
    </div>

    <div class="dashboard-layout lower">
      <section class="dashboard-panel schedule-panel" aria-label="Work schedule">
        <div class="panel-heading">
          <div>
            <p class="label">Schedule</p>
            <h4>Planned garage time</h4>
          </div>
          <span>${data.scheduledItems.length} dated</span>
        </div>
        <div class="schedule-stack">
          ${
            scheduleGroups.some((group) => group.items.length)
              ? scheduleGroups.map(renderScheduleGroup).join("")
              : `<div class="empty-state compact-dashboard">No work is scheduled yet. Add a date from Logbook or Diagnostics.</div>`
          }
        </div>
      </section>

      <section class="dashboard-panel symbol-panel" aria-label="Status symbol options">
        <div class="panel-heading">
          <div>
            <p class="label">Symbol picker</p>
            <h4>Reusable flags</h4>
          </div>
          <span>${statusSymbols.length} options</span>
        </div>
        <div class="symbol-grid">
          ${statusSymbols.map(renderSymbolOption).join("")}
        </div>
      </section>
    </div>
  `;
}

function getDashboardData() {
  const items = getDashboardItems();
  const activeItems = items.filter((item) => isActiveItem(item));
  const attentionItems = activeItems.filter((item) => needsAttention(item)).sort(compareDashboardItems);
  const scheduledItems = activeItems.filter((item) => item.scheduledDate && !isDoneItem(item)).sort(compareSchedule);
  const vehicleSummaries = getVehicleDashboardSummaries(items);

  const totals = vehicleSummaries.reduce(
    (total, vehicle) => {
      total.loggedTotal += vehicle.summary.loggedTotal;
      total.pricePaid += vehicle.summary.pricePaid;
      total.sellValue += vehicle.summary.sellValue;
      total.totalInvested += vehicle.summary.totalInvested;
      return total;
    },
    { loggedTotal: 0, pricePaid: 0, sellValue: 0, totalInvested: 0 }
  );

  return {
    items,
    activeItems,
    attentionItems,
    scheduledItems,
    vehicleSummaries,
    totals
  };
}

function renderDashboardStat(label, value, meta, iconName, tone = "") {
  return `
    <article class="dashboard-stat ${tone}">
      <span class="dashboard-stat-icon" aria-hidden="true">${icon(iconName)}</span>
      <div>
        <p>${escapeHtml(label)}</p>
        <strong>${escapeHtml(value)}</strong>
        <small>${escapeHtml(meta)}</small>
      </div>
    </article>
  `;
}

function renderVehicleStatusCard(vehicle) {
  const status = vehicle.status;
  const nextLabel = vehicle.nextItem ? formatSchedule(vehicle.nextItem) : "No date set";

  return `
    <button class="vehicle-status-card ${vehicle.record.name === selectedVehicle ? "active" : ""}" type="button" data-dashboard-vehicle="${escapeAttr(vehicle.record.name)}" style="${vehicleThemeStyle(vehicle.record.name)}">
      <span class="vehicle-status-main">
        <span class="vehicle-status-symbol" style="--status-color: ${status.color}">${icon(status.icon)}</span>
        <span>
          <strong>${escapeHtml(vehicle.record.name)}</strong>
          <small>${escapeHtml(vehicle.record.type || "Vehicle")}</small>
        </span>
      </span>
      <span class="vehicle-status-label">${escapeHtml(status.label)}</span>
      <span class="vehicle-status-money">${money(vehicle.summary.totalInvested)}</span>
      <span class="vehicle-status-meta">
        ${vehicle.attentionCount} attention / ${vehicle.scheduledCount} scheduled
      </span>
      <span class="vehicle-status-next">${escapeHtml(nextLabel)}</span>
    </button>
  `;
}

function renderDashboardItem(item, mode = "default") {
  return `
    <button class="dashboard-item ${mode} ${item.flagged ? "flagged" : ""}" type="button" data-dashboard-item="${escapeAttr(item.id)}" data-dashboard-source="${escapeAttr(item.source)}" data-dashboard-vehicle="${escapeAttr(item.vehicle)}" data-dashboard-category="${escapeAttr(item.category || "all")}">
      <span class="dashboard-item-icon" style="--status-color: ${getStatusSymbol(item.statusSymbol).color}" aria-hidden="true">
        ${icon(getStatusSymbol(item.statusSymbol).icon)}
      </span>
      <span class="dashboard-item-main">
        <span class="dashboard-item-title">${escapeHtml(item.title)}</span>
        <span class="dashboard-item-meta">${escapeHtml(item.vehicle)} / ${escapeHtml(item.typeLabel)}</span>
        ${renderScheduleMeta(item)}
      </span>
      <span class="dashboard-item-side">
        ${renderPriorityPill(item)}
        ${item.flagged ? `<span class="flag-pill">${icon("flag")} Flagged</span>` : ""}
      </span>
    </button>
  `;
}

function renderScheduleGroup(group) {
  if (!group.items.length) return "";

  return `
    <section class="schedule-group ${group.id}">
      <div class="schedule-group-head">
        <span>${escapeHtml(group.label)}</span>
        <strong>${group.items.length}</strong>
      </div>
      <div class="dashboard-list">
        ${group.items.slice(0, 6).map((item) => renderDashboardItem(item, "schedule")).join("")}
      </div>
    </section>
  `;
}

function renderSymbolOption(symbol) {
  return `
    <div class="symbol-option" style="--status-color: ${symbol.color}">
      <span aria-hidden="true">${icon(symbol.icon)}</span>
      <strong>${escapeHtml(symbol.label)}</strong>
    </div>
  `;
}

function getDashboardItems() {
  const entryItems = state.entries.map((entry) => ({
    id: entry.id,
    source: "entry",
    sourceLabel: "Logbook",
    vehicle: entry.vehicle,
    category: entry.category,
    typeLabel: getCategoryLabel(entry.category),
    title: entry.title,
    status: entry.status || "Logged",
    statusSymbol: entry.statusSymbol || defaultSymbolForCategory(entry.category),
    statusLabel: entry.statusLabel || "",
    priority: entry.priority || "Medium",
    flagged: Boolean(entry.flagged),
    scheduledDate: entry.scheduledDate || "",
    scheduledTime: entry.scheduledTime || "",
    durationHours: entry.durationHours || "",
    createdDate: entry.date || "",
    notes: entry.notes || ""
  }));

  const diagnosticItems = state.diagnostics.map((item) => ({
    id: item.id,
    source: "diagnostic",
    sourceLabel: "Diagnostics",
    vehicle: item.vehicle,
    category: "repairs",
    typeLabel: item.system || "Diagnostic",
    title: item.title,
    status: item.status || "Open",
    statusSymbol: item.statusSymbol || "testing",
    statusLabel: item.statusLabel || item.status || "",
    priority: item.priority || "High",
    flagged: Boolean(item.flagged),
    scheduledDate: item.scheduledDate || "",
    scheduledTime: item.scheduledTime || "",
    durationHours: item.durationHours || "",
    createdDate: item.createdAt || "",
    notes: item.symptoms || item.testsTried || ""
  }));

  return [...entryItems, ...diagnosticItems];
}

function getVehicleDashboardSummaries(items) {
  return state.vehicles.map((record) => {
    const vehicleItems = items.filter((item) => item.vehicle === record.name);
    const activeItems = vehicleItems.filter((item) => isActiveItem(item));
    const attentionItems = activeItems.filter((item) => needsAttention(item));
    const scheduledItems = activeItems.filter((item) => item.scheduledDate && !isDoneItem(item)).sort(compareSchedule);

    return {
      record,
      summary: getCostSummary(getVehicleEntries(record.name), getProfile(record.name)),
      attentionCount: attentionItems.length,
      scheduledCount: scheduledItems.length,
      nextItem: scheduledItems[0],
      status: getVehicleStatus(activeItems)
    };
  });
}

function getVehicleStatus(items) {
  if (items.some((item) => isOverdue(item) || getStatusSymbol(item.statusSymbol).id === "urgent" || priorityWeight(item.priority) >= 4)) {
    return getStatusSymbol("urgent");
  }

  if (items.some((item) => needsAttention(item))) {
    return getStatusSymbol("attention");
  }

  if (items.some((item) => item.scheduledDate && scheduleDaysUntil(item.scheduledDate) <= 7)) {
    return getStatusSymbol("dueSoon");
  }

  return getStatusSymbol("good");
}

function getScheduleGroups(items) {
  const groups = [
    { id: "overdue", label: "Overdue", items: [] },
    { id: "today", label: "Today", items: [] },
    { id: "week", label: "Next 7 days", items: [] },
    { id: "upcoming", label: "Upcoming", items: [] },
    { id: "unscheduled", label: "Flagged, no date", items: [] }
  ];
  const byId = Object.fromEntries(groups.map((group) => [group.id, group]));

  items.forEach((item) => {
    if (isDoneItem(item)) return;
    const bucket = scheduleBucketFor(item);
    if (bucket === "unscheduled" && !needsAttention(item)) return;
    byId[bucket].items.push(item);
  });

  groups.forEach((group) => group.items.sort(compareSchedule));
  return groups;
}

function scheduleBucketFor(item) {
  if (!item.scheduledDate) return "unscheduled";
  const days = scheduleDaysUntil(item.scheduledDate);
  if (days < 0) return "overdue";
  if (days === 0) return "today";
  if (days <= 7) return "week";
  return "upcoming";
}

function compareDashboardItems(a, b) {
  const attentionDiff = Number(needsAttention(b)) - Number(needsAttention(a));
  if (attentionDiff) return attentionDiff;
  const priorityDiff = priorityWeight(b.priority) - priorityWeight(a.priority);
  if (priorityDiff) return priorityDiff;
  return compareSchedule(a, b);
}

function compareSchedule(a, b) {
  const aDate = itemPrimaryDate(a);
  const bDate = itemPrimaryDate(b);
  if (aDate && bDate && aDate !== bDate) return aDate.localeCompare(bDate);
  if (aDate && !bDate) return -1;
  if (!aDate && bDate) return 1;
  const timeCompare = String(a.scheduledTime || "").localeCompare(String(b.scheduledTime || ""));
  if (timeCompare) return timeCompare;
  return priorityWeight(b.priority) - priorityWeight(a.priority);
}

function itemPrimaryDate(item) {
  return item.scheduledDate || item.createdDate || "";
}

function isDoneItem(item) {
  return String(item.status || "").toLowerCase() === "done" || item.statusSymbol === "done";
}

function isActiveItem(item) {
  if (isDoneItem(item)) return false;
  if (item.flagged || item.scheduledDate || priorityWeight(item.priority) >= 3) return true;
  if (item.source === "diagnostic") return true;
  const status = String(item.status || "").toLowerCase();
  return ["open", "watching", "waiting on parts", "scheduled"].includes(status);
}

function needsAttention(item) {
  if (!isActiveItem(item)) return false;
  const symbol = getStatusSymbol(item.statusSymbol).id;
  const dueSoon = item.scheduledDate && scheduleDaysUntil(item.scheduledDate) <= 7;
  const status = String(item.status || "").toLowerCase();
  return (
    item.flagged ||
    priorityWeight(item.priority) >= 3 ||
    isOverdue(item) ||
    dueSoon ||
    ["attention", "urgent", "waiting", "parts", "testing"].includes(symbol) ||
    ["open", "watching", "waiting on parts"].includes(status)
  );
}

function isOverdue(item) {
  return Boolean(item.scheduledDate && scheduleDaysUntil(item.scheduledDate) < 0 && !isDoneItem(item));
}

function scheduleDaysUntil(date) {
  if (!date) return Number.POSITIVE_INFINITY;
  const start = new Date(`${today()}T12:00:00`);
  const target = new Date(`${date}T12:00:00`);
  if (Number.isNaN(target.getTime())) return Number.POSITIVE_INFINITY;
  return Math.round((target.getTime() - start.getTime()) / 86400000);
}

function priorityWeight(priority) {
  return priorityLevels.find((item) => item.id === priority)?.weight || 0;
}

function getStatusSymbol(id) {
  return statusSymbols.find((symbol) => symbol.id === id) || statusSymbols[1];
}

function renderStatusSymbolOptions(selected = "attention") {
  return statusSymbols
    .map((symbol) => `<option value="${escapeAttr(symbol.id)}" ${symbol.id === selected ? "selected" : ""}>${escapeHtml(symbol.label)}</option>`)
    .join("");
}

function renderPriorityOptions(selected = "Medium") {
  return priorityLevels
    .map((priority) => `<option value="${escapeAttr(priority.id)}" ${priority.id === selected ? "selected" : ""}>${escapeHtml(priority.label)}</option>`)
    .join("");
}

function renderDiagnosticStatusOptions(selected = "Open") {
  return diagnosticStatuses
    .map((status) => `<option value="${escapeAttr(status)}" ${status === selected ? "selected" : ""}>${escapeHtml(status)}</option>`)
    .join("");
}

function renderStatusBadge(item, compact = false) {
  const symbol = getStatusSymbol(item.statusSymbol);
  const label = item.statusLabel || item.status || symbol.label;

  return `
    <span class="status-badge ${compact ? "compact" : ""}" style="--status-color: ${symbol.color}">
      ${icon(symbol.icon)}
      ${escapeHtml(label)}
    </span>
  `;
}

function renderPriorityPill(item) {
  const priority = priorityLevels.some((level) => level.id === item.priority) ? item.priority : "Medium";
  return `<span class="priority-pill ${slugify(priority)}">${escapeHtml(priority)}</span>`;
}

function renderScheduleMeta(item) {
  if (!item.scheduledDate) return "";
  const statusClass = isOverdue(item) ? "overdue" : scheduleDaysUntil(item.scheduledDate) <= 7 ? "soon" : "";
  return `
    <span class="schedule-meta ${statusClass}">
      ${icon("calendar")}
      ${escapeHtml(formatSchedule(item))}
    </span>
  `;
}

function formatSchedule(item) {
  if (!item.scheduledDate) return "No date set";
  const pieces = [formatDate(item.scheduledDate)];
  if (item.scheduledTime) pieces.push(formatTime(item.scheduledTime));
  if (item.durationHours) pieces.push(`${item.durationHours} hr`);
  return pieces.join(" / ");
}

function formatTime(time) {
  const [hours, minutes] = String(time || "").split(":").map((part) => Number.parseInt(part, 10));
  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return time;
  const parsed = new Date();
  parsed.setHours(hours, minutes, 0, 0);
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit"
  }).format(parsed);
}

function defaultSymbolForCategory(category) {
  if (category === "repairs") return "attention";
  if (category === "upgrades") return "electrical";
  if (category === "notes") return "note";
  if (category === "costs") return "cost";
  return "repair";
}

function defaultStatusForCategory(category) {
  return category === "repairs" ? "Open" : "Logged";
}

function getCostDisplay(summary, vehicle = selectedVehicle) {
  if (costMode === "invested") {
    return {
      header: "Total invested",
      value: summary.totalInvested,
      subtitle: `${money(summary.pricePaid)} price paid + ${money(summary.loggedTotal)} logged`
    };
  }

  if (costMode === "value") {
    return {
      header: "Sell value",
      value: summary.sellValue,
      subtitle: summary.sellValue ? `Estimated value for ${vehicle}` : `Add sell value in Vehicle Profile`
    };
  }

  return {
    header: "Total spent",
    value: summary.loggedTotal,
    subtitle: `Logged maintenance, repairs, upgrades, and notes`
  };
}

function renderVehicles() {
  const currentRecord = getVehicleRecord(selectedVehicle);
  const currentProfile = getProfile(selectedVehicle);
  const entries = getVehicleEntries(selectedVehicle);
  const currentCostDisplay = getCostDisplay(getCostSummary(entries, currentProfile), selectedVehicle);
  const otherVehicles = state.vehicles.filter((vehicle) => vehicle.name !== selectedVehicle);
  const descriptor = vehicleDescriptor(selectedVehicle);
  const menuClass = vehicleMenuOpen ? " is-open" : "";
  const modalClass = addVehicleModalOpen ? " is-open" : "";

  els.vehicleNav.innerHTML = `
    <div class="vehicle-switcher${menuClass}" style="${vehicleThemeStyle(selectedVehicle)}">
      <button class="current-vehicle-card" type="button" data-toggle-vehicles aria-expanded="${vehicleMenuOpen}" aria-controls="vehicleMenu">
        <span class="vehicle-card-bg" style="${escapeAttr(vehicleCardBackgroundStyle(selectedVehicle))}"></span>
        <span class="current-vehicle-content">
          <span class="current-vehicle-kicker">
            <span class="vehicle-icon" aria-hidden="true">${icon(typeIcon(currentRecord.type))}</span>
            ${escapeHtml(currentRecord.type || "Vehicle")}
          </span>
          <span class="current-vehicle-name">${escapeHtml(selectedVehicle)}</span>
          <span class="current-vehicle-info">${escapeHtml(descriptor || "Add profile details")}</span>
        </span>
        <span class="current-vehicle-stats">
          <strong>${money(currentCostDisplay.value)}</strong>
          <span>${costMode === "logged" ? `${entries.length} ${entries.length === 1 ? "entry" : "entries"}` : currentCostDisplay.header}</span>
          ${icon("chevron")}
        </span>
      </button>

      <div class="vehicle-menu" id="vehicleMenu">
        <div class="vehicle-menu-head">
          <div>
            <p class="label">Garage switcher</p>
            <strong>${state.vehicles.length} ${state.vehicles.length === 1 ? "toy" : "toys"} ready</strong>
          </div>
          <label class="photo-picker">
            ${icon("image")}
            <span>${currentProfile.photoDataUrl ? "Change photo" : "Add photo"}</span>
            <input data-vehicle-photo type="file" accept="image/*" />
          </label>
          ${currentProfile.photoDataUrl ? `<button class="ghost-button" type="button" data-remove-photo>Remove photo</button>` : ""}
        </div>

        <div class="vehicle-option-list">
          ${
            otherVehicles.length
              ? otherVehicles.map((vehicle) => renderVehicleOption(vehicle)).join("")
              : `<div class="empty-state compact">Add another vehicle or toy to switch between them here.</div>`
          }
        </div>

        <button class="add-vehicle-trigger" type="button" data-open-add-vehicle>
          <span>${icon("plus")}</span>
          <strong>Add vehicle / toy</strong>
          <small>Car, motorcycle, boat, side-by-side...</small>
        </button>
      </div>

      <div class="add-vehicle-modal${modalClass}" data-add-vehicle-backdrop aria-hidden="${!addVehicleModalOpen}">
        <section class="add-vehicle-dialog" role="dialog" aria-modal="true" aria-labelledby="addVehicleTitle">
          <div class="add-vehicle-dialog-head">
            <div>
              <p class="label">Garage setup</p>
              <h3 id="addVehicleTitle">Add vehicle / toy</h3>
            </div>
            <button class="icon-button modal-close" type="button" data-close-add-vehicle aria-label="Close add vehicle window">
              ${icon("close")}
            </button>
          </div>

          <form class="add-vehicle-form" id="addVehicleForm" autocomplete="off">
            <label class="field-wide">
              <span>Name</span>
              <input name="vehicleName" type="text" placeholder="Trail Bike" required />
            </label>

            <label>
              <span>Type</span>
              <select name="profileType">
                ${vehicleTypeOptions.map((type) => `<option value="${escapeAttr(type)}">${escapeHtml(type)}</option>`).join("")}
              </select>
            </label>

            <label>
              <span>Year</span>
              <input name="year" type="text" placeholder="2020" />
            </label>

            <label>
              <span>Make</span>
              <input name="make" type="text" placeholder="Honda" />
            </label>

            <label>
              <span>Model</span>
              <input name="model" type="text" placeholder="CRF250R" />
            </label>

            <label>
              <span>Price paid</span>
              <input name="pricePaid" type="number" min="0" step="0.01" placeholder="8500" />
            </label>

            <label>
              <span>Sell value</span>
              <input name="sellValue" type="number" min="0" step="0.01" placeholder="12000" />
            </label>

            <label class="field-wide">
              <span>Background photo</span>
              <input name="vehiclePhoto" type="file" accept="image/*" />
            </label>

            <div class="modal-actions field-wide">
              <button class="ghost-button" type="button" data-close-add-vehicle>Cancel</button>
              <button class="save-button" type="submit">${icon("plus")} Add to garage</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  `;
}

function renderVehicleOption(record) {
  const entries = getVehicleEntries(record.name);
  const profile = getProfile(record.name);
  const info = vehicleDescriptor(record.name) || `${record.type || "Vehicle"} profile`;
  const costDisplay = getCostDisplay(getCostSummary(entries, profile), record.name);

  return `
    <button class="vehicle-option" type="button" data-vehicle="${escapeAttr(record.name)}" style="${vehicleThemeStyle(record.name)}">
      <span class="vehicle-option-preview" style="${escapeAttr(vehicleCardBackgroundStyle(record.name))}">
        ${!profile.photoDataUrl ? icon(typeIcon(record.type)) : ""}
      </span>
      <span class="vehicle-option-main">
        <span class="vehicle-name">${escapeHtml(record.name)}</span>
        <span class="vehicle-meta">${escapeHtml(record.type || "Vehicle")} / ${escapeHtml(info)}</span>
      </span>
      <span class="vehicle-total">
        ${money(costDisplay.value)}
        <small>${costMode === "logged" ? `${entries.length} logs` : costDisplay.header}</small>
      </span>
    </button>
  `;
}

function renderProfile() {
  const profile = getProfile(selectedVehicle);
  const fields = profileFieldsFor(selectedVehicle);

  els.profileView.innerHTML = `
    <div class="feature-heading">
      <div>
        <p class="label">Vehicle profile</p>
        <h3>${escapeHtml(selectedVehicle)} details for future diagnostics</h3>
      </div>
      <span>Saved locally</span>
    </div>

    <div class="profile-layout">
      <form class="profile-form" id="profileForm">
        <div class="profile-photo-card field-wide">
          <div class="profile-photo-preview" style="${escapeAttr(vehicleCardBackgroundStyle(selectedVehicle))}">
            <span>${profile.photoDataUrl ? "Photo background active" : "Default color background"}</span>
          </div>
          <div class="profile-photo-actions">
            <label class="photo-picker">
              ${icon("image")}
              <span>${profile.photoDataUrl ? "Change background photo" : "Choose background photo"}</span>
              <input id="profilePhotoInput" type="file" accept="image/*" />
            </label>
            ${profile.photoDataUrl ? `<button class="ghost-button" type="button" data-remove-profile-photo>Remove photo</button>` : ""}
          </div>
        </div>
        ${fields.map((field) => renderProfileField(field, profile[field.key] || "")).join("")}
        <button class="save-button" type="submit">${icon("save")} Save profile</button>
      </form>

      <aside class="ai-context-card">
        <p class="label">AI-ready context later</p>
        <h4>Why this matters</h4>
        <p>The future bot will need year, make, model, engine, transmission, mileage, codes, symptoms, and test history before it can give useful diagnostic help.</p>
        <div class="context-stack">
          ${renderContextItem("Identity", profile.year && profile.make && profile.model)}
          ${renderContextItem("Powertrain", profile.engine || profile.transmission)}
          ${renderContextItem("VIN / ID", profile.vin || profile.hullId)}
          ${renderContextItem("Codes / notes", profile.obdCodes || profile.notes)}
        </div>
      </aside>
    </div>
  `;
}

function renderDiagnostics() {
  const profile = getProfile(selectedVehicle);
  const repairs = getVehicleEntries(selectedVehicle).filter((entry) => entry.category === "repairs");
  const diagnostics = getDiagnostics(selectedVehicle);

  els.diagnosticsView.innerHTML = `
    <div class="feature-heading">
      <div>
        <p class="label">Diagnostics</p>
        <h3>Repair issue workspace</h3>
      </div>
      <span>AI comes after this data is solid</span>
    </div>

    <div class="diagnostic-layout">
      <section class="diagnostic-form-panel">
        <form class="diagnostic-form" id="diagnosticForm">
          <div class="form-title">
            <h3>Start diagnostic session</h3>
            <span>${escapeHtml(selectedVehicle)}</span>
          </div>

          <label>
            <span>Linked repair</span>
            <select name="linkedRepairId">
              <option value="">Not linked yet</option>
              ${repairs.map((repair) => `<option value="${escapeAttr(repair.id)}">${escapeHtml(repair.title)}</option>`).join("")}
            </select>
          </label>

          <label>
            <span>Issue title</span>
            <input name="title" type="text" placeholder="Yukon Electrical Issue" />
          </label>

          <label>
            <span>System</span>
            <input name="system" type="text" placeholder="Electrical, brakes, transmission..." />
          </label>

          <label>
            <span>Mileage / hours</span>
            <input name="mileage" type="text" value="${escapeAttr(profile.mileage || profile.mileageHours || "")}" placeholder="154230" />
          </label>

          <label>
            <span>Codes</span>
            <input name="codes" type="text" value="${escapeAttr(profile.obdCodes || "")}" placeholder="P0300, U0100, C0561" />
          </label>

          <label>
            <span>Status</span>
            <select name="status">
              ${renderDiagnosticStatusOptions("Open")}
            </select>
          </label>

          <label>
            <span>Status symbol</span>
            <select name="statusSymbol">
              ${renderStatusSymbolOptions("testing")}
            </select>
          </label>

          <label>
            <span>Priority</span>
            <select name="priority">
              ${renderPriorityOptions("High")}
            </select>
          </label>

          <label>
            <span>Schedule date</span>
            <input name="scheduledDate" type="date" />
          </label>

          <label>
            <span>Time</span>
            <input name="scheduledTime" type="time" />
          </label>

          <label>
            <span>Est. hours</span>
            <input name="durationHours" type="number" min="0" step="0.25" placeholder="1.5" />
          </label>

          <label class="field-wide">
            <span>Status label</span>
            <input name="statusLabel" type="text" placeholder="Waiting on parts" />
          </label>

          <label class="check-field field-wide">
            <input name="flagged" type="checkbox" checked />
            <span>Flag this issue on the dashboard</span>
          </label>

          <label class="field-wide">
            <span>Symptoms</span>
            <textarea name="symptoms" rows="3" placeholder="What is it doing, when does it happen, what changed?"></textarea>
          </label>

          <label class="field-wide">
            <span>Tests tried</span>
            <textarea name="testsTried" rows="3" placeholder="Battery voltage, fuses, grounds, scan tool behavior, parts replaced..."></textarea>
          </label>

          <label>
            <span>Resource label</span>
            <input name="resourceLabel" type="text" placeholder="Wiring diagram link" />
          </label>

          <label>
            <span>Resource URL</span>
            <input name="resourceUrl" type="url" placeholder="https://..." />
          </label>

          <button class="save-button" type="submit">${icon("save")} Save diagnostic</button>
        </form>
      </section>

      <section class="diagnostic-list-panel">
        <div class="mini-profile-card">
          <p class="label">Current context</p>
          <strong>${escapeHtml(profile.year || "")} ${escapeHtml(profile.make || "")} ${escapeHtml(profile.model || selectedVehicle)}</strong>
          <span>${escapeHtml([profile.engine, profile.transmission || profile.outdrive, profile.mileage || profile.mileageHours].filter(Boolean).join(" / ") || "Add details in Vehicle Profile")}</span>
        </div>

        <div class="diagnostic-list">
          ${diagnostics.length ? diagnostics.map(renderDiagnosticCard).join("") : renderEmptyDiagnostics()}
        </div>
      </section>
    </div>
  `;
}

function renderProfileField(field, value) {
  const wideClass = field.wide ? " field-wide" : "";
  const escapedValue = escapeAttr(value);
  const moneyAttrs = field.money ? ' min="0" step="0.01"' : "";
  if (field.type === "textarea") {
    return `
      <label class="${wideClass.trim()}">
        <span>${field.label}</span>
        <textarea name="${field.key}" rows="3" placeholder="${escapeAttr(field.placeholder || "")}">${escapeHtml(value)}</textarea>
      </label>
    `;
  }

  return `
    <label class="${wideClass.trim()}">
      <span>${field.label}</span>
      <input name="${field.key}" type="${field.inputType || "text"}" value="${escapedValue}" placeholder="${escapeAttr(field.placeholder || "")}"${moneyAttrs} />
    </label>
  `;
}

function renderContextItem(label, complete) {
  return `
    <div class="context-item ${complete ? "complete" : ""}">
      <span>${complete ? "Ready" : "Needed"}</span>
      ${label}
    </div>
  `;
}

function renderDiagnosticCard(diagnostic) {
  const linkedRepair = getVehicleEntries(diagnostic.vehicle).find((entry) => entry.id === diagnostic.linkedRepairId);
  return `
    <article class="diagnostic-card">
      <div class="diagnostic-card-head">
        <div>
          <p class="label">${escapeHtml(diagnostic.system || "Diagnostic session")}</p>
          <h4>${escapeHtml(diagnostic.title)}</h4>
        </div>
        <button class="icon-button" type="button" data-delete-diagnostic="${escapeAttr(diagnostic.id)}" aria-label="Delete ${escapeAttr(diagnostic.title)}">
          ${icon("trash")}
        </button>
      </div>

      <div class="status-row">
        ${renderStatusBadge(diagnostic)}
        ${renderPriorityPill(diagnostic)}
        ${diagnostic.flagged ? `<span class="flag-pill">${icon("flag")} Flagged</span>` : ""}
      </div>

      <div class="diagnostic-meta">
        <span>${escapeHtml(diagnostic.status || "Open")}</span>
        <span>${escapeHtml(formatDate(diagnostic.createdAt))}</span>
        ${diagnostic.mileage ? `<span>${escapeHtml(diagnostic.mileage)} mi/hr</span>` : ""}
        ${linkedRepair ? `<span>Repair: ${escapeHtml(linkedRepair.title)}</span>` : ""}
      </div>

      ${diagnostic.scheduledDate ? `<div class="diagnostic-schedule">${renderScheduleMeta(diagnostic)}</div>` : ""}
      ${diagnostic.codes ? `<p><strong>Codes:</strong> ${escapeHtml(diagnostic.codes)}</p>` : ""}
      ${diagnostic.symptoms ? `<p><strong>Symptoms:</strong> ${escapeHtml(diagnostic.symptoms)}</p>` : ""}
      ${diagnostic.testsTried ? `<p><strong>Tests tried:</strong> ${escapeHtml(diagnostic.testsTried)}</p>` : ""}
      ${diagnostic.resources?.length ? renderResources(diagnostic.resources) : ""}
    </article>
  `;
}

function renderResources(resources) {
  return `
    <div class="resource-list">
      <p class="label">Saved resources</p>
      ${resources
        .map((resource) => `
          <a href="${escapeAttr(resource.url)}" target="_blank" rel="noreferrer">
            ${icon("link")}
            ${escapeHtml(resource.label || resource.url)}
          </a>
        `)
        .join("")}
    </div>
  `;
}

function renderEmptyDiagnostics() {
  return `
    <div class="empty-state">
      No diagnostic sessions for ${escapeHtml(selectedVehicle)} yet. Start with a repair issue, symptoms, codes, tests tried, and useful links.
    </div>
  `;
}

function profileFieldsFor(vehicle) {
  const profileType = getProfile(vehicle).profileType || getVehicleRecord(vehicle).type;

  if (profileType === "Boat") {
    return [
      { key: "profileType", label: "Type" },
      { key: "year", label: "Year" },
      { key: "make", label: "Boat make" },
      { key: "model", label: "Boat model" },
      { key: "pricePaid", label: "Price paid", inputType: "number", money: true, placeholder: "8500" },
      { key: "sellValue", label: "Sell value", inputType: "number", money: true, placeholder: "12000" },
      { key: "hullId", label: "Hull ID" },
      { key: "engine", label: "Engine make/model" },
      { key: "engineSerial", label: "Engine serial" },
      { key: "outdrive", label: "Outdrive / propulsion" },
      { key: "electronics", label: "Electronics" },
      { key: "batterySetup", label: "Battery setup" },
      { key: "mileageHours", label: "Hours / mileage" },
      { key: "notes", label: "Profile notes", type: "textarea", wide: true }
    ];
  }

  if (["Motorcycle", "Dirt Bike", "Side-by-side", "ATV"].includes(profileType)) {
    return [
      { key: "profileType", label: "Type" },
      { key: "year", label: "Year" },
      { key: "make", label: "Make" },
      { key: "model", label: "Model" },
      { key: "pricePaid", label: "Price paid", inputType: "number", money: true, placeholder: "8500" },
      { key: "sellValue", label: "Sell value", inputType: "number", money: true, placeholder: "12000" },
      { key: "engine", label: "Engine / cc" },
      { key: "vin", label: "VIN / frame ID" },
      { key: "mileageHours", label: "Mileage / hours" },
      { key: "drivetrain", label: "Drivetrain" },
      { key: "fuel", label: "Fuel" },
      { key: "batteryVoltage", label: "Battery voltage" },
      { key: "obdCodes", label: "Codes / dash lights" },
      { key: "tireSize", label: "Tire size" },
      { key: "notes", label: "Profile notes", type: "textarea", wide: true }
    ];
  }

  if (profileType === "Trailer") {
    return [
      { key: "profileType", label: "Type" },
      { key: "year", label: "Year" },
      { key: "make", label: "Make" },
      { key: "model", label: "Model" },
      { key: "pricePaid", label: "Price paid", inputType: "number", money: true, placeholder: "8500" },
      { key: "sellValue", label: "Sell value", inputType: "number", money: true, placeholder: "12000" },
      { key: "vin", label: "VIN / serial" },
      { key: "axles", label: "Axles" },
      { key: "tireSize", label: "Tire size" },
      { key: "hitch", label: "Hitch" },
      { key: "brakeType", label: "Brake type" },
      { key: "notes", label: "Profile notes", type: "textarea", wide: true }
    ];
  }

  return [
    { key: "profileType", label: "Type" },
    { key: "year", label: "Year" },
    { key: "make", label: "Make" },
    { key: "model", label: "Model" },
    { key: "pricePaid", label: "Price paid", inputType: "number", money: true, placeholder: "8500" },
    { key: "sellValue", label: "Sell value", inputType: "number", money: true, placeholder: "12000" },
    { key: "trim", label: "Trim" },
    { key: "engine", label: "Engine" },
    { key: "transmission", label: "Transmission" },
    { key: "transCode", label: "Trans code" },
    { key: "vin", label: "VIN" },
    { key: "mileage", label: "Mileage" },
    { key: "drivetrain", label: "Drivetrain" },
    { key: "fuel", label: "Fuel" },
    { key: "obdCodes", label: "Current OBD codes" },
    { key: "batteryVoltage", label: "Battery voltage" },
    { key: "notes", label: "Profile notes", type: "textarea", wide: true }
  ];
}

function renderFilters() {
  els.filterBar.innerHTML = categories
    .map((category) => `
      <button class="filter-button ${category.id === activeFilter ? "active" : ""}" type="button" data-filter="${category.id}" aria-pressed="${category.id === activeFilter}">
        ${icon(category.icon)}
        ${category.label}
      </button>
    `)
    .join("");
}

function renderEntries(entries) {
  if (!entries.length) {
    els.entryList.innerHTML = `<div class="empty-state">No ${activeFilter === "all" ? "entries" : getCategoryLabel(activeFilter).toLowerCase()} logged for ${escapeHtml(selectedVehicle)}.</div>`;
    return;
  }

  els.entryList.innerHTML = entries
    .map((entry) => `
      <article class="entry-card ${entry.category}">
        <div class="entry-icon" aria-hidden="true">${icon(categoryIcon(entry.category))}</div>
        <div class="entry-main">
          <div class="entry-topline">
            <span class="entry-title">${escapeHtml(entry.title)}</span>
            <span class="entry-chip">${getCategoryLabel(entry.category)}</span>
          </div>
          ${entry.notes ? `<p class="entry-note">${escapeHtml(entry.notes)}</p>` : ""}
          ${renderEntryStatusLine(entry)}
          <div class="entry-date">${formatDate(entry.date)}</div>
        </div>
        <div class="entry-cost">${money(entry.cost)}</div>
        <button class="icon-button" type="button" data-delete="${escapeAttr(entry.id)}" aria-label="Delete ${escapeAttr(entry.title)}">
          ${icon("trash")}
        </button>
      </article>
    `)
    .join("");
}

function renderEntryStatusLine(entry) {
  const shouldShowStatus = entry.status && entry.status !== "Logged";
  const shouldShowPriority = priorityWeight(entry.priority) >= 3 || entry.flagged;
  const pieces = [
    shouldShowStatus ? renderStatusBadge(entry, true) : "",
    shouldShowPriority ? renderPriorityPill(entry) : "",
    entry.flagged ? `<span class="flag-pill">${icon("flag")} Flagged</span>` : "",
    entry.scheduledDate ? renderScheduleMeta(entry) : ""
  ].filter(Boolean);

  return pieces.length ? `<div class="entry-status-line">${pieces.join("")}</div>` : "";
}

function renderCosts(entries, summary = getCostSummary(entries, getProfile(selectedVehicle))) {
  els.costModeToggle.innerHTML = costModes
    .map((mode) => `
      <button class="cost-mode-button ${mode.id === costMode ? "active" : ""}" type="button" data-cost-mode="${mode.id}" aria-pressed="${mode.id === costMode}">
        ${mode.label}
      </button>
    `)
    .join("");

  const netClass = summary.netValue >= 0 ? "positive" : "negative";
  const netLabel = summary.sellValue ? (summary.netValue >= 0 ? "Potential gain" : "Potential loss") : "Set sell value";

  els.valueSummary.innerHTML = `
    <div class="value-row">
      <span>Price paid</span>
      <strong>${money(summary.pricePaid)}</strong>
    </div>
    <div class="value-row">
      <span>Logged spend</span>
      <strong>${money(summary.loggedTotal)}</strong>
    </div>
    <div class="value-row strong">
      <span>Full investment</span>
      <strong>${money(summary.totalInvested)}</strong>
    </div>
    <div class="value-row">
      <span>Sell value</span>
      <strong>${money(summary.sellValue)}</strong>
    </div>
    <div class="value-row ${summary.sellValue ? netClass : ""}">
      <span>${netLabel}</span>
      <strong>${summary.sellValue ? money(Math.abs(summary.netValue)) : "Add in profile"}</strong>
    </div>
  `;

  const rows = ["maintenance", "repairs", "upgrades", "notes"].map((category) => {
    const value = sumCost(entries.filter((entry) => entry.category === category));
    return `
      <div class="breakdown-row">
        <div class="breakdown-label">
          <span class="dot ${category}"></span>
          ${getCategoryLabel(category)}
        </div>
        <div class="breakdown-value">${money(value)}</div>
      </div>
    `;
  });

  els.costBreakdown.innerHTML = rows.join("");
}

function renderNotes(entries) {
  const notes = entries
    .filter((entry) => entry.notes || entry.category === "notes")
    .sort((a, b) => b.date.localeCompare(a.date));

  els.noteCount.textContent = String(notes.length);
  els.noteList.innerHTML = notes.length
    ? notes.slice(0, 4).map((entry) => `<div class="note-line">${escapeHtml(entry.notes || entry.title)}</div>`).join("")
    : `<div class="note-line">No notes logged.</div>`;
}

function applyVehicleTheme(vehicle) {
  const theme = vehicleThemeFor(vehicle);
  document.documentElement.dataset.vehicle = slugify(vehicle);
  document.documentElement.style.setProperty("--vehicle-accent", theme.accent);
  document.documentElement.style.setProperty("--vehicle-accent-strong", theme.accentStrong);
  document.documentElement.style.setProperty("--vehicle-accent-soft", theme.accentSoft);
  document.documentElement.style.setProperty("--vehicle-accent-dark", theme.accentDark);
}

function vehicleThemeStyle(vehicle) {
  const theme = vehicleThemeFor(vehicle);
  return [
    `--button-accent: ${theme.accent}`,
    `--button-accent-strong: ${theme.accentStrong}`,
    `--button-accent-soft: ${theme.accentSoft}`,
    `--button-accent-dark: ${theme.accentDark}`
  ].join("; ");
}

function vehicleThemeFor(vehicle) {
  const record = getVehicleRecord(vehicle);
  return vehicleThemes[vehicle] || typeThemes[record.type] || typeThemes.default;
}

function vehicleCardBackgroundStyle(vehicle) {
  const theme = vehicleThemeFor(vehicle);
  const photo = getProfile(vehicle).photoDataUrl;
  if (photo) {
    return `background-image: linear-gradient(135deg, rgba(8, 8, 8, 0.82), rgba(8, 8, 8, 0.18)), url('${photo.replaceAll("'", "%27")}');`;
  }

  return `background: radial-gradient(circle at 18% 20%, ${theme.accent} 0, transparent 32%), linear-gradient(135deg, ${theme.accentDark} 0%, #080808 58%, ${theme.accentStrong} 100%);`;
}

function vehicleDescriptor(vehicle) {
  const profile = getProfile(vehicle);
  return [profile.year, profile.make, profile.model || vehicle].filter(Boolean).join(" ").trim();
}

function getVehicleRecord(vehicle) {
  return state.vehicles.find((item) => item.name === vehicle) || { name: vehicle, type: getProfile(vehicle).profileType || "Automotive" };
}

function getVehicleNames(vehicleRecords = state.vehicles) {
  return vehicleRecords.map((vehicle) => (typeof vehicle === "string" ? vehicle : vehicle.name)).filter(Boolean);
}

function uniqueVehicleName(name) {
  const existing = new Set(getVehicleNames(state.vehicles).map((vehicle) => vehicle.toLowerCase()));
  if (!existing.has(name.toLowerCase())) return name;

  let index = 2;
  let candidate = `${name} ${index}`;
  while (existing.has(candidate.toLowerCase())) {
    index += 1;
    candidate = `${name} ${index}`;
  }
  return candidate;
}

function typeIcon(type) {
  const normalized = String(type || "").toLowerCase();
  if (normalized.includes("boat")) return "boat";
  if (normalized.includes("motorcycle") || normalized.includes("dirt")) return "motorcycle";
  if (normalized.includes("side") || normalized.includes("atv")) return "atv";
  if (normalized.includes("trailer")) return "trailer";
  return "car";
}

function getVehicleEntries(vehicle) {
  return state.entries
    .filter((entry) => entry.vehicle === vehicle)
    .sort((a, b) => b.date.localeCompare(a.date));
}

function getDiagnostics(vehicle) {
  return state.diagnostics
    .filter((diagnostic) => diagnostic.vehicle === vehicle)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

function getProfile(vehicle) {
  const existing = state.profiles[vehicle] || seedProfiles[vehicle];
  if (existing) return existing;
  const record = state.vehicles.find((item) => item.name === vehicle) || { name: vehicle, type: "Automotive" };
  return defaultProfileFor(record);
}

function filterEntries(entries, filter) {
  if (filter === "all") return entries;
  if (filter === "costs") return entries.filter((entry) => Number(entry.cost) > 0);
  return entries.filter((entry) => entry.category === filter);
}

function getCostSummary(entries, profile) {
  const loggedTotal = sumCost(entries);
  const pricePaid = moneyNumber(profile.pricePaid);
  const sellValue = moneyNumber(profile.sellValue);
  const totalInvested = pricePaid + loggedTotal;

  return {
    loggedTotal,
    pricePaid,
    sellValue,
    totalInvested,
    netValue: sellValue - totalInvested
  };
}

function sumCost(entries) {
  return entries.reduce((total, entry) => total + Number(entry.cost || 0), 0);
}

function getCategoryLabel(category) {
  return categories.find((item) => item.id === category)?.label || "Entry";
}

function categoryIcon(category) {
  return categories.find((item) => item.id === category)?.icon || "list";
}

function money(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(Number(value || 0));
}

function moneyNumber(value) {
  const parsed = Number.parseFloat(String(value || "").replaceAll(",", "").replaceAll("$", ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

function normalizeMoneyInput(value) {
  const parsed = moneyNumber(value);
  return parsed ? String(parsed) : "";
}

function formatDate(date) {
  if (!date) return "No date";
  const parsed = new Date(`${date}T12:00:00`);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(parsed);
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

function icon(name) {
  const icons = {
    activity: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 14h4l2-7 4 12 2-5h4"/></svg>',
    atv: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 15h16"/><path d="M7 15l2-5h6l2 5"/><path d="M8 10h8"/><path d="M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg>',
    boat: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 15l2-7h12l2 7"/><path d="M3 15h18l-2 4H5l-2-4Z"/><path d="M9 8V5h6v3"/><path d="M6 21c1.2 0 1.2-1 2.4-1s1.2 1 2.4 1 1.2-1 2.4-1 1.2 1 2.4 1 1.2-1 2.4-1"/></svg>',
    box: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8l8-4 8 4-8 4-8-4Z"/><path d="M4 8v8l8 4 8-4V8"/><path d="M12 12v8"/><path d="M8 6l8 4"/></svg>',
    calendar: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4v3"/><path d="M18 4v3"/><path d="M4 8h16"/><path d="M5 6h14v14H5V6Z"/><path d="M8 12h3"/><path d="M13 12h3"/><path d="M8 16h3"/></svg>',
    car: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 17h14"/><path d="M6 17l1-6 2-4h6l2 4 1 6"/><path d="M8 17v2"/><path d="M16 17v2"/><path d="M7 11h10"/></svg>',
    chevron: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
    check: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>',
    clock: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/><path d="M12 7v6l4 2"/></svg>',
    close: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>',
    dashboard: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 13h6V5H4v8Z"/><path d="M14 19h6V5h-6v14Z"/><path d="M4 19h6v-3H4v3Z"/></svg>',
    flag: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 21V4"/><path d="M6 5h12l-2 5 2 5H6"/></svg>',
    hourglass: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12"/><path d="M6 20h12"/><path d="M7 4c0 4 3 5 5 8 2-3 5-4 5-8"/><path d="M7 20c0-4 3-5 5-8 2 3 5 4 5 8"/></svg>',
    image: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5h14v14H5V5Z"/><path d="M8 14l2.5-3 2.5 3 1.5-2 3.5 5H6l2-3Z"/><path d="M15 9h.01"/></svg>',
    motorcycle: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M8 15h4l3-5h3"/><path d="M10 10h3l2 5"/><path d="M12 10l-2-3"/><path d="M7 7h3"/></svg>',
    plus: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14"/><path d="M5 12h14"/></svg>',
    trailer: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h11v7H4V9Z"/><path d="M15 13h3l2 3"/><path d="M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M20 16h1"/></svg>',
    wrench: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0 5 5L11 20l-5-5 8.7-8.7Z"/><path d="M6 15l3 3"/></svg>',
    alert: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l9 16H3L12 3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
    bolt: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2L4 14h7l-1 8 10-13h-7l1-7Z"/></svg>',
    link: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/></svg>',
    note: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h9l3 3v15H6V3Z"/><path d="M14 3v4h4"/><path d="M9 12h6"/><path d="M9 16h5"/></svg>',
    profile: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6h8"/><path d="M8 10h8"/><path d="M8 14h5"/><path d="M6 3h12v18H6V3Z"/></svg>',
    receipt: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10v18l-2-1-2 1-2-1-2 1-2-1V3Z"/><path d="M9 8h6"/><path d="M9 12h6"/><path d="M9 16h4"/></svg>',
    save: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h11l3 3v13H5V4Z"/><path d="M8 4v6h8"/><path d="M8 20v-6h8v6"/></svg>',
    tag: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12V5h7l9 9-7 7-9-9Z"/><path d="M8 8h.01"/></svg>',
    warning: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l9 18H3L12 3Z"/><path d="M12 9v5"/><path d="M12 18h.01"/></svg>',
    list: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6h12"/><path d="M8 12h12"/><path d="M8 18h12"/><path d="M4 6h.01"/><path d="M4 12h.01"/><path d="M4 18h.01"/></svg>',
    trash: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M6 7l1 14h10l1-14"/><path d="M9 7V4h6v3"/></svg>'
  };

  return icons[name] || icons.list;
}
