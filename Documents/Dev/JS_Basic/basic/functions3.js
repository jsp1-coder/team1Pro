// forEach

/*
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

numbers.forEach(function (num) {
    console.log(num);
});

// 이건 필요하면 함수를 또 쓸 수 있으니까 유용할 순 있는데...
// 익명함수를 더 많이 씀.
function printTriple(n) {
    console.log(n * 3);
}

numbers.forEach(printTriple);

// 이렇게 forEach 안 콜백 함수에 두번째 인자값을 줘버리면 그건 인덱스값이 된다. 첫번째 인자 : 요소값, 두번째 인자 : 인덱스값
numbers.forEach(function (num, idx) {
    console.log(idx, num);
})


// 배열안의 요소들이 object 인 경우

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
},
{
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
},
{
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
},
{
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
}
];

// forEach를 사용하여 책 제목들을 뽑아내고 싶다면.
books.forEach(function (book) {
    console.log(book.title.toUpperCase());
});

// 물론 for...of loop을 사용해서도 똑같은 걸 할 수 있다.
// 그러나 forEach의 경우 함수를 사용하고
// for..of의 경우 그냥 반복문 블록을 사용한다는데 차이가 있다
// 옛날에는 for...of가 없었고 forEach가 먼저 나옴.

*/


// Map
/*
// forEach는 새로운 배열을 돌려주거나.. 값을 저장하지 않음.
// Map은 forEach와 다르게 값을 저장해서 새로운 배열로 돌려줌.

const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

// you have to capture that in a variable or sth
const doubles = numbers.map(function (num) {
    // map takes the return value and put it in the new array
    return num * 2;
});

const numDetail = numbers.map(function (n) {
    // you can return an object
    return {
        value: n,
        isEven: n % 2 === 0  // boolean value
    }
});

const abbrevs = words.map(function (word) {
    return word.toUpperCase().split('').join('.');
})

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
},
{
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
},
{
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
},
{
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
}
];

const titles = books.map(function (b) {
    // books object에서 타이틀만 가져다 배열로 만들고 싶음.
    return b.title;
})

// Map을 사용하면 새로운 배열을 만드는 것임. 원본 배열은 그대로 남아있음.
*/

// Arrow Functions

/*
// const square = function(x){
//     return x * x;
// }

// 위의 것과 아랫것이 같음...
const square = (x) => {
    return x * x;
}

// arrow function은 모양 뿐만 아니라 작동되는 방식이 조금 다른데 이건 this 키워드를 배울 때 제대로 설명할 것임.
// 지금으로는 우리가 생각하는 함수 작동 방식이랑 똑같음.

// 인자가 하나라서 괄호는 optional임.. 회사에 따라 괄호 쓰라고 하는 곳도 있고 아닌 곳도 있고...
const isEven = num => {
    return num % 2 === 0;
}

const multiply = (x, y) => {
    return x * y;
}

multiply(4, 7); // 28

// 인자가 없다고 해서 괄호를 아예 안쓰면 안되고 빈 괄호만 남겨놔야 함.
const greet = () => {
    console.log("HI!");
}

*/

// Arrow Functions - Implicit return

/*
// const square = n => {
//     return n * n;
// }

// const square = n => (
//      n * n // 이 value가 그냥 리턴값으로 자동..
// )

// 한줄짜리로 쓸 때는 소괄호도 필요 없음
// 한줄짜리가 읽기 더 힘들 수도 있음. 항상 쓰이는건 아님.
// const square = n => n * n;

// invalid arrow function!
// return문에 해당되는 표현식은 딱 한개만 있어야 함.
// const square = n => (
//     if (n < 0) {
//         return false;
//     }
//     n*n
// )

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const doubles1 = nums.map(function (n) {
    return n * 2;
});

const doubles2 = nums.map(n => {
    return n * 2;
})

const doubles3 = nums.map(n => n * 2);

// const parityList = nums.map(function (n) {
//     if (n % 2 ===0) {
//         return 'even';
//     } return 'odd';
// });

// const parityList = nums.map((n) => {
//     if (n % 2 === 0) {
//         return 'even';
//     } return 'odd';
// });

// 리턴문을 하나로 만들기 위해 삼항연산자 사용.
const parityList = nums.map(n => (
    n % 2 === 0 ? 'even' : 'odd'
));
*/



