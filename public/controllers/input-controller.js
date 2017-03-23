var scotchApp = angular.module("scotchApp")
scotchApp.controller('inputController', ["httpService", "syllabiService", "$scope", function (httpService, syllabiService, $scope) {

    $scope.types = ["Warmup", "Lesson", "Exercise", "Project", "Test"];

    $scope.addObject = function (object) {
            object.objectType = object.objectType.toLowerCase();
        
        httpService.postAssignment(notCapitalizedObject).then(function(response) {
        });

        httpService.getAssignments().then(function(response) {
        })

    }

}]);
