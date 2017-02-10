angular.module('oscr', ['ngRoute','oscr.foodPoints', 'oscr.hub'])
.config(function($routeProvider){
  $routeProvider
  .when('/hub', {
    templateUrl: '/hub/hub.html',
    controller: 'hubController'
  })
  .when('/', {
    templateUrl:'/foodPoints/foodpoints.html',
    controller: 'foodpointController'
  })
})