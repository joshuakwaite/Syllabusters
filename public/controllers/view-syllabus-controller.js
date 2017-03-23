var app = angular.module("scotchApp");

app.controller("viewSyllabusController", ["$scope", "syllabiService", "$location", "httpService", function ($scope, syllabiService, $location, httpService) {

    $scope.syllabiService = syllabiService;

    $scope.$watch('syllabiService.savedCourse', function (newVal, oldVal) {

        $scope.course = newVal;


        $scope.editAssignments = function (assignment) {

            for (var i = 0; i < newVal.assignments.length; i++) {
                if (newVal.assignments[i]._id == assignment._id) {
                    newVal.assignments.splice([i], 1, assignment);
                    httpService.editSyllabus(newVal).then(function (response) {
                        console.log(response)
                    })
                }
            }
        };


    }, true);


}]);

