// let mylesiu = new Promise((resolve, reject) => {
// setTimeout(() => {
//     resolve()
// }, 1000);
// })

// mylesiu
// .then(() => console.log('susitaikom'))
// .catch(() => console.log('radau kita'))

// let fetch = new Promise((resolve, reject) => {
//     console.log('eik i URL')
//     console.log('siusk ta JSON')
//     if (file.ok) {
//         resolve(file)
//     } else {
//         reject(error)
//     }
// })


// fetch('https://randomuser.me/api/')
// .then(function(file){return file.json()})
// .then(function(pasiemuFileIsVirsaus){
//     console.log(pasiemuFileIsVirsaus.results[0])
// })

// fetch('https://randomuser.me/api/')
// .then(response => response.json())
// .then(data => console.log(data))

//! Sync/Async

//1. duomenys - memory heap
//2. veiksmai(functions) - call stack

//? memory heap
// debugger
// const age = 700
// const city = 'Vilnius'

// function logIt(number){
//     logItMore(number)
// }

// function logItMore(number){
//     console.log(number)
// }

// logIt(1)
// logIt(2)
// logIt(3)

//? stack overflow

// function stackOverflow(){
//     stackOverflow()
// }

// stackOverflow()

//? async example with web API
// console.log(1)
// setTimeout(() => {
//     console.log(2)
// }, 0);

// console.log(3)


//! ES6 promises

// const promise = new Promise((resolve, reject) => {
//     if (true) {
//         setTimeout((resolve) => console.log('furfilled'), 2000);
//     } else {
//         reject('unfurfilled')
//     }
// })
// console.log(promise)

//? .then consuming promises

// promise.then((rezult) => {
//     console.log(rezult)
// })

//? .then chaining

// promise
// .then((res) => res + 'all good')
// .then((res2) => console.log(res2))

// //? reject scenario

// promise.then((rezult2) => {
//     console.log(rezult2)
// })
// .catch((error => {
//     console.log(error)
// }))

// const promise2 = new Promise(() => [
//     setTimeout(() => {
//         console.log('start')
//     }, 500)
// ])
// const promise3 = new Promise(() => [
//     setTimeout(() => {
//         console.log('second promise furfilled')
//     }, 1000)
// ])
// const promise4 = new Promise(() => [
//     setTimeout(() => {
//         console.log('third promise furfilled')
//     }, 1500)
// ])

// Promise.all([promise2, promise3, promise4]).then((data) => {
//     console.log(data)
// })

//! difference with and without promise

//?without promise

// console.log(1)
// const waitFor = () => {
//     for (let index = 0; index < 10000000000; index++) {
//         5*559/12 
//     }
//     return 'damn that was long'
// }

// console.log(2)
// console.log(waitFor())
// console.log(3)

//? with promsie

// console.log(1)

// const promsieTime = new Promise((resolve) => {
//     for (let index = 0; index < 10000000000; index++) {
//         (15*559)/12
//     }
//     resolve('uff that was sooo long to wait')
// })

// const result = promsieTime.then((response) = console.log(response))

// console.log(3)

//! promises with async/await

//?rewrite 

// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((e) => console.log("Error got in fetching post: " + e))
//   .finally(() => console.log("Fetching finished"));

// const asyncFunction = async () => {
//     const response = fetch(apiUrl)
//     const data = await response.json()
//     console.log(data)
// }

// asyncFunction()

// const promise2 = new Promise((resolve) => {
//   setTimeout(resolve, 500, "start");
// });

// const promise3 = new Promise((resolve) => {
//   setTimeout(resolve, 1500, "second promise fulfilled");
// });

// const promise4 = new Promise((resolve) => {
//   setTimeout(resolve, 300, "last promise fulfilled");
// });



// Promise.all([promise2, promise3, promise4]).then((data) => console.log(data));

// async function waitForAll() {
//     const data = await Promise.all((promise2, promise3, promise4))
//     console.log(data)
// }

// waitForAll()

//? errors with async/await

// const catchError = async () => {
//   try {
//     const resultPromiseTwo = await promise2;
//     console.log(resultPromiseTwo);
//   } catch (e) {
//     console.log("Error caught: " + e);
//   } finally {
//     console.log('finished working with promise')
//   }
// };

// catchError();


//! tasks

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const randomNum = Math.floor(Math.random()*5)

//         if (randomNum === 0) {
//             reject()
//         } else {
//             resolve()
//         }
        // switch(randomNum){
        //     case 0: console.log('works')
        //             break
        //     case 1: console.log('works')
        //             break
        //     case 2: console.log('works')
        //             break
        //     case 3: console.log('works')
        //             break
        //     case 4: console.log('doesnt work')
        //     default: console.log('somethin went wrong')
        // }
//         console.log(randomNum)
//     }, 5000)})


// promise
//   .then(() => "This is message")
//   .then((message) => alert(message))
//   .catch(() => alert("Oops, pažadas buvo atmestas"))