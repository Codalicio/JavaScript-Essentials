// 'prototype' of a function:

function hello() {
    console.log("Hello World!");
};
hello();

// JavaScript function ==> function + Object.
// functions also have 'name' property which tells the name of the function:

console.log(hello.name);

// You can add your own properties to a function:

hello.myOwnProperty = "Hello folks!";
console.log(hello.myOwnProperty);

// functions provide more useful properties and methods:
// Methods like: call(), apply() and bind().

// functions also gives us a free space as an object, i.e., an empty object which is called 'prototype':

console.log(hello.prototype);
hello.prototype.name = "Amit";
hello.prototype.sing = function() {
    return "toon toon ta nana na...!";
};
console.log(hello.prototype);
console.log(hello.prototype.name);
console.log(hello.prototype.sing());

// 'prototype' is present only for 'functions' whereas for 'objects' we have '__proto__':
if(hello.prototype) {
    console.log(`Prototype is present.`);
} else {
    console.log(`prototype is not present!`);
};
