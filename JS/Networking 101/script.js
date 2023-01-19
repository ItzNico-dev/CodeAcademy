//! fetch GET method examples

//? get github users

// const url = 'https://api.github.com/users'
// const myBody = document.querySelector('body')

// fetch(url)
// .then((response) => response.json())
// .then((data) => {
//     const list = document.createElement('ul')
//     data.forEach((user) => {
//         const userListItem = document.createElement('li')
//         userListItem.textContent = user.login
//         list.append(userListItem)
//     });
//     myBody.append(list)
// })
// .catch((err) => {
//     const errorMessage = document.createElement('h1')
//     errorMessage.textContent = 'Error occured' + err
//     myBody.append(errorMessage)
// })
// .finally(() => console.log('fetch finished'))

//? get bunch

// const urlPicsum = 'https://picsum.photos/v2/list'
// const getBunch = async () => {

//   try {
//     const response = await fetch(urlPicsum);
//     const data = await response.json();

//     myBody.style.display = "flex";
//     myBody.style.flexWrap = "wrap";
//     data.forEach((imageData) => {
//       const image = document.createElement("img");
//       image.setAttribute("src", imageData.download_url);
//       image.setAttribute("width", "200px");
//       myBody.append(image);
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };



// const button = document.querySelector("button");
// button.addEventListener("click", getBunch);



//! fetch POST method examples

// document.querySelector('#get').addEventListener('click', async ()=> {
//    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');  const jsonData = await res.json();
//     console.log(jsonData);})
//     document.querySelector('#post').addEventListener('click', async ()=> {
//        const options = {
//          method: 'POST',
//          headers: {
//           'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             body: 'asdfasetbrsh',
//             author: 'Marius'
//           })
//         }
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//         const jsonData = await res.json();
//         console.log(jsonData);})

// const table = document.querySelector('table')
// const nameInput = document.querySelector('input[name="name"]')
// const lastNameInput = document.querySelector('input[name="last-name"]')
// const numberInput = document.querySelector('input[name="number"]')
// const hasDogInput = document.querySelector('input[name="has-dog"]')


// document.querySelector('#get').addEventListener('click', async () => {
//   const res = await fetch('http://127.0.0.1:5500')
//   const jsonData = await res.json()
//   const dataObject = JSON.parse(jsonData)
//   console.log(dataObject)
//   dataObject.forEach(element => {
//     generateTableEntry(element)
//   })
// })
  

//   document.querySelector('#post').addEventListener('click', async () => {
//     const name = nameInput.value
//     const lastName = lastNameInput.value
//     const number = numberInput.value
//     const hasDog = hasDogInput.value
//     const body = JSON.stringify({
//       name,
//       lastName,
//       number,
//       hasDog
//     })
    
    
//     const options = {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body
//     }

//     const res = await fetch('http://127.0.0.1:3000', options)
//     const dataJson = await res.json()
//     console.log(dataJson);  generateTableEntry(dataJson)
//   })
    
    
    
//     function generateTableEntry(entry) {
//       const tableRow = document.createElement('tr')
//       const nameTd = document.createElement('td')
//       nameTd.textContent = entry.name
//       const lastNameTd = document.createElement('td')
//       lastNameTd.textContent = entry.lastName
//       const numberTd = document.createElement('td')
//       numberTd.textContent = entry.number
//       const hasDogTd = document.createElement('td')
//       hasDogTd.textContent = entry.hasDog === 'on' ? 'Has Dog' : 'No Dog'
//       tableRow.append(nameTd, lastNameTd, numberTd, hasDogTd)
//       table.append(tableRow)
//     }







