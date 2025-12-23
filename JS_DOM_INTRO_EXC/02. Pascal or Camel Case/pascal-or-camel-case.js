function solve() {
    const givenText = document.getElementById("text").value.toLowerCase();
    const convention = document.getElementById("naming-convention").value;
    const resultField = document.getElementById("result");

    const wordsList = givenText.split(" ");
    let result = [];

    function capitalize() { 

        for (const w of wordsList) {
            currWord = w[0].toUpperCase() + w.slice(1);
            result.push(currWord);
        }

        return result;
    }

    if (convention === "Camel Case") {
        const firstWord = wordsList.shift();
        result.push(firstWord);
        result.push(capitalize());

    } else if (convention === "Pascal Case") {
        result = capitalize();
    }
    else result.push('Error!')

    resultField.textContent = result.join("");
}
