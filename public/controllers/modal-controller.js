angular.module("scotchApp")
    .controller("modalController", ["$scope", "syllabiService", function ($scope, syllabiService) {

        $scope.Monday = function (object) {
            syllabiService.getOneSyllabus(object)
        }


    }]);
