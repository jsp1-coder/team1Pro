/*
// two things to avoid


const btn = document.querySelector('#clicker');
// if you look at console.dir(btn) ... there are properties we can set inline

const firstBtn = document.querySelector('button');
// console.dir(firstBtn)
// onmouseover = not null, has a value

// we get 'hi!!!!' before we click it
// cos js runs this line first, sets it undefined, then gives the btn.onclick undefined value
// btn.onclick = alert('hi!!!!');

// to do it, you need to write a function
// selects a button first, then on click, do this...
// we'll soon see a better way than this....
btn.onclick = function () {
    console.log('GO AWAY!');
}

btn.ondblclick = function () {
    console.log('DOUBLE CLICK!');
}
*/



// addEventListener
/*
const btn = document.querySelector('button');

// btn.onclick = () => {
//     console.log('YOU CLICKED ME');
// }

// if i wanted to have a second click listener, i wouldnt have a choice.. only the recent value will be there
// btn.onlick = function () {
//     console.log('SECOND TIME'); // all we get is this. not the 'you clicked me'
// }

// sometimes you want them to run dynamically...
// it wouldnt work with the two options above.



// the function executes when this event occurs
btn.addEventListener('click', function () {
    alert('clicked!');
})

btn.addEventListener('click', function () {
    console.log('second thing!');
})

// it's not setting the onclick property...
// it's attaching the event listener onto a given element
// we can do as many as we want.
// follows the same pattern.

btn.addEventListener('mouseover', function () {
    btn.innerText = 'STOP TOUCHING ME';
})
btn.addEventListener('mouseout', function () {
    btn.innerText = 'Click Me';
})

// let's try scroll events
// global scope = window
window.addEventListener('scroll', function () {
    console.log('STOP SCROLLING!')
})
*/

// Events on Multiple Elements

/*
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'indigo', 'violet'];


// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseover', function () {
//     // this.innerText는 h1의 innerText임
//     console.log(this.innerText);
// })

const h1 = document.querySelector('h1');
const changeColor = function () {
    // print out the background color
    // console.log(this); // individual div
    h1.style.color = this.style.backgroundColor;
    console.log(this.style.backgroundColor);
}


const container = document.querySelector('#boxes');
for (let color of colors) {
    const box = document.createElement('div');
    box.style.backgroundColor = color; // color from the loop

    // let's add a 'box' class to a box..
    box.classList.add('box');

    // append them to the container
    container.appendChild(box);

    // how do we add event listeners to each element?
    // use a loop!!
    // what if we wanna add different event listeners..?
    box.addEventListener('click', changeColor);
    // function () {
    //     // we can pass an argument arund like this way
    //      printColor(box);
    //     // if we use THIS.... arg not needed
    // });

}
*/


// The Event Object

/*
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'indigo', 'violet'];


const h1 = document.querySelector('h1');

// 여기에 param을 넣어보자.
const changeColor = function (evt) {
    console.log(evt); // it's an event object containing information!! in this case, it's a mouse event
    h1.style.color = this.style.backgroundColor;
}


const container = document.querySelector('#boxes');
for (let color of colors) {
    const box = document.createElement('div');
    box.style.backgroundColor = color; // color from the loop

    box.classList.add('box');

    container.appendChild(box);

    // 이 changeColor 함수는 우리가 직접 실행하는게 아니고 우리를 위해 실행 되어짐. 이것은 이벤트 오브젝트 안에서 패스됨.
    // 그럼 여기서 일어나고 있는 이벤트 오브젝트를 우리가 capture 할 수 있을까? 있다.
    // it's passed automatically every single time, we're just not capturing it.. but sometimes it can be useful to capture it.
    box.addEventListener('click', changeColor);

}

document.body.addEventListener('keypress', function(e){
    console.log(e); // 아무데서나 키보드 누를 때 마다 콘솔에 로그 됨. 그리고 로그되는 이벤트 오브젝트 안에 모든 정보가 담겨 있음. 어떤 키인지, ....
})
*/

// Key Events: keypress, keyup & keydown

