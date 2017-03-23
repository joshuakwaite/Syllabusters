angular.module("scotchApp")

    .service('syllabiService', ["$localStorage", "$http", function ($localStorage, $http) {
        var self = this;
        var courseUrl = "/api/course/";

        this.savedCourse = $localStorage.savedCourse || null;
        this.syllabi = $localStorage.syllabi || [];

        // this.saveCourse = function (object) {
        //     return httpService.getOneSyllabus(object)
        // };

        this.returnSavedCourse = function () {
            return self.savedCourse;
        };

        this.getSyllabi = function () {
            return $http.get(courseUrl).then(function(response) {
                $localStorage.syllabi = response.data;
                self.syllabi = response.data;
                return response.data;
            });
        };

        this.getOneSyllabus = function (object) {
            return $http.get(courseUrl + object._id).then(function (response) {
                $localStorage.savedCourse = response.data;
                self.savedCourse = response.data;
                return response.data;
            });
        };

        this.saveSyllabus = function (syllabus) {
            return $http.post("/api/course", syllabus)
        };

        this.editSyllabus = function (object) {
            return $http.put("/api/course/" + object._id, object)
        };

        this.putSyllabusAssignment = function (object) {
            return $http.put("/api/course/" + object._id, object)
        };
        this.getAllSyllabi = function () {
            return $http.get("/api/course/all")
        };
        this.putStudentOnSyllabus = function (syllabus) {
            return $http.put("/api/course/addStudent/" + syllabus._id, syllabus)
        };

    }]);