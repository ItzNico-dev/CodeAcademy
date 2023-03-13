import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 70,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
});

const userModel = mongoose.model('users', UserSchema);

export default userModel;