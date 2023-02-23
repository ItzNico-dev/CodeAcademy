import express from 'express'
const router = express.Router()
import { getAllProducts, getProductById, createNewProducts, updateProductById, deleteProductById } from '../controllers/controllers.js'

// get all products

router.get('/products', getAllProducts)

//get product by id

router.get('/products/:id', getProductById)

//create new product

router.post('/products', createNewProducts)

//update by id

router.put('/products/:id', updateProductById)

// delete by id

router.delete('/products/:id', deleteProductById)

export default router