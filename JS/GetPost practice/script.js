//? Create a simple to-do list application using JavaScript 
//? and local storage.
//? The application should have the following features:




//? 1. A form for adding new to-do items to the list.




//? 2. A display area for showing all the items on the list.





//? 3. A button for clearing the entire list.





//? 4. Use local storage to save the to-do list so that it persists 
//? even when the user closes the browser or refreshes the page.




//? Instructions:

//? 1. Create an HTML file with a form for adding new to-do items.
//? The form should have a text input and a button for submitting the item.

//? 2. Create a JavaScript file to handle the logic for the to-do list application.

//? 3. Use the localStorage object to save the to-do list to the user's browser.

//? 4. When the page loads, check if there is a saved to-do list in local storage
//? and display it if there is.

//? 5. When the user submits a new item, add it to the list and update the local storage.

//? 6. Add a button that allows the user to clear the entire list and clears the local storage.

const USERS_ENDPOINT = 'https://jsonplaceholder.typicode.com/users'
const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts'
const COMMENTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/comments'


async function getUsers(){
    USERS_ENDPOINT = 'https://jsonplaceholder.typicode.com/users'
    const res = await fetch(USERS_ENDPOINT)
    const users = await res.json()
    return data
}





async function getPosts(){
    POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts'
    const res = await fetch(POSTS_ENDPOINT)
    const posts = await res.json()
    console.log(posts)
}





async function makeRequest(endpoint){
    const res = await fetch(endpoint)
    const data = await res.json()
    return data
}

async function generateHTML(){
    const [users, posts, comments] = await Promise.all([
        makeRequest(USERS_ENDPOINT),
        makeRequest(POSTS_ENDPOINT),
        makeRequest(COMMENTS_ENDPOINT)
    ])


users.forEach(user => {

    const containerDiv = document.createElement('div')
    userEmailH1 = document.createElement('h1')
    userEmailH1.textContent = user.email
    containerDiv.append(userEmailH1)

    const usersPosts = posts.filter(post => post.userId === user.id)
    usersPosts.forEach(post => (
        const postsCmments = comments.filter(comment => comment.postId === post.id)
        const postElement  = document.createElement('p')
        postElement.textContent = post.body
        containerDiv.append(postElement)
    
        ))



});
}