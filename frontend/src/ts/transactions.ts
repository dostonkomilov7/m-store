// ─── i18n ──────────────────────────────────────────────────────────────────

type Lang = "en" | "uz" | "cyril";

interface Translation {
  page_title: string;
  page_heading: string;
  nav_dashboard: string;
  nav_products: string;
  nav_transactions: string;
  nav_categories: string;
  nav_analytics: string;
  admin_label: string;
  admin_role: string;
  btn_add_transaction: string;
  kpi_total_input: string;
  kpi_total_output: string;
  kpi_gross_profit: string;
  kpi_profit_sub: string;
  kpi_total_txn: string;
  kpi_all_time: string;
  section_history: string;
  search_placeholder: string;
  filter_all: string;
  filter_input: string;
  filter_output: string;
  filter_all_products: string;
  btn_export: string;
  th_id: string;
  th_product: string;
  th_type: string;
  th_qty: string;
  th_price: string;
  th_total: string;
  th_date: string;
  th_actions: string;
  empty_msg: string;
  modal_title: string;
  label_product: string;
  label_qty: string;
  label_price: string;
  type_input: string;
  type_output: string;
  summary_total_cost: string;
  summary_stock: string;
  summary_after: string;
  btn_cancel: string;
  btn_save: string;
  btn_delete: string;
  toast_added: (name: string, type: string) => string;
  toast_deleted: (id: number) => string;
  stock_warning: (avail: number) => string;
  stock_overflow: string;
}

