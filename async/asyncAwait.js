// ES7
// Return values of async function are to be converted to promises.

async function hello() {
  return 'Hello Bro';
}
hello().then(console.log(res))
// returned value is Promise with PromiseState : fullfilled & PromiseResult  is Hello Bro

const hello1 = async function () {
  return 'Hello 1 Bro';
}
hello1();

const hello2 = async () => 'Hello Arrow Fun';
hello2();

//-----------------------------------------//
fetch('coffee.jpg')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.blob();
  })
  .then(myBlob => {
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
  })
  .catch(e => {
    console.log('There has been a problem with your fetch operation: ' + e.message);
  });


async function fun() {
  let response = await fetch('coffee.jpg');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  let myBlob = await response.blob();
  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}

fun()
  .catch(e => {
    console.log('There has been a problem with your fetch operation: ' + e.message);
  });

//-----------------------------------------//

function promiseFun() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('i am set time out');
      res('I am response of promise');
      // rej('Reject:I am response of promise');
    }, 2000);
    // console.log('pali');
  })
}

async function f1() {
  let resp = await promiseFun();
  console.log('I am below await');
  console.log(resp);
  return `I came from async function ` + resp;
}

let c = f1().then(res => console.log(res))
console.log('I will continue');
/*
OUTPUT
I will continue
i am set time out
I am below await
I am response of promise
*/
//-----------------------------------------//

let currDate = new Date(), prevDate = new Date();
while (currDate.getTime() - prevDate.getTime() <= 3000) {
  currDate = new Date();
}
console.log('after 3 seconds');




// SAMPLE EXAMPLES
// https://pouchdb.com/2015/03/05/taming-the-async-beast-with-es7.html
// EX-1 multiple docs save
let docs = ['doc1', 'doc2', 'doc3'];
docs.forEach(docs => {
  docs.save()
    .then()
    .catch()
})

Promise.all(...docs.save())

// using promise
let promise = Promise.resolve();

docs.forEach(function (el) {
  promise = promise.then(function () {
    return Promise.resolve(el);
  })
})

docs.forEach(function (el) {
  promise = promise.then(function () {
    return new Promise((res, rej) => {
      setTimeout(() => res(el), 2000);
      console.log(el);
    })
  })
})

console.log('sync code');
console.log(promise);
// async
async function f() {
  for (let i = 0; i < docs.length; i++) {
    console.log('loop start: ', i);
    await new Promise((res) => {
      setTimeout(() => res(1), 2000)
    })
    console.log('loop end ', i);
  }
}

[1, 2, 3].forEach(async (i) => {
  console.log('loop start: ', i);
  await new Promise((res) => {
    setTimeout(() => res(1), 2000)
  })
  console.log('loop end ', i);
})



[1, 2, 3].forEach(async (i) => {
  console.log('loop start: ', i);
  let currDate = new Date(), prevDate = new Date();
  while (currDate.getTime() - prevDate.getTime() <= 3000) {
    currDate = new Date();
  }
  console.log('loop end ', i);
})


let docs = [{}, {}, {}];
let promises = docs.map((doc,i) => {
  return new Promise((res) => {
    setTimeout(() => res(i), 2000)
  })
});

// let docs = [{}, {}, {}];
// let promises = docs.map((doc) => db.post(doc));

Promise.all(promises).then(res => console.log(res))
console.log(await Promise.all(promises));

let results = [];
for (let promise of promises) {
  results.push(await promise);
}
console.log(results);

// NOPE  await res comes after promise.map exists so it container promises .
let results = promises.map(async function(promise) {
  return await promise;
});