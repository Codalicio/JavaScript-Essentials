// and operator (&&) and or operator (||) :

// 1.) and operator (&&) :

let firstName = "Amit";

let age = 19;

if (firstName[0] === "A" && age > 18) {
    console.log(`Your name starts with an 'A' and you're above 18.`);
} else {
    console.log(`Either your name doesn't starts with an 'A' or you're below 18.`);
}

// 2.) or operator (||) :

let lastName = "Raj";

let yourAge = 14;

if(lastName[0] === "R" || yourAge > 18) {
    console.log(`Either your name starts with a 'R' or you're above 18.`);
} else {
    console.log(`Either your name doesn't starts with a 'R' or you're below 18.`);
}

