// for of 

// const arr = [1,2,3,4,5]
// for(const num of arr){
//     console.log(num);
// }

// const greetings = "Hello world";
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`)
// }

//Maps

const map = new Map();
map.set('IN', "India")
map.set('USA', "United states of america")
map.set('Fr', "France")

//console.log(map);//Map(3) {
//     'IN' => 'India',
//     'USA' => 'United states of america',
//     'Fr' => 'France'
//   }

// for(const key of map){ //[ 'IN', 'India' ]
//                       //[ 'USA', 'United states 
                                        //of 
//                          //america' ]
//                       // [ 'Fr', 'France' ]
//     console.log(key);
// }


for(const [key, value] of map){
    console.log(key, ":-" , value);
}




