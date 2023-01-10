/*
RACING GAME

The racing game solution should have the following functionality:

Prompt the user for the number of cars and distance of the race, and validate that the input is a positive integer
Create a class for a car with properties for its id, speed, and distance traveled, and methods for accelerating, slowing down, and moving the car
Create car objects and add them to the page as elements with styles applied
Periodically accelerate or slow down each car
Move the cars a certain distance and check if any of them have reached the finish line, displaying a winner text if necessary
Add an info text field below each car to display its speed and distance traveled
*/

//! T 8. Pridekite div su tekstu po kiekvienu auto su info koks greitis ir atstumas;
//! T 9. Pakeiskite kvadratelius div su img
//! T 10. Pakeiskite finish line su img
//! Perdaryti su ECMA5;

//! T 1. fn getUserInput() - paima is user numberOfCars ir distance;

let numberOfCars = 0
let distance = 0
const cars = []

const getUserInput = () => {
  const isPositiveInteger = (input) => input > 0 && Number.isInteger(input)

  while (!isPositiveInteger(numberOfCars)) {
    numberOfCars = +prompt("Enter number of cars to race", 5)
  }

  while (!isPositiveInteger(distance)) {
    distance = +prompt("Enter distance for the race", 100)
  }
}

//! T 2. Car class: props - id, speed, distance; methods - accelerate(howMuch), slowdown(howMuch), move();
class Car {
  constructor(id) {
    this.id = id
    this.speed = 0
    this.distance = 0
  }
  accelerate(change) {
    this.speed += change
  }
  slowdown(change) {
    this.speed -= change
    if (this.speed < 0) this.speed = 0
  }
  move() {
    this.distance += this.speed
  }
}

//! M 3. fn drawCars() nupiešia tiek auto, kiek įvesta userio. (ir sukurti Cars objektus)
const drawCars = () => {
  for (let i = 0; i < numberOfCars; i++) {
    cars.push(new Car(i))
  }
  cars.forEach((car) => {
    const newCar = document.createElement("div")
    newCar.classList.add("car")
    newCar.style.top = 60 + 60 * car.id + "px"
    document.body.append(newCar)

    const carInfo = document.createElement('div')
    carInfo.classList.add("car-info")
    carInfo.style.top = 120 + 90 +car.id + 'px'
    carInfo.textContent = `Car: ${car.id + 1} \nspeed: ${car.speed} \nDistance: ${car.distance}`
  })
}

//! M 4. fn drawFinishLine()
const drawFinishLine = () => {
  const finishLine = document.createElement("div")
  finishLine.classList.add("finishLine")
  finishLine.style.height = 60 * numberOfCars + "px"
  finishLine.style.left = distance + 100 + "px"
  document.body.append(finishLine)
}

//! T 5. fn pace() - nustatom greitį
const pace = () => {
  cars.forEach((car) => {
    const change = Math.floor(Math.random() * 6)
    Math.random() > 0.4 ? car.accelerate(change) : car.slowdown(change)
})
}

//! M 6. fn move() - pajudinam ;
//! add winner text

const move = () => {
    cars.forEach((car) => {
        car.move()
        document.querySelectorAll(".car")[car.id].style.left = car.distance + 'px'
        document.querySelectorAll(".car-info")[car.id].style.left = car.distance + 'px'
        document.querySelectorAll(".car-info")[car.id].textContent =     carInfo.textContent = `Car: ${car.id + 1} \nspeed: ${car.speed} \nDistance: ${car.distance}`

        
    })
    cars.sort((a,b) => b.distance - a.distance)

    if (cars[0].distance >= distance){
        clearInterval(paceInterval)
        clearInterval(moveInterval)
        const winnerText = document.createElement('div')
        winnerText.classList.add("winner-text")
        winnerText.textContent = `winner is car: ${cars[0].id + 1}`
        document.body.append(winnerText)
    }
}

//! T 7. Pastumkite visa lenktyniu zona zemiau laimetojo teksto;




getUserInput();
drawCars();
drawFinishLine();
pace();

const paceInterval = setInterval(pace, 2000);
const moveInterval = setInterval(move, 200);