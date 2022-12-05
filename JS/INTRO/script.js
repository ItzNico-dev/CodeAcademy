console.log("hello world!");

//! variable types

// global variables
firstvar = 666;
console.log(firstvar);

// var variables
var secondvar = 777;
console.log(secondvar);

// variables that can be overwritten - "block scoped"
let thirdvar = 888;
console.log(thirdvar);

// variables that are constant.
const fourthvar = 999;
console.log(fourthvar);

// block
{
    let lname = "Away";
    console.log(lname);
    {
        console.log(lname);
    }

}
// uz bloko nebemato
// console.log(fname);


//string
const workplace = 'codeacademy';
console.log(workplace);
const group = "CAFE04";
console.log(group);
const totalname = 'Total name is : hello';
console.log(totalname);

//number
const year = 2022;
const temperature = 3.77;
console.log(year);
console.log(temperature);

const istrue = true;
console.log(istrue);

//array
const colors = ["red", 15, true];
console.log(colors);
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

//object
const car = {
    color: "blue",
    model: "Audi",
    year: 2022,
    isitdriven: true

}
console.log(car);
console.log(car.color);
console.log(car.model);
console.log(car.year);
console.log(car.isitdriven);

//? typeof tests the type of operators
console.log(typeof colors);

// alert("I am first alert");
// alert(55);

// let answer = confirm("Are you sure you want it?");
// console.log(answer);

// let promptAge = prompt("What is your age?");
// console.log(promptAge);


$("#dialogBtn").on("click", dialog.bind(this, 'Are you Sure?', yesCallback, noCallback));

function dialog(message, yesCallback, noCallback) {
      var modal = $("#modal_dialog");
      modal.show();
      $('.title').html(message);
            
      $('#dialogBtnYes').off("click").on("click", function() {
           modal.hide()
           yesCallback.call();
      });
      $('#dialogBtnNo').off("click").on("click", function() {
            modal.hide()
            noCallback.call();
      });
}

