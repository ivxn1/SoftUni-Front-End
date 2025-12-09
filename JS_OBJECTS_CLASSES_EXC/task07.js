function solve(words) {

    let wordsObj = {};

    words.split(' ').forEach((word) => {

        const lower = word.toLowerCase();

        if (!(wordsObj.hasOwnProperty(lower))){
            wordsObj[lower] = 0;
        }

        wordsObj[lower] += 1;
    }
    )

    console.log(
        Object.entries(wordsObj)
            .filter(([, count]) => count % 2 !== 0)
            .sort((a, b) => b[1] - a[1])
            .map(([word]) => word)
            .join(' '))
    ;
    

}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

solve('Cake IS SWEET is Soft CAKE sweet Food');