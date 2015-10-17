"use strict"

angular.module('nwList').controller('nwListController', ['$timeout', function ($timeout) {
    return {
        scope: {

        },
        transclude: true,
        templateUrl: 'framework/nwList/nwListTemplate.html',
        controller: 'nwListController',
        // link: function (scope, el, attr) {
        //     var item = el.find('.nw-selectable-item:first');
        //     $timeout(function () {
        //         item.trigger('click');
        //     });
        // }
    };
}]);    