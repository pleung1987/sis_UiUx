console.log('inside the visit.js models');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var visitSchema = new mongoose.Schema({
    _visitor : {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    _camera: {
        type: Schema.Types.ObjectId,
        ref: 'camera'
    },
    visited: { type: Date, default: Date.now}
});

const Visit = mongoose.model('visit', visitSchema);

module.exports = Visit;