var scotchApp = angular.module('scotchApp', ['ngRoute']);

scotchApp.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

        .when('/syllabus', {
            templateUrl: 'pages/syllabus.html',
            controller: 'syllabusController'
        })

        .when('/weekView', {
            templateUrl: 'pages/weekView.html',
            controller: 'weekController'
        })

        .when('/input', {
            templateUrl: 'pages/input.html',
            controller: "inputController"
        });
});

scotchApp.controller('mainController', function ($scope) {
    $scope.message = "Something cool to say about the Syllabuster";
});

scotchApp.controller('syllabusController', function ($scope) {
    $scope.message = "Day view below";
});

scotchApp.controller('weekController', function ($scope) {
    $scope.message = "Week view below";
});

scotchApp.controller('loginController', function ($scope) {
    $scope.message = "Login below";
});

scotchApp.controller('signupController', function ($scope) {
    $scope.message = "Signup below";
});

