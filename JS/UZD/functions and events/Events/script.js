//!selectors
const bAlert = document.querySelector('#button')
const hidden = document.querySelector('.hidden')
const pCopy = document.querySelector('.copy')

//!listeners
bAlert.addEventListener('click', btnAlert)
pCopy.addEventListener('copy', pCopy)
//! task 1

function btnAlert() {
    console.log('Matt')
    hidden.classList.toggle('hidden')
}
function btnCopy() {
    alert('DONT COPY')
}