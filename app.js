// UBC Garden House Management - app.js

// Translation Dictionary
const translations = {
  bn: {
    brandName: "ইউবিসি গার্ডেন",
    brandLoc: "কালিশংকরপুর, কুষ্টিয়া",
    dashboard: "ড্যাশবোর্ড",
    billingSheet: "বিলিং শিট",
    ledgers: "আয় ও ব্যয়",
    reportsSettings: "রিপোর্ট ও সেটিংস",
    totalCollection: "মোট আদায়",
    totalExpenses: "মোট খরচ",
    cashSurplus: "উদ্বৃত্ত টাকা",
    collectionRate: "আদায় হার",
    month: "মাস",
    year: "বছর",
    activeMonth: "চলতি মাস",
    no: "নং",
    ownerName: "ফ্ল্যাট মালিকের নাম",
    flatNo: "ফ্ল্যাট নম্বর",
    electricity: "বিদ্যুৎ বিল",
    guard: "প্রহরী বিল",
    sweeper: "ঝাড়ু বিল",
    water: "পানির বিল",
    garage: "গ্যারেজ বিল",
    development: "উন্নয়ন চার্জ",
    festival: "উৎসব/অন্যান্য",
    total: "মোট টাকা",
    signature: "প্রদানকারীর স্বাক্ষর",
    status: "অবস্থা",
    paid: "পরিশোধিত",
    unpaid: "অপরিশোধিত",
    saveSuccess: "তথ্য সফলভাবে সংরক্ষণ করা হয়েছে!",
    incomeStatement: "আয় বিবরণী",
    expenseStatement: "ব্যয় বিবরণী",
    addIncome: "নতুন আয় যোগ করুন",
    addExpense: "নতুন ব্যয় যোগ করুন",
    itemName: "আইটেমের নাম",
    amount: "টাকার পরিমাণ",
    add: "যোগ করুন",
    totalIncome: "মোট আয়ঃ",
    totalExpense: "মোট খরচঃ",
    surplus: "উদ্বৃত্ত টাকাঃ",
    printStatement: "স্টেটমেন্ট প্রিন্ট করুন",
    backupData: "ব্যাকআপ ও ডেটা রিসেট",
    exportData: "ডেটা এক্সপোর্ট",
    importData: "ডেটা ইম্পোর্ট",
    resetData: "ডেটা রিসেট",
    dangerZone: "ঝুঁকিপূর্ণ জোন",
    confirmReset: "আপনি কি নিশ্চিত যে সমস্ত ডেটা মুছে ফেলতে চান?",
    language: "ভাষা",
    theme: "থিম",
    light: "লাইট",
    dark: "ডার্ক",
    monthBn: [
      "জানুয়ারি",
      "ফেব্রুয়ারি",
      "মার্চ",
      "এপ্রিল",
      "মে",
      "জুন",
      "জুলাই",
      "আগস্ট",
      "সেপ্টেম্বর",
      "অক্টোবর",
      "নভেম্বর",
      "ডিসেম্বর",
    ],
    costItems: {
      guard_salary: "প্রহরীর বেতন",
      sweeper_salary: "ঝাড়ুদারের বেতন",
      garage_rent: "গ্যারেজ ভাড়া",
      water_bill: "পানির বিল",
      electricity_bill: "বিদ্যুৎ বিল",
      misc: "বিবিধ",
    },
    incomeItems: {
      room_rent: "রুম ভাড়া",
      flat_income: "ফ্ল্যাট থেকে মোট আয়",
      motorcycle_rent: "মোটরসাইকেল ভাড়া",
    },
    serviceChargeSheetTitle: "সার্ভিস চার্জ আদায়ের শিট",
    managerSignature: "সভাপতি/সম্পাদক/কোষাধ্যক্ষ",
  },
  en: {
    brandName: "UBC Garden",
    brandLoc: "Kalishankarpur, Kushtia",
    dashboard: "Dashboard",
    billingSheet: "Billing Sheet",
    ledgers: "Income & Expense",
    reportsSettings: "Reports & Settings",
    totalCollection: "Total Collection",
    totalExpenses: "Total Expenses",
    cashSurplus: "Cash Surplus",
    collectionRate: "Collection Rate",
    month: "Month",
    year: "Year",
    activeMonth: "Current Month",
    no: "No",
    ownerName: "Flat Owner Name",
    flatNo: "Flat Number",
    electricity: "Electricity Bill",
    guard: "Guard Bill",
    sweeper: "Sweeper Bill",
    water: "Water Bill",
    garage: "Garage Bill",
    development: "Development Charge",
    festival: "Festival/Others",
    total: "Total Amount",
    signature: "Signature",
    status: "Status",
    paid: "Paid",
    unpaid: "Unpaid",
    saveSuccess: "Data saved successfully!",
    incomeStatement: "Income Statement",
    expenseStatement: "Expense Statement",
    addIncome: "Add Income Item",
    addExpense: "Add Expense Item",
    itemName: "Item Name",
    amount: "Amount",
    add: "Add",
    totalIncome: "Total Income:",
    totalExpense: "Total Expense:",
    surplus: "Surplus Money:",
    printStatement: "Print Monthly Statement",
    backupData: "Backup & Reset",
    exportData: "Export Data",
    importData: "Import Data",
    resetData: "Reset Data",
    dangerZone: "Danger Zone",
    confirmReset:
      "Are you sure you want to reset all data? This cannot be undone.",
    language: "Language",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    monthBn: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    costItems: {
      guard_salary: "Guard's Salary",
      sweeper_salary: "Sweeper's Salary",
      garage_rent: "Garage Rent",
      water_bill: "Water Bill",
      electricity_bill: "Electricity Bill",
      misc: "Miscellaneous",
    },
    incomeItems: {
      room_rent: "Room Rent",
      flat_income: "Total Income from Flats",
      motorcycle_rent: "Motorcycle Rent",
    },
    serviceChargeSheetTitle: "Service Charge Collection Sheet",
    managerSignature: "President/Secretary/Treasurer",
  },
};

