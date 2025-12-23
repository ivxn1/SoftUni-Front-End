window.addEventListener("load", solve);

function solve() {
    const inputNameEl = document.querySelector(
        "form.event-content > input#event"
    );
    const inputNoteEl = document.querySelector(
        "form.event-content > input#note"
    );
    const inputDateEl = document.querySelector(
        "form.event-content > input#date"
    );
    const saveBtnEl = document.querySelector(
        "form.event-content > button#save"
    );
    const upcomingUlEl = document.querySelector("ul#upcoming-list");
    const doneEvenetsUlEl = document.querySelector("div#events > ul#events-list");
    const deleteDoneEventsButtonEl = document.querySelector("button.btn.delete");

    deleteDoneEventsButtonEl.addEventListener('click', () => {
        doneEvenetsUlEl.replaceChildren();
    })

    saveBtnEl.addEventListener("click", () => {
        const evName = inputNameEl.value;
        const evNote = inputNoteEl.value;
        const evDate = inputDateEl.value;

        if (!evName || !evNote || !evDate) return;

        const pNameEl = document.createElement("p");
        pNameEl.textContent = `Name: ${evName}`;

        const pNoteEl = document.createElement("p");
        pNoteEl.textContent = `Note: ${evNote}`;

        const pDateEl = document.createElement("p");
        pDateEl.textContent = `Date: ${evDate}`;

        const articleEl = document.createElement("article");
        articleEl.appendChild(pNameEl);
        articleEl.appendChild(pNoteEl);
        articleEl.appendChild(pDateEl);

        const editBtnEl = document.createElement("button");
        editBtnEl.classList.add("btn", "edit");
        editBtnEl.textContent = "Edit";

        editBtnEl.addEventListener("click", (e) => {
            let editBtn = e.target;
            let btnContainer = editBtn.parentNode;
            let evContainer = btnContainer.parentNode;
            let evLiEl = evContainer.parentNode;
            let [eName, eNote, eDate] =
                evContainer.querySelectorAll("article > p");
            let eNameText = eName.textContent.split(" ")[1];
            let eNoteText = eNote.textContent.split(" ")[1];
            let eDateText = eDate.textContent.split(" ")[1];

            evLiEl.remove();
            inputNameEl.value = eNameText;
            inputNoteEl.value = eNoteText;
            inputDateEl.value = eDateText;
        });

        const doneBtnEl = document.createElement("button");
        doneBtnEl.classList.add("btn", "done");
        doneBtnEl.textContent = "Done";

        doneBtnEl.addEventListener("click", (e) => {
            let editBtn = e.target;
            let btnContainer = editBtn.parentNode;
            let evContainer = btnContainer.parentNode;
            let evLiEl = evContainer.parentNode;
            let [eName, eNote, eDate] =
                evContainer.querySelectorAll("article > p");

            evLiEl.remove();

            const pNameEl = document.createElement("p");
            pNameEl.textContent = eName.textContent;

            const pNoteEl = document.createElement("p");
            pNoteEl.textContent = eNote.textContent;

            const pDateEl = document.createElement("p");
            pDateEl.textContent = eDate.textContent;

            const articleEl = document.createElement("article");
            articleEl.appendChild(pNameEl);
            articleEl.appendChild(pNoteEl);
            articleEl.appendChild(pDateEl);

            const doneLiEl = document.createElement("li");
            doneLiEl.classList.add("event-item");
            doneLiEl.appendChild(articleEl);

            doneEvenetsUlEl.appendChild(doneLiEl);

        });

        const divButtonsEl = document.createElement("div");
        divButtonsEl.classList.add("buttons");
        divButtonsEl.appendChild(editBtnEl);
        divButtonsEl.appendChild(doneBtnEl);

        const divEl = document.createElement("div");
        divEl.classList.add("event-container");
        divEl.appendChild(articleEl);
        divEl.appendChild(divButtonsEl);

        const liItem = document.createElement("li");
        liItem.classList.add("event-item");
        liItem.appendChild(divEl);

        upcomingUlEl.appendChild(liItem);

        inputNameEl.value = "";
        inputNoteEl.value = "";
        inputDateEl.value = "";
    });
}
