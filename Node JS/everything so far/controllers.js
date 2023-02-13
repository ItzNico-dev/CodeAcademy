
import User from './UserModel.js'

export async function getAllUsers(req,res) {
  const users = await User.find();

  res.json(users);

}

export async function getUserById (req,res) {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json(user);

}

export async function getUserByName (req,res) {
  const { name } = req.params;
  const users = await User.find({ name });

    res.json(users);

}
export async function createNewUser (req,res) {
  const { name, lastName, age } = req.body;
  const user = {
    name,
    lastName,
    age,
  };

  // const userSave = new User(user);
  // userSave.save()
  const userSaved = await User.create(user);

  res.json(userSaved);

}
export async function deleteUser (req,res) {
  const { id } = req.params;
  const respDB = await User.findByIdAndDelete(id);

  res.json(respDB);
}


export async function updateUser (req,res) {
  const { id } = req.params;
  const { name, lastName, age } = req.body;

  const user = await User.updateOne({ _id: id }, { name, lastName, age });

  res.json(user);

}