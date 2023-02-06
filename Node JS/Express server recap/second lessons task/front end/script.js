const carList = document.querySelector('ul');

async function fetchData() {
  const res = await fetch('http://127.0.0.1:3000/');
  const cars = await res.json();

  cars.forEach((car) => {
    createListEntry(car);
  });
}

function createListEntry(car) {
  const li = document.createElement('li');
  li.textContent = car;

  carList.append(li);
}

fetchData();