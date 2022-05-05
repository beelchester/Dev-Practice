const FavBand = {
    name: "Daft Punk",
    nationality: "US",
    genre: "Electronic",
    members: 2,
    formed: 1994,
    split: 2021,
    albums: [{
        name: "Homework",
        released: 1997
    },{
        name: "Random Access Memory",
        released: 2013
    }]
}

const bandInfo = `${FavBand.name} is an ${FavBand.nationality} ${FavBand.genre} band with ${FavBand.members} members.
There last two albums are ${FavBand.albums[0].name} released in ${FavBand.albums[0].released} and ${FavBand.albums[1].name} released in ${FavBand.albums[1d].released}. Years active: ${FavBand.formed}-${FavBand.split}`
