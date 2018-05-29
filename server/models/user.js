console.log('inside user.js models');
var mongoose = require('mongoose');
var Email = require('mongoose-type-mail')
var Schema = mongoose.Schema;


var UserSchema = new mongoose.Schema({
 byte_stream: { type: [Number], required:true },
 first_name: {type: String},
 last_name:  {type: String},
 gender: {type: String},
 comment:{type: String},
 faceImage: [{ type: String}],
 telephone: { type: Number},
 email: { type: Email, minlength: 2},
 vip: { type: Boolean, default: false},
 blacklist: {type: Boolean , default: false},
 showEditForm: {type: Boolean , default: false},
 _visits: [{
     type: Schema.Types.ObjectId, 
     ref: 'Visit',
    }]
}, {timestamps: true}, {usePushEach: true});

//setter-> sets the rename model
const User = mongoose.model('User', UserSchema);
module.exports = User;
