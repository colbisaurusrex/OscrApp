var express = require('express');
var mongoose = require('mongoose');
var FoodPoint = require('./foodpoint/foodpointModel.js');
var foodpointController = require('./foodpoint/foodpointController.js')
var hubController = require('./hub/hubController.js')
var bodyParser = require('body-parser')

var app = express();
mongoose.connect('mongodb://localhost/oscrdb')



var db = mongoose.connection;
db.on('error', () => {
  console.log('error connecting/adding to database')
});
db.once('open', () => {
  console.log('database connected')
});

app.use(bodyParser.json())

app.post('/foodpoints', foodpointController.createEntry)
app.get('/hub', hubController.findEntries)
app.post('/hub', hubController.updateClaim)


var port = 8000
app.listen(port);app.use(express.static('./../client'))

module.exports = app;