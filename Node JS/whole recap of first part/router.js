import express from 'express'
import { getAllCategories, getProductsWithCategories, getCategoryValue } from './controllers.js'
const router = express.Router()

router.get('/Categories', getAllCategories)
router.get('/Products', getProductsWithCategories)
router.get('/categoryValue', getCategoryValue)

export default router