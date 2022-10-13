'use strict';

const btn = document.querySelector('button');

/*btn.onclick = function() {
    alert('Click');
;}*/

btn.addEventListener('click', () => {
    alert('Click');
});

const deleteElement = (event) => {
    console.log(event.target);
};

btn.addEventListener('click', (event) => {
    console.log(event.target);
    event.target.remove();
    console.log('Hover');
});

btn.addEventListener('click', deleteElement);