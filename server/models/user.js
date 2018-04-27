console.log('inside user.js models');
var mongoose = require('mongoose');
var Email = require('mongoose-type-mail')
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;


var UserSchema = new mongoose.Schema({
 byte_stream: { type: Array, required:true },
 first_name: {type: String},
 last_name:  {type: String},
 gender: {type: String},
 comment:{type: String},
 image: [{ type: String}],
 telephone: { type: Number},
 email: { type: Email, minlength: 2},
 _visits: [{
     type: Schema.Types.ObjectId, 
     ref: 'Visit',
    }]
}, {timestamps: true}, {usePushEach: true});

//setter-> sets the rename model
// UserSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' })
const User = mongoose.model('User', UserSchema);
module.exports = User;

//renameSchema is the DB you are putting your information in