const TRANSLATIONS: Record<Lang, Translation> = {
  en: {
    page_title: "Market · Transactions",
    page_heading: "Transactions",
    nav_dashboard: "Dashboard",
    nav_products: "Products",
    nav_transactions: "Transactions",
    nav_categories: "Categories",
    nav_analytics: "Analytics",
    admin_label: "Muhammadjon",
    admin_role: "Admin",
    btn_add_transaction: "Add Transaction",
    kpi_total_input: "Total Input",
    kpi_total_output: "Total Output",
    kpi_gross_profit: "Gross Profit (UZS)",
    kpi_profit_sub: "revenue − cost",
    kpi_total_txn: "Total Transactions",
    kpi_all_time: "all time",
    section_history: "Transaction History",
    search_placeholder: "Search product…",
    filter_all: "All Types",
    filter_input: "INPUT",
    filter_output: "OUTPUT",
    filter_all_products: "All Products",
    btn_export: "Export CSV",
    th_id: "#",
    th_product: "Product",
    th_type: "Type",
    th_qty: "Quantity",
    th_price: "Unit Price",
    th_total: "Total",
    th_date: "Date",
    th_actions: "Actions",
    empty_msg: "No transactions found.",
    modal_title: "New Transaction",
    label_product: "Product",
    label_qty: "Quantity",
    label_price: "Unit Price (SUM)",
    type_input: "INPUT",
    type_output: "OUTPUT",
    summary_total_cost: "Total Amount",
    summary_stock: "Current Stock",
    summary_after: "Stock After",
    btn_cancel: "Cancel",
    btn_save: "Save",
    btn_delete: "Delete",
    toast_added: (name, type) => `✓ ${type} — "${name}" recorded`,
    toast_deleted: (id) => `Transaction #${id} deleted`,
    stock_warning: (avail) => `Only ${avail} units available`,
    stock_overflow: "Not enough stock!",
  },

  uz: {
    page_title: "Market · Tranzaksiyalar",
    page_heading: "Tranzaksiyalar",
    nav_dashboard: "Boshqaruv paneli",
    nav_products: "Mahsulotlar",
    nav_transactions: "Tranzaksiyalar",
    nav_categories: "Kategoriyalar",
    nav_analytics: "Tahlil",
    admin_label: "Muhammadjon",
    admin_role: "Admin",
    btn_add_transaction: "Tranzaksiya qo'shish",
    kpi_total_input: "Jami kirish",
    kpi_total_output: "Jami chiqish",
    kpi_gross_profit: "Yalpi foyda (SO'M)",
    kpi_profit_sub: "daromad − xarajat",
    kpi_total_txn: "Jami tranzaksiyalar",
    kpi_all_time: "barcha vaqt",
    section_history: "Tranzaksiya tarixi",
    search_placeholder: "Mahsulot qidirish…",
    filter_all: "Barchasi",
    filter_input: "KIRISH",
    filter_output: "CHIQISH",
    filter_all_products: "Barcha mahsulotlar",
    btn_export: "CSV yuklash",
    th_id: "#",
    th_product: "Mahsulot",
    th_type: "Turi",
    th_qty: "Miqdor",
    th_price: "Birlik narxi",
    th_total: "Jami",
    th_date: "Sana",
    th_actions: "Amallar",
    empty_msg: "Tranzaksiyalar topilmadi.",
    modal_title: "Yangi tranzaksiya",
    label_product: "Mahsulot",
    label_qty: "Miqdor",
    label_price: "Birlik narxi (SO'M)",
    type_input: "KIRISH",
    type_output: "CHIQISH",
    summary_total_cost: "Umumiy summa",
    summary_stock: "Joriy zaxira",
    summary_after: "Tranzaksiyadan keyin",
    btn_cancel: "Bekor qilish",
    btn_save: "Saqlash",
    btn_delete: "O'chirish",
    toast_added: (name, type) => `✓ ${type} — "${name}" qayd etildi`,
    toast_deleted: (id) => `#${id} tranzaksiya o'chirildi`,
    stock_warning: (avail) => `Faqat ${avail} dona mavjud`,
    stock_overflow: "Zaxira yetarli emas!",
  },

  cyril: {
    page_title: "Маркет · Трансакциялар",
    page_heading: "Трансакциялар",
    nav_dashboard: "Бошқарув панели",
    nav_products: "Маҳсулотлар",
    nav_transactions: "Трансакциялар",
    nav_categories: "Категориялар",
    nav_analytics: "Таҳлил",
    admin_label: "Муҳаммаджон",
    admin_role: "Админ",
    btn_add_transaction: "Трансакция қўшиш",
    kpi_total_input: "Жами кириш",
    kpi_total_output: "Жами чиқиш",
    kpi_gross_profit: "Ялпи фойда (сўм)",
    kpi_profit_sub: "даромад − харажат",
    kpi_total_txn: "Жами трансакциялар",
    kpi_all_time: "барча вақт",
    section_history: "Трансакция тарихи",
    search_placeholder: "Маҳсулот қидириш…",
    filter_all: "Барчаси",
    filter_input: "КИРИШ",
    filter_output: "ЧИҚИШ",
    filter_all_products: "Барча маҳсулотлар",
    btn_export: "CSV юклаш",
    th_id: "#",
    th_product: "Маҳсулот",
    th_type: "Тури",
    th_qty: "Миқдор",
    th_price: "Бирлик нархи",
    th_total: "Жами",
    th_date: "Сана",
    th_actions: "Амаллар",
    empty_msg: "Трансакциялар топилмади.",
    modal_title: "Янги трансакция",
    label_product: "Маҳсулот",
    label_qty: "Миқдор",
    label_price: "Бирлик нархи (сўм)",
    type_input: "КИРИШ",
    type_output: "ЧИҚИШ",
    summary_total_cost: "Умумий сумма",
    summary_stock: "Жорий захира",
    summary_after: "Трансакциядан кейин",
    btn_cancel: "Бекор қилиш",
    btn_save: "Сақлаш",
    btn_delete: "Ўчириш",
    toast_added: (name, type) => `✓ ${type} — "${name}" қайд этилди`,
    toast_deleted: (id) => `#${id} трансакция ўчирилди`,
    stock_warning: (avail) => `Фақат ${avail} дона мавжуд`,
    stock_overflow: "Захира етарли эмас!",
  }
};

let currentLang: Lang = "en";

function t(key: keyof Translation, ...args: (string | number)[]): string {
  const val = TRANSLATIONS[currentLang]?.[key] ?? TRANSLATIONS.en[key] ?? key;
  return typeof val === "function" ? (val as (...a: (string | number)[]) => string)(...args) : val as string;
}

function applyTranslations(): void {
  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n") as keyof Translation;
    el.textContent = t(key);
  });
  document.querySelectorAll<HTMLInputElement>("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.getAttribute("data-i18n-placeholder") as keyof Translation);
  });
  document.title = t("page_title");
}

// ─── Data ──────────────────────────────────────────────────────────────────

interface ProductName {
  uz: string;
  uz_cyr: string;
  en: string;
}

interface Product {
  id: number;
  name: ProductName;
  input_price: number;
  output_price: number;
  quantity: number;
}

