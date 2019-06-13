

/*
for (i = 0; i < 6; i++ ) {
    console.log(Math.floor(Math.random()*49 + 1));
}



for (i = 1; i < 10; i++){
console.log(i);
}


let favouriteFilms = [
    "Gladiator",
    "Back to the future",
    "Back to the future 2",
    "Back to the future 3",
    "Blade"
]

favouriteFilms.push("New film1")
favouriteFilms.push("New film1")

for(let i =0; i<favouriteFilms.length; i++)
console.log(favouriteFilms[i]);
*/

let favouriteFilms = [
    "Gladiator",
    "Back to the future 2",
    "Ghostbusters",
    "Blade"
]

    for(let i =0; i<favouriteFilms.length; i++);
    console.log(favouriteFilms[i]);


    const filmCheck = (thirdFilm) => {
        if (thirdFilm[2] == "Ghostbusters");{
            return("yey its ghostbusters");
        }
        else {
            return("No it not");
        }
    }
        console.log(filmCheck(favouriteFilms));

/*
    while(thirdFilm != "Gladiator"){

        console.log(thirdFilm);
        thirdFilm = favouriteFilms.length[Math.floor(Math.random()*4];
    }

    console.log(thirdFilm)
*/