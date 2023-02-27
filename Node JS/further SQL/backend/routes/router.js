import express from 'express';
import { getProductsPaginate, getAllProducts, createNewProduct, getProductById, updateProductById, deleteProductById, routeNotFound } from '../controllers/controllers.js';
const router = express.Router();

function middlewareTest(req, res, next) {
    if (!req.query.page || !req.query.size) {
        res.status(400).json({
            message: 'Page or size is missing'
        })
    } else {
        next();
        
    }

}

router.get('/products/pageination', middlewareTest,getProductsPaginate)

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