(function () {
    "use strict";

    angular.module("duckModule").controller("DuckCtrl",
        function ($scope, DuckService, $location, toastr) {

            function getSightings () {
                DuckService.getSightings(function (res, err) {
                    if (!err) {
                        $scope.sightings = res;
                    } else {
                        toastr.error("Failed to get duck sighting data.",
                        "Internal server error");
                    }
                })
            }

            getSightings();

            $scope.addSighting = function () {
                $location.path("/add");
            };

            $scope.reverse = true;
            $scope.chevronSort = false;
            $scope.toggleSort = function() {
                $scope.reverse = !$scope.reverse;
                $scope.chevronSort = !$scope.chevronSort;
            };
        });
}());