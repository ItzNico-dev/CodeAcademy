
import express from 'express'
import { getAllMemberships, postNewMembership, deleteMembershipById, getUsersByOrder,postANewUser } from '../controllers/controllers.js'
const router = express.Router()


router.get('/memberships', getAllMemberships)
router.post('/memberships', postNewMembership)
router.delete('/memberships/:id', deleteMembershipById)
router.get('/users/:order', getUsersByOrder)
router.post('/users/', postANewUser)

export default router