/**
 * 
 * @param {*} arr 
 */

function sortNumbers(arr) {

        //1st Solution
        sorted_nums = arr.sort((a,b) => a-b);
        
        let left = 0;
        let right = arr.length - 1;
        final_arr = [];
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 === 0) {
                final_arr.push(arr[left]);
                left++;
            }
            else {
                final_arr.push(arr[right]);
                right--;
            }
        }
        return final_arr;
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);