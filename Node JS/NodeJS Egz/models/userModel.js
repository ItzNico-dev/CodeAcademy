import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 70,
    required: true,
  },
  username: {
    type: String,
    minLength: 4,
    maxLength: 255,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    street: {
      type: String,
      minLength: 5,
      maxLength: 255,
      required: true,
    },
    suite: {
      type: String,
      minLength: 5,
      maxLength: 255,
    },
    city: {
      type: String,
      minLength: 4,
      maxLength: 255,
      required: true,
    },
    zipcode: {
      type: String,
      minLength: 10,
      maxLength: 11,
      required: true,
    },
    geo: {
      lat: {
        type: String,
        minLength: 8,
        maxLength: 10,
      },
      lng: {
        type: String,
        minLength: 8,
        maxLength: 10,
      },
    },
  },
  phone: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  company: {
    name: {
      type: String,
      minLength: 5,
      maxLength: 255,
      required: true,
    },
    catchPhrase: {
      type: String,
      minLength: 5,
      maxLength: 255,
    },
    bs: {
      type: String,
      minLength: 5,
      maxLength: 255,
    },
  },
});

const UserModel = mongoose.model('users', UserSchema);

export default UserModel;
