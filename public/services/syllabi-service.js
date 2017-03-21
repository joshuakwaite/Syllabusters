angular.module("scotchApp")

    .service('syllabiService', ["httpService", function (httpService) {
        var self = this;
        this.savedCourse;

        this.saveCourse = function (object) {
            return httpService.getOneSyllabus(object).then(function (response) {
                self.savedCourse = response.data
            });
        };

        this.returnSavedCourse = function () {
            return self.savedCourse;
        };

    }]);