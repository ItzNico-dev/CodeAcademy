const rectangle = document.querySelector('div');
const button = document.querySelector('button');
 
const makeRed = () => rectangle.classList.add('red');
const removeRed = () => rectangle.classList.remove('red');
 
rectangle.addEventListener('mouseover', makeRed);
rectangle.addEventListener('mouseout', removeRed);
rectangle.addEventListener('dblclick', makeGreen);
button.addEventListener('click', toggleRectangleVisibility);
 
function makeGreen(){
  rectangle.classList.toggle('green');
}
 
function toggleRectangleVisibility(){
  if(rectangle.style.display === "none"){
    rectangle.style.display = 'block';
  }
  else {
    rectangle.style.display = 'none';
  }
}