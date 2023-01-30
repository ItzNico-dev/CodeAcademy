/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json'


const output = document.querySelector("#output")

fetch("cars.json")
  .then(response => response.json())
  .then(data => {
    let outputContent = ""
    data.forEach(car => {
      outputContent += `
      <div class="card">
        <h2>${car.brand}</h2>
        <ul>
          ${car.models.map(model => `<li>${model}</li>`).join("")}
        </ul>
      </div>
      `
    })
    output.innerHTML = outputContent
  })
