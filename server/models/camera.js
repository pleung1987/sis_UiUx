console.log('inside camera.js models');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CameraSchema = new mongoose.Schema({
 mac_addr: {type:String, required: true},
 location: { type: String, minlength: 2},
 _visits: [{
     type: Schema.Types.ObjectId, 
     ref: 'Visit'
    }],
 _shop: {
    type: Schema.Types.ObjectId, 
    ref: 'Shop'
   }
}, {timestamps: true}, {usePushEach: true});

const Camera = mongoose.model('Camera', CameraSchema);
module.exports = Camera;
