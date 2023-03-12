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

    const [mongoResponse, placeholderRe  sponse] = await Promise.all([
      mongoRequest,
      placeholderRequest,
    ]);

    const placeholderData = await placeholderResponse.json();
    res.json(placeholderData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getNameAndId(req, res) {}