// Array.find
/*
let movies = [
    "The Fantasic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
];

// movies is unchanged
const movie = movies.find(movie => {
    movie.includes('Mrs');
});

const movie2 = movies.find(m => m.indexOf('Mrs.') === 0);

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
},
{
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
},
{
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
},
{
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
}
];

// gives us the first match
const goodBook = books.find(b => b.rating >= 4.3);
const neilBook = books.find(b => (
    b.authors.includes('Neil Gaiman')
));

*/


// Filter

/*
const nums = [34, 35, 76, 54, 209, 32, 9];

// we're creating a new array
const odds = nums.filter(n => n % 2 === 1);
const evens = nums.filter(n => n % 2 === 0);

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
},
{
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
},
{
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
},
{
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
},
{
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
},
{
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
},
{
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
},
{
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
},
{
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
}
];

// imagine that we're creating a e-commerce bookstore website...
// 고객에게 책 제목으로 검색하거나... 검색결과를 추리거나....필터기능을 주고싶다면..

// 먼저 평점이 높은 책을 고르는것 부터 시작하자.
const goodBooks = books.filter(b => b.rating > 4.3);

// 판타지 장르 책들만
const fantasyBooks = books.filter(book => (
    book.genres.includes('fantasy')
))

// 단편... 에세이거나 단펀이거나..
const shortForm = books.filter(book => (
    book.genres.includes('short stories') ||
    book.genres.includes('essays')
))

// 검색창
let query = 'the';

// const results = books.filter(b => (
//  book.title.toLowerCase().includes(query.toLowerCase())
// ))

const results = books.filter(b => {
    const title = b.title.toLowerCase();
    return title.includes(query.toLowerCase())
})
*/

// Some & Every

// Every
// A Boolean function
/*
const words = ['dog', 'dig', 'log', 'bag', 'wag'];

// test function
const all3Lets = words.every(word => {
    return word.length === 3;
}) // true

words.every(w => w[0] === 'd'); // false
words.every(w => w[0] === 'g'); // true

words.every(w => {
    let last_letter = w[w.length - 1];
    return last_letter === 'g';
}) // true

const allEndInG = words.every(word => {
    const last = word.length - 1;
    return word[last] === 'g'
}) // true
*/

// Some
// true if ANY of the array elements pass the test function

/*
const words = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];

// Are there any words longer than 4 characters?
words.some(word => {
    return word.length > 4;
}) // true

// Do any words start with 'Z'?
words.some(word => word[0] === 'Z'); // false

// Do any words contain 'cake'?
words.some(w => w.includes('cake')) // true

const someStartWithD = words.some(word => word[0] === 'd'); // true
const allStartWithD = words.every(word => word[0] === 'd'); // false


const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
},
{
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
},
{
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
},
{
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
},
{
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
},
{
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
},
{
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
},
{
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
},
{
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
}
];

const allGoodBooks = books.every(book => book.rating > 3.5); // true
const allGoodBooks = books.every(book => book.rating > 4.5); // false

const any2Authors = books.some(book => book.authors.length === 2); // true


*/


// Sort()

/*
const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

prices.sort();



// 가장 작은 수부터 가장 큰 수까지 정렬하는 법....
const ascSort = prices.sort((a, b) => a - b);
// 맨 처음에 실행 될 때...
// a : 400.5    b : 3000
// 400.5 - 3000 은 음수. 음수가 나오면 a를 b 앞에 둔다.

// 내림차순으로 정렬
const descSort = prices.sort((a, b) => b - a);
// 400.50 과 3000을 비교할 때 3000 - 400.50 은 양수이기 때문에 3000을 400.50 앞에 두게 된다.

// 주의할점은, sort() 함수는 원본 배열을 바꾼다는 것.
// 그래서 원본을 유지하면서 sort만 하고 싶다면 복사해서 다른 배열로 저장한다든지..

// 이렇게 slice() 함수를 사용하면 배열을 선택해 새로운 배열을 만들어준다. 그러면 원본 배열이 바뀌는 것을 막을 수 있다. 원래 slice(start, end) 이나 end 값이 없으면 배열 끝까지 선택해버린다.
const badSort = prices.slice().sort();


const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
},
{
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
},
{
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
},
{
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
},
{
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
},
{
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
},
{
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
},
{
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
},
{
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
}
];

// 여기서 a와 b 각각 object이기 때문에 a-b 같은 연산을 할 수 없음!!
// 이렇게 rating 끼리만 비교... 오름차순 정렬
books.sort((a, b) => a.rating - b.rating);

// 내림차순 정렬
books.sort((a, b) => b.rating - a.rating);

*/

