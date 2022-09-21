const UserController = require('../controllers/user.controller');
const {authenticate} = require('../config/jwt.config')

module.exports = function(app){
    app.get('/api', UserController.index);
    app.post('/api/user', UserController.createUser);
    app.get('/api/user', UserController.getAllUser);
    app.get('/api/user/:id', UserController.getUser);
    app.put('/api/user/:id', UserController.updateUser);
    app.delete('/api/user/:id', UserController.deleteUser);
}

