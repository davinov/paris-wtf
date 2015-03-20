angular.module('paris.wtf', [
  'ng',
  'ngRoute',
  'ngAnimate',
  'ngSanitize'
])

.config(function ($routeProvider) {
  $routeProvider
  .when('/',{
    controller: 'WTFController',
    templateUrl: 'templates/wtf.html',
    resolve: {
      wtf: function WTFResolver(WTFRetriever) {
        return WTFRetriever;
      }
    }
  })
  .otherwise('/');
})

.controller('WTFController', function WTFController($scope, wtf) {
  $scope.wtf = wtf.data;
})

.factory('WTFRetriever', function WTFRetriever($http) {
  return $http.get('json/15-03-20-eclipse.json');
});
