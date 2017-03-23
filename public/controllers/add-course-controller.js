var app = angular.module("scotchApp");

app.controller("addCourseController", ["$scope", "syllabiService", function ($scope, syllabiService) {

    syllabiService.getAllSyllabi().then(function(response) {
        $scope.syllabi = response.data
    })

    $scope.addCourseToStudent = function (syllabus) {
        console.log(syllabus)
    }


}]);