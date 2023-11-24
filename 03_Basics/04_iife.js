//IIFE : Imiditialy invoke function expression

(function chai(){
    console.log(`DB CONNECTED`);
})();

// globale scope ke pollutio se bahut bar dikkat hoti hai wos se htane ke liye hmne iife ka use kiya taki ye turant run ho jaye

( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
} ) (`pranav`)



