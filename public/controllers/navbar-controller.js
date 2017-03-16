angular.module("scotchApp")

.controller("navbarController", ["$scope", "httpService", "syllabiService", function($scope, httpService, syllabiService){

    $scope.syllabi = httpService.getSyllabi().then(function (response) {
        $scope.name = response.data;
        return response.data.name

    });

    $scope.populate = function(object) {
        console.log(object)
        syllabiService.saveCourse(object)
    }

}]);