function solve(names) {

    let people = [];

    for (let n of names) {
        const obj = { name: n, personalNumber: n.length };
        people.push(obj);
    }

    for (const employee of people) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
        
    }

}

solve([

'Silas Butler',

'Adnaan Buckley',

'Juan Peterson',

'Brendan Villarreal'

]);

solve([

'Samuel Jackson',

'Will Smith',

'Bruce Willis',

'Tom Holland'

]);