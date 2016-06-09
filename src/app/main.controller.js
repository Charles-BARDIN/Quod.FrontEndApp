(function () {
    'use strict';

    angular
        .module('Quod.FrontEndApp')
        .controller('Quod.FrontEndApp.MainController', [
            '$scope',
            'Quod.Core.AuthService',
            'Quod.FrontEndApp.WebSocketDispatcherService',
            MainController
        ]);

    function MainController($scope, AuthService, WebSocketDispatcherService) {
        $scope.message = "It works!";
    }
})();
