/*

// Arrays
// To make an empty array
let students = [];

let shoppingList = ['cereal', 'cheese', 'ice'];
let lotto = [45, 27, 12, 23, 35, 34];

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];


let shoppingList = ['Cheddar Cheese', '2% Milk'];

shoppingList[1] = 'Whole Milk'; // mordified!
shoppingList[shoppingList.length] = 'Ice Cream'; // a new item has been added to the array!!!

*/

/*

// Array methods : push&pop

let topSongs = [
    'First Time Ever I Saw Your Face',
    'God Only Knows',
    'A Day In The Life',
    'Life On Mars'
];

topSongs.push('Fortunate Son');
topSongs.push(true);

topSongs.pop(); // gets the last element and rid of it.. returns the last element itself. So in this case, it returns true.

const nextSong = topSongs.pop();
// in this way we can get the last element from the array..
// in thie case it will be 'Fortunate Son'
// Using pop(), we will be reading the array backwords though...
// Once you pop something off, it's gone.

*/

/*

// shift & unshift

let dishesToDo = ['big platter'];
dishesToDo.unshift('large plate'); // returns 2
dishesToDo.unshift('small plate'); // returns 3
dishesToDo.unshift('cereal bowl'); // returns 4

// ["cereal bowl",""small plate", "large plate", "big platter"]

// you can add in multiple things at once with unshift...
// dishesToDo.unshift('fork','knife');
// it adds stuff in this order
// you can do this with push as well

dishesToDo.shift(); // returns "cereal bowl"
dishesToDo.shift(); // returns "small plate"
dishesToDo.shift(); // returns "large plate"

*/

// more methods!

/*
// concat()
// it's used to merge two or more arrays. This method doesn't change the existing arrays, but instead returns a new array.

let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'brussel sprouts'];
let meats = ['steak', 'chicken breast'];

console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits)); // order matters..

let allFood = fruits.concat(veggies, meats);

*/

/*

// includes & indexOf
// they do the similar thing but return different values.

// includes(): determinds whether an array includes a certain vlue among its entreis, returning boolean value.
// Not available in IE!!!!!!


let ingredients = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'eel',
    'butter'
];

ingredients.includes('fish'); // false
ingredients.includes('shrimp'); // true
ingredients.includes('corn'); // false.. it's looking for the direct match

ingredients.includes('water', 3); // false... "is there 'water' after the index of 3?"

if (ingredients.includes('flour')) {
    console.log('I AM GLUTEN FREE, I CANNOT EAT THAT');
}

// indexOf(): returns the first index at which a given element can be found in the array, or -1 if it's not present. Just like with the string...

ingredients.indexOf('eel'); // 6
ingredients.indexOf('maple syrup'); // -1, non-existent

// just like with includes(), we can specify the starting index.. not that useful though..

ingredients.indexOf('cheese', 5); // -1
ingredients.indexOf('cheese', 2); // 3

*/

/*
// reverse & join

// reverse() : reverses an array in place. It doesn't make a copy, it actually impacts .. mutates the original array.

//let letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];

//letters.reverse(); // ["R", "E", "S", "P", "E", "C", "T"];

// join() : creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

let letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];

letters.join('&'); // returns "T&C&E&P&S&E&R"
letters.reverse(), join('.'); // returns "R.E.S.P.E.C.T"

// what if we have an array with different data types?

let arr = [12.3, 60, false];
arr.join(); // returns "12.3,60,false"... turns them int a string

*/

/*
// slice()

// slice(): returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

let swimmers = aminals.slice(0, 3); // copies a portion of animals

let mammals = animals.slice(2, 4); // end not included

// let reptiles = animals.slice(4, 6); // index 6 doesn't exist.. but...   [lizard, tortoise]

let reptiles = animals.slice(4) // it goes all the way to the end from the index 4 .... [lizard, tortoise]

// there's one other thing... negative number..

let quadruped = animals.slice(-3); // reversed order, 3 elements from the end..

// animals.slice(-3,-1);
// returns ['bear','lizard'] starts from 3 elements back from the end, then stops at 1 element back from the end..

// if you don't give any index.. slice() will copy the entire array .. so some people use slice() to just quickly copy an arr

let copy = animals.slice(); // like this.

*/

/*

// splice()

// splice() : changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original arr.

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

// let's say i wanna insert sth after 'shark'.

animals.splice(1, 0, 'octopus');
// 1 is the starting index, 0 means how many you'd delete in this case we're not deleting anything so 0... then we're adding 'octopus' after the index 1.
//  ["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]

animals.splice(3, 2); // starting at the index of 3, how many? 2.. and we're not inserting anything...
// ["shark", "octopus", "salmon", "lizard", "tortoise"]

animals.splice(3, 0, 'snake', 'frog');
// starting at the index of 3, not removing anything, adding a couple of elements.
// ["shark", "octopus", "salmon", "snake", "frog", "lizard", "tortoise"]

// You DO have to put 0 in there!!! Otherwise you'll confuse the splice method. The second argument will always be the number of the elements you wanna delete.

animals.splice(0, 2, 'SHARK!', 'OCTOPUS!');

// You will still use push() or pop() far far more than splice() but splice() can be very powerful..

*/

// sort()

// sort() : sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code

let people = ['Mrs. Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne'];

people.sort(); // ["Angie", "Jolene", "Maggie May", "Mrs. Robinson", "Roxanne"] ... it's alphabetically correct ... and the orginal array has been updated as well. (sorted 'in place')

let nums = [34, 10, 100000, 67, 99];

nums.sort(); //  [10, 100000, 34, 67, 99]
// it's not sorting based off the numeric value... it's converting every single value in the array to a string then compare its UTF-16 code..... it's pretty unique and almost nobody uses it this way.

