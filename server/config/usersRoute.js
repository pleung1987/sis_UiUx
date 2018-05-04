console.log('got to the userRoute.js file');

const mongoose = require('mongoose'),
    path = require('path'),
    express = require('express'),
    // router = express.Router(),
    router = require('express-promise-router')(),
//getter -gets the model
    User = mongoose.model('User') ,
    users = require('./../controllers/users')
    
router.route('/')
    .get(users.index)

router.route('/:userId')
    .get(users.show)   
    .patch(users.updateUser)
    .put(users.setUser)

module.exports = router; 