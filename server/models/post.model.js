const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PostSchema = new Schema({
    content:{
        type: String,
        required: [true, "Content is required"],
        minlength: [3, "Content must be at least 3 characters"]
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps: true})


module.exports.Post = mongoose.model('Post', PostSchema)