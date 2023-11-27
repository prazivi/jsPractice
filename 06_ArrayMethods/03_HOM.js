// Arrya Methods


// Map methods

// Create new array from original array by applying
//transformation function

let salaries = [3000,5000,6000,9000]

let newSalary = salaries.map(salary=>{
    let incrementAmt = salary/2;
    return salary + incrementAmt;
})

// console.log("After 50% Increment", newSalary)
// Length of the new array always "equal" to the original array




//filter method

let gifts=["watch","ring","chocolate","Teedy-bear","watch","ring"];

// Now i want to filter only "watch and ring" gifts

let filterArray = gifts.filter(gift=>{
    if(gift=="watch" || gift == "ring"){
        return gift;
    }

})

// It return new array
// console.log(filterArray);

// Imp note

//Length of new array may or may not be equal to original array




// Reduce method

// reun reducer function fir each array element
// Array,reduce(function(total(accumulator),currentValue),initialValue)
//it return single value
// sum of all the element

let num = [1,2,5,6,9]

let sum = num.reduce(function(total,currentValue){
    return total+currentValue
},0)

// console.log(sum);

// does not mutate original array


// Find method

//It returns the first element we are looking for...

// let student = [
//     {
//         id:1,
//         name: "alex"
//     },
//     {
//         id:2,
//         name: "john"
//     }
// ]

// let res = student.find(student=>{
//     return student.id===1
// })

// console.log(res);




// Find index
// Execute function for each array element
// iT return "index" of that element who "first" pass the test "otherwise" -1

// let ages = [21,18,19,17,23]
// let result = ages.findIndex(age=>{
//     return age>25;
// })
// console.log(result);//-1



// Some and every method

// "Some" method return true if any any array element pass the test

// every method return true if all element pass the test

let scores = [25,34,67,80,92]
// let result = scores.some(score =>{
//     return score > 50
// })

// let result = scores.every(score=>{
//     return score >24
// })
// console.log(result);
















