type TransactionType = "INPUT" | "OUTPUT";

interface Transaction {
  id: number;
  product_id: number;
  type: TransactionType;
  quantity: number;
  price: number;
  created_at: string;
}

const PRODUCTS: Product[] = [
  { id: 1, name: { uz: "Simsiz quloqchinlar",  uz_cyr: "Симсиз қулоқчинлар",  en: "Wireless Headphones" }, input_price: 45,   output_price: 89.99,  quantity: 120 },
  { id: 2, name: { uz: "Yugurish poyabzali",   uz_cyr: "Югуриш пойабзали",    en: "Running Shoes"       }, input_price: 38,   output_price: 74.99,  quantity: 60  },
  { id: 3, name: { uz: "Qahva donlari 1kg",    uz_cyr: "Қаҳва донлари 1кг",   en: "Coffee Beans 1kg"    }, input_price: 12,   output_price: 22.50,  quantity: 300 },
  { id: 4, name: { uz: "Yoga matasi",          uz_cyr: "Йога матаси",          en: "Yoga Mat"            }, input_price: 18,   output_price: 35.00,  quantity: 80  },
  { id: 5, name: { uz: "Po'lat suv idishi",    uz_cyr: "Пўлат сув идиши",     en: "Steel Water Bottle"  }, input_price: 9.50, output_price: 19.99,  quantity: 200 },
];

let transactions: Transaction[] = [
  { id: 1, product_id: 1, type: "INPUT",  quantity: 50, price: 45,    created_at: "2024-11-01T09:00:00Z" },
  { id: 2, product_id: 3, type: "OUTPUT", quantity: 30, price: 22.50, created_at: "2024-11-03T11:20:00Z" },
  { id: 3, product_id: 2, type: "INPUT",  quantity: 20, price: 38,    created_at: "2024-11-05T14:30:00Z" },
  { id: 4, product_id: 5, type: "OUTPUT", quantity: 15, price: 19.99, created_at: "2024-11-07T08:45:00Z" },
  { id: 5, product_id: 4, type: "INPUT",  quantity: 40, price: 18,    created_at: "2024-11-10T16:00:00Z" },
  { id: 6, product_id: 1, type: "OUTPUT", quantity: 10, price: 89.99, created_at: "2024-11-12T10:15:00Z" },
];
let nextId = 7;

// ─── State ─────────────────────────────────────────────────────────────────

const PAGE_SIZE = 8;
let currentPage = 1;
let selectedType: TransactionType = "INPUT";

// ─── DOM Refs ──────────────────────────────────────────────────────────────

const modalBackdrop  = document.getElementById("modal-backdrop") as HTMLElement;
const openModalBtn   = document.getElementById("open-modal-btn") as HTMLButtonElement;
const closeModalBtn  = document.getElementById("close-modal-btn") as HTMLButtonElement;
const cancelBtn      = document.getElementById("cancel-btn") as HTMLButtonElement;
const saveBtn        = document.getElementById("save-btn") as HTMLButtonElement;
const searchInput    = document.getElementById("search-input") as HTMLInputElement;
const typeFilter     = document.getElementById("type-filter") as HTMLSelectElement;
const productFilter  = document.getElementById("product-filter") as HTMLSelectElement;
const exportBtn      = document.getElementById("export-btn") as HTMLButtonElement;
const tbody          = document.getElementById("txn-tbody") as HTMLTableSectionElement;
const emptyState     = document.getElementById("empty-state") as HTMLElement;
const paginationEl   = document.getElementById("pagination") as HTMLElement;
const topbarDate     = document.getElementById("topbar-date") as HTMLElement;

const fProduct  = document.getElementById("f-product") as HTMLSelectElement;
const fQuantity = document.getElementById("f-quantity") as HTMLInputElement;
const fPrice    = document.getElementById("f-price") as HTMLInputElement;

const errProduct  = document.getElementById("err-product") as HTMLElement;
const errQuantity = document.getElementById("err-quantity") as HTMLElement;
const errPrice    = document.getElementById("err-price") as HTMLElement;

const summaryTotal = document.getElementById("summary-total") as HTMLElement;
const summaryStock = document.getElementById("summary-stock") as HTMLElement;
const summaryAfter = document.getElementById("summary-after") as HTMLElement;

