const promise1 = new Promise(function (resolve, reject) {
    //Do an async task
    //DB Calls, cryptography, neetrwok
    setTimeout(function () {
        console.log('Async task is complete..');
        resolve()

    }, 1000)
});

promise1.then(function () {
    console.log('Promise Consumed');

})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");

})

const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ usename: "Chai", email: "chai@example" })

    }, 1000)
})
promise3.then(function (user) {
    console.log(user);

})

const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Sameer", password: "123" })
        }
        else {
            reject('Error: Something Went Wrong')
        }

    }, 1000)


})

promise4
    .then((user) => {
        console.log(user);
        return user.username;

    }).then((username) => {       //Chaining concept
        console.log(username);
    }).catch(function (error) {
        console.log(error);

    }).finally(() => {
        console.log("Promise is either resloved or rejected")
    })      //it is default statement


const promise5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "JS", password: "123" })
        }
        else {
            reject('Error: Js Went Wrong')
        }

    }, 1000)

})

//Usig async await
async function consumePromise5() {
    try {
        const response = await promise5
        console.log(response);
    } catch (error) {
        console.log(error);
    }

}
consumePromise5()

// async function getAllUsers(){
//     try {
//         const response=await fetch('https:/jsonplaceholder.typicode.com/users')
//         const data=await response.json()  
//         //this conversion also take time so it should also be await
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);

//     }

// }


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);

})
.catch((error) => console.log(error))

//Error codes like 404 is not a reject, it is a response....

