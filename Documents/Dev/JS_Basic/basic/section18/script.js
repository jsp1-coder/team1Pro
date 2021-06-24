// A Quick Overview of Async Functions
/*


// one of the new js features

// function getData(){
//    const data = axios.get('https://swapi.co/api/planets/').then((data)=>{
//        console.log(data);
//    });
//    console.log(data);

// }

// The Async Keyword

// async function hello(){
//     return 'HEy guy!';
// }

// hello();
// // Promise {<resolved>: "HEy guy!"}

// async function uhOh(){
//     throw new Error('oh no!');
// }

// uhOh();
// // Promise {<rejected>: Error : oh no! }


async function greet(){
    return 'HELLO!';
}
// 어떤 것을 리턴하던지, async를 쓰면 promise가 그 값을 value로 가지고 resolved 될 것이다.

// 이런 식으로 greet() 뒤에 .then()을 붙일 수도 있다! greet()은 이제 promise를 리턴하므로..
greet().then((val) => {
    console.log('PROMISE RESOLVED WITH :', val);
})

// async function add(x,y){
//     return x + y;
// }
// If we call add(4,5) , we get a resolved promise with the value that it's resolved witt set to nine 

// these two simple functions don't make any sense to use promises with because they're not doing anything asynchronous...


// how do we return a promise that is not resolved then?

// If we want to return a rejected promise all that we do is to raise an exception.
// if we throws an exception, the promise will be rejected

// with this simple add function, let's check if x and y are actually numbers .. if they're not, we'll thorw some sort of exception.
async function add(x,y){
    if(typeof x !== 'number' || typeof y !=='number'){
        throw 'X and Y must be numbers!';
    }
    return x + y;
}

// with add('e', 5), we still get a promise back , but it's been rejected.

// without using an async function but manually creating the promise and resolving / rejecting it...
// function add(x,y){
//     return new Promise((resolve, reject)=> {
//         if(typeof x !== 'number' || typeof y !=='number'){
//             reject ( 'X and Y must be numbers!');
//         }
//         resolve(x+y);
//     })
// }

// So we're calling add here but add is an async function which means it returns a promise.. it maybe rejected, it maybe resolved. We can handle it either way.
add('e','r').then((val)=>{
    console.log('PROMISE RESOLVED WITH :', val);
})
.catch((err)=>{
    console.log('PROMISE REJECTED WITH: ', err);
});

*/


// The Await Keyword

/*
// function getPlanets(){
//     // returns a promise
//     return axios.get('https://swapi.dev/api/planets/');
// }

// getPlanets().then((res)=>{
//     console.log(res.data);
// })



// an easier way is to declare an async function getPlanets..
// we will save the value that the promise is resolved with to a variable

// so it looks like a nice cute synchronous function.. one thing happens, it finishes, the next thing happens, and it finishes..
// that is what the await keyword does.
async function getPlanets(){
   const res = await axios.get('https://swapi.dev/api/planets/');
   console.log(res.data);
}

*/


// Error Handling in Async Functions

// Very short and easy way to wait for an asynchronous operation to complete before running the next line..
// but what if the asynchronous operation... if the promise is not resolved. what if it's rejected? 
// if I change the website, axios is going to reject the promise.
// I'm not catching anything here so when it happens, there're some uncaught error.. 
// I don't have any code that I'm running either to catch that error maybe to make a different request to telll the user that something went wrong.. i'm not handling it at all.
// async function getPlanets(){
//     const res = await axios.get('https://swapi.dev/api/aasdfsadfavs/');
//     console.log(res.data); // only runs once the previous line is complete (the axios promise is resolved)
//  }

// first option
// getPlanets().catch((err)=>{
//     console.log('IN CATCH!!!');
//     console.log(err);
// })


// second option
// try something, otherwise catch the error.
// we have the same results, but the two options are different.
// because the second option is going to catch any errors within this one async function ..
// but with the first option, I could have multiple functions that are returning promises.. and the callback in our .then() will run for any of .then() if the promise is rejected.
async function getPlanets(){
    try {
        const res = await axios.get('https://swapi.dev/api/aasdfsadfavs/');
        console.log(res.data); // only runs once the previous line is complete (the axios promise is resolved)
    } catch (error) {
        console.log('IN CATCH', error);
    }
}



// Multiple awaits


const moveX = (element, amount, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
      
      if (elRight + amount > bodyBoundary) {
          reject({ bodyBoundary, elRight, amount }); // reject the promise
        } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve(); // instead of onSuccess
    }
}, delay);
});
};


const btn = document.querySelector("button");

// this returns a promise so I can await it.
async function animateRight(el){
    await moveX(el, 100, 1000);
    moveX(el, 100, 1000); // I can await the first one, then do it again. No need to use .then()
}


// const btn = document.querySelector("button");
// moveX(btn, 300, 1000)
//   // 그런데 지금처럼 return문 하나만 딱 있을 때는 이렇게 바꿔 쓸 수 있음
//   //   .then(() => {
//   //     return moveX(btn, 300, 1000);
//   //   })
//   .then(() => moveX(btn, 100, 1000)) // gives us a promise!
//   .then(() => moveX(btn, 100, 1000))
//   .then(() => moveX(btn, 100, 1000))
//   .then(() => moveX(btn, 100, 1000))
//   .then(() => moveX(btn, 100, 1000))
//   .then(() => moveX(btn, 100, 1000))
//   .then(() => moveX(btn, 100, 1000))
//   // 위에서 reject할 때 object를 넘겨주도록 했음. 그걸 destructure해서 사용할 것임.
//   .catch(({ bodyBoundary, amount, elRight }) => {
//     console.log(`Body is ${bodyBoundary}px wide`);
//     console.log(`Element is ${elRight}px, ${amount} is too large!`);
//   });