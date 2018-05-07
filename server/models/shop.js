console.log('inside shop.js models');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const arrayUniquePlugin = require('mongoose-unique-array');


var ShopSchema = new mongoose.Schema({
 brand: {type:String, required: true},
 branch: {type:String, required: true},
 address: { type: String, minlength: 2},
 _cameras: [{
     type: Schema.Types.ObjectId, 
     ref: 'Camera',
     unique: true,
     sparse: true
    }]
}, {timestamps: true}, {usePushEach: true});

ShopSchema.plugin(arrayUniquePlugin);
const Shop = mongoose.model('Shop', ShopSchema);
module.exports = Shop;
