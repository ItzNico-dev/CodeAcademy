import User from '../models/userModel.js';

export async function getUsersNames(req, res) {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
