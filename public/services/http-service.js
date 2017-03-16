angular.module("scotchApp")

    .service("httpService", ["$http", function ($http) {

        var url = "/";
        var adminUrl = "/admin";
        var courseUrl = "/api/course";
        var userUrl = "/user";

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
        this.saveSyllabus = function (syllabus) {
            return $http.post(courseUrl, syllabus)
        };
        this.editSyllabus = function (object) {
            return $http.put("/api/course/" + object[0]._id, object)
        };
    }]);
