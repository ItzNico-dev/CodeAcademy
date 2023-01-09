//! ES6 Classes

// class Book{
//     constructor(title, author, year){
//         this.title = title,
//         this.author = author,
//         this.year = year
//     }
//     getSummary(){
//         return `this${this.title} was written by ${this.author} in ${this.year}`
//     }
// }

// const book1 = new Book('Harry Potter', 'J. K. Roling', 1997)
// const book2 = new Book('1984', 'George Orwell', 2000)


// console.log(book1);
// console.log(book2);
// console.log(book1.getSummary())

// //! ingeritance with subclasses

// class Magazine extends Book{
//     constructor(title,author,year,month){
//         super(title,author,year)
//         this.month = month
//     }
//     getMonth(){
//         return this.month
//     }
//     static frequency(){
//         return 'monthly'
//     }
// }


// const magazine1 = new Magazine('Naminukas', 'Vaga', 1999, 'February')
// console.log(magazine1)
// console.log(magazine1.getSummary())
// console.log(magazine1.getMonth())
// console.log(Magazine.frequency)

//! task 2

// class Movie{
//     constructor(name, year, director, budget, income){
//         this.name = name,
//         this.year = year,
//         this.director = director,
//         this.budget = budget,
//         this.income = income
//     }
//     getIntroduction(){
//         return `Movie name: ${this.name} \nMovie year: ${this.year} \nMovie director: ${this.director}`
//     }
//     getProfit(){
//         return  `${this.budget}` - `${this.income}`
//     }
// }

// const movie1 = new Movie('JWA', '2018', 'Steven Spielberg', 255, 100)

// console.log(movie1)
// console.log(movie1.getIntroduction())
// console.log(movie1.getProfit())


//! task 3

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Rabbit extends Animal {
//   constructor() {
//     super(name)
//     this.name = name;
//     this.created = Date.now();
//   }
// }

// const rabbit = new Rabbit("White Rabbit"); 
// console.log(rabbit)

//! task 4

class Factory{
    constructor(make,model,year){
        this.make = make,
        this.model = model,
        this.year = year
    }
    getIntroduction(){
        return `${this.make}` + ' ' + `${this.model}`
    }
    getAge(){
        return
    }
}
