import mongoose from "mongoose"

const PetSchema = mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        maxLength: 10,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 1,
        max: 30
    },
    createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
})

const PetModel = mongoose.model('pets', PetSchema)

export default PetModel