import Post from '/additional task/models/postModel.js'


export async function createNewPost(req,res) {

}

export async function getAllPosts(req,res) {
    const posts = await Post.find({})
}