/**
 * @param {Array} arr
 * @param {number} rotations
 */

function arrayRotation(arr, rotations) {

//First solution

// Optimisation in case of lots of rotations parsed (1000000) - because on every n-th (length of arry) rotation the array will go back to its' original form

//     rotations = rotations % arr.length; 
//     for (let i = 0; i<rotations; i++) {
//         first_element = arr.shift();
//         arr.push(first_element);
//     }
//     console.log(arr.join(' '));
    
// Second solution

    let new_array = [];
    for (let i=0; i< arr.length; i++) {
        new_array.push(arr[(rotations +i) % arr.length])
    }
    console.log(new_array.join(" "));
    
}



arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);