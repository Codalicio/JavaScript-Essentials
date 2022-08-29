// call(), apply() and bind() methods of objects:

// call():

function hello() {
    console.log("Hello world!");
};

hello.call();

// Example:

function about(hobby, favMusician) {
    console.log(`User's Firstname : ${this.firstName}, User's Age : ${this.age}, User's Hobbies : ${hobby} and User's Favorite-Musician : ${favMusician}`);
};

about("Rock-climbing", "Himesh Reshamiya");

const user1 = {
    firstName: "Harshit",
    age: 23,
    // about: function(hobby, favMusician) {
    //     console.log(`User's Firstname : ${this.firstName}, User's Age : ${this.age}, User's Hobbies : ${hobby} and User's Favorite-Musician : ${favMusician}`);
    // }
};

// user1.about("Rock-climbing", "Himesh Reshamiya");
about.call(user1, ['singing', 12, {one: "two"}], "Laxmikant-Pyarelal");

const user2 = {
    firstName: "Mohit",
    age: 18,
};

about.call(user2, "guitar", "Mozart");

// apply():

about.apply(user1, ["Cricket", "Bach"]);
about.apply(user2, ["Soccer", "Kishore Kumar"]);

// bind():

const returnedFuncUser1 = about.bind(user1, "coding & programming", "Anu Malik");
returnedFuncUser1();

const returnedFuncUser2 = about.bind(user2, "Chess", "B-Praak");
returnedFuncUser2();
