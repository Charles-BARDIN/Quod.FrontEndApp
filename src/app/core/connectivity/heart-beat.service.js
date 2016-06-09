(function () {
    'use strict';

    angular
        .module('Quod.Core.Connectivity')
        .service('Quod.Core.Connectivity.HeartBeatService', [
            'Quod.Core.AuthService',
            'Quod.Core.ConfigConstant',
            HeartBeatService
        ]);

    function HeartBeatService(AuthService, ConfigConstant) { }
})();