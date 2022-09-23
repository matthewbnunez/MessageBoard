const UserController = require('../controllers/user.controller');
const PostController = require('../controllers/post.controller');
const {authenticate} = require('../config/jwt.config')

module.exports = function(app){
    app.get('/api', UserController.index);
    app.post('/api/users', UserController.createUser);
    app.get('/api/users', UserController.getAllUser);
    app.get('/api/users/:id', UserController.getUser);
    app.put('/api/users/:id', UserController.updateUser);
    app.delete('/api/users/:id', UserController.deleteUser);

    app.get("/api/users/:userId/posts", UserController.getAllPosts);
    app.get("/api/posts/:id", PostController.postsOfOneUser);
    app.post("/api/posts/:id", PostController.addPost);
    app.get("/api/posts", PostController.allPosts);
    // app.get('/api/posts/:id', PostController.getPost);
    // app.put('/api/posts/:id', PostController.updatePost);
    app.delete('/api/posts/:id', PostController.deletePost);

}

