"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

console.log(numberOfFilms);

let personalMoviDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?','');
    let b = prompt('На сколько вы его оцените?', '');

    if (a != ' ' && b != ' ' && a != null && b != null && a.length > 50 ) {
        personalMoviDB.movies[a] = b;
    } else {
        i--;
    }
}
if (personalMoviDB.count < 10){
    console.log("Просмотрено довольно мало фильмов");
}else{
    if (personalMoviDB.count < 30){
        console.log("Просмотрено довольно мало фильмов");
    } else {
        if (personalMoviDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }        
    }
}


console.log(personalMoviDB);
