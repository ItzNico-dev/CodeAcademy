import axios from 'axios';

const HOST = 'http://localhost:4000/api/post';

export async function createNewPost(req, res) {
  try {
    await axios.post(HOST, '/post', { maxBodyLength, userId });
  console.log()
} catch (error) {}
}
