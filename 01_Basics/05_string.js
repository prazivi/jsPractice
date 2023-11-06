const name= "pranav";
const repoCount = 50;
// console.log(name + repoCount + "value")
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // literals start with ` and ends with ` and when we want to delclare any vaiable then we will use $(variable_name)

const gameName = new String (`Pranav`);// when we will try to find gameName then we will get string as a object 

console.log(gameName[0]); // P
console.log(gameName.__proto__);// we will get {}(object)


console.log(gameName.length); // 8
console.log(gameName.toUpperCase()); // PRANAV
console.log(gameName.charAt(2)); //a
console.log(gameName.indexOf('r')); //1  (if not available we got -1)
const newString = gameName.substring(0,4);//4th indext will be excluded
console.log(newString);//Pran

const anotherString = gameName.slice(-5,4);//ran
console.log(anotherString);

const newStringOne = "     pranav   ";
console.log(newStringOne); // don't remove spaces
console.log(newStringOne.trim()); // remove all spaces


const url = "https://pranav.com/pranav%20gupta"

console.log(url.replace('%20', '-'));//https://pranav.com/pranav-gupta

const str = "java";

console.log(str.split(""));//['j','a','v','a']

const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
console.log(eval(s2.valueOf())); // returns the number 4



