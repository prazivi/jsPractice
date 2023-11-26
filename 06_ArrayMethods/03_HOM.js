// Arrya Methods


// Map methods

// Create new array from original array by applying
//transformation function

let salaries = [3000,5000,6000,9000]

let newSalary = salaries.map(salary=>{
    let incrementAmt = salary/2;
    return salary + incrementAmt;
})

console.log("After 50% Increment", newSalary)
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
console.log(filterArray);

// Imp note

//Length of new array may or may not be equal to original array




// Reduce method

// reun reducer function fir each array element
// Array,reduce(function(total,currentValue),initialValue)
//it return single value




































