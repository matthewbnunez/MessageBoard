const { User } = require('../models/user.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createUser = (request, response) => {
    const { firstName, lastName, email, posts } = request.body;
    User.create({
        firstName,
        lastName,
        email,
        // password,
        posts
    })
        .then(user => response.json(user))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllUser = (request, response) => {
    User.find({})
        .then(users => response.json(users))
        .catch(err => response.status(400).json(err))
}

module.exports.getUser = (request, response) => {
    User.findOne({_id:request.params.id})
        .then(user => response.json(user))
        .catch(err => response.status(400).json(err))
}

module.exports.updateUser = (request, response) => {
    User.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
        .then(updatedUser => response.json(updatedUser))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteUser = (request, response) => {
    User.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json(err))
}

module.exports.getAllPosts = (req, res) => {
    User.findOne({_id: req.params.userId}).populate('posts')
        .then(foundUser=>res.json(foundUser))
        .catch(err=>res.status(400).json(err))
}