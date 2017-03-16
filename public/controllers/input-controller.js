angular.module("scotchApp")
    .controller('inputController', ["httpService", "$scope", function (httpService, $scope) {

        $scope.types = ["Warmup", "Lesson", "Exercise", "Project", "Test"];

        $scope.syllabi = httpService.getSyllabi().then(function (response) {
            $scope.name = response.data;
            return response.data.name

            });

        $scope.addObject = function (object) {



            httpService.getOneSyllabus($scope.syllabi.name).then(function(response) {
                data = response.data;

                var lowerName = object.name.toLowerCase();
                var pluralObject = lowerName + "s";

                data[pluralObject].push(object);

                httpService.editSyllabus(data).then(function(response) {
                    })
                })
            }

    }]);