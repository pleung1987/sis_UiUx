console.log('got to the angularRoutes.js file');

var mongoose = require('mongoose'),
    path = require('path'),
    express = require('express'),
    app = express(),
    router = express.Router(),
    // router = require('express-promise-router')(),
//getter -gets the model
    User = mongoose.model('User') ,
    users = require('./../controllers/users'),
    Visit = require('../models/visit'),
    visits = require('./../controllers/visits'),
    Camera = mongoose.model('Camera') ,
    cameras = require('./../controllers/cameras'),
    Shop = mongoose.model('Shop') ,
    shops = require('./../controllers/shops')


module.exports = function(app){
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve('./Angular-app/dist/index.html'))
    });
}