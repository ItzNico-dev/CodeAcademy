import User from '../models/userModel.js';

export async function getUsersNames(req, res) {
  const users = await User.find({}, { _id: 0, id: 1, name: 1 });
  const usersData = await users.json();
  res.json(usersData);
}
