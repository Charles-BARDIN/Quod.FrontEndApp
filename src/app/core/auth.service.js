(function () {
    'use strict';

    angular
        .module('Quod.Core')
        .service('Quod.Core.AuthService', [
            'Quod.Core.Connectivity.JWSService',
            'Quod.FrontEndApp.Users.UsersService', /* was CommonService */
            AuthService
        ]);

    function AuthService(JWSService, UsersService) { }
})();
