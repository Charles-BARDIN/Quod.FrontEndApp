angular.module('quod.frontEndApp')
    .service('connectivity.web-socket-dispatcher', [
        'core.constants.jws-connect-url',
        'core.constants.jws-web-socket-url',
        'core.auth',
        'core.connectivity.heart-beat',
        // Quotes
        // TimeAndSales
        // MarketDepth
        // Alerts
        // News
        // CashAccounts
        // Movers
        // Orders
        // ProfitAndLoss
        function webSocketDispatcher(jwsConnect, jwsWebSocket, auth, heartBeat) { }
    ]);