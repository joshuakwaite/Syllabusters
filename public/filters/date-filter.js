angular.module("scotchApp")
    .filter("dayOfWeek", [function (){
        return function(array, day) {
            return array.filter(function(item) {
                return item.dayOfWeek === day;
            })
        }
    }]);
