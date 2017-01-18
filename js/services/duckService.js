(function () {
    "use strict";

    angular.module('duckModule').factory('DuckService', ['$resource'
        , function ($resource) {

            var searchString = "http://localhost:8081/:type";
            var result = $resource(searchString);

            var duck = {

                // ---------------------- SIGHTING FUNCTIONS ---------------------------

                getSightings: function (callback) {
                    var sightings;
                    // Server returns an array so query is better than get
                    sightings = result.query({type: "sightings"}
                        , function () {
                            callback(sightings, null);
                        }, function (err) {
                            callback(null, err);
                        });
                },

                getSpecies: function (callback) {
                    var species;
                    // Server returns an array so query is better than get
                    species = result.query({type: "species"}
                        , function () {
                            callback(species, null);
                        }, function (err) {
                            callback(null, err);
                        });
                },

                addSighting: function (sightingData, callback) {
                    var sighting;
                    sighting = result.save({type: "sightings"},
                        sightingData
                        , function () {
                            callback(root, null);
                        }, function (err) {
                            callback(null, err);
                        });
                }
            };

            return duck;
        }]);
}());
