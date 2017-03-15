var app = angular.module("scotchApp.Auth");

app.controller("LogoutController", ["UserService", function (UserService) {

    UserService.logout();

}]);