/*

function grumpus() {
    console.log('ugh...you again...');
    console.log('for the last time...');
    console.log('LEAVE ME ALONE!!!');
}

// grumpus();

// Dice roll function

function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}

// rollDie();

// 다른 함수를 어떤 함수 안에서 호출할 수도 있음.
function throwDice() {
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
}

throwDice();
*/

// arguments

/*
// function greet() {
//    console.log('Hi');
//}

// javascript는 nickname의 타입은 따지지 않는다. 그냥 제일 첫번째로 전달된 arg 를 nickname으로 생각함.
//function greet(nickname) {
//    console.log(nickname);
//    console.log('Hi');
//}

//greet('Tim'); // Tim  Hi

function greet(nickname) {
    console.log(`Hi, ${nickname}`);
}

greet('Tim');

// throwDice를 실제로 함수를 여러번 복붙하는게 아니라 반복할 횟수를 argument로 전달할 수 있다면?

function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls) {
    for (let i = 0; i < numRolls; i++) {
        rollDie();
    }
}
throwDice(3);
*/

// Functions with mutiple arguments

// num is actually premeter
function square(num) {
    console.log(num * num);
}

// 4 is argument
square(4); // 16

function sum(x, y) {
    console.log(x + y);
}

sum(5, 10); // 15

function divide(a, b) {
    console.log(a / b);
}

// 먼저 오는 value가 a에 할당, 두번째는 b에 할당.
divide(1, 4); // 0.25
divide(4, 1); // 4

// 그러나 지금 쓴 함수들은 잘못된 함수들인데, 전달받은 파라미터 값이 number 타입인지 아닌지 확인하는 과정이 없기 때문에 파라미터 자리에 string을 쓰는 것이 가능해져벌임.


// The return statement

/*

//function add(x, y) {
//    console.log(x + y);
// }

// it doesn't return anything.. in fact, console.log are not that commonly used in real life.

// return은 한가지 값만 할 수 있음.
function add(x, y) {
    return x + y;
}

const sum1 = add(10, 20);
sum1; // 30


//function isPurple(color) {
//    if (color.toLowerCase() === 'purple') {
//        return true;
//        console.log('YAY!'); // it won't be executed!
//    }
//    return false;
// }

function isPurple(color) {
    return color.toLowerCase() === 'purple'; // this value will be boolean
}

function containsPurple(arr) {
    for (let color of arr) {
        if (color === 'purple' || color === 'magenta') {
            return true;
        }
    }
    return false;
}

// purple이나 magenta 하나만이라도 갖고 있으면 true를 return
['blue', 'pink', 'magenta'];
// 만약 이런 배열을 마주친다면.. for문이 반복될 때마다 return을 하지 않게 return false는 for문 바깥으로 뺀다.

*/

// PRACTICE

// 1. password validator

/*

// Write a isValidPassword function
// It accepts 2 arguments : password and username
// Password must:
// - be at least 8 characters
// - cannot contain spaces
// - cannot contain the username
// If all requirements are met, return true.
// Otherwise : false

// isValidPassword('89Fjjlnms','dogLuvr'); // true
// isValidPassword('dogLuvr123!','dogLuvr'); // false

/// my function
//function isValidPassword(password, username) {
//    if (password.length >= 8 && password.indexOf
//(username) === -1 && password.indexOf[' '] === -1) {
//        return true;
//    } else return false;
// }

// it's very explicit....
// function isValidPassoword(password, username) {
//     if (password.length < 8) {
//         return false;
//     }
//     if (password.indexOf(' ') !== -1) {
//         return false;
//     }
//     if (password.indexOf(username) !== -1) {
//         return false;
//     }
//     return true;
// }

// 하나로 합치면...

// function isValidPassoword(password, username) {
//     if (
//         password.length < 8 ||
//         password.indexOf(' ') !== -1 ||
//         password.indexOf(username) !== -1
//     ) {
//         return false;
//     }
//     return true;
// }

// 변수에 다 담아버리기 ... 이게 더 나은 형태라는 건 아니고
// 가능한 방법을 여러개 보여주기 위함.
// function isValidPassoword(password, username) {
//     const tooShort = password.length < 8;
//     const hasSpace = password.indexOf(' ') !== -1;
//     const tooSimilar = password.indexOf(username) !== -1;
//     if (tooShort || hasSpace || tooSimilar) return false;
//     return true;
// }

// 반대로 해보기

// function isValidPassoword(password, username) {
//     const tooShort = password.length < 8;
//     const hasSpace = password.indexOf(' ') !== -1;
//     const tooSimilar = password.indexOf(username) !== -1;
//     if (!tooShort && !hasSpace && !tooSimilar) return true;
//     return false;
// }


// 더 짧게 만들어보기
function isValidPassoword(password, username) {
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1;
    return !tooShort && !hasSpace && !tooSimilar;
}

*/

