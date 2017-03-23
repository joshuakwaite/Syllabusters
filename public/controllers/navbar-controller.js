angular.module("scotchApp")

.controller("navbarController", ["$scope", "$localStorage", "httpService", "syllabiService", "UserService", "authService", function ($scope, $localStorage, httpService, syllabiService, UserService, authService) {

    if (UserService.isAuthenticated() === true) {
    httpService.getSyllabi().then(function (response) {
        $scope.name = response.data;
        return response.data.name
    });
        $scope.user = $localStorage.syllabusterUser;
        console.log($scope.user)
    }

    $scope.$on('$locationChangeStart', function () {
        if (UserService.isAuthenticated() === true) {
            httpService.getSyllabi().then(function (response) {
                $scope.name = response.data;
                return response.data.name
            });
            $scope.user = $localStorage.syllabusterUser;
            console.log($scope.user)
        }
    });

    $scope.populate = function (object) {
        syllabiService.saveCourse(object);
        $scope.test = object.name
    };

    $scope.test = "Select Syllabus"

}]);