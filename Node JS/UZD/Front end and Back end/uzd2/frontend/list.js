const ulNameList = document.querySelector('ul');

async function getNames() {
  const res = await fetch('http://127.0.0.1:3000/');
  const data = await res.json();

  data.forEach((person) => {
    const li = document.createElement('li');
    li.textContent = `name: ${person.name} surname: ${person.surname}`;
    ulNameList.append(li);
  });
}

getNames();