// ─── Types ────────────────────────────────────────────────────────────────────
const API_URL = import.meta.env.VITE_API_URL;

// ─── i18n ────────────────────────────────────────────────────────────────────

const TRANSLATIONS: Record<string, Record<string, string | ((...a: any[]) => string)>> = {
    en: {
        page_heading: "Dashboard",
        btn_add_product: "Add Product",
        kpi_total_products: "Total Products", kpi_products_sub: "items in catalog",
        kpi_total_stock: "Total Stock", kpi_stock_sub: "units available",
        kpi_inv_value: "Inventory Value in SUM", kpi_value_sub: "at input price",
        kpi_pot_revenue: "Potential Revenue in SUM", kpi_revenue_sub: "at output price",
        section_products: "Products",
        search_placeholder: "Search products…",
        th_product: "Product", th_category: "Category", th_stock: "Stock",
        th_buy: "Buy Price", th_sell: "Sell Price", th_margin: "Margin", th_actions: "Actions",
        modal_title: "Add New Product",
        label_name: "Product Name", label_buy: "Buy Price (sum)",
        label_sell: "Sell Price (sum)", label_qty: "Quantity", label_category: "Category",
        btn_cancel: "Cancel", btn_save: "Save Product",
        margin_preview: "Margin Preview (SUM)",
        preview_profit: "Profit per unit", preview_margin: "Margin %",
        preview_stock_val: "Total stock value (buy)",
        nav_dashboard: "Dashboard", nav_products: "Products",
        nav_transactions: "Transactions", nav_categories: "Categories", nav_analytics: "Analytics",
        toast_added: (name: string) => `✓ "${name}" added successfully`,
        toast_removed: (name: string) => `Removed "${name}"`,
        btn_remove: "Remove",
    },
    uz: {
        page_heading: "Boshqaruv paneli",
        btn_add_product: "Mahsulot qo'shish",
        kpi_total_products: "Jami mahsulotlar", kpi_products_sub: "katalogdagi tovarlar",
        kpi_total_stock: "Jami zaxira", kpi_stock_sub: "mavjud birliklar",
        kpi_inv_value: "Inventar qiymati (SO'M)", kpi_value_sub: "xarid narxida",
        kpi_pot_revenue: "Potensial daromad (SO'M)", kpi_revenue_sub: "sotuv narxida",
        section_products: "Mahsulotlar",
        search_placeholder: "Mahsulot qidirish…",
        th_product: "Mahsulot", th_category: "Kategoriya", th_stock: "Zaxira",
        th_buy: "Xarid narxi", th_sell: "Sotuv narxi", th_margin: "Marjа", th_actions: "Amallar",
        modal_title: "Yangi mahsulot qo'shish",
        label_name: "Mahsulot nomi", label_buy: "Xarid narxi (SO'M)",
        label_sell: "Sotuv narxi (SO'M)", label_qty: "Miqdor", label_category: "Kategoriya",
        btn_cancel: "Bekor qilish", btn_save: "Saqlash",
        margin_preview: "Marjа ko'rinishi (SO'M)",
        preview_profit: "Birlik foydasi", preview_margin: "Marjа %",
        preview_stock_val: "Umumiy zaxira qiymati (xarid)",
        nav_dashboard: "Boshqaruv paneli", nav_products: "Mahsulotlar",
        nav_transactions: "Tranzaksiyalar", nav_categories: "Kategoriyalar", nav_analytics: "Tahlil",
        toast_added: (name: string) => `✓ "${name}" qo'shildi`,
        toast_removed: (name: string) => `"${name}" o'chirildi`,
        btn_remove: "O'chirish",
    },
    cyril: {
        page_heading: "Бошқарув панели",
        btn_add_product: "Маҳсулот қўшиш",
        kpi_total_products: "Жами маҳсулотлар", kpi_products_sub: "каталогдаги товарлар",
        kpi_total_stock: "Жами захира", kpi_stock_sub: "мавжуд бирликлар",
        kpi_inv_value: "Инвентар қиймати (сўм)", kpi_value_sub: "харид нархида",
        kpi_pot_revenue: "Потенсиал даромад (сўм)", kpi_revenue_sub: "сотув нархида",
        section_products: "Маҳсулотлар",
        search_placeholder: "Маҳсулот қидириш…",
        th_product: "Маҳсулот", th_category: "Категория", th_stock: "Захира",
        th_buy: "Харид нархи", th_sell: "Сотув нархи", th_margin: "Маржа", th_actions: "Амаллар",
        modal_title: "Янги маҳсулот қўшиш",
        label_name: "Маҳсулот номи", label_buy: "Харид нархи (сўм)",
        label_sell: "Сотув нархи (сўм)", label_qty: "Миқдор", label_category: "Категория",
        btn_cancel: "Бекор қилиш", btn_save: "Сақлаш",
        margin_preview: "Маржа кўриниши (сўм)",
        preview_profit: "Бирлик фойдаси ", preview_margin: "Маржа %",
        preview_stock_val: "Умумий захира қиймати (харид)",
        nav_dashboard: "Бошқарув панели", nav_products: "Маҳсулотлар",
        nav_transactions: "Трансакциялар", nav_categories: "Категориялар", nav_analytics: "Таҳлил",
        toast_added: (name: string) => `✓ "${name}" қўшилди`,
        toast_removed: (name: string) => `"${name}" ўчирилди`,
        btn_remove: "Ўчириш",
    }
};

