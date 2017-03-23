var scotchApp = angular.module('scotchApp', ['ngRoute', 'scotchApp.Auth', 'ngSanitize', 'ngStorage']);

scotchApp.config(function ($routeProvider) {
    $routeProvider

        .when('/home', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })

        .when('/syllabus', {
            templateUrl: 'pages/syllabus.html',
            controller: 'syllabusController'
        })

        .when('/weekView', {
            templateUrl: 'pages/weekView.html',
            controller: 'weekController'
        })

        .when("/superClever", {
            templateUrl: "pages/modal.html",
            controller: "modalController"
        })
        .when('/input', {
            templateUrl: 'pages/input.html',
            controller: "inputController"
        })
        .when('/combine', {
            templateUrl: 'pages/combine.html',
            controller: "combineController"
        })
        .when('/fullsyllabus', {
            templateUrl: 'pages/view-syllabus.html',
            controller: "viewSyllabusController"
        })
        .when('/addCourse', {
            templateUrl: 'pages/add-course.html',
            controller: "addCourseController"
        })
        .when('/removeCourse', {
            templateUrl: 'pages/remove-course.html',
            controller: "addCourseController"
        });
});


scotchApp.directive("navbar", ["UserService", function (UserService) {
    return {
        templateUrl: "navbar/navbar.html",
        controller: "navbarController",
        link: function (scope) {
            scope.userService = UserService;
        }
    }
}]);

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});


