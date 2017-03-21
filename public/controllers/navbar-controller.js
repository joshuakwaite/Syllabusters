angular.module("scotchApp")

.controller("navbarController", ["$scope", "httpService", "syllabiService", function($scope, httpService, syllabiService){

    $scope.syllabi = httpService.getSyllabi().then(function (response) {
        $scope.name = response.data;
        return response.data.name

    });

    $scope.populate = function(object) {
        syllabiService.saveCourse(object)
        console.log(object)
        var objectTest = object
        $scope.test = objectTest.name
    }
    
    $scope.test = "Select Syllabus"

}]);