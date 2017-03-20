var scotchApp = angular.module("scotchApp");

scotchApp.controller('mainController', function ($scope) {
    $scope.message = "Something cool to say about the Syllabuster";
});

scotchApp.controller('dayController', function ($scope) {
    $scope.message = "Day view below";
});

scotchApp.controller('loginController', function ($scope) {
    $scope.message = "Login below";
});

scotchApp.controller('signupController', function ($scope) {
    $scope.message = "Signup below";
});


scotchApp.controller('syllabusController',["$scope", "httpService", "$location", "$window", function($scope, httpService, $location, $window) {

    $scope.addSyllabus = function(object) {

        httpService.saveSyllabus(object).then(function(response) {
            console.log(response.data);
            $window.location.reload();
            $location.path("/input");

            httpService.getSyllabi().then(function(response){
                console.log(response)
            });




        });

    };

}]);