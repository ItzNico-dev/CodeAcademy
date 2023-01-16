// document.querySelector('button').addEventListener('click', ()=>{
//     sessionStorage.setItem('session-thing', 'Labas')

// })
// localStorage.setItem('Test', 'Labas')

// document.querySelector('button').addEventListener('click', () => {
//     localStorage.removeItem('Test')
// })


// document.querySelector('button').addEventListener('click', () => {})
// const now = new Date()
// const later = new Date(now.getTime() + 1000 *60 *60 *24 *7)
// document.cookie = `lastname = asdf; expires = ${later.toUTCString()}`
// console.log(document.cookie)
// document.cookie = `lastname = asdf; expires = ${now.toUTCString()}`


// localStorage.setItem('logged-in', JSON.stringify( {
//     value: true,
//     expirationDate: localStorage,
// }))

// console.log(JSON.parse(localStorage.getItem('logged-in')))
//! task 1

// const loggedInJSON = localStorage.getItem('logged-in')
// const loggedInObj = JSON.parse(loggedInJSON)
// if (loggedInObj) {
//     if (loggedInObj.expires > Date.now()) {
//         setTimeout(() => {
//             document.location.replace('https://www.google.com/')
//         }, 5000);
//     } else {
//         console.log('expired')
//     }
// }

// const nameInput = document.querySelector('#name-input')
// const passwordInput = document.querySelector('#password-input')

// document.querySelector('button').addEventListener('click', () => {
//     const name = nameInput.value
//     const password = passwordInput.value
//     // uzkalusa i serveri
//     //viskas ciki. gali jungtis
//     const now = new Date()
//     const expires = new Date(now.getTime() + 1000 * 60 * 60 * 24)
//     localStorage.setItem('logged-in', JSON.stringify ({
//         expires: expires.getTime(),
//         value: true,
//     }))
// })

// localStorage.clear()