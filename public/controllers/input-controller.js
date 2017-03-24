var scotchApp = angular.module("scotchApp")
scotchApp.controller('inputController', ["httpService", "syllabiService", "$scope", "$location", function (httpService, syllabiService, $scope, $location) {

    $scope.types = ["Warmup", "Lesson", "Exercise", "Project", "Test"];

    $scope.addObject = function (object) {
            object.objectType = object.objectType.toLowerCase();
        
        httpService.postAssignment(object).then(function(response) {
            httpService.getAssignments().then(function(response) {
                alert("Assignment added successfully!")
            })
        });



    }

}]);
