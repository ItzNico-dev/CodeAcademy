const name = document.querySelector('h')

name.addEventListener('click', colorChange)

function colorChange(){
    name = document.style.color('red')
}