
// Shorthand Object Properties

/*
// A nice and easy way to creat an object literal when you have variables.
// const getStats = (arr) => {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     const sum = arr.reduce((sum, r) => sum + r);
//     const avg = sum / arr.length;
//     // I wanna return an object with all these stats

//     return {
//         max: max,
//         min: min,
//         sum: sum,
//         avg: avg
//     }
// }

// const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

// const stats = getStats(reviews);




// but with shorthand syntax, we can do this!

const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r) => sum + r);
    const avg = sum / arr.length;
    // I wanna return an object with all these stats
    // taking variables then use them as key names & values at the same time
    return {
        max,
        min,
        sum,
        avg
    }
}

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const stats = getStats(reviews);


function pick(arr) {
    // return random element from arr
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function getCard() {
    const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
    const value = pick(values);
    const suit = pick(suits);
    return {
        value,
        suit
    };
}
*/

// Computed Properties
/*

// Another nice new syntax addition to object...
// we can add properties with dynamic keys..
// add to objects.. or return object ..
const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

// 이렇게 설정하면 we'll end up with a key 'role'
// role이 키 자리에 있어서 이걸 변수로 인식하지 않기 때문에 (not computed!) 'host가 아닌 'role'이 키값이 됨.
// person은 'Jools Holland'
// const team = {
//     role: person
// }

// const team = {};
// team[role] = person; // {host: 'Jools Holland'};
// team[role2] = person2; // {host: 'Jools Holland', Director : 'James Cameron'};

// with computed properties

const user = 'Jools';

const userRoles = {
    // user will be evaluated first
    [user]: 'Admin'
}
userRoles; // {Jools: "Admmin"};

const team = {
    [role]: person,
    [role2]: person2,
    [1 + 6 + 9]: 'sixteen' // 16 : 'sixteen'
}

// not using computed properties
// function addProp(obj, k, v) {
//     // we wanna return a new object with key and value
//     const copyp = { ...obj }; // use spread! an easy way to make a copy!

//     copy[k] = v;
//     return copy;
// }


// using computed properties.. arrow function this time..
const addProp = (obj, k, v) => {
   // return문을 생략할 수는 없음. {} 이게 object인지 함수 {}인지 알 수 없기 때문.
    return {
        ...obj,
        [k]: v
    }
}

const res = addProp(team, 'happy', ':)');
// happy : ':)' 이 team object에 더해져있음.
*/

// Adding Methods to Objects
/*
"hello".toUpperCase(); // a method!

// when we add function to an object, it's a method!
// i thought strings were not objects..? let's put that aside for now.


const math = {
    add: function (x, y) {
        return x + y;
    },
    multiply: function (x, y) {
        return x * y;
    },
    divide: function (x, y) {
        return x / y;
    },
    square: function (x) {
        return x * x;
    },
}

math.add(2, 5); // 7
math.multiply(3, 5); // 15

// Think about Math.random() .. we have Math object and there's a function with a key name of random is insdie the object!
*/

// Method Shorthand Syntax

/*
// key value pair를 안쓰고 밑에처럼 그냥 함수를 쓸 수 있음.
// we still need a comma to separate the property..
// we don't have to write all the function expressions...

const math = {
    blah: 'Hi!',
    add(x, y) {
        return x + y;
    },
    multiply(x, y) {
        return x * y;
    }
}

math.add(50, 60); // 110

const auth = {
    username: 'TommyBot',
    login() {
        console.log("LOGGED YOU IN!");
    },
    logout() {
        console.log("GOODBYE!");
    }
}

auth.login(); // LOGGED YOU IN!
*/

// Intro to the keyword THIS

/*
function sayHi() {
    console.log("HI");
    console.log(this);
}

sayHi(); // "HI", a bunch of Window methods....
// when we define a functino, it looks like it's floating on its own... in the middle of nowhere...
// but if we look at this Window object, there's a method named sayHi in there!!!!
// so THIS inside of function sayHi refers to Window object

window.alert('LOL');
alert('LOL'); // same result

var color = 'teal';
// if we look at Window again, the variable color is added to the global scope, to the Window object!
// let & const 에는 해당 없음.


const greet = function () {
    console.log(this); // we're not even greeting lol
}
// this is still Window ...

// THIS is a reference to an object, and that object is the current execution scope!!!!
// 현재 실행되는 범위의 오브젝트를 가리킴.
*/

