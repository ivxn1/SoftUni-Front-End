function solve(cats) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;

        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
            
        }     
    }

    for (let c of cats) {
        let [name, age] = c.split(' ');
        let currCat = new Cat(name, age);
        currCat.meow()
    }
}

solve(['Mellow 2', 'Tom 5']);
solve(['Candy 1', 'Poppy 3', 'Nyx 2']);