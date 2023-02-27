import express from 'express'
import { getItems, addItem, removeItemById } from './controllers.js'
const router = express.Router()

router.get('/items', getItems)
router.post('/items',addItem)
router.delete('/items/:id',removeItemById)

export default router