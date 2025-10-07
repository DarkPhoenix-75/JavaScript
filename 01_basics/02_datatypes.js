"use strict";  //treat all JS code as newer version

// alert(3+3)  //in browser not in node

let Name="hitesh"
let age=18
let isLoggedIn= false


//Primitive data types
//number  => 2^53
//string
//bigint
//boolean =>true/false
//Null  => standalone value
//undefined  => value not assigned
//symbol


//user defined 
//object
//arrays

// console.log(typeof Name)
// console.log(typeof null)

const id=Symbol('123')
const anotherid=Symbol('123')

console.log(id)
console.log(anotherid)
console.log(id===anotherid) //Looks identical but are not equal


const bigNumber=335464498490545n //bigint

const heroes=["shaktiman","naagraj","doga"];

let myobj={
    name: "Sameer",
    age:"20"
}

const Myfunc=function () {
    console.log("Hello World");
}

console.log(typeof Myfunc);   //gives function

console.log(typeof heroes);   //gives object

console.log(typeof heroes);   //gives object

//Stack(Primitive)  and //Heap(Non-primitive)

/*JS stores primitve datatypes in Stack and they are immutable and stored as value.
That means each variable gets its own copy of the value.
Changing the copy doesn't chagne the original

Meanwhile Js stoes non-primitive datatypes in Heap. These are stored by reference in the heap.
That means both obj1 and obj2 point to the same memory location in the heap.
Changing one affects the other.

*/