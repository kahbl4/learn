'use strict';

let personalMoviDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {

        personalMoviDB.count = +prompt("Сколько фильмов вы уже посмотрели?",'');
        
        while (personalMoviDB.count =='' || personalMoviDB.count == null || isNaN(personalMoviDB.count)) {
            personalMoviDB.count = +prompt("Сколько фильмов вы уже посмотрели?",'');
        }
        
    },
    rememberMyFilm: function () {

        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?',''),
                b = prompt('На сколько вы его оцените?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMoviDB.movies[a] = b;
                console.log('Done!');
            } else {
                console.log("Произошла ошибка");
                i--;
            }
        }
    
    },
    detectMyLvl: function() {
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
    
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMoviDB);
        } else {}
    },
    toggleVisibleMyDB: function(){
        if (personalMoviDB.privat){
            personalMoviDB.privat = false;
        } else {personalMoviDB.privat = true;
        }
    },
    writeYourGenres: function(){
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre === '' || genre === null){
                console.log("Вы ввели неверные данные либо не ввели их вовсе.");
                i--;                
            } else {
                personalMoviDB.genres[i - 1] = genre;
            }           
        }
        personalMoviDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }

};

