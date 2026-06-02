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
  { id: "repairBoard", label: "Repair Board", icon: "wrench" },
  { id: "parts", label: "Parts", icon: "tag" },
  { id: "inventory", label: "Inventory", icon: "box" },
  { id: "inspections", label: "Inspections", icon: "check" },
  { id: "restock", label: "Restock", icon: "cart" },
  { id: "expenses", label: "Expenses", icon: "receipt" },
  { id: "scheduler", label: "Scheduler", icon: "calendar" },
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
const repairJobStatuses = ["Idea / Concern", "Diagnosing", "Parts Needed", "Parts Ordered", "Ready to Repair", "In Progress", "Completed"];
const partStatuses = ["Researching", "Needed", "Ordered", "Received", "Installed"];
const inventoryCategories = [
  "Oils & Fluids",
  "Grease & Lubricants",
  "Filters",
  "Hardware",
  "Gloves & Shop Supplies",
  "Cleaners",
  "Tools",
  "Spare Parts",
  "Electrical Supplies",
  "Miscellaneous"
];
const inspectionTemplates = [
  "Pre-Purchase Inspection",
  "Oil Change Inspection",
  "Brake Inspection",
  "Suspension Inspection",
  "Electrical Diagnosis",
  "No-Start Diagnosis",
  "AC Diagnosis",
  "Road Trip Inspection"
];
const inspectionResults = ["Pass", "Monitor", "Fail"];
const maintenanceIntervalModes = ["Mileage", "Date", "Both"];
const projectStatuses = [
  { id: "Running", label: "Running", icon: "check", color: "#16a34a" },
  { id: "Needs Attention", label: "Needs Attention", icon: "alert", color: "#f97316" },
  { id: "Broken", label: "Broken", icon: "warning", color: "#dc2626" },
  { id: "Parked", label: "Parked", icon: "clock", color: "#64748b" },
  { id: "Ready", label: "Ready", icon: "check", color: "#22c55e" }
];
const expenseCategories = ["Parts", "Labor", "Maintenance", "Upgrade", "Tools", "Fluids", "Repairs", "Vehicle Purchase", "Registration", "Insurance", "Other"];
const notificationPrepTypes = ["Low Inventory Alerts", "Maintenance Due Alerts", "Scheduled Repair Reminders", "Parts Arrival Reminders"];

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

const seedRepairJobs = [
  {
    id: "job-yukon-electrical",
    vehicle: "Yukon",
    title: "Yukon Electrical Issue",
    priority: "Critical",
    status: "Diagnosing",
    scheduledDate: "2026-06-02",
    scheduledTime: "18:00",
    estimatedHours: "2",
    estimatedCost: 125,
    partsStatus: "Needed",
    symptoms: "Dash came back when OBD scanner plugged in.",
    testingPerformed: "Confirm battery voltage, DLC power and grounds, body grounds, and cluster feeds.",
    results: "Scanner wake-up points toward power, ground, or communication circuit behavior.",
    suspectedCauses: "Weak ground, DLC feed issue, cluster feed, or module communication problem.",
    finalDiagnosis: "",
    stepsPerformed: "",
    notes: "Keep this open while testing so notes stay attached to the job.",
    photos: "",
    videoPlaceholder: "",
    partsCost: 38.44,
    laborValue: 0,
    resolution: "",
    lessonsLearned: "",
    finalNotes: "",
    inventoryNeeds: [
      { inventoryId: "inv-electrical-connectors", quantity: 1 },
      { inventoryId: "inv-shop-gloves", quantity: 1 }
    ],
    inventoryDeducted: false,
    createdAt: "2026-05-30",
    completedAt: ""
  },
  {
    id: "job-boat-electronics",
    vehicle: "Boat",
    title: "Boat Electronics Install",
    priority: "High",
    status: "Parts Ordered",
    scheduledDate: "",
    scheduledTime: "",
    estimatedHours: "4",
    estimatedCost: 642.11,
    partsStatus: "Ordered",
    symptoms: "Electronics refresh planned.",
    testingPerformed: "Bench test before install.",
    results: "",
    suspectedCauses: "",
    finalDiagnosis: "",
    stepsPerformed: "",
    notes: "Verify power, screen, wiring path, and waterproof connections before mounting.",
    photos: "",
    videoPlaceholder: "",
    partsCost: 642.11,
    laborValue: 0,
    resolution: "",
    lessonsLearned: "",
    finalNotes: "",
    inventoryNeeds: [],
    inventoryDeducted: false,
    createdAt: "2026-05-12",
    completedAt: ""
  }
];

const seedParts = [
  {
    id: "part-yukon-ground-straps",
    vehicle: "Yukon",
    name: "Ground straps",
    partNumber: "",
    vendor: "Local parts store",
    price: 38.44,
    link: "",
    quantity: 1,
    status: "Needed",
    notes: "For electrical diagnosis and ground refresh."
  },
  {
    id: "part-boat-electronics-kit",
    vehicle: "Boat",
    name: "Electronics wiring kit",
    partNumber: "",
    vendor: "Marine supplier",
    price: 642.11,
    link: "",
    quantity: 1,
    status: "Ordered",
    notes: "Bench test before install."
  }
];

const seedInventory = [
  {
    id: "inv-5w30-oil",
    name: "5W-30 engine oil",
    category: "Oils & Fluids",
    quantity: 2,
    unit: "qt",
    minimumStock: 5,
    storageLocation: "Fluid shelf",
    vehicleCompatibility: "Yukon",
    preferredVendor: "Auto parts store",
    restockLink: "",
    lastPurchasedDate: "2026-05-04",
    cost: 42,
    notes: "Keep at least one oil change worth on hand."
  },
  {
    id: "inv-shop-gloves",
    name: "Nitrile gloves",
    category: "Gloves & Shop Supplies",
    quantity: 1,
    unit: "box",
    minimumStock: 2,
    storageLocation: "Bench drawer",
    vehicleCompatibility: "All",
    preferredVendor: "Amazon",
    restockLink: "",
    lastPurchasedDate: "",
    cost: 18,
    notes: "Low stock alert example."
  },
  {
    id: "inv-electrical-connectors",
    name: "Electrical connector assortment",
    category: "Electrical Supplies",
    quantity: 0,
    unit: "kit",
    minimumStock: 1,
    storageLocation: "Electrical bin",
    vehicleCompatibility: "All",
    preferredVendor: "Amazon",
    restockLink: "",
    lastPurchasedDate: "",
    cost: 24,
    notes: "Useful for diagnosis and repairs."
  },
  {
    id: "inv-oil-filter",
    name: "Oil filter",
    category: "Filters",
    quantity: 1,
    unit: "ea",
    minimumStock: 1,
    storageLocation: "Filter shelf",
    vehicleCompatibility: "Yukon",
    preferredVendor: "RockAuto",
    restockLink: "",
    lastPurchasedDate: "2026-05-04",
    cost: 12,
    notes: ""
  }
];

const seedInspections = [
  {
    id: "inspection-yukon-electrical",
    vehicle: "Yukon",
    template: "Electrical Diagnosis",
    date: "2026-05-30",
    summary: "Dash returned when OBD scanner was plugged in.",
    photos: "",
    items: [
      { label: "Battery voltage", result: "Monitor", notes: "Confirm resting and cranking voltage." },
      { label: "DLC power and ground", result: "Monitor", notes: "Verify before deeper diagnosis." },
      { label: "Body grounds", result: "Monitor", notes: "Inspect and voltage-drop test." }
    ]
  }
];

const seedMaintenanceSchedules = [
  {
    id: "schedule-yukon-oil",
    vehicle: "Yukon",
    title: "Oil Change",
    intervalMode: "Both",
    intervalMileage: 5000,
    intervalMonths: 6,
    lastDoneMileage: 154230,
    lastDoneDate: "2026-05-04",
    nextDueMileage: 159230,
    nextDueDate: "2026-11-04",
    status: "Due Soon",
    notes: "Track by mileage and date."
  },
  {
    id: "schedule-yukon-transmission",
    vehicle: "Yukon",
    title: "Transmission Service",
    intervalMode: "Both",
    intervalMileage: 30000,
    intervalMonths: 36,
    lastDoneMileage: "",
    lastDoneDate: "2026-04-18",
    nextDueMileage: "",
    nextDueDate: "2029-04-18",
    status: "Scheduled",
    notes: "Pan service was logged."
  }
];

const defaultNotificationPrep = notificationPrepTypes.map((type) => ({
  type,
  enabled: false,
  visualOnly: true
}));

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
let detailModalOpen = false;
let detailModalType = "";
let detailModalId = "";

