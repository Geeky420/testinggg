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
  { id: "dashboard", label: "Garage Overview", icon: "dashboard" },
  { id: "logbook", label: "Vehicle Dashboard", icon: "list" },
  { id: "profile", label: "Profile", icon: "profile" },
  { id: "diagnostics", label: "Diagnostics", icon: "activity" }
];

const categories = [
  { id: "all", label: "Overview", icon: "dashboard" },
  { id: "maintenance", label: "Maintenance", icon: "wrench" },
  { id: "repairs", label: "Repairs", icon: "alert" },
  { id: "expense", label: "Expense", icon: "receipt" },
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
  { id: "Critical", label: "Critical", weight: 4 }
];

const diagnosticStatuses = ["Open", "Watching", "Waiting on parts", "Scheduled", "Done"];
const entryStatuses = ["Logged", "Open", "Scheduled", "Watching", "Waiting on parts", "Done"];
const taskStatuses = ["Not Started", "In Progress", "Done"];
const projectStatuses = [
  { id: "Running", label: "Running", icon: "check", color: "#16a34a" },
  { id: "Needs Attention", label: "Needs Attention", icon: "alert", color: "#f97316" },
  { id: "Broken", label: "Broken", icon: "warning", color: "#dc2626" },
  { id: "Parked", label: "Parked", icon: "clock", color: "#64748b" },
  { id: "Ready", label: "Ready", icon: "check", color: "#22c55e" }
];
const expenseCategories = ["Parts", "Labor", "Maintenance", "Upgrade", "Other"];

const storageKey = "geeky-garage-state-v1";

