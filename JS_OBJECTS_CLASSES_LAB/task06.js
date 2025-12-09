function solve(meetings) {

    let meetingsObj = {};

    for (let m of meetings) {

        let [day, name] = m.split(' ');

        if (day in meetingsObj) {
            console.log(`Conflict on ${day}!`);
            continue;
        }

        meetingsObj[day] = name;
        console.log(`Scheduled for ${day}`);
        
    }

    let meetingsObjEntries = Object.entries(meetingsObj);

    for (let [day, name] of meetingsObjEntries) {
        console.log(`${day} -> ${name}`);
        
    }

}

solve(['Monday Peter',

'Wednesday Bill','Monday Tim', 'Friday Tim']);

solve(['Friday Bob',

'Saturday Ted',

'Monday Bill',

'Monday John',

'Wednesday George']);