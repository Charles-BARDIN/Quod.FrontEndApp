(function () {
    'use strict';

    angular
        .module('Quod.FrontEndApp')
        .service('Quod.FrontEndApp.WebSocketDispatcherService', [
            'Quod.Core.JwsConnectUrlConstant',
            'Quod.Core.JwsWebSocketUrlConstant',
            'Quod.Core.AuthService',
            'Quod.Core.Connectivity.HeartBeatService',
            'Quod.FrontEndApp.Quotes.QuotesService',
            // TimeAndSales
            // MarketDepth
            // Alerts
            // News
            // CashAccounts
            // Movers
            // Orders
            // ProfitAndLoss
            WebSocketDispatcherService
        ]);

    function WebSocketDispatcherService(JwsConnect, JwsWebSocket, AuthService, HeartBeatService, QuotesService) { }
})();
