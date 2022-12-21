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


//! DOM manipulation //text manipulation


//!creates element
// const par = document.createElement('p')
// par.textContent = 'my created paragraph'
// console.log(par)


//! creates and adds to html
// const div = document.querySelector('div')
// div.append(par)
// console.log(div)

// par.remove() //! removes the element


// par.id = 'manoID2'
// par.setAttribute('id', 'manoID')

// par.getAttribute('manoID')

//! pridejimas i elemento gala
// const mainTag = document.querySelector('main')
// const h2Tag = document.createElement('h2')
// h2Tag.textContent = 'some kind of text'

// const pTag1 = document.createElement('p')
// pTag1.textContent = 'sahjdfbasyhudgvasuy'

// const ulTag = document.createElement('ul')
// const liTag = document.createElement('li')
// liTag.textContent = 'ndsfcytucxnsajb'

// const pTag2 = document.createElement('p')
// pTag2.textContent = 'sahjdfbasyhudgvasuy'


// ulTag.append(liTag)
// mainTag.append(h2Tag, pTag1, ulTag, pTag2)

//!prideda i prieki
// const h1Tag = document.createElement('h1')
// h1Tag.textContent = 'dnmasuiduiagd'
// mainTag.prepend(h1Tag)

//!kitas pridejimo metodas // priema tik viena elementa
const h1Tag2 = document.createElement('h1')
// h1Tag2.textContent = 'dnmasuiduiagd'

// mainTag.appendChild(h1Tag2)

//! taip pat append gali prideti paprasta string

const mainTag = document.querySelector('main')

const cityList = document.createElement('ul')

const cityListItem1 = document.createElement('li')
cityListItem1.textContent = 'kaunas'

const cityListItem2 = document.createElement('li')
cityListItem2.textContent = 'vilnius'

const cityListItem3 = document.createElement('li')
cityListItem3.textContent = 'klaipeda'

cityList.append(cityListItem1, cityListItem2, cityListItem3)

const cityInput = document.createElement('input')
cityInput.type = 'text'
cityInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        // pasiimti is input miesta
        const inputValue = e.target.value
        //sukurti li elementa
        const newCityElement = document.createElement('li')
        //duoti list elementui text value
        newCityElement.textContent = inputValue
        //prideti nauja list element prie esancio ul
        cityList.append(newCityElement)

        //pasiimti visus jau ivestus miestus
        //palyginti nauja meista su ivestais miestais
        //jei miestas jau egzistuoja sukuriame paragraph kuriame parasyta, kad miestas 
        // jau egzistuoja, o jei nera, tiesiog pridedame

        //isvalyti langa
        e.target.value = ' '
    }
})
mainTag.append(cityList, cityInput)

