/**
 * 
 * @param {Number} numOne 
 * @param {Number} numTwo 
 * @param {String} operator 
 */

function simpleCalculator(numOne, numTwo, operator) {

    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;

    operations = {
        'add': add,
        'subtract': subtract,
        'multiply': multiply,
        'divide': divide
    }

    console.log(operations[operator](numOne, numTwo));
    
}

simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');