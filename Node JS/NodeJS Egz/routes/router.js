import express from 'express'
import { getUsersNames } from '../controllers/controllers.js'
const router = express.Router()

router.get('/users',getUsersNames)


export default router