// State Variables
let state = {
  currentMonth: new Date().getMonth(), // 0-11
  currentYear: new Date().getFullYear(),
  language: "bn",
  theme: "light",
  monthlyData: {}, // Key: "YYYY-MM" -> { flats: [], expenses: [], incomes: [] }
};

// Chart Instance
let trendChart = null;

// Number Conversions (English <-> Bengali)
const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
const enDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function toBnNum(number) {
  if (number === undefined || number === null) return "";
  const numStr = String(number);
  let result = "";
  for (let i = 0; i < numStr.length; i++) {
    const char = numStr[i];
    const index = enDigits.indexOf(char);
    if (index !== -1) {
      result += bnDigits[index];
    } else {
      result += char;
    }
  }
  return result;
}

function toEnNum(bnStr) {
  if (!bnStr) return 0;
  const str = String(bnStr);
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const index = bnDigits.indexOf(char);
    if (index !== -1) {
      result += enDigits[index];
    } else {
      result += char;
    }
  }
  const parsed = parseFloat(result);
  return isNaN(parsed) ? 0 : parsed;
}

// Format numbers according to active language
function formatNum(value) {
  return state.language === "bn" ? toBnNum(value) : String(value);
}

// Generate unique month key
function getMonthKey(year, month) {
  const m = String(month + 1).padStart(2, "0");
  return `${year}-${m}`;
}

// LocalStorage persistence functions
function saveStateToLocalStorage() {
  localStorage.setItem("ubc_garden_state", JSON.stringify(state));
}

function loadStateFromLocalStorage() {
  const saved = localStorage.getItem("ubc_garden_state");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      // Migrate or restore basic variables
      state.language = parsed.language || "bn";
      state.theme = parsed.theme || "light";
      state.currentMonth =
        parsed.currentMonth !== undefined
          ? parsed.currentMonth
          : new Date().getMonth();
      state.currentYear =
        parsed.currentYear !== undefined
          ? parsed.currentYear
          : new Date().getFullYear();
      state.monthlyData = parsed.monthlyData || {};
    } catch (e) {
      console.error("Failed to load local storage state", e);
    }
  }
}

// Initialize data for a specific month
function initMonthData(year, month) {
  const key = getMonthKey(year, month);
  if (!state.monthlyData[key]) {
    // If we have any existing month, copy the flat configuration & base fees from it (to avoid starting blank)
    const keys = Object.keys(state.monthlyData);
    if (keys.length > 0) {
      // Find the latest recorded month
      const sortedKeys = keys.sort();
      const templateKey = sortedKeys[sortedKeys.length - 1];
      const templateData = state.monthlyData[templateKey];

      state.monthlyData[key] = {
        flats: templateData.flats.map((f) => ({
          ...f,
          paid: false, // default new month unpaid
        })),
        expenses: templateData.expenses.map((e) => ({ ...e })),
        incomes: templateData.incomes.map((i) => ({ ...i })),
      };
    } else {
      // Otherwise, use seed values from window.UbcGardenSeeds
      state.monthlyData[key] = {
        flats: JSON.parse(JSON.stringify(window.UbcGardenSeeds.flats)),
        expenses: JSON.parse(JSON.stringify(window.UbcGardenSeeds.expenses)),
        incomes: JSON.parse(JSON.stringify(window.UbcGardenSeeds.incomes)),
      };
    }
  }
  // Make sure dynamic fields are computed
  recalculateTotals(key);
}

// Re-calculate all summaries and dynamic items
function recalculateTotals(monthKey) {
  const data = state.monthlyData[monthKey];
  if (!data) return;

  // 1. Calculate Flat Totals
  let totalFlatCollections = 0;
  let totalFlatReceivable = 0;

  data.flats.forEach((flat) => {
    // Make sure values are numbers
    flat.electricity = Number(flat.electricity) || 0;
    flat.guard = Number(flat.guard) || 0;
    flat.water = Number(flat.water) || 0;
    flat.sweeper = Number(flat.sweeper) || 0;
    flat.garage = Number(flat.garage) || 0;
    flat.development = Number(flat.development) || 0;
    flat.festival = Number(flat.festival) || 0;

    // Sum rows
    flat.total =
      flat.electricity +
      flat.guard +
      flat.water +
      flat.garage +
      flat.development +
      flat.festival;

    totalFlatReceivable += flat.total;
    if (flat.paid) {
      totalFlatCollections += flat.total;
    }
  });

  // 2. Update the dynamic flat income amount in the incomes list
  const flatIncomeObj = data.incomes.find((i) => i.key === "flat_income");
  if (flatIncomeObj) {
    flatIncomeObj.amount = totalFlatCollections;
  }

  // 3. Calculate Ledger Totals
  let totalIncome = 0;
  data.incomes.forEach((income) => {
    income.amount = Number(income.amount) || 0;
    totalIncome += income.amount;
  });

  let totalExpense = 0;
  data.expenses.forEach((exp) => {
    exp.amount = Number(exp.amount) || 0;
    totalExpense += exp.amount;
  });

  // Save totals in the month object for quick dashboard reads
  data.summary = {
    totalFlatReceivable,
    totalFlatCollections,
    totalIncome,
    totalExpense,
    surplus: totalIncome - totalExpense,
    paidCount: data.flats.filter((f) => f.paid).length,
    totalFlats: data.flats.length,
  };
}

