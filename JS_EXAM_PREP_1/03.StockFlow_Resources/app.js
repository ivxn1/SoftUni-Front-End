const BASE_URL = "http://localhost:3030/jsonstore/orders/";

const loadBtnEl = document.getElementById("load-orders");
const ordersListEl = document.querySelector("section#order-info > div#list");
const orderBtnEl = document.querySelector("button#order-btn");
const createOrderNameEl = document.querySelector("div#form input#name");
const createOrderQuantityEl = document.querySelector("div#form input#quantity");
const createOrderDateEl = document.querySelector("div#form input#date");
const editOrderBtnEl = document.getElementById("edit-order");

// EDIT ORDER
let orderToEdit = null;

editOrderBtnEl.addEventListener('click', async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const oName = createOrderNameEl.value;
    const oQuantity = createOrderQuantityEl.value;
    const oDate = createOrderDateEl.value;
    body = { name: oName, date: oDate, quantity: oQuantity};
    
    await fetch(BASE_URL + orderToEdit._id, { method: "PUT", body: JSON.stringify(body)});
    loadOrders();
    editOrderBtnEl.disabled = true;
    orderBtnEl.disabled = false;
    
})

// CREATE ORDERS
orderBtnEl.addEventListener("click", async (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    const oName = createOrderNameEl.value;
    const oQuantity = createOrderQuantityEl.value;
    const oDate = createOrderDateEl.value;
    body = { name: oName, date: oDate, quantity: oQuantity };

    await fetch(BASE_URL, { method: "POST", body: JSON.stringify(body) });
    loadOrders();
    createOrderNameEl.value = '';
    createOrderDateEl.value = '';
    createOrderQuantityEl.value = '';
});

// LOAD ORDERS
async function loadOrders() {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    ordersListEl.replaceChildren();
    for (const order of Object.values(data)) {
        const oNameEl = document.createElement("h2");
        oNameEl.textContent = order.name;

        const oDateEl = document.createElement("h3");
        oDateEl.textContent = order.date;

        const oQuantityEl = document.createElement("h3");
        oQuantityEl.textContent = order.quantity;

        const changeBtnEl = document.createElement("button");
        changeBtnEl.classList.add("change-btn");
        changeBtnEl.textContent = "Change";

        changeBtnEl.addEventListener('click', (e) => {
            const btn = e.target;
            const oContainer = btn.parentNode;
            const nameEl = oContainer.querySelector("h2");
            const [dateEl, quantityEl] = oContainer.querySelectorAll("h3");
            
            oContainer.remove();

            createOrderNameEl.value = nameEl.textContent;
            createOrderQuantityEl.value = quantityEl.textContent;
            createOrderDateEl.value = dateEl.textContent;
            
            editOrderBtnEl.disabled = false;
            orderBtnEl.disabled = true;
            orderToEdit = order;
        })

        const doneBtnEl = document.createElement("button");
        doneBtnEl.classList.add("done-btn");
        doneBtnEl.textContent = "Done";

        const oContEl = document.createElement("div");
        oContEl.classList.add("container");
        oContEl.appendChild(oNameEl);
        oContEl.appendChild(oDateEl);
        oContEl.appendChild(oQuantityEl);
        oContEl.appendChild(changeBtnEl);
        oContEl.appendChild(doneBtnEl);

        ordersListEl.appendChild(oContEl);
    }
}

loadBtnEl.addEventListener("click", async () => {
    loadOrders();
});
