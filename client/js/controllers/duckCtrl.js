(function () {
    "use strict";

    angular.module("duckModule").controller("DuckCtrl",
        function ($scope, DuckService, $location, toastr) {

            $scope.getSightings = function () {
                DuckService.getSightings(function (res, err) {
                    if (!err) {
                        $scope.sightings = res;
                    } else {
                        toastr.error("Failed to get duck sighting data.",
                        "Internal server error");
                    }
                })
            };

            $scope.getSightings();

            $scope.addSighting = function () {
                $location.path("/add");
            }
        });
}());