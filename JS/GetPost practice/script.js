const USERS_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';
const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
const COMMENTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/comments';

const mainElement = document.querySelector('main');

async function makeRequest(endpoint) {
  const res = await fetch(endpoint);
  const data = await res.json();
  
  return data;
}

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

async function generateHtml(){
  const [users, posts, comments] = await Promise.all([
    makeRequest(USERS_ENDPOINT),
    makeRequest(POSTS_ENDPOINT),
    makeRequest(COMMENTS_ENDPOINT)
  ])

  users.forEach(user => {
    const containerDiv = document.createElement('div');
    const userEmailH1 = document.createElement('h1');
    userEmailH1.textContent = user.email;
    containerDiv.append(userEmailH1);

    const usersPosts = posts.filter(post => post.userId === user.id);
    usersPosts.forEach(post => {
      const postsComments = comments.filter(comment => comment.postId === post.id);
      const postElement = document.createElement('p');
      postElement.textContent = post.body;
      postElement.style.color = 'blue'
      containerDiv.append(postElement);

      postsComments.forEach(comment => {
        const commentElement = document.createElement('p');
        commentElement.textContent = comment.body;
        containerDiv.append(commentElement);
      })
    })
    const hrElement = document.createElement('hr');
    containerDiv.append(hrElement);
    mainElement.append(containerDiv)
  });
}

generateHtml()