function solve(addressBook) {
    let addressBookObj = {};

    for (let a of addressBook) {
        let [name, address] = a.split(':');

        addressBookObj[name] = address;
    }

    let addressBookObjEntries = Object.
                                entries(addressBookObj).
                                sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, address] of addressBookObjEntries) {
        console.log(`${name} -> ${address}`);
        
    }
}

solve(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd']);

solve(['Bob:Huxley Rd',

'John:Milwaukee Crossing',

'Peter:Fordem Ave',

'Bob:Redwing Ave',

'George:Mesta Crossing',

'Ted:Gateway Way',

'Bill:Gateway Way',

'John:Grover Rd',

'Peter:Huxley Rd',

'Jeff:Gateway Way',

'Jeff:Huxley Rd']);