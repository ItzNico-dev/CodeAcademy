// const USERS_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';
// const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
// const COMMENTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/comments';

// const mainElement = document.querySelector('main');

// async function makeRequest(endpoint) {
//   const res = await fetch(endpoint);
//   const data = await res.json();
  
//   return data;
// }

// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
// }

// {
//   "userId": 1,
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }

// {
//   "postId": 1,
//   "id": 1,
//   "name": "id labore ex et quam laborum",
//   "email": "Eliseo@gardner.biz",
//   "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
// }

// async function generateHtml(){
//   const [users, posts, comments] = await Promise.all([
//     makeRequest(USERS_ENDPOINT),
//     makeRequest(POSTS_ENDPOINT),
//     makeRequest(COMMENTS_ENDPOINT)
//   ])

//   users.forEach(user => {
//     const containerDiv = document.createElement('div');
//     const userEmailH1 = document.createElement('h1');
//     userEmailH1.textContent = user.email;
//     containerDiv.append(userEmailH1);

//     const usersPosts = posts.filter(post => post.userId === user.id);
//     usersPosts.forEach(post => {
//       const postsComments = comments.filter(comment => comment.postId === post.id);
//       const postElement = document.createElement('p');
//       postElement.textContent = post.body;
//       postElement.style.color = 'blue'
//       containerDiv.append(postElement);

//       postsComments.forEach(comment => {
//         const commentElement = document.createElement('p');
//         commentElement.textContent = comment.body;
//         containerDiv.append(commentElement);
//       })
//     })
//     const hrElement = document.createElement('hr');
//     containerDiv.append(hrElement);
//     mainElement.append(containerDiv)
//   });
// }

// generateHtml()

//! -------------------------------------------------------------------------


// async function makeRequest(){
//     const ENDPOINT = 'https://www.omdbapi.com/?apikey=d1311396&i=tt1285056'
//     const res = await fetch(ENDPOINT)
//     const data = await res.json()
//     console.log(data)
// }

// makeRequest()

//! ------------------------------------------------------------

// const promise = new Promise((resolve, reject) => {
//     let random = Math.floor(Math.random()*5+1)
//     setTimeout(() => {
//     if(random === 1){
//       reject();
//     }
//     else{
//       resolve()
//     }
//   }, 5000)
// }
// )
// .then(() => alert('works')).catch(() => alert('Oops, promise was rejected'))

// const renderUserCard = (user) => {
//   const img = document.createElement('img');
//   img.src = user.picture.large;
//   img.alt = `${user.name.first} profile picture`;

//   const intro = document.createElement('h4');
//   intro.innerText = `${user.name.first} ${user.name.last}, ${user.dob.age}`;

//   const contacts = document.createElement('h5');
//   contacts.innerText = user.email;

//   const card = document.createElement('div');
//   card.append(img, intro, contacts);
//   document.body.append(card);
// };

// const fetchRandomUser = async () => {
//   try {
//     const response = await fetch('https://randomuser.me/api/');
//     if (response.ok) {
//       const data = await response.json();
//       renderUserCard(data.results[0]);
//     }
//   } catch(error) {
//     console.error(error);
//   }
// };

// fetchRandomUser();
    fetch("https://magnetic-melon-yam.glitch.me")
    .then(response => response.json())
    .then(data => {
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");

        // Create table header
        const headerRow = document.createElement("tr");
        Object.keys(data[0]).forEach(key => {
            const th = document.createElement("th");
            th.textContent = key;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Create table rows
        data.forEach(item => {
            const row = document.createElement("tr");
            Object.values(item).forEach(value => {
                const cell = document.createElement("td");
                cell.textContent = value;
                row.appendChild(cell);
            });
            tbody.appendChild(row);
        });
        table.appendChild(tbody);

        // Append the table to the body of the document
        document.body.appendChild(table);
    })
    .catch(error => console.error(error));
