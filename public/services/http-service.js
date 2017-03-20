angular.module("scotchApp")

    .service("httpService", ["$http", function ($http) {

        var url = "/";
        var adminUrl = "/admin";
        var courseUrl = "/api/course";
        var userUrl = "/user";
        var assignmentUrl = "/api/assignment";

        this.addUser = function (user) {
            return $http.post(url, user)
        };
        this.showUser = function () {
            return $http.get(url)
        };
        this.removeUser = function (object) {
            return $http.delete(url + "/" + object._id)
        };
        this.getSyllabi = function () {
            return $http.get(courseUrl);

        };
        this.getOneSyllabus = function (object) {
            return $http.get("/api/course/" + object._id)
        };
        this.saveSyllabus = function (syllabus) {
            return $http.post("/api/course", syllabus)
        };
        this.editSyllabus = function (object) {
            return $http.put("/api/course/" + object._id, object)
        };

        this.putSyllabusAssignment = function (object) {
            return $http.put("/api/course/" + object._id, object)
        }

        //ASSIGNMENT HTTPS//
        this.getAssignments = function() {
            return $http.get("/api/assignment");
        }

        this.getOneAssignment = function(object) {
            return $http.get("/api/assignment/" + object._id)
        }

        this.postAssignment = function (object) {
            return $http.post("/api/assignment", object)
        }

        this.putAssignment = function(object) {
            return $http.put("/api/assignment/", object._id, object)
        }

        this.deleteAssignment = function(object) {
            return $http.delete("/api/assignment/", object._id)
        }
    }]);
