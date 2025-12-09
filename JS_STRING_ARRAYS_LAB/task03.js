function evenOddSubtraction(arr) {
    let even = 0;
    let odd= 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] % 2 ===0) {
            even += arr[i];
        }
        else {
            odd += arr[i];
        }
    }
    console.log(even - odd);
    
}

evenOddSubtraction([1, 2, 3, 4, 5, 6]);
evenOddSubtraction([3, 5, 7, 9]);
evenOddSubtraction([2, 4, 6, 8, 10]);