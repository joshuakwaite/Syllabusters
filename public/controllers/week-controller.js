var scotchApp = angular.module("scotchApp");

scotchApp.controller('weekController', ["$scope", "httpService", "syllabiService", "$location", function ($scope, httpService, syllabiService, $location) {


    function retrieve() {
        if (syllabiService.returnSavedCourse() == undefined) {
            alert("Please select a course");
            $location.path("/home");
        } else {
            var course = syllabiService.returnSavedCourse();
            $scope.assignments = course.assignments;
        }

    }
    retrieve();

}]);


