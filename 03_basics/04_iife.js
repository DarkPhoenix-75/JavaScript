//Immediately Invoked Function Expressions(IIFE)

// 1.Named IIFE

(function chai(){
    console.log(`DB CONNECTED`)
})();   //Semi-colon important
// chai()

//To escape from global scope variables conflicts(pollution)

// 2. Normal IIFE
( ()=>{
    console.log(`DB CONNECTED TWO`);
    
})()

//Passing a variable
// ( (name)=>{
//     console.log(`DB CONNECTED TWO , ${name}`);
    
// })('Sameer')