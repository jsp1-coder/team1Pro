// default parameters

/*
function multiply(x, y) {
    return x * y;
}

multiply(4, 5); // 20
multiply(4); // NaN.. y is not defined.
// what if we wanna set y's default value?

function multiply1(x, y) {
    // older way of doing it..
    // typeof returns a string value, hence 'undefined'
    if (typeof y === 'undefined') {
        y = 1;
    }
    return x * y;
}

multiply1(4); // 4 ... only happens if theres no y

// it works too but not that user friendly
function multiply2(x, y) {
    y = typeof y === 'undefined' ? 1 : y
    return x * y;
}

// The New Way!!!
// if no y's passed.. use this value..
function multiply3(a, b = 1) {
    return a * b;
}

multiply3(4); // 4

// 디폴트값은 hi
const greet = (person, greeting = 'hi') => {
    console.log(`${greeting}, ${person}!`);
}


// we CAN use the array or object for this
const blah = (x, y = [1, 2, 3]) => {
    console.log(x, y);
}

// ORDER absolutely matters!
// The way that Javscript tells if this value has the default value is purely based on its order...

function multiply4(x = 1, y) {
    return x * y;
}

multiply4(2); // NaN.... y has no default value!

*/


// Spread for function calls
// ... three dots 

// If we have an array of numbers.. it's treated as a single argument
const nums = [1, 2, 3, 4, 50];

// Spread helps us break this up into five different arguments
// individual arguments!

// hard code
function giveMeFour(a, b, c, d) {
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
}

const colors = ['red', 'orange', 'yellow', 'green'];

giveMeFour(colors); // a is the entire array, b,c,d : undefined

giveMeFour(...colors); // works! colors are now four elements


// it's not only applicable to arrays... 

const str = 'GOAT';

giveMeFour(...str); // it passes each char as its own argument!
// a G b O c A d T



// Spread in Array Literals

/*
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

[...nums1, ...nums2]; // [1,2,3,4,5,6]

['a', 'b', ...nums2]; // ['a','b',4,5,6]

[...nums1, ...nums2, 7, 8, 9]; // [1,2,3,4,5,6,7,8,9]


// more examples

const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];

const mollusca = [...cephalopods, ...gastropods]; // 6 elements

const inverts = [...cnidaria, ...gastropods, ...cephalopods]; // 8 elements... all of them combined.

cephalopods.concat(gastropods); // same result with const mollusca = [...cephalopods, ...gastropods]; , original arrays haven't been changed.

const cephCopy = [...cephalopods]; // same array

cephCopy === cephalopods // false! different reference.

const copy = cephalopods; // referencing the same reference
copy === cephalopods; // true!

// we can spread strings..
"abcdefg".split(''); // ['a','b','c','d','e','f','g'];
[...'abcdefg']; // ['a','b','c','d','e','f','g']; same result!

[...'abc', ...'def', 'HELLO!!!'];
// ['a','b','c','d','e','f','HELLO!!!'];

// Spread in Object Literals

const feline = {
    legs: 4,
    family: 'Felidae'
};

const canine = {
    family: 'Caninae',
    furry: true,
    legs: 4
};

const dog = {
    ...canine,
    isPet: true,
    adorable: true
};
// {family: 'Caninae', furry: true, isPet: true,  adorable: true};

const houseCat = {
    ...feline,
    isGrumpy: true,
    personality: 'unpredictable'
};

const lion = { ...feline, genus: 'Panthera' };
// {legs : 4, family : 'Felidae', genus:'Panthera'}

const catDog = {
    ...feline,
    ...canine
};

// 똑같은 키값을 가진 두개의 object를 합치려고 하면 overwrite each other! 그래서 legs:4가 하나밖에 없는 것

// {legs : 4, family : 'Felidae', family : 'Caninae', furry : true}

const tripod = {
    ...canine,
    legs: 3
};
// it does set legs to 3! it copies canine first then updates legs to 3! so the order does matter....
// if it was like {legs:3, ...canine}; then legs would be 4
// legs were 3 originally but canine overwrote it. 

// if I wanted to copy one of the existing objects..

const catDogClone = {
    ...catDog
};

catDogClone === catDog; // false. its a copy! not the same reference

// 배열 안에서는 object를 spread 할 수 없다.
// [...dog] 
// error! object is not iterable. we can't spread objects..it behaves differently.

// Math.max(...dog) // we can't spread object either!

//{...[4, 5, 6] } // error .. idk why?
// {0: 4, 1: 5, 2: 6}
// we have key values based off the indices .. 


// 이 경우 배열 안에서 spread를 사용하고 있긴 하지만 진짜 배열 안에서 사용하는게 아니라 배열 안에 있는 오브젝트 안에서 사용하고 있기 때문에 작동이 되는 것이다.
const random = [...'hello', { ...catDog }];
// ['h','e','l','l','o',  {legs: 4, family: "Caninae", furry: true}]
*/

