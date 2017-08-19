var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  author: {
    type: String,
    ref: 'users',
    required: true
  }
});

module.exports = mongoose.model('user', UserSchema);
