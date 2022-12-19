//! style manipulation examples

// console.dir(document.querySelector('div'))
// console.dir(document.querySelector('div').style)
// console.dir(document.querySelector('div').style.border)

// const allDivs = document.querySelectorAll('div')
// console.dir(allDivs)


//!manipulation width .style property changes
// for(let i = 0; i < allDivs.length; i++){
//     // console.dir(allDivs[i])
//     allDivs[i].style.width = '200px'
//     allDivs[i].style.height = '200px'
//     allDivs[i].style.border = '5px solid black'
//     allDivs[i].style.backgroundColor = 'red'
// }

//!set with function setAttribute('atribute name', new atribute value)
// allDivs[0].setAttribute(
//     "style", 
//     "width: 300px; height: 500px; border: 6px solid blue; background-color: green;"
//     )

//! set with cssText

// allDivs[1].style.cssText =
//  "width: 300px; height: 500px; background=color: red"


//! uzdavinukas
// const h1 = document.querySelector('h1')
//  h1.style.color = 'crimson'
//  h1.style.fontSize = '30px'


// const h2 = document.querySelector('h2')

// for(let i = 0; i <= 1; i++){
//     h2.setAttribute( 'style', ' color: crimson; font-size: 30px '
// )
// }

// const h3 = document.querySelector('h3')
// h3.style.cssText = 'color: crimson; font-size: 30px;'

// const headings = document.querySelectorAll('h1, h1, h3')
// const[first, second, third] = headings

//! date object

// let result

// result = new Date()
// result = new Date(0)
// // result = new Date(24 = 60 = 60 = 1000 )
// result = new Date('1995-02-11' )
// result = typeof new Date()
// result = new Date().getTime()
// result = Date.now()
// result = +new Date()

// const dateNow = new Date()
// result = dateNow.getFullYear()
// result = dateNow.getMonth()
// result = dateNow.getFullYear('1992')
// result = dateNow.getFullYear()
// result = dateNow.toISOString()
// result = dateNow.toLocaleDateString()
// result = dateNow.toLocaleTimeString()

// console.log(result)

// const runClock = () => {
//     document.querySelector('div').innerHTML = `<h1>$(new Date.toLocaleTimeString())</h1)`
// }
// setInterval(runClock, 1000)