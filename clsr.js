// ------------1------------
// LET BLOCK

// for(var i=1;i<=5;i++){ 
//     // setTimeout(function(){
//     //     console.log(i);
//     // },i*1000)
// }

// for(var i=1;i<=5;i++){
//     test(i);
// }

// function test(i){
//     setTimeout(function(){
//         console.log(i);
//     },i*1000)
// }


// -----------2--------------
//2.1
// f2 form clouse with f1, f3->f2&f1
function f1(){
    var a= 4;
    function f2(){
        var b=a; 
        // console.log(c);
        function f3(){
            console.log(b);
        }
        f3();
    }
    f2();
}
f1();

// 2.2 NO closure is formed Why?

function f1(){
    var a= 4;
    function f2(){
        // var b=a; 
        // console.log(c);
        function f3(){
            // console.log(a);
        }
        f3();
    }
    f2();
}
f1();

// 2.3 Why clouser  f3->f1 is formed?
function f1(){
    var a= 4;
    function f2(){
        var b=a; 
        // console.log(c);
        function f3(){
            // console.log(a);
        }
        f3();
    }
    f2();
}
f1();