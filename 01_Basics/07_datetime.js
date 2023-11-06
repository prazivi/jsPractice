let myDate = new Date();
console.log(myDate.toString());//Mon Nov 06 2023 05:56:53 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());//Mon Nov 06 2023

console.log(myDate.toISOString());//2023-11-06T05:58:09.912Z

console.log(myDate.toJSON());

console.log(myDate.toLocaleString());//11/6/2023, 5:59:27 AM
console.log(typeof myDate);//object

// let myCreateDate = new Date(2023,0,23);//month start from 0
let myCreateDate = new Date("01-14-2023")
console.log(myCreateDate.toDateString());//Sat Jan 14 2023

let myTimeStamp = Date.now()
console.log(myTimeStamp);//1699250735450
console.log(myCreateDate.getTime());//1673654400000
console.log(Math.floor(Date.now()/1000))//1699250735

let newDate = new Date();
console.log(newDate.getMonth()+1);//11

console.log(newDate.toLocaleString('default',{
    weekday:"long", 
}));// monday