// Get calculations for current active month
function getActiveData() {
  const key = getMonthKey(state.currentYear, state.currentMonth);
  initMonthData(state.currentYear, state.currentMonth);
  return state.monthlyData[key];
}

// Perform translation of HTML text strings
function translateUI() {
  const dictionary = translations[state.language];

  // Set data-translate elements
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (dictionary[key]) {
      el.textContent = dictionary[key];
    }
  });

  // Specific dynamic text replacements
  document.querySelector(".brand-name").textContent = dictionary.brandName;
  document.querySelector(".brand-subtitle").textContent = dictionary.brandLoc;

  // Populates Month & Year selectors
  populateSelectors();
}

function populateSelectors() {
  const monthSelect = document.getElementById("month-select");
  const yearSelect = document.getElementById("year-select");

  if (!monthSelect || !yearSelect) return;

  // Clear lists
  monthSelect.innerHTML = "";
  yearSelect.innerHTML = "";

  const mList = translations[state.language].monthBn;
  mList.forEach((mName, i) => {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = mName;
    if (i === state.currentMonth) opt.selected = true;
    monthSelect.appendChild(opt);
  });

  // Past 3 years and next 2 years
  const startYear = 2024;
  const endYear = new Date().getFullYear() + 2;
  for (let y = startYear; y <= endYear; y++) {
    const opt = document.createElement("option");
    opt.value = y;
    opt.textContent = formatNum(y);
    if (y === state.currentYear) opt.selected = true;
    yearSelect.appendChild(opt);
  }
}

// Views Navigation Controller
function switchView(viewId) {
  // Hide all
  document.querySelectorAll(".content-view").forEach((view) => {
    view.classList.remove("active");
  });
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active");
  });

  // Show target
  const targetView = document.getElementById(`${viewId}-view`);
  if (targetView) targetView.classList.add("active");

  const targetBtn = document.querySelector(
    `.nav-item button[onclick="switchView('${viewId}')"]`,
  );
  if (targetBtn) targetBtn.parentElement.classList.add("active");

  // Render targets
  if (viewId === "dashboard") {
    renderDashboard();
  } else if (viewId === "sheet") {
    renderBillingSheet();
  } else if (viewId === "ledgers") {
    renderLedgers();
  } else if (viewId === "settings") {
    renderSettings();
  }
}

// Render Dashboard View
function renderDashboard() {
  const data = getActiveData();
  const summary = data.summary;
  const dictionary = translations[state.language];

  // Set card contents
  document.getElementById("db-total-collection").textContent =
    "৳ " + formatNum(summary.totalIncome);
  document.getElementById("db-total-expenses").textContent =
    "৳ " + formatNum(summary.totalExpense);

  const surplusEl = document.getElementById("db-cash-surplus");
  surplusEl.textContent = "৳ " + formatNum(Math.abs(summary.surplus));
  if (summary.surplus >= 0) {
    surplusEl.className = "kpi-value text-success";
    document.getElementById("db-surplus-trend").innerHTML =
      `<i class="fa-solid fa-arrow-trend-up"></i> ${state.language === "bn" ? "উদ্বৃত্ত" : "Surplus"}`;
    document.getElementById("db-surplus-trend").className = "kpi-trend up";
  } else {
    surplusEl.className = "kpi-value text-danger";
    document.getElementById("db-surplus-trend").innerHTML =
      `<i class="fa-solid fa-arrow-trend-down"></i> ${state.language === "bn" ? "ঘাটতি" : "Deficit"}`;
    document.getElementById("db-surplus-trend").className = "kpi-trend down";
  }

  const rate =
    summary.totalFlats > 0
      ? Math.round((summary.paidCount / summary.totalFlats) * 100)
      : 0;
  document.getElementById("db-collection-rate").textContent =
    formatNum(rate) + "%";
  document.getElementById("db-rate-sub").textContent =
    state.language === "bn"
      ? `${toBnNum(summary.paidCount)} / ${toBnNum(summary.totalFlats)} ফ্ল্যাট পরিশোধিত`
      : `${summary.paidCount} / ${summary.totalFlats} Flats Paid`;

  // Draw or Update Charts
  renderTrendChart();
  renderDistributionChart();
}

// Generate Trend chart using Chart.js
function renderTrendChart() {
  const ctx = document.getElementById("trendChartCanvas");
  if (!ctx) return;

  // We gather data for the last 6 months
  const monthsData = [];
  const labels = [];
  const incomeData = [];
  const expenseData = [];

  const tempDate = new Date(state.currentYear, state.currentMonth);
  for (let i = 5; i >= 0; i--) {
    const d = new Date(tempDate.getFullYear(), tempDate.getMonth() - i, 1);
    const m = d.getMonth();
    const y = d.getFullYear();
    const key = getMonthKey(y, m);

    // Auto-init months if they don't exist
    initMonthData(y, m);
    const mData = state.monthlyData[key];

    monthsData.push(mData);
    labels.push(
      translations[state.language].monthBn[m] +
        " " +
        formatNum(String(y).slice(-2)),
    );
    incomeData.push(mData.summary.totalIncome);
    expenseData.push(mData.summary.totalExpense);
  }

  if (trendChart) {
    trendChart.destroy();
  }

  const isDark = state.theme === "dark";
  const gridColor = isDark ? "#334155" : "#e2e8f0";
  const textColor = isDark ? "#cbd5e1" : "#475569";

  trendChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: state.language === "bn" ? "মোট আয়" : "Total Income",
          data: incomeData,
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, "#14b8a6");
            gradient.addColorStop(0.5, "#0d9488");
            gradient.addColorStop(1, "#0f766e");
            return gradient;
          },
          borderRadius: 6,
          borderWidth: 0,
        },
        {
          label: state.language === "bn" ? "মোট খরচ" : "Total Expense",
          data: expenseData,
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, "#f87171");
            gradient.addColorStop(0.5, "#ef4444");
            gradient.addColorStop(1, "#dc2626");
            return gradient;
          },
          borderRadius: 6,
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: textColor,
            font: {
              family: state.language === "bn" ? "Hind Siliguri" : "Outfit",
              size: 12,
            },
          },
        },
        tooltip: {
          titleFont: {
            family: state.language === "bn" ? "Hind Siliguri" : "Outfit",
          },
          bodyFont: {
            family: state.language === "bn" ? "Hind Siliguri" : "Outfit",
          },
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: textColor,
            font: {
              family: state.language === "bn" ? "Hind Siliguri" : "Outfit",
              size: 11,
            },
          },
        },
        y: {
          grid: {
            color: gridColor,
          },
          ticks: {
            color: textColor,
            font: {
              family: state.language === "bn" ? "Hind Siliguri" : "Outfit",
              size: 11,
            },
          },
        },
      },
    },
  });
}

