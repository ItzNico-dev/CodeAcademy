function Car(brand, model, engine) {
  this.brand = brand;
  this.model = model;
  this.engine = engine;
  this.basePrice = 20000

  this.turnOn = function(){
    alert('wroom')
  }
  this.getPrice = function(){
    let additionalPrice = 0
    if (this.engine === 'electric') {
        additionalPrice = 10000
    } else if(this.engine === 'diesel'){
        additionalPrice = 5000
    }
    return this.basePrice + additionalPrice
  }
}
  
  

const myCar = new Car('BMW', 'M4', "electric", 20000)
const yourCar = new Car('BMW', 'M3', "petrol", 20000)

console.log(myCar.getPrice())