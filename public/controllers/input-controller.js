var scotchApp = angular.module("scotchApp")
scotchApp.controller('inputController', ["httpService", "syllabiService", "$scope", function (httpService, syllabiService, $scope) {

    $scope.types = ["Warmup", "Lesson", "Exercise", "Project", "Test"];

    $scope.addObject = function (object) {
        var notCapitalizedObject = object;
           notCapitalizedObject.objectType = notCapitalizedObject.objectType.toLowerCase();


        httpService.postAssignment(notCapitalizedObject).then(function(response) {
            console.log(response.data)
        });

        httpService.getAssignments().then(function(response) {
            console.log(response.data)
        })

    }

}]);

