// H1 elemente parašykite savo vardą. Paspaudus 
// ant vardo - tegul jūsų vardas atsiranda per vidurį ekrano, 
// dvigubai didesniu font'o dydžiu ir raudona spalva.


//!listener type
// const heading1 = document.querySelector('h1')

// heading1.addEventListener('click', styleChangeHeading)

// function styleChangeHeading(){
//     heading1.style.color = 'red'
//     heading1.style.fontSize = '4rem'
//     heading1.style.textAlign = 'center'
// }
//!event way
// document.querySelector('h1').addEventListener('click', (event) => {
//     event.target.style.textAlign = "center";
//     event.target.style.fontSize = "4rem";
//     event.target.style.color = "red";
//   });
//! --------------------------------------------------------

// Išbandome ekraną. Sukurkite mygtuką su HTML. JS 
// pasirašykite, kad mygtukas position: absolute ir jo 
// lokacija - viršus, kairė. Paspaudus ant mygtuko, jis 
// turi peršokti į apačią dešinę pusę. Paspaudus vėl - į 
// viršų, kairę pusę. Ir taip šokinėti įstrižai per ekraną 
// kiekvieno paspaudimo metu.

const btn = document.querySelector('button')
btn.addEventListener('click', buttonJump)
btn.style.cssText =
'position: absolute; left: 0; top: 0; width: 20px; height: 20px'

function buttonJump(){
    btn.style.cssText = 
    'position: absolute; bottom: 0; right: 0; width: 20px; height: 20px'
}

//! another way

// const button = document.querySelector('button');
// button.style.cssText = 'position:absolute; top:0; left:0;';

// let isInOriginalPosition = true;
// function changePosition() {
//   event.target.style.cssText = isInOriginalPosition ? 'position:absolute; bottom:0; right:0;' : 'position:absolute; top:0; left:0;';
//   isInOriginalPosition = !isInOriginalPosition;
// }

// button.addEventListener('click', changePosition);
//! --------------------------------------------------------------


//! suktis ratu laikrodzio rodykle (button)


// const button = document.querySelector('button');


// button.style.cssText = 'position:absolute; top:0; left:0';

// let corner = 0;
// const cornerStyles = ['position:absolute; top:0; right:0;', 'position:absolute; bottom:0; right:0;', 'position:absolute; bottom:0; left:0;', 'position:absolute; top:0; left:0;'];
// function changePosition(event) {
//   if (corner < cornerStyles.length) {
//     event.target.style.cssText = cornerStyles[corner];
//     corner++;
//   }
//   if (corner === cornerStyles.length) {
//     corner = 0;
//   }
// }

// button.addEventListener('click', changePosition);

//! Sukurkite input elementą (formos ar mygtuko nereikia), 
//! kur vartotojas galės įrašyti savo vardą. Kai rašo - 
//! keičiasi puslapio stilius. Jei įrašytos yra du simboliai 
//! arba mažiau - viso puslapio fonas raudonas. Jei daugiau 
//! nei du simboliai - puslapio fonas žalias.

// document.getElementById('name').addEventListener('input', event => {
//     const name = event.target.value;
//     document.body.style.backgroundColor = name.length < 3 ? 'red' : 'green';
//   });
  

// function generateRandomColor() {
//     const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
//     const r = randomBetween(0, 255);
//     const g = randomBetween(0, 255);
//     const b = randomBetween(0, 255);
//     return `rgb(${r},${g},${b})`;
//   }
  
//   document.querySelector('button').addEventListener('click', event => {
//     event.target.style.backgroundColor = generateRandomColor();
//   });
  