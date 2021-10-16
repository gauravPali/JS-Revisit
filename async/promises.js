// Producer code
let p1 = new Promise(function (resolve, reject) {
    // i do some work which takes time
    setTimeout(() => {
        // resolve('I am completed');
        reject(new Error('I am wrong'));
    }, 10000)
})
//

// consumer code
// then :- Attaches callbacks for the resolution and/or rejection of the Promise.
p1.then(function (res) {
    console.log(res);
}, function (err) {
    console.log(err);
})

// other ways 
p1.then(res => console.log(res));
p1.then(null, function (err) {
    console.log(err);
})
p1.catch((err) => console.log(err));

//

new Promise((resolve, reject) => {
    setTimeout(() => resolve('I am resolved'), 2000);
    setTimeout(() => reject('I am not resolved'), 2000);
}).then((res) => { console.log('then executing', res); return 5; })
    .finally(() => console.log('finally executing'))
    .then((res) => console.log('then executing', res))
    .catch((err) => console.log('catch executing', err))

// Output : then executing I am resolved
//          finally executing
//          then executing 5

// A handler, used in .then(handler) may create and return a promise.
// If we throw inside .catch, then the control goes to the next closest error handler
// the execution: catch -> then
new Promise((resolve, reject) => {
    throw new Error("Whoops!");
}).then(() => alert("1st"))
    .catch(function (error) {
        alert("The error is handled, continue normally");
    }).then(() => alert("2nd"));


let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];
// ajax 1
// ajax 2
// ajax 3

// response will not be in order 
fetch(urls[0]).then(res => console.log('url 1', res));
fetch(urls[1]).then(res => console.log('url 2', res));
fetch(urls[2]).then(res => console.log('url 3', res));

// response in order
fetch(urls[0]).then(res => {
    console.log('url 1', res);
    return fetch(urls[1])
}).then(res => {
    console.log('url 2', res);
    return fetch(urls[2])
}).then(res => {
    console.log('url 3', res);
})

Promise.all([fetch(urls[0]), fetch(urls[1]), fetch(urls[2])]).then((res) => console.log(res));



let names = ['iliakan', 'remy', 'jeresig'];
let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));
let names = ['iliakan', 'remy', 'jeresig'];
let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));
let names = ['iliakan', 'remy', 'jeresig'];
let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));
Promise.all(requests)
    .then(responses => {
        // all responses are resolved successfully
        for (let response of responses) {
            console.log(`${response.url}: ${response.status}`); // shows 200 for every url
        }

        return responses;
    })
    // map array of responses into an array of response.json() to read their content
    .then(responses => Promise.all(responses.map(r => r.json())))
    // all JSON answers are parsed: "users" is the array of them
    .then(users => users.forEach(user => console.log(user.name)));


var delay = 2000;
let timer = setInterval(function () {
    console.log('i am set interval\n');
    delay = 10000;
}, delay)


// difference in callbacks and promises 
function multiply(a, b, c1, c2) {
    let result = a * b;
    if (result >= 100) {
        res = c1(result);
        if (c >= 1000) {
            result = c2(res);
        }
    }
}
function makeItTwice(num) {
    return 2 * num;
}
function makeItZero(num) {
    return 0;
}
multiply(10, 180, makeItTwice, makeItZero);

c = new Promise((res, rej) => {
    res(10 * 180);
}).then(res => {
    return res * 2;
}).then(res => {
    return res * 0;
})
//

//--------------------------------//
c =  new Promise((res,rej)=>{
    setTimeout(()=>{
        res({name:'Gaurav'});
    },2000)
}).then((user) =>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res({id:'3332'});
        },2000)
    })
}).then(id =>{
    console.log(id);
})

c1 =  new Promise((res,rej)=>{
    setTimeout(()=>{
        res({name:'Gaurav'});
    },20000)
}).then(user =>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res({id:'3332'});
        },2000)
    }).then((id)=>{
        return {
            ...id,...user
        }
    })
})

c3 = Promise.resolve({name:'Gaurav'})
     .then(user => {
         return Promise.resolve({id:3332}).then(id => Promise.resolve({...user,...id}))
     })        
//--------------------------------//     


//----------------------------------//
function consoleMe(msg){
    msg = msg || 'console';
    console.log(msg);
}

function alertMe(msg){
    msg = msg || 'Alert';
    alert(msg);
}

new Promise(function(res,rej){
    res('I am there');
})
.then(function(res){
    console.log(res);
},function(err){
    alert(err);
})

// Passing only function name
new Promise(function(resolve,reject){
    resolve('I am there');
})
.then(consoleMe,alertMe);

//------------------------------------------//
