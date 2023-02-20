import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

const serviceModel = mongoose.model('Service', serviceSchema);

export default serviceModel