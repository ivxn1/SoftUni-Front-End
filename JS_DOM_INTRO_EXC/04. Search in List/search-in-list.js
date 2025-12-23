function solve() {
    const searchInput = document.getElementById("searchText");
    const liItems = Array.from(document.querySelectorAll("ul#towns > li"));
    const searchWord = searchInput.value;
    const resultField = document.getElementById("result");
    result = 0;

    liItems.forEach((i) => {
        i.style.textDecoration = "none";
        i.style.fontWeight = "normal";
    });

    if (searchWord !== '') {
        for (const i of liItems) {
            if (i.textContent.includes(searchWord)) {
                result++;
                i.style.textDecoration = "underline";
                i.style.fontWeight = "bold";
            }
        }

        resultField.textContent = `${result} matches found`;
    }
}
