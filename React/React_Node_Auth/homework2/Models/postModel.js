import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: { type: String },
  author: { type: String },
  createdAt: { type: String },
  updatedAt: { type: String },
});

const postModel = mongoose.model('Post', postSchema);

export default postModel;
