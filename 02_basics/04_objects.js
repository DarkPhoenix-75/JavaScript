// const tinderUser= new Object()
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Sam"
tinderUser.isLoggedIn=false

// console.log(tinderUser)

const regularUser={
    email:"abc@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Sameer",
            lastname:"Bhardwaj"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);    //accessing the nested objects

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

// const obj3=Object.assign({},obj1,obj2,obj4)   

//{} is used because we consider it as the target and remaining as source. You can do the combining without it also.

const obj3={...obj1 , ...obj2}
// console.log(obj3);


//When data comes from API , it generally comes in array of comma seperated objects
const users=[
    {
        email:"sam@gmail.com",
        uid:1
    },
    {
        email:"ram@gmail.com",
        uid:2
    },
    {
        email:"jam@gmail.com",
        uid:3
    },
]

// console.log(users[1].email)
// console.log(Object.keys(tinderUser));   //returns array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

//Syntax to access objects values
// (De-structure of objects)

// const {courseInstructor}=course
// console.log((courseInstructor));

const {courseInstructor:instructor}=course
console.log(instructor)

//JSON API intro

//It can also contain arrays as well as objects
// {
//     "name:"sameer",
//     "coursename:"js in hindi",
//     "price":"free"
// }
