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



// console.log(obj3);

const users = [
    {
        id :1,
        email: "h@gmail.com"
    },
    {
        id:2,
        email: "g@gmail.com"
    },
    {
        id:3,
        email:"i@gmail.com"
    }
]
// console.log(users[1].email); 

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));// data type is array
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


//array destructering 


const course = {
    coursename : "js in hindi",
    price : "999",
    courseInsturctor: "pranav"
}

// course.courseInsturctor

const {courseInsturctor: ins} = course
console.log(ins);



// const navbar = ({company}) => {

// }

// navbar(company = "pranav")



//json
// {
//     "name" : "prnava",
//     "coursename": "js in hindi",
//     "price": "free"
// }










