//! fetch GET examples

//? get github users

// const url = 'https://api.github.com/users'
const myBody = document.querySelector('body')

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







