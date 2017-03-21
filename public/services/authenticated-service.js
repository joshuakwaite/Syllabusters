angular.module("scotchApp")

    .service('authService',["httpService", function (httpService){

        var savedSyllabi;

        this.saveSyllabi = function () {
            httpService.getSyllabi().then(function(response) {
                savedSyllabi = response.data
            })
        };

        this.returnSavedSyllabi = function() {
            return savedSyllabi
        };

    }]);