let currentLang = "uz";

interface ProductName {
    uz: string;
    uz_cyr: string;
    en: string;
}

interface Category {
    id: number;
    name: ProductName;
}

interface Product {
    id: number;
    name: ProductName;
    input_price: number;
    output_price: number;
    quantity: number;
    category_id: number;
    category: Category;
    created_at: string;
}

// ─── State ────────────────────────────────────────────────────────────────────

let products: Product[] = [];
let nextId = 1;

// ─── DOM Refs ─────────────────────────────────────────────────────────────────

const modalBackdrop = document.getElementById("modal-backdrop") as HTMLDivElement;
const openModalBtn = document.getElementById("open-modal-btn") as HTMLButtonElement;
const closeModalBtn = document.getElementById("close-modal-btn") as HTMLButtonElement;
const cancelBtn = document.getElementById("cancel-btn") as HTMLButtonElement;
const saveBtn = document.getElementById("save-btn") as HTMLButtonElement;

const fName = document.getElementById("f-name") as HTMLInputElement;
const fInputPrice = document.getElementById("f-input-price") as HTMLInputElement;
const fOutputPrice = document.getElementById("f-output-price") as HTMLInputElement;
const fQuantity = document.getElementById("f-quantity") as HTMLInputElement;
const fCategory = document.getElementById("f-category") as HTMLSelectElement;

const errName = document.getElementById("err-name") as HTMLSpanElement;
const errInputPrice = document.getElementById("err-input-price") as HTMLSpanElement;
const errOutputPrice = document.getElementById("err-output-price") as HTMLSpanElement;
const errQuantity = document.getElementById("err-quantity") as HTMLSpanElement;
const errCategory = document.getElementById("err-category") as HTMLSpanElement;

const previewProfit = document.getElementById("preview-profit") as HTMLElement;
const previewMargin = document.getElementById("preview-margin") as HTMLElement;
const previewStockValue = document.getElementById("preview-stock-value") as HTMLElement;
const previewBar = document.getElementById("preview-bar") as HTMLDivElement;

const tbody = document.getElementById("products-tbody") as HTMLTableSectionElement;
const emptyState = document.getElementById("empty-state") as HTMLDivElement;
const searchInput = document.getElementById("search-input") as HTMLInputElement;
const categoryFilter = document.getElementById("category-filter") as HTMLSelectElement;

const kpiTotal = document.getElementById("kpi-total") as HTMLElement;
const kpiStock = document.getElementById("kpi-stock") as HTMLElement;
const kpiValue = document.getElementById("kpi-value") as HTMLElement;
const kpiRevenue = document.getElementById("kpi-revenue") as HTMLElement;

const toast = document.getElementById("toast") as HTMLDivElement;
const topbarDate = document.getElementById("topbar-date") as HTMLSpanElement;

// ─── Init ─────────────────────────────────────────────────────────────────────

function t(key: string, ...args: any[]): string {
    const val = TRANSLATIONS[currentLang]?.[key] ?? TRANSLATIONS.en[key] ?? key;
    return typeof val === "function" ? val(...args) : val as string;
}

