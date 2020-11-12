// 문제 12번 못풀었음~~


// 문제 1 : 배열의 삭제
/*
var nums = [100, 200, 300, 400, 500];

nums.pop();
nums.pop();

console.log(nums);
*/

// 문제 2: 배열의 내장함수
/*
var arr = [200, 100, 300];

arr.splice(2, 0, 10000);

console.log(arr);
*/

// 문제 3: 변수의 타입
/*
var arr = [100, 200, 300];
console.log(typeof (arr));
// object.... undefined, string, number는 모두 기본 자료형임

*/

// 문제 4: 변수의 타입2
/*

let a = 2.22;
typeof(a); // number

*/

// 문제 5: for문 계산
/*
var a = 10;
var b = 2;

for (var i = 1; i < 5; i += 2) {
    a += i;
}
// i = 1, a = 11
// i = 3, a = 14
// i = 5... i<5 조건문에서 걸림. for문은 총 두번 순환한다.

console.log(a + b); // 16
*/

// 문제 6: False
// NaN, ""(빈문자열), 0, undefined는 js에서 false로 취급한다. 이것을 빼고는 전부 true 값으로 평가한다.
// 1 같은 숫자는 true로 취급한다.


// 문제 7: 변수명
// let , 1age는 변수명으로 사용할 수 없다?
// javascript의 변수명은 문자, 밑줄(_), 혹은 달러 기호 ($)로 시작해야 함
// let 은 이미 js 문법에 존재하는 예약어라 사용이 불가함.

// 문제 8: 객체의 키 이름 중복
/*
var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};

console.log(d[weight]); // 84
//키 이름이 중복되면 나중에 쓰여진 것이 값이다.

*/

// 문제 9: concat을 활용한 출력 방법

/*
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

// var result = `${year}/${month}/${day}  ${hour}:${minute}:${second}`;

//concat() 메서드는 매개변수로 전달된 문자열을 메서드를 호출한 문자열에 붙여 새로운 문자열로 반환합니다.
var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

console.log(result);

*/

// 문제 10: 별찍기
// 흔하디 흔한 별찍기 문제...^^

/*
const n = prompt("트리는 몇층짜리?", "입력하세요");

let tree = '';

// n = 4
// 맨 밑은 2n - 1 .. 만큼 별찍기
// 하나 위는 2n - 3 갯수많큼
// 2n-(2i-1)
// 2n-3
// 2n-1

for (let i = 1; i <= n; i++) {
    let star = '';
    for (let j = 1; j <= n - i; j++) {
        star += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        star += '*';
    }
    tree += star + '\n';
}

console.log(tree);
*/

// 문제 11: for를 이용한 기본 활용
/*
let s = 0;

for (let i = 1; i <= 100; i++) {
    s += i;
    console.log(s);

}
*/

// 문제 12: 게임 캐릭터 클래스 만들기

// 아직 javascript의 class 개념 안배움

/*
const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();
*/

// 문제 13: 몇 번쨰 행성인가요?
/*
const stars = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
const n = prompt('몇 번째 행성을 알고 싶은가요?', '입력하세요');

console.log(stars[n - 1]);
*/

// 문제 14: 3의 배수 인가요?
/*
const n = prompt('숫자를 입력하세요', '');

if (n % 3 === 0) {
    console.log('짝');
} else console.log(n);
*/

// 문제 15: 자기소개
// template literal 템플릿 리터럴
/*
const name = prompt('이름 입력', '');
const greet = `안녕하세요. 저는 ${name}입니다.`;
console.log(greet);
*/


// 문제 16: 로꾸거
/*
const str = prompt('문장을 입력하세요', '');

const rts = str.split('').reverse().join('');


// * split() 메서드는 문자열을 배열로 만들어 반환하고,
// * reverse() 메서드는 배열의 순서를 반전하며,
// * join() 메서드는 원소를 모두 붙여 문자열로 반환합니다.


console.log(rts);
*/

// 문제 17: 놀이기구 키 제한

/*
const height = prompt('키를 입력하세요');
if (height >= 150) {
    console.log('YES');
} else console.log('NO');
*/

// 문제 18: 평균 점수
/*
const grades = prompt('국어, 수학, 영어 점수를 순서대로 입력하세요.');

const arr = grades.split(' ');
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i], 10); // 십진수 형태 숫자로 변환.
}

let avg = Math.floor(sum / arr.length);
// 소수점 자리를 모두 버림하는 함수.

console.log(avg);
*/

// 문제 19: 제곱을 구하자

/*
// 내 답안
const n = prompt('두 숫자를 입력하세요').split(' ');

let n1 = parseInt(n[0], 10);
let n2 = parseInt(n[1], 10);
let square = n1;

for (let i = 1; i < n2; i++) {
    square *= n1;
}

console.log(square);

// 답안
// Math.pow 라는 메소드를 이용하면 되는 것이었다....

const n = prompt('수를 입력하세요.').split(' ');

console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));

*/

// 문제 20: 몫과 나머지

