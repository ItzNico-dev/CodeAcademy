//! task 1

// const legalAge = 20;

// let clientAge = prompt("What's your age?")
// if (clientAge >= legalAge) {
//     alert("You are over legal age!")
// } else {
//     alert("You are under legal age!")
// }


//! task 2
// let myName = "Matthew";

// if (myName.length >= 6 ) {
//     console.log( "Your name is long") } else {
//         console.log("Your name is short")
//     }

//! task 3

// const myAge = 20;

// if (0 < myAge && myAge < 18) {
//     console.log("Child");
// }
// else if (100 > myAge && myAge >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Age Invalid")
// }

//! question 4

let car = prompt("Enter your car manufacturer");

    if (["VW", "Audi", "Bentley"].includes(car)) {
        console.log("Your car belongs to VW club");
    } else if (["BMW", "Mini", "Rolls-Royce"].includes(car)) {
        console.log("Your car belongs to BMW club");
    } else {
        console.log("Your car belongs nether club");
    }