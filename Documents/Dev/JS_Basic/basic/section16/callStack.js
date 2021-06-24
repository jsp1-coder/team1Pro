// The Call Stack
/*
const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) => {
    return square(a) + square(b) === square(c);
    // calls square, then calls multiply
};


isRightTriangle(3, 4, 5); // true

// 인터프리터가 마주하는 가장 첫번째 함수는 isRightTriangle(3,4,5) .. 그래서 이게 콜스택에 더해짐. 이 안에 또 여러개 fucntion calls가 있기 때문에 그것이 수행됨. square(3) 도 call stack에 더해지고... 그 다음에 multiply(3,3) gets added to the call stack. when its executed, it returns the value, and pops off. same thing happens with square(3) ..
// square(4) is added to the top of the call stack. square(4) doesnt return a value right away, multiply(4,4) is added to the call stack, it returns a value, it pops off, next, sqaure(4)...
*/

// Call Stack Debugging w/ Dev Tools

/*
const repeat = (str, times) => {
    let result = '';
    for (let i = 0; i < times; i++) {
        result += str;
    }
    return result;
};

const scream = (str) => {
    return str.toUpperCase() + '!!!';
};

const getRantText = (phrase) => {
    let text = scream(phrase);
    let rant = repeat(text, 8);
    return rant;
}

const makeRant = (phrase, el) => {
    const h1 = document.createElement('h1');
    h1.innerText = getRantText(phrase);
    el.appendChild(h1);
}

makeRant('I hate mayonnaise', document.body);
//makeRant('if you have to cough, please cover your mouth', document.body);
*/

// JS is single threaded

/*
console.log("I HAPPEN FIRST!");
alert('Hi There!');
console.log("I HAPPEN SECOND!");

// 이 코드를 실행해보면 I HAPPEN FIRST 까지만 콘솔에 찍히고 alert가 발생함. alert이 한번 발생하면 사용자가 확인 버튼을 누를 때 까지 (유저가 alert를 끝낼 때 까지) 다른 나머지의 코드가 실행되는 것을 막아버림. 그래서 FIRST만 실행되고 SECOND는 실행이 되지 않는 것.
// 예를들어, 브라우저에서 우리가 movie API에서 데이터를 가져온다고 하자. We send a request to a server.. if we're looking for movies that match the query "Bat" it will search the database and send the result back.
// This takes time!
// Is our app going to grind to a halt? Does it just stop? And nothing else happens?
// 위의 코드로 다시 돌아가 보면, FIRST가 실행되고 alert이 떴을 때 유저는 눈치채지 못할 수도 있지만 .. 1초라도 OK버튼을 누르기까지 코드는 실행되지 않고 멈춰있는다. 그럼 이것이 우리가 API에서 데이터를 받아올 떄도 똑같이 일어나는 일인가?
// The answer is NO.
// JavaScript has a couple of tricks up its sleeve or rather the browser has some tricks up its sleeve to get around this single threadedness of JavaScript.
// So to summarise what we saw here... In JavaScript, at any given point, JavaScript itself is running at most one line of code so it's not multi-tasking. It's doing one thing at a time or nothing if it's not doing anything.

*/

// How Asynchronous Callbacks Actually Work

/*
// What happens when something takes a long time?

// so here's a simple example...  fake functions and stuff..
// imagine we do sth like this..
// const newTodo = input.value; // get user input

// saveToDatabase(newTodo); // this could take a while!
// // 예를들어 이 함수가 form value를 가져와서 데이터베이스에 저장하는 함수라고 했을 때.. 0.5초만에 될 수도 있고 10초동안 실행됐다가 fail 할 수도 있단 말임..

// input.value = ''; // reset form
// 그럼 밑에있는 이 코드는 위의 코드가 전부 다 실행될 떄까지 그냥 가만히 있을까? 실행되지 않고?


// Fortunatly... We have a workaround!.... CALLBACKS?!?!!??

console.log('I print first!');
setTimeout(() => {
     console.log('I print after 3 seconds');
 }, 3000);
console.log('I print second!')
// setTimeout을 써버리면 js가 해당 코드를 실행하기 전에 3초를 기다리고 실행하게 되는데.. js 는 single threaded라고 했는데 어떻게 다른코드가 실행되고 있는 동안 3초가 다 되면 동시에 두개를 실행하게 되는 걸까?

console.log("I HAPPEN FIRST!");
//alert('Hi There!');
setTimeout(() => {
    console.log("I HAPPEN THIRD!");
}, 3000); // why does this work? seems like it shouldnt....
console.log("I HAPPEN SECOND!");

// 어떻게 js는 다른 코드를 run 하는 동안에 3초를 동시에 세고 있으며 3초뒤에 코드를 실행하는 걸 기억하는 걸까?
// 우리가 위에서 배운 것에 따르면 js가 첫번째줄 코드부터 실행을 순서대로 하다가 setTimeout을 만나면 그자리에 멈춰서 3초를 센 다음에 코드를 실행하고 그 다음으로 넘어가야 할 것 같다. 그런데 그렇게 하지 않고 setTimeout을 만나면 3초를 세면서 동시에 밑의 코드를 실행한다..

// How does it work?
// The browser does the work!!!
// The browsers are usually written in C++ ... JS says here's the things that you need to do for me.. then the browser does it for JS. JS is not setting the time,,, the browser does it for js.

*/

