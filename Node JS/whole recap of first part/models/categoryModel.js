import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    title: String,
    description: String
})

const categoryModel = mongoose.model('Categories', categorySchema)

export default categoryModel