// Side breakdown chart
function renderDistributionChart() {
  const data = getActiveData();
  const container = document.getElementById("distribution-list");
  if (!container) return;

  container.innerHTML = "";

  // Display expenses distribution
  const total = data.summary.totalExpense || 1;

  data.expenses.forEach((exp) => {
    const pct = Math.round((exp.amount / total) * 100);
    const label =
      state.language === "bn"
        ? translations.bn.costItems[exp.key] || exp.nameBn
        : translations.en.costItems[exp.key] || exp.nameEn;

    const div = document.createElement("div");
    div.style.marginBottom = "1rem";
    div.innerHTML = `
      <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:0.25rem;">
        <span style="font-weight: 500;">${label}</span>
        <span style="color:var(--text-muted); font-weight:600;">৳${formatNum(exp.amount)} (${formatNum(pct)}%)</span>
      </div>
      <div style="width:100%; height:6px; background-color:var(--bg-tertiary); border-radius:3px; overflow:hidden;">
        <div style="width:${pct}%; height:100%; background: linear-gradient(to right, #f43f5e, #ef4444); border-radius:3px;"></div>
      </div>
    `;
    container.appendChild(div);
  });
}

// Render Flat Billing Sheet View
function renderBillingSheet() {
  const data = getActiveData();
  const tbody = document.getElementById("sheet-tbody");
  if (!tbody) return;

  tbody.innerHTML = "";

  // Headings mapping
  const dictionary = translations[state.language];

  // Populate dynamic header text
  document.getElementById("col-no").textContent = dictionary.no;
  document.getElementById("col-owner").textContent = dictionary.ownerName;
  document.getElementById("col-flat").textContent = dictionary.flatNo;
  document.getElementById("col-elec").textContent = dictionary.electricity;
  document.getElementById("col-guard").textContent = dictionary.guard;
  document.getElementById("col-sweeper").textContent = dictionary.sweeper;
  document.getElementById("col-water").textContent = dictionary.water;
  document.getElementById("col-garage").textContent = dictionary.garage;
  document.getElementById("col-dev").textContent = dictionary.development;
  document.getElementById("col-fest").textContent = dictionary.festival;
  document.getElementById("col-total").textContent = dictionary.total;
  document.getElementById("col-sig").textContent = dictionary.status;

  // Sum lists for columns
  let sumElec = 0;
  let sumGuard = 0;
  let sumSweeper = 0;
  let sumWater = 0;
  let sumGarage = 0;
  let sumDev = 0;
  let sumFest = 0;
  let sumTotal = 0;

  data.flats.forEach((flat, index) => {
    sumElec += flat.electricity;
    sumGuard += flat.guard;
    sumSweeper += flat.sweeper;
    sumWater += flat.water;
    sumGarage += flat.garage;
    sumDev += flat.development;
    sumFest += flat.festival;
    sumTotal += flat.total;

    const tr = document.createElement("tr");

    // Status badge class
    const statusText = flat.paid ? dictionary.paid : dictionary.unpaid;
    const statusClass = flat.paid ? "paid" : "unpaid";

    tr.innerHTML = `
      <td class="lang-bn">${formatNum(index + 1)}</td>
      <td>
        <input type="text" class="table-input ${state.language === "bn" ? "lang-bn" : ""}" value="${state.language === "bn" ? flat.nameBn : flat.nameEn}" onchange="updateFlatField(${flat.id}, 'name', this.value)">
      </td>
      <td class="lang-bn">
        <input type="text" class="table-input lang-bn" value="${state.language === "bn" ? flat.flatBn : flat.flatEn}" onchange="updateFlatField(${flat.id}, 'flatNo', this.value)">
      </td>
      <td>
        <input type="text" class="table-input num-input lang-bn" value="${formatNum(flat.electricity)}" onfocus="clearZero(this)" onblur="restoreZero(this)" onchange="updateFlatNumField(${flat.id}, 'electricity', this.value)">
      </td>
      <td>
        <input type="text" class="table-input num-input lang-bn" value="${formatNum(flat.guard)}" onfocus="clearZero(this)" onblur="restoreZero(this)" onchange="updateFlatNumField(${flat.id}, 'guard', this.value)">
      </td>
      <td>
        <input type="text" class="table-input num-input lang-bn" value="${formatNum(flat.sweeper)}" onfocus="clearZero(this)" onblur="restoreZero(this)" onchange="updateFlatNumField(${flat.id}, 'sweeper', this.value)">
      </td>
      <td>
        <input type="text" class="table-input num-input lang-bn" value="${formatNum(flat.water)}" onfocus="clearZero(this)" onblur="restoreZero(this)" onchange="updateFlatNumField(${flat.id}, 'water', this.value)">
      </td>
      <td>
        <input type="text" class="table-input num-input lang-bn" value="${formatNum(flat.garage)}" onfocus="clearZero(this)" onblur="restoreZero(this)" onchange="updateFlatNumField(${flat.id}, 'garage', this.value)">
      </td>
      <td>
        <input type="text" class="table-input num-input lang-bn" value="${formatNum(flat.development)}" onfocus="clearZero(this)" onblur="restoreZero(this)" onchange="updateFlatNumField(${flat.id}, 'development', this.value)">
      </td>
      <td>
        <input type="text" class="table-input num-input lang-bn" value="${formatNum(flat.festival)}" onfocus="clearZero(this)" onblur="restoreZero(this)" onchange="updateFlatNumField(${flat.id}, 'festival', this.value)">
      </td>
      <td class="lang-bn" style="text-align: right; font-weight: 700; padding-right: 1.5rem;">
        ৳${formatNum(flat.total)}
      </td>
      <td>
        <span class="badge ${statusClass}" onclick="togglePaidStatus(${flat.id})">
          <i class="fa-solid ${flat.paid ? "fa-circle-check" : "fa-regular fa-circle"}"></i>
          ${statusText}
        </span>
      </td>
    `;
    tbody.appendChild(tr);
  });

  // Add the totals row matching bottom table
  const totalRow = document.createElement("tr");
  totalRow.className = "row-total";
  totalRow.innerHTML = `
    <td colspan="3" style="text-align: right; font-weight: 800; padding-right:1rem;">${state.language === "bn" ? "মোটঃ" : "Total:"}</td>
    <td class="lang-bn" style="text-align: right; font-weight: 800; padding-right: 1.5rem;">৳${formatNum(sumElec)}</td>
    <td class="lang-bn" style="text-align: right; font-weight: 800; padding-right: 1.5rem;">৳${formatNum(sumGuard)}</td>
    <td class="lang-bn" style="text-align: right; font-weight: 800; padding-right: 1.5rem;">৳${formatNum(sumSweeper)}</td>
    <td class="lang-bn" style="text-align: right; font-weight: 800; padding-right: 1.5rem;">৳${formatNum(sumWater)}</td>
    <td class="lang-bn" style="text-align: right; font-weight: 800; padding-right: 1.5rem;">৳${formatNum(sumGarage)}</td>
    <td class="lang-bn" style="text-align: right; font-weight: 800; padding-right: 1.5rem;">৳${formatNum(sumDev)}</td>
    <td class="lang-bn" style="text-align: right; font-weight: 800; padding-right: 1.5rem;">৳${formatNum(sumFest)}</td>
    <td class="lang-bn" style="text-align: right; font-weight: 800; padding-right: 1.5rem;">৳${formatNum(sumTotal)}</td>
    <td></td>
  `;
  tbody.appendChild(totalRow);

  // Sync print area output
  updatePrintSheet();
}

