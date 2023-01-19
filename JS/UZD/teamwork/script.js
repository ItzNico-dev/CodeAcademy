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
//         switch(randomNum){
//             case 0: console.log('works')
//                     break
//             case 1: console.log('works')
//                     break
//             case 2: console.log('works')
//                     break
//             case 3: console.log('works')
//                     break
//             case 4: console.log('doesnt work')
//         }
//         console.log(randomNum)
//     }, 5000)})


// promise
//   .then(() => "This is message")
//   .then((message) => alert(message))
//   .catch(() => alert("Oops, pažadas buvo atmestas"))


// Checkifpartyguestslistincludesyourname(onlyname)andyourstatusisVIP.
// Thencheckifthatlistincludesotherrandomperson,e.g.yourmom/father/brother/
// sisterandstatusisVIP:

// const url = 'https://test-api-faker.herokuapp.com/cafe04/party'
// fetch(url).then((response) => 
//     response.json()
// )
// .then((data) => {
//     data.forEach((user) => {
//         // if (user.name === 'Kęstutis' && user.vip === true) {
//         //     console.log(user)
//         // }
//         const surname = user.name.split(' ').slice(0)
//         console.log(surname)

//     });
// })


// data.forEach((user) => {

//       const userListItem = document.createElement("li");

//       userListItem.textContent = user.login;

//       list.append(userListItem);

//       body.append(list);


// Checkweddingguestslistand count how many have selected 
// plus one option: 

const url = 'https://test-api-faker.herokuapp.com/cafe04/wedding'

// fetch(url)
// .then((response) => 
//     response.json()
// )
// .then((data) => (
//     data.forEach((user) => {
//         if (user.plusOne === true) {
//             console.log(user.length)
//         }
//     })
// ))

// fetch(url)
// .then((response) => 
//     response.json()
// )
// .then((data) => (
//     data.forEach((user) => {
//         if (user.attending === true) {
//             console.log(user.length)
//         }
//     })
// ))

//! ats


// async function countPlusOne(){
//     const res = await fetch('https://test-api-faker.herokuapp.com/cafe04/wedding')
//     const data = await res.json()
//     const count = data.filter( element => element.plusOne)
//     console.log(count.length)
// }
// countPlusOne()


// Check list of guests and calculate total amount of guests at 
// the wedding: If ‘attending’ marked, count as 1, if ‘attending’ 
// and ‘plusOne’ marked, counts as 2, but if ‘plusOne’ is marked 
// and ‘attending’ is false, count as 0.

// fetch(url)
// .then((response) => 
//     response.json()
// )
// .then((data) => (
//     data.forEach((user) => {
//         let sum
//         if (user.attending === !true) {
//             if (user.plusOne === true) {
//                 sum+=2
//             }
//             return sum++
//         }
//         console.log(sum, user)
//     })
// ))

//! ats

// async function countAttending(){
//     const res = await fetch('https://test-api-faker.herokuapp.com/cafe04/wedding')
//     const data = await res.json()


//     const count = data.filter( element => element.attending)
//     console.log(count.length)
// }
// countAttending()

//! merged above two


// async function countAttendingOrPlusOne(param){
//     const res = await fetch('https://test-api-faker.herokuapp.com/cafe04/wedding')
//     const data = await res.json()


//     const count = data.filter( element => element[param])
//     console.log(count.length)
// }
// countAttendingOrPlusOne('attending')
// countAttendingOrPlusOne('plusOne')

// //! ats to the complex counting

// async function countTotal(){
//     const res = await fetch('https://test-api-faker.herokuapp.com/cafe04/wedding')
//     const data = await res.json()

//     let sum = 0

//     data.forEach(element => {
//         if (element.attending) {
//             if (element.plusOne) {
//                 sum+=2
//             }else{
//                 sum++
//             }
//         }
//     })
//     console.log(sum)
// }

// countTotal()



// Add HTML to have input, where you can enter your or other 
// name, and button, with title ‘Check’. After clicking button, 
// output info to the page: 
// a) <name> is/is not in the /party 
// list; 
// b) <name> is/is not a VIP guest; 
// c) Amountof attendees 
// who selected plus one option: <amount>;
// d) Amountof total attendees: <amount>;


const myBody = document.querySelector('body')

const nameInput = document.querySelector('input')
document.querySelector('button').addEventListener('click', checkHandler)

async function checkHandler(){
    const name = nameInput.value
    const resParty = await fetch('https://test-api-faker.herokuapp.com/cafe04/party')
    const partyData = await resParty.json()

    const person = partyData.find((person) => {
        person.name.split(' ')[0] === name
    })
    const inPartyP = document.createElement('p')


    const partyPTextContent = `${person.name.split(' ')[0]} ${person.vip ? 'is vip':'isnt vip'}`
    inPartyP.textContent = partyPTextContent



    inPartyP.textContent = person.name.split(' ')[0]
    myBody.appent(inPartyP)



}      


checkHandler()