const seedProfiles = {
  Yukon: {
    projectStatus: "Needs Attention",
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
    projectStatus: "Running",
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
    projectStatus: "Ready",
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
    projectStatus: "Parked",
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
    projectStatus: "Ready",
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
    id: "seed-yukon-ground-expense",
    vehicle: "Yukon",
    category: "expense",
    title: "Ground straps and electrical supplies",
    cost: 38.44,
    expenseCategory: "Parts",
    date: "2026-05-31",
    notes: "Supplies set aside for electrical diagnosis."
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

const seedTasks = [
  {
    id: "task-yukon-electrical-next",
    vehicle: "Yukon",
    title: "Verify DLC power, grounds, and cluster feeds",
    priority: "Critical",
    status: "In Progress",
    dueDate: "2026-06-02",
    notes: "Start with battery voltage, DLC power/ground, body grounds, then cluster feeds."
  },
  {
    id: "task-yukon-brakes-check",
    vehicle: "Yukon",
    title: "Recheck front brake hardware",
    priority: "High",
    status: "Not Started",
    dueDate: "",
    notes: "Confirm pads seated and rotor condition after last brake work."
  },
  {
    id: "task-boat-electronics-test",
    vehicle: "Boat",
    title: "Bench test new electronics before install",
    priority: "Medium",
    status: "Not Started",
    dueDate: "",
    notes: "Confirm power, screen, and wiring layout before mounting."
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
let selectedEntryId = state.selectedEntryId || "";
let activeFilter = "all";
let activeView = isKnownView(state.activeView) ? state.activeView : "dashboard";
let costMode = costModes.some((mode) => mode.id === state.costMode) ? state.costMode : "logged";
let vehicleMenuOpen = false;
let addVehicleModalOpen = false;
let entryFormOpen = false;
let quickAddOpen = false;
let quickAddMode = "";

const els = {
  vehicleNav: document.querySelector("#vehicleNav"),
  workspaceTabs: document.querySelector("#workspaceTabs"),
  dashboardView: document.querySelector("#dashboardView"),
  filterBar: document.querySelector("#filterBar"),
  garageSummary: document.querySelector("#garageSummary"),
  logbookView: document.querySelector("#logbookView"),
  entryDetailView: document.querySelector("#entryDetailView"),
  profileView: document.querySelector("#profileView"),
  diagnosticsView: document.querySelector("#diagnosticsView"),
  vehicleHeader: document.querySelector("#vehicleHeader"),
  headerContextLabel: document.querySelector("#headerContextLabel"),
  vehicleTitle: document.querySelector("#vehicleTitle"),
  headerTotalLabel: document.querySelector("#headerTotalLabel"),
  headerTotal: document.querySelector("#headerTotal"),
  headerSecondaryLabel: document.querySelector("#headerSecondaryLabel"),
  headerEntries: document.querySelector("#headerEntries"),
  headerIssues: document.querySelector("#headerIssues"),
  headerUpgrades: document.querySelector("#headerUpgrades"),
  activeVehicleLabel: document.querySelector("#activeVehicleLabel"),
  entryForm: document.querySelector("#entryForm"),
  categoryInput: document.querySelector("#categoryInput"),
  titleInput: document.querySelector("#titleInput"),
  costInput: document.querySelector("#costInput"),
  expenseCategoryInput: document.querySelector("#expenseCategoryInput"),
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
  toggleEntryForm: document.querySelector("#toggleEntryForm"),
  costTitle: document.querySelector("#costTitle"),
  costSubtitle: document.querySelector("#costSubtitle"),
  costModeToggle: document.querySelector("#costModeToggle"),
  valueSummary: document.querySelector("#valueSummary"),
  costBreakdown: document.querySelector("#costBreakdown"),
  noteCount: document.querySelector("#noteCount"),
  noteList: document.querySelector("#noteList"),
  themeToggle: document.querySelector("#themeToggle"),
  themeLabel: document.querySelector("#themeLabel"),
  quickAddModal: document.querySelector("#quickAddModal"),
  floatingQuickAdd: document.querySelector("#floatingQuickAdd")
};

init();

function init() {
  state.theme = state.theme === "night" ? "night" : "day";
  state.vehicles = normalizeVehicles(state.vehicles);
  state.entries = normalizeEntries(state.entries, state.vehicles);
  state.tasks = normalizeTasks(state.tasks, state.vehicles);
  state.profiles = mergeProfiles(state.profiles, state.vehicles);
  state.diagnostics = normalizeDiagnostics(state.diagnostics, state.vehicles);
  selectedVehicle = getVehicleNames(state.vehicles).includes(selectedVehicle) ? selectedVehicle : getVehicleNames(state.vehicles)[0];
  selectedEntryId = state.entries.some((entry) => entry.id === selectedEntryId) ? selectedEntryId : "";
  const selectedEntry = state.entries.find((entry) => entry.id === selectedEntryId);
  if (activeView === "entryDetail" && selectedEntry) {
    selectedVehicle = selectedEntry.vehicle;
  }
  if (activeView === "entryDetail" && !selectedEntryId) {
    activeView = "logbook";
  }
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
    selectedEntryId = "";
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
    selectedEntryId = "";
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

  els.toggleEntryForm.addEventListener("click", () => {
    entryFormOpen = !entryFormOpen;
    renderEntryFormState();
  });

  els.floatingQuickAdd.addEventListener("click", () => {
    quickAddOpen = true;
    quickAddMode = "";
    renderQuickAddModal();
  });

  els.dashboardView.addEventListener("click", (event) => {
    const quickAdd = event.target.closest("[data-open-quick-add]");
    if (quickAdd) {
      quickAddOpen = true;
      quickAddMode = "";
      renderQuickAddModal();
      return;
    }

    const item = event.target.closest("[data-dashboard-item]");
    if (item) {
      if (item.dataset.dashboardSource === "entry") {
        openEntryDetail(item.dataset.dashboardItem);
        return;
      }

      selectedVehicle = item.dataset.dashboardVehicle;
      selectedEntryId = "";
      if (item.dataset.dashboardSource === "task") {
        activeView = "dashboard";
      } else if (item.dataset.dashboardSource === "profile") {
        activeView = "profile";
      } else {
        activeView = "diagnostics";
        activeFilter = item.dataset.dashboardCategory || "all";
      }
      state.selectedVehicle = selectedVehicle;
      state.activeView = activeView;
      saveState();
      render();
      return;
    }

    const target = event.target.closest("[data-dashboard-vehicle]");
    if (!target) return;
    selectedVehicle = target.dataset.dashboardVehicle;
    selectedEntryId = "";
    activeView = "logbook";
    activeFilter = "all";
    state.selectedVehicle = selectedVehicle;
    state.activeView = activeView;
    saveState();
    render();
  });

  els.quickAddModal.addEventListener("click", (event) => {
    if (event.target.matches("[data-quick-add-backdrop]") || event.target.closest("[data-close-quick-add]")) {
      closeQuickAdd();
      return;
    }

    const option = event.target.closest("[data-quick-add-mode]");
    if (!option) return;
    quickAddMode = option.dataset.quickAddMode;
    if (quickAddMode === "vehicle") {
      quickAddOpen = false;
      quickAddMode = "";
      addVehicleModalOpen = true;
      renderQuickAddModal();
      renderVehicles();
      requestAnimationFrame(() => document.querySelector("#addVehicleForm input[name='vehicleName']")?.focus());
      return;
    }
    renderQuickAddModal();
  });

  els.quickAddModal.addEventListener("submit", (event) => {
    if (!event.target.matches("[data-quick-add-form]")) return;
    event.preventDefault();
    saveQuickAdd(event.target);
  });

  els.quickAddModal.addEventListener("change", (event) => {
    if (!event.target.matches("select[name='category']")) return;
    const form = event.target.form;
    if (form?.elements.expenseCategory) {
      form.elements.expenseCategory.value = defaultExpenseCategoryForCategory(event.target.value);
    }
  });

  els.categoryInput.addEventListener("change", () => {
    els.statusSymbolInput.value = defaultSymbolForCategory(els.categoryInput.value);
    els.expenseCategoryInput.value = defaultExpenseCategoryForCategory(els.categoryInput.value);
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
    if (button) {
      deleteEntry(button.dataset.delete);
      return;
    }

    const card = event.target.closest("[data-open-entry]");
    if (!card) return;
    openEntryDetail(card.dataset.openEntry);
  });

  els.entryList.addEventListener("keydown", (event) => {
    if (!["Enter", " "].includes(event.key)) return;
    if (event.target.closest("[data-delete]")) return;
    const card = event.target.closest("[data-open-entry]");
    if (!card) return;
    event.preventDefault();
    openEntryDetail(card.dataset.openEntry);
  });

  els.entryDetailView.addEventListener("click", (event) => {
    const back = event.target.closest("[data-entry-back]");
    if (back) {
      closeEntryDetail();
      return;
    }

    const deleteButton = event.target.closest("[data-delete-entry-detail]");
    if (!deleteButton) return;
    deleteEntry(deleteButton.dataset.deleteEntryDetail);
  });

  els.entryDetailView.addEventListener("change", (event) => {
    if (!event.target.matches("select[name='category']")) return;
    const form = event.target.form;
    const category = event.target.value;
    form.elements.statusSymbol.value = defaultSymbolForCategory(category);
    if (form.elements.expenseCategory) {
      form.elements.expenseCategory.value = defaultExpenseCategoryForCategory(category);
    }
    if (category === "repairs") {
      form.elements.status.value = "Open";
      form.elements.priority.value = "High";
      form.elements.flagged.checked = true;
      return;
    }
    form.elements.status.value = "Logged";
    form.elements.priority.value = "Medium";
  });

  els.entryDetailView.addEventListener("submit", (event) => {
    if (!event.target.matches("#entryDetailForm")) return;
    event.preventDefault();
    saveEntryDetail(event.target);
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
        selectedEntryId: typeof saved.selectedEntryId === "string" ? saved.selectedEntryId : "",
        entries: normalizeEntries(saved.entries.filter((entry) => vehicleNames.includes(entry.vehicle)), vehicles),
        tasks: normalizeTasks(saved.tasks, vehicles),
        profiles: mergeProfiles(saved.profiles, vehicles),
        diagnostics: normalizeDiagnostics(saved.diagnostics, vehicles),
        theme: saved.theme === "night" ? "night" : "day",
        costMode: costModes.some((mode) => mode.id === saved.costMode) ? saved.costMode : "logged",
        activeView: "dashboard"
      };
    }
  } catch {
    localStorage.removeItem(storageKey);
  }

  return {
    vehicles: normalizeVehicles(),
    selectedVehicle: "Yukon",
    selectedEntryId: "",
    entries: normalizeEntries(seedEntries),
    tasks: normalizeTasks(seedTasks),
    profiles: mergeProfiles(),
    diagnostics: normalizeDiagnostics(seedDiagnostics),
    theme: "night",
    costMode: "logged",
    activeView: "dashboard"
  };
}

function isKnownView(view) {
  return workspaceViews.some((item) => item.id === view) || view === "entryDetail";
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
    profiles[vehicle].projectStatus = getProjectStatus(profiles[vehicle].projectStatus).id;
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
    priority: normalizePriority(entry.priority || (isRepair ? "High" : "Medium")),
    flagged: typeof entry.flagged === "boolean" ? entry.flagged : isRepair,
    scheduledDate: entry.scheduledDate || "",
    scheduledTime: entry.scheduledTime || "",
    durationHours: entry.durationHours || "",
    expenseCategory: expenseCategories.includes(entry.expenseCategory) ? entry.expenseCategory : defaultExpenseCategoryForCategory(category)
  };
}

function normalizeTasks(savedTasks, vehicleRecords = defaultVehicles) {
  const vehicleNames = getVehicleNames(normalizeVehicles(vehicleRecords));
  const tasks = Array.isArray(savedTasks) ? savedTasks : seedTasks;
  return tasks
    .filter((task) => vehicleNames.includes(task.vehicle))
    .map((task) => normalizeTask(task));
}

function normalizeTask(task) {
  return {
    id: task.id || `task-${Date.now()}`,
    vehicle: task.vehicle || selectedVehicle,
    title: String(task.title || "").trim(),
    priority: normalizePriority(task.priority || "Medium"),
    status: taskStatuses.includes(task.status) ? task.status : "Not Started",
    dueDate: task.dueDate || task.scheduledDate || "",
    notes: String(task.notes || "").trim(),
    createdAt: task.createdAt || today()
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
    priority: normalizePriority(item.priority || (item.status === "Done" ? "Low" : "High")),
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
    projectStatus: "Running",
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
  state.selectedEntryId = selectedEntryId;
  state.costMode = costMode;
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function renderStaticFormOptions() {
  els.statusSymbolInput.innerHTML = renderStatusSymbolOptions("repair");
  els.priorityInput.innerHTML = renderPriorityOptions("Medium");
  els.expenseCategoryInput.innerHTML = renderExpenseCategoryOptions("Maintenance");
  els.statusSymbolInput.value = defaultSymbolForCategory(els.categoryInput.value);
  els.priorityInput.value = "Medium";
  els.expenseCategoryInput.value = defaultExpenseCategoryForCategory(els.categoryInput.value);
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
      projectStatus: String(formData.get("projectStatus") || "Running"),
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
    expenseCategory: els.expenseCategoryInput.value || defaultExpenseCategoryForCategory(category),
    notes: els.notesInput.value.trim()
  };

  state.entries = [normalizeEntry(entry), ...state.entries];
  saveState();

  els.entryForm.reset();
  els.dateInput.value = today();
  els.categoryInput.value = entry.category;
  els.statusSymbolInput.value = defaultSymbolForCategory(entry.category);
  els.priorityInput.value = entry.category === "repairs" ? "High" : "Medium";
  els.expenseCategoryInput.value = defaultExpenseCategoryForCategory(entry.category);
  els.flaggedInput.checked = entry.category === "repairs";
  entryFormOpen = false;
  render();
}

function openEntryDetail(entryId) {
  const entry = getEntryById(entryId);
  if (!entry) return;
  selectedEntryId = entry.id;
  selectedVehicle = entry.vehicle;
  activeView = "entryDetail";
  state.selectedEntryId = selectedEntryId;
  state.selectedVehicle = selectedVehicle;
  state.activeView = activeView;
  saveState();
  render();
  scrollToWorkspaceTop();
}

function closeEntryDetail() {
  selectedEntryId = "";
  activeView = "logbook";
  state.selectedEntryId = "";
  state.activeView = activeView;
  saveState();
  render();
  scrollToWorkspaceTop();
}

function deleteEntry(entryId) {
  state.entries = state.entries.filter((entry) => entry.id !== entryId);
  if (selectedEntryId === entryId) {
    selectedEntryId = "";
    activeView = "logbook";
  }
  saveState();
  render();
}

function saveEntryDetail(form) {
  const entryId = form.dataset.entryId;
  const existing = getEntryById(entryId);
  if (!existing) return;

  const formData = new FormData(form);
  const updated = normalizeEntry({
    ...existing,
    category: String(formData.get("category") || existing.category),
    title: String(formData.get("title") || "").trim(),
    cost: Number.parseFloat(formData.get("cost") || "0"),
    date: String(formData.get("date") || today()),
    status: String(formData.get("status") || defaultStatusForCategory(existing.category)),
    statusSymbol: String(formData.get("statusSymbol") || defaultSymbolForCategory(existing.category)),
    statusLabel: String(formData.get("statusLabel") || "").trim(),
    priority: String(formData.get("priority") || "Medium"),
    flagged: formData.get("flagged") === "on",
    scheduledDate: String(formData.get("scheduledDate") || ""),
    scheduledTime: String(formData.get("scheduledTime") || ""),
    durationHours: String(formData.get("durationHours") || ""),
    expenseCategory: String(formData.get("expenseCategory") || defaultExpenseCategoryForCategory(existing.category)),
    notes: String(formData.get("notes") || "").trim()
  });

  if (!updated.title) return;

  state.entries = state.entries.map((entry) => (entry.id === entryId ? updated : entry));
  selectedEntryId = updated.id;
  selectedVehicle = updated.vehicle;
  saveState();
  render();
}

function saveQuickAdd(form) {
  const formData = new FormData(form);
  const mode = form.dataset.quickAddForm;
  const vehicle = String(formData.get("vehicle") || selectedVehicle);

  if (mode === "task") {
    const title = String(formData.get("title") || "").trim();
    if (!title) return;
    state.tasks = [
      normalizeTask({
        id: `task-${Date.now()}`,
        vehicle,
        title,
        priority: String(formData.get("priority") || "Medium"),
        status: String(formData.get("status") || "Not Started"),
        dueDate: String(formData.get("dueDate") || ""),
        notes: String(formData.get("notes") || "").trim(),
        createdAt: today()
      }),
      ...state.tasks
    ];
  }

  if (mode === "expense" || mode === "timeline") {
    const title = String(formData.get("title") || "").trim();
    if (!title) return;
    const category = mode === "expense" ? "expense" : String(formData.get("category") || "notes");
    state.entries = [
      normalizeEntry({
        id: `entry-${Date.now()}`,
        vehicle,
        category,
        title,
        cost: Number.parseFloat(formData.get("cost") || "0"),
        date: String(formData.get("date") || today()),
        status: category === "repairs" ? "Open" : "Logged",
        statusSymbol: defaultSymbolForCategory(category),
        statusLabel: "",
        priority: category === "repairs" ? "High" : "Medium",
        flagged: category === "repairs",
        scheduledDate: "",
        scheduledTime: "",
        durationHours: "",
        expenseCategory: String(formData.get("expenseCategory") || defaultExpenseCategoryForCategory(category)),
        notes: String(formData.get("notes") || "").trim()
      }),
      ...state.entries
    ];
  }

  selectedVehicle = vehicle;
  closeQuickAdd(false);
  saveState();
  render();
}

function closeQuickAdd(shouldRender = true) {
  quickAddOpen = false;
  quickAddMode = "";
  if (shouldRender) {
    renderQuickAddModal();
  }
}

function renderQuickAddModal() {
  if (!quickAddOpen) {
    els.quickAddModal.classList.remove("is-open");
    els.quickAddModal.setAttribute("aria-hidden", "true");
    els.quickAddModal.innerHTML = "";
    return;
  }

  els.quickAddModal.classList.add("is-open");
  els.quickAddModal.setAttribute("aria-hidden", "false");

  els.quickAddModal.innerHTML = `
    <div class="quick-add-backdrop" data-quick-add-backdrop>
      <section class="quick-add-dialog" role="dialog" aria-modal="true" aria-labelledby="quickAddTitle">
        <div class="quick-add-head">
          <div>
            <p class="label">Fast command</p>
            <h3 id="quickAddTitle">Quick Add</h3>
          </div>
          <button class="icon-button modal-close" type="button" data-close-quick-add aria-label="Close Quick Add">
            ${icon("close")}
          </button>
        </div>

        ${quickAddMode ? renderQuickAddForm(quickAddMode) : renderQuickAddOptions()}
      </section>
    </div>
  `;
}

function renderQuickAddOptions() {
  const options = [
    { id: "task", label: "Add Task", meta: "Priority, status, due date", iconName: "list" },
    { id: "expense", label: "Add Expense", meta: "Parts, labor, maintenance", iconName: "receipt" },
    { id: "timeline", label: "Add Timeline Note", meta: "Repair, note, upgrade, maintenance", iconName: "note" },
    { id: "vehicle", label: "Add Vehicle / Project", meta: "Car, boat, bike, toy", iconName: "car" }
  ];

  return `
    <div class="quick-add-options">
      ${options
        .map(
          (option) => `
            <button class="quick-add-option" type="button" data-quick-add-mode="${escapeAttr(option.id)}">
              <span>${icon(option.iconName)}</span>
              <strong>${escapeHtml(option.label)}</strong>
              <small>${escapeHtml(option.meta)}</small>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderQuickAddForm(mode) {
  if (mode === "task") {
    return `
      <form class="quick-add-form" data-quick-add-form="task" autocomplete="off">
        ${renderQuickAddVehicleField()}
        <label class="field-wide">
          <span>Task title</span>
          <input name="title" type="text" placeholder="Check Yukon grounds" required />
        </label>
        <label>
          <span>Priority</span>
          <select name="priority">${renderPriorityOptions("High")}</select>
        </label>
        <label>
          <span>Status</span>
          <select name="status">${renderTaskStatusOptions("Not Started")}</select>
        </label>
        <label>
          <span>Due date</span>
          <input name="dueDate" type="date" />
        </label>
        <label class="field-wide">
          <span>Notes</span>
          <textarea name="notes" rows="3" placeholder="Tools, parts, test order, reminder..."></textarea>
        </label>
        ${renderQuickAddActions()}
      </form>
    `;
  }

  if (mode === "expense") {
    return `
      <form class="quick-add-form" data-quick-add-form="expense" autocomplete="off">
        ${renderQuickAddVehicleField()}
        <label class="field-wide">
          <span>Expense title</span>
          <input name="title" type="text" placeholder="Brake pads and hardware" required />
        </label>
        <label>
          <span>Cost</span>
          <input name="cost" type="number" min="0" step="0.01" placeholder="0.00" />
        </label>
        <label>
          <span>Expense category</span>
          <select name="expenseCategory">${renderExpenseCategoryOptions("Parts")}</select>
        </label>
        <label>
          <span>Date</span>
          <input name="date" type="date" value="${escapeAttr(today())}" />
        </label>
        <label class="field-wide">
          <span>Notes</span>
          <textarea name="notes" rows="3" placeholder="Receipt, source, part number..."></textarea>
        </label>
        ${renderQuickAddActions()}
      </form>
    `;
  }

  return `
    <form class="quick-add-form" data-quick-add-form="timeline" autocomplete="off">
      ${renderQuickAddVehicleField()}
      <label>
        <span>Timeline type</span>
        <select name="category">${renderCategoryOptions("notes")}</select>
      </label>
      <label class="field-wide">
        <span>Title</span>
        <input name="title" type="text" placeholder="Dash came back when scanner plugged in" required />
      </label>
      <label>
        <span>Cost</span>
        <input name="cost" type="number" min="0" step="0.01" placeholder="0.00" />
      </label>
      <label>
        <span>Expense category</span>
        <select name="expenseCategory">${renderExpenseCategoryOptions("Other")}</select>
      </label>
      <label>
        <span>Date</span>
        <input name="date" type="date" value="${escapeAttr(today())}" />
      </label>
      <label class="field-wide">
        <span>Notes</span>
        <textarea name="notes" rows="3" placeholder="What happened, what changed, what to do next..."></textarea>
      </label>
      ${renderQuickAddActions()}
    </form>
  `;
}

function renderQuickAddVehicleField() {
  return `
    <label>
      <span>Vehicle / project</span>
      <select name="vehicle">${renderVehicleOptions(selectedVehicle)}</select>
    </label>
  `;
}

function renderQuickAddActions() {
  return `
    <div class="modal-actions field-wide">
      <button class="ghost-button" type="button" data-quick-add-mode="">Back</button>
      <button class="save-button" type="submit">${icon("save")} Save</button>
    </div>
  `;
}

function scrollToWorkspaceTop() {
  requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0 }));
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
  const dashboardData = getDashboardData();
  const selectedSummary = dashboardData.vehicleSummaries.find((vehicle) => vehicle.record.name === selectedVehicle) || getVehicleDashboardSummaries(getDashboardItems()).find((vehicle) => vehicle.record.name === selectedVehicle);
  const isGarageOverview = activeView === "dashboard";

  applyVehicleTheme(selectedVehicle);
  els.garageSummary.textContent = `${state.vehicles.length} ${state.vehicles.length === 1 ? "toy" : "toys"} tracked`;
  els.vehicleHeader.classList.toggle("overview-header", isGarageOverview);
  els.vehicleHeader.classList.toggle("vehicle-detail-hero", !isGarageOverview);
  els.vehicleHeader.style = isGarageOverview ? "" : vehicleCardBackgroundStyle(selectedVehicle);
  els.headerContextLabel.textContent = isGarageOverview ? "Garage OS" : vehicleIdentityLabel(selectedVehicle);
  els.vehicleTitle.textContent = isGarageOverview ? "Garage Overview" : selectedVehicle;
  els.headerTotalLabel.textContent = isGarageOverview ? "Total vehicles" : "Total spent";
  els.headerTotal.textContent = isGarageOverview ? String(state.vehicles.length) : money(costDisplay.value);
  els.headerSecondaryLabel.textContent = isGarageOverview ? "Open issues" : "Services logged";
  els.headerEntries.textContent = isGarageOverview ? String(dashboardData.openIssueCount) : String(vehicleEntries.filter((entry) => entry.category === "maintenance").length);
  els.headerIssues.textContent = isGarageOverview ? String(dashboardData.upcomingMaintenanceCount) : String(selectedSummary?.issueCount || 0);
  els.headerUpgrades.textContent = isGarageOverview ? String(dashboardData.overdueServices.length) : String(vehicleEntries.filter((entry) => entry.category === "upgrades").length);
  document.querySelector("#headerIssuesLabel").textContent = isGarageOverview ? "Upcoming" : "Open issues";
  document.querySelector("#headerUpgradesLabel").textContent = isGarageOverview ? "Overdue" : "Upgrades";
  els.activeVehicleLabel.textContent = selectedVehicle;
  els.logTitle.textContent = activeFilter === "all" ? "Vehicle overview" : getCategoryLabel(activeFilter);
  els.visibleCount.textContent = `${shownEntries.length} shown`;
  els.costTitle.textContent = money(costDisplay.value);
  els.costSubtitle.textContent = costDisplay.subtitle;

  renderVehicles();
  renderWorkspaceTabs();
  renderDashboard();
  renderQuickAddModal();
  renderEntryFormState();
  renderFilters();
  renderEntries(shownEntries);
  renderCosts(vehicleEntries, costSummary);
  renderNotes(vehicleEntries);
  renderEntryDetail();
  renderProfile();
  renderDiagnostics();
  syncViews();
}

function syncViews() {
  els.dashboardView.classList.toggle("is-hidden", activeView !== "dashboard");
  els.filterBar.classList.toggle("is-hidden", activeView !== "logbook");
  els.logbookView.classList.toggle("is-hidden", activeView !== "logbook");
  els.entryDetailView.classList.toggle("is-hidden", activeView !== "entryDetail");
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
      const isActive = view.id === activeView || (activeView === "entryDetail" && view.id === "logbook");
      return `
        <button class="workspace-tab ${isActive ? "active" : ""}" type="button" data-view="${view.id}" aria-pressed="${isActive}">
          ${icon(view.icon)}
          ${view.label}${suffix}
        </button>
      `;
    })
    .join("");
}

