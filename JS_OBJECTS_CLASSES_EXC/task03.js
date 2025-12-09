function solve(stock, ordered) {
    let products = {};

    function collectData(arr) {
        for (let i=0; i<arr.length; i+=2) {
            let name = arr[i];
            let quantity = Number(arr[i+1]);

            if (!(name in products)) products[name] = 0;
            products[name] += quantity;
        }
    }

    collectData(stock);
    collectData(ordered);

    for (const [name, quantity] of Object.entries(products)) {
        console.log(`${name} -> ${quantity}`);
        
    }
}

solve([

'Chips', '5', 'CocaCola', '9', 'Bananas',

'14', 'Pasta', '4', 'Beer', '2'

],

[

'Flour', '44', 'Oil', '12', 'Pasta', '7',

'Tomatoes', '70', 'Bananas', '30'

]);

