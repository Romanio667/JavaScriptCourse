"use strict";

const soldier = {
    health:400,
    armor:100,
    sayHello: function() {
        console.log("hello");
    }
};

const john = {
    health:100
};

const john2=Object.create(soldier);

Object.setPrototypeOf(john, soldier);
john.sayHello();

 