var scotchApp = angular.module("scotchApp");

scotchApp.controller('dayController', function ($scope) {
    $scope.message = "Day view below";
});

scotchApp.controller('loginController', function ($scope) {
    $scope.message = "Login below";
});

scotchApp.controller('signupController', function ($scope) {
    $scope.message = "Signup below";
});


scotchApp.controller('syllabusController',["$scope", "syllabiService", "$location", "$window", function($scope, syllabiService, $location, $window) {

    $scope.addSyllabus = function(object) {
        syllabiService.saveSyllabus(object).then(function(response) {
            console.log(response.data);
            $location.path("/input");
        });
    };

}]);