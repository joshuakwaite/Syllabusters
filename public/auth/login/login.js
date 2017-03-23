var app = angular.module("scotchApp.Auth");

app.controller("LoginController", ["$scope", "$location", "$localStorage", "UserService", "authService", function ($scope, $location, $localStorage, UserService, authService) {

    $scope.login = function (user) {
        UserService.login(user).then(function (response) {
            authService.saveSyllabi();
            $localStorage.syllabusterUser = response.data.user;
            $location.path("/home");
        }, function (response) {
            alert(response.data.message);
        });
    }
}]);