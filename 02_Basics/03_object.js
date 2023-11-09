// singleton 
//object.create

//object literals
const mySym = Symbol("key1")
const Jsuser={
    name : "Pranav",
    "full name" :"Pranav gupta",
   [mySym]: "mykey1",
    age : 22,
    location: "Delhi",
    email : "pranav@gmail.com",
    isLOggedin : false,
    lastLoginDays:["Monday", "Sataturday"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
// console.log(Jsuser.mySym) // work like a string but we want to work it like symbol
console.log(Jsuser[mySym]);//now work like a symbol

Jsuser.email = "pranav@chatgpt.com"
//Object.freeze(Jsuser)//we can't perform any changes 
Jsuser.email = "pranav@microsoft.com"
console.log(Jsuser)
Jsuser.greeting = function(){
    console.log("Hello Js user");
}
Jsuser.greeting2 = function(){
    console.log(`Hello Js user, ${this.name}`);
}
// console.log(Jsuser.greeting);//undefined 
console.log(Jsuser.greeting)//when we remove freezee then ([Function (anonymous)])

console.log(Jsuser.greeting())//Hello Js user
console.log(Jsuser.greeting2())

console.log("Pranav");

// Summary
 /*
1. A JavaScript object is a collection of named values
2. ater objct.freeze we can't change the object
3. There is a special way to write symbol in js 
   * first declare symbol
   * then write it inside the object in a []
   * then call it in [] 
4. If we don't call greeting fn by () then we will get output as [Function (anonymous)]




 */