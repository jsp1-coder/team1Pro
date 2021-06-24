// block scope
function doubleArr(arr) {
    // result 배엻은 for문 블록 바깥에 정의되어 있다.
    const result = [];
    for (let num of arr) {
        // double은 for문 블록 안에서만 유효함
        let double = num * 2;
        result.push(double);
    }
    return result;
}

// doubleArr([1, 2, 3, 4]);


// lexical scope 

// 이 함수 바깥에서는 inner() 호출 불가.. outer()안에 선언되어있기 때문에..
function outer() {
    let movie = 'Amadeus';

    // nested functions are lexically bound to their parent functions.. it doens't work the other way around though.
    function inner() {
        // 만약 여기서 새로운 movie 변수를 선언하면? inner함수는 이 변수를 movie로 받아들일 것.
        // 함수가 실행될 때 inner()에 movie 변수가 쓰였는데 해당 함수 안에 movie가 선언되어있지 않으면 그제서야 가장 가까운 부모함수에 movie가 선언되어있나 찾아보는 것.
        let movie = "The Shining";

        // outer()에 있는 변수 movie에 접근 가능..
        console.log(movie.toUpperCase())
    }
    inner();
}

function TodoList() {
    let todos = [];
    let username = '';

    function addTodo() {
        // 이런 inner function에서 부모 function에 있는 todo들과 username을 받아올 수 있다.
    }
    function removeTodo() {

    }
}


// function expressions

// function add(x, y) {
//     return x + y;
// }

// // same thing!
// const sum = function (x, y) {
//     return x + y;
// }

// // 이 경우 함수는 product()로만 호출할 수 있음.
// const product = function multiply(x, y) {
//     return x * y;
// }



// functions are objects!

function add(x, y) {
    return x + y;
}

const subtract = function (x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

const divide = function (x, y) {
    return x / y;
}

// 함수들을 전부 배열에 저장...
const operations = [add, subtract, multiply, divide];

// 이 배열에 있는 함수들을 꺼내서 사용하고 싶다면?
operations[1]; // subtract라는 함수 오브젝트 값 자체만 가져옴. 실행 X

operations[1](100, 4); // 96  ...함수가 실행됨

// 이런식으로 hard coding 하지말고 변수로 불러올 수도 있다.

for (let func of operations) {
    let result = func(30, 5);
    console.log(result);
} // 35 25 150 6

const thing = {
    // 함수를 이 object에 value로 저장!
    doSomething: multiply
}

thing.doSomething(50, 2); // 100

// higher order functions

// functions as arguments
function cry() {
    console.log("BOO HOO! I'M SO SAD");
}

function rage() {
    console.log("I HATE EVERYTHING!");
}

function pickOne(f1, f2) {
    let rand = Math.random(); // leave it as decimal

    if (rand < 0.5) {
        f1()
    }
    else {
        f2()
    }
}

// pickOne(cry, rage); // each time it picks one of the functions

// functions as return values

//const triple = multiplyBy(3);
//triple(5); // 15 가 나오도록.. 
// 이 multiplyBy 함수는 인자값이 무엇이 되느냐에 따라서 triple의 값을 바꿀수 있도록 하는 함수..

// 새로운 함수를 만들 수 있게 해주는 일종의 공장
function multiplyBy(num) {
    return function (x) { // this is where function expression's needed.... like we don't have to name it or anything, we're just returning it

        //console.log("HI!");
        return x * num;
    }
}

// 공장을 통해 새 함수 얻기
const triple = multiplyBy(3); // we get a new function!
triple(2); // 6
triple(9); // 27... it's multiplying everything by 3

const double = multiplyBy(2); // we get a new function!
double(5); // 10

const halve = multiplyBy(0.5); // we get a new function!
halve(9); // 4.5

// 이해하기 좀 힘들 수 있겠지만...
// 함수는 일종의 객체이다. 여기저기 갖다주거나 사용할 수 있는 객체. argument로 쓰거나 return value로 쓰일 수 있다.

// const isChild = makeBetweenFunc(0, 18);
// isChild(5); // true ... cos it's between 0 and 18
// isChild(67);

function makeBetweenFunc(x, y) {
    return function (num) {
        if (num >= x && num <= y) {
            return true;
        } return false;
        // return num >= x && num <= y; 
        // boolean expression, it gives us true or false
    }
}

const isChild = makeBetweenFunc(0, 18);
isChild(17); // true
isChild(97); // false

const isNineties = makeBetweenFunc(1990, 1999);
isNineties(1997); // true

const isNiceWeather = makeBetweenFunc(17, 27);
isNiceWeather(33); // false
isNiceWeather(20); // true


// Callbacks

// in reality, it's more common to use anynomous functions for callbacks.

// callback함수 예시
function grumpus() {
    alert("GAHH GO AWAY!");
}


// first arg : a function to run / second arg : how long till the function runs
// 5000 miliseconds = 5 seconds
// setTimeout(grumpus, 5000);


// in 5 sec, use this chunk of code that imma never gonna use again....
// 이런식으로 익명함수를 쓰는 경우가 더 흔함. 단발성으로만 일어나야 하는 경우..
// setTimeout(function () {
//     alert("WELCOME!");
// }, 5000);

// 나중에 DOM 할 때 배울 것
const btn = document.querySelector('button');
//btn.addEventListener('click', grumpus);

// 이런식으로 익명함수를 더 많이 쓴다.
btn.addEventListener('click', function () {
    alert("WHY DID YOU CLICK ME!!???");
});



// Hoisting

// console.log(animal);
// var animal = 'Tapir';

// console.log(shrimp);
// let shrimp = 'Harlequin Shrimp';


howl();
function howl() {
    console.log("AWOOOOOO");
}