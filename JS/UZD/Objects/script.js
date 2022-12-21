// const car =  {
//     doors: 4,
//     color: 'red' ,
//     brand: 'BMW'

// }
// console.log(car.doors)
// console.log(car.color)
// console.log(car.brand)


document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
 
    const person = {
        name: document.querySelector('input').value,
        surname: document.querySelector('input:nth-of-type(2)').value,
        age: document.querySelector('input:nth-of-type(3)').value
    }

    console.log(person)
})
