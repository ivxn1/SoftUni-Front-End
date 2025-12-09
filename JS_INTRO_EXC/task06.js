function sumDigits(num) {
    let sum = 0;
    let numToStr = num.toString();
    for (let i=0; i<numToStr.length; i++) {
        sum += Number(numToStr[i]);
    }
    console.log(sum);
    
}

// Alternative way
//
// function sumDigits(num) {
//  let sum = 0;
//  while (num !== 0) {
//      sum += num % 10;
//      num = Math.floor(num / 10);
//  }
//  console.log(sum);
//
// }




sumDigits(245678);
sumDigits(97561);
sumDigits(543);