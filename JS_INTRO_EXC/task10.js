function sameNumbers(num) {
    let targetDigit = num % 10;
    let sum = 0;
    let areDigitsSame = true;
    while (num !== 0) {
        let currentLastDigit = num % 10;
        if (currentLastDigit !== targetDigit) {
            areDigitsSame = false;
        }
        sum += currentLastDigit;
        num = Math.floor(num / 10);
    }
    console.log(areDigitsSame);
    console.log(sum);
    
}

sameNumbers(2222222);
sameNumbers(1234);