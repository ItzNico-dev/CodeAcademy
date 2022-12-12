//! task 1

// function randomName() {
//     alert('Matt')
// }
// randomName();

//! task 2

// function randomNumber() {
//    const number = Math.floor(Math.random() * 5) +1
//     console.log(number)
// }
// randomNumber();

//! task 3

// function letterSum(name = prompt('your name'), surname = prompt('your surname')) {
//     console.log(name.length + surname.length)
// }
// letterSum();

//! task 4 ?

// function alphabet() {
//     const letters = ["a", "b", "c", "d", "e", "f"];
//     let letter = letters
//     console.log(letter[5])
// }
// alphabet()
//! task 5

// function mathematics() {
//     let number1 = prompt("first number")
//     let number2 = prompt("second number")
//     operator = prompt('operator')

//     if (operator === 'sum') {
//         let suma = parseFloat(number1) + parseFloat(number2)
//         console.log(suma)
//     } else if (operator === 'sub') {
//         let suma = number1 - number2
//         console.log(suma)
//     } else if (operator === 'div') {
//         let suma = number1 / number2
//         console.log(suma)
//     } else if (operator === 'multi') {
//         let suma = number1 * number2
//         console.log(suma)
//     }
    
// }

// mathematics();


//! task 6

function generateRandomNumber() {
    return  Math.floor(Math.random() * 10 + 1);
  }
  
  function squareNumber(number) {
    let sqrtNumber = Math.pow(number, 2)
      console.log(sqrtNumber);
  }
  
  squareNumber(generateRandomNumber());