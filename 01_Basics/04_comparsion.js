// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);//true (js automatically convert it to number and then compare)
// console.log("02" > 1);//true

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false

// === 

/*
the reason is that an equality check == and comparsion > < > = <= works differently

Comparsions convert null to a number, treating it as 0.
That's ehy (3)null>=0 is true and (1)null>0 is false 
*/

console.log("2" === 2); // == gives true and === gives false because == check only value and === heck value and datatype both so it will give false; 