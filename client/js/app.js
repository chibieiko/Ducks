(function () {
    "use strict";

    // Declares the module.
    var duckModule = angular.module('duckModule',
        ['ngRoute', 'ngResource', 'ui.bootstrap',
            'ui.bootstrap.datetimepicker', 'toastr']);

    // Configures routing.
    duckModule.config(function ($routeProvider, $provide) {
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


        var DEFAULT_TIMEZONE = '+0000';
        $provide.decorator('dateFilter', ['$delegate', '$injector', function($delegate, $injector) {
            var oldDelegate = $delegate;

            var standardDateFilterInterceptor = function(date, format, timezone) {
                if(angular.isUndefined(timezone)) {
                    timezone = DEFAULT_TIMEZONE;
                }
                return oldDelegate.apply(this, [date, format, timezone]);
            };

            return standardDateFilterInterceptor;
        }]);
    });
}());