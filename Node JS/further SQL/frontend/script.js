
const main = document.querySelector('main')

async function getProducts(page){
    const res = await fetch(`http://127.0.0.1:3000/products/pageination?page=${page}&size=5`)
    const data = await res.json()
    console.log(data)
    clearMain()
    data.data.forEach((product) => generateProduct(product))
    generatePageButtons(data.totalPages)
}

async function buttonHandler(e){
   const productId = e.target.id
   console.log(productId)
   getProducts(productId)
}

function clearMain(){
    main.innerHTML = ''
}

async function generatePageButtons(amount){
    for(let i = 0; i < amount; i++){
        const button = document.createElement('button')
        button.textContent = i + 1
        button.id = i+1
        button.addEventListener('click', buttonHandler)
        main.append(button)
    }
}

async function generateProduct(product){
    const containerDiv = document.createElement('div')
    const title = document.createElement('h1')
    title.textContent = product.title
    const description = document.createElement('p')
    description.textContent = product.description
    const price = document.createElement('h6')
    price.textContent = product.price
    containerDiv.append(title, price, description)

    main.append(containerDiv)
}

getProducts(1)