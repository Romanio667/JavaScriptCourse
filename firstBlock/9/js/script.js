'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoAdv = document.querySelectorAll('img'),
    poster = document.querySelector('.promo__bg'),
    promoGenre = poster.querySelector('.promo__genre'),
    movieList=document.querySelector('.promo__interactive-list');

promoAdv.forEach(item => {
    item.remove();
});

promoGenre.textContent='Драма';
poster.style.backgroundImage = 'url("img/bg.jpg")';
movieList.innerHTML="";
movieDB.movies.sort();
movieDB.movies.forEach((film,i)=> {
    movieList.innerHTML += `
    <li class="promo__interactive-item"> ${i+1} ${film}
         <div class="delete"></div>
    </li>
    `;
});