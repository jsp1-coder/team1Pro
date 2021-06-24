// JSON
/*
{
    "squadName" : "Super hero squad",
    "homeTown" : "Metro City",
    "formed" : 2016,
    "secretBase" : "Super tower",
    "active" : true,
    "members" : [
        "Molecule Man",
        "Madame Uppercut",
        "Eternal Flame"
    ]
}
*/

// XMLHttpRequests : The Basics
/*

// example
// function reqListener () {
//     console.log(this.responseText);
//   }

//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener("load", reqListener);
//   oReq.open("GET", "http://www.example.org/example.txt");
//   oReq.send();

// let's try sending a request to SWAPI's planet list

// make a request object
const firstReq = new XMLHttpRequest();

// 콜백을 사용하는 방법은 여러가지가 있지만 우리는 addEventListener를 쓸 것임
firstReq.addEventListener("load", () => {
  console.log("IT WORKED!");
  // arrow function 안이라서 this. 쓸 수 없음.. 일반 함수면 가능
  // this.responseText;
  //console.log(firstReq.responseText);
  const data = JSON.parse(firstReq.responseText);
  // console.log(data);
  for (let planet of data.results) {
    console.log(planet.name);
  }
});

firstReq.addEventListener("error", () => {
  console.log("ERROR!!!");
});

// URL that I want to send a request to!
firstReq.open("GET", "https://swapi.dev/api/planets/");
firstReq.send();

// 리퀘스트를 보내는 데는 시간이 걸린다. 그래서 콜백을 더하는 것임.
// 리퀘스트를 보내는 행위는 브라우저에 의해 일어나기 때문에 그 동안 자바스크립트는 멈춰있지 않고 뭔가를 계속 할 수 있다.

console.log("Request Sent!");

// 리퀘스트를 보내고 응답한 걸 보려면 responseText를 사용해야 한다.
// 실제로 firstReq.responseText를 해보면 JSON 형식의 string이 보인다. 이걸 어떻게 실제 js object로 바꿀까? JSON.parse(); 를 이용

*/

// XMLHttpRequests : Chaining Requests
/*

// if I wanted to take the first planet and look at the first resident of that planet... I would send another request to this URL.. so let's do that through the code.

const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", () => {
  console.log("FIRST REQUEST WORKED!");
  const data = JSON.parse(firstReq.responseText);
  // to make a second request, we'd have to write our code inside the callback.

  // let's start with singling out the URL.
  // data.results 중 첫번째 것 중 films 배열 중 첫번째 것
  // console.log(data.results[0].films[0]);
  // 그러면 우리가 더 많은 리퀘스트를 보낼 수 있는 url이 나옴.
  // 이제 이 url로 리퀘스트를 보내보자.

  const filmURL = data.results[0].films[0];
  const filmReq = new XMLHttpRequest();
  filmReq.addEventListener("load", function () {
    console.log("SECOND REUQEST WORKED!");
    // console.log(this); // references the entire film object
    const filmData = JSON.parse(this.responseText);
    console.log(filmData);
  });
  filmReq.addEventListener("error", function (e) {
    console.log("ERROR!", e);
  });
  filmReq.open("GET", filmURL);
  filmReq.send();
});

firstReq.addEventListener("error", () => {
  console.log("ERROR!!!");
});

firstReq.open("GET", "https://swapi.dev/api/planets/");
firstReq.send();
console.log("Request Sent!");

*/

// A Better Way : Fetch!

/*

// XMLHttpRequeset can get really messy once we get working with a bunch of callbacks..
// so this is where fetch comes in!

// example

// fetch라는 이름의 메소드 호출, url 전달.. 이 메소드는 promise를 리턴함!
// fetch("https://icanhazdadajoke.com/23/2", {
//   headers: { Accept: "application/json" },
// })
//   // if the promise is resolved, the value is a response object. it contains the information about the response..
//   .then((res) => {
//     if (res.status !== 200) {
//       console.log("Problem!", res.status);
//       return;
//     }
//     res.json().then((data) => {
//       console.log(data);
//     });
//   })
//   // can catch the rejected promise
//   .catch(function (err) {
//     console.log("Fetch Error", err);
//   });

// let's rewrite this using fetch..

// it will be resolved with response object
// ReadableStream :
// The ReadableStream interface of the Streams API represents a readable stream of byte data. The Fetch API offers a concrete instance of a ReadableStream through the body property of a Response object.
// a key difference here is that .. the content of that response is included as a readable stream and a stream is a way of accessing data that could be large .. and you can access it and process it as you go.
// it has .json() method and it returns ANOTHER promise

fetch("https://swapi.dev/api/planets/")
  .then((response) => {
    // console.log(response.json());
    // returns ANOTHER promise. so if we want the data we need to do another .then and it will be resolved with the data that is read and PARSED!
    if (!response.ok) {
      //console.log("ERROR NOT STATUS : 200", response.status);
      // we throw a new error
      throw new Error(`Status code error: ${response.status}`);
    } else {
      response.json().then((data) => {
        // now we have our API data with the results and we can do whatever we want with them.
        // console.log(data);
        for (let planet of data.results) {
          console.log(planet.name);
        }
      });
    }
  })

  // The Promise returned from fetch() WON'T REJECT on HTTP error status even if the response is an HTTP 404 or 500!! instead, it will resolve normally (with ok status set to false), and it will only reject on network failure or if anything prevented the request from completing.
  // so this .catch() isnt' going to run.
  // unlike XHR, our .then() will run everytime
  .catch((err) => {
    console.log("SOMETHING WENT WRONG WITH FETCH", err);
  });

// const filmURL = data.results[0].films[0];
// const filmReq = new XMLHttpRequest();
// filmReq.addEventListener("load", function () {
//   console.log("SECOND REUQEST WORKED!");
//   // console.log(this); // references the entire film object
//   const filmData = JSON.parse(this.responseText);
//   console.log(filmData);
// });
// filmReq.addEventListener("error", function (e) {
//   console.log("ERROR!", e);
// });
// filmReq.open("GET", filmURL);
// filmReq.send();
// });

// firstReq.addEventListener("error", () => {
// console.log("ERROR!!!");
// });

// firstReq.open("GET", "https://swapi.dev/api/planets/");
// firstReq.send();
// console.log("Request Sent!");

*/

