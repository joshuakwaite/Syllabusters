var scotchApp = angular.module("scotchApp");


scotchApp.controller('homeController', ['$scope', 'httpService', 'syllabiService', '$sce',  function($scope, httpService, syllabiService, $sce) {



    // var test = syllabiService.returnSavedCourse();
    //
    // console.log(test.assignments)


    httpService.getUnfurl('http://coursework.vschool.io/git-commands-and-workflows-cheat-sheet/').then(function(response) {
        $scope.test = $sce.trustAsHtml(response.data.html);
        // console.log(response)
    })

}]);