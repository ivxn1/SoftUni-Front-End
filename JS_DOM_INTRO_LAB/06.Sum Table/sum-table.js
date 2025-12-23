function sumTable() {
    const costItems = Array.from(document.querySelectorAll('tbody > tr > td:nth-child(2)'));
    const sumItem = costItems[costItems.length-1];

    let sum = 0;
    for (let i =0; i<costItems.length - 1; i++) {
        sum += Number(costItems[i].textContent);
    }

    sumItem.textContent = sum;
}