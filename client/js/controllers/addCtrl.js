(function () {
    "use strict";

    angular.module("duckModule").controller("AddCtrl",
        function ($scope, DuckService, $location, toastr) {

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
                        toastr.error("Failed to get species from server.",
                            "Internal server error");
                    }
                });
            }

            getSpecies();

            $scope.saveSighting = function () {
                $scope.sighting.species = $scope.selectedSpecies.name;
                var tempDate = moment($scope.dateTime, "DD/MM/YYYY HH:mm");
                $scope.sighting.dateTime = tempDate.toISOString();

                if ($scope.sighting.description !== undefined) {
                    DuckService.addSighting($scope.sighting, function (res, err) {
                        if (!err) {
                            $location.path("/");
                            toastr.success("Succesfully saved the sighting!");
                        } else {
                            toastr.error("Failed to save the sighting.",
                                "Internal server error");
                        }
                    })
                } else {
                    toastr.error("Please provide a valid description.",
                        "Error sending form")
                }
            };
        });
}());