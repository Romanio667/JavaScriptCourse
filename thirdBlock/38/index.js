'use strict';

//new RegExp('pattern', 'flags');
// /pattern/f

const ans = prompt('Введите ваше имя');
const reg = /n/ig;
console.log(reg.test(ans));
//i g m
// \d  \w  \s
// \D \W \S

console.log(ans.search(reg));
console.log(ans.match(reg));


const pass = prompt('Password');
console.log(pass.replace(/\./g, "*"));

console.log('12-34-56'.replace(/-/g, ':'));

