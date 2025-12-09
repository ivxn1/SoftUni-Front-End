function solve(number) {

    // Return the loading bar string
    function getBar() {
        const readySymbols = number / 10;
        const unreadySymbols = 10 - readySymbols;

        return `[${'%'.repeat(readySymbols)}${'.'.repeat(unreadySymbols)}]`
    }

    // Print the whole formatted output
    let bar = getBar();

    number === 100 
    ? console.log(`${number}% Complete!`) + console.log(bar) 
    : console.log(`${number}% ${bar}`) + console.log("Still loading...");
    
}

solve(30);
solve(50);
solve(100);