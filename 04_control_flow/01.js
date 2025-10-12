//if

//< , > , <= , >=, ==, !=, ===, !==


// const temperature=41

// if(temperature<50){
//     console.log("less than 50")
// }
// else{
//     console.log("temp is greater than 50");
// }

// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const balance=1000

// if(balance>500) console.log("test"), console.log("test2");    //implicit version 

// if(balance<500){
//     console.log("less than")
// }
// else if(balance<750){
//     console.log("less than 750")
// }
// else if(balance<900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }

//Input in node js
const prompt = require("prompt-sync")();


const userLoggedIn=prompt("Enter you are logged in or not")
const debitCard = prompt("Enter if you have debit card")

const loggedInFromGoogle=prompt("Enter you are logged in from google or not");
const loggedInFromEmail=prompt("Enter you are logged in from email or not");


if(userLoggedIn=="true" && debitCard=="true"){
    console.log("Allow to buy courses")
}

if(loggedInFromGoogle=="true" || loggedInFromEmail=="true"){
    console.log("User logged in")
}

