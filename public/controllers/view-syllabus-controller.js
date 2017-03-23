var app = angular.module("scotchApp");

app.controller("viewSyllabusController", ["$scope", "syllabiService", "$location", function($scope, syllabiService, $location) {


    $scope.syllabiService = syllabiService;

    $scope.$watch('syllabiService.savedCourse', function (newVal, oldVal) {

        $scope.course = newVal;


        $scope.editAssignments = function (assignment) {

            for (var i = 0; i < newVal.assignments.length; i++) {
                if (newVal.assignments[i]._id == assignment._id) {
                    newVal.assignments.splice([i], 1, assignment);
                    syllabiService.editSyllabus(newVal).then(function(response) {
                        alert("Edit Successful")
                    });

                }
            }
        };


    }, true);

}]);

