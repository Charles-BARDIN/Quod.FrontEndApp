(function () {
    'use strict';

    angular
        .module('Quod.Core.Connectivity')
        .service('Quod.Core.Connectivity.SubscribeService', [
            'Quod.Core.Connectivity.JWSService',
            SubscribeService
        ]);

    function SubscribeService(JWSService) { }
})();
