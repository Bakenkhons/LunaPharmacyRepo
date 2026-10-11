//==|INVENTORY DATA|==//

// Product categories are identified by their numeric index.
const CATS = [
  "Heart & blood pressure",
  "Diabetes & gout",
  "Antibiotics",
  "Pain & fever",
  "Cough & cold",
  "Allergy & asthma",
  "Digestive",
  "Vitamins & supplements",
  "Others",
];

// Sample inventory data.
// Each entry contains: name, strength, category index, price,
// and reorder level. A price of 0 means the price is unknown.
const SEED = [
  ["Amlodipine", "5 mg", 0, 6],
  ["Amlodipine", "10 mg", 0, 7],
  ["Amlodipine + Losartan", "5 mg/50 mg", 0, 18],
  ["Apixaban", "2.5 mg", 0, 30],
  ["Apixaban", "5 mg", 0, 40],
  ["Aspirin", "80 mg", 0, 3],
  ["Aspirin", "100 mg", 0, 5],
  ["Atenolol", "50 mg", 0, 0],
  ["Losartan Potassium", "50 mg", 0, 0],
  ["Metoprolol", "50 mg", 0, 0],
  ["Atorvastatin", "20 mg", 0, 0],
  ["Rosuvastatin", "10 mg", 0, 0],
  ["Furosemide", "40 mg", 0, 0],
  ["Clopidogrel", "75 mg", 0, 0],
  ["Gliclazide", "60 mg", 1, 0],
  ["Glimepiride", "2 mg", 1, 0],
  ["Pioglitazone", "30 mg", 1, 0],
  ["Sitagliptin", "50 mg", 1, 0],
  ["Allopurinol", "100 mg", 1, 0],
  ["Febuxostat (Xuric)", "40 mg", 1, 0],
  ["Amoxicillin", "500 mg", 2, 0],
  ["Azithromycin", "500 mg", 2, 0],
  ["Cefalexin", "500 mg", 2, 0],
  ["Cefixime", "200 mg", 2, 0],
  ["Ciprofloxacin", "500 mg", 2, 0],
  ["Co-amoxiclav", "625 mg", 2, 0],
  ["Cloxacillin", "500 mg", 2, 0],
  ["Fluconazole", "150 mg", 2, 0],
  ["Biogesic (Paracetamol)", "500 mg", 3, 7, 60],
  ["Saridon", "250/150/50 mg", 3, 11],
  ["Rexidol", "500/65 mg", 3, 10],
  ["Ponstan SF (Mefenamic)", "500 mg", 3, 48],
  ["Acid Mecid (Mefenamic)", "500 mg", 3, 3],
  ["Mefemic (Mefenamic)", "250 mg", 3, 2],
  ["Philflam (Diclofenac)", "50 mg", 3, 5],
  ["Celecox (Celecoxib)", "200 mg", 3, 30],
  ["Emicox (Celecoxib)", "200 mg", 3, 14],
  ["Melotab (Meloxicam)", "15 mg", 3, 15],
  ["Opiodex (Tramadol)", "50 mg", 3, 12],
  ["Keteese (Dexketoprofen)", "25 mg", 3, 40],
  ["Sinutab Cold Plus", "500/5/2 mg", 4, 16],
  ["Neozep Forte", "—", 4, 11],
  ["Decolgen Forte", "25/2/500 mg", 4, 12],
  ["Bioflu", "—", 4, 12],
  ["Symdex D", "25/2/325 mg", 4, 5],
  ["Lagundi", "300 mg", 4, 4],
  ["Ascof Forte", "—", 4, 12],
  ["Plemex Forte (Lagundi)", "600 mg", 4, 10],
  ["Solmux (Carbocisteine)", "500 mg", 4, 0],
  ["Alnix (Cetirizine)", "10 mg", 5, 32],
  ["Loratamed (Loratadine)", "10 mg", 5, 8],
  ["Allecure (Levocetirizine)", "5 mg", 5, 8],
  ["Novakast (Montelukast)", "10 mg", 5, 24],
  ["Leukorex (Montelukast)", "10 mg", 5, 12],
  ["Mucomed (Diphenhydramine)", "25 mg", 5, 4],
  ["Buscopan", "10 mg", 6, 36],
  ["Dulcolax (Bisacodyl)", "5 mg", 6, 32],
  ["Imodium (Loperamide)", "2 mg", 6, 20],
  ["Diatabs (Loperamide)", "2 mg", 6, 13],
  ["Motilium (Domperidone)", "10 mg", 6, 36],
  ["Gaviscon", "—", 6, 40],
  ["Kremil-S", "—", 6, 12],
  ["Maalox No.1", "—", 6, 14],
  ["Bonamine (Meclizine)", "25 mg", 6, 18],
  ["Omeprazole", "20 mg", 6, 0],
  ["Hidrasec (Racecadotril)", "100 mg", 6, 70],
  ["Dehydrosol (ORS)", "5.575 g", 6, 12],
  ["Poten-Cee (Vitamin C)", "500 mg", 7, 7],
  ["Ceelin Plus", "—", 7, 12],
  ["Neurobion", "B1/B6/B12", 7, 27],
  ["Ramavit", "100/5/50 mcg", 7, 4],
  ["Ambical (Calcium)", "500 mg", 7, 5],
  ["Ferolitab", "300 mg/250 mcg", 7, 8],
  ["Myra E (Vitamin E)", "400 iu", 7, 16],
  ["Melatonin", "3 mg", 7, 12],
  ["Zecobal (Mecobalamin)", "500 mcg", 7, 26],
  ["Strepsils", "1.2 mg/600 mcg", 8, 90],
  ["Dequadin (Lozenges)", "—", 8, 12],
  ["Dinosed (Budesonide)", "250 mcg", 8, 48],
  ["Hivent (Salbutamol)", "1 mg/ml", 8, 0],
  ["Lilibacil (Bacillus clausii)", "2B/10 ml", 8, 45],
  ["AquaTab Water Cleanser", "—", 8, 10],
];