function applyTranslations(): void {
    let lang = getLangKey();
    document.querySelectorAll<HTMLElement>("[data-i18n]").forEach(el => {
        el.textContent = t(el.getAttribute("data-i18n")!);
    });
    document.querySelectorAll<HTMLInputElement>("[data-i18n-placeholder]").forEach(el => {
        el.placeholder = t(el.getAttribute("data-i18n-placeholder")!);
    });

    if (lang === 'uz') {
        topbarDate.textContent = null
        topbarDate.textContent = new Date().toLocaleDateString("uz-UZ", {
            weekday: "long", year: "numeric", month: "long", day: "numeric",
        });
    } else if (lang === 'en') {
        topbarDate.textContent = null
        topbarDate.textContent = new Date().toLocaleDateString("en-EN", {
            weekday: "long", year: "numeric", month: "long", day: "numeric",
        });
    } else {
        topbarDate.textContent = null
        topbarDate.textContent = new Date().toLocaleDateString("uz-Cyrl-UZ", {
            weekday: "long", year: "numeric", month: "long", day: "numeric",
        });
    }
}

async function init(): Promise<void> {
    // Set date
    topbarDate.textContent = new Date().toLocaleDateString("uz-UZ", {
        weekday: "long", year: "numeric", month: "long", day: "numeric",
    });

    // Populate category filter
    // CATEGORIES.forEach(cat => {
    //     const opt = document.createElement("option");
    //     opt.value = String(cat.id);
    //     opt.textContent = cat.category_name;
    //     categoryFilter.appendChild(opt);
    // });

    // Fetch products from API
    try {
        const res = await fetch(`${API_URL}/products`);
        const data = await res.json();
        products = data?.data;
        console.log(products)
        nextId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    } catch {
        console.log('EMPTY')
    }

    renderAll();

    // Events
    openModalBtn.addEventListener("click", openModal);
    closeModalBtn.addEventListener("click", closeModal);
    cancelBtn.addEventListener("click", closeModal);
    saveBtn.addEventListener("click", handleSave);
    modalBackdrop.addEventListener("click", (e) => {
        if (e.target === modalBackdrop) closeModal();
    });

    fInputPrice.addEventListener("input", updatePreview);
    fOutputPrice.addEventListener("input", updatePreview);
    fQuantity.addEventListener("input", updatePreview);

    searchInput.addEventListener("input", renderTable);
    categoryFilter.addEventListener("change", renderTable);

    // Language switcher
    document.querySelectorAll<HTMLButtonElement>(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            currentLang = btn.dataset.lang!;
            document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            applyTranslations();
            renderAll(); // re-renders table rows so "Remove" button text updates too
        });
    });

    applyTranslations(); // call once at end of init
}



// ─── Modal ────────────────────────────────────────────────────────────────────

function openModal(): void {
    modalBackdrop.classList.add("open");
    fName.focus();
}

function closeModal(): void {
    modalBackdrop.classList.remove("open");
    resetForm();
}

function resetForm(): void {
    [fName, fInputPrice, fOutputPrice, fQuantity].forEach(el => {
        el.value = "";
        el.classList.remove("error");
    });
    fCategory.value = "";
    fCategory.classList.remove("error");
    [errName, errInputPrice, errOutputPrice, errQuantity, errCategory].forEach(el => el.textContent = "");
    resetPreview();
}

// ─── Validation ───────────────────────────────────────────────────────────────

