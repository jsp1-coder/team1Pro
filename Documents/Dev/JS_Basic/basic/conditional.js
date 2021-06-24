
/*

IF

if (1 !== 1) {
    console.log("It's True!");
}

// Example 2

let rating = 3;

if (rating === 3) {
    console.log("YOU ARE A SUPERSTAR!");
}

// Example 3
let num = 37;

if (num % 2 != 0) {
    console.log("ODD NUMBER");
}

*/

/*

// ELSE IF

// Performance Review
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// anything else - wtf?

let rating = 213;

if (rating === 3) {
    console.log("YOU ARE A SUPERSTAR");
}
else if (rating === 2) {
    console.log("MEETS EXPECTATIONS!");
}
else if (rating === 1) {
    console.log("NEEDS IMPROVEMENT");
}
else {
    console.log("INVALID RATING!");
}

// Example 2

let highScore = 1500;
let userScore = 1200;

if (userScore >= highScore) {
    console.log(`Congrats, you have the new high score of ${userScore}`);
    highScore = userScore;
}
else {
    console.log(`Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`);

}

*/

/*

// Nesting conditionals

let password = 'hellokitty';

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!");
    }
    else {
        console.log("Password is long enough, but cannot contain spaces");
    }
}
else {
    console.log("Password must be longer!");
}

*/

/*

// Truthy & Falsy

let mystery = 0;

if (mystery) {
    console.log("TRUTHY");
}
else {
    console.log("FALSY");
}

let loggedInUser = null;

// We are not checking if it equals something.. we're checknig if it's TRUTHY
if (loggedInUser) {
    console.log("YOU ARE LOGGED IN!");
}
else {
    console.log("PLEASE LOG IN!");
}

*/

/*

AND (&&)

let password = "chickenGal";

if (password.length >= 8 && password.indexOf('') !== -1) {
    console.log("VALID PASSWORD");
}
else {
    console.log("INVALID PASSWORD");
}

*/

/*

// Switch statement

let day = 3;

switch (day) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
        console.log("SATURDAY");
        break;
    case 7:
        console.log("SUNDAY");
        break;
    default:
        console.log("INVALID DAY");
}

*/

// Ternary operators

let num = 2;

if (num === 7) {
    console.log("lucky!");
}
else {
    console.log("BAD!");
}


// num === 7 ? console.log("lucky!") : console.log("BAD!")

let status = 'offline';
let color = status === 'offline' ? 'red' : 'green';