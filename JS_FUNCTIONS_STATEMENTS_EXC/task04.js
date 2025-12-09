/**
 * 
 * @param {Number} num 
 */

function solve(num) {
    let even = 0;
    let odd = 0;

    /**
     * 
     * @param {Number} number 
     */
    
    function getDigits(number) {

        digits = [];

        do {

            currDigit = number % 10;
            digits.push(currDigit);
            number = Math.floor(number / 10);

        } while (number > 0)
        
        return digits.reverse();
    }

    result = getDigits(num);

    for (const n of result) {

        if (n % 2 === 0) even += n;
        else odd += n;

    }

    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
    
}

solve(1000435);
solve(3495892137259234);
solve(0);