// CREATING OBJECTS
// object literal
var book = {
    title: 'Books 1',
    author: 'Shwetabh'
}
//costructor function
function Student(name, age, std, rollNo) {
    debugger
    this.name = name;
    this.age = age;
    this.std = std;
    this.rollNo = rollNo;
}

var student1 = new Student('Ram', 20, 6, 48);

// Object.create method
var oc1 = Object.create(null);
var oc2 = Object.create({});
var oc3 = Object.create({a:1});
// Class 

myObj = {
    'av': 12,
    'ab': 1,
    '0': 9,
    '1': 99
}

Object.defineProperty(myObj, 'notenum', { value: 4});
// integer keys of the object (both enumerable and non-enumerable) are added in ascending order
console.log(myObj);
// Object.getOwnPropertyNames('foo');
// ["0", "1", "2", "length"] 

// Iterating over objects
console.log('using for in');
for (const prop in myObj) {
    console.log(`myObj.${prop} is ${myObj[prop]}`);
}

console.log('using Object.keys');
Object.keys(myObj).forEach(function (el) {
    console.log(`myObj.${el} is ${myObj[el]}`);
})

console.log('using Object.getOwnPropertyNames-non-enumerables are also added');
Object.getOwnPropertyNames(myObj).forEach(function (el) {
    console.log(`myObj.${el} is ${myObj[el]}`);
})


// Cloning objects
let obj1 = { name: 'Nicolas' };
let obj2 = obj1;
let obj3 = { ...obj1 };
let obj4 = Object.assign({},obj1); // Shallow copy
function deepClone(object){
    var obj = {};
    for(const key in object){
        if(typeof object[key] !== 'object'){
            obj[key] = object[key];
        }else{
            obj[key] =  deepClone(object[key]);
        }
    }
    return obj;
}
let obj5 = deepClone(obj1); // deep copy

console.log(obj1 === obj2); // true
console.log(obj1 === obj3); // false
console.log(obj1 === obj4); // false
console.log(obj1 === obj5); // false

// Optional Chaining 
// a?.b => if a exist then b else undefined



// static getters
// deep copy shallow copy


// Inheritance ,Prototype chain
var me = {
    name:'Alex',
    age:21
}

console.dir(me);
console.log(me.__proto__);
console.log(me.__proto__ === Object.prototype) // true
console.log(Object.__proto__ === Object.prototype) // false
console.log(Function.__proto__ === Function.prototype) // true
