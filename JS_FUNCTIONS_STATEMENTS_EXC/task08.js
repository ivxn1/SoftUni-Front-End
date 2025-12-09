function solve(n) {
    function checkNum() {
        let result = 1;

        for (let i=2; i*i <= n; i++) {

            if (n % i === 0) {
                result += i;

                if (i !== n/i) result += n/i;
            }
        }

        return result === n

    }

    checkNum() ? console.log("We have a perfect number!") : console.log("It's not so perfect.");
    
}

solve(6);
solve(28);
solve(81);
solve(1236498);