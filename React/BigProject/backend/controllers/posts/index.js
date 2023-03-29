import PostModel from '../../db/PostModel.js';
import mongoose from 'mongoose';

export async function createNewPost(req, res) {
  try {
    const { body, userId } = req.body;
    console.log(userId);

    if (userId && body) {
      const newPost = {
        body,
        userId: new mongoose.Types.ObjectId(userId),
      };

      const post = await PostModel.create(newPost);

      res.json(post);
    } else {
      res.status(400).json({
        message: `Invalid user ID or body: userId - ${userId} body - ${body}`,
      });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
}

export async function deletePostById(req, res) {
  try {
    const { id } = req.params;

    const deleteRes = await PostModel.findOneAndDelete(id);

    res.json(deleteRes);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
}
