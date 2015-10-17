"use strict"

angular.module('nwDashboard').directive('nwDashboard', function () {
    return {
        templateUrl: 'framework/nwDashboard/nwDashboardTemplate.html',
        link: function (scope, element, attrs) {
            scope.addNewWidget = function (widget) {
                var newWidget = angular.copy(widget.settings);
           //     scope.widgets.push(newWidget);
            }
        }
    };
});