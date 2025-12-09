/**
 * 
 * @param {String} symbol1 
 * @param {String} symbol2 
 */

function solve(symbol1, symbol2) {

    let codeOne = symbol1.charCodeAt(0);
    let codeTwo = symbol2.charCodeAt(0);

    /**
     * 
     * @param {Number} firstCode 
     * @param {Number} secondCode 
     * @returns 
     */
    function getSymbols(firstCode, secondCode) {

        symbols = [];

        for (let i=firstCode + 1; i < secondCode; i++) {
            symbols.push(String.fromCharCode(i));
        }

        return symbols;
    }

    let result;
    
    if (codeOne < codeTwo) result = getSymbols(codeOne, codeTwo);
    else result = getSymbols(codeTwo, codeOne);

    console.log(result.join(' '));
    
}

solve('a', 'd');
solve('#', ":");
solve('C', '#');