const els = {
  vehicleNav: document.querySelector("#vehicleNav"),
  workspaceTabs: document.querySelector("#workspaceTabs"),
  dashboardView: document.querySelector("#dashboardView"),
  filterBar: document.querySelector("#filterBar"),
  garageSummary: document.querySelector("#garageSummary"),
  logbookView: document.querySelector("#logbookView"),
  entryDetailView: document.querySelector("#entryDetailView"),
  repairBoardView: document.querySelector("#repairBoardView"),
  partsView: document.querySelector("#partsView"),
  inventoryView: document.querySelector("#inventoryView"),
  inspectionsView: document.querySelector("#inspectionsView"),
  restockView: document.querySelector("#restockView"),
  expensesView: document.querySelector("#expensesView"),
  schedulerView: document.querySelector("#schedulerView"),
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
  detailModal: document.querySelector("#detailModal"),
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
  state.repairJobs = normalizeRepairJobs(state.repairJobs, state.vehicles);
  state.parts = normalizeParts(state.parts, state.vehicles);
  state.inventory = normalizeInventory(state.inventory);
  state.inspections = normalizeInspections(state.inspections, state.vehicles);
  state.maintenanceSchedules = normalizeMaintenanceSchedules(state.maintenanceSchedules, state.vehicles);
  state.notificationPrep = normalizeNotificationPrep(state.notificationPrep);
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
      quickAddMode = quickAdd.dataset.openQuickAdd || "";
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
      if (item.dataset.dashboardSource === "repairJob") {
        openDetailModal("repairJob", item.dataset.dashboardItem);
        return;
      } else if (item.dataset.dashboardSource === "part") {
        activeView = "parts";
      } else if (item.dataset.dashboardSource === "inventory") {
        activeView = "inventory";
      } else if (item.dataset.dashboardSource === "maintenanceSchedule") {
        activeView = "scheduler";
      } else if (item.dataset.dashboardSource === "inspection") {
        activeView = "inspections";
      } else if (item.dataset.dashboardSource === "task") {
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

  els.repairBoardView.addEventListener("click", (event) => {
    const quickAdd = event.target.closest("[data-open-quick-add]");
    if (quickAdd) {
      quickAddOpen = true;
      quickAddMode = quickAdd.dataset.openQuickAdd || "repairJob";
      renderQuickAddModal();
      return;
    }

    const move = event.target.closest("[data-move-job]");
    if (move) {
      updateRepairJobStatus(move.dataset.moveJob, move.dataset.status);
      return;
    }

    const card = event.target.closest("[data-open-job]");
    if (!card) return;
    openDetailModal("repairJob", card.dataset.openJob);
  });

  els.repairBoardView.addEventListener("dragstart", (event) => {
    const card = event.target.closest("[data-open-job]");
    if (!card) return;
    event.dataTransfer.setData("text/plain", card.dataset.openJob);
    event.dataTransfer.effectAllowed = "move";
  });

  els.repairBoardView.addEventListener("dragover", (event) => {
    if (!event.target.closest("[data-job-status-column]")) return;
    event.preventDefault();
  });

  els.repairBoardView.addEventListener("drop", (event) => {
    const column = event.target.closest("[data-job-status-column]");
    if (!column) return;
    event.preventDefault();
    updateRepairJobStatus(event.dataTransfer.getData("text/plain"), column.dataset.jobStatusColumn);
  });

  els.partsView.addEventListener("click", (event) => {
    const quickAdd = event.target.closest("[data-open-quick-add]");
    if (quickAdd) {
      quickAddOpen = true;
      quickAddMode = "part";
      renderQuickAddModal();
      return;
    }

    const statusButton = event.target.closest("[data-part-status]");
    if (!statusButton) return;
    updatePartStatus(statusButton.dataset.partStatus, statusButton.dataset.status);
  });

  els.inventoryView.addEventListener("click", (event) => {
    const quickAdd = event.target.closest("[data-open-quick-add]");
    if (quickAdd) {
      quickAddOpen = true;
      quickAddMode = "inventory";
      renderQuickAddModal();
    }
  });

  els.inspectionsView.addEventListener("click", (event) => {
    const quickAdd = event.target.closest("[data-open-quick-add]");
    if (quickAdd) {
      quickAddOpen = true;
      quickAddMode = "inspection";
      renderQuickAddModal();
    }
  });

  els.restockView.addEventListener("click", (event) => {
    const purchased = event.target.closest("[data-mark-purchased]");
    if (!purchased) return;
    markInventoryPurchased(purchased.dataset.markPurchased);
  });

  els.expensesView.addEventListener("click", (event) => {
    const quickAdd = event.target.closest("[data-open-quick-add]");
    if (quickAdd) {
      quickAddOpen = true;
      quickAddMode = "expense";
      renderQuickAddModal();
      return;
    }

    const entry = event.target.closest("[data-open-entry]");
    if (!entry) return;
    openEntryDetail(entry.dataset.openEntry);
  });

  els.schedulerView.addEventListener("click", (event) => {
    const quickAdd = event.target.closest("[data-open-quick-add]");
    if (quickAdd) {
      quickAddOpen = true;
      quickAddMode = "schedule";
      renderQuickAddModal();
      return;
    }

    const done = event.target.closest("[data-complete-schedule]");
    if (!done) return;
    completeMaintenanceSchedule(done.dataset.completeSchedule);
  });

  els.detailModal.addEventListener("click", (event) => {
    if (event.target.matches("[data-detail-backdrop]") || event.target.closest("[data-close-detail]")) {
      closeDetailModal();
      return;
    }

    const addNeed = event.target.closest("[data-add-job-inventory]");
    if (addNeed) {
      addInventoryNeedToActiveJob();
      return;
    }

    const removeNeed = event.target.closest("[data-remove-job-inventory]");
    if (!removeNeed) return;
    removeInventoryNeedFromActiveJob(removeNeed.dataset.removeJobInventory);
  });

  els.detailModal.addEventListener("submit", (event) => {
    if (!event.target.matches("#repairJobDetailForm")) return;
    event.preventDefault();
    saveRepairJobDetail(event.target);
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
        repairJobs: normalizeRepairJobs(saved.repairJobs, vehicles),
        parts: normalizeParts(saved.parts, vehicles),
        inventory: normalizeInventory(saved.inventory),
        inspections: normalizeInspections(saved.inspections, vehicles),
        maintenanceSchedules: normalizeMaintenanceSchedules(saved.maintenanceSchedules, vehicles),
        notificationPrep: normalizeNotificationPrep(saved.notificationPrep),
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
    repairJobs: normalizeRepairJobs(seedRepairJobs),
    parts: normalizeParts(seedParts),
    inventory: normalizeInventory(seedInventory),
    inspections: normalizeInspections(seedInspections),
    maintenanceSchedules: normalizeMaintenanceSchedules(seedMaintenanceSchedules),
    notificationPrep: normalizeNotificationPrep(defaultNotificationPrep),
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

function normalizeRepairJobs(savedJobs, vehicleRecords = defaultVehicles) {
  const vehicleNames = getVehicleNames(normalizeVehicles(vehicleRecords));
  const jobs = Array.isArray(savedJobs) ? savedJobs : seedRepairJobs;
  return jobs
    .filter((job) => vehicleNames.includes(job.vehicle))
    .map((job) => normalizeRepairJob(job));
}

function normalizeRepairJob(job) {
  const status = repairJobStatuses.includes(job.status) ? job.status : "Idea / Concern";
  return {
    id: job.id || `job-${Date.now()}`,
    vehicle: job.vehicle || "Yukon",
    title: String(job.title || "").trim(),
    priority: normalizePriority(job.priority || "High"),
    status,
    scheduledDate: job.scheduledDate || "",
    scheduledTime: job.scheduledTime || "",
    estimatedHours: String(job.estimatedHours || ""),
    estimatedCost: moneyNumber(job.estimatedCost),
    partsStatus: partStatuses.includes(job.partsStatus) ? job.partsStatus : inferPartsStatusFromJobStatus(status),
    symptoms: String(job.symptoms || "").trim(),
    testingPerformed: String(job.testingPerformed || "").trim(),
    results: String(job.results || "").trim(),
    suspectedCauses: String(job.suspectedCauses || "").trim(),
    finalDiagnosis: String(job.finalDiagnosis || "").trim(),
    stepsPerformed: String(job.stepsPerformed || "").trim(),
    notes: String(job.notes || "").trim(),
    photos: String(job.photos || "").trim(),
    videoPlaceholder: String(job.videoPlaceholder || "").trim(),
    partsCost: moneyNumber(job.partsCost),
    laborValue: moneyNumber(job.laborValue),
    resolution: String(job.resolution || "").trim(),
    lessonsLearned: String(job.lessonsLearned || "").trim(),
    finalNotes: String(job.finalNotes || "").trim(),
    inventoryNeeds: normalizeInventoryNeeds(job.inventoryNeeds),
    inventoryDeducted: Boolean(job.inventoryDeducted),
    createdAt: job.createdAt || today(),
    completedAt: status === "Completed" ? job.completedAt || today() : job.completedAt || ""
  };
}

function normalizeInventoryNeeds(needs) {
  if (!Array.isArray(needs)) return [];
  return needs
    .map((need) => ({
      inventoryId: String(need.inventoryId || "").trim(),
      quantity: Math.max(0, Number.parseFloat(need.quantity || "0"))
    }))
    .filter((need) => need.inventoryId && need.quantity > 0);
}

function normalizeParts(savedParts, vehicleRecords = defaultVehicles) {
  const vehicleNames = getVehicleNames(normalizeVehicles(vehicleRecords));
  const parts = Array.isArray(savedParts) ? savedParts : seedParts;
  return parts
    .filter((part) => !part.vehicle || vehicleNames.includes(part.vehicle))
    .map((part) => ({
      id: part.id || `part-${Date.now()}`,
      vehicle: part.vehicle || "Yukon",
      name: String(part.name || part.partName || "").trim(),
      partNumber: String(part.partNumber || "").trim(),
      vendor: String(part.vendor || "").trim(),
      price: moneyNumber(part.price),
      link: String(part.link || "").trim(),
      quantity: Math.max(0, Number.parseFloat(part.quantity || "1")),
      status: partStatuses.includes(part.status) ? part.status : "Researching",
      notes: String(part.notes || "").trim()
    }));
}

function normalizeInventory(savedInventory) {
  const inventory = Array.isArray(savedInventory) ? savedInventory : seedInventory;
  return inventory.map((item) => ({
    id: item.id || `inv-${Date.now()}`,
    name: String(item.name || item.itemName || "").trim(),
    category: inventoryCategories.includes(item.category) ? item.category : "Miscellaneous",
    quantity: Math.max(0, Number.parseFloat(item.quantity || "0")),
    unit: String(item.unit || "ea").trim(),
    minimumStock: Math.max(0, Number.parseFloat(item.minimumStock || item.minimumStockLevel || "0")),
    storageLocation: String(item.storageLocation || "").trim(),
    vehicleCompatibility: String(item.vehicleCompatibility || "").trim(),
    preferredVendor: String(item.preferredVendor || "").trim(),
    restockLink: String(item.restockLink || "").trim(),
    lastPurchasedDate: item.lastPurchasedDate || "",
    cost: moneyNumber(item.cost),
    notes: String(item.notes || "").trim()
  }));
}

function normalizeInspections(savedInspections, vehicleRecords = defaultVehicles) {
  const vehicleNames = getVehicleNames(normalizeVehicles(vehicleRecords));
  const inspections = Array.isArray(savedInspections) ? savedInspections : seedInspections;
  return inspections
    .filter((inspection) => vehicleNames.includes(inspection.vehicle))
    .map((inspection) => ({
      id: inspection.id || `inspection-${Date.now()}`,
      vehicle: inspection.vehicle || "Yukon",
      template: inspectionTemplates.includes(inspection.template) ? inspection.template : inspectionTemplates[0],
      date: inspection.date || today(),
      summary: String(inspection.summary || "").trim(),
      photos: String(inspection.photos || "").trim(),
      items: normalizeInspectionItems(inspection.items, inspection.template)
    }));
}

function normalizeInspectionItems(items, template = inspectionTemplates[0]) {
  const source = Array.isArray(items) && items.length ? items : defaultInspectionItems(template);
  return source.map((item) => ({
    label: String(item.label || "").trim(),
    result: inspectionResults.includes(item.result) ? item.result : "Monitor",
    notes: String(item.notes || "").trim()
  }));
}

function normalizeMaintenanceSchedules(savedSchedules, vehicleRecords = defaultVehicles) {
  const vehicleNames = getVehicleNames(normalizeVehicles(vehicleRecords));
  const schedules = Array.isArray(savedSchedules) ? savedSchedules : seedMaintenanceSchedules;
  return schedules
    .filter((schedule) => vehicleNames.includes(schedule.vehicle))
    .map((schedule) => normalizeMaintenanceSchedule(schedule));
}

function normalizeMaintenanceSchedule(schedule) {
  return {
    id: schedule.id || `schedule-${Date.now()}`,
    vehicle: schedule.vehicle || "Yukon",
    title: String(schedule.title || "").trim(),
    intervalMode: maintenanceIntervalModes.includes(schedule.intervalMode) ? schedule.intervalMode : "Date",
    intervalMileage: Number.parseFloat(schedule.intervalMileage || "0") || "",
    intervalMonths: Number.parseFloat(schedule.intervalMonths || "0") || "",
    lastDoneMileage: Number.parseFloat(schedule.lastDoneMileage || "0") || "",
    lastDoneDate: schedule.lastDoneDate || "",
    nextDueMileage: Number.parseFloat(schedule.nextDueMileage || "0") || "",
    nextDueDate: schedule.nextDueDate || "",
    status: schedule.status || "Scheduled",
    notes: String(schedule.notes || "").trim()
  };
}

function normalizeNotificationPrep(savedPrep) {
  const source = Array.isArray(savedPrep) ? savedPrep : defaultNotificationPrep;
  const byType = new Map(source.map((item) => [item.type, item]));
  return notificationPrepTypes.map((type) => ({
    type,
    enabled: Boolean(byType.get(type)?.enabled),
    visualOnly: true
  }));
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

  if (mode === "repairJob") {
    const title = String(formData.get("title") || "").trim();
    if (!title) return;
    state.repairJobs = [
      normalizeRepairJob({
        id: `job-${Date.now()}`,
        vehicle,
        title,
        priority: String(formData.get("priority") || "High"),
        status: String(formData.get("status") || "Idea / Concern"),
        scheduledDate: String(formData.get("scheduledDate") || ""),
        scheduledTime: String(formData.get("scheduledTime") || ""),
        estimatedHours: String(formData.get("estimatedHours") || ""),
        estimatedCost: Number.parseFloat(formData.get("estimatedCost") || "0"),
        partsStatus: String(formData.get("partsStatus") || "Needed"),
        symptoms: String(formData.get("symptoms") || "").trim(),
        notes: String(formData.get("notes") || "").trim(),
        createdAt: today()
      }),
      ...state.repairJobs
    ];
    activeView = "repairBoard";
  }

  if (mode === "part") {
    const name = String(formData.get("name") || "").trim();
    if (!name) return;
    state.parts = [
      normalizeParts([
        {
          id: `part-${Date.now()}`,
          vehicle,
          name,
          partNumber: String(formData.get("partNumber") || "").trim(),
          vendor: String(formData.get("vendor") || "").trim(),
          price: Number.parseFloat(formData.get("price") || "0"),
          link: String(formData.get("link") || "").trim(),
          quantity: Number.parseFloat(formData.get("quantity") || "1"),
          status: String(formData.get("status") || "Researching"),
          notes: String(formData.get("notes") || "").trim()
        }
      ], state.vehicles)[0],
      ...state.parts
    ];
    activeView = "parts";
  }

  if (mode === "inventory") {
    const name = String(formData.get("name") || "").trim();
    if (!name) return;
    state.inventory = [
      normalizeInventory([
        {
          id: `inv-${Date.now()}`,
          name,
          category: String(formData.get("category") || "Miscellaneous"),
          quantity: Number.parseFloat(formData.get("quantity") || "0"),
          unit: String(formData.get("unit") || "ea").trim(),
          minimumStock: Number.parseFloat(formData.get("minimumStock") || "0"),
          storageLocation: String(formData.get("storageLocation") || "").trim(),
          vehicleCompatibility: String(formData.get("vehicleCompatibility") || "").trim(),
          preferredVendor: String(formData.get("preferredVendor") || "").trim(),
          restockLink: String(formData.get("restockLink") || "").trim(),
          lastPurchasedDate: String(formData.get("lastPurchasedDate") || ""),
          cost: Number.parseFloat(formData.get("cost") || "0"),
          notes: String(formData.get("notes") || "").trim()
        }
      ])[0],
      ...state.inventory
    ];
    activeView = "inventory";
  }

  if (mode === "inspection") {
    const template = String(formData.get("template") || inspectionTemplates[0]);
    state.inspections = [
      normalizeInspections([
        {
          id: `inspection-${Date.now()}`,
          vehicle,
          template,
          date: String(formData.get("date") || today()),
          summary: String(formData.get("summary") || "").trim(),
          photos: String(formData.get("photos") || "").trim(),
          items: defaultInspectionItems(template)
        }
      ], state.vehicles)[0],
      ...state.inspections
    ];
    activeView = "inspections";
  }

  if (mode === "schedule") {
    const title = String(formData.get("title") || "").trim();
    if (!title) return;
    state.maintenanceSchedules = [
      normalizeMaintenanceSchedule({
        id: `schedule-${Date.now()}`,
        vehicle,
        title,
        intervalMode: String(formData.get("intervalMode") || "Date"),
        intervalMileage: formData.get("intervalMileage"),
        intervalMonths: formData.get("intervalMonths"),
        lastDoneMileage: formData.get("lastDoneMileage"),
        lastDoneDate: String(formData.get("lastDoneDate") || ""),
        nextDueMileage: formData.get("nextDueMileage"),
        nextDueDate: String(formData.get("nextDueDate") || ""),
        status: "Scheduled",
        notes: String(formData.get("notes") || "").trim()
      }),
      ...state.maintenanceSchedules
    ];
    activeView = "scheduler";
  }

  selectedVehicle = vehicle;
  state.activeView = activeView;
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
    { id: "repairJob", label: "Add Repair Job", meta: "Kanban status, diagnosis, cost", iconName: "wrench" },
    { id: "inventory", label: "Add Inventory Item", meta: "Stock, location, vendor", iconName: "box" },
    { id: "part", label: "Add Part", meta: "Part number, vendor, search", iconName: "tag" },
    { id: "task", label: "Add Task", meta: "Priority, status, due date", iconName: "list" },
    { id: "expense", label: "Add Expense", meta: "Parts, labor, maintenance", iconName: "receipt" },
    { id: "inspection", label: "Add Inspection", meta: "Template, pass, monitor, fail", iconName: "check" },
    { id: "schedule", label: "Add Service Schedule", meta: "Mileage and date intervals", iconName: "calendar" },
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
  if (mode === "repairJob") {
    return `
      <form class="quick-add-form" data-quick-add-form="repairJob" autocomplete="off">
        ${renderQuickAddVehicleField()}
        <label class="field-wide">
          <span>Job title</span>
          <input name="title" type="text" placeholder="No-start diagnosis" required />
        </label>
        <label>
          <span>Priority</span>
          <select name="priority">${renderPriorityOptions("High")}</select>
        </label>
        <label>
          <span>Board status</span>
          <select name="status">${renderRepairJobStatusOptions("Idea / Concern")}</select>
        </label>
        <label>
          <span>Parts status</span>
          <select name="partsStatus">${renderPartStatusOptions("Needed")}</select>
        </label>
        <label>
          <span>Estimated cost</span>
          <input name="estimatedCost" type="number" min="0" step="0.01" placeholder="125.00" />
        </label>
        <label>
          <span>Scheduled date</span>
          <input name="scheduledDate" type="date" />
        </label>
        <label>
          <span>Scheduled time</span>
          <input name="scheduledTime" type="time" />
        </label>
        <label>
          <span>Estimated hours</span>
          <input name="estimatedHours" type="number" min="0" step="0.25" placeholder="2" />
        </label>
        <label class="field-wide">
          <span>Symptoms</span>
          <textarea name="symptoms" rows="3" placeholder="What is the vehicle doing?"></textarea>
        </label>
        <label class="field-wide">
          <span>Notes</span>
          <textarea name="notes" rows="3" placeholder="Testing order, tools needed, parts to check..."></textarea>
        </label>
        ${renderQuickAddActions()}
      </form>
    `;
  }

  if (mode === "part") {
    return `
      <form class="quick-add-form" data-quick-add-form="part" autocomplete="off">
        ${renderQuickAddVehicleField()}
        <label class="field-wide">
          <span>Part name</span>
          <input name="name" type="text" placeholder="Brake pads" required />
        </label>
        <label>
          <span>Part number</span>
          <input name="partNumber" type="text" placeholder="Optional" />
        </label>
        <label>
          <span>Status</span>
          <select name="status">${renderPartStatusOptions("Researching")}</select>
        </label>
        <label>
          <span>Vendor</span>
          <input name="vendor" type="text" placeholder="RockAuto" />
        </label>
        <label>
          <span>Price</span>
          <input name="price" type="number" min="0" step="0.01" placeholder="0.00" />
        </label>
        <label>
          <span>Quantity</span>
          <input name="quantity" type="number" min="0" step="1" value="1" />
        </label>
        <label class="field-wide">
          <span>Link</span>
          <input name="link" type="url" placeholder="https://..." />
        </label>
        <label class="field-wide">
          <span>Notes</span>
          <textarea name="notes" rows="3" placeholder="Fitment notes, alternatives, vendor notes..."></textarea>
        </label>
        ${renderQuickAddActions()}
      </form>
    `;
  }

  if (mode === "inventory") {
    return `
      <form class="quick-add-form" data-quick-add-form="inventory" autocomplete="off">
        <label class="field-wide">
          <span>Item name</span>
          <input name="name" type="text" placeholder="5W-40 oil" required />
        </label>
        <label>
          <span>Category</span>
          <select name="category">${renderInventoryCategoryOptions("Oils & Fluids")}</select>
        </label>
        <label>
          <span>Quantity</span>
          <input name="quantity" type="number" min="0" step="0.01" value="1" />
        </label>
        <label>
          <span>Unit</span>
          <input name="unit" type="text" value="ea" />
        </label>
        <label>
          <span>Minimum stock</span>
          <input name="minimumStock" type="number" min="0" step="0.01" value="1" />
        </label>
        <label>
          <span>Storage location</span>
          <input name="storageLocation" type="text" placeholder="Fluid shelf" />
        </label>
        <label>
          <span>Compatibility</span>
          <input name="vehicleCompatibility" type="text" placeholder="Yukon, all, BMW..." />
        </label>
        <label>
          <span>Preferred vendor</span>
          <input name="preferredVendor" type="text" placeholder="NAPA" />
        </label>
        <label>
          <span>Last purchased</span>
          <input name="lastPurchasedDate" type="date" />
        </label>
        <label>
          <span>Cost</span>
          <input name="cost" type="number" min="0" step="0.01" placeholder="0.00" />
        </label>
        <label class="field-wide">
          <span>Restock link</span>
          <input name="restockLink" type="url" placeholder="https://..." />
        </label>
        <label class="field-wide">
          <span>Notes</span>
          <textarea name="notes" rows="3" placeholder="Shelf, size, alternate brands..."></textarea>
        </label>
        ${renderQuickAddActions()}
      </form>
    `;
  }

  if (mode === "inspection") {
    return `
      <form class="quick-add-form" data-quick-add-form="inspection" autocomplete="off">
        ${renderQuickAddVehicleField()}
        <label>
          <span>Template</span>
          <select name="template">${renderInspectionTemplateOptions("Oil Change Inspection")}</select>
        </label>
        <label>
          <span>Date</span>
          <input name="date" type="date" value="${escapeAttr(today())}" />
        </label>
        <label class="field-wide">
          <span>Summary</span>
          <textarea name="summary" rows="3" placeholder="What did you find?"></textarea>
        </label>
        <label class="field-wide">
          <span>Photo notes</span>
          <textarea name="photos" rows="2" placeholder="Photo placeholder for now. Add notes or filenames."></textarea>
        </label>
        ${renderQuickAddActions()}
      </form>
    `;
  }

  if (mode === "schedule") {
    return `
      <form class="quick-add-form" data-quick-add-form="schedule" autocomplete="off">
        ${renderQuickAddVehicleField()}
        <label class="field-wide">
          <span>Service title</span>
          <input name="title" type="text" placeholder="Brake fluid" required />
        </label>
        <label>
          <span>Track by</span>
          <select name="intervalMode">${renderMaintenanceIntervalOptions("Both")}</select>
        </label>
        <label>
          <span>Every miles</span>
          <input name="intervalMileage" type="number" min="0" step="1" placeholder="5000" />
        </label>
        <label>
          <span>Every months</span>
          <input name="intervalMonths" type="number" min="0" step="1" placeholder="6" />
        </label>
        <label>
          <span>Last done mileage</span>
          <input name="lastDoneMileage" type="number" min="0" step="1" />
        </label>
        <label>
          <span>Last done date</span>
          <input name="lastDoneDate" type="date" />
        </label>
        <label>
          <span>Next due mileage</span>
          <input name="nextDueMileage" type="number" min="0" step="1" />
        </label>
        <label>
          <span>Next due date</span>
          <input name="nextDueDate" type="date" />
        </label>
        <label class="field-wide">
          <span>Notes</span>
          <textarea name="notes" rows="3" placeholder="Fluid spec, filter, interval reminder..."></textarea>
        </label>
        ${renderQuickAddActions()}
      </form>
    `;
  }

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

function renderQuickAddVehicleFieldFor(vehicle) {
  return `
    <label>
      <span>Vehicle / project</span>
      <select name="vehicle">${renderVehicleOptions(vehicle)}</select>
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
  els.headerSecondaryLabel.textContent = isGarageOverview ? "Active jobs" : "Services logged";
  els.headerEntries.textContent = isGarageOverview ? String(dashboardData.activeRepairJobs.length) : String(vehicleEntries.filter((entry) => entry.category === "maintenance").length);
  els.headerIssues.textContent = isGarageOverview ? String(dashboardData.waitingOnParts.length) : String(selectedSummary?.issueCount || 0);
  els.headerUpgrades.textContent = isGarageOverview ? String(dashboardData.lowInventoryItems.length) : String(vehicleEntries.filter((entry) => entry.category === "upgrades").length);
  document.querySelector("#headerIssuesLabel").textContent = isGarageOverview ? "Waiting parts" : "Open issues";
  document.querySelector("#headerUpgradesLabel").textContent = isGarageOverview ? "Low stock" : "Upgrades";
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
  renderRepairBoard();
  renderParts();
  renderInventory();
  renderInspections();
  renderRestock();
  renderExpenses();
  renderScheduler();
  renderDetailModal();
  renderProfile();
  renderDiagnostics();
  syncViews();
}

function syncViews() {
  els.dashboardView.classList.toggle("is-hidden", activeView !== "dashboard");
  els.filterBar.classList.toggle("is-hidden", activeView !== "logbook");
  els.logbookView.classList.toggle("is-hidden", activeView !== "logbook");
  els.entryDetailView.classList.toggle("is-hidden", activeView !== "entryDetail");
  els.repairBoardView.classList.toggle("is-hidden", activeView !== "repairBoard");
  els.partsView.classList.toggle("is-hidden", activeView !== "parts");
  els.inventoryView.classList.toggle("is-hidden", activeView !== "inventory");
  els.inspectionsView.classList.toggle("is-hidden", activeView !== "inspections");
  els.restockView.classList.toggle("is-hidden", activeView !== "restock");
  els.expensesView.classList.toggle("is-hidden", activeView !== "expenses");
  els.schedulerView.classList.toggle("is-hidden", activeView !== "scheduler");
  els.profileView.classList.toggle("is-hidden", activeView !== "profile");
  els.diagnosticsView.classList.toggle("is-hidden", activeView !== "diagnostics");
}

function renderWorkspaceTabs() {
  const diagnosticsCount = getDiagnostics(selectedVehicle).length;
  const dashboardData = getDashboardData();
  const dashboardItems = dashboardData.items;
  const attentionCount = dashboardItems.filter((item) => needsAttention(item)).length;
  const scheduledCount = dashboardItems.filter((item) => item.scheduledDate && !isDoneItem(item)).length;
  const counts = {
    dashboard: attentionCount + dashboardData.lowInventoryItems.length,
    logbook: scheduledCount,
    repairBoard: dashboardData.activeRepairJobs.length,
    parts: state.parts.filter((part) => part.status !== "Installed").length,
    inventory: dashboardData.lowInventoryItems.length,
    inspections: state.inspections.filter((inspection) => inspection.vehicle === selectedVehicle).length,
    restock: dashboardData.lowInventoryItems.length,
    expenses: getRecentExpenses().length,
    scheduler: dashboardData.overdueMaintenance.length + dashboardData.upcomingMaintenance.length,
    diagnostics: diagnosticsCount
  };

  els.workspaceTabs.innerHTML = workspaceViews
    .map((view) => {
      const count = counts[view.id] || 0;
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
  const attentionItems = data.needsAttention.slice(0, 6);
  const todayPriorities = data.todayPriorities.slice(0, 3);
  const recentExpenses = data.recentExpenses.slice(0, 5);
  const recentActivity = data.recentActivity.slice(0, 5);
  const completedRepairs = data.recentCompletedRepairs.slice(0, 4);

  els.dashboardView.innerHTML = `
    <div class="garage-overview-hero">
      <div>
        <p class="label">Personal garage OS</p>
        <h3>Garage Overview</h3>
        <span>Fast entry from your phone, deeper planning from iPad or desktop, and one clear queue for what needs attention next.</span>
      </div>
      <button class="save-button quick-add-button" type="button" data-open-quick-add>${icon("plus")} Quick Add</button>
    </div>

    <section class="today-priority-panel garage-os-priorities" aria-label="Today's priorities">
      <div class="panel-heading">
        <div>
          <p class="label">Today's Priorities</p>
          <h4>Top 3 urgent actions</h4>
        </div>
        <span>${data.todayPriorities.length} queued</span>
      </div>
      <div class="priority-stack">
        ${
          todayPriorities.length
            ? todayPriorities.map(renderCommandPriorityItem).join("")
            : `<div class="empty-state compact-dashboard">No urgent jobs right now. Add repair jobs, due dates, and inventory needs to build the queue.</div>`
        }
      </div>
    </section>

    <section class="quick-action-grid" aria-label="Garage quick actions">
      ${renderDashboardQuickAction("Add Vehicle", "vehicle", "car")}
      ${renderDashboardQuickAction("Add Repair Job", "repairJob", "wrench")}
      ${renderDashboardQuickAction("Add Inventory Item", "inventory", "box")}
      ${renderDashboardQuickAction("Add Part", "part", "tag")}
      ${renderDashboardQuickAction("Add Expense", "expense", "receipt")}
      ${renderDashboardQuickAction("Add Inspection", "inspection", "check")}
    </section>

    <section class="dashboard-stat-grid os-stat-grid shop-stat-grid" aria-label="Garage overview totals">
      ${renderDashboardStat("Total Vehicles", String(state.vehicles.length), "Garage projects tracked", "car")}
      ${renderDashboardStat("Active Repair Jobs", String(data.activeRepairJobs.length), "Open Kanban jobs", "wrench", data.activeRepairJobs.length ? "warning" : "good")}
      ${renderDashboardStat("Jobs In Progress Today", String(data.jobsToday.length), "Scheduled or in progress", "calendar")}
      ${renderDashboardStat("Waiting on Parts", String(data.waitingOnParts.length), "Parts needed or ordered", "box", data.waitingOnParts.length ? "warning" : "good")}
      ${renderDashboardStat("Upcoming Maintenance", String(data.upcomingMaintenance.length), "Due soon by date or mileage", "clock")}
      ${renderDashboardStat("Low Inventory Alerts", String(data.lowInventoryItems.length), "Low or out of stock", "alert", data.lowInventoryItems.length ? "warning" : "good")}
      ${renderDashboardStat("Recently Completed Repairs", String(data.recentCompletedRepairs.length), "Completed job history", "check")}
      ${renderDashboardStat("Total Garage Spending", money(data.totals.garageSpending), "Vehicles, repairs, tools, parts", "receipt")}
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

    <div class="dashboard-layout shop-command-row">
      <section class="dashboard-panel" aria-label="Active repair jobs">
        <div class="panel-heading">
          <div>
            <p class="label">Repair jobs</p>
            <h4>Active board</h4>
          </div>
          <span>${data.activeRepairJobs.length} active</span>
        </div>
        <div class="mini-job-list">
          ${
            data.activeRepairJobs.slice(0, 5).length
              ? data.activeRepairJobs.slice(0, 5).map(renderMiniRepairJob).join("")
              : `<div class="empty-state compact-dashboard">No active repair jobs.</div>`
          }
        </div>
      </section>

      <section class="dashboard-panel" aria-label="Low inventory">
        <div class="panel-heading">
          <div>
            <p class="label">Inventory alerts</p>
            <h4>Restock watch</h4>
          </div>
          <span>${data.lowInventoryItems.length} alerts</span>
        </div>
        <div class="mini-job-list">
          ${
            data.lowInventoryItems.slice(0, 5).length
              ? data.lowInventoryItems.slice(0, 5).map(renderMiniInventoryAlert).join("")
              : `<div class="empty-state compact-dashboard">Inventory levels look good.</div>`
          }
        </div>
      </section>
    </div>

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
      <section class="dashboard-panel activity-panel" aria-label="Recently completed repairs">
        <div class="panel-heading">
          <div>
            <p class="label">Completed repairs</p>
            <h4>Recent wins</h4>
          </div>
          <span>${completedRepairs.length}</span>
        </div>
        <div class="timeline-list">
          ${
            completedRepairs.length
              ? completedRepairs.map(renderCompletedRepairLine).join("")
              : `<div class="empty-state compact-dashboard">Completed repair jobs will show here.</div>`
          }
        </div>
      </section>

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
  const activeRepairJobs = state.repairJobs.filter((job) => job.status !== "Completed").sort(compareRepairJobs);
  const repairJobItems = items.filter((item) => item.source === "repairJob" && !isDoneItem(item)).sort(compareDashboardItems);
  const priorityTasks = openTasks.filter((item) => priorityWeight(item.priority) >= 3);
  const todayPriorities = [...repairJobItems, ...openTasks, ...activeItems.filter((item) => item.source !== "repairJob" && priorityWeight(item.priority) >= 3)]
    .filter(uniqueAttentionItem)
    .sort(compareDashboardItems);
  const attentionItems = activeItems.filter((item) => needsAttention(item)).sort(compareDashboardItems);
  const scheduledItems = activeItems.filter((item) => item.scheduledDate && !isDoneItem(item)).sort(compareSchedule);
  const vehicleSummaries = getVehicleDashboardSummaries(items);
  const recentExpenses = getRecentExpenses();
  const recentActivity = getRecentActivity();
  const overdueServices = activeItems.filter((item) => isOverdue(item)).sort(compareSchedule);
  const upcomingMaintenanceItems = activeItems.filter((item) => isUpcomingMaintenance(item)).sort(compareSchedule);
  const maintenanceStatus = getMaintenanceScheduleStatus();
  const upcomingMaintenance = maintenanceStatus.filter((item) => item.statusKind === "Due Soon").sort(compareSchedule);
  const overdueMaintenance = maintenanceStatus.filter((item) => item.statusKind === "Overdue").sort(compareSchedule);
  const openIssues = activeItems.filter((item) => isIssueItem(item)).sort(compareDashboardItems);
  const missingInfoItems = getMissingInfoAttentionItems(vehicleSummaries);
  const lowInventoryItems = getLowInventoryItems();
  const lowInventoryDashboardItems = lowInventoryItems.map(inventoryToDashboardItem);
  const maintenanceDashboardItems = [...overdueMaintenance, ...upcomingMaintenance].map(maintenanceToDashboardItem);
  const waitingOnParts = activeRepairJobs.filter((job) => ["Parts Needed", "Parts Ordered"].includes(job.status) || ["Needed", "Ordered"].includes(job.partsStatus));
  const jobsToday = activeRepairJobs.filter((job) => job.status === "In Progress" || job.scheduledDate === today());
  const recentCompletedRepairs = state.repairJobs
    .filter((job) => job.status === "Completed")
    .sort((a, b) => String(b.completedAt || b.createdAt || "").localeCompare(String(a.completedAt || a.createdAt || "")));
  const needsAttentionItems = [...overdueServices, ...openIssues, ...missingInfoItems, ...maintenanceDashboardItems, ...lowInventoryDashboardItems, ...attentionItems]
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
  totals.partsCost = state.parts.reduce((total, part) => total + Number(part.price || 0) * Number(part.quantity || 1), 0);
  totals.inventoryCost = state.inventory.reduce((total, item) => total + Number(item.cost || 0) * Number(item.quantity || 0), 0);
  totals.repairJobCost = state.repairJobs.reduce((total, job) => total + Number(job.partsCost || 0) + Number(job.laborValue || 0), 0);
  totals.garageSpending = totals.totalInvested + totals.partsCost + totals.inventoryCost + totals.repairJobCost;

  return {
    items,
    activeItems,
    openTasks,
    activeRepairJobs,
    jobsToday,
    waitingOnParts,
    todayPriorities,
    urgentTaskCount: priorityTasks.length,
    attentionItems,
    needsAttention: needsAttentionItems,
    openIssueCount: openIssues.length,
    upcomingMaintenanceCount: upcomingMaintenanceItems.length + upcomingMaintenance.length,
    upcomingMaintenance,
    overdueMaintenance,
    maintenanceStatus,
    lowInventoryItems,
    recentCompletedRepairs,
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

function renderDashboardQuickAction(label, mode, iconName) {
  return `
    <button class="quick-action-card" type="button" data-open-quick-add="${escapeAttr(mode)}">
      <span>${icon(iconName)}</span>
      <strong>${escapeHtml(label)}</strong>
    </button>
  `;
}

function renderMiniRepairJob(job) {
  return `
    <button class="mini-command-card" type="button" data-dashboard-item="${escapeAttr(job.id)}" data-dashboard-source="repairJob" data-dashboard-vehicle="${escapeAttr(job.vehicle)}">
      <span class="mini-command-icon">${icon("wrench")}</span>
      <span class="mini-command-main">
        <strong>${escapeHtml(job.title)}</strong>
        <small>${escapeHtml(job.vehicle)} / ${escapeHtml(job.status)} / ${escapeHtml(job.partsStatus)}</small>
      </span>
      ${renderPriorityPill(job)}
    </button>
  `;
}

function renderMiniInventoryAlert(item) {
  const status = inventoryStatus(item);
  return `
    <button class="mini-command-card inventory-alert-${escapeAttr(slugify(status.label))}" type="button" data-dashboard-item="${escapeAttr(item.id)}" data-dashboard-source="inventory" data-dashboard-vehicle="${escapeAttr(selectedVehicle)}">
      <span class="mini-command-icon">${icon(status.icon)}</span>
      <span class="mini-command-main">
        <strong>${escapeHtml(item.name)}</strong>
        <small>${escapeHtml(status.label)} / ${escapeHtml(item.quantity)} ${escapeHtml(item.unit)} available / min ${escapeHtml(item.minimumStock)}</small>
      </span>
      <span class="status-badge compact">${escapeHtml(item.category)}</span>
    </button>
  `;
}

function renderCompletedRepairLine(job) {
  return `
    <button class="timeline-line activity-line" type="button" data-dashboard-item="${escapeAttr(job.id)}" data-dashboard-source="repairJob" data-dashboard-vehicle="${escapeAttr(job.vehicle)}">
      <span class="timeline-line-icon">${icon("check")}</span>
      <span>
        <strong>${escapeHtml(job.title)}</strong>
        <small>${escapeHtml(job.vehicle)} / ${escapeHtml(formatDate(job.completedAt || job.createdAt))}</small>
      </span>
      <b>${money(Number(job.partsCost || 0) + Number(job.laborValue || 0))}</b>
    </button>
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

function renderRepairBoard() {
  const activeCount = state.repairJobs.filter((job) => job.status !== "Completed").length;
  els.repairBoardView.innerHTML = `
    <div class="module-hero">
      <div>
        <p class="label">Repair job board</p>
        <h3>Kanban workflow</h3>
        <span>Move jobs from concern to diagnosis, parts, repair, and completed history.</span>
      </div>
      <button class="save-button" type="button" data-open-quick-add="repairJob">${icon("plus")} Add Repair Job</button>
    </div>

    <div class="kanban-board" aria-label="Repair job status columns">
      ${repairJobStatuses.map((status) => renderRepairColumn(status)).join("")}
    </div>

    <section class="dashboard-panel module-panel" aria-label="Repair system prep">
      <div class="panel-heading">
        <div>
          <p class="label">Work orders</p>
          <h4>${activeCount} active jobs</h4>
        </div>
        <span>Drag on desktop, tap to edit on mobile</span>
      </div>
      <p class="module-copy">Job details include diagnosis, testing, repair steps, cost tracking, lessons learned, and attached inventory so your long-term history stays useful.</p>
    </section>
  `;
}

function renderRepairColumn(status) {
  const jobs = state.repairJobs.filter((job) => job.status === status).sort(compareRepairJobs);
  return `
    <section class="kanban-column" data-job-status-column="${escapeAttr(status)}">
      <div class="kanban-column-head">
        <strong>${escapeHtml(status)}</strong>
        <span>${jobs.length}</span>
      </div>
      <div class="kanban-card-stack">
        ${
          jobs.length
            ? jobs.map(renderRepairJobCard).join("")
            : `<div class="kanban-empty">Drop jobs here</div>`
        }
      </div>
    </section>
  `;
}

function renderRepairJobCard(job) {
  const profile = getProfile(job.vehicle);
  return `
    <article class="repair-job-card" draggable="true" data-open-job="${escapeAttr(job.id)}">
      <div class="repair-job-top">
        <span class="vehicle-icon" aria-hidden="true">${icon(typeIcon(getVehicleRecord(job.vehicle).type))}</span>
        <div>
          <strong>${escapeHtml(job.title)}</strong>
          <small>${escapeHtml(job.vehicle)} / ${escapeHtml(vehicleDescriptor(job.vehicle) || profile.profileType || "Vehicle")}</small>
        </div>
      </div>
      <div class="repair-job-meta">
        ${renderPriorityPill(job)}
        <span>${escapeHtml(job.partsStatus)}</span>
        ${job.scheduledDate ? `<span>${escapeHtml(formatSchedule({ scheduledDate: job.scheduledDate, scheduledTime: job.scheduledTime, durationHours: job.estimatedHours }))}</span>` : ""}
      </div>
      <p>${escapeHtml(job.symptoms || job.notes || "No diagnosis notes yet.")}</p>
      <div class="repair-job-cost-row">
        <span>Est. ${money(job.estimatedCost)}</span>
        <span>Actual ${money(Number(job.partsCost || 0) + Number(job.laborValue || 0))}</span>
      </div>
      <div class="repair-job-actions">
        ${renderJobMoveButton(job, -1)}
        ${renderJobMoveButton(job, 1)}
      </div>
    </article>
  `;
}

function renderJobMoveButton(job, direction) {
  const index = repairJobStatuses.indexOf(job.status);
  const next = repairJobStatuses[index + direction];
  if (!next) return "";
  return `<button class="ghost-button compact-button" type="button" data-move-job="${escapeAttr(job.id)}" data-status="${escapeAttr(next)}">${direction < 0 ? "Back" : "Next"}</button>`;
}

function renderParts() {
  const openParts = state.parts.filter((part) => part.status !== "Installed").length;
  els.partsView.innerHTML = `
    <div class="module-hero">
      <div>
        <p class="label">Parts tracker</p>
        <h3>Research, order, receive, install</h3>
        <span>Smart searches include year, make, model, trim, and part name when profile data exists.</span>
      </div>
      <button class="save-button" type="button" data-open-quick-add="part">${icon("plus")} Add Part</button>
    </div>

    <section class="module-toolbar">
      <div><strong>${state.parts.length}</strong><span>Total parts</span></div>
      <div><strong>${openParts}</strong><span>Open</span></div>
      <div><strong>${money(state.parts.reduce((total, part) => total + Number(part.price || 0) * Number(part.quantity || 1), 0))}</strong><span>Parts value</span></div>
    </section>

    <div class="parts-grid">
      ${state.parts.length ? state.parts.map(renderPartCard).join("") : `<div class="empty-state">Add parts to start tracking research, orders, and installation.</div>`}
    </div>
  `;
}

function renderPartCard(part) {
  const searchUrls = buildPartSearchUrls(part);
  return `
    <article class="module-card part-card">
      <div class="module-card-head">
        <div>
          <p class="label">${escapeHtml(part.vehicle)}</p>
          <h4>${escapeHtml(part.name)}</h4>
        </div>
        <span class="status-badge compact" style="--status-color: ${part.status === "Installed" ? "#22c55e" : "#f97316"}">${escapeHtml(part.status)}</span>
      </div>
      <div class="module-meta-grid">
        <span><small>Part #</small><strong>${escapeHtml(part.partNumber || "Unknown")}</strong></span>
        <span><small>Vendor</small><strong>${escapeHtml(part.vendor || "Open")}</strong></span>
        <span><small>Qty</small><strong>${escapeHtml(part.quantity)}</strong></span>
        <span><small>Price</small><strong>${money(part.price)}</strong></span>
      </div>
      ${part.notes ? `<p>${escapeHtml(part.notes)}</p>` : ""}
      <div class="smart-search-grid">
        ${searchUrls.map((link) => `<a href="${escapeAttr(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`).join("")}
      </div>
      <div class="card-action-row">
        ${partStatuses
          .filter((status) => status !== part.status)
          .slice(0, 4)
          .map((status) => `<button class="ghost-button compact-button" type="button" data-part-status="${escapeAttr(part.id)}" data-status="${escapeAttr(status)}">${escapeHtml(status)}</button>`)
          .join("")}
      </div>
    </article>
  `;
}

function renderInventory() {
  const lowItems = getLowInventoryItems();
  els.inventoryView.innerHTML = `
    <div class="module-hero">
      <div>
        <p class="label">Garage inventory</p>
        <h3>Stock levels and shop supplies</h3>
        <span>Track oils, filters, hardware, tools, electrical supplies, and anything you do not want to discover missing mid-job.</span>
      </div>
      <button class="save-button" type="button" data-open-quick-add="inventory">${icon("plus")} Add Inventory Item</button>
    </div>

    <section class="module-toolbar">
      <div><strong>${state.inventory.length}</strong><span>Items</span></div>
      <div><strong>${lowItems.length}</strong><span>Low alerts</span></div>
      <div><strong>${money(state.inventory.reduce((total, item) => total + Number(item.cost || 0) * Number(item.quantity || 0), 0))}</strong><span>Stock value</span></div>
    </section>

    <div class="inventory-grid">
      ${state.inventory.length ? state.inventory.map(renderInventoryCard).join("") : `<div class="empty-state">Add inventory items to create stock alerts.</div>`}
    </div>
  `;
}

function renderInventoryCard(item) {
  const status = inventoryStatus(item);
  return `
    <article class="module-card inventory-card status-${escapeAttr(slugify(status.label))}">
      <div class="module-card-head">
        <div>
          <p class="label">${escapeHtml(item.category)}</p>
          <h4>${escapeHtml(item.name)}</h4>
        </div>
        <span class="status-badge compact" style="--status-color: ${status.color}">${icon(status.icon)} ${escapeHtml(status.label)}</span>
      </div>
      <div class="module-meta-grid">
        <span><small>Quantity</small><strong>${escapeHtml(item.quantity)} ${escapeHtml(item.unit)}</strong></span>
        <span><small>Minimum</small><strong>${escapeHtml(item.minimumStock)} ${escapeHtml(item.unit)}</strong></span>
        <span><small>Location</small><strong>${escapeHtml(item.storageLocation || "Not set")}</strong></span>
        <span><small>Vendor</small><strong>${escapeHtml(item.preferredVendor || "Open")}</strong></span>
      </div>
      ${item.notes ? `<p>${escapeHtml(item.notes)}</p>` : ""}
    </article>
  `;
}

function renderInspections() {
  els.inspectionsView.innerHTML = `
    <div class="module-hero">
      <div>
        <p class="label">Digital inspections</p>
        <h3>Reusable checklists</h3>
        <span>Templates support Pass, Monitor, and Fail results with notes and photo placeholders.</span>
      </div>
      <button class="save-button" type="button" data-open-quick-add="inspection">${icon("plus")} Add Inspection</button>
    </div>

    <section class="template-chip-grid" aria-label="Inspection templates">
      ${inspectionTemplates.map((template) => `<span>${escapeHtml(template)}</span>`).join("")}
    </section>

    <div class="inspection-grid">
      ${state.inspections.length ? state.inspections.map(renderInspectionCard).join("") : `<div class="empty-state">Add an inspection to start building history.</div>`}
    </div>
  `;
}

function renderInspectionCard(inspection) {
  const counts = inspection.items.reduce(
    (total, item) => {
      total[item.result] += 1;
      return total;
    },
    { Pass: 0, Monitor: 0, Fail: 0 }
  );

  return `
    <article class="module-card inspection-card">
      <div class="module-card-head">
        <div>
          <p class="label">${escapeHtml(inspection.vehicle)} / ${escapeHtml(formatDate(inspection.date))}</p>
          <h4>${escapeHtml(inspection.template)}</h4>
        </div>
        <span class="status-badge compact" style="--status-color: ${counts.Fail ? "#fb7185" : counts.Monitor ? "#f97316" : "#22c55e"}">${counts.Fail ? "Fail" : counts.Monitor ? "Monitor" : "Pass"}</span>
      </div>
      <div class="inspection-score-row">
        <span><strong>${counts.Pass}</strong><small>Pass</small></span>
        <span><strong>${counts.Monitor}</strong><small>Monitor</small></span>
        <span><strong>${counts.Fail}</strong><small>Fail</small></span>
      </div>
      ${inspection.summary ? `<p>${escapeHtml(inspection.summary)}</p>` : ""}
      <div class="inspection-item-list">
        ${inspection.items.map((item) => `<div><strong>${escapeHtml(item.label)}</strong><span class="${escapeAttr(slugify(item.result))}">${escapeHtml(item.result)}</span><small>${escapeHtml(item.notes || "")}</small></div>`).join("")}
      </div>
    </article>
  `;
}

function renderRestock() {
  const items = getLowInventoryItems();
  els.restockView.innerHTML = `
    <div class="module-hero">
      <div>
        <p class="label">Restock center</p>
        <h3>Suggested purchases</h3>
        <span>Low and out-of-stock items collect here so supply runs stay organized.</span>
      </div>
      <button class="save-button" type="button" data-open-quick-add="inventory">${icon("plus")} Add Inventory Item</button>
    </div>

    <div class="restock-list">
      ${items.length ? items.map(renderRestockItem).join("") : `<div class="empty-state">No restock recommendations right now.</div>`}
    </div>
  `;
}

function renderRestockItem(item) {
  const status = inventoryStatus(item);
  const missing = Math.max(0, Number(item.minimumStock || 0) - Number(item.quantity || 0));
  return `
    <article class="restock-card">
      <div>
        <p class="label">${escapeHtml(item.category)}</p>
        <h4>${escapeHtml(item.name)}</h4>
        <span>${escapeHtml(status.label)} / missing ${escapeHtml(missing)} ${escapeHtml(item.unit)}</span>
      </div>
      <div class="card-action-row">
        ${item.restockLink ? `<a class="ghost-button compact-button" href="${escapeAttr(item.restockLink)}" target="_blank" rel="noreferrer">Open Vendor Link</a>` : ""}
        <button class="ghost-button compact-button" type="button" data-mark-purchased="${escapeAttr(item.id)}">Mark Purchased</button>
      </div>
    </article>
  `;
}

function renderExpenses() {
  const expenses = getRecentExpenses();
  const monthly = sumCost(expenses.filter((entry) => String(entry.date || "").startsWith(today().slice(0, 7))));
  const yearly = sumCost(expenses.filter((entry) => String(entry.date || "").startsWith(today().slice(0, 4))));
  const perVehicle = state.vehicles.map((vehicle) => ({
    vehicle: vehicle.name,
    total: sumCost(expenses.filter((entry) => entry.vehicle === vehicle.name))
  }));

  els.expensesView.innerHTML = `
    <div class="module-hero">
      <div>
        <p class="label">Garage expenses</p>
        <h3>Spending by month, year, and vehicle</h3>
        <span>Expenses still save as timeline entries, so costs stay connected to vehicle history.</span>
      </div>
      <button class="save-button" type="button" data-open-quick-add="expense">${icon("plus")} Add Expense</button>
    </div>

    <section class="module-toolbar">
      <div><strong>${money(monthly)}</strong><span>This month</span></div>
      <div><strong>${money(yearly)}</strong><span>This year</span></div>
      <div><strong>${money(sumCost(expenses))}</strong><span>Total logged</span></div>
    </section>

    <div class="dashboard-layout">
      <section class="dashboard-panel">
        <div class="panel-heading"><div><p class="label">By vehicle</p><h4>Spending split</h4></div></div>
        <div class="expense-bars">
          ${perVehicle.map((item) => renderExpenseBar(item, Math.max(...perVehicle.map((vehicle) => vehicle.total), 1))).join("")}
        </div>
      </section>
      <section class="dashboard-panel">
        <div class="panel-heading"><div><p class="label">Recent</p><h4>Latest expenses</h4></div><span>${expenses.length}</span></div>
        <div class="timeline-list">
          ${expenses.slice(0, 8).map((entry) => `<button class="timeline-line expense-line" type="button" data-open-entry="${escapeAttr(entry.id)}"><span class="timeline-line-icon">${icon("receipt")}</span><span><strong>${escapeHtml(entry.title)}</strong><small>${escapeHtml(entry.vehicle)} / ${escapeHtml(entry.expenseCategory || "Other")} / ${escapeHtml(formatDate(entry.date))}</small></span><b>${money(entry.cost)}</b></button>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderExpenseBar(item, maxValue) {
  const width = Math.round((item.total / maxValue) * 100);
  return `
    <div class="expense-bar">
      <div><strong>${escapeHtml(item.vehicle)}</strong><span>${money(item.total)}</span></div>
      <b><span style="width: ${width}%"></span></b>
    </div>
  `;
}

function renderScheduler() {
  const schedules = getMaintenanceScheduleStatus();
  const overdue = schedules.filter((schedule) => schedule.statusKind === "Overdue").length;
  const dueSoon = schedules.filter((schedule) => schedule.statusKind === "Due Soon").length;

  els.schedulerView.innerHTML = `
    <div class="module-hero">
      <div>
        <p class="label">Maintenance scheduler</p>
        <h3>Recurring service tracking</h3>
        <span>Track service by mileage, date, or both. Visual alerts are ready now; future notifications can use this same data.</span>
      </div>
      <button class="save-button" type="button" data-open-quick-add="schedule">${icon("plus")} Add Schedule</button>
    </div>

    <section class="module-toolbar">
      <div><strong>${schedules.length}</strong><span>Schedules</span></div>
      <div><strong>${dueSoon}</strong><span>Due soon</span></div>
      <div><strong>${overdue}</strong><span>Overdue</span></div>
    </section>

    <div class="scheduler-grid">
      ${schedules.length ? schedules.map(renderScheduleCard).join("") : `<div class="empty-state">Add recurring service schedules to see due-soon and overdue work.</div>`}
    </div>

    <section class="dashboard-panel module-panel">
      <div class="panel-heading">
        <div>
          <p class="label">Notification prep</p>
          <h4>Visual alerts only for now</h4>
        </div>
      </div>
      <div class="template-chip-grid">
        ${state.notificationPrep.map((item) => `<span>${escapeHtml(item.type)}</span>`).join("")}
      </div>
    </section>
  `;
}

function renderScheduleCard(schedule) {
  const statusColor = schedule.statusKind === "Overdue" ? "#fb7185" : schedule.statusKind === "Due Soon" ? "#f97316" : "#22c55e";
  return `
    <article class="module-card schedule-card">
      <div class="module-card-head">
        <div>
          <p class="label">${escapeHtml(schedule.vehicle)} / ${escapeHtml(schedule.intervalMode)}</p>
          <h4>${escapeHtml(schedule.title)}</h4>
        </div>
        <span class="status-badge compact" style="--status-color: ${statusColor}">${escapeHtml(schedule.statusKind)}</span>
      </div>
      <div class="module-meta-grid">
        <span><small>Next date</small><strong>${escapeHtml(schedule.nextDueDate ? formatDate(schedule.nextDueDate) : "Not set")}</strong></span>
        <span><small>Next mileage</small><strong>${escapeHtml(schedule.nextDueMileage || "Not set")}</strong></span>
        <span><small>Last date</small><strong>${escapeHtml(schedule.lastDoneDate ? formatDate(schedule.lastDoneDate) : "Unknown")}</strong></span>
        <span><small>Last mileage</small><strong>${escapeHtml(schedule.lastDoneMileage || "Unknown")}</strong></span>
      </div>
      ${schedule.notes ? `<p>${escapeHtml(schedule.notes)}</p>` : ""}
      <div class="card-action-row">
        <button class="ghost-button compact-button" type="button" data-complete-schedule="${escapeAttr(schedule.id)}">Mark Done Today</button>
      </div>
    </article>
  `;
}

function renderDetailModal() {
  if (!detailModalOpen) {
    els.detailModal.classList.remove("is-open");
    els.detailModal.setAttribute("aria-hidden", "true");
    els.detailModal.innerHTML = "";
    return;
  }

  els.detailModal.classList.add("is-open");
  els.detailModal.setAttribute("aria-hidden", "false");
  els.detailModal.innerHTML = detailModalType === "repairJob" ? renderRepairJobDetailModal() : "";
}

function renderRepairJobDetailModal() {
  const job = state.repairJobs.find((item) => item.id === detailModalId);
  if (!job) return "";
  const totalCost = Number(job.partsCost || 0) + Number(job.laborValue || 0);

  return `
    <div class="quick-add-backdrop" data-detail-backdrop>
      <section class="quick-add-dialog detail-dialog" role="dialog" aria-modal="true" aria-labelledby="repairJobDetailTitle">
        <div class="quick-add-head">
          <div>
            <p class="label">${escapeHtml(job.vehicle)} work order</p>
            <h3 id="repairJobDetailTitle">${escapeHtml(job.title)}</h3>
          </div>
          <button class="icon-button modal-close" type="button" data-close-detail aria-label="Close repair job detail">
            ${icon("close")}
          </button>
        </div>

        <form class="quick-add-form repair-detail-form" id="repairJobDetailForm" data-job-id="${escapeAttr(job.id)}" autocomplete="off">
          ${renderQuickAddVehicleFieldFor(job.vehicle)}
          <label class="field-wide">
            <span>Job title</span>
            <input name="title" type="text" value="${escapeAttr(job.title)}" required />
          </label>
          <label>
            <span>Priority</span>
            <select name="priority">${renderPriorityOptions(job.priority)}</select>
          </label>
          <label>
            <span>Status</span>
            <select name="status">${renderRepairJobStatusOptions(job.status)}</select>
          </label>
          <label>
            <span>Parts status</span>
            <select name="partsStatus">${renderPartStatusOptions(job.partsStatus)}</select>
          </label>
          <label>
            <span>Scheduled date</span>
            <input name="scheduledDate" type="date" value="${escapeAttr(job.scheduledDate)}" />
          </label>
          <label>
            <span>Scheduled time</span>
            <input name="scheduledTime" type="time" value="${escapeAttr(job.scheduledTime)}" />
          </label>
          <label>
            <span>Estimated hours</span>
            <input name="estimatedHours" type="number" min="0" step="0.25" value="${escapeAttr(job.estimatedHours)}" />
          </label>
          <label>
            <span>Estimated cost</span>
            <input name="estimatedCost" type="number" min="0" step="0.01" value="${escapeAttr(job.estimatedCost)}" />
          </label>

          <div class="form-section-title field-wide">Diagnosis</div>
          <label class="field-wide"><span>Symptoms</span><textarea name="symptoms" rows="3">${escapeHtml(job.symptoms)}</textarea></label>
          <label class="field-wide"><span>Testing performed</span><textarea name="testingPerformed" rows="3">${escapeHtml(job.testingPerformed)}</textarea></label>
          <label class="field-wide"><span>Results</span><textarea name="results" rows="3">${escapeHtml(job.results)}</textarea></label>
          <label class="field-wide"><span>Suspected causes</span><textarea name="suspectedCauses" rows="3">${escapeHtml(job.suspectedCauses)}</textarea></label>
          <label class="field-wide"><span>Final diagnosis</span><textarea name="finalDiagnosis" rows="3">${escapeHtml(job.finalDiagnosis)}</textarea></label>

          <div class="form-section-title field-wide">Repair</div>
          <label class="field-wide"><span>Steps performed</span><textarea name="stepsPerformed" rows="4">${escapeHtml(job.stepsPerformed)}</textarea></label>
          <label class="field-wide"><span>Notes</span><textarea name="notes" rows="3">${escapeHtml(job.notes)}</textarea></label>
          <label class="field-wide"><span>Photos</span><textarea name="photos" rows="2" placeholder="Photo placeholder or filenames">${escapeHtml(job.photos)}</textarea></label>
          <label class="field-wide"><span>Videos placeholder</span><textarea name="videoPlaceholder" rows="2" placeholder="Video notes or future links">${escapeHtml(job.videoPlaceholder)}</textarea></label>

          <div class="form-section-title field-wide">Cost Tracking</div>
          <label><span>Parts cost</span><input name="partsCost" type="number" min="0" step="0.01" value="${escapeAttr(job.partsCost)}" /></label>
          <label><span>Labor value</span><input name="laborValue" type="number" min="0" step="0.01" value="${escapeAttr(job.laborValue)}" /></label>
          <div class="cost-preview field-wide"><span>Total Cost</span><strong>${money(totalCost)}</strong></div>

          <div class="form-section-title field-wide">Inventory Needed</div>
          <div class="job-inventory-picker field-wide">
            <select id="jobInventoryItemSelect">${state.inventory.map((item) => `<option value="${escapeAttr(item.id)}">${escapeHtml(item.name)} (${escapeHtml(item.quantity)} ${escapeHtml(item.unit)})</option>`).join("")}</select>
            <input id="jobInventoryQtyInput" type="number" min="0.01" step="0.01" value="1" aria-label="Inventory quantity" />
            <button class="ghost-button compact-button" type="button" data-add-job-inventory>Add</button>
          </div>
          <div class="job-inventory-list field-wide">
            ${renderJobInventoryNeeds(job)}
          </div>

          <div class="form-section-title field-wide">Completion</div>
          <label class="field-wide"><span>Resolution</span><textarea name="resolution" rows="3">${escapeHtml(job.resolution)}</textarea></label>
          <label class="field-wide"><span>Lessons learned</span><textarea name="lessonsLearned" rows="3">${escapeHtml(job.lessonsLearned)}</textarea></label>
          <label class="field-wide"><span>Final notes</span><textarea name="finalNotes" rows="3">${escapeHtml(job.finalNotes)}</textarea></label>

          <div class="modal-actions field-wide">
            <button class="ghost-button" type="button" data-close-detail>Cancel</button>
            <button class="save-button" type="submit">${icon("save")} Save Work Order</button>
          </div>
        </form>
      </section>
    </div>
  `;
}

function renderJobInventoryNeeds(job) {
  if (!job.inventoryNeeds.length) return `<div class="empty-state compact-dashboard">No inventory attached yet.</div>`;
  return job.inventoryNeeds
    .map((need) => {
      const item = state.inventory.find((inventoryItem) => inventoryItem.id === need.inventoryId);
      if (!item) return "";
      const missing = Math.max(0, Number(need.quantity || 0) - Number(item.quantity || 0));
      return `
        <div class="job-inventory-row">
          <span><strong>${escapeHtml(item.name)}</strong><small>Need ${escapeHtml(need.quantity)} ${escapeHtml(item.unit)} / available ${escapeHtml(item.quantity)} ${escapeHtml(item.unit)}${missing ? ` / missing ${escapeHtml(missing)}` : ""}</small></span>
          <button class="icon-button" type="button" data-remove-job-inventory="${escapeAttr(item.id)}" aria-label="Remove ${escapeAttr(item.name)}">${icon("trash")}</button>
        </div>
      `;
    })
    .join("");
}

function openDetailModal(type, id) {
  detailModalOpen = true;
  detailModalType = type;
  detailModalId = id;
  renderDetailModal();
}

function closeDetailModal() {
  detailModalOpen = false;
  detailModalType = "";
  detailModalId = "";
  renderDetailModal();
}

function updateRepairJobStatus(jobId, status) {
  if (!repairJobStatuses.includes(status)) return;
  state.repairJobs = state.repairJobs.map((job) => {
    if (job.id !== jobId) return job;
    const updated = normalizeRepairJob({
      ...job,
      status,
      partsStatus: inferPartsStatusFromJobStatus(status, job.partsStatus),
      completedAt: status === "Completed" ? today() : ""
    });
    if (status === "Completed" && !updated.inventoryDeducted) {
      deductInventoryForJob(updated);
      updated.inventoryDeducted = true;
    }
    return updated;
  });
  saveState();
  render();
}

function saveRepairJobDetail(form) {
  const jobId = form.dataset.jobId;
  const current = state.repairJobs.find((job) => job.id === jobId);
  if (!current) return;
  const formData = new FormData(form);
  const status = String(formData.get("status") || current.status);
  const updated = normalizeRepairJob({
    ...current,
    vehicle: String(formData.get("vehicle") || current.vehicle),
    title: String(formData.get("title") || "").trim(),
    priority: String(formData.get("priority") || "High"),
    status,
    partsStatus: String(formData.get("partsStatus") || current.partsStatus),
    scheduledDate: String(formData.get("scheduledDate") || ""),
    scheduledTime: String(formData.get("scheduledTime") || ""),
    estimatedHours: String(formData.get("estimatedHours") || ""),
    estimatedCost: Number.parseFloat(formData.get("estimatedCost") || "0"),
    symptoms: String(formData.get("symptoms") || "").trim(),
    testingPerformed: String(formData.get("testingPerformed") || "").trim(),
    results: String(formData.get("results") || "").trim(),
    suspectedCauses: String(formData.get("suspectedCauses") || "").trim(),
    finalDiagnosis: String(formData.get("finalDiagnosis") || "").trim(),
    stepsPerformed: String(formData.get("stepsPerformed") || "").trim(),
    notes: String(formData.get("notes") || "").trim(),
    photos: String(formData.get("photos") || "").trim(),
    videoPlaceholder: String(formData.get("videoPlaceholder") || "").trim(),
    partsCost: Number.parseFloat(formData.get("partsCost") || "0"),
    laborValue: Number.parseFloat(formData.get("laborValue") || "0"),
    resolution: String(formData.get("resolution") || "").trim(),
    lessonsLearned: String(formData.get("lessonsLearned") || "").trim(),
    finalNotes: String(formData.get("finalNotes") || "").trim(),
    completedAt: status === "Completed" ? current.completedAt || today() : ""
  });
  if (!updated.title) return;
  if (updated.status === "Completed" && !updated.inventoryDeducted) {
    deductInventoryForJob(updated);
    updated.inventoryDeducted = true;
  }
  state.repairJobs = state.repairJobs.map((job) => (job.id === jobId ? updated : job));
  selectedVehicle = updated.vehicle;
  saveState();
  render();
}

function deductInventoryForJob(job) {
  job.inventoryNeeds.forEach((need) => {
    state.inventory = state.inventory.map((item) => {
      if (item.id !== need.inventoryId) return item;
      return {
        ...item,
        quantity: Math.max(0, Number(item.quantity || 0) - Number(need.quantity || 0))
      };
    });
  });
}

function addInventoryNeedToActiveJob() {
  const job = state.repairJobs.find((item) => item.id === detailModalId);
  const itemId = document.querySelector("#jobInventoryItemSelect")?.value || "";
  const quantity = Number.parseFloat(document.querySelector("#jobInventoryQtyInput")?.value || "0");
  if (!job || !itemId || quantity <= 0) return;
  const existing = job.inventoryNeeds.find((need) => need.inventoryId === itemId);
  const nextNeeds = existing
    ? job.inventoryNeeds.map((need) => (need.inventoryId === itemId ? { ...need, quantity: need.quantity + quantity } : need))
    : [...job.inventoryNeeds, { inventoryId: itemId, quantity }];
  state.repairJobs = state.repairJobs.map((item) => (item.id === job.id ? normalizeRepairJob({ ...item, inventoryNeeds: nextNeeds }) : item));
  saveState();
  renderDetailModal();
}

function removeInventoryNeedFromActiveJob(itemId) {
  const job = state.repairJobs.find((item) => item.id === detailModalId);
  if (!job) return;
  state.repairJobs = state.repairJobs.map((item) =>
    item.id === job.id ? normalizeRepairJob({ ...item, inventoryNeeds: item.inventoryNeeds.filter((need) => need.inventoryId !== itemId) }) : item
  );
  saveState();
  renderDetailModal();
}

function updatePartStatus(partId, status) {
  if (!partStatuses.includes(status)) return;
  state.parts = state.parts.map((part) => (part.id === partId ? { ...part, status } : part));
  saveState();
  render();
}

function markInventoryPurchased(itemId) {
  state.inventory = state.inventory.map((item) => {
    if (item.id !== itemId) return item;
    return {
      ...item,
      quantity: Math.max(Number(item.quantity || 0), Number(item.minimumStock || 0)),
      lastPurchasedDate: today()
    };
  });
  saveState();
  render();
}

function completeMaintenanceSchedule(scheduleId) {
  state.maintenanceSchedules = state.maintenanceSchedules.map((schedule) => {
    if (schedule.id !== scheduleId) return schedule;
    const profile = getProfile(schedule.vehicle);
    const currentMileage = Number.parseFloat(vehicleMileage(profile) || "0") || "";
    const nextDueMileage = currentMileage && schedule.intervalMileage ? currentMileage + Number(schedule.intervalMileage) : schedule.nextDueMileage;
    const nextDueDate = schedule.intervalMonths ? addMonthsToDate(today(), Number(schedule.intervalMonths)) : schedule.nextDueDate;
    return normalizeMaintenanceSchedule({
      ...schedule,
      lastDoneDate: today(),
      lastDoneMileage: currentMileage || schedule.lastDoneMileage,
      nextDueMileage,
      nextDueDate,
      status: "Scheduled"
    });
  });
  saveState();
  render();
}

function addMonthsToDate(date, months) {
  const parsed = new Date(`${date}T12:00:00`);
  if (Number.isNaN(parsed.getTime()) || !months) return "";
  parsed.setMonth(parsed.getMonth() + months);
  return parsed.toISOString().slice(0, 10);
}

function compareRepairJobs(a, b) {
  const priorityDiff = priorityWeight(b.priority) - priorityWeight(a.priority);
  if (priorityDiff) return priorityDiff;
  const statusDiff = repairJobStatuses.indexOf(a.status) - repairJobStatuses.indexOf(b.status);
  if (statusDiff) return statusDiff;
  return String(a.scheduledDate || a.createdAt || "").localeCompare(String(b.scheduledDate || b.createdAt || ""));
}

function inferPartsStatusFromJobStatus(status, fallback = "Researching") {
  if (status === "Parts Needed") return "Needed";
  if (status === "Parts Ordered") return "Ordered";
  if (status === "Completed") return "Installed";
  return partStatuses.includes(fallback) ? fallback : "Researching";
}

function inventoryStatus(item) {
  if (Number(item.quantity || 0) <= 0) return { label: "Out of Stock", icon: "warning", color: "#fb7185" };
  if (Number(item.quantity || 0) <= Number(item.minimumStock || 0)) return { label: "Low Stock", icon: "alert", color: "#f97316" };
  return { label: "In Stock", icon: "check", color: "#22c55e" };
}

function getLowInventoryItems() {
  return state.inventory.filter((item) => inventoryStatus(item).label !== "In Stock");
}

function inventoryToDashboardItem(item) {
  const status = inventoryStatus(item);
  return {
    id: item.id,
    source: "inventory",
    sourceLabel: "Inventory",
    vehicle: selectedVehicle,
    category: "inventory",
    typeLabel: item.category,
    title: `${item.name} is ${status.label.toLowerCase()}`,
    status: status.label,
    statusSymbol: status.label === "Out of Stock" ? "urgent" : "attention",
    statusLabel: status.label,
    priority: status.label === "Out of Stock" ? "Critical" : "High",
    flagged: true,
    scheduledDate: "",
    scheduledTime: "",
    durationHours: "",
    createdDate: "",
    notes: item.notes || ""
  };
}

function getMaintenanceScheduleStatus() {
  return state.maintenanceSchedules.map((schedule) => {
    const profile = getProfile(schedule.vehicle);
    const currentMileage = Number.parseFloat(vehicleMileage(profile) || "0") || 0;
    const nextMileage = Number(schedule.nextDueMileage || 0);
    const daysUntil = schedule.nextDueDate ? scheduleDaysUntil(schedule.nextDueDate) : Number.POSITIVE_INFINITY;
    const mileageUntil = nextMileage ? nextMileage - currentMileage : Number.POSITIVE_INFINITY;
    const statusKind = daysUntil < 0 || mileageUntil < 0 ? "Overdue" : daysUntil <= 30 || mileageUntil <= 500 ? "Due Soon" : "Scheduled";
    return {
      ...schedule,
      statusKind,
      scheduledDate: schedule.nextDueDate || "",
      priority: statusKind === "Overdue" ? "Critical" : statusKind === "Due Soon" ? "High" : "Low"
    };
  });
}

function maintenanceToDashboardItem(schedule) {
  return {
    id: schedule.id,
    source: "maintenanceSchedule",
    sourceLabel: "Scheduler",
    vehicle: schedule.vehicle,
    category: "maintenance",
    typeLabel: "Maintenance Schedule",
    title: `${schedule.title} ${schedule.statusKind.toLowerCase()}`,
    status: schedule.statusKind,
    statusSymbol: schedule.statusKind === "Overdue" ? "urgent" : schedule.statusKind === "Due Soon" ? "dueSoon" : "good",
    statusLabel: schedule.statusKind,
    priority: schedule.priority,
    flagged: schedule.statusKind !== "Scheduled",
    scheduledDate: schedule.nextDueDate || "",
    scheduledTime: "",
    durationHours: "",
    createdDate: schedule.lastDoneDate || "",
    notes: schedule.notes || ""
  };
}

function buildPartSearchUrls(part) {
  const profile = getProfile(part.vehicle);
  const query = [profile.year, profile.make, profile.model || part.vehicle, profile.trim, part.name, part.partNumber].filter(Boolean).join(" ");
  const encoded = encodeURIComponent(query);
  return [
    { label: "Google", url: `https://www.google.com/search?q=${encoded}` },
    { label: "RockAuto", url: `https://www.google.com/search?q=${encodeURIComponent(`site:rockauto.com ${query}`)}` },
    { label: "Amazon", url: `https://www.amazon.com/s?k=${encoded}` },
    { label: "eBay", url: `https://www.ebay.com/sch/i.html?_nkw=${encoded}` },
    { label: "AutoZone", url: `https://www.autozone.com/searchresult?searchText=${encoded}` },
    { label: "O'Reilly", url: `https://www.oreillyauto.com/search?q=${encoded}` },
    { label: "Advance", url: `https://shop.advanceautoparts.com/web/SearchResults?searchTerm=${encoded}` },
    { label: "NAPA", url: `https://www.napaonline.com/en/search?text=${encoded}` }
  ];
}

function defaultInspectionItems(template) {
  const common = {
    "Pre-Purchase Inspection": ["Exterior condition", "Interior condition", "Engine bay", "Leaks", "Road test", "Codes scan"],
    "Oil Change Inspection": ["Oil level", "Filter installed", "Leaks", "Tires", "Brakes", "Lights"],
    "Brake Inspection": ["Pad thickness", "Rotor condition", "Brake hoses", "Fluid level", "Parking brake"],
    "Suspension Inspection": ["Ball joints", "Tie rods", "Control arms", "Shocks/struts", "Wheel bearings"],
    "Electrical Diagnosis": ["Battery voltage", "Grounds", "Fuses", "Connectors", "Module communication"],
    "No-Start Diagnosis": ["Battery", "Starter", "Fuel", "Spark", "Codes", "Compression"],
    "AC Diagnosis": ["Cabin controls", "Compressor command", "Pressure reading", "Leaks", "Blend doors"],
    "Road Trip Inspection": ["Fluids", "Tires", "Brakes", "Lights", "Belts/hoses", "Emergency kit"]
  };
  return (common[template] || common[inspectionTemplates[0]]).map((label) => ({ label, result: "Monitor", notes: "" }));
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

  const repairJobItems = state.repairJobs.map((job) => ({
    id: job.id,
    source: "repairJob",
    sourceLabel: "Repair Board",
    vehicle: job.vehicle,
    category: "repairs",
    typeLabel: "Repair Job",
    title: job.title,
    status: job.status,
    statusSymbol: job.status === "Completed" ? "done" : job.status === "Parts Ordered" ? "parts" : job.status === "Parts Needed" ? "waiting" : priorityWeight(job.priority) >= 4 ? "urgent" : "repair",
    statusLabel: job.status,
    priority: job.priority || "High",
    flagged: priorityWeight(job.priority) >= 3 || ["Parts Needed", "Parts Ordered", "In Progress"].includes(job.status),
    scheduledDate: job.scheduledDate || "",
    scheduledTime: job.scheduledTime || "",
    durationHours: job.estimatedHours || "",
    createdDate: job.createdAt || "",
    notes: job.symptoms || job.notes || ""
  }));

  const partItems = state.parts.map((part) => ({
    id: part.id,
    source: "part",
    sourceLabel: "Parts",
    vehicle: part.vehicle,
    category: "parts",
    typeLabel: "Part",
    title: part.name,
    status: part.status,
    statusSymbol: part.status === "Installed" ? "done" : part.status === "Ordered" ? "parts" : part.status === "Needed" ? "waiting" : "testing",
    statusLabel: part.status,
    priority: part.status === "Needed" ? "High" : part.status === "Ordered" ? "Medium" : "Low",
    flagged: ["Needed", "Ordered"].includes(part.status),
    scheduledDate: "",
    scheduledTime: "",
    durationHours: "",
    createdDate: "",
    notes: part.notes || part.partNumber || ""
  }));

  const inspectionItems = state.inspections.map((inspection) => {
    const failCount = inspection.items.filter((item) => item.result === "Fail").length;
    const monitorCount = inspection.items.filter((item) => item.result === "Monitor").length;
    return {
      id: inspection.id,
      source: "inspection",
      sourceLabel: "Inspections",
      vehicle: inspection.vehicle,
      category: "inspection",
      typeLabel: inspection.template,
      title: inspection.template,
      status: failCount ? "Fail" : monitorCount ? "Monitor" : "Pass",
      statusSymbol: failCount ? "urgent" : monitorCount ? "attention" : "good",
      statusLabel: failCount ? `${failCount} fail` : monitorCount ? `${monitorCount} monitor` : "Pass",
      priority: failCount ? "High" : monitorCount ? "Medium" : "Low",
      flagged: Boolean(failCount),
      scheduledDate: "",
      scheduledTime: "",
      durationHours: "",
      createdDate: inspection.date || "",
      notes: inspection.summary || ""
    };
  });

  const maintenanceItems = getMaintenanceScheduleStatus().map(maintenanceToDashboardItem);
  const inventoryItems = getLowInventoryItems().map(inventoryToDashboardItem);

  return [...taskItems, ...entryItems, ...diagnosticItems, ...repairJobItems, ...partItems, ...inspectionItems, ...maintenanceItems, ...inventoryItems];
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
  const status = String(item.status || "").toLowerCase();
  return ["done", "completed", "installed", "pass"].includes(status) || item.statusSymbol === "done";
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

function renderRepairJobStatusOptions(selected = "Idea / Concern") {
  return repairJobStatuses
    .map((status) => `<option value="${escapeAttr(status)}" ${status === selected ? "selected" : ""}>${escapeHtml(status)}</option>`)
    .join("");
}

function renderPartStatusOptions(selected = "Researching") {
  return partStatuses
    .map((status) => `<option value="${escapeAttr(status)}" ${status === selected ? "selected" : ""}>${escapeHtml(status)}</option>`)
    .join("");
}

function renderInventoryCategoryOptions(selected = "Miscellaneous") {
  return inventoryCategories
    .map((category) => `<option value="${escapeAttr(category)}" ${category === selected ? "selected" : ""}>${escapeHtml(category)}</option>`)
    .join("");
}

function renderInspectionTemplateOptions(selected = inspectionTemplates[0]) {
  return inspectionTemplates
    .map((template) => `<option value="${escapeAttr(template)}" ${template === selected ? "selected" : ""}>${escapeHtml(template)}</option>`)
    .join("");
}

function renderMaintenanceIntervalOptions(selected = "Both") {
  return maintenanceIntervalModes
    .map((mode) => `<option value="${escapeAttr(mode)}" ${mode === selected ? "selected" : ""}>${escapeHtml(mode)}</option>`)
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

    ${renderVehicleProfileSections(selectedVehicle)}
  `;
}

function renderVehicleProfileSections(vehicle) {
  const activeRepairs = state.repairJobs.filter((job) => job.vehicle === vehicle && job.status !== "Completed");
  const maintenanceHistory = getVehicleEntries(vehicle).filter((entry) => entry.category === "maintenance");
  const installedParts = state.parts.filter((part) => part.vehicle === vehicle && part.status === "Installed");
  const buildMods = getVehicleEntries(vehicle).filter((entry) => entry.category === "upgrades");
  const inspections = state.inspections.filter((inspection) => inspection.vehicle === vehicle);
  const expenses = getVehicleEntries(vehicle).filter((entry) => Number(entry.cost || 0) > 0);

  const sections = [
    { label: "Active Repairs", value: activeRepairs.length, iconName: "wrench", text: activeRepairs[0]?.title || "No active repair jobs." },
    { label: "Maintenance History", value: maintenanceHistory.length, iconName: "calendar", text: maintenanceHistory[0]?.title || "No maintenance history yet." },
    { label: "Installed Parts", value: installedParts.length, iconName: "tag", text: installedParts[0]?.name || "No installed parts tracked." },
    { label: "Build Modifications", value: buildMods.length, iconName: "bolt", text: buildMods[0]?.title || "No modifications logged yet." },
    { label: "Inspection Reports", value: inspections.length, iconName: "check", text: inspections[0]?.template || "No inspections yet." },
    { label: "Expenses", value: money(sumCost(expenses)), iconName: "receipt", text: `${expenses.length} cost entries saved.` },
    { label: "Documents", value: 0, iconName: "note", text: "Document storage is prepared as a future feature." }
  ];

  return `
    <section class="vehicle-profile-sections" aria-label="Vehicle profile sections">
      ${sections
        .map(
          (section) => `
            <article class="module-card profile-section-card">
              <span class="dashboard-stat-icon">${icon(section.iconName)}</span>
              <div>
                <p class="label">${escapeHtml(section.label)}</p>
                <h4>${escapeHtml(section.value)}</h4>
                <span>${escapeHtml(section.text)}</span>
              </div>
            </article>
          `
        )
        .join("")}
    </section>
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
    cart: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5h2l2 11h10l2-8H8"/><path d="M10 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/><path d="M18 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/></svg>',
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
