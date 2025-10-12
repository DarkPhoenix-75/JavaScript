// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const prompt = require("prompt-sync")();

const month =Number(prompt("Enter the month "));
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Invalid input");
        break;
}

