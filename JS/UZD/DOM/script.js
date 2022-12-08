const myName = 'Matt';
let i = 0;
let combo = "";
while (i < 5){
    console.log(combo += myName);
    i++
}

//math

console.log(Math.cos(0))

console.log(Math.floor(Math.random() * (5 - 1 + 1)) + 1) //1-5
console.log(Math.floor(Math.random() * (12 - 5 + 1)) + 5) //5-12

//! lotery alert
if((Math.floor(Math.random() * (12 - 5 + 1)) + 5) == 6){
    // alert('You won')
} else{
    // alert('You lost')
}

//creating and switching elements around

let h2 = document.createElement('h2')
console.log(h2.innerHTML = 'matt')
console.log(document.querySelector('body').appendChild(h2))

console.log(document.querySelector('h1:nth-child(2)').innerHTML = 'Matt')
console.log(document.querySelector('ul li:last-child').innerHTML = 'Suris')

console.log(document.getElementsByTagName('span').item(1).innerHTML = 'blue')

let VW = document.querySelector('ol li:nth-child(2)').textContent
let BMW = document.querySelector('ol li:nth-child(1)').textContent

document.querySelector('ol li:nth-child(1)').innerHTML = VW
document.querySelector('ol li:nth-child(2)').innerHTML = BMW

