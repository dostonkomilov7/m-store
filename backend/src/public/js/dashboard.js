let products = [];
let nextId = 1;

const CATEGORIES = [
  { id: 1, category_name: "Electronics" },
  { id: 2, category_name: "Clothing" },
  { id: 3, category_name: "Food & Beverage" },
  { id: 4, category_name: "Home & Garden" },
  { id: 5, category_name: "Sports" },
  { id: 6, category_name: "Books" },
];

// ─── i18n ────────────────────────────────────────────────────────────────────

const TRANSLATIONS = {
  en: {
    page_heading: "Dashboard",
    btn_add_product: "Add Product",
    kpi_total_products: "Total Products", kpi_products_sub: "items in catalog",
    kpi_total_stock: "Total Stock", kpi_stock_sub: "units available",
    kpi_inv_value: "Inventory Value", kpi_value_sub: "at input price",
    kpi_pot_revenue: "Potential Revenue", kpi_revenue_sub: "at output price",
    section_products: "Products",
    search_placeholder: "Search products…",
    th_product: "Product", th_category: "Category", th_stock: "Stock",
    th_buy: "Buy Price", th_sell: "Sell Price", th_margin: "Margin", th_actions: "Actions",
    modal_title: "Add New Product",
    label_name: "Product Name", label_buy: "Buy Price ($)",
    label_sell: "Sell Price ($)", label_qty: "Quantity", label_category: "Category",
    btn_cancel: "Cancel", btn_save: "Save Product",
    margin_preview: "Margin Preview",
    preview_profit: "Profit per unit", preview_margin: "Margin %",
    preview_stock_val: "Total stock value (buy)",
    nav_dashboard: "Dashboard", nav_products: "Products",
    nav_transactions: "Transactions", nav_categories: "Categories", nav_analytics: "Analytics",
    toast_added: (name) => `✓ "${name}" added successfully`,
    toast_removed: (name) => `Removed "${name}"`,
    btn_remove: "Remove",
  },
  uz: {
    page_heading: "Boshqaruv paneli",
    btn_add_product: "Mahsulot qo'shish",
    kpi_total_products: "Jami mahsulotlar", kpi_products_sub: "katalogdagi tovarlar",
    kpi_total_stock: "Jami zaxira", kpi_stock_sub: "mavjud birliklar",
    kpi_inv_value: "Inventar qiymati", kpi_value_sub: "xarid narxida",
    kpi_pot_revenue: "Potensial daromad", kpi_revenue_sub: "sotuv narxida",
    section_products: "Mahsulotlar",
    search_placeholder: "Mahsulot qidirish…",
    th_product: "Mahsulot", th_category: "Kategoriya", th_stock: "Zaxira",
    th_buy: "Xarid narxi", th_sell: "Sotuv narxi", th_margin: "Marjа", th_actions: "Amallar",
    modal_title: "Yangi mahsulot qo'shish",
    label_name: "Mahsulot nomi", label_buy: "Xarid narxi ($)",
    label_sell: "Sotuv narxi ($)", label_qty: "Miqdor", label_category: "Kategoriya",
    btn_cancel: "Bekor qilish", btn_save: "Saqlash",
    margin_preview: "Marjа ko'rinishi",
    preview_profit: "Birlik foydasi", preview_margin: "Marjа %",
    preview_stock_val: "Umumiy zaxira qiymati (xarid)",
    nav_dashboard: "Boshqaruv paneli", nav_products: "Mahsulotlar",
    nav_transactions: "Tranzaksiyalar", nav_categories: "Kategoriyalar", nav_analytics: "Tahlil",
    toast_added: (name) => `✓ "${name}" qo'shildi`,
    toast_removed: (name) => `"${name}" o'chirildi`,
    btn_remove: "O'chirish",
  },
  cyril: {
    page_heading: "Бошқарув панели",
    btn_add_product: "Маҳсулот қўшиш",
    kpi_total_products: "Жами маҳсулотлар", kpi_products_sub: "каталогдаги товарлар",
    kpi_total_stock: "Жами захира", kpi_stock_sub: "мавжуд бирликлар",
    kpi_inv_value: "Инвентар қиймати", kpi_value_sub: "харид нархида",
    kpi_pot_revenue: "Потенсиал даромад", kpi_revenue_sub: "сотув нархида",
    section_products: "Маҳсулотлар",
    search_placeholder: "Маҳсулот қидириш…",
    th_product: "Маҳсулот", th_category: "Категория", th_stock: "Захира",
    th_buy: "Харид нархи", th_sell: "Сотув нархи", th_margin: "Маржа", th_actions: "Амаллар",
    modal_title: "Янги маҳсулот қўшиш",
    label_name: "Маҳсулот номи", label_buy: "Харид нархи ($)",
    label_sell: "Сотув нархи ($)", label_qty: "Миқдор", label_category: "Категория",
    btn_cancel: "Бекор қилиш", btn_save: "Сақлаш",
    margin_preview: "Маржа кўриниши",
    preview_profit: "Бирлик фойдаси", preview_margin: "Маржа %",
    preview_stock_val: "Умумий захира қиймати (харид)",
    nav_dashboard: "Бошқарув панели", nav_products: "Маҳсулотлар",
    nav_transactions: "Трансакциялар", nav_categories: "Категориялар", nav_analytics: "Таҳлил",
    toast_added: (name) => `✓ "${name}" қўшилди`,
    toast_removed: (name) => `"${name}" ўчирилди`,
    btn_remove: "Ўчириш",
  }
};

