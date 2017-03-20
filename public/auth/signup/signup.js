var app = angular.module("scotchApp.Auth");

app.controller("SignupController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {
    $scope.passwordMessage = "";

    $scope.signup = function (user) {
        if (user.password !== $scope.passwordRepeat) {
            $scope.passwordMessage = "Passwords do not match.";
        } else {
            UserService.signup(user).then(function (response) {
                $location.path("/login");
            }, function (response) {
                alert("All fields required!");
            });
        }
    }
}]);