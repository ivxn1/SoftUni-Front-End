/**
 * 
 * @param {String} product 
 * @param {Number} quantity 
 */

function orderPriceCalc(product, quantity) {

    const product_single_price = {
        'coffee': 1.50,
        'water': 1.00,
        'coke': 1.40,
        'snacks': 2.00
    }

    total_price = product_single_price[product] * quantity;
    console.log(total_price.toFixed(2));
    
}

orderPriceCalc('water', 5);
orderPriceCalc('coffee', 2);