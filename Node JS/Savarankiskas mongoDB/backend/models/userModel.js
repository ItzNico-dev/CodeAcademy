import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  service_id: { type: Number, required: true },
});

const userModel = mongoose.model('User', userSchema);

export default userModel
