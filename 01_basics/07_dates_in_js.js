//Dates

let myDate = new Date();      //myDate is an object
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());   //gives date and day in string
// console.log(myDate.toISOString());  
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());   //gives date and time in structured form
// console.log(myDate.toLocaleDateString());  //gives only date in structured form
// console.log(myDate.toLocaleTimeString());   //gives only time in structured form
// console.log(myDate.toTimeString());   //same as above but it gives only time
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());

// let myCreatedDate = new Date(2005,4,7)
// let myCreatedDate = new Date(2005,4,7,12,35,10)
let myCreatedDate = new Date("01-15-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate.getMonth())
// console.log(newDate.getDay())
// console.log(newDate.getDate())


// console.log(
//     newDate.toLocaleString('default', {
//         weekday: "long",
//         timeZone: "Asia/Kolkata",
//         dateStyle: "full",
//         timeStyle: "long"
//     })
// );
