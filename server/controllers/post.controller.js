const { Post } = require('../models/post.model');
const { User } = require("../models/user.model")


module.exports.allPosts = (req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json(err))
}

module.exports.postsOfOneUser = (req, res) => {
    Post.find({ user: req.params.userId })
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json(err))
}

module.exports.addPost = async(req, res) => {
    try{
        // add comment into Comment
        const newPost = new Post(req.body)
        newPost.user = req.params.userId
        await newPost.save()
        // pushing the newly added comment into Job
        const updatedUser = await User.findOneAndUpdate(
            {_id:req.params.userId},
            {$push : {posts : newPost}},
            {new: true}
            )
            console.log(req.params.userId)
        res.json(updatedUser)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

module.exports.deletePost = (request, response) => {
    Post.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
