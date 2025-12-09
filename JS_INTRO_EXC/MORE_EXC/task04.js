function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalCost = 0;

    for (let i=1; i<= lostFightsCount; i++){
        if (i % 2===0) {
            totalCost += helmetPrice;
        }
        if (i % 3===0) {
            totalCost +=swordPrice;
        }

        if (i % 6===0) {
            totalCost += shieldPrice;
        }

        if (i % 12===0) {
            totalCost+= armorPrice;
        }
    }

    console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`);
    
}


//Solution 2

// function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
//     const totalCost = Math.trunc(lostFightsCount / 2) * helmetPrice
//                     + Math.trunc(lostFightsCount / 3) * swordPrice
//                     + Math.trunc(lostFightsCount / 6) * shieldPrice
//                     + Math.trunc(lostFightsCount / 12) * armorPrice;

//     console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`);
    
// }

solve(7, 2, 3, 4, 5);
solve(23, 12.50, 21.50, 40, 200);