// Using THIS in Methods
/*
const person = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'Cher',
    fullName() {
        console.log(this);
        const { first, last, nickName } = this;
        return `${first} ${last} AKA ${nickName}`;
    },
    // a different method using this
    printBio() {
        // get the full name from fullName
        const fullName = this.fullName();
        // fullName(); wouldn't work.
        // We have to use this. to reference the object!

        console.log(`${fullName} is a person!`);
    }
}

person.fullName();
// this time, it's not console.logging Window! it's something else.
// in this case, the value of THIS is the object itself! person object.
// 왜 지금 이 fullName 함수가 들어가있는 현재 오브젝트가 중요한 걸까? 만약 내가 fullName에서 오브젝트 안의 first 와 last를 로그하고 싶다면. console.log(this.first); 를 쓸 수 있음

// console.log(`${this.first} ${this.last} AKA ${this.nickName}`)

person.nickName = 'CHERRRRRR'; // nickName has been updated.

// this. 를 사용함으로써 같은 object 안의 다른 property나 다른 method를 사용할 수 있게됨.

person.printBio();
// Cherilyn Sarkisian AKA CHERRRRRR is a person!

*/


// THIS : Invocation Context
// shape-shifter.... how do we change the value of THIS?

/*
const person = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'Cher',
    fullName() {
        console.log(this);
        const { first, last, nickName } = this;
        return `${first} ${last} AKA ${nickName}`;
    },

    printBio() {
        // it references the window...!!
        console.log(this);
        const fullName = this.fullName();
        console.log(`${fullName} is a person!`);

    },

    laugh: () => {
        console.log(this);
        console.log(`${this.nickName} says HAHAHAHAH`);
    }
}

// pointing this variable to the function... it's still a property of a person object
const printBio = person.printBio;
// TypeError : this.fullName is not a function ... what does this reference here then? it references Window here!

person.printBio(); // this is refering to the object!

// if we call printBio() itself then THIS will be set to the global scope, which is Window.

// there are three special methods for setting THIS ... we'll talk about it later.

// with arrow functinos...
// arrow functions don't get their own version of THIS.

person.laugh();
// the value of THIS is set to the WINDOW!
// it's different from what we saw from printBio
// that's why we don't use arrow functions as methods in an object

// undefined says HAHAHAHA

// first we defined something with THIS in an object.. when we called it as methods this was set to the entire object.
// the way you actually invoke it does matter!

*/

// Annoyomatic Demo
/*
// here's an array of annoying phrases....
// 여기 있는 짜증나는 표현들을 3초마다 랜덤으로 보여주는 함수를 만들고 전부를 오브젝트에 넣어보자.

const annoyer = {
    phrases: ['literally', 'cray cray', "I can't even", 'Totes!', 'YOLO', "Can't Stop, Won't stop"],
    pickPhrase() {

        const { phrases } = this; // destructure..

        // this gives me random index from the array
        const idx = Math.floor(Math.random() * phrases.length);

        return phrases[idx];
    },
    start() {
        // 이 start라는 메소드가 담겨있는 전체 오브젝트를 가리키기 위해 this를 사용할 수 있다.
        // console.log(this.pickPhrase()); // works!

        // setInterval takes two elements!
        // setInterval을 그냥 놔두면 무한반복하기 때문에 이걸 어떤 변수에 저장하고 return값으로 받은다음 얘를 멈춰줄 수 있는 함수도 따로 만들 것임.

        // 이렇게만 써도 this.는 이 object를 가리키고 말하자면 timerId라는 키값이 추가된 형태인 것임.
        this.timerId = setInterval(

            //function () {

            //console.log(this.pickPhrase()); // Error!
            // WHY? 여기 this의 value는 Window임. 왜 start() 안의 this는 해당 오브젝트인데 start()안의 setInterval() 안의 this는 Window일까? 우리는 여기서 start()라는 메소드를 직접 annoyer.start()로 불러서 실행하지만 setInterval은 우리가 실행하는 메소드가 아님.
            // 만약 내가 이 nested function 안에서 this.pickPhrase()를 쓰고 싶다면... 이걸 변수에 미리 저장해서 쓰는 방법이 있었음. 별로 ideal하진 않음. 그치만 여기서 arrow function을 쓰면 쉬워짐. 이렇게 되면 문제를 전부 피할 수 있음! arrow function은 this를 갖지 않는다고 한거 기억남? 그래서 arrow 안에 this. 가 있으면 js는 ()=> 바깥에 있는 this.를 찾아가게 됨.!!!
            // arrow안에는 this 값이 없기 때문에 어떨 때는 쓰기에 불편하지만 이런 경우에는 arrow function을 쓰는 것이 낫다.

            () => {

                console.log(this.pickPhrase());

            }, 3000)
    },
    stop() {
        clearInterval(this.timerId);
        console.log('PHEW THANK HEAVENS THAT IS OVER!');
    }
}

// we'll use setInterval
// annoyer.start();
// annoyer.stop();
// annoyer.pickPhrase(); // we get random element each time

// 이렇게 하면 어떤 func 함수가 3초마다 반복된다.
// setInterval(func, 3000);
*/

// Putting It All Together : Deck Of Cards!
// Some Practice
// We won't be covering any more new syntax...
// Why do we wanna use objects with functions?
// Draw a single card at a time, and put it in a discard pile?


