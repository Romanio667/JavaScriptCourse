'use strict';

const box = document.querySelector('.box'),
    btn = document.querySelector('button');
const width = box.clientWidth;
const height = box.clientHeight;
const height1 = box.offsetHeight;
const width1 = box.offsetWidth;
const width2 = box.scrollWidth;
const height2 = box.scrollHeight;


btn.addEventListener('click', () => {
    box.getElementsByClassName.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);
console.log(style.display);
