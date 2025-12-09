function solve(firstName, lastName, hairColor) {

    let personObj = {
        name: firstName,
        lastName,
        hairColor
    }

    let objToJson = JSON.stringify(personObj);

    console.log(objToJson);
    

}

solve('George', 'Jones',

'Brown');

solve('Peter', 'Smith',

'Blond');