var mongoose = require('mongoose')


var FoodpointSchema = new mongoose.Schema({
  address: String,
  reports: Number,
  claimed: Boolean
})

module.exports = mongoose.model('FoodPoint', FoodpointSchema)