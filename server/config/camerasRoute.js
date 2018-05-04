console.log('got to the cameraRoute.js file');

const mongoose = require('mongoose'),
    path = require('path'),
    express = require('express'),
    // router = express.Router(),
    router = require('express-promise-router')(),
//getter -gets the model
    Camera = mongoose.model('Camera') ,
    cameras = require('./../controllers/cameras')
    
router.route('/')
    .get(cameras.index)

router.route('/:cameraId')
    .get(cameras.show)   
    .patch(cameras.updateCamera)
    .put(cameras.setCamera)

module.exports = router; 