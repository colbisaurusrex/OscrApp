angular.module('oscr.hub', ['oscr.services'])
.controller('hubController', function($scope, $http, $location, $route, mapOptions, geocoder){


  $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions.mapOptions)

  $scope.getData = function(){
    return $http({
      method: 'GET',
      url: '/hub'
    })
    .then( (data ) => {
      $scope.locations = data.data.locations;
      for(var i = 0; i < $scope.locations.length; i++) {
        geocoder.geocodeAddress($scope.map, $scope.locations[i].address)
      }
    })

  }

  $scope.claimLoc = function(){
    return $http({
      method:'POST',
      url: '/hub',
      data: {id: arguments[0]._id}
    })
    .then( () => {
      $scope.getData()
    })
  }
})