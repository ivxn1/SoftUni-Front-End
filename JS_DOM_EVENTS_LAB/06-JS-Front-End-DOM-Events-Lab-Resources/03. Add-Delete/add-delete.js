function addItem() {
    const text = document.getElementById("newItemText").value;
    const ulEl = document.getElementById("items");

    const newLiItem = document.createElement("li");
    newLiItem.textContent = text;
    const aEl = document.createElement('a');
    aEl.textContent = "[Delete]";
    aEl.href = "#";


    newLiItem.appendChild(aEl);


    ulEl.appendChild(newLiItem);

    aEl.addEventListener('click', () => {
        newLiItem.remove();
    })
}