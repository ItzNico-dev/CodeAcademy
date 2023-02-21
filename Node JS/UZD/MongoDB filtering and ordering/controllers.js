import Pet from './UserModel.js'

export async function getAllPets(req,res) {
    const pets = await Pet.find()
    res.json(pets)
}

export async function createNewPet(req,res) {
    const { name, type, age } = req.body
    const pet = {
        name,
        type,
        age,
    }

    const petSaved = await Pet.create(pet)

    res.json(petSaved)
}

export async function getPetsByType(req,res) {
    const { type } = req.params
    const pets = await Pet.find({ type })

    res.json(pets)
}

export async function getPetsOldestToYoungest (req,res) {
    const pets = await Pet.find()
    pets.sort((a, b) => a.age - b.age);

    res.json(pets)
}
