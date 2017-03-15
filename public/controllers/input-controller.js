angular.module("scotchApp")
    .controller('inputController', ["httpService", "$scope", function (httpService, $scope) {

        $scope.types = ["Lesson", "Warmup", "Project", "Test"];

        $scope.syllabi = httpService.getSyllabi().then(function (response) {
            $scope.name = response.data;
            return response.data[0].name
            });

        $scope.addObject = httpService.editSyllabus();

    }]);