// ------------VAR KEYWORD-------------//

// P1
var x = 0;
function f() {
  var x = y = 1; // Declares x locally; declares y globally. Throws a ReferenceError in strict mode.
}
f();

console.log(x, y); // 0 1

// Variables that appear to be implicit globals may be references to variables in an outer function scope:

var x = 0; // Declares x within file scope, then assigns it a value of 0.

console.log(typeof z); // "undefined", since z doesn't exist yet

function a() {
  var y = 2; // Declares y within scope of function a, then assigns it a value of 2.

  console.log(x, y); // 0 2

  function b() {
    x = 3; // Assigns 3 to existing file scoped x.
    y = 4; // Assigns 4 to existing outer y.
    z = 5; // Creates a new global variable z, and assigns it a value of 5.
           // (Throws a ReferenceError in strict mode.)
  }

  b(); // Creates z as a global variable.
  console.log(x, y, z); // 3 4 5
}

a(); // Also calls b.
console.log(x, z);     // 3 5
console.log(typeof y); // "undefined", as y is local to function a
// P1 ENDS

// Q - Why does var allow duplicate declaration but why does const and let not allow duplicate declaration?
// Ans-This is to improve scoping over vanilla var.




















//----------------------MISC----------------------//

// let & const are not created in global object with var
console.log(a6);
a6 = 0;
var a6 = 111;
// a7 = 0; // Uncaught ReferenceError: Cannot access 'a7' before initialization
let a7 = 111;
function f() {
    // let & const are created in same object with var
    a7 = 0;
    a4 = 0;  // Creted under global object when this line runs
    a5 = 0;
    var a5 = 1;
    a6 = 0; // Uncaught ReferenceError: Cannot access 'a6' before initialization
    let a6 = 111;
}

f();
