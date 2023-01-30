/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator{
    constructor(numberOne, numberTwo) {
        this.numberOne = numberOne
        this.numberTwo = numberTwo
    }
    sum(){
        return this.numberOne + this.numberTwo
    }
    sub(){
        return this.numberOne - this.numberTwo
    }
    multi(){
        return this.numberOne * this.numberTwo
    }
    div(){
        return this.numberOne / this.numberTwo
    }
}

const calculator = new Calculator(2, 2)
console.log(calculator.sum())
