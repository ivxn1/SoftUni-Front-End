function solve(x, y) {

    // Solution 1 - recursion
    function factorial(n) {
        if (n === 1 || n === 0) return 1;
    
        return n * factorial(n-1);
    }

    resultX = factorial(x);
    resultY = factorial(y);

    console.log((resultX / resultY).toFixed(2));
    
    // Solution 2 - iterations
    function factorial2(n) {

        result = 1;

        for (let i=2; i<=n; i++) result *= i;

        return result;
    }

    resultX = factorial2(x);
    resultY = factorial2(y);

    console.log((resultX / resultY).toFixed(2));


}

solve(5, 2);
solve(6, 2);