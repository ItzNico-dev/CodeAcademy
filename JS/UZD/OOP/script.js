// function Car(brand, model, engine) {
//   this.brand = brand;
//   this.model = model;
//   this.engine = engine;
//   this.basePrice = 20000

//   this.turnOn = function(){
//     alert('wroom')
//   }
//   this.getPrice = function(){
//     let additionalPrice = 0
//     if (this.engine === 'electric') {
//         additionalPrice = 10000
//     } else if(this.engine === 'diesel'){
//         additionalPrice = 5000
//     }
//     return this.basePrice + additionalPrice
//   }
// }
  
  

// const myCar = new Car('BMW', 'M4', "electric", 20000)
// const yourCar = new Car('BMW', 'M3', "petrol", 20000)

// console.log(myCar.getPrice())

// function Person(name, surname) {
//   this.name = name;
//   this.surname = surname;
//   this.addToTable = function () {
//     const nameColumn = document.createElement('td');
//     nameColumn.textContent = this.name;
//     const surnameColumn = document.createElement('td');
//     surnameColumn.textContent = this.surname;
//     const tr = document.createElement('tr');
//     tr.append(nameColumn, surnameColumn);
//     document.querySelector('table > tbody').append(tr);
//   };
// }

// const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

// document.querySelector('form').addEventListener('submit', (event) => {
//   event.preventDefault();
//   const fullname = document.getElementById('fullname').value;
//   const [name, surname] = fullname.split(' ').map(namePart => capitalize(namePart.trim()));

//   const person = new Person(name, surname);
//   person.addToTable();
// });


