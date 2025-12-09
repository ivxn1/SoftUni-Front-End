function fruit(name, grams, ppk) {
    let kgs = grams / 1000
    let price = kgs * ppk;
    console.log(`I need $${price.toFixed(2)} to buy ${kgs.toFixed(2)} kilograms ${name}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);