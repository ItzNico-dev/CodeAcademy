/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */


class Movie {
  constructor(title, director, releaseYear, budget) {
    this.title = title
    this.director = director
    this.releaseYear = releaseYear
    this.budget = budget
  }

  displayInfo() {
    console.log(`Title: ${this.title}`)
    console.log(`Director: ${this.director}`)
    console.log(`Release Year: ${this.releaseYear}`)
    console.log(`Budget: ${this.budget}`)
  }

  wasExpensive() {
    return this.budget > 100000000
  }
}


const movie1 = new Movie("The Matrix", "The Wachowskis", 1999, 90000000)
const movie2 = new Movie("Avengers: Endgame", "The Russo Brothers", 2019, 356000000)

console.log(movie1)
console.log(movie1.wasExpensive())
console.log(movie2)
console.log(movie2.wasExpensive())
