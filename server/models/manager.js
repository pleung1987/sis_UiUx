console.log('inside manager.js models');
var mongoose = require('mongoose');
var Email = require('mongoose-type-mail');
var Schema = mongoose.Schema;
const bcrypt = require('bcrypt');


var ManagerSchema = new mongoose.Schema({
 first_name: {type:String, required: true},
 last_name: {type:String, required: true},
 email: { type: Email, minlength: 2},
 password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 150,
    validate: {
      validator: function( value ) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
      },
      message: "Password failed validation, you must have at least 1 number, uppercase and special character"
      }
    },
 company: {
    type: String,
    required: true 
    }, 
 _cameras: [{
        type: Schema.Types.ObjectId, 
        ref: 'Camera'
    }]
}, {timestamps: true}, {usePushEach: true});

ManagerSchema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

ManagerSchema.methods.validPassword = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
}

const Manager = mongoose.model('Manager', ManagerSchema);
module.exports = Manager;
