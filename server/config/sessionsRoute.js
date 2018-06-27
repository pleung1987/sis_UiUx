console.log('got to the sessionsRoute.js file');

const mongoose = require('mongoose'),
    path = require('path'),
    express = require('express'),
    // router = express.Router(),
    //getter -gets the model
    sessions = require('./../controllers/sessions'),
    Manager = require('../models/manager')
    

module.exports = function(app){

    // app.get('/sessions', function(req,res){
    //     sessions.index(req,res)
    // });
    app.post('/register', function(req,res){
        sessions.register(req,res)
    });

    app.post('/login', function(req,res){
        sessions.login(req,res)
    });

};  