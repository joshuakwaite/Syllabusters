angular.module("scotchApp")
    .controller('inputController', ["httpService", "$scope", function (httpService, $scope) {

        $scope.types = ["Warmup", "Lesson", "Exercise", "Project", "Test"];

        $scope.syllabi = httpService.getSyllabi().then(function (response) {
            $scope.name = response.data;
            return response.data[0].name
            });

        $scope.addObject = httpService.editSyllabus();

    }]);