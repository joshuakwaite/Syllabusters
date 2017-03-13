var scotchApp = angular.module('scotchApp', ['ngRoute']);

scotchApp.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'mainController'
    })

    .when('/routeOne', {
        templateUrl: 'pages/routeOne.html',
        controller: 'oneController'
    })
    
    .when('/routeTwo', {
        templateUrl: 'pages/routeTwo.html',
        controller: 'twoController'
    })
    
        .when('/routeThree', {
        templateUrl: 'pages/routeThree.html',
        controller: 'threeController'
    })
    
        .when('/routeFour', {
        templateUrl: 'pages/routeFour.html',
        controller: 'fourController'
    });
});

scotchApp.controller('mainController', function ($scope) {
    $scope.message = "Something cool to say about the Syllabuster";
});

scotchApp.controller('oneController', function ($scope) {
    $scope.message = "Oh look, it's route one!";
});

scotchApp.controller('twoController', function ($scope) {
    $scope.message = "Route two, yo!";
});

scotchApp.controller('threeController', function ($scope) {
    $scope.message = "Cheers to route three!";
});

scotchApp.controller('fourController', function ($scope) {
    $scope.message = "Route four, at your service";
});