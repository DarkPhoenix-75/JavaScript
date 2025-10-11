const user = {
    username: "Sameer",
    price: 999,

    welcomemMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}

// user.welcomemMessage()
// user.username="Sam"
// user.welcomemMessage()
// console.log(this);    //now in this current context (this) gives empty object . Meanwhile, in the browser it gives Window object.

// function chai(){
//     username:"Sameer Bhardwaj"
//     console.log(this.username)   //Inside a function it will give undefined....
// }

// chai()

// const chai= ()=>{
//     let username="hitesh"
//     console.log(this.username);
    
// }
// chai()


//Arrow function

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4))


//implicit without return 
// const addTwo = (num1,num2)=>(num1+num2) 
// console.log(addTwo(3,4))

const addTwo = (num1,num2)=>({username:"hitesh"})
console.log(addTwo(3,4))
