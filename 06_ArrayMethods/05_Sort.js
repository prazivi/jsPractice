// Sortinf rray using sort method

/// By default sort method is use to sort strings
// it firstly convert everything into string and then ...

let letters = ["d","e","f","a","b"];
// console.log(letters.sort());

let nums = [2,3,7,-1,-22,-43];

console.log("unsorrted", nums);
//console.log(nums.sort);// treat it like  string

//  if a-b < 0 => a < b => A,B (keep oder same)

// if a-b > 0 => a > b =>B,A(switch the order)


// nums.sort((a,b)=>{
//     if(a<b){
//         return -1 // any num less than 0
//     }
//     if(a>b){
//         return 1;//Any num greater than 0
//     }
    
// })
// desending sort
nums.sort((a,b)=>{
    return a-b;
})

//ascending
nums.sort((a,b)=>{
    return b-a;
})
console.log(nums);




