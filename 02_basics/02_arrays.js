const marvel_heros=["thor","Ironman","spiderman"]

const dc_heros=["flash","superman","Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros)

// const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros)   //Uses spread operator

// const another_array=[1,2,3,[4,5,6],7,[6,7,8,[4,5]]]

// const real_another_array=another_array.flat(1)
// console.log(real_another_array);   //it reduces the depth of array nesting

console.log(Array.isArray("Hitesh"))  //checks array or not
console.log(Array.from("Hitesh"))  //converts into array
console.log(Array.from({name:"Hitesh"}))  //It will give empty array because you haven't clarified of which items you have to make an array

const obj={a:1,b:2,c:3}
console.log(Array.from(Object.keys(obj)));
console.log(Array.from(Object.values(obj)));
console.log(Array.from(Object.entries(obj)));

const score1=100
const score2=200
const score3=300

console.log(Array.of(score1,score2,score3))