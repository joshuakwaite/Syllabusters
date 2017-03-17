var scotchApp = angular.module("scotchApp")
scotchApp.controller('inputController', ["httpService", "syllabiService", "$scope", function (httpService, syllabiService, $scope) {

    $scope.types = ["Warmup", "Lesson", "Exercise", "Project", "Test"];

    $scope.addObject = function (object) {

        syllabiService.saveCourse($scope.syllabi.name)

        httpService.getOneSyllabus($scope.syllabi.name).then(function (response) {
            data = response.data;

            var lowerName = object.name.toLowerCase();
            var pluralObject = lowerName + "s";

            data[pluralObject].push(object);

            httpService.editSyllabus(data).then(function (response) {
            })
        })
    }

}]);

