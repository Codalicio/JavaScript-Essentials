// object destructuring:

// array destructuring:

const array1 = ["1", "2", "3"];
// const [item1, , item2] = array1;
const [item1, item2, ...restArray] = array1;
console.log(item1);
console.log(item2);
console.log(restArray);

// object destructuring:

const band = {
    bandName: "Led Zeppelin",
    famousSong: "Stairway to heaven",
    age: 54,
    year: 1968
}

// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, ":", famousSong);

// const {bandName, famousSong, year, age} = band;
// console.log(bandName, ":", famousSong, "is", age, "years old as it was sung in the year", year, ".");

const {bandName:var1, famousSong:var2, ...restProps} = band;
console.log(var1, ":", var2);
console.table(restProps);
