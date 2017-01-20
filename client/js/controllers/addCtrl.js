(function () {
    "use strict";

    angular.module("duckModule").controller("AddCtrl",
        function ($scope, DuckService) {

            $scope.sighting = {
                count: 1
            };

            $scope.selectedSpecies = {};

            function getSpecies() {
                DuckService.getSpecies(function (res, err) {
                    if (!err) {
                        $scope.species = res;
                        $scope.selectedSpecies = $scope.species[0];
                        console.log($scope.species);
                    } else {
                        console.log("get species failed")
                    }
                });
            }

            getSpecies();

            $scope.saveSighting = function () {
                $scope.sighting.species = $scope.selectedSpecies.name;
                var tempDate = moment($scope.sighting.date);
                console.log(tempDate.utc());

                console.log($scope.sighting);

                DuckService.addSighting($scope.sighting, function (res, err) {
                    if (!err) {
                        console.log("Successfully saved");
                        $scope.sighting = {};
                    } else {
                        console.log("Failed to save")
                    }
                })
            };

        });
}());