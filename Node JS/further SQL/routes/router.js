import express from 'express'
const router = express.Router()
import { getAllProducts, getProductById, createNewProducts } from '../controllers/controllers.js'

// pasiimkime visus produktus

router.get('/products', getAllProducts)

//pasiimti viena produkta pagal id

router.get('/products/:id', getProductById)

//sukurti nauja produkta

router.post('/products', createNewProducts)

//atnaujinti pagal id

router.put('/products/:id')

// istrinti pagal id

router.delete('/products/:id')

export default router