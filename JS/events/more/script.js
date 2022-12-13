//! get form object and elements

// console.dir(document.querySelector('form'))
// console.dir(document.forms[0])
// console.dir(document.forms[0].elements)
// console.dir(document.forms[0].elements[0])
// console.dir(document.forms[0].username)
// console.dir(document.querySelector("#username"))

//! get values on submit

const form = document.querySelector('form')
form.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(e) {
    e.preventDefault()
    console.dir(e.target)

    //! get input values
    console.dir(document.querySelector('#username').value)

    //! 4 select

    const hometownSelect = document.querySelector('#hometown')
    console.dir(hometownSelect.value)
    console.dir(hometownSelect.selectedOptions)
    console.dir(hometownSelect.selectedIndex)

    //! checkbox

    const termsCheckbox = document.querySelector('#terms')
    console.dir(termsCheckbox.checked)

    //! simple validation scenario

    const username = document.querySelector('#username')
    const errorElements = document.querySelectorAll['.error']

    if (username.value === "") {
        errorElements[0].textContent = "enter a god damn username"
        username.style.border = "2px solid red"
    }

}

//! 6 focus and blur events

// document.querySelector('#username').addEventListener('focus', (e) => e.target.style.backgroundColor = "orange")
// document.querySelector('#username').addEventListener('blur', (e) => e.target.style.backgroundColor = "white")

//!change and input

document.querySelector('#email').addEventListener('change', (e) => {
    document.querySelector('#emailError').textContent = e.target.value
})
document.querySelector('#username').addEventListener('input', (e) => {
    document.querySelector('#usernameError').textContent = e.target.value
})