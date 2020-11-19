'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {

    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",'');
    
    while (numberOfFilms =='' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",'');
    }
}

start();

console.log(numberOfFilms);

let personalMoviDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilm() {

    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?',''),
            b = prompt('На сколько вы его оцените?', '');
    
        if (a != null && b != null && a != '' && b != ''  && a.length < 50) {
            personalMoviDB.movies[a] = b;
            console.log('Done!');
        } else {
            console.log("Произошла ошибка");
            i--;
        }
    }

}

rememberMyFilm();

function detectMyLvl() {
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

}

detectMyLvl();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMoviDB);
    } else {}
}

showMyDB(personalMoviDB.privat);

function writeYourGenres(){
    for (let i = 1; i <= 3; i++) {
        personalMoviDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`)
    }
}
writeYourGenres();






console.log(personalMoviDB);