// Empty cell on focus if 0
function clearZero(input) {
  const valEn = toEnNum(input.value);
  if (valEn === 0) {
    input.value = "";
  }
}

// Restore 0 on blur if empty
function restoreZero(input) {
  if (input.value.trim() === "") {
    input.value = formatNum(0);
  }
}

// Handle flat owner name & flat text updates
function updateFlatField(flatId, fieldName, newVal) {
  const data = getActiveData();
  const flat = data.flats.find((f) => f.id === flatId);
  if (!flat) return;

  if (state.language === "bn") {
    if (fieldName === "name") flat.nameBn = newVal;
    if (fieldName === "flatNo") flat.flatBn = newVal;
  } else {
    if (fieldName === "name") flat.nameEn = newVal;
    if (fieldName === "flatNo") flat.flatEn = newVal;
  }

  saveStateToLocalStorage();
}

// Handle flat fee amounts updates (converts BN numerals correctly)
function updateFlatNumField(flatId, fieldName, newVal) {
  const data = getActiveData();
  const flat = data.flats.find((f) => f.id === flatId);
  if (!flat) return;

  // Convert input value (which might be in Bengali numerals) to standard number
  const val = toEnNum(newVal);
  flat[fieldName] = val;

  // Trigger recalculations & refresh UI
  recalculateTotals(getMonthKey(state.currentYear, state.currentMonth));
  saveStateToLocalStorage();
  renderBillingSheet();
}

// Toggle Flat Paid status
function togglePaidStatus(flatId) {
  const data = getActiveData();
  const flat = data.flats.find((f) => f.id === flatId);
  if (!flat) return;

  flat.paid = !flat.paid;

  recalculateTotals(getMonthKey(state.currentYear, state.currentMonth));
  saveStateToLocalStorage();
  renderBillingSheet();
}

