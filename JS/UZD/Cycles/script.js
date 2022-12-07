// Atsidarykite konsolę, sukurkite kintamą su jūsų amžiumi.
// Vėliau, atiminkite iš 2021 savo amžių ir sužinosite gimimo metus(su
// metų paklaida).

//! let myAge = 20;

//! myAge = 2021 - myAge;
//! console.log(myAge);



// Susikurkite index.html file'ą, jame pasirašykite console.log() <script> tag'e.
// Atsidaryk šį index.html ir pasitikrink ar veikia.

//! let carName = prompt("Car name")

// ! switch (carName) {
// !     case "VW":
// !     case "Audi":
// !     case "Bentley":
// !     case "Bugatti":
// !    case "Lambo":
// !     case "Porsche":
// !         console.log("vW")
// !         break;
// !     case "BMW":
// !     case "Mini":
// !     case "Rolls-Royce":
// !         console.log("BMW")
// !         break;
// !     default:console.log("Unknown")
// ! }


// Sukurkite variable 'userInput' ir pradžioje prilyginkite 'Obuolys'.
// Su Switch statement apsirašyk, kad 'userInput' reikmšmė yra - vaisius
// ar daržovė.Pridėkite bent 5 kiekvienos kategorijos(trūksta idėjų ? Wiki
//     į pagalbą: vaisiai, daržovės).

//! let userInput = prompt("Ivesk vaisiu ar darzove is pasirinkimu");

//! switch (userInput) {
//!     case "Obuolys":
//!     case "Slyva":
//!     case "Bananas":
//!     case "Braske":
//!     case "Apelsinas":
//!         console.log("Vaisius")
//!         break;
//!     case "Agurkas":
//!     case "Pomidoras":
//!     case "Salieras":
//!     case "Morka":
//!     case "Bulve":
//!         console.log("Darzove")
//!         break;
//!     default: "unknown"
//! }

// Kokia šiandien diena ? Sukurkite variable 'weekDay', kuris būtų
// lygus skaičiui - savaitės dienai, skaičiuojant nuo 0(t.y.pirmadienis - 0;
// antradienis - 1; trečiadienis - 2 ir t.t.). Parašykite Switch statement,
// kuris paimtų skaičių ir jį pakeistų(ne sukurtų naują kintamąjį, o
// pakeistų 'weekDay' reikšmę) į savaitės dieną žodžiu.Vėliau, atspausdink kintamąjį.


//! let weekDay = 0;
//! switch (weekDay) {
//!     case 0:
//!         console.log("Monday")
//!         break;
//!     case 1:
//!         console.log("Tuesday")
//!         break;
//!     case 2:
//!         console.log("Wednesday")
//!         break;
//!     case 3:
//!         console.log("Thursday")
//!         break;
//!     case 4:
//!         console.log("Friday")
//!         break;
//!     case 5:
//!         console.log("Saturday")
//!         break;
//!     case 6:
//!         console.log("Sunday")
//!         break;
//! default:("Wrong")
//! }


// Parašykite variable su jūsų vardu.Pasiklauskite, jei vardo ilgis trumpesnis
// nei 5 simboliai - tegul išmeta konsolėje "Short Name", kitaip - "Long Name".

//! let myName = prompt("Enter your name");

//! if (myName.length < 5) {
//!     console.log("your name is short")
//! } else {
//!     console.log("ypur name is long")
//! }


// Sukurkite du kintamuosius: 'clientAge' ir 'legalAge'.Patikriname ar vartotojas gali
// vairuoti automobilį - t.y.clientAge didesnis arba lygus legalAge.Jei taip -
// išmeta 'Can Drive', kitaip 'Can't drive'.

// Ahh, o jeigu antrame pratime įvesti - 1 kaip amžių ? Darom double ternary operator - t.y. 
// operatorius operatoriuje.Pirma paklausiame - jei amžius mažesnis nei 0; arba didesnis 
// nei 120 - išmetame "Invalid Age".Jei vis tik ne - tada false statement'e bus dar vienas 
// operatorius su antru pratimo klausimu.


let clientAge = 20;
const legalAge = 18;
 


if (clientAge < legalAge) {
     console.log('cant drive')
 } else {
     console.log('can drive')
 }

clientAge = clientAge <= 0 ? alert('invalid age') : clientAge
clientAge = clientAge > 120 ? alert('invalid age') : clientAge


//  Sukurkite variable 'phone', kuris būtų lygus 'iPhone'. Taip pat sukurkite variable
// isIphoneUser, kuris turėtų būti prilygintas Boolean reikšmei (t.y. true arba false)
// priklausomai ar phone yra 'iPhone' ar bet koks kitas.

//! const phone = "iphone";
//! let isIphoneUser = prompt("are you an iphone user?");

//! if (isIphoneUser = true) {
//!     console.log("he/she is iphone user")
//! } else {
//!     console.log("he/she isnt an iphone user")
//! }

// Padaryk, kad kompiuteris 10 kartų paconsole'intų tavo vardą
// (atsimink, konsolė tas pačias eilutes grupuoja ir šalia parašo
// skaičiuką dažniausiai, vietoj to, kad išmestų kiekvienoje eilutėje).
// Pakoreguok pirmą pratimą, kad tiek vardas, tiek kiek kartų kartos - būtų kintamieji.
// Prie savo vardo atspaudink ir 'i' raid1
// ę, t.y.kelintas ciklas yra(pvz.: "0. Petras", "1. 
// Petras", "2. Petras")...

const myName = "Matt"
let numCaunt = prompt("enter the amount of times")
for (i = 0; i < numCaunt; i++) {
    console.log(`${i}. ${name}`);
}

for (i = 10; i > 0; i--) {
    console.log(i)
}