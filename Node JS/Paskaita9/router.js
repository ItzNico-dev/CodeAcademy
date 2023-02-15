import express from "express";
import{ getAllUsers, deleteById, deleteAllByName, softDeleteById, deletePArameterFromAll, createNewUser } from './controller.js'
const router = express.Router()

// 1 delete by id
// 2 delete all by name
// 3 soft delete
// 4 delete parameter from all/some

router.delete('/user/:id', deleteById)
router.delete('/user/name/:name', deleteAllByName)
router.delete('/user/soft/:id',softDeleteById)
router.delete('/user/param/:param', deletePArameterFromAll)

router.post('/user', createNewUser)

router.get('/users', getAllUsers)
export default router