'use strict';

const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());

let start = new Date();
for (let i = 0; i < 10000; i++) {
    let some = i ** 3;
}
let end = new Date();
alert(`Цикл отработал за ${end-start} миллисекунд`);