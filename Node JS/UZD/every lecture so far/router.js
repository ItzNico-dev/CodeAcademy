import express from 'express'
import { getAllData } from './controller.js'
const router = express.Router()

router.get('/', getAllData )

export default router