document.querySelector('form').addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault()
    console.log(event)
}