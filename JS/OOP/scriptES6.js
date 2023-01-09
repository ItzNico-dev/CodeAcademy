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

//! task 1