// function makeDeck() {
//     const deck = [];
//     const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
//     const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
//     for (let value of values.split(',')) {
//         for (let suit of suits) {
//             deck.push({
//                 // object에 추가할 때 키값이 value이면 그냥 추가됨.
//                 value,
//                 suit
//             })
//         }
//     }
// 여기서는 deck을 return해서 어떤 변수에 저장했어야만 했음.
// deck의 값을 어디 저장하지 않으면 함수가 실행되고 deck의 값은 그대로 사라지기 때문에. object에서는 prperty의 값을 바꾸는 것이기 때문에 return할 필요가 없음.
//     return deck;
// }

function drawCard(deck) {
    // pop one off
    // pop()은 어떤 value를 return하고 original array도 바꾸는 것에 주의하자.
    return deck.pop();
}

// const myDeck = makeDeck();
// const card1 = drawCard(myDeck);

// 오브젝트를 만들어 그 안에 다 넣어보자.
// we're grouping the data with functionality!
// sometimes it's so much better to put everything in an object
// const myDeck = {
//     deck: [],
//     suits: ['hearts', 'diamonds', 'spades', 'clubs'],
//     values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
//     initialiseDeck() {
//         // destructure
//         const { suits, values, deck } = this;
//         for (let value of values.split(',')) {
//             for (let suit of suits) {
//                 // 이미 위에서 destructure했기 때문에 여기서 this.deck이라고 쓸 필요 없음.
//                 deck.push({
//                     // object에 추가할 때 키값이 value이면 그냥 추가됨.
//                     value,
//                     suit
//                 })
//             }
//         }
//         //   return deck;
//     },
//     drawCard() {
//         // before we return it, we'll add it to a drawn card pile
//         const card = this.deck.pop();

//         // drawnCards
//         this.drawnCards.push(card);
//         return card;
//     },
//     drawMultiple(numCards) {
//         const cards = [];
//         for (let i = 0; i < numCards; i++) {
//             cards.push(this.drawCard()); // draws a single card, adds it to the drawn card pile, return that card
//         }
//         return cards;
//     },
//     shuffle() {
//         // destructuring the deck out of THIS
//         // we don't have to pass anything in!
//         const { deck } = this;
//         for (let i = deck.length - 1; i > 0; i--) {
//             let j = Math.floor(Math.random() * (i + 1));
//             // swap, nice way of swapping stuff using destructure
//             [deck[i], deck[j]] = [deck[j], deck[i]];

//         }
//     }
// }


const makeDeck = () => {
    return {
        deck: [],
        suits: ['hearts', 'diamonds', 'spades', 'clubs'],
        values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
        initialiseDeck() {
            // destructure
            const { suits, values, deck } = this;
            for (let value of values.split(',')) {
                for (let suit of suits) {
                    // 이미 위에서 destructure했기 때문에 여기서 this.deck이라고 쓸 필요 없음.
                    deck.push({
                        // object에 추가할 때 키값이 value이면 그냥 추가됨.
                        value,
                        suit
                    })
                }
            }
            //   return deck;
        },
        drawCard() {
            // before we return it, we'll add it to a drawn card pile
            const card = this.deck.pop();

            // drawnCards
            this.drawnCards.push(card);
            return card;
        },
        drawMultiple(numCards) {
            const cards = [];
            for (let i = 0; i < numCards; i++) {
                cards.push(this.drawCard()); // draws a single card, adds it to the drawn card pile, return that card
            }
            return cards;
        },
        shuffle() {
            // destructuring the deck out of THIS
            // we don't have to pass anything in!
            const { deck } = this;
            for (let i = deck.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                // swap, nice way of swapping stuff using destructure
                [deck[i], deck[j]] = [deck[j], deck[i]];

            }
        }
    }
}

// Much Cleaner!
const myDeck = makeDeck();
myDeck.initialiseDeck();
myDeck.shuffle();
const card = myDeck.drawCard();
const card1 = myDeck.drawMultiple(4);
myDeck.deck; // 51 cards


// 완전히 다른 object! 이렇게 함으로써 두개의 다른 deck array를 만들 수 있게 됨.
// 이게 최선의 방법은 아님! 아직 안배워서 다룰 수가 없음.
const deck2 = makeDeck();
deck2.initialiseDeck();


// not the point of the video though....
// function shuffle(arr) {
//     // loop over the array backwards
//     // pick a random index thats smaller than the chosen index, then swap it with the chosen index
//     //  there are different ways of shuffling...
//     for (let i = arr.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         // swap, nice way of swapping stuff using destructure
//         [arr[i], arr[j]] = [arr[j], arr[i]];

//     }
// }

const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
// swaps the elements in place!!!
[letters[0], letters[3]] = [letters[3], letters[0]];
// ['d', 'b', 'c', 'a', 'e', 'f']