// The Arguments Object (not new)

/*
// 만약 함수를 만들고는 싶은데.. 100개 숫자를 더하거나, 2개 숫자를 더하거나.. 1000개를 더하거나 하고 싶다면?
// rest 말고도 arguments object를 사용할 수 있음.
// 오랫동안 사용되어 온 방식이고
function sum() {
    console.log(arguments); // param을 쓰지 않았어도 pass하는 arguments를 로그함.

    // arguments라는 object를 배열 안에 spread함.
    const argsArr = [...arguments];

    return argsArr.reduce((total, currVal) => {

        //return arguments.reduce((total, currVal) => { // 이것이 합계를 주는 함수의 결과값을 줄 것임..? Error! arguments는 array가 아니므로 array method인 reduce를 쓸 수 없음!
        return total + currVal; // 이것이 우리에게 합계를 줄것임.
    })
}

sum(1, 2, 3); // 1 2 3


// firstname, lastname, and random titles(optional)...
function fullName(first, last) {
    console.log(arguments); // 전달된거 전부
    console.log(first); // 'tom'. 어쨌든 첫번째 인자는 first라고 인식하고 있군.       
}


fullName('tom', 'jones', 'III', 'order of the phoenix');
// 함수 파라미터가 2개라도 arguments에는 여전히 전부 전달되어있음!

// argument objects are not a thing in arrow functions!

*/


// Rest Params

/*
// 여기서 nums은 전달된 인자를 전부 담을 배열의 이름.
function sumAll(...nums) {
    let total = 0;
    for (let n of nums) {
        total += n;
    }
    return total;
}

sumAll(1, 2); //3
sumAll(1, 2, 3, 4, 5); //15


// rest를 사용하는 가장 간단한 예
function sum(...nums) {
    return nums.reduce((total, currVal) => {
        return total + currVal
    })
}

// we can use it to collect the ramaining arguments! Those that have not been matched with the parameter

// i can use rest to collect the ramaining titles
// 그래서 rest를 여러개 쓸 수는 없음. 남아있는 인자를 전부 다 넣는 거라서.
// 그리고 rest는 가장 마지막 파라미터가 되어야 함.
// 앞에서 말했듯이 남아있는 인자들을 넣는거라서...
function fullName(first, last, ...titles) {
    console.log(first); //'tom'
    console.log(last);  // 'jones'
    console.log(titles); // ['III', 'order of the phoenix'] 

}

fullName('tom', 'jones', 'III', 'order of the phoenix');

// arrow function works too
const multiply = (...nums) => {
    nums.reduce((total, currVal) => total * currVal)
}

multiply(2, 3, 4); //24 

// object argument를 쓸 때는 진짜 배열이 아니었기 때문에 어떤 진짜 배열을 만들어서 그 안에 object arg를 넣어 진짜 배열로 바꿔주는 작업을 해야 했다. rest를 쓰면 그럴 필요가 없다.

// rest는 특정 파라미터들 다음으로 오는 인자값 나머지 전부를 받도록 설정할 수 있는 반면 (그래서 이름이 rest임) arg object는 무엇이든 모든 arg를 받는다.

*/