/*
// 내 답안
const n = prompt('두 숫자를 입력하세요.').split(' ');

const x = parseInt(n[0]);
const y = parseInt(n[1]);

const res = parseInt(x / y);
const rem = x % y;

console.log(`${res} ${rem}`);

// 답안

// 그냥 따로 변수에 할당하지 않고 바로 입력한 값을 사용했다. 또한 x/y 값을 parseInt 하지 않고 Math.floor 메소드로 소수섲ㅁ 이하를 잘라냈다.
const n = prompt('수를 입력하세요.').split(' ');

const result = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10));
const left = parseInt(n[0], 10) % parseInt(n[1], 10);

console.log(result, left);
*/

// 문제 21: set은 어떻게 만드나요?

/*
var x = new Set('javascript');
var x = new Set();

*/

// 문제 22: 배수인지 확인하기
/*
// 변수 i가 6의 배수인지 확인하는 방법

i%6 == 0
*/

// 문제 23: OX문제
/*
console.log(10 / 3); // 출력결과는 3이다?
// X, 3.3333...

// 소숫점이 없는 정수를 출력할 때는 Math.floor() 메소드 이용
*/

// 문제 24: 대문자로 바꿔주세요!
/*
const s = prompt('이름을 입력하세요.', '');

console.log(s.toUpperCase());

var name = prompt("이름을 입력하세요.");

console.log(name.toUpperCase());
*/

// 문제 25: 원의 넓이를 구하세요

// 원의 넓이 : 반지름의 길이 x 반지름의 길이 x 3.14
// 원의 넓이를 반환하는 함수 만들기

/*
function round(n) {
    const res = (n * n) * 3.14;
    return res;
}

console.log(round(5));
*/

// 문제 26: 행성 문제2
// 행성의 한글이름을 입력하면 영어이름을 반환하는 프로그램

/*
const stars = {
    '수성': 'Mercury',
    '금성': 'Venus',
    '지구': 'Earth',
    '화성': 'Mars',
    '목성': 'Jupiter',
    '토성': 'Saturn',
    '천왕성': 'Uranus',
    '해왕성': 'Neptune'
};

const star = prompt('행성 이름을 입력하세요');

function starName(star, stars) {
    return stars[star];
}

console.log(starName(star, stars));

console.log(starts[star]);
*/

// 문제 27: 객체 만들기

/*
// 내 답안
const names = prompt('이름을 입력하세요').split(' ');
const scores = prompt('점수를 입력하세요').split(' ');

const obj = {};

for (let i = 0; i < names.length; i++) {
    obj[names[i]] = scores[i];
}

console.log(obj);

// 답안
const keys = prompt('이름을 입력하세요').split(' ');
const values = prompt('점수를 입력하세요').split(' ');
const obj = {};

for (let i = 0; i < keys.length; i++) {
    // parseInt를 사용해서 점수를 number로 넣어줬구나..
    // 내 답변에서는 점수도 그냥 string으로 들어감.
    obj[keys[i]] = parseInt(values[i], 10);
}

console.log(obj);

*/

// 문제 28: 2-gram
/*
// 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법
// Javscript를 2-gram으로 반복하면 J a a v v a a s ...

// 내 답안

// mischief  8개, mi is sc ch hi ie ef 7개
// oxoxo 5개, ox xo ox xo 4개
// oxox 4개, ox xo ox 3개

const s = prompt('문자열을 입력하세요.');

const spells = s.split('');
for (let i = 0; i < spells.length - 1; i++) {
    let twoGram = `${spells[i]}${spells[i + 1]}`;
    console.log(twoGram);
}

// 답안
const data = prompt('문자를 입력하세요.');

// String 자체가 인덱스가 있으므로 split해서 굳이 나눠줄 필요가 없었음.
// 입력된 String을 그대로 사용해서..
// 그대로 console.log(a,b); 이렇게 넣으면 a b 와 같이 출력됨
for (let i = 0; i < data.length - 1; i++) {
    console.log(data[i], data[i + 1]);
}

*/

// 문제 29: 대문자만 지나가세요

// 대문자면 YES, 아니면 NO
/*
// 내 답안
const char = prompt('알파벳을 입력하세요');

function isUpperCase(char) {
    if (char === char.toUpperCase()) {
        return 'YES';
    } else return 'NO';
}

console.log(isUpperCase(char));


// 답안
const data = prompt('알파벳을 입력하세요.');

// 함수를 만들지 않고.. 바로 if문 사용
if (data === data.toUpperCase()){
  console.log('YES');
} else {
  console.log('NO');
}
*/

// 문제 30: 문자열 속 문자 찾기
/*

// 내 답안
// for문으로 구현하려다 어떻게 해야 할 지 몰라서 포기...

const sentence = prompt('문자열을 입력하세요');
const word = prompt('찾을 문자를 입력하세요');
let count = 0;
let index = 0;

// 012345678
// pineapple
// apple
//  apple
//   apple

for (let i = 0; i < sentence.length; i++) {
    for (let j = i; j < word.length + i; j++) {
        if (sentence[j] === word[j]) {
            count++;
        }
        if (count === word.length) {
            index = j - word.length;
            break;
        }

    }
}
console.log(index);

// 답안

const data = prompt('문자열을 입력하세요');
const word = prompt('찾을 단어를 입력하세요');

console.log(data.indexOf(word));
// indexOf() 메서드는 호출한 스트링 객체나 배열에서
// 주어진 값과 일치하는 값 혹은 요소의 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.

// indexOf() 메소드를 사용하면 바로 풀리는 문제였다.
// 메소드 사용이 아직 익숙치 않은 것 같다. ㅠㅠ

*/



