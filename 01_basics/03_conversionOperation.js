// let score=33
// let score="33abc"  Gives NaN
// let score= null    Gives 0
// let score=undefined Gives NaN
let score =true

// console.log(typeof score)
// console.log(typeof (score))

let valueInNumber=Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber) 

// let isLoggedIn=""  //gives false
let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

let someNumber=33
let stringsomenumber=String(someNumber)
// console.log(stringsomenumber)
// console.log(typeof stringsomenumber)

//   ********* Operations *********

let value=3
let negVal=-value
console.log(negVal)

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);  //true gets converted into 1