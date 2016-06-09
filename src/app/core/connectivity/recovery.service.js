(function () {
    'use strict';

    angular
        .module('Quod.Core.Connectivity')
        .service('Quod.Core.Connectivity.RecoveryService', [
            'Quod.Core.Connectivity.JWSService',
            RecoveryService
        ]);

    function RecoveryService(JWSService) { }
})();