// Destructuring arrays
/*
const raceResults = [
    'Eluid Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay Chereslassie',
    'Alphonce Simbu',
    'Jared Ward'
];


//const gold = raceResults[0];
//const silver = raceResults[1];
//const bronze = raceResults[2];


// we can unpack the values in a single line!
// raceResults로 가서 우리가 쓴 gold silver bronze 순서에 따라서 value 를 갖고 와서는 새로운 변수로 넣는다. 
// 위의 코드와 똑같은 작업을 하고 있음.
const [gold, silver, bronze] = raceResults;
gold; // 'Eluid Kipchoge'
silver; // 'Feyisa Lelisa'
bronze; // 'Galen Rupp'

const [first, , , fourth] = raceResults;
// , , 는 아무것도 가져오지 말고 인덱스를 건너뛰라는 의미.
fourth; // 'Ghirmay Chereslassie'

const [winnder, ...others] = raceResults;
winner; // 'Eluid Kipchoge'
others; // [the other five in the array]
*/

// Destructuring Object
/*
const runner = {
    first: 'Eluid',
    last: 'Kipchoge',
    country: 'Kenya',
    title: 'Elder of the Order of the Golden Heart of Kenya'
}


// object안의 똑같은 key name을 변수 이름으로 설정하면 그 똑같은 이름의 key값을 갖고 올 것임.
const {
    first,
    last,
    time
} = runner;

first; // 'Eluid'
last; // "Kipchoge"
time; // time은 runner object 안에 없는 키 값임. undefined.
// error가 아닌 undefined인 이유는 우리가 그냥 time이라는 변수를 만들고 값을 넣지는 않은 거라서.

// 이렇게 하면 원래 object에서 country 값을 가져와서 nation이라는 이름의 변수에 다시 넣을 수 있음.
const {
    country: nation,
    title: honorific
} = runner;

nation; // 'kenya'
honorific; // 'Elder of the Order of the Golden Heart of Kenya'

// rest operator도 쓸 수 있음.
const { first1, last1, ...other } = runner;

other;
// {country: 'Kenya',
// title: 'Elder of the Order of the Golden Heart of Kenya'}
*/

// Nested Destructuring
// you CAN nest it!

/*
const results = [
    {
        first: 'Eluid',
        last: 'Kipchoge',
        country: 'Kenya'
    },
    {
        first: 'Feyisa',
        last: 'Lilesa',
        country: 'Ethiopia'
    },
    {
        first: 'Galen',
        last: 'Rupp',
        country: 'United States'
    }
];

// if I wanted to extract the coutry name of the second place...

// skip the first one.. there's an object, inside the object we want the country 
const [, { country }] = results;
const [{ first: goldWinner }, { country2 }] = results;

goldWinner; // 'Eluid'
country; // 'Ethiopia'

// two lines but easier to understand.
const [, silverMedal] = result;
const { country3 } = silverMedal;

*/

// Destructuring Parameters

// destructure는 함수 정의를 내릴 때에도 많이 볼 수 있음. 

const runner = {
    first: 'Eluid',
    last: 'Kipchoge',
    country: 'Kenya',
    title: 'Elder of the Order of the Golden Heart of Kenya'
}

// one way
// function print(person) {
//     const { first, last, title } = person;
//     console.log(`${first} ${last} ${title}`)
// }


// another way
// 만약 우리가 딱 세개 param값만 필요하다면 굳이 저 object를 다 끌고 올 필요가 없음.
// 나머지 요소는 다 무시하게 됨.
function print({
    first,
    last,
    title
}) {
    console.log(`${first} ${last} ${title}`)
}

const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json'
]

function parseResponse([protocol, statusCode, contentType]) {
    console.log(`Status: ${statusCode}`)
}

parseResponse(response); // 200 OK