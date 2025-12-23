function solve() {
    const userRows = Array.from(document.querySelectorAll("tbody > tr"));
    const inputField = document.getElementById("searchField");
    const inputData = inputField.value;

    userRows.forEach((r) => {
        r.classList.remove("select");

        const cells = r.querySelectorAll("td");

        for (const cell of cells) {
            if (cell.textContent.includes(inputData) && inputData !== '') {
                r.classList.add("select");
                break;
            }
        }
    });

    inputField.value = "";
}
