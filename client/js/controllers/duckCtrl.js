(function () {
    "use strict";

    angular.module("duckModule").controller("DuckCtrl",
        function ($scope, DuckService) {

            $scope.getSightings = function () {
                DuckService.getSightings(function (res, err) {
                    if (!err) {
                        $scope.sightings = res;
                    } else {
                        console.log("get sightings fail")
                    }
                })
            };

            $scope.getSightings();
        });
}());