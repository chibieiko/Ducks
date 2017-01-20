(function () {
    "use strict";

    angular.module("duckModule").controller("AddCtrl",
        function ($scope, DuckService, $location) {

            $scope.sighting = {
                count: 1
            };

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
                var tempDate = moment($scope.dateTime, "DD/MM/YYYY HH:mm");
                $scope.sighting.dateTime = tempDate.toISOString();

                console.log($scope.sighting);

                if ($scope.sighting.description !== undefined) {
                    DuckService.addSighting($scope.sighting, function (res, err) {
                        if (!err) {
                            console.log("Successfully saved");
                            $location.path("/");
                        } else {
                            console.log("Failed to save")
                        }
                    })
                } else {
                    console.log("Please provide a valid description");
                }
            };
        });
}());