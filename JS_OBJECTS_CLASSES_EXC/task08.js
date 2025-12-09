function solve(commands) {

    let cars = {};
    
    for (const c of commands) {
        const [command, number] = c.split(', ');

        if (command === 'IN') cars[number] = true;
        else cars[number] = false;

    }

    const carsInLot = Object.entries(cars)
    .filter(([, isCarIn]) => isCarIn)
    .sort((a,b) => a[0].localeCompare(b[0]));

    if (carsInLot.length === 0) console.log("Parking Lot is Empty");

    else carsInLot.forEach(([number]) => console.log(number));

}

solve(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU']);

solve(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA']);