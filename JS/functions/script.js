//!function

// //?function declaration
// function showMessage() {
//     console.log('hello world')
// }

// showMessage()

//? function mith inner variables

// function showMessage() {
//     const myName = 'Matt'
//     console.log(` my name is ${myName}`)
// }

//?function with outer (global) variables

// const myName = 'Matt'

// function showMessage() {
//     console.log(`my name is ${myName}`);
// }
// showMessage();

//? function with parameters

// const myName = 'Matt'

// function showMessage(myFirstName = 'Matt', lastName = 'V') {
//     console.log(`my name is ${myFirstName} ${lastName}`)
// }
// showMessage(undefined, 'Vens')

//? function return statement

// function sum(a, b) {
//     return a + b
// }

// const suma = sum(2, 3)
//  console.log(suma)

//? function udage example

//  function checkAge(age) {
//     if (age >= 18) {
  
//       return true;
  
//     } else {
  
//       return confirm('Do you have permission from your parents?');
  
//     }
//   }
  

//   let age = prompt('How old are you?', 18);
  
//   if ( checkAge(age) ) {
  
//     alert( 'Access granted' );
//   } else {
  
//     alert( 'Access denied' );
//   }


//? function with ternary operator
// function checkAge(age) {
//     return age >= 18
//         ? true : prompt('Age must be over 18')
    
//? function with ||(OR) operator
    //  return age >= 18 || confirm('Age must over 18')
    
     
//? function expression
     
    //  const printMyName = function () {
    //      const myName = 'Matt'
    //      console.log(`my name is ${myName}`)
    //  }
    //  printMyName();

    //  //? arrow function

    //  function sum(a, b) {
    //      return a + b;
    //  }
    //  console.log(sum(2,3))

    //  //? function expression - arrow function
    //  const sum2 = (a) => a + b

    //  sum2(2)

// }

// let cities = ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys", ”Telšiai"];

// function getFavoriteCity(name, surname, city) {
//   let user = `${name} ${surname}`;
//   let favoriteCity = city;
  
//   return `${user} favorite city is ${favoriteCity}`;
// }

// getFavoriteCity(”Marijus", ”Romanovas", cities[5]);


//!task 1

// function printHometown() {
//     const city = prompt('home city')
//     return console.log(city);
// }
// printHometown();

// const printHometown = () => console.log(prompt('home city'))
// printHometown();

//! task 2

// function min(a, b) {
//     if (a < b) {
//         return a;
//     }
//     return b;
// }
// console.log(min(1 , 5))

// const min2 = (a, b) => {
//     if (a < b) {
//         return a;
//     }
//     return b
// }
// console.log(min2(5,10))