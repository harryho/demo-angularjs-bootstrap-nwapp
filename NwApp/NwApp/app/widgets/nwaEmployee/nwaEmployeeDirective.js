"use strict";

angular.module('nwApp').directive('nwaEmployee',
    ['dataService',
    function (dataService) {
        return {
            templateUrl: 'app/widgets/nwaEmployee/nwaEmployeeTemplate.html',
            // link: function (scope, el, attrs) {
            //     scope.selectedEmployee = null;
            //     dataService.getEmployee(scope.item.widgetSettings.id)
            //         .then(function (data) {
            //             scope.selectedEmployee = data;
            //         });
            // }
        };
    }]);