/*
const input = document.querySelector('#username');

// 어떤 키를 눌렀는지 정보를 받기 위해 event object를 capture하자
// keydown : 철자 키보드 말고도 어떤 키든지.. shift, ctrl 전부 기록됨
input.addEventListener('keydown', function (e) {
    console.log('KEY DOWN!')
})

// key down fires first, then key up
// 처음에 키보드를 누를 때 keydown, 키보드 누르고 손을 떼는 순간 keyup
input.addEventListener('keyup', function (e) {
    console.log('KEY UP!')
})

// 브라우저에 따라 작동하는게 조금씩 다름.
// 이렇게 코드를 짜면 input태그 안에서 일어나는 key event만 기록 하는 것임.
// 철자 키보드 누를 때만... 다시말해 어떤 인풋 커서 창이 있을 때 거기에 보여지는 키만 키프레스에 해당됨
input.addEventListener('keypress', function (e) {
    console.log('KEY PRESS!')
})

// 만약 방향키로 뭔가를 하는 걸 만들고 싶다면 keypress는 쓰면 안될 것.
// 만약 id를 입력하는 input의 내용이 바뀌는지 아닌지를 보고 싶으면, 예를들어 방향키를 누르든 shift ctrl을 누르든 상관 없이 input의 내용이 바뀌는지 아닌지만 보고 싶다면 그때는 keypress를 써야 할 것임.
// 참고로 엔터 버튼은 keypress 임


// 어떤 쇼핑 리스트 input에 내용을 입력하고 엔터키를 누르면 엔터키만을 감지해 그 내용을 ul 안에 새로운 li 로 추가해볼 것임

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

// 엔터키 누르는 걸 감지하기 위해 event object가 필요함
// 이벤트 object 안의 'key' : Enter 를 이용하자.
addItemInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        // add a new item to list <li>
        // grab a value from the inpuut
        // console.log(this.value); // input value임!!!
        const newItemText = this.value;
        const newItem = document.createElement('li');
        newItem.innerText = newItemText;

        // append it!
        itemsUL.appendChild(newItem);

        // 엔터키 누르고 나면 input이 다시 빈칸이 되도록.
        this.value = '';
    }
})


*/


// Form Events & PreventDefault

/*
// Form은 우리에게서 데이터를 받아서 어딘가로 보내기 위함이다.
// 보통 어떤 url 로 보내곤 한다. 그게 action="" 자리에 들어감.
// <form action="/signup"> 같이


// 우리는 form에서 submit 할 때 새로고침을 하지 않고 그냥 그 이벤트만 capture 하고 싶다. and do sth with it...
// we're not really sending requests rn... just capturing the event

const form = document.querySelector('#signup-form')

// to extract the data, we need to be able to select the individual elements...
// why don't we start with the text input?

const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');


// 이렇게 하면 submit이라는 이벤트는 붙잡았지만 여전히  submit 후에는 페이지를 바꿔버리는 typical form behaviour를 바꾸진 못했음.
form.addEventListener('submit', function (e) {
    alert('SUBMITTED THE FORM!');

    // console.log(e); // defaultPrevented : True

    // for termsCheckbox, we're geting the value of 'on' constantly...
    // for veggie, we get the name of the value, not the text
    console.log('cc', creditCardInput.value);
    //console.log('terms', termsCheckbox.value);
    console.log('terms', termsCheckbox.checked); // boolean
    console.log('veggie', veggieSelect.value);


    // if i want to capture the data, but not go to a new page, not send a request, there's a method called preventdefault.
    e.preventDefault(); // prevents the default behaviour
    // for Form, sending a data , reloading the page.
    // submit event has run but we haven't sent data anywhere, this will allow us to do sth with the data...
    // it's better to put it up top just to say that we're preventing the default action here!!!!
});

*/


// Input & Change Events

// input and change are respective properties

// we can actually listen to changes across all these different types of events using the single event type

const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');


// data structure ... that is an object that stays updated whatever the user types. 
// 위에서는 유저가 form 을 제출한 다음에야 데이터를 가져올 수 있었음.
// 그냥 keep in sync 하고 input에 뭐가 들어가는지 알아보자.
// we don't wanna wait till the user submits the form...
// for this, we can use an input event!


// if I wanted to create the data stucture..
const formData = {};



// creditCardInput.addEventListener('input', (e) => {
//     console.log("CC CHANGED!", e); // Whenever i type a char here, i get this msg! 
//     // so the input has chnaged, we also have input.target which tells us what the actual input is.. what triggered this event, what the object is.. in this case it's input#cc

//     formData['cc'] = e.target.value; // which is the target element, the input itself!

// });

// // staying in sync!
// veggieSelect.addEventListener('input', (e) => {
//     console.log("VEGGIE CHANGED!", e);
//     formData['veggie'] = e.target.value;
// });

// termsCheckbox.addEventListener('input', (e) => {
//     console.log("CHECKBOX", e);
//     formData['agreeToTerms'] = e.target.checked; // can't do value as its a check box
// });


// there's a better way to do this....
// we'll add a name to each input first.
// if you use React, you'll see the code like this a lot.

// using one callback
for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
    // event object를 destructure해서 target 만 갖고 오겠다.
    input.addEventListener('input', ({ target }) => {
        //  console.log(e.target.name); // 어떤 input이 바뀔 때 마다 바뀌는 인풋의 이름이 콘솔에 찍힘.
        // 그러니 이 이름들을 formData object에 더할 때 이용하면 되겠구나!

        // value가 formData object에 under their name으로 들어갈 것이다!!
        //check box의 경우 value가 없으므로 kinda tricky..
        // check if the type of the input is checkbox

        const { name, type, value, checked } = target;

        // formData[e.target.name] = e.target.value;
        formData[name] = type === 'checkbox' ? checked : value;
        console.log(formData);
    })
}

// if we change it to 'change' event .. it will work pretty much the same way but the text input will update until I lose focus or press the enter key. 

for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
    input.addEventListener('change', ({ target }) => {

        const { name, type, value, checked } = target;
        formData[name] = type === 'checkbox' ? checked : value;
        console.log(formData);
    })
}