// Render Accounts Ledgers View (Expense & Income tables)
function renderLedgers() {
  const data = getActiveData();
  const dictionary = translations[state.language];

  // Set headings
  document.getElementById("heading-expenses").textContent =
    dictionary.expenseStatement;
  document.getElementById("heading-incomes").textContent =
    dictionary.incomeStatement;

  // 1. Render Expenses
  const expContainer = document.getElementById("expenses-list");
  expContainer.innerHTML = "";

  data.expenses.forEach((exp) => {
    const label =
      state.language === "bn"
        ? dictionary.costItems[exp.key] || exp.nameBn
        : dictionary.costItems[exp.key] || exp.nameEn;
    const div = document.createElement("div");
    div.className = "ledger-item";
    div.innerHTML = `
      <div class="ledger-item-info">
        <span class="ledger-item-name">${label}</span>
      </div>
      <div style="display:flex; align-items:center; gap:0.5rem;">
        <span style="font-weight:600; color:var(--text-muted);">৳</span>
        <input type="text" class="table-input num-input lang-bn ledger-item-val" style="width:110px; border-bottom:1px dashed var(--border);" 
               value="${formatNum(exp.amount)}" 
               onfocus="clearZero(this)" 
               onblur="restoreZero(this)"
               onchange="updateLedgerItem('expense', '${exp.key || exp.id}', this.value)">
        ${exp.key ? "" : `<button class="btn btn-sm btn-icon" style="color:var(--danger);" onclick="deleteLedgerItem('expense', ${exp.id})"><i class="fa-solid fa-trash"></i></button>`}
      </div>
    `;
    expContainer.appendChild(div);
  });

  // Total Expenses value
  document.getElementById("total-expense-val").textContent =
    "৳ " + formatNum(data.summary.totalExpense);

  // 2. Render Incomes
  const incContainer = document.getElementById("incomes-list");
  incContainer.innerHTML = "";

  data.incomes.forEach((inc) => {
    const label =
      state.language === "bn"
        ? dictionary.incomeItems[inc.key] || inc.nameBn
        : dictionary.incomeItems[inc.key] || inc.nameEn;
    const isCalculated = inc.isCalculated;

    const div = document.createElement("div");
    div.className = "ledger-item";
    div.innerHTML = `
      <div class="ledger-item-info">
        <span class="ledger-item-name">${label}</span>
        ${isCalculated ? `<small style="color:var(--accent-primary); font-size:0.75rem;">(${state.language === "bn" ? "শিট থেকে অটো-হিসাবকৃত" : "Auto-calculated from sheet"})</small>` : ""}
      </div>
      <div style="display:flex; align-items:center; gap:0.5rem;">
        <span style="font-weight:600; color:var(--text-muted);">৳</span>
        <input type="text" class="table-input num-input lang-bn ledger-item-val" style="width:110px; border-bottom:1px dashed var(--border);" 
               value="${formatNum(inc.amount)}" 
               ${isCalculated ? 'readonly disabled style="opacity:0.8; cursor:not-allowed;"' : ""}
               onfocus="clearZero(this)" 
               onblur="restoreZero(this)"
               onchange="updateLedgerItem('income', '${inc.key || inc.id}', this.value)">
        ${inc.key ? "" : `<button class="btn btn-sm btn-icon" style="color:var(--danger);" onclick="deleteLedgerItem('income', ${inc.id})"><i class="fa-solid fa-trash"></i></button>`}
      </div>
    `;
    incContainer.appendChild(div);
  });

  // Total Income & Surplus values
  document.getElementById("total-income-val").textContent =
    "৳ " + formatNum(data.summary.totalIncome);

  const surpVal = document.getElementById("ledger-surplus-val");
  surpVal.textContent = "৳ " + formatNum(data.summary.surplus);
  if (data.summary.surplus >= 0) {
    surpVal.className = "ledger-item-val text-success";
  } else {
    surpVal.className = "ledger-item-val text-danger";
  }

  // Update dynamic values in modal inputs if open
  document.getElementById("new-item-name").placeholder =
    state.language === "bn" ? "যেমনঃ মেরামত খরচ" : "e.g. Repair fee";

  updatePrintSheet();
}

// Update Ledger Amount values
function updateLedgerItem(type, key, newVal) {
  const data = getActiveData();
  const list = type === "expense" ? data.expenses : data.incomes;

  const val = toEnNum(newVal);

  // Find by key (system items) or ID (custom items)
  let item = list.find((x) => x.key === key);
  if (!item) {
    item = list.find((x) => String(x.id) === key);
  }

  if (item) {
    item.amount = val;
    recalculateTotals(getMonthKey(state.currentYear, state.currentMonth));
    saveStateToLocalStorage();
    renderLedgers();
  }
}

// Open ledger item form modals
function openAddLedgerModal(type) {
  const modal = document.getElementById("add-item-modal");
  const modalTitle = document.getElementById("modal-title");

  modal.setAttribute("data-type", type);
  modalTitle.textContent =
    type === "expense"
      ? state.language === "bn"
        ? "নতুন ব্যয় খাত যোগ করুন"
        : "Add Expense Item"
      : state.language === "bn"
        ? "নতুন আয় খাত যোগ করুন"
        : "Add Income Item";

  modal.classList.add("active");
}

function closeAddLedgerModal() {
  document.getElementById("add-item-modal").classList.remove("active");
  document.getElementById("new-item-name").value = "";
  document.getElementById("new-item-amount").value = "";
}

// Save Custom Ledger entries
function saveCustomLedgerItem() {
  const modal = document.getElementById("add-item-modal");
  const type = modal.getAttribute("data-type");

  const nameVal = document.getElementById("new-item-name").value.trim();
  const amountVal = toEnNum(document.getElementById("new-item-amount").value);

  if (!nameVal) return;

  const data = getActiveData();
  const list = type === "expense" ? data.expenses : data.incomes;

  const newItem = {
    id: Date.now(),
    nameBn: nameVal,
    nameEn: nameVal,
    amount: amountVal,
  };

  list.push(newItem);

  recalculateTotals(getMonthKey(state.currentYear, state.currentMonth));
  saveStateToLocalStorage();
  closeAddLedgerModal();
  renderLedgers();
}

function deleteLedgerItem(type, id) {
  const data = getActiveData();
  const list = type === "expense" ? data.expenses : data.incomes;

  const idx = list.findIndex((x) => x.id === id);
  if (idx !== -1) {
    list.splice(idx, 1);
    recalculateTotals(getMonthKey(state.currentYear, state.currentMonth));
    saveStateToLocalStorage();
    renderLedgers();
  }
}

