
//! general example

function start() {
    for(let i=0; i < document.body.children.length; i++){
        console.log(document.body.children[i].tagName);
    }
}const startArrow = () => {
    for(let i=0; i < document.body.children.length; i++){
        console.log(document.body.children[i].tagName);
    }
}

const printMousePosition = (event) => {
    console.log('Mouse position')
    console.log(event.target)
    console.log(event.clientX, event.clientY)
}

const heading = document.querySelector('h1');
heading.addEventListener('click', printMousePosition);


//! most common events
//? meuse events

// click

const container = document.querySelector('div')
container.addEventListener('click', () => console.log('div clicker'))

// doubleclick
container.addEventListener('dblclick', () => console.log('div double clicker'))

// mouseover
container.addEventListener('mouseover', () => console.log('div has mouse over it'))

// mouseout

container.addEventListener('mouseout', () => console.log('div has mouse out of it'))

//? keyboard events

//keypress
document.addEventListener('keypress', (e) => console.log(e.key))

//keyup

document.addEventListener('keyup', (e) => console.log(e))


