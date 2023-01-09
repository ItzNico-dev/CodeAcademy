//! object literals

// const book1 = {
//     title: 'Harry Potter',
//     author: 'J. K. Roling',
//     year : 1997,
//     getSummary: function(){
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }
// }
// const book2 = {
//     title: '1984',
//     author: 'George Orwell',
//     year : 2000,
//     getSummary: function(){
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }
// }
// console.log(book1);
// console.log(book1.getSummary());
// console.log(book2)
// console.log(book2.getSummary())

// const book3 = new Object()
// book3.title = '1957'

//! constructor function

// function Book(title, author, year){
//     this.title = title;
//     this.author = author;
//     this.year = year;
    // this.getSummary = function(){
    //     return `${this.title} was written by ${this.author} in ${this.year}`
    // }
// }

// const book1 = new Book('Harry Potter', 'J. K. Roling', 1997)
// const book2 = new Book('1984', 'George Orwell', 2000)
// console.log(book1)
// console.log(book1.getSummary())
// console.log(book2)
// console.log(book2.getSummary())

// Book.prototype.getSummary = function(){
//         return `${this.title} was written by ${this.author} in ${this.year}`

// }

// Book.prototype.revise = function(newEditionYear){
//     this.year = newEditionYear;
//     return this.getSummary()
// }

// console.log(book1)
// console.log(book1.revise(2022))
// console.log(book1)

//! prototype inheritance

// function Magazine(title, author, year, month){
//     Book.call(this, title, author, year)
//     this.month = month
// }
// Magazine.prototype = Object.create(Book.prototype)

// const magazine = new Magazine('Naminukas', 'Vaga', 1999, 'February')

// console.log(magazine)

// console.log(magazine.getSummary())

//! task 1

// function Person(name, surname, birthYear){
//     this.name = name,
//     this.surname = surname,
//     this.birthYear = birthYear
    // this.age = function(){
    //     return 2022 - `${birthYear}`
    // }
    // this.fullName = function(){
    //     return `${name}` + ' ' + `${surname}`
    // }
// }

// const person1 = new Person('Matt', 'V', 2002)

// Person.prototype.age = function(){
//     return 2022 - `${this.birthYear}`
// }
// Person.prototype.fullName = function(){
//     return `${this.name}` + ' ' + `${this.surname}`
// }

// const person1 = new Person('Matt', 'V', 2002)
// console.log(person1)
// console.log(person1.age())
// console.log(person1.fullName())

//! task 2