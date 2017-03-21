var app = angular.module("scotchApp");

app.controller("viewSyllabusController", ["$scope", "syllabiService", "$location", "httpService", function($scope, syllabiService, $location, httpService) {

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

        for (var i = 0; i < savedSyllabus.assignments.length; i++) {
            if (savedSyllabus.assignments[i]._id == assignment._id) {
                savedSyllabus.assignments.splice([i], 1, assignment);
                httpService.editSyllabus(savedSyllabus).then(function(response) {
                    console.log(response)
                })
            }
        }
    };
}]);