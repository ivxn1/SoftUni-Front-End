/**
 * 
 * @param {Number} x 
 * @param {Number} y 
 * @param {Number} z 
 */

function printSmallestNum(x, y, z) {

    // Solution 1
    // let smallestNum = x;
    // if (smallestNum > y) {
    //     smallestNum = y;
    // }
    // if (smallestNum > z) {
    //     smallestNum = z;
    // }
    // console.log(smallestNum);

    //Solution 2
    /**
     * 
     * @param {Array} array 
     */
    function findMin(array) {

        let min = Number.MAX_VALUE;

        for (const el of array) {
            if (el < min) min = el;
        }

        return min;
    }
    
    const numbers = [x, y, z];
    console.log(findMin(numbers));
}

printSmallestNum(2, 5, 3);
printSmallestNum(600, 342, 123);
printSmallestNum(25, 21, 4);
printSmallestNum(2, 2, 2);