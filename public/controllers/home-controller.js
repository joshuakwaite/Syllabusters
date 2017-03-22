var scotchApp = angular.module("scotchApp");


scotchApp.controller('homeController', ['$scope', 'httpService', 'syllabiService', '$sce', '$filter', function ($scope, httpService, syllabiService, $sce, $filter) {

    $scope.selected = "";

    $scope.todaysAssignments = [];
    $scope.dueSoon = [];
    $scope.syllabiService = syllabiService;

    $scope.$watch('syllabiService.savedCourse', function (newVal, oldVal) {
        if (newVal !== undefined) {
        $scope.todaysAssignments = [];
        $scope.dueSoon = [];

        var d = new Date();
        d.setDate(d.getDate());
        var date = new Date(d);

        date = $filter('date')(date, "MM/dd/yyyy");

        for (var i = 0; i < newVal.assignments.length; i++) {
            var newDate = $filter('date')(newVal.assignments[i].startDate, "MM/dd/yyyy");
            if (date == newDate) {
                $scope.todaysAssignments.push(newVal.assignments[i])
            }
        }

        for (var i = 0; i < newVal.assignments.length; i++) {
            var newStartDate = $filter('date')(newVal.assignments[i].startDate, "MM/dd/yyyy");
            var newDueDate = $filter('date')(newVal.assignments[i].dueDate, "MM/dd/yyyy");
            if (date >= newStartDate && date <= newDueDate) {
                $scope.dueSoon.push(newVal.assignments[i])
            }
        }
        }
    }, true);


    $scope.openedModal = function (object) {
        httpService.getUnfurl(object).then(function (response) {
            $scope.test = $sce.trustAsHtml(response.data.html);
        })
    };

}]);