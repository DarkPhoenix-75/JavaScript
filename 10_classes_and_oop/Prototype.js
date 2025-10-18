let myName="Sameer      "
// console.log(myName.length);

let myheros=["thor","spiderman"]

let heroPower={
    thor:'hammer',
    spiderman:"sling",

    getSpiderPower: function(){
        // console.log(`Spidy power is ${this.spiderman}`);
        

    }
}
//Passing methods to objects automatically passes it to the Arrays, strings , functions..
Object.prototype.Sameer=function(){
    // console.log(`Sameer is present is all objects`);
    
}
// heroPower.Sameer()

myheros.Sameer()


//But not vice-versa
Array.prototype.heySameer=function(){
    // console.log(`Sameer says hello `);
    
}

// myheros.heySameer()
// heroPower.heySameer()


const User={
    name:"chai",
    email:"chai@gmail.com"
}
const Teacher={
    makVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

// Teacher.__proto__=User

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="ChaiaurCODE      "

String.prototype.trueLength=function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True Length is ${this.trim().length}`);
    
      
}

console.log(anotherUsername.trueLength())
"Sameer          ".trueLength()
"iceTEA    ".trueLength()
