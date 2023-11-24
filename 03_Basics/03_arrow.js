// arrow function is a another way to write functions in js

//ES6 feature


const user = {
    username: "pranav",
    price: 999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`)// this refer to the current context of a function
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()// print sam and didn't gave error because this cange the current context name in the user object

//console.log(this)//we will get only {} as o/p but in the chrome console we will get window


// function chai(){
//     let username = "pranav"
//     console.log(this.username);// undefined because we cam't use this in functions it works in object
//     // console.log(this); // we will gte a lot of values in it 
// }
// chai();



// const chai =() => {
//     let username = "pranav"
//     console.log(this);
// }
// chai();

const addtwo = (num1,num2)=> {
    return num1+num2
}
console.log(addtwo(3,4));


