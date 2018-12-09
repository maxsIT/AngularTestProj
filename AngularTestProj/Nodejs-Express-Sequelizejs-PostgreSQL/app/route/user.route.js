module.exports = function(app) {
    const users = require('../controller/user.controller.js');
 
    app.post('/api/users', users.create);
 
    app.get('/api/users', users.findAll);
 
    app.get('/api/users/:id', users.findById);
 
    app.put('/api/users', users.update);
 
    app.delete('/api/users/:id', users.delete);
}