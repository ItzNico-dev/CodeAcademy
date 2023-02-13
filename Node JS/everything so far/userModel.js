import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 70,
    required: true,
  },
  lastName: {
    type: String,
    minLength: 4,
    maxLength: 70,
    required: true,
  },
  age: {
    type: Number,
    min: 1,
    max: 100,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

const UserModel = mongoose.model('users', UserSchema);

export default UserModel;