const kpiInputQty  = document.getElementById("kpi-input-qty") as HTMLElement;
const kpiInputVal  = document.getElementById("kpi-input-val") as HTMLElement;
const kpiOutputQty = document.getElementById("kpi-output-qty") as HTMLElement;
const kpiOutputVal = document.getElementById("kpi-output-val") as HTMLElement;
const kpiProfit    = document.getElementById("kpi-profit") as HTMLElement;
const kpiTotal     = document.getElementById("kpi-total") as HTMLElement;

const toast = document.getElementById("toast") as HTMLElement;

// ─── Init ──────────────────────────────────────────────────────────────────

function getLangKey(): keyof ProductName {
  if (currentLang === "uz") return "uz";
  if (currentLang === "cyril") return "uz_cyr";
  return "en";
}

function init(): void {
  topbarDate.textContent = new Date().toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  PRODUCTS.forEach(p => {
    const optFilter = document.createElement("option");
    optFilter.value = String(p.id);
    optFilter.textContent = p.name.en;
    productFilter.appendChild(optFilter);

    const optForm = document.createElement("option");
    optForm.value = String(p.id);
    optForm.dataset.input  = String(p.input_price);
    optForm.dataset.output = String(p.output_price);
    optForm.dataset.stock  = String(p.quantity);
    optForm.textContent = p.name.en;
    fProduct.appendChild(optForm);
  });

  document.querySelectorAll<HTMLButtonElement>(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentLang = btn.dataset.lang as Lang;
      document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      applyTranslations();
      renderAll();
    });
  });

  document.querySelectorAll<HTMLButtonElement>(".type-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".type-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedType = btn.dataset.type as TransactionType;
      autofillPrice();
      updateSummary();
    });
  });

  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);
  cancelBtn.addEventListener("click", closeModal);
  saveBtn.addEventListener("click", handleSave);
  modalBackdrop.addEventListener("click", (e: MouseEvent) => { if (e.target === modalBackdrop) closeModal(); });

  fProduct.addEventListener("change", () => { autofillPrice(); updateSummary(); });
  fQuantity.addEventListener("input", updateSummary);
  fPrice.addEventListener("input", updateSummary);

  searchInput.addEventListener("input", () => { currentPage = 1; renderTable(); });
  typeFilter.addEventListener("change", () => { currentPage = 1; renderTable(); });
  productFilter.addEventListener("change", () => { currentPage = 1; renderTable(); });

  exportBtn.addEventListener("click", exportCSV);

  renderAll();
  applyTranslations();
}

// ─── Modal ─────────────────────────────────────────────────────────────────

function openModal(): void {
  modalBackdrop.classList.add("open");
  fProduct.focus();
}

function closeModal(): void {
  modalBackdrop.classList.remove("open");
  resetForm();
}

function resetForm(): void {
  fProduct.value = "";
  fQuantity.value = "";
  fPrice.value = "";
  [fProduct, fQuantity, fPrice].forEach(el => el.classList.remove("error"));
  [errProduct, errQuantity, errPrice].forEach(el => el.textContent = "");
  summaryTotal.textContent = "—";
  summaryStock.textContent = "—";
  summaryAfter.textContent = "—";
  summaryAfter.style.color = "";
}

function autofillPrice(): void {
  const opt = fProduct.selectedOptions[0];
  if (!opt || !opt.value) return;
  const price = selectedType === "INPUT"
    ? parseFloat(opt.dataset.input!)
    : parseFloat(opt.dataset.output!);
  fPrice.value = isNaN(price) ? "" : price.toFixed(2);
}

// ─── Summary preview ───────────────────────────────────────────────────────

function updateSummary(): void {
  const opt = fProduct.selectedOptions[0];
  const qty = parseInt(fQuantity.value, 10);
  const price = parseFloat(fPrice.value);
  const stock = opt && opt.value ? parseInt(opt.dataset.stock!, 10) : NaN;

  summaryStock.textContent = isNaN(stock) ? "—" : stock.toLocaleString();

  if (!isNaN(qty) && !isNaN(price)) {
    summaryTotal.textContent = (qty * price).toLocaleString("en-US", { minimumFractionDigits: 2 }) + ' UZS';
  } else {
    summaryTotal.textContent = "—";
  }

  if (!isNaN(stock) && !isNaN(qty)) {
    const after = selectedType === "INPUT" ? stock + qty : stock - qty;
    summaryAfter.textContent = after.toLocaleString();
    summaryAfter.style.color = after < 0 ? "var(--danger)" : after <= 10 ? "var(--amber)" : "var(--green)";
  } else {
    summaryAfter.textContent = "—";
    summaryAfter.style.color = "";
  }
}

