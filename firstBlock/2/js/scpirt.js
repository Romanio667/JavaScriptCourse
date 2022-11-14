"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How mane films have you watched', '');

    while (numberOfFilms =='' || numberOfFilms == null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt('How mane films you have watched', '');
    }
}

start();

const personalMovieDB={
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};



function rememberMyFims() {
    for (let i=0; i<2; i++) {
        const a = prompt('What film have you watched last', ''),
        b=prompt('Your assessment', '');
        if(a!=null && b!=null && a!= '' && b!= '' && a.length < 50){
            personalMovieDB.movies[a]=b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFims();

function writeYourGenres() {
    for (let i=1;i<=3;i++) {
        const genre = prompt(`Your favorite genre ${i}`);
        personalMovieDB.genres[i-1]=genre;
    }
}

writeYourGenres();

console.log(personalMovieDB);
 const str = "test";
 console.log(str.toUpperCase());
 console.log(str);

 const fruit = "some fruit";
 console.log(fruit.indexOf("fruit"));

 const logg = "Hello world";
 console.log(logg.slice(6, 11));
 console.log(logg.substring(6, 11));
 console.log(logg.substr(6,5));

 const test="12.2px";
 console.log(parseInt(test));
