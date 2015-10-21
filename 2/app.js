// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope','$filter','$timeout', function ($scope, $filter,$timeout) {
    $scope.handle = '';
    $scope.lowercasehandle = function () {
      return $filter('lowercase')($scope.handle);                                   
    };
    $scope.characters = 5;
    
    var rulesrequest = new XMLHttpRequest();
    
    
    
}]);



