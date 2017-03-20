angular.module("scotchApp")
    .filter("objectType", [function (){
        return function(array, type) {
            return array.filter(function (item) {
                return item.objectType === type;
            });
        }
    }]);