// Render Settings & Archive View
function renderSettings() {
  const dictionary = translations[state.language];

  // Set toggle controls values
  document.getElementById("lang-switch-chk").checked = state.language === "en";
  document.getElementById("theme-switch-chk").checked = state.theme === "dark";
}

// Handles switching themes
function toggleTheme(isDark) {
  state.theme = isDark ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", state.theme);

  // Update icons
  const icon = document.getElementById("theme-toggle-btn").querySelector("i");
  if (state.theme === "dark") {
    icon.className = "fa-solid fa-sun";
  } else {
    icon.className = "fa-solid fa-moon";
  }

  saveStateToLocalStorage();
}

// Handles switching languages
function toggleLanguage(isEn) {
  state.language = isEn ? "en" : "bn";
  document.documentElement.setAttribute("lang", state.language);

  // Re-translate and re-render
  translateUI();

  // Refresh current view
  const activeViewEl = document.querySelector(".content-view.active");
  if (activeViewEl) {
    const viewId = activeViewEl.id.replace("-view", "");
    switchView(viewId);
  }

  saveStateToLocalStorage();
}

// Date selection changes
function onMonthChange(monthIdx) {
  state.currentMonth = parseInt(monthIdx);
  initMonthData(state.currentYear, state.currentMonth);
  saveStateToLocalStorage();

  // Refresh view
  const activeViewEl = document.querySelector(".content-view.active");
  if (activeViewEl) {
    const viewId = activeViewEl.id.replace("-view", "");
    switchView(viewId);
  }
}

function onYearChange(year) {
  state.currentYear = parseInt(year);
  initMonthData(state.currentYear, state.currentMonth);
  saveStateToLocalStorage();

  // Refresh view
  const activeViewEl = document.querySelector(".content-view.active");
  if (activeViewEl) {
    const viewId = activeViewEl.id.replace("-view", "");
    switchView(viewId);
  }
}

// JSON Backup Utilities
function exportDataAsJSON() {
  const dataStr =
    "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);

  const m = String(state.currentMonth + 1).padStart(2, "0");
  downloadAnchor.setAttribute(
    "download",
    `ubc_garden_backup_${state.currentYear}_${m}.json`,
  );
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

function importDataFromJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const parsed = JSON.parse(e.target.result);
      if (parsed.monthlyData) {
        state = parsed;
        saveStateToLocalStorage();

        // Re-apply language and theme
        document.documentElement.setAttribute(
          "data-theme",
          state.theme || "light",
        );
        document.documentElement.setAttribute("lang", state.language || "bn");
        toggleTheme(state.theme === "dark");
        toggleLanguage(state.language === "en");

        alert(
          state.language === "bn"
            ? "ডেটা সফলভাবে ইম্পোর্ট করা হয়েছে!"
            : "Data imported successfully!",
        );
      } else {
        alert(
          state.language === "bn"
            ? "ভুল ফাইল ফরম্যাট!"
            : "Invalid file format!",
        );
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };
  reader.readAsText(file);
}

function resetAllData() {
  const msg = translations[state.language].confirmReset;
  if (confirm(msg)) {
    localStorage.removeItem("ubc_garden_state");
    state.monthlyData = {};
    initMonthData(state.currentYear, state.currentMonth);
    saveStateToLocalStorage();

    // Refresh page
    window.location.reload();
  }
}

