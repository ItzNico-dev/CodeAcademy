const firstInput = document.getElementById("firstInput");
const secondInput = document.getElementById("secondInput");
const output = document.getElementById("output");
const sumButton = document.getElementById("sumButton");
const subButton = document.getElementById("subButton");
const divButton = document.getElementById("divButton");
const mulButton = document.getElementById("mulButton");
const modButton = document.getElementById("modButton");
const clearButton = document.getElementById("clearButton");

sumButton.addEventListener("click", sumNumbers);
subButton.addEventListener("click", subNumbers);
divButton.addEventListener("click", divNumbers);
mulButton.addEventListener("click", mulNumbers);
modButton.addEventListener("click", modNumbers);


function calculate(e) {

  const buttonId = e.target.id;



  switch (buttonId) {

    case 'sumButton':

      output.textContent = +firstInput.value + +secondInput.value;

      break;

    case 'subButton':

      output.textContent = +firstInput.value - +secondInput.value;

      break;

  }

}

function sumNumbers() {
  output.textContent = +firstInput.value + +secondInput.value;
}

function subNumbers() {
  output.textContent = +firstInput.value - +secondInput.value;
}

function divNumbers() {
  output.textContent = (+firstInput.value / +secondInput.value).toFixed(2);
}

function mulNumbers() {
 output.textContent = +firstInput.value * +secondInput.value;
}

function modNumbers() {
 output.textContent = +firstInput.value % +secondInput.value;
}

function clearInputs() {
 if (firstInput.value != "") {
 firstInput.value = "";
 }
 if (secondInput.value != "") {
 secondInput.value = "";
 }
 output.textContent = "";
}


