// "flat " method

// It creates a new array with the elements of the subarrays
//"concatenated" into it

// let arr = [1,2,3,4,[4,5,6]]

// let result = arr.flat(1);// 
// console.log("After flat: ",result);



// "flatMap" method

// It is the combination of the "map()" method followed by the "flat()" method of dept "1"

let cart = [
    {
        name:"Mobile",
        qty:2,
        price:500
    },
    {
        name:"tablet",
        qty:5,
        price:1000
    },
    {
        name:"TV",
        qty: 10,
        price:10000
    }
]


let newCart = cart.flatMap(item=>{
    if(item.name==="Mobile"){
        return[item,{
            name:"Screen protector",
            qty:1,
            price:0
        }]

    }else{
        return [item]
    }
})

console.log(newCart);