// ─── Validation ────────────────────────────────────────────────────────────

function validate(): boolean {
  let valid = true;

  function setErr(input: HTMLElement, span: HTMLElement, msg: string): void {
    input.classList.add("error"); span.textContent = msg; valid = false;
  }
  function clearErr(input: HTMLElement, span: HTMLElement): void {
    input.classList.remove("error"); span.textContent = "";
  }

  if (!fProduct.value) setErr(fProduct, errProduct, t("label_product") + " required.");
  else clearErr(fProduct, errProduct);

  const qty = parseInt(fQuantity.value, 10);
  if (isNaN(qty) || qty <= 0) setErr(fQuantity, errQuantity, "Enter a valid quantity.");
  else {
    if (selectedType === "OUTPUT") {
      const opt = fProduct.selectedOptions[0];
      const stock = parseInt(opt?.dataset.stock ?? "0", 10) || 0;
      if (qty > stock) {
        setErr(fQuantity, errQuantity, t("stock_overflow"));
        valid = false;
      } else clearErr(fQuantity, errQuantity);
    } else {
      clearErr(fQuantity, errQuantity);
    }
  }

  const price = parseFloat(fPrice.value);
  if (isNaN(price) || price < 0) setErr(fPrice, errPrice, "Enter a valid price.");
  else clearErr(fPrice, errPrice);

  return valid;
}

// ─── Save ──────────────────────────────────────────────────────────────────

function handleSave(): void {
  if (!validate()) return;

  const opt = fProduct.selectedOptions[0];
  const productId = parseInt(fProduct.value, 10);
  const qty = parseInt(fQuantity.value, 10);
  const price = parseFloat(fPrice.value);

  const txn: Transaction = {
    id: nextId++,
    product_id: productId,
    type: selectedType,
    quantity: qty,
    price,
    created_at: new Date().toISOString(),
  };

  const product = PRODUCTS.find(p => p.id === productId);
  if (product) {
    product.quantity = selectedType === "INPUT"
      ? product.quantity + qty
      : product.quantity - qty;
    document.querySelectorAll<HTMLOptionElement>(`#f-product option[value="${productId}"]`).forEach(o => {
      o.dataset.stock = String(product.quantity);
    });
  }

  transactions.unshift(txn);
  currentPage = 1;
  renderAll();
  closeModal();
  showToast(t("toast_added", opt.textContent!, selectedType));
}

// ─── Delete ────────────────────────────────────────────────────────────────

function deleteTransaction(id: number): void {
  transactions = transactions.filter(tx => tx.id !== id);
  if (currentPage > Math.ceil(filtered().length / PAGE_SIZE)) currentPage = 1;
  renderAll();
  showToast(t("toast_deleted", id));
}
(window as any).deleteTransaction = deleteTransaction;

// ─── Filter & paginate ─────────────────────────────────────────────────────

function filtered(): Transaction[] {
  const query = searchInput.value.trim().toLowerCase();
  const typeVal = typeFilter.value as TransactionType | "";
  const prodVal = productFilter.value ? parseInt(productFilter.value, 10) : null;

  return transactions.filter(tx => {
    const product = PRODUCTS.find(p => p.id === tx.product_id);
    const name = product ? product.name[getLangKey()].toLowerCase() : "";
    const matchSearch = name.includes(query);
    const matchType   = !typeVal || tx.type === typeVal;
    const matchProd   = prodVal === null || tx.product_id === prodVal;
    return matchSearch && matchType && matchProd;
  });
}

// ─── KPIs ──────────────────────────────────────────────────────────────────

function renderKPIs(): void {
  const inputs  = transactions.filter(tx => tx.type === "INPUT");
  const outputs = transactions.filter(tx => tx.type === "OUTPUT");

  const inputQty  = inputs.reduce((s, tx) => s + tx.quantity, 0);
  const outputQty = outputs.reduce((s, tx) => s + tx.quantity, 0);
  const inputVal  = inputs.reduce((s, tx) => s + tx.quantity * tx.price, 0);
  const outputVal = outputs.reduce((s, tx) => s + tx.quantity * tx.price, 0);
  const profit    = outputVal - inputVal;

  kpiInputQty.textContent  = inputQty.toLocaleString();
  kpiInputVal.textContent  = fmt(inputVal) + " UZS";
  kpiOutputQty.textContent = outputQty.toLocaleString();
  kpiOutputVal.textContent = fmt(outputVal) + " UZS";
  kpiProfit.textContent    = (profit >= 0 ? "+" : "") + fmt(Math.abs(profit));
  kpiProfit.style.color    = profit >= 0 ? "var(--amber)" : "var(--danger)";
  kpiTotal.textContent     = transactions.length.toLocaleString();
}