// Local storage key and the number of milliseconds in one day.
const K = "lunas-pharmacy-v1";
const DAY = 864e5;

// Shortcut for selecting an HTML element using its CSS selector.
const $ = (selector) => document.querySelector(selector);

// Escape special HTML characters before inserting user-entered
// text into HTML templates. This helps prevent HTML injection.
const esc = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char],
  );

// Return today's date at midnight and format amounts in Philippine pesos.
const today = () =>
  new Date(new Date().toDateString()).getTime();

const peso = (amount) =>
  "₱" +
  Number(amount).toLocaleString("en-PH", {
    maximumFractionDigits: 2,
  });

// Shared application state.
let S = {
  items: [], // All inventory products.
  log: [],   // Stock movement history.
};

let view = "dash"; // Currently displayed page.
let F = { q: "", c: "", s: "" }; // Search and filter settings.
let editId = null; // ID of the product currently being edited.
let adj = null;    // Current stock adjustment information.


//==|DATA & STORAGE|==//

// Generate the initial sample inventory.
// Stock quantities and expiry dates are demo values.
function seed() {
  let r = 11;

  // A deterministic pseudo-random generator for repeatable sample data.
  const rnd = () =>
    (r = (r * 16807) % 2147483647) / 2147483647;

  S.items = SEED.map((product, index) => ({
    id: index + 1,
    name: product[0],
    str: product[1],
    cat: product[2],
    price: product[3],

    qty: Math.floor(rnd() ** 1.6 * 140),

    reorder: product[4] || 20,
    target: (product[4] || 20) * 5,

    // Generate a sample expiry date between 15 days ago
    // and approximately 765 days in the future.
    exp: new Date(
      today() + (Math.floor(rnd() * 780) - 15) * DAY,
    )
      .toISOString()
      .slice(0, 10),
  }));

  // Reset the movement history when sample data is restored.
  S.log = [];
}


