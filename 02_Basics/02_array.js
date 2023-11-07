const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman","flash","batman"];
// marvel_heros.push(dc_heros);//give output as a 2d array (array inside another array)
// console.log(marvel_heros);//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// const allHero=marvel_heros.concat(dc_heros)// return new array
// console.log(allHero);//same as push

//Spread operator

const all_new_Heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_Heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity);// print all the value in a single array and we can define the depth of array also
console.log(real_another_array);

//false
console.log(Array.isArray("Pranav"));
console.log(Array.from("Pranav"));
console.log(Array.from({name:"Pranav"}))//interesting case (we have to say how to make array) it will give blank array


let score1 = 100;
let score2 = 200;
let score3 =300;
console.log(Array.of(score1,score2,score3));












