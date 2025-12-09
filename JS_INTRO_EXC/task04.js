function printAndSum(x, y) {
    let finalstring = '';
    let result = 0;
    for (let i = x; i <= y; i++) {
                finalstring += `${i} `
        result += i;
    }
    console.log(finalstring);
    
    console.log(`Sum: ${result}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);