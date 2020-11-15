"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

console.log(numberOfFilms);

let persomalMoviDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let movie1 = prompt('Один из последних просмотренных фильмов?',''),
    score1 = prompt('На сколько вы его оцените?', ''),
    movie2 = prompt('Один из последних просмотренных фильмов?',''),
    score2 = prompt('На сколько вы его оцените?','');

persomalMoviDB.movies[movie1] = score1;
persomalMoviDB.movies[movie2] = score2;


console.log(persomalMoviDB);
