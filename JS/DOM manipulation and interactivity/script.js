

// console.log(document.getElementsByTagName('div'));
// console.log(document.getElementsByClassName('second'));
// console.log(document.getElementsByName('third'));
//  console.log(document.getElementById('third'));

console.log(document.querySelector('#first'))
console.log(document.querySelector('.second'))
console.log(document.querySelector('div'))
console.log(document.querySelectorAll('div'))


const myDiv = document.querySelector('div')

console.log(myDiv.classList)
myDiv.classList.remove('background')//removes class
myDiv.classList.add('background')//adds class
myDiv.classList.toggle('background') //removes if there/adds if not there

console.log(myDiv.classList.contains('background')) // checks oif such a class is there

myDiv.style.backgroundColor = 'red'//can target individual style properties this way

