// function addTwoNumbers(num1,num2){  //parameters
//     console.log(num1+num2)
// }

function addTwoNumbers(num1,num2){  //parameters
    return num1+num2;
    console.log("Sameer");  //after return you can't print anything
    
}

const result =addTwoNumbers(33,65)
// console.log("Result:",result)

function loginUserMessage(username="sam") {
    if (!username) {
        console.log("Please enter your username");  
        return   
    }
    else{
        return `${username} just logged in`
    }
    
}

// console.log(loginUserMessage());  //If not passed something it will give undefined..

// let res=loginUserMessage("Sameer")
// console.log(res)

//Rest Operator(...)
function calculateCartPrice(val1 , val2 , val3, ...num1) {  
    return num1   
}

console.log(calculateCartPrice(200,400,600,2000,4000))

// const user={
//     username:"Sameer",
//     price:"199"
// }

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

//Another way of passing object into function
handleObject({       
    username:"sam",
    price:399
})


const myNewArray=[200,300,40,600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400,600]));