import axios from 'axios';

const HOST = 'http://localhost:4000/api/posts';

export async function createNewPost({ body, userId }) {
  try {
    const res = await axios.post(HOST + '/post', { body, userId });

    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllPosts(userId) {
  try {
    const posts = await axios.get(HOST + `/post/${userId}`);
    return posts.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deletePostById(postId) {
  try {
    const res = await axios.delete(HOST + `/post/${postId}`);
    return res;
  } catch (error) {
    console.log(error);
  }
}
