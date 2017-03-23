angular.module("scotchApp")

    .service('authService',["httpService", function (httpService){

        var savedSyllabi;
        var savedUser;

        this.saveSyllabi = function () {
            httpService.getSyllabi().then(function(response) {
                savedSyllabi = response.data
            })
        };

        this.saveUser = function (userObject) {
            savedUser = userObject
        }

        this.returnSavedSyllabi = function() {
            return savedSyllabi
        };

        this.returnSavedUser = function () {
            return savedUser
        }



    }]);