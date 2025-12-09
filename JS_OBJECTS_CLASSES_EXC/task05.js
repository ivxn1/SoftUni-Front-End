function solve(heroArr) {

    let heroes = [];

    for (let h of heroArr) {
        let [name, level, items] = h.split(' / ');

        let currHero = {name, level: Number(level), items};
        heroes.push(currHero);
    }

    for (const heroData of heroes.sort((a,b) => a.level - b.level)) {
        console.log(`Hero: ${heroData.name}`);
        console.log(`level => ${heroData.level}`);
        console.log(`items => ${heroData.items}`);
        
    }

} 

solve([

'Isacc / 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara'

]);