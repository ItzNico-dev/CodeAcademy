console.log("hello world!");

//! variable types

// global variables
firstvar = 666;
console.log(firstvar);

// var variables
var secondvar = 777;
console.log(secondvar);

// variables that can be overwritten - "block scoped"
let thirdvar = 888;
console.log(thirdvar);

// variables that are constant.
const fourthvar = 999;
console.log(fourthvar);

// block
{
    let lname = "Away";
    console.log(lname);
    {
        console.log(lname);
    }

}
// uz bloko nebemato
// console.log(fname);


//string
const workplace = 'codeacademy';
console.log(workplace);
const group = "CAFE04";
console.log(group);
const totalname = `Total name is : ${workplace} ${group}`;
console.log(totalname);

//number
const year = 2022;
const temperature = 3.77;
console.log(year);
console.log(temperature);

const istrue = true;
console.log(istrue);

//array
const colors = ["red", 15, true];
console.log(colors);
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

//object
const car = {
    color: "blue",
    model: "Audi",
    year: 2022,
    isitdriven: true

}
console.log(car);
console.log(car.color);
console.log(car.model);
console.log(car.year);
console.log(car.isitdriven);

//? typeof tests the type of operators
console.log(typeof colors);

// alert("I am first alert");
// alert(55);

// let answer = confirm("Are you sure you want it?");
// console.log(answer);

// let promptAge = prompt("What is your age?");
// console.log(promptAge);

let x = 50;
let y = 10;
let sum = x + y;
let subtraction = x - y;
let multiply = x * y;
let division = x / y;
console.log(sum);
console.log(subtraction);
console.log(multiply);
console.log(division);


let num1 = 1;
let num2 = 2;
let string1 = "Hello";
let string2 = "World!"

// document.querySelector('body').innerText = '<a href="#">string1</a>'
// document.getElementsByTagName("body")[0].innerHTML = string1
// document.querySelector('body').innerHTML = '<a href="#">string1</a>'

let name;
let admin;
admin = "John";
name = admin;
document.write(`admin`);

let birthDay = "July 19th";
let Name = prompt ();
console.log(Name + " is born on " + birthDay);

console.log("Hello world!");
alert("I love JavaScript");
confirm("Ready to learn more?");
let randomNumber = prompt("Fill in a random number from 1 to 10");
console.log(randomNumber);