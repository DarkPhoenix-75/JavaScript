// const name="Sameer"
let name="Sameer"
const repoCount=50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //string interpolation 

const gameName= new String('hitesh-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));

const newString=gameName.substring(0,4)
// console.log(newString);  //doesn't take negative

const anotherString=gameName.slice(-8,4)
// console.log(anotherString);

const greeting="    Hello World    "
console.log(greeting)
console.log(greeting.trim());

const url ="https://sameer.com/sameer%20bhardwaj"

console.log(url.replace('%20','-'))


const game="i-@m-s@m"
console.log(game.split('-'));