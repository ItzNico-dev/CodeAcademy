// const legalAge = true

// console.log(legalAge)
// console.log(legalAge.toString())

// const milkPrice = 4.256

// if(Number.isInteger(milkPrice)){
//     alert('no need', milkPrice.toPrecision(2))
// } else{
//     alert('change needed')
// }

// alert(milkPrice.toPrecision(3))

const myBody = document.querySelector('body')
const calculations = document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const leters = document.querySelector('input').value
    const price = document.querySelector('input:nth-of-type(2)').value
    
     ResultTag = leters * price
    
    let displayTag = document.createElement('h1')
    displayTag.textContent = ResultTag.toFixed(2)
   
    myBody.append(displayTag)

})
