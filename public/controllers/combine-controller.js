var app = angular.module("scotchApp");

app.controller("combineController", ["$scope", "httpService", "syllabiService", function($scope, httpService, syllabiService) {

    var populateLeft = function () {

    httpService.getAssignments().then(function(response) {
       var allAssignmentsData = response.data;

        var allAssignmentIds = [];
        var allAssignments = [];
        var addedAssignments = [];
        var outputAssignments = [];


        for (var i = 0; i < allAssignmentsData.length; i++) {
            allAssignmentIds.push(allAssignmentsData[i]._id);
            allAssignments.push(allAssignmentsData[i]);
        }
        httpService.getOneSyllabus(syllabiService.returnSavedCourse()).then(function(response) {
            var syllAssignments = response.data.assignments;
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

    populateLeft();

    var populateRight = function () {
    httpService.getOneSyllabus(syllabiService.returnSavedCourse()).then(function(response) {
        $scope.syllAssignments = response.data.assignments
    });
    };

    populateRight();

   $scope.selected = function (object) {

       var syllabus = syllabiService.returnSavedCourse();

       syllabus.assignments.push(object);

       httpService.putSyllabusAssignment(syllabus).then(function(response) {
           populateRight();
           populateLeft();
           })
   }

   $scope.selectedSyllAss = function (object) {

       var syllabus = syllabiService.returnSavedCourse();

       syllabus.assignments.splice(object, 1);

       httpService.putSyllabusAssignment(syllabus).then(function(response) {
           populateRight();
           populateLeft();
       })

   }

}]);



