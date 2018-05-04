console.log('got to the visitRoute.js file');

const mongoose = require('mongoose'),
    path = require('path'),
// getter -gets the model
    Visit = require('../models/visit'),
    visits = require('./../controllers/visits')
    

module.exports = function(app){
    app.get('/visits/:id', function(req,res){
        visits.show(req,res)
    });
    app.get('/visits', function(req,res){
        visits.getVisitor(req,res)
    });
    app.post('/visits', function(req,res){
        visits.create(req,res)
    });       
};  