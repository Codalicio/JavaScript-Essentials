// nested if else :

let winningNumber = 18;

let userGuess = +prompt("Guess a number?");

if (userGuess === winningNumber) {
    console.log(`Your guess is right.`);
} else {
    if (userGuess < winningNumber) {
        console.log(`Too low!`);
    } else {
        console.log(`Too high!`);
    }
}

// Or,

// let winningGuess = 45;

const guessTheNumber = (userGuess, winningGuess) => {
    if (userGuess === winningGuess) {
        return `Your guess is right.`;
    } else {
        if (userGuess < winningGuess) {
            return `Too low!!!`;
        } else {
            return `Too high!!!`;
        }
    }    
}

console.log(guessTheNumber(41, 41));