let currentLang = "en";

function t(key, ...args) {
  const val = TRANSLATIONS[currentLang]?.[key] ?? TRANSLATIONS.en[key] ?? key;
  return typeof val === "function" ? val(...args) : val;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
  });
}

const modalBackdrop = document.getElementById("modal-backdrop");
const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const cancelBtn = document.getElementById("cancel-btn");
const saveBtn = document.getElementById("save-btn");

const fName = document.getElementById("f-name");
const fInputPrice = document.getElementById("f-input-price");
const fOutputPrice = document.getElementById("f-output-price");
const fQuantity = document.getElementById("f-quantity");
const fCategory = document.getElementById("f-category");

const errName = document.getElementById("err-name");
const errInputPrice = document.getElementById("err-input-price");
const errOutputPrice = document.getElementById("err-output-price");
const errQuantity = document.getElementById("err-quantity");
const errCategory = document.getElementById("err-category");

const previewProfit = document.getElementById("preview-profit");
const previewMargin = document.getElementById("preview-margin");
const previewStockValue = document.getElementById("preview-stock-value");
const previewBar = document.getElementById("preview-bar");

const tbody = document.getElementById("products-tbody");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");

const kpiTotal = document.getElementById("kpi-total");
const kpiStock = document.getElementById("kpi-stock");
const kpiValue = document.getElementById("kpi-value");
const kpiRevenue = document.getElementById("kpi-revenue");

const toast = document.getElementById("toast");
const topbarDate = document.getElementById("topbar-date");

function init() {
  topbarDate.textContent = new Date().toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  CATEGORIES.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = String(cat.id);
    opt.textContent = cat.category_name;
    categoryFilter.appendChild(opt);
  });

  const samples = [
    { product_name: "Wireless Headphones", input_price: 45, output_price: 89.99, quantity: 120, category_id: 1 },
    { product_name: "Running Shoes", input_price: 38, output_price: 74.99, quantity: 60, category_id: 5 },
    { product_name: "Coffee Beans 1kg", input_price: 12, output_price: 22.50, quantity: 300, category_id: 3 },
  ];
  samples.forEach(s => products.push({ ...s, id: nextId++, created_at: new Date().toISOString() }));

  renderAll();

  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);
  cancelBtn.addEventListener("click", closeModal);
  saveBtn.addEventListener("click", handleSave);
  modalBackdrop.addEventListener("click", (e) => { if (e.target === modalBackdrop) closeModal(); });

  fInputPrice.addEventListener("input", updatePreview);
  fOutputPrice.addEventListener("input", updatePreview);
  fQuantity.addEventListener("input", updatePreview);

  searchInput.addEventListener("input", renderTable);
  categoryFilter.addEventListener("change", renderTable);

  // Language switcher
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentLang = btn.dataset.lang;
      document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      applyTranslations();
      renderAll(); // re-renders table rows so "Remove" button text updates too
    });
  });

  applyTranslations(); // call once at end of init
}

function openModal() { modalBackdrop.classList.add("open"); fName.focus(); }
function closeModal() { modalBackdrop.classList.remove("open"); resetForm(); }

function resetForm() {
  [fName, fInputPrice, fOutputPrice, fQuantity].forEach(el => { el.value = ""; el.classList.remove("error"); });
  fCategory.value = "";
  fCategory.classList.remove("error");
  [errName, errInputPrice, errOutputPrice, errQuantity, errCategory].forEach(el => el.textContent = "");
  resetPreview();
}

function validate() {
  let valid = true;
  const setErr = (input, span, msg) => { input.classList.add("error"); span.textContent = msg; valid = false; };
  const clearErr = (input, span) => { input.classList.remove("error"); span.textContent = ""; };

  const name = fName.value.trim();
  if (!name) setErr(fName, errName, "Product name is required.");
  else if (name.length < 2) setErr(fName, errName, "Name must be at least 2 characters.");
  else clearErr(fName, errName);

  const inp = parseFloat(fInputPrice.value);
  if (isNaN(inp) || fInputPrice.value === "") setErr(fInputPrice, errInputPrice, "Enter a valid buy price.");
  else if (inp < 0) setErr(fInputPrice, errInputPrice, "Price cannot be negative.");
  else clearErr(fInputPrice, errInputPrice);

  const out = parseFloat(fOutputPrice.value);
  if (isNaN(out) || fOutputPrice.value === "") setErr(fOutputPrice, errOutputPrice, "Enter a valid sell price.");
  else if (out < 0) setErr(fOutputPrice, errOutputPrice, "Price cannot be negative.");
  else clearErr(fOutputPrice, errOutputPrice);

  const qty = parseInt(fQuantity.value, 10);
  if (isNaN(qty) || fQuantity.value === "") setErr(fQuantity, errQuantity, "Enter a valid quantity.");
  else if (qty < 0) setErr(fQuantity, errQuantity, "Quantity cannot be negative.");
  else clearErr(fQuantity, errQuantity);

  if (!fCategory.value) setErr(fCategory, errCategory, "Select a category.");
  else clearErr(fCategory, errCategory);

  return valid;
}


