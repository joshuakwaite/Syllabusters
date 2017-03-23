angular.module("scotchApp")

    .service('authService',["syllabiService", function (syllabiService){

        var savedSyllabi;
        var savedUser;

        this.saveSyllabi = function () {
            syllabiService.getSyllabi().then(function(response) {
                savedSyllabi = response.data
            });
        };

        this.saveUser = function (userObject) {
            savedUser = userObject
        };

        this.returnSavedSyllabi = function() {
            return savedSyllabi
        };

        this.returnSavedUser = function () {
            return savedUser
        };

    }]);