// 2. Average

/*
// Write a function to find the average value in an array of numbers
// avg([0,50]) // 25
// avg([75,76,80,95,100]) // 85.2

// my function

// function avg(numbers) {
//     let sum = 0;
//     for (let num of numbers) {
//         sum += num;
//     }
//     let avg = sum / numbers.length;
//     return avg;
// }

function avg(arr) {
    let total = 0;
    // loop over each num
    for(let num of arr){
        // add them together
        total+=num;
    }
    // divide by number of nums
    let res = total / arr.length;
    // (res = result)
    return res;

}
*/

// 3. Pangrams

/*
// A pangram is a sentence that contains every letter of the alphabet, like :
// "The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet. Make sure you ignore string casing!

// isPangram('The five boxinng wizards jump quickly') // true
// isPangram('The five boxinng wizards jump quick') // false

// my function

// function isPangram(sentence) {
//     const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//     const count = [];

//     for (let a of alphabet) {
//         if (sentence.toLowerCase().indexOf(a) === -1) {
//             return false;
//         }
//         if (sentence.toLowerCase().indexOf(a) !== -1) {
//             count[sentence.toLowerCase().indexOf(a)]++;
//         }
//     }

//     for (let num of count) {
//         if (num === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// function isPangram(sentence) {
//     // 알파벳 하나하나 배열에 넣는 것 보다 그냥 string으로 사용하는 게 더 간단함.

//     for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//         if (sentence.toLowerCase().indexOf(char) === -1) {
//             return false;
//         }
//     }
//     return true;

// }


// include()를 사용하면 이해하기에 쉽지만 IE에서 지원하지 않음..
function isPangram(sentence) {
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (!sentence.toLowerCase().includes(char)) {
            return false;
        }
    }
    return true;
}
*/

// 4. Get playing card

// Write a getCard() function which returns a random playing card object, like:
// {
//    value : 'K',
//     suit : 'clubs'
//  }
// Pick a random value from :
// ---- 1,2,3,4,5,6,7,8,9,10,J,Q,K,A (원래 1카드 대신 Ace가 있는건데... 출제할때 실수함)
// Pick a random suit from :
// ---- clubs,spades,hearts,diamonds
// Return both in an object

// my function

// function getCard() {
//     let value = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'][Math.floor((Math.random()) * 14)];
//     let suit = ['clubs', 'spades', 'hearts', 'diamonds'][Math.floor((Math.random()) * 4)];

//     return {
//         'value': value,
//         'suit': suit
//     };
// }



// function getCard() {
//     const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
//     const idx = Math.floor(Math.random() * values.length);
//     const value = values[idx];

//     const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
//     const suitIdx = Math.floor(Math.random() * suits.length);
//     const suit = suits[suitIdx];

//     // key이름이랑 변수이름이 같긴 한데...
//     return { value: value, suit: suit };
// }

// 똑같은 로직이 반복되고 있음.
// 똑같은 로직이 반복된다는 것은 반복되는 로직을 함수로 만들 수 있다는 것.

// 배열에서 요소를 랜덤하게 뽑아주는 함수.
function pick(arr) {
    // return random element from arr
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function getCard() {
    const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    //  const value = pick(values);
    // 이부분을 그냥 return문에 넣어버려도 됨.

    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
    // const suit = pick(suits);

    return { value: pick(values), suit: pick(suits) };
}