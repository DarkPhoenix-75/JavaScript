/*Objects can be declared like two different types : 
Literals (no concept of singleton)
Constructors : (singleton)
*/

const mySym = Symbol("key1")

const jsUser={
    name:"Hitesh",
    "full name" : "Hitesh Chaudhary",
    [mySym]:"myKey1",    //should be used inside the [] for symbols
    age:"18",
    email:"hitesh@gmail.com",
    isLoggedIn:false,
    lastloginDays:["Monday","Saturday"]
}

console.log(jsUser.email)  //it directly takes arguments in ""
console.log(jsUser["email"]) //much useful
console.log(jsUser["full name"])

console.log(jsUser[mySym])

jsUser.email="sbh7505@gmail.com"
// Object.freeze(jsUser)  //Changes after this doesn't update
// jsUser.email="xyz@gmail.com"
console.log(jsUser)

jsUser.greeting=function () {
    console.log("Hello JS User")   
}

jsUser.greetingTwo=function () {
    console.log(`Hello JS User,${this.name}`)   
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());