// Load saved inventory from the browser.
// If no usable saved inventory exists, initialize sample data.
function load() {
  try {
    const data = JSON.parse(localStorage.getItem(K));

    if (data && data.items) {
      S = data;
    } else {
      seed();
    }
  } catch (error) {
    // Invalid saved data or unavailable storage: use sample data.
    seed();
  }
}


// Save the current inventory and movement history.
function save() {
  try {
    localStorage.setItem(K, JSON.stringify(S));
  } catch (error) {
    // Saving can fail if browser storage is unavailable or full.
  }
}


//==|STOCK & MOVEMENT HELPERS|==//

// Calculate how many days remain before a product expires.
const days = (item) =>
  Math.round((new Date(item.exp) - today()) / DAY);


// Determine the product's status and its associated CSS class.
function st(item) {
  const remainingDays = days(item);

  if (remainingDays < 0) {
    return ["Expired", "bad"];
  }

  if (item.qty === 0) {
    return ["Out of stock", "bad"];
  }

  if (item.qty <= item.reorder) {
    return ["Low stock", "warn"];
  }

  if (remainingDays <= 90) {
    return ["Expiring soon", "warn"];
  }

  return ["In stock", "ok"];
}


// Return all products that have reached their reorder level.
const needs = () =>
  S.items.filter((item) => item.qty <= item.reorder);


// Adjust stock and record the change in the movement log.
// Positive values add stock; negative values remove stock.
function move(item, difference, note) {
  item.qty = Math.max(0, item.qty + difference);

  // Newest movements are placed at the beginning of the log.
  S.log.unshift({
    t: Date.now(),
    name: item.name + " " + item.str,
    d: difference,
    note: note || "",
    left: item.qty,
  });

  // Keep the 300 most recent movement records.
  S.log = S.log.slice(0, 300);
}


// Generate the colored status label used throughout the interface.
function pill(item) {
  const status = st(item);

  return `<span class="pill ${status[1]}">${status[0]}</span>`;
}


// Generate a standard page heading and subtitle.
function head(title, subtitle) {
  return `<h1>${title}</h1><p class="sub">${subtitle}</p>`;
}


//==|PAGE RENDERING|==//

// OVERVIEW DASHBOARD
// Calculate inventory totals, category quantities, and stock alerts.
function dash() {
  const items = S.items;

  const units = items.reduce(
    (total, item) => total + item.qty,
    0,
  );

  const value = items.reduce(
    (total, item) => total + item.qty * item.price,
    0,
  );

  const low = items.filter(
    (item) =>
      st(item)[0] === "Low stock" ||
      st(item)[0] === "Out of stock",
  ).length;

  const exp = items.filter(
    (item) => days(item) <= 90,
  ).length;

  // Calculate total stock units for each category.
  const categories = CATS.map((category, index) => ({
    c: category,
    u: items
      .filter((item) => item.cat === index)
      .reduce((total, item) => total + item.qty, 0),
  }));

  // Prevent division by zero when every category has no stock.
  const maxUnits = Math.max(
    1,
    ...categories.map((category) => category.u),
  );

  // Show products requiring attention, with urgent statuses first.
  const alerts = items
    .filter((item) => st(item)[1] !== "ok")
    .sort(
      (a, b) =>
        (st(a)[1] === "bad" ? 0 : 1) -
        (st(b)[1] === "bad" ? 0 : 1),
    )
    .slice(0, 8);

  return (
    head(
      "Stock overview",
      "What needs attention today at Luna's Pharmacy.",
    ) +

    `<div class="kpis">
      <div class="kpi">
        <span>Products</span>
        <strong>${items.length}</strong>
      </div>

      <div class="kpi">
        <span>Units on hand</span>
        <strong>${units.toLocaleString()}</strong>
      </div>

      <div class="kpi">
        <span>Stock value (listed price)</span>
        <strong>${peso(value)}</strong>
      </div>

      <div class="kpi ${low ? "bad" : ""}">
        <span>Low or out of stock</span>
        <strong>${low}</strong>
      </div>

      <div class="kpi ${exp ? "warn" : ""}">
        <span>Expiring within 90 days</span>
        <strong>${exp}</strong>
      </div>
    </div>

    <div class="cols">
      <div class="panel">
        <h2>Units by category</h2>

        ${categories
      .map(
        (category) => `
              <div class="bar">
                <span>${category.c}</span>

                <div class="track">
                  <i style="width:${(category.u / maxUnits) * 100
          }%"></i>
                </div>

                <span>${category.u}</span>
              </div>
            `,
      )
      .join("")}
      </div>

      <div class="panel">
        <h2>Needs attention</h2>

        ${alerts.length
      ? alerts
        .map(
          (item) => `
                    <div class="alert">
                      <span>
                        ${esc(item.name)} ${esc(item.str)}
                      </span>
                      ${pill(item)}
                    </div>
                  `,
        )
        .join("")
      : '<div class="empty">Everything is stocked and in date.</div>'
    }

        <p style="margin:12px 0 0">
          <button class="btn sm" data-go="stock">
            Plan restock
          </button>
        </p>
      </div>
    </div>

    <p class="sub">
      Quantities and expiry dates are sample data.
      Edit them in Inventory. Prices of ₱0 weren't on the
      supplied price list — set them when you know them.
    </p>`
  );
}


