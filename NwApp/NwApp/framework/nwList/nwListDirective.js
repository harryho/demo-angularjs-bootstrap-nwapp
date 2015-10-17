"use strict"


angular.module('nwList').directive('nwList', ['$timeout', function ($timeout) {
    return {
        templateUrl: 'framework/nwList/nwListTemplate.html',
        controller: 'nwListController',
        link: function (scope, el, attr) {
           
        }
    };
}]);