/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users'


const btn = document.querySelector("#btn")
const outputContainer = document.querySelector("#output")

btn.addEventListener("click", () => {
  message.textContent = "";
  
  fetch("https://api.github.com/users")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to get users")
      }
      return response.json()
    })
    .then(data => {
      outputContainer.innerHTML = ""

      data.forEach(user => {
        const userElement = document.createElement("p")
        userElement.textContent = user.login
        outputContainer.appendChild(userElement)
      })
    })
    .catch(error => {
      message.textContent = error.message
    })
})
