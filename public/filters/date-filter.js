angular.module("scotchApp")
    .filter("dayOfWeek", [function (){
        return function(array, day) {
            return array.filter(function(item) {
                console.log(item.dayOfWeek, day);
                return item.dayOfWeek === day;
            })
        }
    }]);
