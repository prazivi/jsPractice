const tinderUser = new Object()
console.log(tinderUser);// empty object {}
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedin = false
// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullname:{
            firstName: "pranav",
            lastName: "Gupta"
        }
    }
}
// console.log(regularUser.fullName.userFullname);

const obj1 = {1:"a",2: "b"}
const obj2 = {3:"A", 4: "B"}
// const obj3 = {obj1,obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '2': 'B', '3': 'A' } }
// const obj3= Object.assign({},obj1,obj2)//{ '1': 'a', '2': 'b', '3': 'A', '4': 'B' }

const obj3 ={...obj1, ...obj2};//{ '1': 'a', '2': 'b', '3': 'A', '4': 'B' }



console.log(obj3);






