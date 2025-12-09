function largestNumber(x, y, z) {
    if (x > y) {
        if (x > z) {
            console.log(`The largest number is ${x}.`);
        }
        else {
            console.log(`The largest number is ${z}.`);
        }
    }
    else {
        if (y > z) {
            console.log(`The largest number is ${y}.`);

        }
        else {
            console.log(`The largest number is ${z}.`);
            
        }
    }
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);