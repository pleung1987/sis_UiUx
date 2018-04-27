console.log('got to the userRoute.js file');

const mongoose = require('mongoose'),
    path = require('path'),
    express = require('express'),
    // router = express.Router(),
    router = require('express-promise-router')(),
//getter -gets the model
    User = mongoose.model('User') ,
    Visit = require('../models/visit'),
    users = require('./../controllers/users'),
    visits = require('./../controllers/visits'),
    multer = require('multer'),
    storage = multer.diskStorage({
        destination: function(req, file, cb){
            cb(null,'./uploads');
        }, 
        filename: function(req, file, cb){
            cb(null, new Date().toISOString() + file.originalname);
        }
    }),
    fileFilter = (req, file, cb) => {
        //reject file
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
            cb(null, true);
        } else {
            cb(null, false);
        }
    }
    upload = multer({
        storage : storage, 
        limits: {
            fileSize: 1024 * 1024 * 5
        },
        fileFilter: fileFilter
    });


router.route('/')
    .get(users.index)
    .post(upload.single('image'), (req,res,next) => {
        const newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            gender: req.body.gender,
            comment: req.body.comment,
            image: req.file.path,
            telephone: req.body.telephone,
            email: req.body.email,
        });
        console.log('req.file:', req.file);
        console.log('newUser:', newUser);
        newUser
            .save()
            .then(user => {
                console.log('Success creating user:', user);
                res.status(201).json({
                    message: 'Success creating user',
                    user: user
                })
            })
            .catch(err =>{
                console.log('error happened', err);
                next(err)
            })
    });

router.route('/:userId')
    .get(users.show)   
    .put(users.replaceUser)
    .patch(users.updateUser)


module.exports = router; 