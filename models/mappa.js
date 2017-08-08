var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    level: {type: Number},
    connection: {type: Schema.Types.ObjectId}
});

module.exports = mongoose.model('Mappa', schema);