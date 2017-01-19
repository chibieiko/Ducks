(function () {
    "use strict";

    // Declares the module.
    var duckModule = angular.module('duckModule',
        ['ngRoute', 'ngResource']);

    // Configures routing.
    duckModule.config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/sightings.html',
            controller: 'DuckCtrl'
        });

        $routeProvider.when('/add', {
            templateUrl: 'templates/addSighting.html',
            controller: 'AddCtrl'
        });

        // Redirects to main page.
        $routeProvider.otherwise({redirectTo: '/'});
    });
}());