var scotchApp = angular.module("scotchApp");

scotchApp.controller('weekController', ["$scope", "httpService", "syllabiService", "$location", "$filter", function ($scope, httpService, syllabiService, $location, $filter) {

    function retrieve() {
        if (syllabiService.returnSavedCourse() === undefined) {
            alert("test");
            $location.path("/home");
        } else {
            return syllabiService.returnSavedCourse();
        }
    }

    retrieve();


    function getWeek(fromDate) {
        var sunday = new Date(fromDate.setDate(fromDate.getDate() - fromDate.getDay()))
            , result = [new Date(sunday)];
        while (sunday.setDate(sunday.getDate() + 1) && sunday.getDay() !== 0) {
            result.push(new Date(sunday));
        }

        return result;
    }

    $scope.week = getWeek(new Date());


    var data = syllabiService.returnSavedCourse();

    $scope.work = [];

    function homework() {

        for (var i = 0; i < data.assignments.length; i++) {
            var dayOfWeek = $filter('date')(data.assignments[i].startDate, "EEEE");
            data.assignments[i].dayOfWeek = dayOfWeek;
            $scope.work.push(data.assignments[i]);
            console.log($scope.work);


        }
    }

    homework();


}]);


