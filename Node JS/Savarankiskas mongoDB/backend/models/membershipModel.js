import mongoose from 'mongoose'

const membershipSchema = new mongoose.Schema({
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

const membershipModel = mongoose.model('Membership', membershipSchema);

export default membershipModel