function renderEntryFormState() {
  els.entryForm.classList.toggle("is-collapsed", !entryFormOpen);
  els.toggleEntryForm.innerHTML = `${icon(entryFormOpen ? "close" : "plus")} ${entryFormOpen ? "Hide Entry Form" : "Add Timeline Entry"}`;
  els.toggleEntryForm.setAttribute("aria-expanded", String(entryFormOpen));
}

function renderDashboard() {
  const data = getDashboardData();
  const attentionItems = data.needsAttention.slice(0, 5);
  const recentExpenses = data.recentExpenses.slice(0, 5);
  const recentActivity = data.recentActivity.slice(0, 5);

  els.dashboardView.innerHTML = `
    <div class="garage-overview-hero">
      <div>
        <p class="label">Command queue</p>
        <h3>Next actions, not noise</h3>
        <span>Use Quick Add when work happens, then let the overview surface what matters.</span>
      </div>
      <button class="save-button quick-add-button" type="button" data-open-quick-add>${icon("plus")} Quick Add</button>
    </div>

    <section class="dashboard-stat-grid os-stat-grid" aria-label="Garage overview totals">
      ${renderDashboardStat("Total Vehicles", String(state.vehicles.length), "Garage projects tracked", "car")}
      ${renderDashboardStat("Open Issues", String(data.openIssueCount), "Repairs, diagnostics, priority work", "alert", data.openIssueCount ? "warning" : "good")}
      ${renderDashboardStat("Upcoming Maintenance", String(data.upcomingMaintenanceCount), "Scheduled in the next 30 days", "calendar")}
      ${renderDashboardStat("Overdue Services", String(data.overdueServices.length), "Past due scheduled work", "clock", data.overdueServices.length ? "warning" : "good")}
      ${renderDashboardStat("Total Maintenance Cost", money(data.totals.maintenanceCost), "Logged maintenance spend", "receipt")}
    </section>

    <section class="needs-attention-panel" aria-label="Needs attention">
      <div class="panel-heading">
        <div>
          <p class="label">Needs Attention</p>
          <h4>Highest signal items</h4>
        </div>
        <span>${data.needsAttention.length} active</span>
      </div>
      <div class="attention-grid">
        ${
          attentionItems.length
            ? attentionItems.map(renderNeedsAttentionItem).join("")
            : `<div class="empty-state compact-dashboard">Everything looks calm. Add mileage, due dates, and tasks to keep this useful.</div>`
        }
      </div>
    </section>

    <section class="dashboard-panel vehicle-dashboard-panel command-vehicle-panel" aria-label="Vehicle cards">
        <div class="panel-heading">
          <div>
            <p class="label">Fleet view</p>
            <h4>Vehicles & projects</h4>
          </div>
          <span>${state.vehicles.length} tracked</span>
        </div>
        <div class="vehicle-status-grid">
          ${data.vehicleSummaries.map(renderVehicleStatusCard).join("")}
        </div>
    </section>

    <div class="dashboard-layout lower">
      <section class="dashboard-panel expense-panel" aria-label="Recent expenses">
        <div class="panel-heading">
          <div>
            <p class="label">Cost center</p>
            <h4>Recent expenses</h4>
          </div>
          <span>${money(data.recentExpenseTotal)}</span>
        </div>
        <div class="timeline-list">
          ${
            recentExpenses.length
              ? recentExpenses.map(renderExpenseLine).join("")
              : `<div class="empty-state compact-dashboard">No expenses logged yet.</div>`
          }
        </div>
      </section>

      <section class="dashboard-panel activity-panel" aria-label="Recent activity">
        <div class="panel-heading">
          <div>
            <p class="label">Shop log</p>
            <h4>Latest history</h4>
          </div>
          <span>${state.entries.length} entries</span>
        </div>
        <div class="timeline-list">
          ${
            recentActivity.length
              ? recentActivity.map(renderActivityLine).join("")
              : `<div class="empty-state compact-dashboard">No activity yet.</div>`
          }
        </div>
      </section>
    </div>
  `;
}

