import express from "express"
import { getAllPets, getPetsOldestToYoungest, createNewPet, getPetsByType } from "./controllers.js"

const router = express.Router()

router.get('/pets', getAllPets)

router.get('/pets/:type', getPetsByType)

router.get('/pets', getPetsOldestToYoungest)

router.post('/pets', createNewPet)

export default router