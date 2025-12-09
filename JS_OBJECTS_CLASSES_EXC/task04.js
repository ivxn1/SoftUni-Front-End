function solve(commands) {
    let movies = {};
    let patterns = [
        /addMovie (?<name>.+)/,
        /(?<name>.+) directedBy (?<director>.+)/,
        /(?<name>.+) onDate (?<date>.+)/
    ];

    for (let c of commands) {
        let match;
        if ((match = c.match(patterns[0])) !== null) {

            let name = match.groups.name;
            movies[name] = {name};
            
        }
        else if ((match = c.match(patterns[1])) !== null) {
            let name = match.groups.name;
            let director = match.groups.director;

            if (movies.hasOwnProperty(name)) {
                movies[name].director = director;
            }

        }
        else if ((match = c.match(patterns[2])) !== null) {
            let name = match.groups.name;
            let date = match.groups.date;

            if (movies.hasOwnProperty(name)) {
                movies[name].date = date;
            }

        }

    }

    for (const m of Object.values(movies)) {
        if (m.hasOwnProperty("date") && m.hasOwnProperty("director")) console.log(JSON.stringify(m));
    }
}

solve([

'addMovie Fast and Furious',

'addMovie Godfather',

'Inception directedBy Christopher Nolan',

'Godfather directedBy Francis Ford Coppola',

'Godfather onDate 29.07.2018',

'Fast and Furious onDate 30.07.2018',

'Batman onDate 01.08.2018',

'Fast and Furious directedBy Rob Cohen'

]);