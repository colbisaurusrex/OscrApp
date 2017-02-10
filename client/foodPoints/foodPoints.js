angular.module('oscr.foodPoints', [])
.controller('foodpointController', function($scope, $http, $location) {

  $scope.addLoc = function(){
    var location = $scope.location
    $scope.location = '';
    return $http({
      method: 'POST',
      url: '/foodpoints',
      data: {location: location}
    })
    .then( () => {
     $location.path('/hub')
    })
    .catch( (error) => {
      console.error(error)
    })
  }
})