function getDashboardData() {
  const items = getDashboardItems();
  const activeItems = items.filter((item) => isActiveItem(item));
  const openTasks = items.filter((item) => item.source === "task" && !isDoneItem(item)).sort(compareDashboardItems);
  const priorityTasks = openTasks.filter((item) => priorityWeight(item.priority) >= 3);
  const todayPriorities = openTasks;
  const attentionItems = activeItems.filter((item) => needsAttention(item)).sort(compareDashboardItems);
  const scheduledItems = activeItems.filter((item) => item.scheduledDate && !isDoneItem(item)).sort(compareSchedule);
  const vehicleSummaries = getVehicleDashboardSummaries(items);
  const recentExpenses = getRecentExpenses();
  const recentActivity = getRecentActivity();
  const overdueServices = activeItems.filter((item) => isOverdue(item)).sort(compareSchedule);
  const upcomingMaintenance = activeItems.filter((item) => isUpcomingMaintenance(item)).sort(compareSchedule);
  const openIssues = activeItems.filter((item) => isIssueItem(item)).sort(compareDashboardItems);
  const missingInfoItems = getMissingInfoAttentionItems(vehicleSummaries);
  const needsAttentionItems = [...overdueServices, ...openIssues, ...missingInfoItems, ...attentionItems]
    .filter(uniqueAttentionItem)
    .sort(compareAttentionItems);

  const totals = vehicleSummaries.reduce(
    (total, vehicle) => {
      total.loggedTotal += vehicle.summary.loggedTotal;
      total.pricePaid += vehicle.summary.pricePaid;
      total.sellValue += vehicle.summary.sellValue;
      total.totalInvested += vehicle.summary.totalInvested;
      total.maintenanceCost += vehicle.summary.maintenanceCost;
      return total;
    },
    { loggedTotal: 0, pricePaid: 0, sellValue: 0, totalInvested: 0, maintenanceCost: 0 }
  );

  return {
    items,
    activeItems,
    openTasks,
    todayPriorities,
    urgentTaskCount: priorityTasks.length,
    attentionItems,
    needsAttention: needsAttentionItems,
    openIssueCount: openIssues.length,
    upcomingMaintenanceCount: upcomingMaintenance.length,
    overdueServices,
    scheduledItems,
    vehicleSummaries,
    recentExpenses,
    recentActivity,
    recentExpenseTotal: sumCost(recentExpenses.slice(0, 5)),
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

function uniqueAttentionItem(item, index, list) {
  const key = `${item.source || "entry"}:${item.id}`;
  return list.findIndex((candidate) => `${candidate.source || "entry"}:${candidate.id}` === key) === index;
}

function compareAttentionItems(a, b) {
  const overdueDiff = Number(isOverdue(b)) - Number(isOverdue(a));
  if (overdueDiff) return overdueDiff;
  return compareDashboardItems(a, b);
}

function isUpcomingMaintenance(item) {
  if (!item.scheduledDate || isDoneItem(item) || isOverdue(item)) return false;
  const days = scheduleDaysUntil(item.scheduledDate);
  return days <= 30 && (item.category === "maintenance" || item.typeLabel === "Task");
}

function isIssueItem(item) {
  if (isDoneItem(item)) return false;
  if (item.source === "diagnostic") return true;
  if (item.category === "repairs") return true;
  return item.source === "task" && priorityWeight(item.priority) >= 3;
}

function getMissingInfoAttentionItems(vehicleSummaries) {
  return vehicleSummaries
    .filter((vehicle) => vehicle.missingInfo.length)
    .map((vehicle) => ({
      id: `profile-${slugify(vehicle.record.name)}-missing-info`,
      source: "profile",
      sourceLabel: "Profile",
      vehicle: vehicle.record.name,
      category: "profile",
      typeLabel: "Missing info",
      title: `Add ${vehicle.missingInfo.join(", ")} for ${vehicle.record.name}`,
      status: "Open",
      statusSymbol: "attention",
      statusLabel: "Profile incomplete",
      priority: vehicle.missingInfo.includes("mileage") ? "High" : "Medium",
      flagged: true,
      scheduledDate: "",
      scheduledTime: "",
      durationHours: "",
      createdDate: "",
      notes: ""
    }));
}

function renderVehicleStatusCard(vehicle) {
  const health = vehicle.health;
  const nextTitle = vehicle.nextService ? formatSchedule(vehicle.nextService) : "No service date set";
  const nextMeta = vehicle.nextService?.title || "Add a due date in maintenance or tasks";

  return `
    <button class="vehicle-status-card garage-vehicle-card ${vehicle.record.name === selectedVehicle ? "active" : ""}" type="button" data-dashboard-vehicle="${escapeAttr(vehicle.record.name)}" style="${vehicleThemeStyle(vehicle.record.name)}">
      <span class="garage-vehicle-media" style="${escapeAttr(vehicleCardBackgroundStyle(vehicle.record.name))}">
        ${!vehicle.profile.photoDataUrl ? icon(typeIcon(vehicle.record.type)) : ""}
      </span>
      <span class="vehicle-status-main">
        <span>
          <strong>${escapeHtml(vehicle.record.name)}</strong>
          <small>${escapeHtml(vehicle.identity || vehicle.record.type || "Vehicle")}</small>
        </span>
      </span>
      <span class="vehicle-card-badges">
        <span class="project-status-badge health-${escapeAttr(slugify(health.label))}" style="--status-color: ${health.color}">${icon(health.icon)} ${escapeHtml(health.label)}</span>
        ${renderPriorityPill({ priority: vehicle.currentPriority })}
      </span>
      <span class="vehicle-card-mini-grid">
        <span><small>Mileage</small><strong>${escapeHtml(vehicle.mileage || "Missing")}</strong></span>
        <span><small>Issues</small><strong>${vehicle.issueCount}</strong></span>
      </span>
      <span class="vehicle-next-task">
        <small>Next service due</small>
        <strong>${escapeHtml(nextTitle)}</strong>
        <span>${escapeHtml(nextMeta)}</span>
      </span>
      <span class="vehicle-card-footer">
        <span>${money(vehicle.summary.totalInvested)} invested</span>
        <strong>View Vehicle</strong>
      </span>
    </button>
  `;
}

function renderNeedsAttentionItem(item) {
  const symbol = getStatusSymbol(item.statusSymbol || "attention");
  return `
    <button class="attention-card ${escapeAttr(item.source || "entry")}" type="button" data-dashboard-item="${escapeAttr(item.id)}" data-dashboard-source="${escapeAttr(item.source || "profile")}" data-dashboard-vehicle="${escapeAttr(item.vehicle)}" data-dashboard-category="${escapeAttr(item.category || "all")}">
      <span class="attention-icon" style="--status-color: ${symbol.color}" aria-hidden="true">${icon(symbol.icon)}</span>
      <span class="attention-main">
        <strong>${escapeHtml(item.title)}</strong>
        <small>${escapeHtml(item.vehicle)} / ${escapeHtml(item.typeLabel || item.sourceLabel || "Attention")}</small>
        ${item.scheduledDate ? renderScheduleMeta(item) : ""}
      </span>
      ${renderPriorityPill({ priority: item.priority || "Medium" })}
    </button>
  `;
}

function renderCommandPriorityItem(item) {
  const symbol = getStatusSymbol(item.statusSymbol);
  return `
    <button class="priority-card ${item.source}" type="button" data-dashboard-item="${escapeAttr(item.id)}" data-dashboard-source="${escapeAttr(item.source)}" data-dashboard-vehicle="${escapeAttr(item.vehicle)}" data-dashboard-category="${escapeAttr(item.category || "all")}">
      <span class="priority-card-icon" style="--status-color: ${symbol.color}" aria-hidden="true">${icon(symbol.icon)}</span>
      <span class="priority-card-main">
        <span class="priority-card-top">
          <strong>${escapeHtml(item.vehicle)}</strong>
          ${renderPriorityPill(item)}
        </span>
        <span class="priority-card-title">${escapeHtml(item.title)}</span>
        <span class="priority-card-meta">
          ${escapeHtml(item.typeLabel)} / ${escapeHtml(item.status || "Open")}
          ${item.scheduledDate ? ` / ${escapeHtml(formatSchedule(item))}` : ""}
        </span>
      </span>
    </button>
  `;
}

function renderExpenseLine(entry) {
  return `
    <button class="timeline-line expense-line" type="button" data-dashboard-item="${escapeAttr(entry.id)}" data-dashboard-source="entry" data-dashboard-vehicle="${escapeAttr(entry.vehicle)}" data-dashboard-category="${escapeAttr(entry.category)}">
      <span class="timeline-line-icon">${icon("receipt")}</span>
      <span>
        <strong>${escapeHtml(entry.title)}</strong>
        <small>${escapeHtml(entry.vehicle)} / ${escapeHtml(entry.expenseCategory || defaultExpenseCategoryForCategory(entry.category))} / ${escapeHtml(formatDate(entry.date))}</small>
      </span>
      <b>${money(entry.cost)}</b>
    </button>
  `;
}

function renderActivityLine(entry) {
  return `
    <button class="timeline-line activity-line" type="button" data-dashboard-item="${escapeAttr(entry.id)}" data-dashboard-source="entry" data-dashboard-vehicle="${escapeAttr(entry.vehicle)}" data-dashboard-category="${escapeAttr(entry.category)}">
      <span class="timeline-line-icon">${icon(categoryIcon(entry.category))}</span>
      <span>
        <strong>${escapeHtml(entry.title)}</strong>
        <small>${escapeHtml(entry.vehicle)} / ${escapeHtml(getCategoryLabel(entry.category))} / ${escapeHtml(formatDate(entry.date))}</small>
      </span>
      ${Number(entry.cost || 0) ? `<b>${money(entry.cost)}</b>` : ""}
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
  const taskItems = state.tasks.map((task) => {
    const priority = normalizePriority(task.priority || "Medium");
    return {
      id: task.id,
      source: "task",
      sourceLabel: "Tasks",
      vehicle: task.vehicle,
      category: "tasks",
      typeLabel: "Task",
      title: task.title,
      status: task.status || "Not Started",
      statusSymbol: task.status === "Done" ? "done" : priorityWeight(priority) >= 4 ? "urgent" : priorityWeight(priority) >= 3 ? "attention" : "testing",
      statusLabel: task.status || "Not Started",
      priority,
      flagged: priorityWeight(priority) >= 4,
      scheduledDate: task.dueDate || "",
      scheduledTime: "",
      durationHours: "",
      createdDate: task.createdAt || "",
      notes: task.notes || ""
    };
  });

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

  return [...taskItems, ...entryItems, ...diagnosticItems];
}

function getVehicleDashboardSummaries(items) {
  return state.vehicles.map((record) => {
    const profile = getProfile(record.name);
    const vehicleItems = items.filter((item) => item.vehicle === record.name);
    const activeItems = vehicleItems.filter((item) => isActiveItem(item));
    const attentionItems = activeItems.filter((item) => needsAttention(item));
    const activeTasks = vehicleItems.filter((item) => item.source === "task" && !isDoneItem(item)).sort(compareDashboardItems);
    const scheduledItems = activeItems.filter((item) => item.scheduledDate && !isDoneItem(item)).sort(compareSchedule);
    const maintenanceItems = activeItems.filter((item) => item.category === "maintenance" && item.scheduledDate && !isDoneItem(item)).sort(compareSchedule);
    const nextItem = activeTasks[0] || scheduledItems[0] || attentionItems.sort(compareDashboardItems)[0];
    const issueCount = activeItems.filter((item) => isIssueItem(item)).length;
    const missingInfo = missingProfileInfo(profile);
    const summary = getCostSummary(getVehicleEntries(record.name), profile);
    const status = getProjectStatus(profile.projectStatus);
    const vehicleSummary = {
      record,
      profile,
      identity: vehicleIdentityLabel(record.name),
      mileage: vehicleMileage(profile),
      summary,
      attentionCount: attentionItems.length,
      taskCount: activeTasks.length,
      issueCount,
      missingInfo,
      scheduledCount: scheduledItems.length,
      currentPriority: getVehicleCurrentPriority(activeItems),
      nextItem,
      nextService: maintenanceItems[0] || scheduledItems[0],
      projectStatus: status
    };

    return {
      ...vehicleSummary,
      health: getVehicleHealth(vehicleSummary)
    };
  });
}

function getVehicleHealth(vehicle) {
  if (vehicle.projectStatus.id === "Broken" || vehicle.projectStatus.id === "Needs Attention" || vehicle.issueCount > 0 || vehicle.attentionCount > 1) {
    return { label: "Needs Attention", icon: "alert", color: "#fb7185" };
  }

  if (vehicle.projectStatus.id === "Parked" || vehicle.missingInfo.length || vehicle.taskCount || vehicle.scheduledCount) {
    return { label: "Watch", icon: "clock", color: "#f59e0b" };
  }

  return { label: "Healthy", icon: "check", color: "#22c55e" };
}

function getVehicleCurrentPriority(items) {
  const priority = items
    .filter((item) => !isDoneItem(item))
    .sort((a, b) => priorityWeight(b.priority) - priorityWeight(a.priority))[0]?.priority;
  return normalizePriority(priority || "Low");
}

function getRecentExpenses() {
  return state.entries
    .filter((entry) => Number(entry.cost || 0) > 0)
    .sort((a, b) => {
      const dateDiff = String(b.date || "").localeCompare(String(a.date || ""));
      if (dateDiff) return dateDiff;
      return String(b.id || "").localeCompare(String(a.id || ""));
    });
}

function getRecentActivity() {
  return [...state.entries].sort((a, b) => {
    const dateDiff = String(b.date || "").localeCompare(String(a.date || ""));
    if (dateDiff) return dateDiff;
    return String(b.id || "").localeCompare(String(a.id || ""));
  });
}

function formatDashboardNextMeta(item) {
  const pieces = [item.typeLabel || item.sourceLabel || "Action"];
  if (item.status) pieces.push(item.status);
  if (item.scheduledDate) pieces.push(formatSchedule(item));
  return pieces.join(" / ");
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

function getProjectStatus(status) {
  return projectStatuses.find((item) => item.id === status) || projectStatuses[0];
}

function normalizePriority(priority) {
  if (priority === "Urgent") return "Critical";
  return priorityLevels.some((item) => item.id === priority) ? priority : "Medium";
}

function defaultExpenseCategoryForCategory(category) {
  if (category === "maintenance") return "Maintenance";
  if (category === "upgrades") return "Upgrade";
  if (category === "repairs" || category === "expense") return "Parts";
  return "Other";
}

function renderStatusSymbolOptions(selected = "attention") {
  return statusSymbols
    .map((symbol) => `<option value="${escapeAttr(symbol.id)}" ${symbol.id === selected ? "selected" : ""}>${escapeHtml(symbol.label)}</option>`)
    .join("");
}

function renderPriorityOptions(selected = "Medium") {
  const priority = normalizePriority(selected);
  return priorityLevels
    .map((item) => `<option value="${escapeAttr(item.id)}" ${item.id === priority ? "selected" : ""}>${escapeHtml(item.label)}</option>`)
    .join("");
}

function renderTaskStatusOptions(selected = "Not Started") {
  return taskStatuses
    .map((status) => `<option value="${escapeAttr(status)}" ${status === selected ? "selected" : ""}>${escapeHtml(status)}</option>`)
    .join("");
}

function renderProjectStatusOptions(selected = "Running") {
  return projectStatuses
    .map((status) => `<option value="${escapeAttr(status.id)}" ${status.id === selected ? "selected" : ""}>${escapeHtml(status.label)}</option>`)
    .join("");
}

function renderExpenseCategoryOptions(selected = "Other") {
  return expenseCategories
    .map((category) => `<option value="${escapeAttr(category)}" ${category === selected ? "selected" : ""}>${escapeHtml(category)}</option>`)
    .join("");
}

function renderVehicleOptions(selected = selectedVehicle) {
  return state.vehicles
    .map((record) => `<option value="${escapeAttr(record.name)}" ${record.name === selected ? "selected" : ""}>${escapeHtml(record.name)}</option>`)
    .join("");
}

function renderCategoryOptions(selected = "maintenance") {
  return categories
    .filter((category) => category.id !== "all" && category.id !== "costs")
    .map((category) => `<option value="${escapeAttr(category.id)}" ${category.id === selected ? "selected" : ""}>${escapeHtml(category.label)}</option>`)
    .join("");
}

function renderEntryStatusOptions(selected = "Logged") {
  return entryStatuses
    .map((status) => `<option value="${escapeAttr(status)}" ${status === selected ? "selected" : ""}>${escapeHtml(status)}</option>`)
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
  if (category === "expense") return "cost";
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
              <span>Status</span>
              <select name="projectStatus">
                ${renderProjectStatusOptions("Running")}
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

function renderEntryDetail() {
  const entry = getEntryById(selectedEntryId);

  if (!entry) {
    els.entryDetailView.innerHTML = `
      <div class="entry-detail-empty">
        <div class="empty-state">Choose an entry from the Logbook to open its full page.</div>
        <button class="save-button" type="button" data-entry-back>${icon("arrowLeft")} Back to logbook</button>
      </div>
    `;
    return;
  }

  const symbol = getStatusSymbol(entry.statusSymbol);
  const diagnostics = state.diagnostics.filter((item) => item.linkedRepairId === entry.id);
  const scheduleText = entry.scheduledDate ? formatSchedule(entry) : "No work time scheduled";

  els.entryDetailView.innerHTML = `
    <div class="entry-detail-shell">
      <section class="entry-detail-hero ${entry.category}">
        <div class="entry-detail-hero-main">
          <button class="ghost-button entry-back-button" type="button" data-entry-back>
            ${icon("arrowLeft")}
            Back to logbook
          </button>
          <div>
            <p class="label">${escapeHtml(selectedVehicle)} entry</p>
            <h3>${escapeHtml(entry.title)}</h3>
            <div class="status-row">
              ${renderStatusBadge(entry)}
              ${renderPriorityPill(entry)}
              ${entry.flagged ? `<span class="flag-pill">${icon("flag")} Flagged</span>` : ""}
            </div>
          </div>
        </div>

        <div class="entry-detail-stat-strip">
          <div>
            <span>Cost</span>
            <strong>${money(entry.cost)}</strong>
          </div>
          <div>
            <span>Date logged</span>
            <strong>${escapeHtml(formatDate(entry.date))}</strong>
          </div>
          <div>
            <span>Schedule</span>
            <strong>${escapeHtml(scheduleText)}</strong>
          </div>
        </div>
      </section>

      <div class="entry-detail-layout">
        <form class="entry-detail-form" id="entryDetailForm" data-entry-id="${escapeAttr(entry.id)}">
          <div class="form-title">
            <h3>Edit entry</h3>
            <span>${escapeHtml(getCategoryLabel(entry.category))}</span>
          </div>

          <label>
            <span>Category</span>
            <select name="category" required>
              ${renderCategoryOptions(entry.category)}
            </select>
          </label>

          <label>
            <span>Status</span>
            <select name="status">
              ${renderEntryStatusOptions(entry.status || "Logged")}
            </select>
          </label>

          <label class="field-wide">
            <span>Title</span>
            <input name="title" type="text" value="${escapeAttr(entry.title)}" required />
          </label>

          <label>
            <span>Cost</span>
            <input name="cost" type="number" min="0" step="0.01" value="${escapeAttr(Number(entry.cost || 0).toFixed(2))}" />
          </label>

          <label>
            <span>Expense category</span>
            <select name="expenseCategory">
              ${renderExpenseCategoryOptions(entry.expenseCategory || defaultExpenseCategoryForCategory(entry.category))}
            </select>
          </label>

          <label>
            <span>Date</span>
            <input name="date" type="date" value="${escapeAttr(entry.date || today())}" required />
          </label>

          <label>
            <span>Status symbol</span>
            <select name="statusSymbol">
              ${renderStatusSymbolOptions(entry.statusSymbol || defaultSymbolForCategory(entry.category))}
            </select>
          </label>

          <label>
            <span>Priority</span>
            <select name="priority">
              ${renderPriorityOptions(entry.priority || "Medium")}
            </select>
          </label>

          <label>
            <span>Schedule date</span>
            <input name="scheduledDate" type="date" value="${escapeAttr(entry.scheduledDate || "")}" />
          </label>

          <label>
            <span>Time</span>
            <input name="scheduledTime" type="time" value="${escapeAttr(entry.scheduledTime || "")}" />
          </label>

          <label>
            <span>Est. hours</span>
            <input name="durationHours" type="number" min="0" step="0.25" value="${escapeAttr(entry.durationHours || "")}" placeholder="1.5" />
          </label>

          <label>
            <span>Status label</span>
            <input name="statusLabel" type="text" value="${escapeAttr(entry.statusLabel || "")}" placeholder="Waiting on parts" />
          </label>

          <label class="check-field field-wide">
            <input name="flagged" type="checkbox" ${entry.flagged ? "checked" : ""} />
            <span>Flag this entry on the dashboard</span>
          </label>

          <label class="field-wide">
            <span>Notes</span>
            <textarea name="notes" rows="6" placeholder="Add details, part numbers, test results, reminders...">${escapeHtml(entry.notes || "")}</textarea>
          </label>

          <div class="entry-detail-actions field-wide">
            <button class="save-button" type="submit">${icon("save")} Save changes</button>
            <button class="danger-button" type="button" data-delete-entry-detail="${escapeAttr(entry.id)}">${icon("trash")} Delete entry</button>
          </div>
        </form>

        <aside class="entry-detail-aside">
          <div class="entry-summary-card">
            <p class="label">Entry snapshot</p>
            <div class="entry-summary-symbol" style="--status-color: ${symbol.color}">
              <span>${icon(symbol.icon)}</span>
              <strong>${escapeHtml(symbol.label)}</strong>
            </div>
            <div class="entry-summary-rows">
              <div><span>Vehicle</span><strong>${escapeHtml(entry.vehicle)}</strong></div>
              <div><span>Category</span><strong>${escapeHtml(getCategoryLabel(entry.category))}</strong></div>
              <div><span>Expense type</span><strong>${escapeHtml(entry.expenseCategory || defaultExpenseCategoryForCategory(entry.category))}</strong></div>
              <div><span>Priority</span><strong>${escapeHtml(entry.priority || "Medium")}</strong></div>
              <div><span>Dashboard</span><strong>${entry.flagged ? "Flagged" : "Not flagged"}</strong></div>
            </div>
          </div>

          <div class="entry-summary-card">
            <p class="label">Linked diagnostics</p>
            ${
              diagnostics.length
                ? diagnostics.map((diagnostic) => `
                    <div class="linked-diagnostic">
                      <strong>${escapeHtml(diagnostic.title)}</strong>
                      <span>${escapeHtml(diagnostic.status || "Open")} / ${escapeHtml(diagnostic.system || "Diagnostic")}</span>
                    </div>
                  `).join("")
                : `<div class="note-line">No diagnostic sessions are linked to this entry yet.</div>`
            }
          </div>
        </aside>
      </div>
    </div>
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
  if (field.type === "select") {
    return `
      <label class="${wideClass.trim()}">
        <span>${field.label}</span>
        <select name="${field.key}">
          ${field.options
            .map((option) => `<option value="${escapeAttr(option.value)}" ${option.value === value ? "selected" : ""}>${escapeHtml(option.label)}</option>`)
            .join("")}
        </select>
      </label>
    `;
  }

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
  const statusField = {
    key: "projectStatus",
    label: "Status",
    type: "select",
    options: projectStatuses.map((status) => ({ value: status.id, label: status.label }))
  };

  if (profileType === "Boat") {
    return [
      { key: "profileType", label: "Type" },
      statusField,
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
      statusField,
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
      statusField,
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
    statusField,
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

  els.entryList.innerHTML = `<div class="history-timeline">${entries
    .map((entry) => `
      <article class="entry-card timeline-entry-card ${entry.category}" role="button" tabindex="0" data-open-entry="${escapeAttr(entry.id)}" aria-label="Open ${escapeAttr(entry.title)} entry">
        <div class="timeline-date-node" aria-hidden="true">
          <span>${escapeHtml(formatDateShort(entry.date))}</span>
          <b>${icon(categoryIcon(entry.category))}</b>
        </div>
        <div class="entry-main">
          <div class="entry-topline">
            <span class="entry-title">${escapeHtml(entry.title)}</span>
            <span class="entry-chip">${getCategoryLabel(entry.category)}</span>
          </div>
          <div class="entry-meta-row">
            <span>${escapeHtml(vehicleMileage(getProfile(entry.vehicle)) || "Mileage missing")}</span>
            <span>${escapeHtml(entry.status || "Logged")}</span>
            ${entry.scheduledDate ? `<span>${escapeHtml(formatSchedule(entry))}</span>` : ""}
          </div>
          ${entry.notes ? `<p class="entry-note">${escapeHtml(entry.notes)}</p>` : ""}
          ${renderEntryStatusLine(entry)}
          ${Number(entry.cost || 0) ? `<div class="expense-chip">${escapeHtml(entry.expenseCategory || defaultExpenseCategoryForCategory(entry.category))}</div>` : ""}
        </div>
        <div class="entry-cost">${money(entry.cost)}</div>
        <button class="icon-button" type="button" data-delete="${escapeAttr(entry.id)}" aria-label="Delete ${escapeAttr(entry.title)}">
          ${icon("trash")}
        </button>
      </article>
    `)
    .join("")}</div>`;
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

  const rows = ["maintenance", "repairs", "expense", "upgrades", "notes"].map((category) => {
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

function vehicleIdentityLabel(vehicle) {
  const record = getVehicleRecord(vehicle);
  return vehicleDescriptor(vehicle) || record.type || "Vehicle";
}

function vehicleMileage(profile) {
  return String(profile.mileage || profile.mileageHours || "").trim();
}

function missingProfileInfo(profile) {
  const missing = [];
  if (!vehicleMileage(profile)) missing.push("mileage");
  if (!profile.year || !profile.make || !profile.model) missing.push("year/make/model");
  return missing;
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

function getEntryById(entryId) {
  return state.entries.find((entry) => entry.id === entryId);
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
  const maintenanceCost = sumCost(entries.filter((entry) => entry.category === "maintenance"));
  const pricePaid = moneyNumber(profile.pricePaid);
  const sellValue = moneyNumber(profile.sellValue);
  const totalInvested = pricePaid + loggedTotal;

  return {
    loggedTotal,
    maintenanceCost,
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

function formatDateShort(date) {
  if (!date) return "No date";
  const parsed = new Date(`${date}T12:00:00`);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric"
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
    arrowLeft: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>',
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
