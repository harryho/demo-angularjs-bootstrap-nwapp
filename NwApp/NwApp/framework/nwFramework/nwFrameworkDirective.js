"use strict"

angular.module('nwFramework').directive("nwFramework", function () {
    return {
        transclude: true,
        scope: {
            title: '@',
            subtitle: '@',
            logoFile: '@'
        },
        controller: "nwFrameworkController",
        templateUrl: "framework/nwFramework/nwFrameworkTemplate.html"
        
    };
});