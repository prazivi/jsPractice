//let , var,  const

//var
//variable ‘a’ is declared globally. So, the scope of the variable ‘a’ is global, and it can be accessible everywhere in the program. 
// var a = 10
// function f() {
//     console.log(a)
// }
// f();
// console.log(a);

/*function f() {
 
    // It can be accessible any
    // where within this function
    var a = 10;
    console.log(a)
}
f();//10
 
// A cannot be accessible
// outside of function
console.log(a);//ReferenceError: a is not defined

*/

/*
If users use the var variable before the declaration, it initializes with the undefined value.
console.log(a);//undefined
var a = 10;
*/



// Let keyword

//The scope of a let variable is only block scoped.
/*
let a = 10;
function f() {
    let b = 9
    console.log(b);
    console.log(a);
}
f();*/
/*

let a = 10;
function f() {
    if (true) {
        let b = 9
 
        // It prints 9
        console.log(b);
    }
 
    // It gives error as it
    // defined in if block
    console.log(b);//ReferenceError: b is not defined
}
f()

 
// It prints 10
console.log(a)//10

*/

//example 3

//console.log(a);
//let a = 10;//Uncaught ReferenceError: Cannot access 'a' before initialization

let g = 10;

console.log(g);


function one(){
    const username = "pranav"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "pranav"
    if (username === "pranav") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}








// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     // console.log("INNER: ", a);
    
// }



// console.log(a);
// console.log(b);
// console.log(c);