function handleSave() {
  if (!validate()) return;
  const product = {
    id: nextId++,
    product_name: fName.value.trim(),
    input_price: parseFloat(fInputPrice.value),
    output_price: parseFloat(fOutputPrice.value),
    quantity: parseInt(fQuantity.value, 10),
    category_id: parseInt(fCategory.value, 10),
    created_at: new Date().toISOString(),
  };
  products.push(product);
  renderAll();
  closeModal();
  showToast(`✓ "${product.product_name}" added successfully`);
}

function deleteProduct(id) {
  const p = products.find(p => p.id === id);
  if (!p) return;
  products = products.filter(p => p.id !== id);
  renderAll();
  showToast(`Removed "${p.product_name}"`);
}
window.deleteProduct = deleteProduct;

function updatePreview() {
  const inp = parseFloat(fInputPrice.value);
  const out = parseFloat(fOutputPrice.value);
  const qty = parseInt(fQuantity.value, 10);
  if (isNaN(inp) || isNaN(out)) { resetPreview(); return; }
  const profit = out - inp;
  const marginPct = inp > 0 ? (profit / inp) * 100 : 0;
  const stockVal = !isNaN(qty) ? inp * qty : 0;
  previewProfit.textContent = `$${profit.toFixed(2)}`;
  previewProfit.style.color = profit >= 0 ? "var(--green)" : "var(--danger)";
  previewMargin.textContent = `${marginPct.toFixed(1)}%`;
  previewMargin.style.color = marginPct >= 0 ? "var(--green)" : "var(--danger)";
  previewStockValue.textContent = `$${stockVal.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
  const barPct = Math.min(Math.max(marginPct, 0), 100);
  previewBar.style.width = `${barPct}%`;
  previewBar.style.background = marginPct < 0 ? "var(--danger)" : marginPct < 20 ? "var(--amber)" : "var(--green)";
}

function resetPreview() {
  previewProfit.textContent = "—"; previewProfit.style.color = "";
  previewMargin.textContent = "—"; previewMargin.style.color = "";
  previewStockValue.textContent = "—";
  previewBar.style.width = "0%";
}

function getCategoryName(id) { return CATEGORIES.find(c => c.id === id)?.category_name ?? "Unknown"; }
function fmt(n) { return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
function escHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function renderTable() {
  const query = searchInput.value.trim().toLowerCase();
  const catId = categoryFilter.value ? parseInt(categoryFilter.value, 10) : null;
  const filtered = products.filter(p => {
    return p.product_name.toLowerCase().includes(query) && (catId === null || p.category_id === catId);
  });
  if (filtered.length === 0) { tbody.innerHTML = ""; emptyState.classList.add("visible"); return; }
  emptyState.classList.remove("visible");
  tbody.innerHTML = filtered.map((p, i) => {
    const margin = p.input_price > 0 ? ((p.output_price - p.input_price) / p.input_price) * 100 : 0;
    return `<tr>
      <td style="color:var(--text-muted);font-size:0.8rem">${i + 1}</td>
      <td class="product-name-cell">${escHtml(p.product_name)}</td>
      <td><span class="badge badge--category">${escHtml(getCategoryName(p.category_id))}</span></td>
      <td class="stock-cell ${p.quantity <= 10 ? "stock-low" : "stock-ok"}">${p.quantity.toLocaleString()}</td>
      <td>$${fmt(p.input_price)}</td>
      <td>$${fmt(p.output_price)}</td>
      <td class="margin-cell ${margin >= 0 ? "margin-positive" : "margin-negative"}">${margin.toFixed(1)}%</td>
      <td><button class="btn--danger-sm" onclick="deleteProduct(${p.id})">${t("btn_remove")}</button></td>
      
    </tr>`;
  }).join("");
}

function renderKPIs() {
  kpiTotal.textContent = products.length.toString();
  kpiStock.textContent = products.reduce((s, p) => s + p.quantity, 0).toLocaleString();
  kpiValue.textContent = "$" + products.reduce((s, p) => s + p.input_price * p.quantity, 0).toLocaleString("en-US", { maximumFractionDigits: 0 });
  kpiRevenue.textContent = "$" + products.reduce((s, p) => s + p.output_price * p.quantity, 0).toLocaleString("en-US", { maximumFractionDigits: 0 });
}

function renderAll() { renderTable(); renderKPIs(); }

let toastTimer = null;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

document.addEventListener("DOMContentLoaded", init);
