(function () {
    'use strict';

    angular.module('Quod.FrontEndApp', [
        'Quod.Libs.AngularSoap',
        'Quod.Core',
        'Quod.Core.Connectivity',
        'Quod.FrontEndApp.Quotes',
        'Quod.FrontEndApp.Users'
    ]);
})();
