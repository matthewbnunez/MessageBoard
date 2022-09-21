const UserController = require('../controllers/user.controller');
const PostController = require('../controllers/post.controller');
const {authenticate} = require('../config/jwt.config')
<<<<<<< HEAD
const {authenticate} = require('../config/jwt.config')
=======
const PostController = require('../controllers/post.controller');
>>>>>>> 9daf97bbd81f33403a502cdd62dee52ca267b7e5
module.exports = function(app){
    app.get('/api', UserController.index);
    app.post('/api/users', UserController.createUser);
    app.get('/api/users', UserController.getAllUser);
    app.get('/api/users/:id', UserController.getUser);
    app.put('/api/users/:id', UserController.updateUser);
    app.delete('/api/users/:id', UserController.deleteUser);

    // app.get("/api/posts/:userId", PostController.postsOfOneUser);
    app.post("/api/posts", PostController.addPost);
    app.get("/api/posts", PostController.allPosts);
    app.delete('/api/posts/:id', PostController.deletePost);

}