// Reduce

// SUMMING AN ARRAY

[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})


const nums = [3, 4, 5, 6, 7];

// 인자가 두개라서 괄호 필요
nums.reduce((total, currentVal) => {
    return total * currentVal;
}) // 2520

// Reduce pt 2

// FINDING MAX VALUE
// 뭘 더하거나 빼고 그런게 아니라 그냥 비교만 하는데 reduce를 이용할 수 있음.

let grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

const topScore = grades.reduce((max, currVal) => {
    // check if the current value is greater than max...
    if (currVal > max) {
        return currVal;
    }
    return max;
})
topScore; // 99


// max : 87    currVal : 64  return : 87
// max : 87    currVal : 96  return : 96
// max : 96    currVal : 92  return : 96
// max : 96    currVal : 88  return : 96 .... 

// A shorter option w/ Math.max & implicit return
const topScore2 = grades.reduce((max, currval) => {
    Math.max(max, currVal);
})

Math.max(1, 9); // 9
Math.max(2, 3); // 3

const minGrade = grades.reduce((min, currval) => {
    Math.min(min, currVal);
})

// we're not multiplying them or anything... this MAX parameter is simply pointing at a single value.

// You can even pass a starting value!

// Initial value

// If we write a simple reduce function again...
const sum = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
    return sum + currVal;
}); // 150

const sum = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
    return sum + currVal;
}, 1000) // 1150... setting a starting value as 1000 
// you can specify an initial value like this...


// we can even specify an object!


// Even more reduce!
// 완전히 다른 방식으로 reduce를 쓰는...


// TALLYING 

const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y',];

// 이제 동의표와 반대표를 총계를 낼 것임. Object로

// we specified an initial value .. in this case, an empty object!
// we wanna check.. is there an 'y' in this object?
// we're not accumulating anything....

// const results = votes.reduce((tally, val) => {
//     // if tally of val (key in the object) exists in the object..
//     if (tally[val]) {
//         tally[val]++;
//     } else {
//         // if its not in the object...
//         tally[val] = 1;
//     }
//     return tally;
// }, {});

// our logic is like this..
// {} // initial value
// {y:1} // meets y. val=y. is there y in the object? no. set to 1. // now tally equals to {y:1} and we return it.
// {y:2} // now returend value is {y:1}, so is tally.
// is there y in the object? yes. y++;, returns {y:2}
// {y:2, n:1} // returned value & tally : {y:2}, val : n ... so meets n. is there n in the object? no. set to 1


// shorter version, same logic
const results = votes.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) + 1;
    return tally;
}, {});

// the object is empty at the beginning.. no keys..
// the very first time, we encounter y!
// does y exists in the object? no.. so it's undefined
// so it's (undefined || 0), which results in 0
// now it's 0+1
// {y: 1}
// tally of y is now 1.
// 1 || 0 ... gives us 1 .. we're taking advantage of this boolean logic

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
},
{
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
},
{
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
},
{
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
},
{
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
},
{
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
},
{
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
},
{
    title: 'A Truly Horrible Book',
    authors: ['Xavier Time'],
    rating: 2.18,
    genres: ['fiction', 'garbage']
},
{
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
},
{
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
}
];

// I wanna group books by rating

const groupedByRatings = books.reduce((groupedBooks, book) => {
    const key = Math.floor(book.rating);
    // if the key doesn't exist...
    // We wanna make an object with an array of books
    if (!groupedBooks[key]) groupedBooks[key] = [];
    // pushes the entire book
    groupedBooks[key].push[book]
    return groupedBooks;
}, {});

// 처음에 빈 오브젝트
// 첫번째 책을 만나고 평점에서 소수를 자르면 4가 됨.
// 4가 존재? ㄴㄴ 
// 4: [] 빈 배열 생성 그 다음에 책 정보를 넣음.
// 두번째 책을 만남. 4가 존재? ㅇㅇ 
// 그래서 그냥 새로운 책을 4 밑에 넣음