function solve(jsonFormat) {

        let jsonToObject = JSON.parse(jsonFormat);
        let objEntries = Object.entries(jsonToObject);

        for (let e of objEntries) {
            console.log(`${e[0]}: ${e[1]}`);
            
        }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');
solve('{"name": "Peter", "age": 35, "town": "Plovdiv"}')