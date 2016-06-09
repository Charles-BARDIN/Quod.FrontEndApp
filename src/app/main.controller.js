(function () {
    'use strict';

    angular
        .module('Quod.FrontEndApp')
        // TODO: Throw away all those dependencies, they are there to show that the modules are correctly defined.
        .controller('Quod.FrontEndApp.MainController', [
            '$scope',

            'Quod.Libs.AngularSoap.AngularSoapService',

            'Quod.Core.AuthService',
            'Quod.Core.ConfigConstant',
            'Quod.Core.JwsConnectUrlConstant',
            'Quod.Core.JwsDealerUrlConstant',
            'Quod.Core.JwsWebSocketUrlConstant',

            'Quod.Core.Connectivity.HeartBeatService',
            'Quod.Core.Connectivity.JWSService',
            'Quod.Core.Connectivity.RecoveryService',
            'Quod.Core.Connectivity.SubscribeService',

            'Quod.FrontEndApp.WebSocketDispatcherService',
            'Quod.FrontEndApp.Quotes.QuotesService',
            'Quod.FrontEndApp.Users.UsersService',
            MainController
        ]);

    function MainController($scope, AuthService, ConfigConstant, JwsConnectUrlConstant, JwsDealerUrlConstant,
        JwsWebSocketUrlConstant, HeartBeatService, JWSService, RecoveryService, SubscribeService,
        WebSocketDispatcherService, QuotesService, UsersService) {
        $scope.message = "It works!";
    }
})();
