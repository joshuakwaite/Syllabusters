var scotchApp = angular.module('scotchApp', ['ngRoute', 'scotchApp.Auth']);

scotchApp.config(function ($routeProvider) {
    $routeProvider

        .when('/home', {
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
});



scotchApp.directive("navbar", ["UserService", function (UserService) {
    return {
        templateUrl: "navbar/navbar.html",
        link: function (scope) {
            scope.userService = UserService;
        }
    }
}]);

