'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
hearts.forEach(item => {
    console.log(item);
});
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');
console.log(oneHeart);

box.style.backgroundColor='blue';
box.style.width = '500px';

box.style.cssText='background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor='red';

for(let i=0; i<hearts.length; i++){
    hearts[i].style.backgroundColor='blue';
}

hearts.forEach(item => {
    item.style.backgroundColor='blue';
});

const div = document.createElement('div');
const text = document.createTextNode('I was here');

const div2 = document.createElement('div');
div2.classList.add('black');
document.body.append(div2);
wrapper.append(div2);//after
wrapper.prepend(div2);//before
hearts[0].before(div2);
hearts[0].after(div2);
circles[0].remove();
hearts[0].replaceWith(circles[0]);