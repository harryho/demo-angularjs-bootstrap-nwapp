
"use strict"

angular.module("nwApp", ["ngRoute",  "ngStorage","nwFramework"]);


angular.module('nwApp').config(function ($provide) {
    $provide.decorator("$exceptionHandler", ["$delegate", function ($delegate) {
        return function (exception, cause) {
            $delegate(exception, cause);
            console.log(exception.message);
        };
    }]);
});


angular.module('nwApp').config(['$routeProvider', function ($routeProvider) {

    var routes = [
        {
            url: '/dashboard',
            config: {
                template: '<nwa-dashboard></nwa-dashboard>'
            }
        },
        {
            url: '/sale',
            config: {
                template: '<nwa-inventory></nwa-inventory>'
            }
        },
        {
            url: '/inventory',
            config: {
                template: '<nwa-inventory></nwa-inventory>'
            }
        },
        {
            url: '/report',
            config: {
                template: '<nwa-report></nwa-report>'
            }
        }

    ];

    routes.forEach(function (route) {
        $routeProvider.when(route.url, route.config);
    });

    $routeProvider.otherwise({ redirectTo: '/dashboard' });

}]);