// MODULE
var angularApp = angular.module('angularApp', ['ngRoute']);

angularApp.config(function($routeProvider){
    //$routeProvider specifies routes
    $routeProvider
    
    .when('/',{
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second',{
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    .when('/second/:num',{
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});


angularApp.service('nameService', function(){
    var self = this;
    this.name = 'John Doe';
    this.namelength = function(){
        return self.name.length;
    }
});


// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', 'nameService',function ($scope, $log, nameService) {

  $scope.name = nameService.name;
    $scope.uzunluq = nameService.namelength();
    
    $scope.$watch('name', function(){
        nameService.name = $scope.name;
    });
    
    $log.log(nameService.name);
    $log.log(nameService.namelength());
    
    
    $scope.people = [{
        name: 'John Doe',
        city: '55 baku' ,
        country: 'azerbaijan',
        zip: 'az1023'
    },
    {
        name: 'Jane Doe',
        city: '55 asdasd' ,
        country: 'asdasdasda',
        zip: 'az10erter23'
    },
    {
        name: 'John Doe',
        city: 'gg gu' ,
        country: 'hrfbfgg',
        zip: 'az1dfgdf023'
    }
    ]
    $scope.formattedAddress = function(person){
        return person.city + ", " + person.country + ", " + person.zip;
    };
    
}]);

angularApp.controller('secondController', ['$scope', '$log','$routeParams', 'nameService', function ($scope, $log, $routeParams, nameService) {

    $scope.num = $routeParams.num || 1;
      $scope.name = nameService.name;
        $scope.$watch('name', function(){
        nameService.name = $scope.name;
    });
}]);



angularApp.directive("searchResult", function(){
    return {
    //This object is gonna be directive
        restrict: 'AECM',
        templateUrl: 'directives/searchresult.html',
        replace: true,
        scope:{
            personObject: "=",
            formattedAddressFunction: "&"
        }
    }
});


