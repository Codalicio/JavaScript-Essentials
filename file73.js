"use strict"
console.log(this);
console.log(window);
console.log(this === window);

function myFunc() {
    console.log(this);
};
myFunc();
