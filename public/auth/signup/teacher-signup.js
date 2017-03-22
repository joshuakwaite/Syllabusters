var app = angular.module("scotchApp.Auth");

app.controller("TeacherSignupController", ["$scope", "UserService", function ($scope, UserService) {

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