angular.module("scotchApp")
    .controller("modalController", ["$scope", "httpService", function ($scope, httpService) {

        $scope.Monday = function (object) {
            httpService.getOneSyllabus(object)
        }


    }]);
