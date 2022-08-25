/*
if
else if
else if
else if
else
*/

let tempInDegree = 16;

    if (tempInDegree < 0) {
        console.log( `It's freezing outside!`);
    } else if (tempInDegree < 16) {
        console.log( `It's cold outside!`);
    } else if (tempInDegree < 25) {
        console.log( `It's a normal sunny day.`);
    } else if (tempInDegree < 35) {
        console.log( `Let's go for a swim.`);
    } else if (tempInDegree < 45) {
        console.log( `Turn on the AC!`);
    } else {
        console.log( `It's very hot outside!`);
    }

    console.log(`Hello`);

// Or,

const weather = (tempInDegree) =>{

    if (tempInDegree < 0) {
        console.log( `It's freezing outside!`);
    } else if (tempInDegree < 16) {
        console.log( `It's cold outside!`);
    } else if (tempInDegree < 25) {
        console.log( `It's a normal sunny day.`);
    } else if (tempInDegree < 35) {
        console.log( `Let's go for a swim.`);
    } else if (tempInDegree < 45) {
        console.log( `Turn on the AC!`);
    } else {
        console.log( `It's very hot outside!`);
    }

}

weather(44);

console.log(`Bye`);

// Or,

const todayWeather = (temperature) => {

    if (temperature > 44) {
        return `It's very hot outside!`;
    } else if (temperature > 34) {
        return `Turn on the AC!`;
    } else if (temperature > 24) {
        return `Let's go for a swim.`;
    } else if (temperature > 15) {
        return `It's a normal sunny day.`;
    } else if (temperature > -1) {
        return `It's cold outside.`;
    } else {
        return `It's freezing outside!`;
    }

}

console.log(todayWeather(45));

console.log(`That's alright!`);



