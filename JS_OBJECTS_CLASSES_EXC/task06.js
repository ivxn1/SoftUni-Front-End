function solve(wordsArr) {

    const targetWords = wordsArr[0].split(' ');
    let targetObj = {}
    for (const w of targetWords) {
        targetObj[w] = 0;
    }

    for (let i=1; i<wordsArr.length; i++) {
        if (targetObj.hasOwnProperty(wordsArr[i])) targetObj[wordsArr[i]]++;
    }

    Object.entries(targetObj)
    .sort((a,b) => b[1] - a[1])
    .forEach(([word, count]) => console.log(`${word} - ${count}`));
    
}

solve([

'this sentence',

'In', 'this', 'sentence', 'you', 'have',

'to', 'count', 'the', 'occurrences', 'of',

'the', 'words', 'this', 'and', 'sentence',

'because', 'this', 'is', 'your', 'task'

]);

solve([

'is the',

'first', 'sentence', 'Here', 'is',

'another', 'the', 'And', 'finally', 'the',

'the', 'sentence']);