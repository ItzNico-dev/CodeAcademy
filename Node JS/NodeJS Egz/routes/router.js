import express from 'express'
import { getUsersNames } from '../controllers/controllers.js'
const router = express.Router()

router.get('https//jsonplaceholder.typicode.com/users/names', getUsersNames);


export default router