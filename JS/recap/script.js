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

// const mainTag = document.querySelector('main')

// const cityList = document.createElement('ul')

// const cityListItem1 = document.createElement('li')
// cityListItem1.textContent = 'kaunas'

// const cityListItem2 = document.createElement('li')
// cityListItem2.textContent = 'vilnius'

// const cityListItem3 = document.createElement('li')
// cityListItem3.textContent = 'klaipeda'

// cityList.append(cityListItem1, cityListItem2, cityListItem3)

// const cityInput = document.createElement('input')
// cityInput.type = 'text'
// cityInput.addEventListener('keypress', (e) => {
//     if(e.key === 'Enter'){
//         // pasiimti is input miesta
//         const inputValue = e.target.value
//         if(checkIfCityAlreadyExsists(inputValue)){
//             const cityAlreadyExistsWarning = document.createElement('p')
//             cityAlreadyExistsWarning.textContent = 'wrong'
//             mainTag.append(cityAlreadyExistsWarning)
//         } else{
//             const newCityElement = document.createElement('li')
//             newCityElement.textContent = inputValue
//             cityList.append(newCityElement)
//         }
//     }
//         //sukurti li elementa
//         const newCityLiElement = document.createElement('li')
//         //duoti list elementui text value
//         newCityLiElement.textContent = inputValue
//         //prideti nauja list element prie esancio ul
//         cityList.append(newCityLiElement)
//         //isvalyti langa
//         e.target.value = ' '
//     }
// )

// function checkIfCityAlreadyExsists(inputValue){
//     //pasiimti visus jau ivestus miestus
//     const allCities = document.querySelectorAll('li')
//     //palyginti nauja meista su ivestais miestais
//     for (let i = 0; i < allCities.length; i++){
//         if(inputValue === allCities[i].textContent){
//             return true
//         }
//     }
//     return false;
//     //jei miestas jau egzistuoja sukuriame paragraph kuriame parasyta, kad miestas 
//     // jau egzistuoja, o jei nera, tiesiog pridedame
// }
// mainTag.append(cityList, cityInput)

// const mainTag = document.querySelector('main');

// const cityList = document.createElement('ul');

// const cityListItem1 = document.createElement('li');
// cityListItem1.textContent = 'Vilnius';
// const cityListItem2 = document.createElement('li');
// cityListItem2.textContent = 'Kaunas';
// const cityListItem3 = document.createElement('li');
// cityListItem3.textContent = 'Klaipeda';

// cityList.append(cityListItem1, cityListItem2, cityListItem3);

// const cityInput = document.createElement('input');
// cityInput.type = 'text';
// cityInput.addEventListener('keypress', (e) => {
//   // const warningText = document.querySelector('p');
//   // if (warningText) {
//   //   warningText.remove();
//   // }

//   if (e.key === 'Enter') {
//     const inputValue = e.target.value;
//     if (checkIfCityAlreadyExists(inputValue)) {
//       if (!document.querySelector('p')) {
//         const cityAlreadyExistsWarning = document.createElement('p');
//         cityAlreadyExistsWarning.textContent = 'City already exists';
//         mainTag.append(cityAlreadyExistsWarning);
//         setTimeout(() => {
//           cityAlreadyExistsWarning.remove();
//         }, 3000);
//       }
//     } else {
//       const newCityLiElement = document.createElement('li');
//       newCityLiElement.textContent = inputValue;
//       cityList.append(newCityLiElement);
//     }

//     e.target.value = '';
//   }
// });

// function checkIfCityAlreadyExists(inputValue) {
//   const allCities = document.querySelectorAll('li');
//   for (let i = 0; i < allCities.length; i++) {
//     if (inputValue.toLowerCase() === allCities[i].textContent.toLowerCase()) {
//       return true;
//     }
//   }
//   return false;
// }

// mainTag.append(cityList, cityInput);


//! functions

//? function declaration
// function sayHello(){
//   console.log('hello world')
// }

//? call function 
// sayHello()

//?function expression (arrow function)

const sayHelloArrow = () => {
  console.log('hello world arrow function')
}

//?task 1 


// function myName(){
//   console.log('name surname')
// }
// myName()

// const myNameArrow = () => (
//   console.log('name surname arrow')
// )
// myNameArrow()

//? passing parameters

// function getMyName(fName, lName){
//   return `you can call me ${fName} ${lName}`
// }

// const fName = 'Matas'
// const myNameString = getMyName(fName, 'V')
// console.log(myNameString)

//arrow

// const getMyNameArrow = (fName, lName) => 
//   `you can call me ${fName} ${lName}`

// console.log(getMyNameArrow('M', 'V'))

// function figureVolume(width, height, length){
//   let result = width * height * length
//   return `the volume is ${result}`
// }
// console.log(figureVolume(4,4,4))

// const figureVolumeArrow = (width1, height1, length1) => width1 * height1 * length1
// const height1 = 5
// length1 = 5
// width1 = 5
// console.log(figureVolumeArrow(height1, width1, length1))

// const temperatureInCelcius = 33

// function convertToF(){
//   return temperatureInCelcius * 1.8 +32
// }

// console.log(convertToF())

// const convertToFArrow = () => temperatureInCelcius * 1.8 +32
// console.log(convertToFArrow())

// function printMyNameWithDefault ( fname1 = 'name', lname1 = 'surname'){
//   return `you can call me ${fname1} ${lname1}`
// }
// console.log(printMyNameWithDefault(undefined, 'asdsad'))
// console.log(printMyNameWithDefault('dsad', 'saddd'))

// const printMyNameWithDefaultArrow = (firstName = "Marijus", lastName) =>
//   `You can call me ${firstName} ${lastName}`

// console.log(printMyNameWithDefaultArrow(undefined, "Romanovas"))

//? IIFE

// *(function () {
//   console.log('mornin')
// })();

// (() => console.log('mornin with arrow'))()

//! tasks

//todo task 1

// function sum(a,b){
//   return a + b
// }
// console.log(sum(5 , 5))

// const sumArrow = (a , b) => a + b
// console.log(sumArrow(5, 7))

//todo 2: Write setTimeout with function to log hello after 5s;

  // setTimeout(() => 
  //   console.log('hello world')
  // , 5000);

//todo 3: Write setInterval with function to count times the 2s elapsed;
// let number = 0
// setInterval( times, 1000);
// function times(){
//   console.log(++number)
// }

//todo 4: Write a function that returns true if a string is empty and false otherwise;

// function emptyString (string){
//   if(string === ""){
//     return true
//   } else {
//     return false
//   }
// }
// console.log(emptyString())

