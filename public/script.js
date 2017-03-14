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

scotchApp.controller('mainController', function ($scope) {
    $scope.message = "Something cool to say about the Syllabuster";
});

scotchApp.controller('dayController', function ($scope) {
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


scotchApp.directive("navbar", ["UserService", function (UserService) {
    return {
        templateUrl: "navbar/navbar.html",
        link: function (scope) {
            scope.userService = UserService;
        }
    }
}]);