// Chaining Fetch Requests

/*

// so here we have multiple requests that are happening one after another but there's not really any nesting.
// it's all very flat!
// I mean yes, we're repeating the same logic here..
// we're checking for the response being OK , we're checking for we're parsing the JSON ..
// we can refactor it !

// FETCH can return promises and we can use those promises to keep things flat!

fetch("https://swapi.dev/api/planets/")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Status code error: ${response.status}`);
    } else {
      return response.json(); // response를 string으로
    }
  })
  .then((data) => {
    console.log("FETCHED ALL PLANETS (first 10)");
    const filmURL = data.results[0].films[0];

    // I can return it because it's a Promise
    return fetch(filmURL);
  })
  .then((response) => {
    if (!response.ok) throw new Error(`Status code error: ${response.status}`);

    return response.json();
  })
  .then((data) => {
    console.log("FETCHED FIRST FILM, based off first planet");
    // we're getting all of that movie data!
    //console.log(data);
    console.log(data.title);
  })
  .catch((err) => {
    console.log("SOMETHING WENT WRONG WITH FETCH", err);
  });

*/

// Refactoring Fetch Chains

/*
// Before, we were getting the first 10 planets and then taking the first one of those 10 and getting the first film URL and requesting that
// if we look at the planets response that we get back among the docs.... it gives us lots of things but theres a property called "next", and it's another URL to get more planets. 그럼 이걸 이용해서 먼저 첫번쨰 10개 행성 묶음을 가져오고 다음 페이지 (url)에 있는 행성 10개를 가져오고 하는 식으로 계속 해보자.

// so we'll keep this first request to get the first 10 planets
// fetch("https://swapi.dev/api/planets/")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Status code error: ${response.status}`);
//     } else {
//       return response.json(); // response를 string으로
//     }
//   })
//   .then((data) => {
//     console.log("FETCHED ALL PLANETS (first 10)");

//     // let's print each planet again
//     for (let planet of data.results) {
//       console.log(planet.name);
//     }
//     const nextURL = data.next;

//     return fetch(nextURL);
//   })
//   .then((response) => {
//     if (!response.ok) throw new Error(`Status code error: ${response.status}`);

//     return response.json();
//   })
//   .then((data) => {
//     console.log("FETCHED Next 10 planets");
//     for (let planet of data.results) {
//       console.log(planet.name);
//     }
//   })
//   .catch((err) => {
//     console.log("SOMETHING WENT WRONG WITH FETCH", err);
//   });

// we're repeating the smae logic here again! so why don't we make a function and move the repeated logic into the function?
// 원래 .then() 안에 함수를 전달하는 데 이 때 함수가 익명함수든 이름이 있는 함수든 상관 없다
// 또한 promise는 어떤 밸류를 갖고 resolved 되는데 그렇기 때문에 .then() 안에 promise를 리턴하는 함수를 쓰면 그 value가 알아서 전달된다.
// 행성 이름을 print 하는 부분도 똑같은 로직이 반복되므로 함수를 만들어서 .then()에 집어넣어버리면 참 편리할 것 같지만 그렇게 안된다. 왜? .then() 체인에 들어가는 함수들은 promise를 리턴해야 하기 때문에. .then()에서 리턴된 promise가 다음 .then()에 들어가고..... 다른 방법을 생각해내보자.
// 예를들어 printPlanets 라는 함수를 만들어 중간에 추가해보면, printPlanets 다음에 실행되는 .then() 에서 data.next 를 사용하고 있는데 위의 .then() 에서 return 하는 data가 없으므로 에러가 난다.
// the only way we can chain all of this together is by returning promises..
// However, we can fix that! it's nice and easy.
// 첫번째는 printPlanets 함수에 new Promise()로 promise를 새롭게 생성하는 방법.
// 두번째는 Promise.resolve 메소드를 이용하는 것... with the same data that we passed in. So we're just passing it through again. We're not changing any data here. It's being passed from checkStatusAndParse to this .then() call back and we're using it, passing it along as we resolve this (new born) promise which only exists to keep the chain of .then()s moving..

const checkStatusAndParse = (response) => {
  // 이렇게 체크하는 이유 -> fetch는 404 error 라도 모든 response를 response로 간주하고 리턴해벌임. 그래서 이게 좋은 status code인지 나쁜 status code인지 구분해야 함.
  if (!response.ok) throw new Error(`Status code error: ${response.status}`);
  return response.json(); // this method returns a promise
};

// 첫번째 방식 - new Promise() 로 promise 생성해버리기.
// const printPlanets = (data) => {
//   console.log("Loaded 10 more plantes...");
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }

//   // 걍 임의대로 promise를 만들고 resolve 까지 시켜벌임..
//   const p = new Promise((resolve, reject) => {
//     // I'm resolving it with the same data that was passed in
//     resolve(data);
//   });

//   return p;
// };

// 두번째 방식 - Promise.resolve() 메소드 이용하기.
const printPlanets = (data) => {
  console.log("Loaded 10 more plantes...");
  for (let planet of data.results) {
    console.log(planet.name);
  }

  // It will create a brand new promise for you that is resolved!
  // data.next로 바꾼 이유는 fetchNextPlanets에서 url을 사용할 것이기 때문에.. data.next 가 우리가 필요한 url 임!! 그래서 이 value를 가지고 resolve 할 것임. 이 다음에 오는 .then() 콜백 안에 nextURL 이 data.next를 필요로 하므로..
  return Promise.resolve(data.next);
};

// another function .. expects a URL to be passed in

const fetchNextPlanets = (url) => {
  return fetch(url);
};

fetch("https://swapi.dev/api/planets/")
  .then(checkStatusAndParse)
  .then(printPlanets) // 이 다음에 오류. Cannot read property 'next' of undefined
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .catch((err) => {
    console.log("SOMETHING WENT WRONG WITH FETCH", err);
  });

  */

