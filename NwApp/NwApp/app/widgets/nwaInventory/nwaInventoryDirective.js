"use strict";

angular.module('nwApp').directive('nwaInventory',
    ['dataService',
    function (dataService) {
        return {
            templateUrl: 'app/widgets/nwaInventory/nwaInventoryTemplate.html',
            // link: function (scope, el, attrs) {
            //     scope.selectedLocation = null;
            //     dataService.getLocation(scope.item.widgetSettings.id)
            //         .then(function (data) {
            //             scope.selectedLocation = data;
            //         });
            // }
        };
    }]);