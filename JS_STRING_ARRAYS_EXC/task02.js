/**
 * 
 * @param {Array} arr 
 * @param {number} step 
 */

function printNthElement(arr, step) {
    final_arr = [];
    for (let i =0; i < arr.length; i += step) {
        final_arr.push(arr[i]);
    }
    return final_arr;
    
    
}

printNthElement(['5',

'20',

'31',

'4',

'20'],

2);

printNthElement(['dsa', 'asd', 'test', 'tset'], 2);
printNthElement(['1', '2', '3', '4', '5'], 6);