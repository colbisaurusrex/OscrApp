var Q = require('q');
var foodPoint = require('./foodpointModel.js');

var findFoodPoint = Q.nbind(foodPoint.findOne, foodPoint)

module.exports = {
  createEntry: (req, res) => {
    findFoodPoint({address: req.body.location})
    .then(function(match){
      if(match){
        match.update({$set:{reports: (match.reports +=1)}})
        .then(function(){
          res.send(match)
        })
        
      } else {

      new foodPoint({
      address: req.body.location,
      reports: 1,
      claimed: false

    })
   .save()
   .then(() => {
      //must end transaction in some way
      res.sendStatus(201)
   })
      }
    })

   .catch((error) => {
      console.error(error)
   })
  }
}