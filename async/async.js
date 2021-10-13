// Producer code
let p1 = new Promise(function (resolve, reject) {
    // i do some work which takes time
    setTimeout(() => {
        // resolve('I am completed');
        reject(new Error('I am wrong'));
    }, 10000)
})

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


new Promise((resolve, reject) => {
    setTimeout(() => resolve('I am resolved'), 2000);
    setTimeout(() => reject('I am not resolved'), 2000);
}).then((res) => { console.log('then executing', res); return 5; })
    .finally(() => console.log('finally executing'))
    .then((res) => console.log('then executing', res))
    .catch((err) => console.log('catch executing', err))

// result
// then executing I am resolved
// finally executing
// then executing 5

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
let timer = setInterval(function(){
    console.log('i am set interval\n');
    delay = 10000;
},delay)



