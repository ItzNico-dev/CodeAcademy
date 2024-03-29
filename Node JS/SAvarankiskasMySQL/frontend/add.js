const addButton = document.querySelector('#add-button');

addButton.addEventListener('click', async () => {
  const title = document.querySelector('#title').value;
  const price = document.querySelector('#price').value;
  const numberplates = document.querySelector('#numberplate').value;
  const image = document.querySelector('#image').value;

  const response = await fetch('http://127.0.0.1:3000/cars', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      price,
      numberplates,
      image,
    }),
  });

  if (response.ok) {
    alert('Car added successfully!');
    window.location.href = '/cars';
  } else {
    alert('Error adding car');
  }
});
