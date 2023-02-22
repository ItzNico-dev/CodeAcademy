import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  service_id: { type: mongoose.Schema.Types.ObjectId, required: true },
});

const userModel = mongoose.model('User', userSchema);

export default userModel
