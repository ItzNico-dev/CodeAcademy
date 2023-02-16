import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    author: String,
    content: String,
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    }
})

const postModel = mongoose.model('/Post', postSchema)

export default postModel