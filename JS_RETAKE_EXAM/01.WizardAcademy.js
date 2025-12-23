function solve(input) {
    // number of students to enroll
    const n = Number(input[0]);
    let students = {};

    // enroll students
    for (let i = 1; i <= n; i++) {
        const sData = input[i].split("-");
        const sName = sData[0];
        const sSpells = sData[1].split(",");
        const sMana = Number(sData[2]);

        students[sName] = { sSpells, sMana };
    }

    // perform commands

    let index = 1 + n;
    while (input[index] !== "Spell Concluded!") {
        const commData = input[index].split(" * ");

        const action = commData[0];
        const stName = commData[1];
        const currSt = students[stName];

        switch (action) {
            case "Cast Spell":
                {
                    const spell = commData[2];
                    const manaReq = Number(commData[3]);

                    if (
                        (currSt.sMana >= manaReq) &
                        currSt.sSpells.includes(spell)
                    ) {
                        currSt.sMana -= manaReq;
                        console.log(
                            `${stName} successfully cast ${spell} and now has ${currSt.sMana} mana!`
                        );
                    } else {
                        console.log(
                            `${stName} cannot cast ${spell} due to lack of Spell or mana!`
                        );
                    }
                }
                break;
            case "Meditate":
                {
                    const manaRec = Number(commData[2]);
                    if (currSt.sMana === 100) {
                        console.log(`${stName} is already at full mana!`);
                    } else if (currSt.sMana + manaRec > 100) {
                        let startMana = currSt.sMana;
                        let difference = 100 - startMana;
                        console.log(
                            `${stName} meditated and recovered ${difference} mana!`
                        );
                        currSt.sMana = 100;
                    } else {
                        currSt.sMana += manaRec;
                        console.log(
                            `${stName} meditated and recovered ${manaRec} mana!`
                        );
                    }
                }
                break;
            case "Learn":
                {
                    const spell = commData[2];
                    if (currSt.sSpells.includes(spell)) {
                        console.log(`${stName} already knows ${spell}.`);
                    } else {
                        currSt.sSpells.push(spell);
                        console.log(`${stName} has learned ${spell}!`);
                    }
                }
                break;
        }

        index++;
    }

    for (const st of Object.entries(students)) {
        console.log(`Student: ${st[0]}`);
        console.log(`- Spells: ${st[1].sSpells.join(', ')}`);
        console.log(`- Mana: ${st[1].sMana}`);
        
        
        
    }
}

solve([
    "3",
    "Harry Potter-Lumos,Wingardium Leviosa-80",
    "Hermione Granger-Stupefy,Expecto Patronum-10",
    "Ron Weasley-Expelliarmus-60",
    "Cast Spell * Harry Potter * Wingardium Leviosa * 30",
    "Meditate * Hermione Granger * 20",
    "Meditate * Ron Weasley * 50",
    "Learn * Ron Weasley * Accio",
    "Cast Spell * Ron Weasley * Accio * 70",
    "Spell Concluded!",
]);

/*
solve(([
"3",
"Elias-Fireball,Lightning Bolt-100",
"Lyra-Teleport,Heal-5",
"Zane-Transfiguration-70",
"Meditate * Elias * 50",
"Cast Spell * Lyra * Teleport * 10",
"Learn * Lyra * Fireball",
"Cast Spell * Lyra * Fireball * 2",
"Cast Spell * Zane * Transfiguration * 80",
"Learn * Elias * Lightning Bolt",
"Spell Concluded!"
])
);
*/