// INVENTORY PAGE
// Apply the current search and filters, then display matching products.
function inv() {
  const query = F.q.toLowerCase();

  const rows = S.items.filter(
    (item) =>
      (!query ||
        (item.name + " " + item.str)
          .toLowerCase()
          .includes(query)) &&
      (F.c === "" || item.cat == F.c) &&
      (!F.s || st(item)[0] === F.s),
  );

  return (
    head(
      "Inventory",
      `${rows.length} of ${S.items.length} products`,
    ) +

    `<div class="tools">
      <input
        id="q"
        type="search"
        placeholder="Search product or strength"
        value="${esc(F.q)}"
        aria-label="Search"
      >

      <select id="fc" aria-label="Category">
        <option value="">All categories</option>

        ${CATS.map(
      (category, index) => `
            <option
              value="${index}"
              ${F.c == index && F.c !== ""
          ? "selected"
          : ""
        }
            >
              ${category}
            </option>
          `,
    ).join("")}
      </select>

      <select id="fs" aria-label="Status">
        ${[
      "",
      "In stock",
      "Low stock",
      "Out of stock",
      "Expiring soon",
      "Expired",
    ]
      .map(
        (status) => `
              <option
                value="${status}"
                ${F.s === status ? "selected" : ""}
              >
                ${status || "All statuses"}
              </option>
            `,
      )
      .join("")}
      </select>

      <button class="btn" data-add>Add product</button>
    </div>

    <div class="wrap">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th class="n">Price</th>
            <th class="n">Stock</th>
            <th>Expiry</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          ${rows
      .map((item) => {
        const statusClass = st(item)[1];

        return `
                <tr>
                  <td>
                    <b>${esc(item.name)}</b>
                    <span style="color:var(--mute)">
                      ${esc(item.str)}
                    </span>
                  </td>

                  <td>${CATS[item.cat]}</td>

                  <td class="n">
                    ${item.price
            ? peso(item.price)
            : '<span style="color:var(--mute)">Not set</span>'
          }
                  </td>

                  <td class="n">
                    <div class="q ${statusClass}">
                      <div class="track">
                        <i style="width:${Math.min(
            100,
            (item.qty / item.target) * 100,
          )
          }%"></i>
                      </div>
                      ${item.qty}
                    </div>
                  </td>

                  <td>${item.exp}</td>
                  <td>${pill(item)}</td>

                  <td>
                    <div class="acts">
                      <button class="btn sm" data-in="${item.id}">
                        Stock in
                      </button>

                      <button class="btn sm ghost" data-out="${item.id}">
                        Stock out
                      </button>

                      <button class="btn sm ghost" data-ed="${item.id}">
                        Edit
                      </button>

                      <button class="btn sm del" data-del="${item.id}">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              `;
      })
      .join("")}
        </tbody>
      </table>

      ${rows.length
      ? ""
      : '<div class="empty">No products match. Clear a filter or add a product.</div>'
    }
    </div>`
  );
}


