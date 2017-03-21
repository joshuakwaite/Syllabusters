angular.module("scotchApp")

.controller("navbarController", ["$scope", "httpService", "syllabiService", function ($scope, httpService, syllabiService) {

    httpService.getSyllabi().then(function (response) {
        $scope.name = response.data;
        return response.data.name
    });

    $scope.$on('$locationChangeStart', function () {
        httpService.getSyllabi().then(function (response) {
            $scope.name = response.data;
            return response.data.name
        });
    });

    $scope.populate = function (object) {
        syllabiService.saveCourse(object);
        var objectTest = object;
        $scope.test = objectTest.name
    };

    $scope.test = "Select Syllabus"

}]);