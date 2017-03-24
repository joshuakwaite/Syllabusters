var scotchApp = angular.module("scotchApp");

scotchApp.controller('weekController', ["$scope", "httpService", "syllabiService", "$location", "$filter", "$sce", function ($scope, httpService, syllabiService, $location, $filter, $sce) {

    $scope.syllabiService = syllabiService;

    $scope.$watch('syllabiService.savedCourse', function (newVal, oldVal) {

        if (newVal !== null) {

        function getWeek(fromDate) {
            var sunday = new Date(fromDate.setDate(fromDate.getDate() - fromDate.getDay()))
                , result = [new Date(sunday)];
            while (sunday.setDate(sunday.getDate() + 1) && sunday.getDay() !== 0) {
                result.push(new Date(sunday));
            }

            return result;
        }

        $scope.week = getWeek(new Date());

        $scope.work = [];

        function homework() {

            for (var i = 0; i < newVal.assignments.length; i++) {
                var dayOfWeek = $filter('date')(newVal.assignments[i].startDate, "fullDate");
                newVal.assignments[i].dayOfWeek = dayOfWeek;
                $scope.work.push(newVal.assignments[i]);
            }
        }
        homework();
            }
    }, true);


    $scope.openedModal = function (object) {
        httpService.getUnfurl(object).then(function (response) {
            $scope.test = $sce.trustAsHtml(response.data.html);
        })
    };



}]);


