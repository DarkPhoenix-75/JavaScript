//arrays

let myArr=[0,1,2,3,4,5]  //resizable

let myHeroes =["shaktiman","naagraj","doga"];

const myArr2=new Array(1,2,3,4)

// console.log(myArr)
// console.log(myHeroes)
// console.log(myArr2)

// Array methods
// myArr.push(6);
// myArr.pop()
// myArr.unshift("Hi")
// myArr.shift()

// console.log(myArr.includes(9))  //returns true and false
// console.log(myArr.indexOf(9))   //returns the index of the value given

// const newArr = myArr.join();
// console.log(newArr)  //returns string
// console.log(myArr)

//slice , splice
const myN1=myArr.slice(1,3)  //slice doesn't change the original array
console.log("A",myArr)
console.log(myN1);
console.log("B",myArr);

const myN2=myArr.splice(1,3)   //splice changes the original array
console.log(myN2)
console.log("C",myArr);

const myN3=myArr.splice(1,3,99);