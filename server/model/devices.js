var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var deviceSchema = new Schema({
  name: String,
  model: String,
  description: String,
  isFresh: Boolean
});

// make this available to our Node application
module.exports = mongoose.model('Device', deviceSchema);