// ─── Table ─────────────────────────────────────────────────────────────────

function renderTable(): void {
  const rows = filtered();
  const totalPages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
  if (currentPage > totalPages) currentPage = totalPages;

  const pageRows = rows.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  if (rows.length === 0) {
    tbody.innerHTML = "";
    emptyState.classList.add("visible");
    paginationEl.innerHTML = "";
    return;
  }
  emptyState.classList.remove("visible");

  tbody.innerHTML = pageRows.map((tx, i) => {
    const product = PRODUCTS.find(p => p.id === tx.product_id);
    const name = product ? escHtml(product.name[getLangKey()]) : "Unknown";
    const total = tx.quantity * tx.price;
    const date = new Date(tx.created_at).toLocaleDateString("en-GB", {
      day: "2-digit", month: "short", year: "numeric"
    });
    const rowNum = (currentPage - 1) * PAGE_SIZE + i + 1;

    const typeSvg = tx.type === "INPUT"
      ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg>`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/></svg>`;

    const typeLabel = tx.type === "INPUT" ? t("type_input") : t("type_output");

    return `
      <tr>
        <td style="color:var(--text-muted);font-size:0.8rem">${rowNum}</td>
        <td class="product-name-cell">${name}</td>
        <td><span class="type-badge type-badge--${tx.type}">${typeSvg}${typeLabel}</span></td>
        <td>${tx.quantity.toLocaleString()}</td>
        <td>${fmt(tx.price)}</td>
        <td class="total-cell">${fmt(total)}</td>
        <td class="date-cell">${date}</td>
        <td><button class="btn--danger-sm" onclick="deleteTransaction(${tx.id})">${t("btn_delete")}</button></td>
      </tr>
    `;
  }).join("");

  renderPagination(totalPages);
}

function renderPagination(totalPages: number): void {
  if (totalPages <= 1) { paginationEl.innerHTML = ""; return; }

  let html = `<button class="page-btn" onclick="goPage(${currentPage - 1})" ${currentPage === 1 ? "disabled" : ""}>‹</button>`;
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn ${i === currentPage ? "active" : ""}" onclick="goPage(${i})">${i}</button>`;
  }
  html += `<button class="page-btn" onclick="goPage(${currentPage + 1})" ${currentPage === totalPages ? "disabled" : ""}>›</button>`;
  paginationEl.innerHTML = html;
}

function goPage(n: number): void {
  currentPage = n;
  renderTable();
}
(window as any).goPage = goPage;

// ─── Export CSV ────────────────────────────────────────────────────────────

function exportCSV(): void {
  const rows = filtered();
  const header = ["ID", "Product", "Type", "Quantity", "Unit Price", "Total", "Date"];
  const lines = [header.join(",")];

  rows.forEach(tx => {
    const product = PRODUCTS.find(p => p.id === tx.product_id);
    const name = product ? `"${product.name[getLangKey()]}"` : "Unknown";
    const date = new Date(tx.created_at).toLocaleDateString("en-GB");
    lines.push([tx.id, name, tx.type, tx.quantity, tx.price.toFixed(2), (tx.quantity * tx.price).toFixed(2), date].join(","));
  });

  const blob = new Blob([lines.join("\n")], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "transactions.csv"; a.click();
  URL.revokeObjectURL(url);
}

// ─── Render All ────────────────────────────────────────────────────────────

function renderAll(): void { renderKPIs(); renderTable(); }

// ─── Toast ─────────────────────────────────────────────────────────────────

let toastTimer: ReturnType<typeof setTimeout> | null = null;

function showToast(msg: string): void {
  toast.textContent = msg;
  toast.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

// ─── Helpers ───────────────────────────────────────────────────────────────

function fmt(n: number): string {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function escHtml(str: string): string {
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

// ─── Boot ──────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", init);

export {};
