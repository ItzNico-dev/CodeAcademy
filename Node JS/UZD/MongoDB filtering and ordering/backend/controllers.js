import Pet from './PetModel.js';

export async function createNewPet(req, res) {
  try {
    const { name, age, type } = req.body;
    const pet = await Pet.create({
      name,
      age,
      type,
    });

    const pets = await Pet.find({});
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAllPets(req, res) {
  try {
    const order = req.query.order;
    const typeArr = req.query.typeList.split(',');

    const pets = await Pet.find({ type: { $in: typeArr } }).sort({ age: order });
    res.json(pets);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
}