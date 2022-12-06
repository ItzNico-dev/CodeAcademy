//! type conversions

//to number
// const age = prompt("enter age");
// console.log(typeof age)

// const ageAsNumber = Number(age);
// console.log(typeof ageAsNumber);

console.log(Number("a"));
console.log(parseFloat('2.22'));
console.log(parseFloat('2.22asdaafsadsadasdasad'));
console.log(parseFloat('asdsadadasdasd2.22'));
console.log(parseInt('2.22'));
console.log(parseInt(true));

// const age = prompt("enter age");
// const age = +prompt("enter age");


//  const ageAsNumber = +age; 
// console.log(typeof ageAsNumber);
 
//to string
const temperature = 5;
console.log(typeof temperature);
console.log(typeof String(temperature));
console.log(typeof temperature.toString());

//numbers and strings from booleans
console.log(typeof String(true));
console.log(typeof Number(false));

console.log("3" + 4);
console.log("3" - 4);
console.log("3" - true);
console.log("3" - true);

console.log("faded " + "away")
const lastname = "faded";
console.log('faded ${lastname}');

//! operators

//asignment operators
const a = 5;

let b = 2;
b += 5;
//same as b = b + 5

console.log(b);

b -= 2;
b *= 2;
b /= 2;

//! comparison operators

// Equal (==)
//Not Equal (!=)
//Strict equal (===)
// console.log(1 == "1");
// console.log(1 === "1");
// console.log(1 !== "1");
// console.log(1 > 2);
// console.log(1 >= "1");
// console.log("C" > "A");

//! comparison incrament decrament

let number = 1;
let number2 = 1;
number++
console.log(number);

number2--
console.log(number2);

//! logical operators

console.log(true && true);
console.log(true && true && false);
console.log(true || false);
console.log(false || false);
console.log(!true)
console.log(!!true) //negates twice into true


//! if statements

// const z = prompt("enter a number");
// if (z >= 0) {
//     console.log("yes");
// } else {
//     console.log("no");
// }

// const z = prompt("enter a number");
// if (z >= 0) {
//     console.log("yes");
// } else if ( z == 1) {
//     console.log("?");
// } else {
//     console.log("no");

// }