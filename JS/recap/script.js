//? variable types

// const name = 'Matt' 
//! not changing variable

// let name = 'Matt' 
//! changing variable

//? data types

// const kazkas = 5


//string > 'hcwdubfkh'
//string > `$(2+2) asdf asdf`
//string > `$(2+2) asdf asdf $(kazkas > 6 ? 'teisingas':'neteisingas'`
// number = 65822
//bool = true

// if(bool){
//     console.log('teisybe')
// }

//! array
// const array = [2, 'yello', true, [1234]]
// console.log(Array[i])
// Array[2] = 'item change'

//! object
const obj = {
    name: 'Matt',
    lastName: 'asdasd',
    age: 20,
    sayHello: () => {
        console.log('Hello')
    },
    sayBye: function() {
        console.log('bye')
    },
    innerObject: {
        name: 'Matthew',
        goingDeeper: {
            name: 'another name'
        }
    }
}

// console.log(obj.name)

// obj.sayHello()
// obj.sayBye()
// console.log(obj)

// obj.lastName = 'Fade'
// obj.hasCat = false
// console.log(obj.name)
// console.log(obj)
// console.log(obj.name, obj.lastName)
// delete obj.name
// console.log(obj.innerObject.name)
// console.log(obj.innerObject.goingDeeper.name)

//? operatoriai

// + - / * > < =

// = // priskirimas
// == // palyginti content
// === // palyhinti content ir type

// || (OR)
// && (AND)
//? ! (neigimas)

// falsy values:  0, '' , null, undefined

//?  !! converts content to bool true

//! conditions

//! if else-if else

// if(){
    
// } else{

// }

//! switch

// switch(14){
//     case 15:
//         console.log('reiksme yra 15')
//         break
//     case 10:
//         console.log('reiksme yra 10')
//         break
//     case 12:
//     case 13:
//         console.log(' 12 arba 13')
//         break
//     default:
//         console.log('default')
//         break
// }

//! ternary (?)

// 5 > 10 ? console.log('teisybe'): console.log('neteisybe')

//! more

// console.log()
// console.dir()
// alert()
// prompt()
// confirm()
// Math. // floor min max round
// number. // parseInt same as a (+) before 
// typeof // says the type of data
// new Date() //getTime, getFullYear, getMonth etc...

//! cycles

// for(let index = 0; index < 10; index++){
//     console.log(index)
// }

// let index = 0
// while(index < 10){
//     console.log(index)
//     index++
// }

// let index = 0
// do{
//     console.log(index)
//     index++
// } while(index > 10)

//! selectors

// const item1 = document.getElementById('#elementID')
// const item2 = document.querySelector('div') // anything
// const item2 = document.querySelector('.div') //class
// const item2 = document.querySelector('#div') //ID
// const item3 = document.querySelectorAll('div')

//! events

// const body = document.querySelector('body')
// body.addEventListener('click', myFunction)
// function myFunction(){}... 

// body.addEventListener('click', () => {
//     console.log('say hello')
// })

// document.querySelector('input').addEventListener('focus', () => {
//     console.log('focus')
// })

// document.querySelector('input').addEventListener('input', (e) => {
//     console.log(e.target.value)
// })

//! functions

// function myFunction(name, age){
//     console.log(name,age)
// }

// myFunction('Matt', 20)

//!------------------------------------------------------------

// const myFunction = function(){
//     console.log('sadasdas')
// }

//!------------------------------------------------------------

// const arrowFunction = (name, age) => {
//     console.log(name, age)
// }
// arrowFunction('asdas', 198)

//!------------------------------------------------------------

// const arrowFunction = (name, age) => console.log(name, age)

// arrowFunction('asdas', 198)

//!------------------------------------------------------------

// const arrowFunction = name => console.log(name)

// arrowFunction('asdasd')

//! intervals

// setInterval(() => {
//     console.log('hello')
// }, 1000);

//! timeout

// setTimeout(() => {
//     console.log('hello')
// }, 1000);

//! document location

// console.log(document.location)
// document.location.assign('https://google.com/')
// document.location.assign('second.html')
// document.location.reload()
// console.log(document.body)
// console.log(document.forms)