import {makePostRequest} from "./utils/requests.js"

const ENDPOINT_URL = 'https://olive-bead-glazer.glitch.me'

const brandInput = document.querySelector('input[name="brand"]')
const modelInput = document.querySelector('input[name="model"]')

document.querySelector('button').addEventListener('click', async () => {
    const brand = brandInput.value
    const model = modelInput.value

    const carObj = {
        brand,
        model
    }

    const res = await makePostRequest(ENDPOINT_URL, carObj)
})