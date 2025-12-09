// function swapCompleteArray(arr) {
//     for (let i=0; i < arr.length / 2; i++) {
//         swapTwoElements(arr, i, arr.length - 1 - i);
//     }
//     console.log(arr);
    
//     function swapTwoElements(arr, i, j) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
// }



// let arr = [1, 2, -3, 10, 20, 40, -15, 5];
// swapCompleteArray(arr);

// ------------------------------------------------------------

// function transformToUpperCase(message) {
//     return message.toUpperCase();
// }

// function transformToLowerCase(message) {
//     return message.toLowerCase();
// }

// function transformText(message, transformFunc) {
//     console.log(transformFunc(message));
// }

// transformText('Hi, Ivan!', transformToLowerCase);


// ------------------------------------------------------------

let increment = x => x + 1;

console.log(increment(5));

let sum = (a, b) => a + b;

console.log(sum(2, 3));

