import PostModel from '../../db/PostModel.js';
import mongoose from 'mongoose';

export async function createNewPost(req, res) {
  try {
    const { body, userId } = req.body;

    const newPost = {
      body,
      userId: new mongoose.Types.ObjectId(userId),
    };

    const post = await PostModel.create(newPost);

    res.json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deletePostById(req, res) {
  try {
    const { id } = req.params;

    const DBres = await PostModel.findByIdAndDelete(id);

    res.json(DBres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
