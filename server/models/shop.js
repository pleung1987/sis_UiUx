console.log('inside shop.js models');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ShopSchema = new mongoose.Schema({
 brand: {type:String, required: true},
 branch: {type:String, required: true},
 address: { type: String, minlength: 2},
 _cameras: [{
     type: Schema.Types.ObjectId, 
     ref: 'Camera'
    }]
}, {timestamps: true}, {usePushEach: true});


const Shop = mongoose.model('Shop', ShopSchema);
module.exports = Shop;
