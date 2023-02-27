import express from 'express';
import { getProductsPaginate, getAllProducts, createNewProduct, getProductById, updateProductById, deleteProductById, routeNotFound } from '../controllers/controllers.js';
const router = express.Router();

router.get('/products/pageination',getProductsPaginate)

// Pasiimma visus produktus
router.get('/products', getAllProducts)

// Pasiimam viena produkta pagal ID
router.get('/products/:id', getProductById)

// sukursim nauja produkta
router.post('/products', createNewProduct)

// atnaujinsim viena produkta paga ID
router.put('/products/:id', updateProductById)

// istrinam viena produkta pagal ID
router.delete('/products/:id', deleteProductById)

router.all('*', routeNotFound)

export default router;