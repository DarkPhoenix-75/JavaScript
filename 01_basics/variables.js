const accountId=144553
let accountEmail="hitesh@google.com"
var accountPassword="12345"
accountCity="Jaipur" //Not safe but can declare variable also
let accountState;

accountEmail="sb@sb.com"
accountPassword="2123321"
accountCity="Bengaluru"

console.log(accountId) //Can't be changed


/*Prefer not to use var 
because of issue in block scope and functional scope  */
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);