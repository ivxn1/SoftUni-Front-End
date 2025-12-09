function solve(songs) {

    class Song {

        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

    }

    let count = songs.shift();
    let type = songs.pop();
    let songsObjects = [];

    for (let i=0; i<count; i++) {

        let [typeList, name, time] = songs[i].split('_');
        let currSong = new Song(typeList, name, time);
        songsObjects.push(currSong);

    }

    if (type === 'all') {
        songsObjects.forEach(x => console.log(x.name));
    }
    else {
        for (let s of songsObjects) {
            if (s.typeList === type) console.log(s.name);
            
        }
    }

}

solve([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
solve([4,

'favourite_DownTown_3:14',

'listenLater_Andalouse_3:24',

'favourite_In To The Night_3:58',

'favourite_Live It Up_3:48',

'listenLater']);

