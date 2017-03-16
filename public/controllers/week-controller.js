var scotchApp = angular.module("scotchApp");

scotchApp.controller('weekController', ["$scope", "syllabiService", function ($scope, syllabiService) {

    $scope.data = syllabiService.selectedSyllabi()


}]);


