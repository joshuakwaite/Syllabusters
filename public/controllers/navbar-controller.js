angular.module("scotchApp")

.controller("navbarController", ["$scope", "$localStorage", "httpService", "syllabiService", "UserService", "authService", function ($scope, $localStorage, httpService, syllabiService, UserService, authService) {

    $scope.syllabiService = syllabiService;

    if (UserService.isAuthenticated() === true) {
        syllabiService.getSyllabi();
        $scope.user = $localStorage.syllabusterUser;
    }

    $scope.$on('$locationChangeStart', function () {
        if (UserService.isAuthenticated() === true) {
            $scope.user = $localStorage.syllabusterUser;

        }
    });

    $scope.populate = function (object) {
        syllabiService.getOneSyllabus(object)
    };
}]);