const myContainer = document.querySelector('.cars-container');

fetch('http://127.0.0.1:3000/cars')
  .then((response) => response.json())
  .then((cars) => {
    cars.forEach((car) => {
      const div = document.createElement('div');
      div.classList.add('car');

      const h2 = document.createElement('h2');
      h2.textContent = car.title;
      div.appendChild(h2);
      const p1 = document.createElement('p');
      p1.textContent = `Price: ${car.price}`;
      div.appendChild(p1);
      const p2 = document.createElement('p');
      p2.textContent = `Numberplate: ${car.numberplates}`;
      div.appendChild(p2);
      const img = document.createElement('img');
      img.src = car.image;
      div.appendChild(img);
      const button = document.createElement('button');
      button.textContent = 'Details';
      button.addEventListener('click', () => {
        window.location.href = `/details/${car.id}`;
      });
      div.appendChild(button);
      myContainer.append(div);
    });
  })
  .catch((error) => console.log(error));
