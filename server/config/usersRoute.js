console.log('got to the userRoute.js file');

const mongoose = require('mongoose'),
    path = require('path'),
//getter -gets the model
    User = mongoose.model('User') ,
    users = require('./../controllers/users')

module.exports = function(app){
    app.get('/users', (req, res) => {
        users.index(req,res)
    })

    app.get('/users/:userId', function(req,res){
        users.show(req,res)
    });

    app.patch('/users/:userId', function(req,res){
        users.updateUser(req,res)
    });

    app.put('/users/:userId', function(req,res){
        // console.log('got to the put function of user ID: ', req.body._id);
        users.setUser(req,res)
    });

    app.delete('/users/:userId', function(req,res){
        console.log('got to the userRoute Delete function with Id: ',req.params.userId);
        users.deleteUser(req,res)
    });
};  