// for (let i = 0; i < 21; i++){
//     if (i % 2 == 0) {
//         console.log(i)
//     } else {
//         console.log("Odd")
//     }
// }

// const num = 5;
// let res = 1;
// for (let i = 1; i < num; i++){
//     res = res + i * res;
// }

// console.log(res);

let i = 0;

// 1.Create variable with array containing 10 names.

// 2.Loop over that array using for loop and console.log each name.

// Tip: to know array length use variableName.length. For taking value by  index use variableName[iterationValue]

const names = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

// 1.Create variable with String value - your name.

// 2.Write while loop that iterates 5 times, each time prints your name.


//!second question
// 1.  Use do…while loop to print your name only once.

do {
    console.log("Matthew")
    i++
} while (i < 1)


//! third question
// 1.Create variable with array containing 5 Strings. One of them has to be your name

// 2.Loop over that array using forEach, but print only when value is your name.

const strings = ["stuff", "more stuff", "Matt", "even more stuff", "yep, stuff"];
for (let i = 0; i < strings.length; i++) {
if (strings[i] == "Matt") {
console.log(strings[i]);
}
}