function validate(): boolean {
    let valid = true;

    const setErr = (input: HTMLElement, span: HTMLSpanElement, msg: string): void => {
        input.classList.add("error");
        span.textContent = msg;
        valid = false;
    };
    const clearErr = (input: HTMLElement, span: HTMLSpanElement): void => {
        input.classList.remove("error");
        span.textContent = "";
    };

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

// ─── Save ─────────────────────────────────────────────────────────────────────

function handleSave(): void {
    if (!validate()) return;

    const nameVal = fName.value.trim();
    const product: Product = {
        id: nextId++,
        name: { uz: nameVal, uz_cyr: nameVal, en: nameVal },
        input_price: parseFloat(fInputPrice.value),
        output_price: parseFloat(fOutputPrice.value),
        quantity: parseInt(fQuantity.value, 10),
        category_id: parseInt(fCategory.value, 10),
        category: { id: parseInt(fCategory.value, 10), name: { uz: nameVal, uz_cyr: nameVal, en: nameVal } },
        created_at: new Date().toISOString(),
    };

    products.push(product);
    renderAll();
    closeModal();
    showToast(t("toast_added", product.name[getLangKey()]));
}

// ─── Delete ───────────────────────────────────────────────────────────────────

function deleteProduct(id: number): void {
    const p = products.find(p => p.id === id);
    if (!p) return;
    products = products.filter(p => p.id !== id);
    renderAll();
    showToast(t("toast_removed", p.name[getLangKey()]));
}

// Make deleteProduct globally accessible for inline onclick
(window as any).deleteProduct = deleteProduct;

// ─── Margin Preview ───────────────────────────────────────────────────────────

function updatePreview(): void {
    const inp = parseFloat(fInputPrice.value);
    const out = parseFloat(fOutputPrice.value);
    const qty = parseInt(fQuantity.value, 10);

    if (isNaN(inp) || isNaN(out)) { resetPreview(); return; }

    const profit = out - inp;
    const marginPct = inp > 0 ? (profit / inp) * 100 : 0;
    const stockVal = !isNaN(qty) ? inp * qty : 0;

    previewProfit.textContent = `${profit.toFixed(2)}`;
    previewProfit.style.color = profit >= 0 ? "var(--green)" : "var(--danger)";

    previewMargin.textContent = `${marginPct.toFixed(1)}%`;
    previewMargin.style.color = marginPct >= 0 ? "var(--green)" : "var(--danger)";

    previewStockValue.textContent = `${stockVal.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;

    const barPct = Math.min(Math.max(marginPct, 0), 100);
    previewBar.style.width = `${barPct}%`;
    previewBar.style.background = marginPct < 0 ? "var(--danger)" : marginPct < 20 ? "var(--amber)" : "var(--green)";
}

function resetPreview(): void {
    previewProfit.textContent = "—";
    previewProfit.style.color = "";
    previewMargin.textContent = "—";
    previewMargin.style.color = "";
    previewStockValue.textContent = "—";
    previewBar.style.width = "0%";
}

// ─── Render ───────────────────────────────────────────────────────────────────

// function getCategoryName(id: number): string {
//     return CATEGORIES.find(c => c.id === id)?.category_name ?? "Unknown";
// }

function fmt(n: number): string {
    return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function getLangKey(): keyof ProductName {
    if (currentLang === "uz") return "uz";
    if (currentLang === "cyril") return "uz_cyr";
    return "en";
}

function renderTable(): void {
    const langKey = getLangKey();
    const query = searchInput.value.trim().toLowerCase();
    const catId = categoryFilter.value ? parseInt(categoryFilter.value, 10) : null;

    const filtered = products.filter(p => {
        const matchSearch = p.name[langKey].toLowerCase().includes(query);
        const matchCat = catId === null || p.category_id === catId;
        return matchSearch && matchCat;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = "";
        emptyState.classList.add("visible");
        return;
    }
    emptyState.classList.remove("visible");

    tbody.innerHTML = filtered.map((p, i) => {
        const margin = p.input_price > 0 ? ((p.output_price - p.input_price) / p.input_price) * 100 : 0;
        const marginClass = margin >= 0 ? "margin-positive" : "margin-negative";
        const stockClass = p.quantity <= 10 ? "stock-low" : "stock-ok";
        const catName = p.category.name[langKey];

        return `
      <tr>
        <td style="color:var(--text-muted);font-size:0.8rem">${i + 1}</td>
        <td class="product-name-cell">${p.name[langKey]}</td>
        <td><span class="badge badge--category">${catName}</span></td>
        <td class="stock-cell ${stockClass}">${p.quantity.toLocaleString()}</td>
        <td>$${fmt(p.input_price)}</td>
        <td>$${fmt(p.output_price)}</td>
        <td class="margin-cell ${marginClass}">${margin.toFixed(1)}%</td>
        <td>
          <button class="btn--danger-sm" onclick="deleteProduct(${p.id})">${t("btn_remove")}</button>
        </td>
      </tr>
    `;
    }).join("");
}

function renderKPIs(): void {
    const totalStock = products.reduce((s, p) => s + p.quantity, 0);
    const totalValue = products.reduce((s, p) => s + p.input_price * p.quantity, 0);
    const totalRevenue = products.reduce((s, p) => s + p.output_price * p.quantity, 0);

    kpiTotal.textContent = products.length.toString();
    kpiStock.textContent = totalStock.toLocaleString();
    kpiValue.textContent = totalValue.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    kpiRevenue.textContent = totalRevenue.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function renderAll(): void {
    renderTable();
    renderKPIs();
}

// ─── Toast ────────────────────────────────────────────────────────────────────

let toastTimer: ReturnType<typeof setTimeout> | null = null;

function showToast(msg: string): void {
    toast.textContent = msg;
    toast.classList.add("show");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

// function escHtml(str: string): string {
//     return str
//         .replace(/&/g, "&amp;")
//         .replace(/</g, "&lt;")
//         .replace(/>/g, "&gt;")
//         .replace(/"/g, "&quot;");
// }

// ─── Start ────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => { void init(); });

export { };