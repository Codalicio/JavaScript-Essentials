// if else condition :

let age = 18;

if (age >= 18) {
    console.log(`You can play 'God of War'.`);
} else {
    console.log(`You can play 'Mario'.`);
}

// Or,

let num = 14;

if (num % 2 === 0) {
    console.log(`${num} is even.`);
} else {
    console.log(`${num} is odd.`);
}


// Truthy and Falsy values :

// Falsy values :

// 1.) false
// 2.) ""
// 3.) null
// 4.) undefined
// 5.) 0 (zero)


// 1.) false :

let firstName = "Amit";

if (false) {
    console.log(firstName);
} else {
    console.log(`Firstname is false as the 'conditional parameter' is set to 'false'.`);
}

// Or,

let fullName = false;

if (fullName) {
    console.log(fullName);
} else {
    console.log(`FullName is false as the variable 'fullName' is set to ${fullName}.`);
}

// 2.) "" :

let lastName = "";

if (lastName) {
    console.log(lastName);
} else {
    console.log(`Lastname is kinda empty as the variable 'lastName' is set to empty string.`);
}

// 3.) null :

let myBro = null;

if (myBro) {
    console.log(myBro);
} else {
    console.log(`myBro is null as the variable 'myBro' is set to ${myBro}.`);
}

// 4.) undefined :

let myName;

if(myName) {
    console.log(myName);
} else {
    console.log(`myName is undefined as the value of myName is ${myName}.`);
}

// 5.) 0 (zero) :

let myAge = 0;

if(myAge) {
    console.log(`My age is ${myAge}.`);
} else {
    console.log(`My age is 23.`);
}

// Or,

let myApp = 0;

if(myApp) {
    console.log(`My app has ${myApp} as a value.`);
} else {
    console.log(`My app is ${myApp} years' old.`);
}


// Truthy values :

// 1.) Strings with characters : "abc", "xyz", 'Amit', etc.
// 2.) Numbers except (0) : 1, -5, 5.9.


// 1.) Strings with characters :

let car = "Honda City";

if(car) {
    console.log(`I owe a car named ${car}.`);
} else {
    console.log(`I don't have a car named ${car}.`);
}

// 2.) Numbers except (0) :

let length = 5.9;

if (length) {
    console.log(`The length of my lawn is ${length} metres.`);
} else {
    console.log(`The length of my swimming pool is ${length} metres.`);
}


// Truthy values (Reference Data types) :

// 1.) Arrays
// 2.) Objects

// 1.) Arrays :

let myNumbs = [2, 5, 8, 9];

if (myNumbs) {
    console.log(`My set of array has ${myNumbs}.`);
} else {
    console.log(`My numbers are ${myNumbs}.`);
}

// 2.) Objects :

let personInfo = {
    firstName : 'Amit',
    lastName : 'Raj',
    age : 23,
    phoneNumber : +917257938190,
    address : 'Sanchi-patti, Hajipur, Bihar (Vaishali) - 844101',
}

if (personInfo) {
    console.log(`The person's address is ${personInfo.address}.`);
} else {
    console.log(`Sorry! Address is not available.`);
}

