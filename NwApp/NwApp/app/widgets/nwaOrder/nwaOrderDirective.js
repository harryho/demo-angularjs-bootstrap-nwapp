"use strict";

angular.module('nwApp').directive('nwaOrder', ['dataService',
    function(dataService) {
        return {
            templateUrl: 'app/widgets/nwaOrder/nwaOrderTemplate.html',
            link: function(scope, el, attrs) {
                scope.isLoaded = false;
                scope.hasError = false;
                scope.selectedLocation = null;

                // scope.loadLocation = function () {
                //     scope.hasError = false;
                //     dataService.getLocation(scope.item.widgetSettings.id)
                //     .then(function (data) {
                //         // success
                //         scope.selectedLocation = data;
                //         scope.isLoaded = true;
                //         scope.hasError = false;
                //     }, function (data) {
                //         // error
                //         scope.hasError = true;
                //     });
                // };

                var orders = dataService.getOrders();
                var listData = [];

                orders.forEach(function(o, i) {
                    var item = {};
                    item.orderDate = o.orderDate;
                    item.shipDate = o.shipDate;
                    item.freight = o.freight;
                    item.customerName = dataService.getDetailById(dataService.getCustomers(), o.customerId).name;
                    console.log(o.customerId);
                    console.log(item.customerName);
                    listData.push(item);

                });

                scope.listData = listData; //dataService.getOrders();

                // scope.loadLocation();
            }
        };
    }
]);
