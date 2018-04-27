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
    visited: { type: Date }
}, { usePushEach: true });

const Visit = mongoose.model('Visit', visitSchema);

module.exports = Visit; 