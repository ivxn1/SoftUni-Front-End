function solve() {
    const number = Number(document.querySelector("#input").value);
    const to = document.querySelector("#selectMenuTo").value;
    const resultInputEl = document.querySelector("#result");
    let transformedNum = null;

    switch (to) {
        case "binary":
            transformedNum = number.toString(2);
            break;
        case "hexadecimal":
            transformedNum = number.toString(16);
            break;
    }

    resultInputEl.value = transformedNum.toUpperCase();
}
