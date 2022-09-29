"use strict";

function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function LearnJC(lang, callback) {
    console.log(`learning: ${lang}`);
    callback();
}

function done() {
    console.log('I completed this work');
}

LearnJC('JavaScript', function() {
    console.log('I completed this work');
});

LearnJC('JavaScript', done);

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();
console.log(options.name);

delete options.name;
console.log(options);

for(let key in options){
    if(typeof(options[key])==='object'){
        for(let i in options[key]){
            console.log(`Properties ${i} have value ${options[key][i]}`); 
        }
    } else {
        console.log(`Properties ${key} have value ${options[key]}`);
    }
}

console.log(Object.keys(options).length);
const {border, bg} = options.colors;
console.log(border);

const arr2=[1,2,3,6,8];
arr2.pop();
arr2.push(10);

for (let value of arr2){
    console.log(value);
}

arr2.forEach(function(item, i, arr2){
    console.log(`${i}: ${item} into arr2 ${arr2}`);
});

const str = prompt("question", "");
const products = str.split(", ");
console.log(products);