// Welcome to Callback Hell
/*

// Let's write a simple function that will take a number of pixels and move our button over that number of pixels and it will do it after a delay....
// so after a second, move it, after a second, move it..

// let's start by selecting the button.
const btn = document.querySelector('button');


// I'm kinda doing the same thing over and over here...
// setTimeout(() => {
//     // better way to change positions..
//     btn.style.transform = `translateX(100px)`;

//     // if you wanna move the button again after two seconds, three seconds...
//     // add another setTimeout (nested)
//     setTimeout(() => {
//         btn.style.transform = `translateX(200px)`;
//         setTimeout(() => {
//             btn.style.transform = `translateX(300px)`;
//             setTimeout(() => {
//                 btn.style.transform = `translateX(400px)`;
//                 setTimeout(() => {
//                     btn.style.transform = `translateX(500px)`;
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


// let's make it a function

// const moveX = (element, amount, delay) => {
//     setTimeout(() => {
//         element.style.transform = `translateX(${amount}px)`;
//     }, delay);
// };

// // It works!
// moveX(btn, 600, 2000);

// tricky part - 위에 나온 것 처럼 버튼이 이동하는 걸 계속 반복하고 싶다면? 위처럼 계속 setTimeout을 nest 하는 것이 아니라 callback을 이용할 수 있음.

// const moveX = (element, amount, delay, callback) => {
//     setTimeout(() => {
//         element.style.transform = `translateX(${amount}px)`;
//         if (callback) callback(); // executes the call back function, if we pass one in
//     }, delay);
// };

// It works!
// moveX 의 callback 자리에 있는 4개의 함수들이 모두 첫번째 moveX의 콜백이다.
// 두번째부터 네번째까지는 두번째 moveX의 콜백....
// 아직까진 그렇게 끔찍하지 않음. 콜백함수로 한가지 형태만 계속 반복하고 있기 때문.
// moveX(btn, 100, 1000, () => {
//     moveX(btn, 200, 1000, () => {
//         moveX(btn, 300, 1000, () => {
//             moveX(btn, 400, 1000, () => {
//                 // no callback here
//                 moveX(btn, 500, 1000);
//             });
//         });
//     });
// });

// 만약 element가 screen을 벗어나면 처리하는 것까지 해서 함수를 다시 만들어본다면...
// this is really common pattern when we're working with asynchronous code.. often we'll send an HTTP request, we ask something for the web page, we may get some successful response or we might have an invalid URL or our internet might be down at home ...

// let's say this is the name of a function to make a request
// this request will accept two callbacks.. A Success callback and a failure callback.. so you can have two different branches.
// if the request works out, here's the code that runs. if it doesn't work, here's the code that runs the code to handle an error for example.
// request();

// so let's mimic the functionality here using moveX.

// let's check if we're going to move off the screen first.. and if that's the case, we won't move any further.

// const moveX = (element, amount, delay, callback) => {
//     // 브라우저 크기
//     const bodyBoundary = document.body.clientWidth;
//     // element(지금은 btn)의 오른쪽 위치
//     const elRight = element.getBoundingClientRect().right;
//     const currLeft = element.getBoundingClientRect().left;

//     if (elRight + amount > bodyBoundary) {
//         console.log("DONE - CAN'T GO THAT FAR")
//     } else {
//         setTimeout(() => {
//             element.style.transform = `translateX(${currLeft + amount}px)`;
//             if (callback) callback(); // executes the call back function, if we pass one in
//         }, delay);

//     }

// };


// moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//         moveX(btn, 100, 1000, () => {
//             moveX(btn, 100, 1000, () => {
//                 // no callback here
//                 moveX(btn, 500, 1000);
//             });
//         });
//     });
// });


// what if we can't move anymore?
// old javascript libraries do it like this

// they have two callbacks you pass in, so you request or whatever you're doing.
// you'd have success callback, and a fail call back. so thsoe are two functions as args.
// request(successCallback, failCallback)


// 이제 이걸 다시 아까 말했던 request의 형태로, success한 경우에는 어떻게 하고 fail한 경우에는 어떻게 하는 형태로 만들어본다면?

const moveX = (element, amount, delay, onSuccess, onFailure) => {
    // if문을 setTimeout 안에 집어넣어버리기.
    // we're basically running the code at the exact same time..
    setTimeout(() => {
        const bodyBoundary = document.body.clientWidth;
        const elRight = element.getBoundingClientRect().right;
        const currLeft = element.getBoundingClientRect().left;

        if (elRight + amount > bodyBoundary) {
            onFailure();
        } else {
            element.style.transform = `translateX(${currLeft + amount}px)`;
            onSuccess();
        }
    }, delay);

};


// moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//         moveX(btn, 100, 1000, () => {
//             moveX(btn, 100, 1000, () => {
//                 // no callback here
//                 moveX(btn, 1000, 1000);
//             });
//         });
//     });
// });

// we have to re-write this whole thing to have two callbacks each time...
// here we have two callback... this is not pretty... at all
moveX(btn, 100, 1000, () => {
    // success
    moveX(btn, 400, 1000, () => {
        // success
        moveX(btn, 700, 1000, () => {
            //success
            console.log('REALLY, WE STILL HAVE SCREEN LEFT?');
        }, () => {
            //FAIL
            alert('CANNOT MOVE FURTHER!');
        })
    }, () => {
        //fail
        alert('CANNOT MOVE FURTHER!');
    })
}, () => {
    // fail for the very first moveX
    alert('CANNOT MOVE FURTHER!');
})

// So this is where promises come in.
// Promises allow us to rewrite a function like this.. so that we don't have to do all this crazy nesting.

*/

