angular.module("scotchApp")
    .controller('inputController', ["httpService", "$scope", function (httpService, $scope) {

        $scope.types = ["Lesson", "Warmup", "Project", "Test"];

        $scope.syllabi = httpService.getSyllabi().then(function (response) {
            $scope.name = response.data;
            return response.data[0].name

            });

        $scope.addObject = function (object) {

            httpService.getSyllabi().then(function(response) {
                data = response.data;

                var lowerName = object.name.toLowerCase();
                var pluralObject = lowerName + "s";

                data[0][pluralObject].push(object);


                httpService.editSyllabus(data).then(function(response) {
                    $scope.recentInput = response.data
                    })
                })
            }

    }]);