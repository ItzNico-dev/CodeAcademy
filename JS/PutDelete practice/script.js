//! put request with fetch
//? 1st example

const JSON_PLACEHOLDER_BASE_URL = "https://jsonplaceholder.typicode.com/posts/"
// const getPosts = async () => {
//     const response = await fetch(JSON_PLACEHOLDER_BASE_URL)
//     const data = await response.json()
//     console.log(data)
// }
    
//! getPosts()
    
// const updatePost = async (postId) => {
//     const response = await fetch(JSON_PLACEHOLDER_BASE_URL + postId, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ title: "updated title", body: "updated body" }),
//     })
//     const info = await response.json()
//     console.log(info)
// }
//! updatePost(55)

//? 2nd example

//     const DUMMY_BASE_URL = 'https://dummy.restapiexample.com/api/v1'

//     const getEmployees = async () => {
//         const response = await fetch(DUMMY_BASE_URL + '/employees')
//         const data = await response.json()
//         console.log(data)
//     }
//! getEmployees()

// const updatedEmployee = async (employeeId) => {
//     try {
//         const response = await fetch(DUMMY_BASE_URL + "/update/" + employeeId, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 name: "test",
//                 salary: "123",
//                 age: "23",
//             }),
//         })
//         const info = await response.json()
//         console.log(info)
//     } catch (err) {
//         console.log(err)
//     }};
    
//!     updatedEmployee(21)

//! delete
//? 1st example

// const deletePosts = async(postId) => {
//     try{
//     const response = await fetch(JSON_PLACEHOLDER_BASE_URL + postId, {
//         method: 'DELETE'
//     })
//     if (response.ok) console.log('deleted successfully')
//     const info = await response.text()
//     console.log(info)
//     } catch(err){
//         console.log(err)
//     }
// }

// deletePosts()

//? 2nd example

// const FAKE_URL = 'https://fakestoreapi.com/products/1'

// const deleteProduct = async (productId) => {
//     const response = await fetch(FAKE_URL + productId, {
//         method: 'delete'
//     })
//     console.log(response)
//     const info = await response.json()
//     console.log(info)
// }

//! deleteProduct(5)

// const taskURL = 'https://testapi.io/api/Marijus/resource/students'

// const getData = async () =>{
//     const response = await fetch(taskURL)
//     const data = await response.json()
//     console.log(data)
// }

// getData()

// async function  postData(url = '', data = {}){
//     const response = await fetch(taskURL, {
//         method: 'POST',
//         headers:  {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     return response.json()
    
// }

// postData('https://testapi.io/api/Marijus/resource/students', {
//     name: 'Matas',
//     town: 'Kaunas',
//     hometown: 'Kaunas'
// })
// .then((data) => {
//     console.log(data)
//   })



  // const fetchData = async () => {
  //   const response = await fetch('https://testapi.io/api/Marijus/resource/students')
  //   const data = response.json()
  //   console.log(data)
  // }

  // fetchData()


// const updatePost = async (postId) => {
//     const response = await fetch(JSON_PLACEHOLDER_BASE_URL + postId, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ title: "updated title", body: "updated body" }),
//     })
//     const info = await response.json()
//     console.log(info)
// }

const BASE_URL = 'https://olive-bead-glazer.glitch.me'

const getData = async () => {
  const response = await fetch(BASE_URL)
  const data = await response.json()
  console.log(data)
}

getData()