// Introducing Promises!
/*
// my parents promising me a dog...
// when we create a new promise, we can create a function and this function always has two parameters. resolve / reject
// resolve reject 둘 다 함수임

const willGetYouADog = new Promise((resolve, reject) => {
    // 만약 promise를 만들어놓기만 하고 resolve, reject 아무것도 안하고 있으면 promise status : pending 이 된다.

    // 만약 reject를 실행하면 promise status: rejected
    //reject();

    // 만약 resolve를 실행하면 promise status: resolved
    //resolve();

    const rand = Math.random();

    if (rand < 0.5) {
        resolve();
    } else {
        reject();
    }

});

// every promise has then method!
// it'll run when the promise's resolved..
// so if the promise's resolved, the callback inside of then method will be executed.

willGetYouADog.then(() => {
    console.log('YAY We got a dog');
});



// there's another method called catch
// it'll run if the promise's rejected
willGetYouADog.catch(() => {
    console.log(':( NO DOG');
})

*/

// Returning Promises from Functions
/*
// let's introduce some delay so it takes longer.
// it still works with the delay (that's why promises are worth it)

// const willGetYouADog = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const rand = Math.random();
//         if (rand < 0.5) {
//             resolve();
//         } else {
//             reject();
//         }
//     }, 5000);
// });

// // these won't run for 5 secs
// willGetYouADog.then(() => {
//     console.log('YAY We got a dog');
// });
// willGetYouADog.catch(() => {
//     console.log(':( NO DOG');
// })

// you can return promises from functions

const makeDogPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.5) {
                resolve();
            } else {
                reject();
            }
        }, 5000);
    });
};


// we can chain methods like this...
makeDogPromise()
    .then(() => {
        console.log('YAY We got a dog');
    })
    .catch(() => {
        console.log(':( NO DOG');
    });

*/

// Resolving / Rejecting w/ Values

/*

// when you resolve or reject a promise, you can resolve or reject it with a value..
// and you'll have access to that value in your callback that you pass into then or catch
// its really useful because most of the time we're not just waiting on some resolve or reject that happens arbitrarily like a random resolve or reject..
// we wanna know why sth was rejected, for example in the case ot HTTP request. or if it didn't fail, what the data we got back is, and stuff...


const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users': [
                    { id: 1, username: 'Bilbo' },
                    { id: 5, username: 'Esmeralda' }
                ],
                '/about': 'This is the about page!'
            };
            const data = pages[url];
            if (data) {
                resolve({ status: 200, data });
            } else {
                reject({ status: 404 });
            }

        }, 3000);
    });
}

fakeRequest('/users')
    .then((res) => {
        console.log('Status Code', res.status)
        console.log('Data', res.data)
        console.log("REQUEST WORKED");
    }).catch((res) => {
        console.log(res.status);
    });

// REQUEST FAILED
fakeRequest('/dogs')
    .then((res) => {
        console.log('Status Code', res.status)
        console.log('Data', res.data)
        console.log("REQUEST WORKED");
    }).catch((res) => {
        console.log(res.status);
    });


*/

// The Delights of Promise Chaining

