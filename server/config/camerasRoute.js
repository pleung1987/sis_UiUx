console.log('got to the CameraRoute.js file');

const mongoose = require('mongoose'),
    path = require('path'),
    express = require('express'),
    // router = express.Router(),
    router = require('express-promise-router')(),
//getter -gets the model
    Camera = mongoose.model('Camera') ,
    Visit = require('../models/visit'),
    cameras = require('./../controllers/cameras'),
    visits = require('./../controllers/visits')


router.route('/')
    .get(cameras.index)
    .post((req,res,next) => {
        const newCamera = new Camera({
            _id: new mongoose.Types.ObjectId(),
        });
        console.log('newCamera:', newCamera);
        newCamera
            .save()
            .then(camera => {
                console.log('Success creating camera:', camera);
                res.status(201).json({
                    message: 'Success creating camera',
                    camera: camera
                })
            })
            .catch(err =>{
                console.log('error happened', err);
                next(err)
            })
    });

router.route('/:cameraId')
    .get(cameras.show)   
    .put(cameras.replaceCamera)
    .patch(cameras.updateCamera)


module.exports = router; 