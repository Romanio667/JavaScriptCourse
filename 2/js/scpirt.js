"use strict";

const numberOfFilms = +prompt('How mane films you have watched', '');

const personalMovieDB={
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i=0; i<2; i++) {
    const a = prompt('What film have you watched last', ''),
    b=prompt('Your assessment', '');
    personalMovieDB.movies[a]=b;
}
console.log(personalMovieDB);