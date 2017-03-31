var app = angular.module("scotchApp");

app.controller("combineController", ["$scope", "httpService", "syllabiService", function ($scope, httpService, syllabiService) {

    var populateLeft = function () {

        httpService.getAssignments().then(function (response) {
            var allAssignmentsData = response.data;

            var allAssignmentIds = [];
            var allAssignments = [];
            var addedAssignments = [];
            var outputAssignments = [];


            for (var i = 0; i < allAssignmentsData.length; i++) {
                allAssignmentIds.push(allAssignmentsData[i]._id);
                allAssignments.push(allAssignmentsData[i]);
            }
            syllabiService.getOneSyllabus(syllabiService.returnSavedCourse()).then(function (data) {
                var syllAssignments = data.assignments;
                for (var i = 0; i < syllAssignments.length; i++) {
                    addedAssignments.push(syllAssignments[i]._id)
                }

                for (var i = 0; i < allAssignmentIds.length; i++) {
                    if (addedAssignments.indexOf(allAssignmentIds[i]) === -1) {
                        outputAssignments.push(allAssignments[i])
                    }
                }
            });

            $scope.assignments = outputAssignments;

        });
    };


    var populateRight = function () {
        syllabiService.getOneSyllabus(syllabiService.returnSavedCourse()).then(function (data) {
            $scope.syllAssignments = data.assignments
        });
    };

    $scope.syllabiService = syllabiService;
    $scope.$watch('syllabiService.savedCourse', function (newVal, oldVal) {

        populateLeft();
        populateRight();

    }, true);


    $scope.selected = function (object) {

        var syllabus = syllabiService.returnSavedCourse();

        syllabus.assignments.push(object);

        syllabiService.putSyllabusAssignment(syllabus).then(function (response) {
            populateRight();
            populateLeft();
        });
    };

    $scope.selectedSyllAss = function (object) {

        let syllabus = syllabiService.returnSavedCourse();

        syllabus.assignments = syllabus.assignments.filter((element, index, arr) => element._id !== object._id);

        syllabiService.putSyllabusAssignment(syllabus).then(function (response) {
            populateRight();
            populateLeft();
        });
    };
}]);



