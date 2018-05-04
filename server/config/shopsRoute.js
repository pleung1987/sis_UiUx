console.log('got to the shopRoutes.js file');

const mongoose = require('mongoose'),
    path = require('path'),
    express = require('express'),
    // router = express.Router(),
    router = require('express-promise-router')(),
//getter -gets the model
    Shop = mongoose.model('Shop') ,
    shops = require('./../controllers/shops')
    
router.route('/')
    .get(shops.index)

router.route('/:shopId')
    .get(shops.show)   
    .patch(shops.updateShop)
    .put(shops.setShop)

module.exports = router; 