// AXIOS

/*
// axios.get('http://swapi.dev/api/planets/');
// 이렇게 하면 promise를 return 받는다. 이걸 변수에 저장해서..

// const res = axios.get("http://swapi.dev/api/planets/");
// resolved 되었다. fetch를 쓸 때 처럼 promise를 돌려받는구나!
// console에서 살펴보면, 돌려받은 promise의 value 중 data property 가 있고 이미 우리를 위해 parsed 되어있음!!! that's one of the main advantages of using a tool like axios
// unlike fetch, with axios we don't have to do json parsing on our own.

axios
  .get("http://swapi.dev/api/planets/")
  .then((res) => {
    console.log(res.data); // 이미 parse 되어있음.
  })
  .catch((err) => {
    // fetch는 promise를 reject 하지 않았음.
    // axios knows that if there's a status code that's not 200 (ok) then it runs the catch callback! Non 200 status code will be rejected.
    console.log(err); // 일부러 url을 의미 없는 주소로 쓰면 404 error
  });

  */

// Sequential Axios Requests

// 저번에 fetch refactoring을 할 때 코드는 보기 좋았지만 여전히 같은 내용을 반복하고 또 반복했다.
// status code를 확인하고, json으로 parse하고...
// with Axios, we don't have to worry about parsing / status code...

// axios
//   .get("http://swapi.dev/api/planets/")
//   .then(({ data }) => {
//     // 우리에겐 지금 data만 필요하기 때문에 response를 destructuing 하는 것
//     console.log(data);
//     for (let planet of data.results) {
//       console.log(planet.name);
//     }
//     return axios.get(data.next);

//     // 이런 방법도 있지만 전에 봤던 것처럼 promise를 return 함으로써 .then()을 chain 할 수 있다. So we don't have to nest .then()
//     // axios.get(data.next)
//     // .then(({ data }) => {
//     //   // 우리에겐 지금 data만 필요하기 때문에 response를 destructuing 하는 것
//     //   console.log(data);
//     //   for (let planet of data.results) {
//     //     console.log(planet.name);
//     //   }
//     // });
//   })
//   .then(({ data }) => {
//     console.log(data);
//     for (let planet of data.results) {
//       console.log(planet.name);
//     }
//   })
//   .catch((err) => {
//     console.log("ERROR", err);
//   });

// refator 하기

const fetchNextPlanets = (url = "http://swapi.dev/api/planets/") => {
  return axios.get(url);
};

const printPlanets = ({ data }) => {
  console.log(data);
  for (let planet of data.results) {
    console.log(planet.name);
  }
  // we return a resolved promise with the value of data.next (url) ..
  return Promise.resolve(data.next);
};

fetchNextPlanets()
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .catch((err) => {
    console.log("ERROR", err);
  });
