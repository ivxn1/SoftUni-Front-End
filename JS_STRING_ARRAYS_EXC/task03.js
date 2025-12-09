/**
 * 
 * @param {Array} arr 
 */

function listOfNames(arr) {
    arr
    .sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .forEach((el, i) => console.log(`${i + 1}.${arr[i]}`));
}

listOfNames(["John",

"Bob",

"Christina",

"Ema",

"bob"
])