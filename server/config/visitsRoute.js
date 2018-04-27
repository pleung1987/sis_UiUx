console.log('got to the visitRoute.js file');

const mongoose = require('mongoose'),
    path = require('path'),
// getter -gets the model
    User = mongoose.model('User') ,
    Visit = require('../models/visit'),
    users = require('./../controllers/users'),
    visits = require('./../controllers/visits')
     

module.exports = function(app){
    app.get('/visits/:id', function(req,res){
        console.log('got to visits/:id route');
        visits.show(req,res)
    });

    app.get('/visits', function(req,res){
        console.log('got to the /visit route');
        
        visits.getVisitor(req,res)
    });

    app.post('/visits', function(req,res){
        visits.create(req,res)
    });
    
    
    
};  