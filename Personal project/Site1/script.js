// Add your JavaScript here

// Show a hidden element when a button is clicked
document.querySelector('.show-button').addEventListener('click', function() {
  document.querySelector('.hidden-element').style.display = 'block';
});

// Change the color of a heading when it is hovered over
document.querySelector('h2').addEventListener('mouseover', function() {
  this.style.color = '#f5a623';
});
document.querySelector('h2').addEventListener('mouseout', function() {
  this.style.color = '#333333';
});

// Toggle a class on a section when it is clicked
document.querySelector('.toggle-section').addEventListener('click', function() {
  this.classList.toggle('expanded');
});
