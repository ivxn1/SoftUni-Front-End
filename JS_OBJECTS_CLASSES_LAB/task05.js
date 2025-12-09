function solve(phoneBook) {

    let phoneBookObj = {};

    for (let e of phoneBook) {

        let [name, number] = e.split(' ');
        phoneBookObj[name] = number;

    }

    let phoneBookObjEntries = Object.entries(phoneBookObj);

    for (let [name, number] of phoneBookObjEntries) {
        console.log(`${name} -> ${number}`);
        
    }

}

solve(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344']);

solve(['George 0552554',

'Peter 087587',

'George 0453112',

'Bill 0845344']);