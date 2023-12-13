const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB task, cryptography ,network calls
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()// connect with then
    },1000)
});
promiseOne.then(function(){
    console.log("Promise conssumed")
})



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)

}).then(function(){
    console.log("Asyyn 2 resolve")
})



const promisethree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Pranav", email: "kpranav.in@gmail.com"})
    },1000)
})
promisethree.then(function(user){
console.log(user)
})


const promisefour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"pranav", password:"123"})
        }else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})
 promisefour.then(user =>{
    console.log(user);
    return user.username;
 }).then((username)=>{
    console.log(username)
 }).catch(function(error){
    console.log(error)
 }).finally(()=>console.log("Promise is either resolve or rejected"))



 const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "JS", password:"123"})
        }else{
            reject('ERROR: Js went worng')
        }
    },1000)
 })

async function consumePromisefive(){
   try {
    const response= await promisefive
    console.log(response)
   } catch (error) {
    console.log(error)
   }
}

consumePromisefive()



// async function getAllUsers(){
//    try {
//     const response= await fetch('https://jsonplaceholder.typicode.com/users')
// //    console.log(response)
//     const data = await response.json()
//    console.log(data)
//    } catch (error) {
//     console.log("E", error)
//    }
// }

// getAllUsers()



fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data)
}).catch((error)=>console.log(error))