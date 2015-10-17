"use strict";

angular.module('nwApp').directive('nwaSales', ['$localStorage',function ($localStorage) {
    return {
        scope: {
        },
       // template: '<h1>Guide Page</h1>'
        template: '<nw-sales></nw-sales>',
        link: function (scope) {

            scope.title = 'Sales managament';

            scope.gridsterOpts = {
                columns: 1,
                margins: [20, 20],
                outerMargin: false,
                pushing: true,
                floating: false,
                swapping: false
            };

            scope.simpleList = [                
                'aaaaa','bbbbb'
            ];

           //cope.widgets = $localStorage.widgets || [];

            scope.$watch('widgets', function () {
                $localStorage.widgets = scope.widgets;
            }, true);
        }

    }
}]);