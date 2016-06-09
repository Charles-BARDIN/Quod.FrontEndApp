(function () {
    'use strict';

    angular
        .module('Quod.FrontEndApp.Quotes')
        .service('Quod.FrontEndApp.Quotes.QuotesService', [
            'Quod.Core.Connectivity.JWSService',
            // ListingInstruments
            // MDEntitlements
            'Quod.Core.Connectivity.SubscribeService',
            // Venues
            // Markets
            // GeneralUtilsService
            // ProfitAndLoss
            QuotesService
        ]);

    function QuotesService() { }
})();
