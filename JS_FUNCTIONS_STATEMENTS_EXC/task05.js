function solve(numbers) {

    for (let num of numbers) {
        console.log(checkPalindrome(num));
        
    }

    function getDigits(number) {

        digits = [];

        do {

            currDigit = number % 10;
            digits.push(currDigit);
            number = Math.floor(number / 10);

        } while (number > 0);

        return digits;
        
    }

    function checkPalindrome(num) {

        const digitList = getDigits(num);
        const reversedList = getDigits(num).reverse();

        
        // Solution 1
        // for (let i=0; i < digitList.length; i++) {

        //     // if (digitList[i] !== digitList[digitList.length - (i + 1)]) {
        //     //     return false;
            
        //     // }

        // }


        // Solution 2
        for (let i=0; i < digitList.length; i++) {
            if (digitList[i] !== reversedList[i]) {
                return false;
            }
        }

        return true;
    }

}

solve([123, 323, 421, 121]);
solve([32, 2, 232, 1010]);
