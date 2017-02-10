var Q = require('q')

var foodPoint = require('../foodpoint/foodpointModel.js');

var findFoodPoint = Q.nbind(foodPoint.findOne, foodPoint)

module.exports = {
  findEntries: (req, res) => {
   foodPoint.find({})
   .limit(10)
   .exec( (err, locations) => {
    if(err) {
      console.error(err)
    }
    res.json({locations: locations})
   })
  },

  updateClaim: (req, res) => {
    findFoodPoint({_id: req.body.id})
    .then(function(match){
      if(match) {
        match.update({claimed: !match.claimed })
        
        .then(function(){
            res.send(match)
        })
  
      } else {
        res.sendStatus(201)
      }
    })
  }

}