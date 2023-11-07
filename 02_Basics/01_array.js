// array
// js array can be with different datatypes 
const myArr = [0,1,2,3,4,5];
console.log(myArr[0]);
const myHeros = ["shaktiman", "nagraj"]
const myArr2 = new Array(1,2,3,4);
console.log(myArr2[0]);


//array methods

// myArr.push(6);// add new element at the end
// myArr.pop()// remove last element

// myArr.unshift(9);//add the value in start
// myArr.shift()//remove first element 

// console.log(myArr.includes(9));//false (search element is present or not)
// console.log(myArr.indexOf(9));//-1 (check present or not)

// const newArr = myArr.join(); // join convert array into string and bind it
// console.log(myArr);
// console.log(newArr);// got typeof as string (0,1,2,3,4,5)

// slice, splice
// slice original array will not be manupualte but in splice original array will manupulate 
console.log("A",myArr);
const myn1 = myArr.slice(1,3)// last one will not include
console.log(myn1);
console.log("B", myArr)

const myn2 = myArr.splice(1,3)
console.log("C",myArr) // [0,4,5]
console.log(myn2);//[1,2,3]





















