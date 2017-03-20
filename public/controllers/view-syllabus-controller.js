var app = angular.module("scotchApp");

app.controller("viewSyllabusController", ["$scope", "syllabiService", "$location", function($scope, syllabiService, $location) {

    var savedSyllabus;

    function retrieve() {
        if (syllabiService.returnSavedCourse() == undefined) {
            alert("Please select a course");
            $location.path("/home");
        } else {
            var course = syllabiService.returnSavedCourse();
            $scope.course = course;
            savedSyllabus = course;
        }

    }
    retrieve();

    $scope.editAssignments = function (assignment) {
        http

    }


}]);