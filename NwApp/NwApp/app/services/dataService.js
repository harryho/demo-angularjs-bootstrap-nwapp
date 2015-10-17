"use strict";

angular.module('nwApp').factory('dataService', ['$timeout',
    function($timeout) {

        var locations = [{
            id: 1000,
            name: 'Raquette River',
            temperature: 55,
            guides: 20,
            rafts: 18,
            vests: 200,
            image: 'river1.png'
        }, {
            id: 1001,
            name: 'Black River',
            temperature: 53,
            guides: 36,
            rafts: 22,
            vests: 250,
            image: 'river2.png'
        }, {
            id: 1002,
            name: 'Hudson River',
            temperature: 58,
            guides: 56,
            rafts: 40,
            vests: 500,
            image: 'river3.png'
        }, {
            id: 1003,
            name: 'Hudson Gorge',
            temperature: 39,
            guides: 8,
            rafts: 10,
            vests: 40,
            image: 'river4.png'
        }, {
            id: 1004,
            name: 'Saranac River',
            temperature: 32,
            guides: 8,
            rafts: 8,
            vests: 100,
            image: 'river1.png'
        }, {
            id: 1005,
            name: 'Black Creek',
            temperature: 34,
            guides: 22,
            rafts: 12,
            vests: 230,
            image: 'river2.png'
        }, {
            id: 1006,
            name: 'Batten Kill',
            temperature: 54,
            guides: 20,
            rafts: 24,
            vests: 420,
            image: 'river3.png'
        }, {
            id: 1007,
            name: 'Ausable River',
            temperature: 38,
            guides: 12,
            rafts: 8,
            vests: 225,
            image: 'river4.png'
        }];

        var employees = [{
            id: 5000,
            name: 'Andy Chatterton',
            teamId: 100,
            image: 'employee-andy.png'
        }, {
            id: 5001,
            name: 'April Donaldson',
            teamId: 100,
            image: 'employee-april.png'
        }, {
            id: 5002,
            name: 'Don Morgan',
            teamId: 101,
            image: 'employee-don.png'
        }, {
            id: 5003,
            name: 'Tom Sullivan',
            teamId: 101,
            image: 'employee-tom.png'
        }, {
            id: 5004,
            name: 'Kathy Fletcher',
            teamId: 102,
            image: 'employee-kathy.png'
        }, {
            id: 5005,
            name: 'Harry Ho',
            teamId: 102,
            image: 'employee-kathy.png'
        }];

        var teams = [{
            id: 100,
            teamName: 'Champion',
            teamLead: 5001,
            image: 'guide-icon.png'
        }, {
            id: 101,
            teamName: 'Elite',
            teamLead: 5003,
            image: 'raft-icon.png'
        }, {
            id: 102,
            teamName: 'Guru',
            teamLead: 5005,
            image: 'vest-icon.png'
        }, ];

        var orders = [{
            orderDate: '01/04/2015',
            shipDate: '01/04/2015',
            freight: 40,
            employeeId: 5001,
            customerId: 2001,
            shipperId: 3001,
        }, {
            orderDate: '01/04/2015',
            shipDate: '02/04/2015',
            freight: 24,
            employeeId: 5001,
            customerId: 2002,
            shipperId: 3003,
        }, {
            orderDate: '02/04/2015',
            shipDate: '03/04/2015',
            freight: 50,
            employeeId: 5002,
            customerId: 2003,
            shipperId: 3001,
        }, {
            orderDate: '04/04/2015',
            shipDate: '06/04/2015',
            freight: 32,
            employeeId: 5005,
            customerId: 2004,
            shipperId: 3002,
        }, {
            orderDate: '03/04/2015',
            shipDate: '06/04/2015',
            freight: 62,
            employeeId: 5003,
            customerId: 2005,
            shipperId: 3002,
        }];

        var shippers = [{
            id: 3001,
            companyName: 'Australia Post',
            phone: '0200000000'
        }, {
            id: 3002,
            name: 'DHL Express',

            phone: '0200000000'
        }, {
            id: 3003,
            name: 'EMS Express',

            phone: '0200000000'
        }];

        var customers = [{
            id: 2001,
            name: 'Andy Donaldson',
            title: 'Mr',
            phone: '0200000000'
        }, {
            id: 2002,
            name: 'Chatt Apron',
            title: 'Mr',
            phone: '0200000000'
        }, {
            id: 2003,
            name: 'Joseph White',
            title: 'Mr',
            phone: '0200000000'
        }, {
            id: 2004,
            name: 'Sarah Neron',
            title: 'Ms',
            phone: '0200000000'
        }, {
            id: 2005,
            name: 'Karen Volken',
            title: 'Mrs',
            phone: '0200000000'
        }, {
            id: 2006,
            name: 'Harry Ho',
            title: 'Mr',
            phone: '0200000000'
        }];


        var products = [{
            id: 701,
            productName: 'Product SBSF',
            categoryId: 801,
            quantityPerUnit: 2,
            unitPrice: 31,
            discontinued: 'Y'
        }, {
            id: 702,
            productName: 'Product WERF',
            categoryId: 801,
            quantityPerUnit: 2,
            unitPrice: 5.80,
            discontinued: 'N'
        }, {
            id: 701,
            productName: 'Product QFFWE',
            categoryId: 802,
            quantityPerUnit: 13,
            unitPrice: 27,
            discontinued: 'Y'
        }, {
            id: 701,
            productName: 'Product WEWE',
            categoryId: 803,
            quantityPerUnit: 4,
            unitPrice: 13,
            discontinued: 'N'
        }, {
            id: 701,
            productName: 'Product PHBWER',
            categoryId: 802,
            quantityPerUnit: 2,
            unitPrice: 11,
            discontinued: 'Y'
        }, ]

        var getLocations = function() {
            return $timeout(function() {
                return locations;
            }, 100);
        };

        var getLocation = function(id) {
            var timeout = $timeout(function() {
                for (var i = 0; i < locations.length; i++)
                    if (locations[i].id == id)
                        return locations[i];
                return undefined;
            }, 100);

            return timeout;
        };

        var getEmployees = function() {
            return $timeout(function() {
                return employees;
            }, 100);
        };

        var getEmployee = function(id) {
            return $timeout(function() {
                for (var i = 0; i < employees.length; i++)
                    if (employees[i].id == id)
                        return employees[i];
                return undefined;
            }, 100);
        };

        var getOrders = function() {
            //    return $timeout(function() {
            return orders;
            //   }, 100);
        }

        var getTeams = function() {
            //    return $timeout(function() {
            return teams;
            //  }, 100);
        }

        var getProducts = function() {
            //  return $timeout(function() {
            return products;
            //  }, 100);
        }
        var getCustomers = function() {
            //return $timeout(function() {
                return customers;
          //  }, 100);
        }
        var getOrder = function(orderId) {
            return $timeout(function() {
                return _.find(orders, function(o) {
                    o.id = orderId;
                });
            }, 100);
        }

        var getDetailById = function(dataSet, pid) {
            if(dataSet && pid && dataSet.length > 0 ){
              return   _.find( dataSet, function ( d ){ return (d.id == pid);});
            }
        }

        return {
            getLocations: getLocations,
            getLocation: getLocation,
            getEmployees: getEmployees,
            getEmployee: getEmployee,
            getOrders: getOrders,
            getOrder: getOrder,
            getTeams: getTeams,
            getProducts: getProducts,
            getCustomers: getCustomers,
            getDetailById:getDetailById
        };
    }
]);
