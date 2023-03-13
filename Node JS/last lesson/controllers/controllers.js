import User from '../db/userModel.js';
import dotenv from 'dotenv';

dotenv.config();

const ENDPOINT = process.env.PLACEHOLDER_URL;

export async function createNewUser(req, res) {
  try {
    const {
      id,
      name,
      username,
      email,
      address,
      street,
      suite,
      city,
      zipcode,
      lat,
      lng,
      phone,
      website,
      companyName,
      catchphrase,
      bs,
    } = req.body;
    const post = await User.create({
      id,
      name,
      username,
      email,
      address,
      street,
      suite,
      city,
      zipcode,
      lat,
      lng,
      phone,
      website,
      companyName,
      catchphrase,
      bs,
    });
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
    const response = {
      id: placeholderData.id,
      name: placeholderData.name,
    };
    console.log(response);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
}
