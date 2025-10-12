// const useremail="hitesh@12"  //gives always true
const useremail=""     //gives always false

if(useremail){
    console.log("Got user mail");    
}
else{
    console.log("Don't have user email");  
}

/*falsy value
false, 0, -0, BigInt 0n, "", null, undefined, NaN
*/


/*
Remaining all values are truthy values
"0", "false", " ", [], {}, function(){}
*/


if(useremail.length===0){
    console.log("Array is empty");
}

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
    
}

//Nullish Coalescing Operator(??): null undefined

let val1;
// val1=5 ?? 10
// val1= null ?? 10
val1= undefined ?? 15

console.log(val1);


//Ternary Operator
//condition ? true : false

const teaPrice=100
teaPrice<=80 ? console.log("less than 80") : console.log("more than 80");
