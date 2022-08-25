// Methods of 'strings' :

// 'Strings' are immutable, i.e., these methods doesn't change the original string, it gives a new one instead!

// trim() :
// trim() method is used to eradicate unnecessary spaces in a 'string'.
// trim() method gives a new string.

let firstName = "   Amit   ";
console.log(firstName);
console.log(firstName.length);
console.log(firstName[3]);

firstName = firstName.trim(); // "Amit"
console.log(firstName);
console.log(firstName.length);
console.log(firstName[2]);

// toUpperCase() :
// toUpperCase() method changes all the characters' of the 'string' to 'UPPERCASE' :

let lastName = "  raj  ";
console.log(lastName);
console.log(lastName.length);

lastName = lastName.trim().toUpperCase();
console.log(lastName);
console.log(lastName.length);
console.log(lastName[lastName.length - 3]);

// toLowerCase() :
// toLowerCase() method changes all the characters' of the 'string' to 'lowercase' :

let myName = "     ViShWaJeEt     ";
console.log(myName);
console.log(myName.length);
console.log(myName[myName.length - 7]);

myName = myName.trim().toLowerCase();
console.log(myName);
console.log(myName.length);
console.log(myName[myName.length - 5]);


// slice

let myBro = "Neeraj";
console.log(myBro);

myBro = myBro.slice(0); // 'slice' gives all the remaining successive index values if only the 'start index' is provided, also including the value at the 'start index'!
console.log(myBro);

myBro = myBro.slice(0, 4); // 'slice' doesn't include the value of the 'end index', when provided!
console.log(myBro);
