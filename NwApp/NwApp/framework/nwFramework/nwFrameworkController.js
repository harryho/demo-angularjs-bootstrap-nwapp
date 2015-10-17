"use strict"


angular.module("nwFramework")
    .controller("nwFrameworkController", ['$scope', '$window', '$timeout', '$rootScope', '$location',
        function($scope, $window, $timeout, $rootScope, $location) {
            $scope.isMenuVisible = true;
            $scope.isMenuButtonVisible = true;
            $scope.isMenuVertical = true;

            var checkWidth = function() {
                var width = Math.max($($window).width(), $window.innerWidth);
                $scope.isMenuVisible = (width >= 768);
                $scope.isMenuButtonVisible = !$scope.isMenuVisible;
            };

            var broadcastMenuState = function() {
                $rootScope.$broadcast('nw-menu-show', {
                    show: $scope.isMenuVisible,
                    isVertical: $scope.isMenuVertical,
                    allowHorizontalToggle: !$scope.isMenuButtonVisible
                });
            };

            $timeout(function() {
                checkWidth();
            }, 0);

            $($window).on('resize.nwFramework', function() {
                $scope.$apply(function() {
                    checkWidth();
                    broadcastMenuState();
                });
            });

            $scope.$on("$destroy", function() {
                $($window).off("resize.nwFramework"); // remove the handler added earlier
            });


            $scope.menuButtonClicked = function() {
                $scope.isMenuVisible = !$scope.isMenuVisible;
                broadcastMenuState();
                //    $scope.$apply();
            };



            $scope.$on('nw-menu-item-selected-event', function(evt, data) {
                $scope.routeString = data.route;
                $location.path(data.route);
                checkWidth();
                broadcastMenuState();
            });

            $scope.$on('nw-menu-orientation-changed-event', function(evt, data) {
                $scope.isMenuVertical = data.isMenuVertical;
                $timeout(function() {
                    $($window).trigger('resize');
                }, 0);
            });




        }
    ]);
