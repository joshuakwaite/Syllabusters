angular.module("scotchApp")
    .controller('inputController', ["httpService", "$scope", function (httpService, $scope) {

        $scope.types = ["Lesson", "Warmup", "Project", "Test"];

        $scope.syllabi = httpService.getSyllabi();


    }]);