// RESTOCK PAGE
// List products that need restocking and calculate estimated costs.
function stock() {
  const itemsToRestock = needs().sort(
    (a, b) => a.qty / a.reorder - b.qty / b.reorder,
  );

  const totalCost = itemsToRestock.reduce(
    (total, item) =>
      total + (item.order ?? item.target - item.qty) * item.price,
    0,
  );

  return (
    head(
      "Restock plan",
      "Products at or below their reorder level. Order quantities default to what refills each item to its target stock.",
    ) +

    `<div class="tools">
      <button
        class="btn"
        id="recv"
        ${itemsToRestock.length ? "" : "disabled"}
      >
        Receive all as stock in
      </button>

      <button
        class="btn ghost"
        id="csv"
        ${itemsToRestock.length ? "" : "disabled"}
      >
        Download order list (CSV)
      </button>
    </div>

    <div class="wrap">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th class="n">On hand</th>
            <th class="n">Reorder at</th>
            <th class="n">Target</th>
            <th class="n">Order qty</th>
            <th class="n">Est. cost</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          ${itemsToRestock
      .map((item) => {
        // Default order quantity fills stock to the target level.
        const orderQty =
          item.order ?? Math.max(0, item.target - item.qty);

        return `
                <tr>
                  <td>
                    <b>${esc(item.name)}</b>
                    <span style="color:var(--mute)">
                      ${esc(item.str)}
                    </span>
                  </td>

                  <td class="n">${item.qty}</td>
                  <td class="n">${item.reorder}</td>
                  <td class="n">${item.target}</td>

                  <td class="n">
                    <input
                      class="qi"
                      type="number"
                      min="0"
                      data-oq="${item.id}"
                      value="${orderQty}"
                      aria-label="Order quantity"
                    >
                  </td>

                  <td class="n">
                    ${peso(orderQty * item.price)}
                  </td>

                  <td>${pill(item)}</td>
                </tr>
              `;
      })
      .join("")}
        </tbody>
      </table>

      ${itemsToRestock.length
      ? ""
      : '<div class="empty">Nothing needs restocking right now.</div>'
    }
    </div>

    <p class="sub" style="margin-top:12px">
      Estimated total at listed prices:
      <b>${peso(totalCost)}</b>.
      Order quantity is editable; use Edit in Inventory
      to change reorder level or target.
    </p>`
  );
}


// MOVEMENT HISTORY PAGE
// Display stock adjustments from newest to oldest.
function logv() {
  return (
    head(
      "Movements",
      "Latest stock in and out, newest first.",
    ) +

    `<div class="wrap">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Product</th>
            <th class="n">Change</th>
            <th class="n">Balance</th>
            <th>Note</th>
          </tr>
        </thead>

        <tbody>
          ${S.log
      .map(
        (entry) => `
                <tr>
                  <td>
                    ${new Date(entry.t).toLocaleString("en-PH", {
          dateStyle: "medium",
          timeStyle: "short",
        })}
                  </td>

                  <td>${esc(entry.name)}</td>

                  <td
                    class="n"
                    style="color:var(${entry.d > 0 ? "--ok" : "--bad"
          })"
                  >
                    ${entry.d > 0 ? "+" : ""}${entry.d}
                  </td>

                  <td class="n">${entry.left}</td>
                  <td>${esc(entry.note)}</td>
                </tr>
              `,
      )
      .join("")}
        </tbody>
      </table>

      ${S.log.length
      ? ""
      : '<div class="empty">No movements yet. Use Stock in or Stock out in Inventory.</div>'
    }
    </div>`
  );
}


