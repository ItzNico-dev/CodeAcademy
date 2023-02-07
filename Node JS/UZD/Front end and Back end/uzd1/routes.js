import express from "express"
import cars from "../db.js"
const router = express()

router.get('/', (req,res) => {
    res.json(cars)
})

router.post('/', (req,res) => {
    const { make } = req.body

    cars.push(make)

    res.json({
        success: true
    })
})

export default router