//! arrays and array methods
//? basics
// let value

const arrayOne = [
    'scring',
    12,
    [1,2,3],
    {name: 'vardas'}
]

//!another method to create array
const arrayTwo = new Array('string', 12, [1,2,3], {name: 'vardas'}) 

// value = arrayOne[2][1]
// value = arrayOne[3].name

// value = arrayOne.length

// console.log(value)

//? basic Array methods - change original array

//!pop - deletes last element

// value = arrayOne.pop()

// console.log(arrayOne)
// console.log(value)

//!push

// value = arrayOne.push('added string')

// console.log(arrayOne)
// console.log(value)

//!shift - deletes first element

// value = arrayOne.shift()

// console.log(arrayOne)
// console.log(value)

//!unshift - adds element to the start

// value = arrayOne.unshift('added string to the start')

// console.log(arrayOne)
// console.log(value)

//? pass by value - primitive data types

// const number = 15
// let number2 = number

// number2 = 11

// console.log(number, number2)

//? pass by reference - arrays, objects

// const arrA = [5, 10, 15]
// const arrB = arrA

// arrB[0] = 1

// console.log(arrA, arrB)

//? looping Array methods

//!for loop

// for (let index = 0; index < arrayOne.length; index++) {
//     console.log(arrayOne[index])
    
// }

//!for...off loop

// for(let arrayItem of arrayOne){
//     console.log(arrayItem)
// }

//! matrix of arrays

// const arrMatrix = [
//     [1,2,3],
//     [4,5,60],
//     [7,8,9]
// ]

// value = arrMatrix[2][1]

// console.log(value)


//! task 0

// const styles = [
//     'Jazz',
//     'Blues'
// ]

// console.log(styles)

// styles.push('Rock-n-Roll')
// console.log(styles)

// styles[1] = 'Classics'
// console.log(styles)

// const deleted = styles.shift()
// console.log(deleted)

// styles.unshift('Rap','Reggae')

// console.log(styles)

//! task 1

// const numbersArr = [
//     11,
//     -2,
//     34,
//     45,
//     19,
//     -5,
//     6
// ]


// function getMaxSubSum(arr){
//         let sum = 0
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > 0){
//                 sum += arr[i]
//             }
//         }
//         return sum
//     }
// console.log(getMaxSubSum(numbersArr))

//?number methods
//! splice - modifies original array

const spliceArray = [
    'one',
    'two',
    'three'
]

// let value = spliceArray.splice(1,1)
// let value = spliceArray.splice(0, 2, 'New two')

// console.log(spliceArray)
// console.log(value)

//! slice - does not modify original arra, gets
//! a copy of an existing array

// let value = spliceArray.slice(1,3)
// value = spliceArray.slice(-2)
// console.log(spliceArray)
// console.log(value)

//! concat 

// const concatArr = spliceArray.concat(arrayOne, arrayTwo)

// console.log(spliceArray)
// console.log(concatArr)

//! spread operator

// const concaWithSpreadOperator = [...spliceArray, ...arrayOne, ...arrayTwo]
// const arrayCopied = [...spliceArray]
// console.log(concaWithSpreadOperator)
// console.log(arrayCopied)


// console.log(concaWithSpreadOperator.indexOf(12, 0)) //!looks for an item from the front
// console.log(concaWithSpreadOperator.lastIndexOf(12)) //!looks for an item from the end
// console.log(concaWithSpreadOperator.includes(12)) //!looks for an item in the array

//! Callback function

// document.addEventListener('click', myFunction)

// function myFunction(){
// }

// function getName(){
//     const name = prompt('enter name')
//     return name
// }

// function getLastName(){
//     const lastName = prompt('enter last name')
//     return lastName
// }

// function displayName(nameFn){
//     console.log('call me ' + nameFn())
// }

// displayName(getName)
// displayName(getLastName)

//! common array methods

const students = [
  {
    id: 1,
    f_name: "Alex",
    l_name: "B",
    gender: "M",
    married: false,
    age: 17,
    paid: 250,
    courses: ["JavaScript", "React"],
  },
  {
    id: 2,
    f_name: "Ibrahim",
    l_name: "M",
    gender: "M",
    married: true,
    age: 32,
    paid: 150,
    courses: ["JavaScript", "PWA"],
  },
  {
    id: 3,
    f_name: "Rubi",
    l_name: "S",
    gender: "F",
    married: false,
    age: 27,
    paid: 350,
    courses: ["Blogging", "React", "UX"],
  },
  {
    id: 4,
    f_name: "Zack",
    l_name: "F",
    gender: "M",
    married: true,
    age: 36,
    paid: 250,
    courses: ["Git", "React", "Branding"],
  },
];

//! foreach
// array.forEach(function(currentValue, index, arr), thisValue)

// students.forEach(function (student, index, array){
//     console.log(student.f_name, index, array)
// })

//!map
// array.forEach(function(currentValue, index, arr), thisValue)

// const fullName = students.map((student) => {return student.f_name + ' ' + student.l_name + ' ' + student.age})

// console.log(fullName)

//! includes
// array.includes(element, start)

// const includesArr = [
//     'hello',
//     'world',
//     '!!!'
// ]

// console.log(includesArr.includes('hello'))
// console.log(includesArr.includes('Hello'))

//! filter
// array.forEach(function(currentValue, index, arr), thisValue)

// const femaleStudents = students.filter((student) => {return student.gender === 'F'})
// console.log(femaleStudents)

//! reduce
// array.forEach(function(total, currentValue, currentIndex, arr), initialValue)

// const reduceArr = [
//     1,
//     3,
//     9
// ]

// const sum = reduceArr.reduce((sum, value) => {return sum + value},0) 
// console.log(sum)

// const balance = students.reduce((accountBallance, student) => {return accountBallance - student.paid},1500)
// console.log(balance)

//! some 
// array.some(function(value, index, arr),this)

const hasUnderageStudents = students.some((student) => {return student.age < 18})
console.log(hasUnderageStudents)

