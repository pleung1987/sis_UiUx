console.log('inside the visit.js models');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var visitSchema = new mongoose.Schema({
    _visitor : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    _camera: {
        type: Schema.Types.ObjectId,
        ref: 'Camera'
    },
    visited: { type: Date },
    new_byte_stream: { type: [Number], required:true },
    distance: { type: Number}
}, { usePushEach: true });

const Visit = mongoose.model('Visit', visitSchema);

module.exports = Visit; 