// Refresh the current page, navigation highlighting, and restock badge.
function render() {
  // Select the function associated with the current page.
  const pages = {
    dash,
    inv,
    stock,
    log: logv,
  };

  $("#main").innerHTML = pages[view]();

  // Highlight the currently selected navigation button.
  document
    .querySelectorAll(".nav[data-v]")
    .forEach((button) => {
      button.classList.toggle("on", button.dataset.v === view);
    });

  // Show the number of products needing restocking.
  const count = needs().length;

  $("#rb").textContent = count || "";
  $("#rb").style.display = count ? "" : "none";
}

//==|PRODUCT AND STOCK|==//

// Open the add-product or edit-product dialog.
// If an ID is supplied, load the matching product for editing.
function openP(id) {
  editId = id;

  const item = id
    ? S.items.find((product) => product.id === id)
    : {
      name: "",
      str: "",
      cat: 0,
      price: 0,
      qty: 0,
      reorder: 20,
      target: 100,

      // New products default to an expiry date one year away.
      exp: new Date(today() + 365 * DAY)
        .toISOString()
        .slice(0, 10),
    };

  $("#dpt").textContent = id ? "Edit product" : "Add product";

  // Populate the category dropdown.
  $("#f_cat").innerHTML = CATS
    .map(
      (category, index) =>
        `<option value="${index}">${category}</option>`,
    )
    .join("");

  // Fill the form with the product's existing values.
  $("#f_name").value = item.name;
  $("#f_str").value = item.str;
  $("#f_cat").value = item.cat;
  $("#f_price").value = item.price;
  $("#f_qty").value = item.qty;
  $("#f_re").value = item.reorder;
  $("#f_tg").value = item.target;
  $("#f_exp").value = item.exp;

  $("#dp").showModal();
}


// Open the stock-in or stock-out dialog for a selected product.
function openA(id, type) {
  adj = { id, t: type };

  const item = S.items.find(
    (product) => product.id === id,
  );

  $("#dat").textContent =
    (type === "in" ? "Stock in: " : "Stock out: ") +
    item.name +
    " " +
    item.str;

  // Start with a default quantity of 10 and an empty note.
  $("#a_q").value = 10;
  $("#a_n").value = "";

  $("#da").showModal();
}


//==|CLICK EVENT|==//

