(function () {
    "use strict";

    angular.module("duckModule").controller('AddCtrl',
        function ($scope, DuckService) {

            $scope.sighting = {};

            $scope.getSpecies = function () {
                DuckService.getSpecies(function (res, err) {
                    if (!err) {
                        $scope.species = res;
                    } else {
                        console.log("get species failed")
                    }
                })
            };

            $scope.getSpecies();

            $scope.status = {
                isopen: false
            };

            $scope.toggled = function(open) {
                $log.log('Dropdown is now: ', open);
            };

            $scope.toggleDropdown = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.status.isopen = !$scope.status.isopen;
            };

            console.log($scope.sighting);
        });
}());