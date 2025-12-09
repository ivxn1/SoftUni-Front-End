/**
 * 
 * @param {Number} x 
 * @param {Number} y 
 * @param {Number} z 
 */
function solve(x, y, z) {


    /**
     * 
     * @param {Number} currSum 
     * @param {Number} z 
     */
    function subtract(currSum, z) {

        result = currSum - z;
        return result
    }

    /**
     * 
     * @param {Number} x1 
     * @param {Number} y1 
     */
    function sum(x1, y1) {

        sumNums = x1 + y1;
        return sumNums;

    }

    result = subtract(sum(x, y), z);

    console.log(result);
    
}

solve(23, 6, 10);
