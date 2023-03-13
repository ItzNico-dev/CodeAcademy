import User from '../db/userModel.js';
import dotenv from 'dotenv';

dotenv.config();

const ENDPOINT = process.env.PLACEHOLDER_URL;

export async function createNewUser(req, res) {
  try {
    const { name, email, address } = req.body;
    const post = await User.create({
      name,
      email,
      address,
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
    const mongoRequest = User.find({}, { name: true, _id: true });
    const placeholderRequest = fetch(ENDPOINT);

    const [mongoResponse, placeholderResponse] = await Promise.all([
      mongoRequest,
      placeholderRequest,
    ]);

    const placeholderUsers = await placeholderResponse.json();
    const allUsers = [...mongoResponse, ...placeholderUsers];

    const serializedUsers = allUsers.map((user) => ({
      id: user.id,
      name: user.name,
    }));

    res.json(serializedUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getNameEmailAndId(req, res) {
  try {
    const mongoRequest = User.find({}, { __v: false });
    const placeholderRequest =  fetch(ENDPOINT);

    const [mongoResponse, placeholderResponse] = await Promise.all([
      mongoRequest,
      placeholderRequest,
    ]);

    const placeholderUsers = await placeholderResponse.json();
    const allUsers = [...mongoResponse, ...placeholderUsers];

    const serializedUsers = allUsers.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));

    res.json(serializedUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getNameAddressAndId(req, res) {
  try {
    const mongoRequest = User.find({}, { id: true, name: true, address: true });
    const placeholderRequest = fetch(ENDPOINT);

    const [mongoResponse, placeholderResponse] = await Promise.all([
      mongoRequest,
      placeholderRequest,
    ]);

    const placeholderUsers = await placeholderResponse.json();

    const serializedPlaceholderUsers = placeholderUsers.map((user) => ({
      id: user.id,
      name: user.name,
      address: `${user.address.street} ${user.address.suite}, ${user.address.city}`,
    }));

    res.json([...mongoResponse, ...serializedPlaceholderUsers]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}