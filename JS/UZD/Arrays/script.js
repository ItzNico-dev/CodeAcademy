//! class task

//  const randomArr = [
//     11,
//     'cat',
//     true,
//     4,
//     'mouse',
//     5,
//     9,
//     5,
//     76,
//     false
//  ]
//  function getArrayByData(array, dataType){
//     let result = []
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === dataType) {
//             result.push(array[i])
//         }
        
//     }
//     return result
//  }

//  console.log(getArrayByData(randomArr, 'boolean'))

//! task 1 & 2

// function alertName(name){
//     alert(name)
// }

// function consoleName(name){
//     console.log(name)
// }

// function coreFUnction(name, callback){
//     const capitaliseFirstLetter = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
//     callback(capitaliseFirstLetter)
// }
// coreFUnction('peTras', consoleName )

// const cars = ["BMW", "VW", "Audi"]

// cars.forEach((e, i) => {return console.log(i + " " + e)})

//! task 3

// const names = [
//     'peTras',
//     'Jonas',
//     'nerKa'
// ]

// const newNames = names.map((name) => {return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()})
// console.log(newNames)

//! task 4

// const ages = [1, 20, 5, 10, 22, 50, 40, 39]

// const overEighteen = ages.filter((name) => { return name >= 18})
// console.log(overEighteen)

//! task 5 6 7 in one with adjustments

// const cities = ["Vilnius", "Kaunas", "Klaipeda"]

// const findCity = cities.find((city) => {
//     return city.charAt(0) === 'K'})
// console.log(findCity)
// const firstLetterLowerCase = cities.some((city) => {
//     return city.charAt(0) === city.charAt(0).toLowerCase()})
// console.log(firstLetterLowerCase)
// const everyFirstLetterUpperCase = cities.every((x) => {
//     return x.charAt(0) === x.charAt(0).toUpperCase()})
// console.log(everyFirstLetterUpperCase)

//! tuesday's lecture
//!page 1 task 1

// const friends = ["Jonas", "Paulius", "Antanas"]

// console.log(friends.sort())
//!page 1 task 2
// console.log(friends.sort((a,b) => {return a - b}))
//! page 1 task 3

// const numbers = [5, 10, 20, 11, 12, 1, 0, 14, 25]

// console.log(numbers.sort((a, b) => {return b - a}))

//!page 1 task 4

// const numbers = [10, 5, 20, 4]
// numbers.sort((a, b) => { return b - a})
// console.log(numbers[0])

//! page 2 task 1
// const favNumbs = [3, 9, 13, 25, 31]
// console.log(favNumbs.reduce((num1, num2) => { return num1 + num2 }))

//! page 2 task 2

// const cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"]
// console.log(cars.reduce((a,v) => v.length === 3 ? a + 1: a,0 ))

//! page 2 task 3

// const numbers = [5, 10, 20, 4, 11, 13]
// console.log(numbers.reduce((a,v) => {return a > v ? a : v }))

// const people = [
//   {
//     name: "Petras",
//     age: "18"
//   },
//   {
//     name: "Jonas",
//     age: 15
//   },
//   {
//     name: "Antanas",
//     age: 20
//   },
//   {
//     name: "Urtė",
//     age: 10
//   },
//   {
//     name: "Diana",
//     age: 25
//   },
//   {
//     name: "Ieva",
//     age: 16
//   }
// ];

// const Adults = people.filter((x) => { return x.age >= 18}).map(person => person.name).sort()
// console.log(Adults)




