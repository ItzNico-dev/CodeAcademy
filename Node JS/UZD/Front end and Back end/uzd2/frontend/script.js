const sendButton = document.querySelector('button')
const nameInput = document.querySelector('input[name = "name"]')
const surnameInput = document.querySelector('input[name = "surname"]')

sendButton.addEventListener('click', async () => {
    const name = nameInput.value
    const surname = surnameInput.value


    const res = await fetch(`http://127.0.0.1:3000/`, {
        method: 'POST',
        headers: {
            Accept: 'application/json'
        },
        body: JSON.stringify({
            name,
            surname
        })
    })
    const data = await res.json()

    console.log(data)
})