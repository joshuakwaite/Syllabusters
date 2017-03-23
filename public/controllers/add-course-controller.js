var app = angular.module("scotchApp");

app.controller("addCourseController", ["$scope", "$localStorage", "syllabiService", function ($scope, $localStorage, syllabiService) {

    //POPULATE / ADD COURSE
    var populateAddTable = function () {
        syllabiService.getAllSyllabi().then(function (response) {
            $scope.syllabi = [];
            var syllabi = response.data;
            var addedSyllabiIds = [];

            for (var j = 0; j < syllabiService.syllabi.length; j++) {
                addedSyllabiIds.push(syllabiService.syllabi[j]._id)
            }

            for (var i = 0; i < syllabi.length; i++) {
                if (addedSyllabiIds.indexOf(syllabi[i]._id) === -1) {
                    $scope.syllabi.push(syllabi[i])
                };

            };

        });
    };
    populateAddTable();

    $scope.addCourseToStudent = function (syallbus) {
        syllabiService.putStudentOnSyllabus(syallbus).then(function (response) {
            syllabiService.getSyllabi().then(function(response) {
                populateAddTable();

            })
        });

    };

    //POPULATE / REMOVE COURSE

    var populateRemoveTable = function () {
        syllabiService.getAllSyllabi().then(function (response) {
            $scope.addedSyllabi = [];
            var syllabi = response.data;
            var addedSyllabiIds = [];

            for (var j = 0; j < syllabiService.syllabi.length; j++) {
                addedSyllabiIds.push(syllabiService.syllabi[j]._id)
            }

            for (var i = 0; i < syllabi.length; i++) {
                if (addedSyllabiIds.indexOf(syllabi[i]._id) !== -1) {
                    $scope.addedSyllabi.push(syllabi[i])
                }
                ;
            }
            ;
        });
    };

    populateRemoveTable()

    $scope.removeStudentFromCourse = function (syllabus) {
        var userId = $localStorage.syllabusterUser._id;

        for (var i = 0; i < syllabus.user.length; i++) {
            if (userId.indexOf(syllabus.user[i]) !== -1) {
                syllabus.user.splice([i], 1)
            }
        }

        syllabiService.editSyllabus(syllabus).then(function (response) {
            syllabiService.getSyllabi().then(function(response) {
                populateRemoveTable()

            });

        });


    };


}]);