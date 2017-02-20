angular.module('oscr.foodPoints', [])
.controller('foodpointController', ($scope, $http, $location) => {
  $scope.addLoc = function () {
    const location = $scope.location;
    $scope.location = '';
    return $http({
      method: 'POST',
      url: '/foodpoints',
      data: { location },
    })
    .then(() => {
      $location.path('/hub');
    })
    .catch((error) => {
      console.error(error);
    });
  };
});
