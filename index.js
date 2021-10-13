// UNUSER VARS & FUNCTIONS INSIDE ANOTHER FUNCTIONS

// console.log(c);
// // console.log(d)
// var c = 5;
// var f;
// // let lvar1 = 4;
// // let lvar2;
// function a() {
//     var d1 = 5;
//     var d2;
//     // var d2 = 5;
//     console.log(e1);
//     let e1 = 4;
//     // let e2;
//     function child1() {
//         console.log('Bingo child11');
//     }

//     function child2() {
//         console.log('Bingo child2');
//     }
//     child1();
// }

// function a1() {
//     console.log('a1');
// }
// a();

//------------//
// SELF INVOCATION

// var c=4;
// (function a(){
//     console.log('d');
// })()

// function a1(){
//     console.log('d1');
// }

// a1();

// --------------------//

// SCOPEs

// let a = 10;
// var a1=5;
// {
//     let a2 = 5;
// }

// function foo() {
//     var c= 5;
//     {
//         c1=33;
//         c2=45;
//     }
//     // console.log(x);
// }

// foo();

// console.log(a);


// ------------------------//
// Whenever there are multiple refrences for a variable in a particular function/globalally, there will be error
// var p=5;
// let p=5;
// Uncaught SyntaxError: Identifier 'p' has already been declared
// var a = 4;
// function c(){
//     var a=5;
//     var d = 4;
//     let aa = 5;
//     console.log(a);
// }
// c()
// console.log(a);


///////////---------------------////////////////
// CLOSURE
// function a(){
//     var a1=3;
//     function b(){
//         var b1 = 4;
//         function c(){
//             console.log(a1,b1);
//         }
//         return c;
//     }
//     return b();
// }
//  var d = a()
//  var f=4;
//  // where can i find clousure
//  d();



//--------------- Temporal Dead Zone ISSUE---------------//
// function go(n) {
//     // n here is defined!
//     console.log(n); // Object {a: [1,2,3]}
  
//     for (let n of n.a) { // ReferenceError
//       console.log(n);
//     }
//   }
  
//   go({a: [1, 2, 3]});

  //--------------- TDZ ISSUE ---------------//


// var f1 = function f(){
//   console.log(f);
// }

// ---------------------------------------//
// x is deleted & y is not
// var x=  1;
// delete x;
// y=3;
// delete y;


