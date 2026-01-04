function addItem() {
    const text = document.getElementById("newItemText").value;
    const ulEl = document.getElementById("items");

    const newLiItem = document.createElement("li");
    newLiItem.textContent = text;

    ulEl.appendChild(newLiItem);


}
