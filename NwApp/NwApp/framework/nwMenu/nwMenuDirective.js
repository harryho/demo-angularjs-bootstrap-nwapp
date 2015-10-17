"use strict"



angular.module('nwMenu').directive('nwMenu', ['$timeout', function ($timeout) {
    return {
        scope: {

        },
        transclude: true,
        templateUrl: 'framework/nwMenu/nwMenuTemplate.html',
        controller: 'nwMenuController',
        link: function (scope, el, attr) {
            var item = el.find('.nw-selectable-item:first');
            $timeout(function () {
                item.trigger('click');
            });
        }
    };
}]);