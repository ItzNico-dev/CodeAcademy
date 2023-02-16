import express from 'express'
import { getAllCategories, getProducts } from './controllers.js'
const router = express.Router()

router.get('/Categories', getAllCategories)
router.get('/Products', getProducts)

export default router