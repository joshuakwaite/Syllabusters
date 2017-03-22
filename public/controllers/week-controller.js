var scotchApp = angular.module("scotchApp");

scotchApp.controller('weekController', ["$scope", "httpService", "syllabiService", "$location", "$filter", function ($scope, httpService, syllabiService, $location, $filter) {

    $scope.syllabiService = syllabiService;

    $scope.$watch('syllabiService.savedCourse', function (newVal, oldVal) {

        if (newVal !== undefined) {

        function getWeek(fromDate) {
            var sunday = new Date(fromDate.setDate(fromDate.getDate() - fromDate.getDay()))
                , result = [new Date(sunday)];
            while (sunday.setDate(sunday.getDate() + 1) && sunday.getDay() !== 0) {
                result.push(new Date(sunday));
            }

            return result;
        }

        $scope.week = getWeek(new Date());


        var data = newVal;

        $scope.work = [];

        function homework() {

            for (var i = 0; i < data.assignments.length; i++) {
                var dayOfWeek = $filter('date')(data.assignments[i].startDate, "fullDate");
                data.assignments[i].dayOfWeek = dayOfWeek;
                $scope.work.push(data.assignments[i]);


            }
        }

        homework();

            }

    }, true);




}]);


