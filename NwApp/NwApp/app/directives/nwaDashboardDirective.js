"use strict";

angular.module('nwApp').directive('nwaDashboard', ['$localStorage',
    function($localStorage) {
        return {
            scope: {},
            template: '<nw-dashboard></nw-dashboard>',
            link: function(scope) {

                scope.title = 'My Dashboard';

                scope.gridsterOpts = {
                    columns: 4,
                    margins: [10, 10],
                    outerMargin: false,
                    pushing: true,
                    floating: false,
                    swapping: false
                };

                scope.widgetDefinitions = [{
                    title: 'Hot Sales',
                    settings: {
                        sizeX: 1,
                        sizeY: 1,
                        minSizeX: 0,
                        minSizeY: 0,
                        template: '<nwa-order></nwa-order>',
                        // widgetSettings: {
                        //     id: 1000,
                        //     templateUrl: 'app/dialogs/nwaSelectLocationTemplate.html',
                        //     controller: 'nwaSelectLocationController'
                        // },
                   },
                    
                }, {
                    title: 'Inventory',
                    settings: {
                        sizeX: 2,
                        sizeY: 1,
                        minSizeX: 0,
                        minSizeY: 1,
                        template: '<nwa-inventory></nwa-inventory>',
                        // widgetSettings: {
                        //     id: 1002,
                        //     templateUrl: 'app/dialogs/nwaSelectLocationTemplate.html',
                        //     controller: 'nwaSelectLocationController'
                        // }
                    }
                }
                , {
                    title: 'Employee',
                    settings: {
                        sizeX: 2,
                        sizeY: 1,
                        minSizeX: 0,
                        minSizeY: 1,
                        template: '<nwa-employee></nwa-employee>',
                        // widgetSettings: {
                        //     id: 5000,
                        //     templateUrl: 'app/dialogs/nwaSelectEmployeeTemplate.html',
                        //     controller: 'nwaSelectEmployeeController'
                        // }
                    }
                }

                ];

                scope.widgets = $localStorage.widgets || [

                ];

                function addNewWidget(widget) {
                    var newWidget = angular.copy(widget.settings);
                    scope.widgets.push(newWidget);
                }

              //  if(scope.widgets.length >3 ){
                    scope.widgets = [];
             //   }
                scope.widgetDefinitions.forEach(function(widget) {
                    addNewWidget(widget);
                });



                scope.$watch('widgets', function() {
                    $localStorage.widgets = scope.widgets;
                }, true);
            }
        }
    }
]);
