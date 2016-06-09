(function () {
    'use strict';

    angular
        .module('Quod.Core.Connectivity')
        .service('Quod.Core.Connectivity.JWSService', [
            'Quod.Libs.AngularSoap.AngularSoapService',
            'Quod.Core.JwsDealerUrlConstant',
            JWSService
        ]);

    function JWSService($soap, JwsDealer) { }
})();
