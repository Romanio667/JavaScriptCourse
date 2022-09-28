"use strict";

const numberOfFilms = +prompt('How mane films you have watched', '');

const personalMovieDB={
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('What film have you watched last', ''),
    b=prompt('Your assessment', ''),
    c = prompt('What film have you watched last', ''),
    d=prompt('Your assessment', '');
    personalMovieDB.movies[a]=b;
    personalMovieDB.movies[c]=d;

console.log(personalMovieDB);