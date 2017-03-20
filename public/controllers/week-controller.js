var scotchApp = angular.module("scotchApp");

scotchApp.controller('weekController', ["$scope", "httpService", "syllabiService", "$location", function ($scope, httpService, syllabiService, $location) {

    function getWeek(fromDate) {
        var sunday = new Date(fromDate.setDate(fromDate.getDate() - fromDate.getDay()))
            , result = [new Date(sunday)];
        while (sunday.setDate(sunday.getDate() + 1) && sunday.getDay() !== 0) {
            result.push(new Date(sunday));
        }
        return result;
    }

    $scope.week = getWeek(new Date());


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


