angular.module('quod.frontEndApp.quotes')
    .service('quotes', [
        // JWSService
        'core.connectivity.jws',
        // ListingInstruments
        // MDEntitlements
        // SubscribeService
        'core.connectivity.subscribe',
        // Venues
        // Markets
        // GeneralUtilsService
        // ProfitAndLoss
        function quotesService() { }
    ]);