// Generate the Printable area PDF statement mirroring the exact original layout
function updatePrintSheet() {
  const printArea = document.getElementById("printable-area");
  if (!printArea) return;

  const data = getActiveData();
  const summary = data.summary;
  const dictionary = translations[state.language];

  // Headings
  const currentMonthName =
    translations[state.language].monthBn[state.currentMonth];
  const formattedYear = formatNum(state.currentYear);
  const monthYearStr = `${currentMonthName}, ${formattedYear}`;

  let sumElec = 0;
  let sumGuard = 0;
  let sumWater = 0;
  let sumGarage = 0;
  let sumDev = 0;
  let sumFest = 0;
  let sumTotal = 0;

  // 1. Build Flat Billings rows
  let flatsRowsHtml = "";
  data.flats.forEach((flat, i) => {
    sumElec += flat.electricity;
    sumGuard += flat.guard;
    sumWater += flat.water;
    sumGarage += flat.garage;
    sumDev += flat.development;
    sumFest += flat.festival;
    sumTotal += flat.total;

    const fName = state.language === "bn" ? flat.nameBn : flat.nameEn;
    const fNo = state.language === "bn" ? flat.flatBn : flat.flatEn;

    flatsRowsHtml += `
      <tr>
        <td>${toBnNum(i + 1)}</td>
        <td class="text-left">${fName}</td>
        <td>${fNo}</td>
        <td>${flat.electricity ? toBnNum(flat.electricity) : ""}</td>
        <td>${flat.guard ? toBnNum(flat.guard) : ""}</td>
        <td></td> <!-- Sweeper bill remains blank as in PDF -->
        <td>${flat.water ? toBnNum(flat.water) : ""}</td>
        <td>${flat.garage ? toBnNum(flat.garage) : ""}</td>
        <td>${flat.development ? toBnNum(flat.development) : ""}</td>
        <td>${flat.festival ? toBnNum(flat.festival) : ""}</td>
        <td>${toBnNum(flat.total)}</td>
        <td>${flat.paid ? (state.language === "bn" ? "পরিশোধিত" : "Paid") : ""}</td>
      </tr>
    `;
  });

  // Flat totals row
  const flatsTotalsHtml = `
    <tr class="total-row">
      <td colspan="3" style="text-align: right; font-weight:700;">মোটঃ</td>
      <td>${toBnNum(sumElec)}</td>
      <td>${toBnNum(sumGuard)}</td>
      <td></td>
      <td>${toBnNum(sumWater)}</td>
      <td>${toBnNum(sumGarage)}</td>
      <td>${toBnNum(sumDev)}</td>
      <td>${toBnNum(sumFest)}</td>
      <td>${toBnNum(sumTotal)}</td>
      <td></td>
    </tr>
  `;

  // 2. Build Expenses Statement Rows
  let expRowsHtml = "";
  data.expenses.forEach((exp) => {
    const label =
      state.language === "bn"
        ? translations.bn.costItems[exp.key] || exp.nameBn
        : translations.en.costItems[exp.key] || exp.nameEn;
    expRowsHtml += `
      <tr>
        <td class="text-left">${label}</td>
        <td>${exp.amount ? toBnNum(exp.amount) : ""}</td>
        <td></td>
      </tr>
    `;
  });

  // Fill in empty rows to match original image layout size
  for (let idx = data.expenses.length; idx < 7; idx++) {
    expRowsHtml += `
      <tr>
        <td>&nbsp;</td>
        <td></td>
        <td></td>
      </tr>
    `;
  }

  // Expense total row
  expRowsHtml += `
    <tr class="total-row">
      <td class="text-left" style="font-weight:700;">মোট টাকাঃ</td>
      <td>${toBnNum(summary.totalExpense)}</td>
      <td></td>
    </tr>
  `;

  // 3. Build Incomes Statement Rows
  let incRowsHtml = "";
  data.incomes.forEach((inc) => {
    const label =
      state.language === "bn"
        ? translations.bn.incomeItems[inc.key] || inc.nameBn
        : translations.en.incomeItems[inc.key] || inc.nameEn;
    incRowsHtml += `
      <tr>
        <td class="text-left">${label}</td>
        <td>${inc.amount ? toBnNum(inc.amount) : ""}</td>
        <td></td>
      </tr>
    `;
  });

  // Fill in empty rows to match original image layout size
  for (let idx = data.incomes.length; idx < 3; idx++) {
    incRowsHtml += `
      <tr>
        <td>&nbsp;</td>
        <td></td>
        <td></td>
      </tr>
    `;
  }

  // Aggregate values
  incRowsHtml += `
    <tr class="total-row">
      <td class="text-left" style="font-weight:700;">মোট আয়ঃ</td>
      <td>${toBnNum(summary.totalIncome)}</td>
      <td></td>
    </tr>
    <tr class="total-row">
      <td class="text-left" style="font-weight:700;">মোট খরচঃ</td>
      <td>${toBnNum(summary.totalExpense)}</td>
      <td></td>
    </tr>
    <tr class="total-row">
      <td class="text-left" style="font-weight:700;">উদ্বৃত্ত টাকাঃ</td>
      <td>${toBnNum(summary.surplus)}</td>
      <td></td>
    </tr>
  `;

  // Reassemble entire print view HTML structure
  printArea.innerHTML = `
    <div class="print-header">
      <h1 class="print-title">${translations.bn.brandName}</h1>
      <p class="print-subtitle">${translations.bn.brandLoc}</p>
      <p style="font-size:0.95rem; font-weight:700; margin-top:0.25rem;">মাস: ${monthYearStr}</p>
    </div>
    
    <table class="print-table">
      <thead>
        <tr>
          <th style="width: 4%;">${translations.bn.no}</th>
          <th style="width: 25%;">${translations.bn.ownerName}</th>
          <th style="width: 10%;">${translations.bn.flatNo}</th>
          <th style="width: 8%;">${translations.bn.electricity}</th>
          <th style="width: 8%;">${translations.bn.guard}</th>
          <th style="width: 8%;">${translations.bn.sweeper}</th>
          <th style="width: 8%;">${translations.bn.water}</th>
          <th style="width: 8%;">${translations.bn.garage}</th>
          <th style="width: 8%;">${translations.bn.development}</th>
          <th style="width: 8%;">${translations.bn.festival}</th>
          <th style="width: 10%;">${translations.bn.total}</th>
          <th style="width: 10%;">${translations.bn.signature}</th>
        </tr>
      </thead>
      <tbody>
        ${flatsRowsHtml}
        ${flatsTotalsHtml}
      </tbody>
    </table>

    <div class="print-meta-row">
      <span class="print-sheet-title">${translations.bn.serviceChargeSheetTitle}</span>
      <span class="print-signature-placeholder">${translations.bn.managerSignature}</span>
    </div>

    <div class="print-divider"></div>

    <div class="print-accounts-grid">
      <div>
        <h3 class="print-accounts-title">খরচ</h3>
        <table class="print-table">
          <tbody>
            ${expRowsHtml}
          </tbody>
        </table>
      </div>
      <div>
        <h3 class="print-accounts-title">আয়</h3>
        <table class="print-table">
          <tbody>
            ${incRowsHtml}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// Print Handler Trigger
function triggerPrint() {
  updatePrintSheet();
  window.print();
}

// Startup Initialization
window.addEventListener("DOMContentLoaded", () => {
  // Load configuration and cached records
  loadStateFromLocalStorage();

  // Set default theme from state
  document.documentElement.setAttribute("data-theme", state.theme);
  document.documentElement.setAttribute("lang", state.language);

  // Load theme styles
  toggleTheme(state.theme === "dark");

  // Ensure target month initialized
  initMonthData(state.currentYear, state.currentMonth);

  // Sync and render
  translateUI();
  switchView("dashboard");
});
