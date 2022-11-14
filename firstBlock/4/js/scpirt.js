"use strict";

let a = 5,
    b=a;

b=b+5;

console.log(b);
console.log(a);

const obj = {
     a:5,
     b:1
};

const copy=obj; //Link

copy.a=10;
console.log(copy);
console.log(obj);

function copyFunc(mainObject) {
    let objCopy={};

    let key;
    for(key in mainObject) {
        objCopy[key] = mainObject[key];
    }
    return objCopy;
}

const numbers = {
    a:2,
    b:5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyFunc(numbers);//upper copy
newNumbers.a=10;
console.log(newNumbers);

const add= {
    d:17,
    e:20
};

console.log(Object.assign(numbers, add));
const clone = console.log(Object.assign({}, add));
clone.d=20;
console.log(add);
console.log(clone);

const oldArray = ['a','b','c'];
const newArray=oldArray.slice();
newArray[1]='aaaadsd';
console.log(newArray);
console.log(oldArray);

const video = ['youtube','vimeo','rutube'],
    blogs=['wordpress','livejournal','blogger'],
    internet=[...video, ...blogs, 'vk', 'facebook'];
console.log(internet);

const array3=['a','b'];
const newArray3=[...array3];

const q = {
    one:1,
    two:2
};
const newObj3={...q};