/*

// so the last critical part of prommises is understanding promise chaining.


const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users': [
                    { id: 1, username: 'Bilbo' },
                    { id: 5, username: 'Esmeralda' }
                ],
                // user의 id를 이용해서 더 자세한 정보를..
                // 실제로 흔한 패턴.
                '/users/1': {
                    id: 1,
                    username: 'Bilbo',
                    upvotes: 360,
                    city: 'Lisbon',
                    topPostId: '454321'
                },
                '/users/5': {
                    id: 5,
                    username: 'Esmeralda',
                    upvotes: 571,
                    city: 'Honolulu',
                },
                '/posts/454321': {
                    id: 454321,
                    title:
                        'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
                },
                '/about': 'This is the about page!'
            };
            const data = pages[url];
            if (data) {
                resolve({ status: 200, data });
            } else {
                reject({ status: 404 });
            }

        }, 3000);
    });
}

// 이전에 봤던 callback hell이랑 다를 바가 없어보임...!
// fakeRequest('/users')
//     // response
//     .then((res) => {
//         //console.log(res.data); // an array
//         const id = res.data[0].id;

//         // we need this to happen after the first fakeRequest finishes! 그리고 지금 const id를 써야 하므로 여기 바깥에다가 쓰지 못하고 nest해야 함
//         fakeRequest(`/users/${id}`).then((res) => {
//             const postId = res.data.topPostId;
//             fakeRequest(`/posts/${postId}`).then((res) => {
//                 console.log(res);
//             });
//         });
//     })
//     // 이렇게 .catch를 하면 맨 첫번째의 fakeRequest의 에러만 캐치함. 즉 catch를 다 하려면 각각 nested fakeRequest에 catch를 달아야 한다.. 끔찍. 이걸 더 보기 좋게 쓸 수 있는 방법은 없을까?
//     .catch((err) => {
//         console.log('OH NO!', err);
//     })

// I can chain .then() as long as each callback of .then() returns a promise!!! I won't have to do any nesting, instead I can return the promise.
// We can have multiple asynchronous actions that we want to happen one after another.. so not simultaneously, but one after another
//we chain .then() as long as we return a promise each time  , everything works and we only need one .catch()

fakeRequest('/users')
    .then((res) => {
        const id = res.data[0].id;
        // return another promise
        return fakeRequest(`/users/${id}`)
    })
    // put next .then() on the same level!
    // 이 .then()은 will run only if the first promise was resolved.. 밑의 것들도 마찬가지임. 순서대로.
    .then((res) => {
        const postId = res.data.topPostId;
        return fakeRequest(`/posts/${postId}`)
    })
    .then((res) => {
        console.log(res);
    })
    // we only need one .catch() !!
    .catch((err) => {
        console.log('OH NO!', err);
    });


*/

// Refactoring w/ promises

// It's not just about doing asynchronous things and being able to run code afterwards. It's also about being able to catch anytime a promise is rejected, having a single catch.. it makes a huge difference!

const btn = document.querySelector("button");
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

moveX(btn, 300, 1000)
  // 그런데 지금처럼 return문 하나만 딱 있을 때는 이렇게 바꿔 쓸 수 있음
  //   .then(() => {
  //     return moveX(btn, 300, 1000);
  //   })
  .then(() => moveX(btn, 100, 1000)) // gives us a promise!
  .then(() => moveX(btn, 100, 1000))
  .then(() => moveX(btn, 100, 1000))
  .then(() => moveX(btn, 100, 1000))
  .then(() => moveX(btn, 100, 1000))
  .then(() => moveX(btn, 100, 1000))
  .then(() => moveX(btn, 100, 1000))
  // 위에서 reject할 때 object를 넘겨주도록 했음. 그걸 destructure해서 사용할 것임.
  .catch(({ bodyBoundary, amount, elRight }) => {
    console.log(`Body is ${bodyBoundary}px wide`);
    console.log(`Element is ${elRight}px, ${amount} is too large!`);
  });

// 원본
// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//     setTimeout(() => {
//         const bodyBoundary = document.body.clientWidth;
//         const elRight = element.getBoundingClientRect().right;
//         const currLeft = element.getBoundingClientRect().left;

//         if (elRight + amount > bodyBoundary) {
//             onFailure();
//         } else {
//             element.style.transform = `translateX(${currLeft + amount}px)`;
//             onSuccess();
//         }
//     }, delay);

// };

// moveX(btn, 100, 1000, () => {
//     moveX(btn, 400, 1000, () => {
//         moveX(btn, 700, 1000, () => {
//             console.log('REALLY, WE STILL HAVE SCREEN LEFT?');
//         }, () => {
//             alert('CANNOT MOVE FURTHER!');
//         })
//     }, () => {
//         alert('CANNOT MOVE FURTHER!');
//     })
// }, () => {
//     alert('CANNOT MOVE FURTHER!');
// })
