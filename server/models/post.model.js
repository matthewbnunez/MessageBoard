
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PostSchema = new Schema({
    user: {
        type: String,
        required: [true, "User is required"],
        minlength: [3, "User must be at least 3 characters"]
    },
    content:{
        type: String,
        required: [true, "Content is required"],
        minlength: [3, "Content must be at least 3 characters"]
    }  
},{timestamps: true})


module.exports.Post = mongoose.model('Post', PostSchema)