var scotchApp = angular.module("scotchApp");


scotchApp.controller('homeController', ['$scope', 'httpService', 'syllabiService', '$sce', '$filter',  function($scope, httpService, syllabiService, $sce, $filter) {



    var info = syllabiService.returnSavedCourse();

    $scope.todaysAssignments = [];

    var d = new Date();
    d.setDate(d.getDate());
    var date = new Date(d);
    date = $filter('date')(date, "dd/MM/yyyy");


    console.log(date);


    for (var i = 0; i < info.assignments.length; i++) {
        var newDate = $filter('date')(info.assignments[i].startDate, "dd/MM/yyyy");
        console.log(newDate);
        if (date == newDate) {
            $scope.todaysAssignments.push(info.assignments[i])
        }
    }



    $scope.openedModal = function (object) {
    httpService.getUnfurl(object).then(function(response) {
        $scope.test = $sce.trustAsHtml(response.data.html);
        console.log(response)
    })
    }

}]);