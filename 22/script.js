'use strict';

function User(name, id) {
    this.name=name;
    this.id=id;
    this.human=true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
} 

const ivan = new User('Ivan', 28);
ivan.hello();