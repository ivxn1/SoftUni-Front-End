window.addEventListener("load", solve);

function solve() {
    const addBtnEl = document.getElementById("add-btn");
    const titleInputEl = document.querySelector(
        "section#add-article-form input#title"
    );
    const authorInputEl = document.querySelector(
        "section#add-article-form input#author"
    );
    const summaryInputEl = document.querySelector(
        "section#add-article-form textarea#summary"
    );
    const draftUlEl = document.querySelector("#draft-list");
    const publishedUlList = document.querySelector("ul#published-list");

    function createDraftEl() {
        const title = titleInputEl.value;
        const author = authorInputEl.value;
        const summary = summaryInputEl.value;

        const titlePEl = document.createElement("p");
        titlePEl.textContent = title;

        const authorPEl = document.createElement("p");
        authorPEl.textContent = author;

        const summaryPEl = document.createElement("p");
        summaryPEl.textContent = summary;

        const articleEl = document.createElement("article");
        articleEl.appendChild(titlePEl);
        articleEl.appendChild(authorPEl);
        articleEl.appendChild(summaryPEl);

        const editBtnEl = document.createElement("button");
        editBtnEl.textContent = "Edit";
        editBtnEl.classList.add("edit-btn");

        const approveBtnEl = document.createElement("button");
        approveBtnEl.textContent = "Approve";
        approveBtnEl.classList.add("approve-btn");

        const btnsContEl = document.createElement("div");
        btnsContEl.classList.add("buttons");
        btnsContEl.appendChild(editBtnEl);
        btnsContEl.appendChild(approveBtnEl);

        const liEl = document.createElement("li");
        liEl.appendChild(articleEl);
        liEl.appendChild(btnsContEl);
        return liEl;
    }

    addBtnEl.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        draftUlEl.appendChild(createDraftEl());

        titleInputEl.value = "";
        authorInputEl.value = "";
        summaryInputEl.value = "";
        addBtnEl.disabled = true;

        const editDraftBtnEl = document.querySelector(
            "#draft-list > li > div > button.edit-btn"
        );

        const approveBtnEl = document.querySelector(
            "#draft-list > li > div > button.approve-btn"
        );
        editDraftBtnEl.addEventListener("click", (e) => {
            const draftLiItem = e.target.parentNode.parentNode;
            const title = draftLiItem.querySelector(
                "article > p:nth-child(1)"
            ).textContent;
            const author = draftLiItem.querySelector(
                "article > p:nth-child(2)"
            ).textContent;
            const summary = draftLiItem.querySelector(
                "article > p:nth-child(3)"
            ).textContent;

            draftLiItem.remove();

            titleInputEl.value = title;
            authorInputEl.value = author;
            summaryInputEl.value = summary;
            addBtnEl.disabled = false;
            draftLiItem.appendChild(createDraftEl());
        });

        approveBtnEl.addEventListener("click", (e) => {
            const draftLiItem = e.target.parentNode.parentNode;
            const title = draftLiItem.querySelector(
                "article > p:nth-child(1)"
            ).textContent;
            const author = draftLiItem.querySelector(
                "article > p:nth-child(2)"
            ).textContent;
            const summary = draftLiItem.querySelector(
                "article > p:nth-child(3)"
            ).textContent;

            draftLiItem.remove();

            const tPEl = document.createElement("p");
            tPEl.textContent = title;

            const aPEl = document.createElement("p");
            aPEl.textContent = author;

            const sPEl = document.createElement("p");
            sPEl.textContent = summary;

            const articleEl = document.createElement("article");
            articleEl.appendChild(tPEl);
            articleEl.appendChild(aPEl);
            articleEl.appendChild(sPEl);

            const publishBtnEl = document.createElement("button");
            publishBtnEl.classList.add("publish-btn");
            publishBtnEl.textContent = "Publish";

            const liEl = document.createElement("li");
            liEl.appendChild(articleEl);
            liEl.appendChild(publishBtnEl);

            publishedUlList.appendChild(liEl);

            publishBtnEl.addEventListener("click", (e) => {
                const publishLiItem = e.target.parentNode;
                publishLiItem.remove();
                addBtnEl.disabled = false;
            });
        });
    });
}
