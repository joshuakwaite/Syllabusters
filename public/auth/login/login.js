var app = angular.module("scotchApp.Auth");

app.controller("LoginController", ["$scope", "$location", "UserService", "authService", function ($scope, $location, UserService, authService) {

    $scope.login = function (user) {
        UserService.login(user).then(function (response) {
            authService.saveSyllabi();
            $location.path("/home");
        }, function (response) {
            alert(response.data.message);
        });
    }
}]);