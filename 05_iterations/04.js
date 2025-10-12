//for-in for objects

const myObject={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);    
}

const programming =["js","cpp","py","java"]

for (const key in programming) {
    console.log(programming[key]);    //gives key(index) rather than values as compared to for-of
      
}

//Map not possible through for-in