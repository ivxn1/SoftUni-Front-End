function solve() {
    const inputData = document.querySelector(
        "div#inputs > textarea"
    ).value;
    const bestROutput = document.querySelector("div#bestRestaurant > p");
    const bestRWrkrsOutput = document.querySelector("div#workers > p");
    let restaurantsData = {};

    for (const r of JSON.parse(inputData)) {
        let [rName, workers] = r.split(" - ");
        workers = workers.split(", ");

        if (!restaurantsData.hasOwnProperty(rName)) {
            restaurantsData[rName] = { workers: {}, avSalary: 0, bstSalary: 0 };
        }

        for (let w of workers) {
            let [wName, wSalary] = w.split(" ");
            restaurantsData[rName].workers[wName] = Number(wSalary);
        }
    }

    let bestR = "";
    let bestRAvgSalary = 0;
    let bestRHighestSalary = 0;

    for (let r of Object.keys(restaurantsData)) {
        let workers = Object.keys(restaurantsData[r].workers);

        let totalSalary = 0;
        let bestSalary = 0;
        for (let w of workers) {
            let currSalary = restaurantsData[r].workers[w];
            if (currSalary > bestSalary) bestSalary = currSalary;
            totalSalary += currSalary;
        }
        restaurantsData[r].avSalary = totalSalary / workers.length;
        restaurantsData[r].bstSalary = bestSalary;

        if (restaurantsData[r].avSalary > bestRAvgSalary) {
            bestR = r;
            bestRAvgSalary = restaurantsData[r].avSalary;
            bestRHighestSalary = restaurantsData[r].bstSalary;
        }
    }

    bestROutput.textContent = `Name: ${bestR} Average Salary: ${bestRAvgSalary.toFixed(2)} Best Salary: ${bestRHighestSalary.toFixed(2)}`;

    bestRWrkrsOutput.textContent = Object.entries(
        restaurantsData[bestR].workers
    )
        .sort((a, b) => b[1] - a[1])
        .map(([wName, wSalary]) => `Name: ${wName} With Salary: ${wSalary}`)
        .join(" ");
}
