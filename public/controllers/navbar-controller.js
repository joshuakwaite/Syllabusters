angular.module("scotchApp")

    .controller("navbarController", ["$scope", "httpService", "syllabiService", "UserService", function ($scope, httpService, syllabiService, UserService) {

        if (UserService.isAuthenticated() === true) {
            httpService.getSyllabi().then(function (response) {
                $scope.name = response.data;
                return response.data.name
            });
        }

        $scope.$on('$locationChangeStart', function () {
            if (UserService.isAuthenticated() === true) {
                httpService.getSyllabi().then(function (response) {
                    $scope.name = response.data;
                    return response.data.name

                });
            }
        });

        $scope.populate = function (object) {
            syllabiService.saveCourse(object);
            var objectTest = object;
            $scope.test = objectTest.name
        };

        $scope.test = "Select Syllabus"

    }]);