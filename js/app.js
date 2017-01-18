(function () {
    "use strict";

    // Declares the module
    var duckModule = angular.module('duckModule',
        ['ngRoute', 'ngResource', 'ngCookies']);

    // Configures the routing
    todoModule.config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'index.html',
            controller: 'DuckCtrl'
        });

        $routeProvider.when('/add', {
            templateUrl: 'templates/addSighting.html',
            controller: 'AddCtrl'
        });

        // Redirects to main page
        $routeProvider.otherwise({redirectTo: '/'});
    });
}());