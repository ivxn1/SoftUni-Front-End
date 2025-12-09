function solve(obj) {
    let cityEntries = Object.entries(obj);

    for (let entry of cityEntries) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}

solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});