import User from '../db/userModel.js';
import dotenv from 'dotenv';

dotenv.config();

const ENDPOINT = process.env.PLACEHOLDER_URL;

export async function createNewUser(req, res) {
  try {
    const { userId, title, body } = req.body;
    const post = await User.create({ userId, title, body });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAllUsers(req, res) {
  try {
    const mongoRequest = User.find({});
    const placeholderRequest = fetch(ENDPOINT);

    const [mongoResponse, placeholderResponse] = await Promise.all([
      mongoRequest,
      placeholderRequest,
    ]);

    const placeholderData = await placeholderResponse.json();
    res.json([...placeholderData, ...mongoResponse]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getNameAndId(req, res) {
  try {
    const placeholderRequest = await fetch(ENDPOINT);
    const placeholderData = await placeholderRequest.json();
    if (!placeholderData.name || !placeholderData.id) {
      throw new Error('Name or ID is missing from API response');
    } else {
      const { name, id } = placeholderData;
      const response = { name, id };
      res.json(response);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
}
