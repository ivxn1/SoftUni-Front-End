function solve(n) {
    // Solution 1
    // Array.from({ length: n }, () => Array.from({ length: n }, () => n)).forEach(x => console.log(x.join(' ')));

    // Solution 2
    function getRow() {
        result = [];
        for (let i = 0; i < n; i++) {
            result.push(n);
        }
        console.log(result.join(" "));
    }

    for (let i = 0; i < n; i++) {
        getRow();
    }
}
solve(3);
solve(7);
solve(2);
