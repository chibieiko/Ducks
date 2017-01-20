(function () {
    "use strict";

    angular.module("duckModule").controller("DuckCtrl",
        function ($scope, DuckService, $location) {

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

            $scope.addSighting = function () {
                console.log("redirect me");
                $location.path("/add");
            }
        });
}());