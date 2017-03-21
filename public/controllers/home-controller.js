var scotchApp = angular.module("scotchApp");


scotchApp.controller('homeController', ['$scope', 'httpService', 'syllabiService', '$sce', '$filter',  function($scope, httpService, syllabiService, $sce, $filter) {


 var data = syllabiService.returnSavedCourse();

    $scope.todaysAssignments = [];

    var d = new Date();
    d.setDate(d.getDate());
    var date = new Date(d);

    date = $filter('date')(date, "MM/dd/yyyy");


    for (var i = 0; i < data.assignments.length; i++) {
        var newDate = $filter('date')(data.assignments[i].startDate, "MM/dd/yyyy");
        if (date == newDate) {
            $scope.todaysAssignments.push(data.assignments[i])
        }
    }



    $scope.openedModal = function (object) {
    httpService.getUnfurl(object).then(function(response) {
        $scope.test = $sce.trustAsHtml(response.data.html);
        console.log(response)
    })
    }

}]);