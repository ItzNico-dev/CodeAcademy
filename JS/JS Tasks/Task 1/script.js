/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */


const form = document.querySelector("form")
const input = document.querySelector("#search")
const submitBtn = document.querySelector("#submit-btn")
const myBody = document.querySelector('body')

submitBtn.addEventListener("click", function(event) {
  event.preventDefault()
  const kilograms = Number(input.value)
  const pounds = kilograms * 2.2046
  const grams = kilograms / 0.0010000
  const oz = kilograms * 35.274
  const h1Tag = document.createElement('h1')
  h1Tag.textContent = `${kilograms} kilograms is \n${pounds} pounds \n${grams} grams \n${oz} oz`
  myBody.append(h1Tag)
  input.value = '';
})
