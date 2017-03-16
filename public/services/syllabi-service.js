angular.module("scotchApp")

    .service('syllabiService',["httpService", function (httpService){

        var savedCourse;

        this.saveCourse = function (object) {
             httpService.getOneSyllabus(object).then(function(response) {
                 savedCourse = response.data
            })
        };

        this.returnSavedCourse = function() {
            return savedCourse
        };

    }]);