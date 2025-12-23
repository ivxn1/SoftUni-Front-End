const BASE_URL = "http://localhost:3030/jsonstore/matches/";

const loadButtonEl = document.querySelector("#load-matches");
const matchesUlEl = document.querySelector("#list");
const hostInputEl = document.querySelector("#host");
const scoreInputEl = document.querySelector("#score");
const guestInputEl = document.querySelector("#guest");
const addBtnEl = document.querySelector("#add-match");
const editBtnEl = document.querySelector("#edit-match");

function clearInputs() {
    hostInputEl.value = "";
    scoreInputEl.value = "";
    guestInputEl.value = "";
}
function createMEl(m) {
    const host = m.host;
    const score = m.score;
    const guest = m.guest;

    const hostPEl = document.createElement("p");
    hostPEl.textContent = host;

    const scorePEl = document.createElement("p");
    scorePEl.textContent = score;

    const guestPEl = document.createElement("p");
    guestPEl.textContent = guest;

    const infoContEl = document.createElement("div");
    infoContEl.classList.add("info");
    infoContEl.appendChild(hostPEl);
    infoContEl.appendChild(scorePEl);
    infoContEl.appendChild(guestPEl);

    const changeBtnEl = document.createElement("button");
    changeBtnEl.classList.add("change-btn");
    changeBtnEl.textContent = "Change";

    // CHANGE BUTTON CLICKED
    changeBtnEl.addEventListener("click", (e) => {
        const mLiEl = e.target.parentNode.parentNode;

        hostInputEl.value = hostPEl.textContent;
        scoreInputEl.value = scorePEl.textContent;
        guestInputEl.value = guestPEl.textContent;

        mLiEl.remove();

        editBtnEl.disabled = false;
        addBtnEl.disabled = true;
        matchToEdit = m;
    });

    const deleteBtnEl = document.createElement("button");
    deleteBtnEl.classList.add("delete-btn");
    deleteBtnEl.textContent = "Delete";

    // DELETE BUTTON CLICKED
    deleteBtnEl.addEventListener("click", async (e) => {
        const mLiEl = e.target.parentNode.parentNode;
        const id = m._id;

        mLiEl.remove();
        await fetch(BASE_URL + id, { method: "DELETE" });
        loadMatches();
    });

    const btnContEl = document.createElement("div");
    btnContEl.classList.add("btn-wrapper");
    btnContEl.appendChild(changeBtnEl);
    btnContEl.appendChild(deleteBtnEl);

    const liEl = document.createElement("li");
    liEl.classList.add("match");
    liEl.appendChild(infoContEl);
    liEl.appendChild(btnContEl);

    return liEl;
}

// LOAD MATCHES FROM DB
async function loadMatches() {
    const res = await fetch(BASE_URL);
    const data = await res.json();

    matchesUlEl.replaceChildren();
    for (const m of Object.values(data)) {
        matchesUlEl.appendChild(createMEl(m));
    }
}

// LOAD MATCHES BUTTON CLICKED
loadButtonEl.addEventListener("click", async () => {
    loadMatches();
});

// ADD MATCH BUTTON CLICKED
addBtnEl.addEventListener("click", async () => {
    const host = hostInputEl.value;
    const score = scoreInputEl.value;
    const guest = guestInputEl.value;
    body = { host, score, guest };

    await fetch(BASE_URL, { method: "POST", body: JSON.stringify(body) });
    clearInputs();
    loadMatches();
});

// EDIT MATCH BUTTON CLICKED
let matchToEdit = null;

editBtnEl.addEventListener("click", async () => {
    const host = hostInputEl.value;
    const score = scoreInputEl.value;
    const guest = guestInputEl.value;

    const id = matchToEdit._id;

    const body = { host, score, guest, id };
    await fetch(BASE_URL + id, { method: "PUT", body: JSON.stringify(body) });
    loadMatches();
    clearInputs();
    editBtnEl.disabled = true;
    addBtnEl.disabled = false;
});
