console.log('inside user.js models');
var mongoose = require('mongoose');
var Email = require('mongoose-type-mail')
var Schema = mongoose.Schema;


var UserSchema = new mongoose.Schema({
 first_name: {type: String}, // the type of object id -> this will be count when returned back as an array at findOne
 last_name:  {type: String},
 gender: {type: String},
 comment:{type: String},
 image: [{ type: String}],
 telephone: { type: Number},
 email: { type: Email, minlength: 2},
 _visits: [{
     type: Schema.Types.ObjectId, 
     ref: 'visit'
    }]
}, {timestamps: true});

//setter-> sets the rename model
const User = mongoose.model('User', UserSchema);
module.exports = User;

//renameSchema is the DB you are putting your information in

