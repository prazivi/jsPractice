const score = 400;//number

const balance = new Number(100);
// console.log(balance);//[Number : 100]

// console.log(balance.toString());// 100 converted to string

// console.log(balance.toFixed(2)); //100.00

const otherNum = 23.82374969786;
// console.log(otherNum.toPrecision(2));//24

const hunderds = 10000000;
// console.log(hunderds.toLocaleString('en-IN'));//1,00,00,000




//****************** Math ***************
console.log(Math);
console.log(Math.abs(-4)); //4

console.log(Math.round(4.3)); //4
console.log(Math.round(4.8))//5
console.log(Math.ceil(4.2));//2 // always choose greater number

console.log(Math.floor(4.7))//4

console.log(Math.min(4,5,6,2,8,2));//2
console.log(Math.max(4,5,6,2,8,2));//8

console.log(Math.random());// comes value between 0 to 1

console.log((Math.random()*10)+1);

const min = 10;
const max =20;
console.log(Math.floor(Math.random()*(max-min+1))+min);







