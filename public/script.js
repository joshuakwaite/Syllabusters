var scotchApp = angular.module('scotchApp', ['ngRoute']);

scotchApp.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'mainController'
    })

    .when('/dayView', {
        templateUrl: 'pages/dayView.html',
        controller: 'dayController'
    })
    
    .when('/weekView', {
        templateUrl: 'pages/weekView.html',
        controller: 'weekController'
    })
    
        .when('/login', {
        templateUrl: 'pages/login.html',
        controller: 'loginController'
    })
    
        .when('/signup', {
        templateUrl: 'pages/signup.html',
        controller: 'signupController'
    });
});

