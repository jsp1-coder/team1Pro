
// Nested loops

/*
let str = 'LOL';
for (let i = 0; i < 4; i++) {
    console.log("Outer :", i);
    for (let j = 0; j < str.length; j++) {
        console.log('    Inner:', str[j]);

    }

}


const gameBoard = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
];

let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {
    let row = gameBoard[i];
    //console.log(row);
    for (let j = 0; j < row.length; j++) {
        // console.log(row[j]);
        totalScore += row[j];
    }

}

console.log(totalScore);
*/

// while loops

/*
const target = Math.floor(Math.random() * 10);

// the value will change so use let
let guess = Math.floor(Math.random() * 10);

console.log(target);

// while의 중요한 점. 어떻게든 while문 안에 식에 따라가다가 결국에는 조건에 반대되는 값이 나와서 마지막에는 반복이 멈춰야 함. 그렇지 않으면 무한반복의 굴레로 빠지게 됨...
while (guess !== target) {
    // update the existing guess
    console.log(`Target: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log('CONGRATS YOU WIN!');

// while(some condition)
// in the loop, update or attempt to make that condition false eventually

*/

// break
/*
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
        break;
    }
}
// 012345 

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (true) {
    if (target === guess) break;
    console.log(`Target: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10);
}

console.log(`Target: ${target} Guess: ${guess}`);
console.log('CONGRATS YOU WIN!');
*/

// for...of loops

let subreddits = ['soccer', 'popheads', 'cringe', 'books'];

// this let variable's gonna represent each element in the array
for (let sub of subreddits) {
    console.log(sub);
}
//'soccer', 'popheads', 'cringe', 'books'

// we don't need any index number....
for (let char of 'cockadoodledoo') {
    console.log(char.toUpperCase());
}

// each row equals to 15
const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];
/*
for (let i = 0; i < magicSquare.length; i++) {
    let row = magicSquare[i];
    let sum = 0;
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
        sum += row[j];
    }
    console.log(`${row} summed to ${sum}`);
}
*/

for (let row of magicSquare) {
    let sum = 0;
    for (let num of row) {
        sum += num;
    }
    console.log(`${row} summed to ${sum}`);
}

// for...of loops with objects

/*
// movies as keys ratings as values
// 오브젝트 안의 모든 key는 string임
const movieReviews = {
    Arrival: 9.5,
    Alien: 9,
    Amelie: 8,
    'In Bruges': 9,
    Amadeus: 10,
    'Kill Bill': 8,
    'Little Miss Sunshine': 8.5,
    Coraline: 7.5
};

// 만약 오브젝트 안의 모든 것들을 출력하고 싶다면 for문을 쓸수 있을까? 없음.
// movieRiviews[1] 따위가 doens't work 하기 때문임
// for문 쓰려고 하면 TypeError : movieReviews is not iterable

// what can we do instead?
// instead of looping over the entire object, which doenst work, we can loop over just the keys or just the values.
// there's a method called Object.keys

// Object. 로 시작한다는 것에 유의!!!!
Object.keys(movieReviews);
// ["Arrival", "Alien", "Amelie", "In Bruges", "Amadeus", "Kill Bill", "Little Miss Sunshine", "Coraline"]
// 쉽게 말해 object의 key들을 string array로 반환하는 것

Object.values(movieReviews);
// [9.5, 9, 8, 9, 10, 8, 8.5, 7.5]

// 이 메소드를 사용하면 key값을 배열에 담기 때문에 for문 사용하는 것이 가능해짐.
// 각각의 영화 이름을 출력.
for (let movie of Object.keys(movieReviews)) {
    console.log(movie);
}
for (let movie of Object.keys(movieReviews)) {
    console.log(movie, movieReviews[movie]);
}
// Arrival 9.5 Alien 9 Amelie 8 .....

// 만약 평점의 평균을 구하고 싶다면?
const ratings = Object.values(movieReviews);
// ratings 은 value 들만!!!
let total = 0;
for (let r of ratings) {
    total += r;
}

let avg = total / ratings.length;
console.log(avg); // 8.6875
*/


// For...In

const jeopardyWinnings = {
    regularPlay: 2522700,
    watsonChallenge: 300000,
    tournamentOfChampions: 500000,
    battleOfTheDecades: 100000
};

// 자동으로 object의 키값들을 돌것임
for (let prop in jeopardyWinnings) {
    console.log(prop);
    console.log(jeopardyWinnings[prop]);
}

// 모든 값을 더하고 싶다면..
let total = 0;
for (let prop in jeopardyWinnings) {
    total += jeopardyWinnings[prop];
}

console.log(`Ken Jennings Total Earnings: ${total}`);
// Ken Jennings Total Earnings: 3422700

for (let k in [88, 99, 77, 66]) {
    console.log(k);
}
// 0 1 2 3
// for문이 실제 요소가 아닌 properties 만을 반복함을 알 수 있음. 실제 값은 무엇이든 상관 없음.
// 배열은 요소의 키값이 0부터 시작하는 숫자로 미리 정해진 특별한 object임. 따지고보면 object인데 항상 키값이 012345로 고정된...
// 그래서 배열을 for in 문으로 반복해보면 배열의 키값인 012345만 반환되는 것.
// 아무튼 그러니까 배열에는 for of 문을 사용하도록 하자.