// Use one delegated listener for buttons throughout the application.
// This also works for buttons created dynamically during rendering.
document.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  // Ignore clicks that did not originate from a button.
  if (!button) return;

  const data = button.dataset;

  // Navigate to a page.
  if (data.v) {
    view = data.v;
    render();

  } else if (data.go) {
    view = data.go;
    render();

    // Open the product form.
  } else if (data.add !== undefined) {
    openP(null);

  } else if (data.ed) {
    openP(+data.ed);

    // Open stock adjustment forms.
  } else if (data.in) {
    openA(+data.in, "in");

  } else if (data.out) {
    openA(+data.out, "out");


    // DELETE PRODUCT
  } else if (data.del) {
    const item = S.items.find(
      (product) => product.id === +data.del,
    );

    if (
      item &&
      confirm(
        `Delete ${item.name} ${item.str}? This can't be undone.`,
      )
    ) {
      S.items = S.items.filter(
        (product) => product !== item,
      );

      save();
      render();
    }


    // RESET THE SAMPLE INVENTORY
  } else if (button.id === "reset") {
    if (
      confirm(
        "Replace all data with the original sample data?",
      )
    ) {
      seed();
      save();
      render();
    }


    // RECEIVE ALL PLANNED RESTOCK ORDERS
  } else if (button.id === "recv") {
    needs().forEach((item) => {
      const quantity =
        item.order ??
        Math.max(0, item.target - item.qty);

      if (quantity > 0) {
        move(item, quantity, "Restock received");
      }
    });

    save();
    render();


    // EXPORT THE RESTOCK PLAN AS A CSV FILE
  } else if (button.id === "csv") {
    const rows = [
      [
        "Product",
        "Strength",
        "On hand",
        "Order qty",
        "Unit price",
        "Est. cost",
      ],
    ].concat(
      needs().map((item) => {
        const quantity =
          item.order ??
          Math.max(0, item.target - item.qty);

        return [
          item.name,
          item.str,
          item.qty,
          quantity,
          item.price,
          quantity * item.price,
        ];
      }),
    );

    // Escape quotation marks so product names remain valid CSV fields.
    const csvContent = rows
      .map((row) =>
        row
          .map(
            (value) =>
              `"${String(value).replace(/"/g, '""')}"`,
          )
          .join(","),
      )
      .join("\n");

    // Create a temporary downloadable file in the browser.
    const blob = new Blob(
      [csvContent],
      { type: "text/csv" },
    );

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "lunas-restock-order.csv";
    link.click();


    // CLOSE THE PRODUCT OR STOCK ADJUSTMENT DIALOG
  } else if (button.id === "dpx") {
    $("#dp").close();

  } else if (button.id === "dax") {
    $("#da").close();


    // SAVE A NEW OR EDITED PRODUCT
  } else if (button.id === "dps") {
    // Read the values currently entered in the product form.
    const value = (selector) => $(selector).value;

    const product = {
      name: value("#f_name").trim(),
      str: value("#f_str").trim(),
      cat: +value("#f_cat"),
      price: +value("#f_price") || 0,
      qty: Math.max(0, +value("#f_qty") || 0),
      reorder: +value("#f_re") || 0,
      target: Math.max(1, +value("#f_tg") || 1),
      exp: value("#f_exp"),
    };

    // A name and expiry date are required.
    if (!product.name || !product.exp) {
      alert("Enter a product name and an expiry date.");
      return;
    }

    if (editId) {
      // Update the existing product without changing its ID.
      Object.assign(
        S.items.find((item) => item.id === editId),
        product,
      );
    } else {
      // Assign a unique timestamp-based ID to a new product.
      S.items.unshift({
        id: Date.now(),
        ...product,
      });
    }

    save();
    $("#dp").close();
    render();


    // SAVE A STOCK-IN OR STOCK-OUT ADJUSTMENT
  } else if (button.id === "das") {
    const quantity = Math.floor(+$("#a_q").value);

    // Prevent empty, zero, or negative adjustments.
    if (!(quantity > 0)) {
      alert("Enter a quantity greater than 0.");
      return;
    }

    const item = S.items.find(
      (product) => product.id === adj.id,
    );

    // Prevent removing more units than are currently available.
    if (adj.t === "out" && quantity > item.qty) {
      alert(`Only ${item.qty} on hand.`);
      return;
    }

    // Add or subtract stock, then record the movement.
    move(
      item,
      adj.t === "in" ? quantity : -quantity,
      $("#a_n").value.trim(),
    );

    save();
    $("#da").close();
    render();
  }
});


//==|SEARCH AND RESTOCK|==//

// Handle live product searches and changes to order quantities.
document.addEventListener("input", (event) => {
  const target = event.target;

  // LIVE INVENTORY SEARCH
  if (target.id === "q") {
    F.q = target.value;

    // Remember the cursor position before rebuilding the page.
    const cursorPosition = target.selectionStart;

    render();

    // Restore focus and cursor position so typing feels continuous.
    const search = $("#q");

    search.focus();
    search.setSelectionRange(
      cursorPosition,
      cursorPosition,
    );

    // UPDATE A RESTOCK ORDER QUANTITY
  } else if (target.dataset.oq) {
    const item = S.items.find(
      (product) => product.id === +target.dataset.oq,
    );

    if (item) {
      item.order = Math.max(0, +target.value || 0);
    }
  }
});


// Apply category/status filters and refresh restock cost estimates.
document.addEventListener("change", (event) => {
  const target = event.target;

  if (target.id === "fc") {
    F.c = target.value;
    render();

  } else if (target.id === "fs") {
    F.s = target.value;
    render();

  } else if (target.dataset.oq) {
    // Recalculate displayed costs after an order quantity changes.
    render();
  }
});


//==|APPLICATION INITIALIZATION|==//

// Restore previously saved data, then display the dashboard.
load();
render();