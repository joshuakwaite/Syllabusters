var scotchApp = angular.module('scotchApp', ['ngRoute', 'scotchApp.Auth']);

scotchApp.config(function ($routeProvider) {
    $routeProvider

        .when('/home', {
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




scotchApp.directive("navbar", ["UserService", function (UserService) {
    return {
        templateUrl: "navbar/navbar.html",
        link: function (scope) {
            scope.userService = UserService;
        }
    }
}]);

