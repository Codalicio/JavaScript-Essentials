// switch statement :

const myDeck = (val) => {

    switch (val) {
        case 2 :
            return `2ggi`;
            break;
        case 3 :
            return `3ggi`;
            break;
        case 4 :
            return `4wa`;
            break;
        case 5 :
            return `5ja`;
            break;
        case 6 :
            return `6kka`;
            break;
        case 7 :
            return `7aa`;
            break;
        case 8 :
            return `8aa`;
            break;
        case 9 :
            return `9ahla`;
            break;
        case 10 :
            return `10aa`;
            break;
        case 'A' :
            return `Ekka`;
            break;
        case 'J' :
            return `Gulaam`;
            break;
        case 'K' :
            return `King`;
            break;
        case 'Q' :
            return `Queen`;
            break;
        default :
            return `Invalid input`;
            break;
    }  

}

console.log(myDeck("Q"));


// Or,

const names = (lastName) => {

    switch (lastName) {
        case 'Singh' :
            return `Rajendra`;
            break;
        case 'Raj' :
            return `Amit`;
            break;
        case 'Kumar' :
            return `Vishwajeet`;
            break;
        case '' :
            return `Neeraj`;
            break;
        default :
            return `Invalid lastName`;
            break;
    }

}

console.log(names(''));

// Or,

const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const todayIs = (dayValue) => {
    if (dayValue === 0) {
        return day[0];
    } else if (dayValue === 1) {
        return day[1];
    } else if (dayValue === 2) {
        return day[2];
    } else if (dayValue === 3) {
        return day[3];
    } else if (dayValue === 4) {
        return day[4];
    } else if (dayValue === 5) {
        return day[5];
    } else if (dayValue === 6) {
        return day[6];
    } else {
        return `Invalid Input!...Please insert a number between 0 and 6`;
    }
}

console.log(todayIs(7));

// Or,

const today = (val) => {

    switch (val) {
        case 0 :
            return day[0];
            break;
        case 1 :
            return day[1];
            break;
        case 2 :
            return day[2];
            break;
        case 3 :
            return day[3];
            break;
        case 4 :
            return day[4];
            break;
        case 5 :
            return day[5];
            break;
        case 6 :
            return day[6];
            break;
        default :
            return `Invalid Input!...Please insert a number between 0 and 6`;
            break;
    }

}

console.log(today(3));

// Or,

let value = 5;

switch (value) {
    case 0 :
        console.log(day[0]);
        break;
    case 1 :
        console.log(day[1]);
        break;
    case 2 :
        console.log(day[2]);
        break;
    case 3 :
        console.log(day[3]);
        break;
    case 4 :
        console.log(day[4]);
        break;
    case 5 :
        console.log(day[5]);
        break;
    case 6 :
        console.log(day[6]);
        break;
    default :
        console.log(`Invalid Input!...Please insert a number between 0 and 6`);
        break;
}




