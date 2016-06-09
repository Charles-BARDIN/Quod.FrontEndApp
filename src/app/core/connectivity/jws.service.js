angular.module('quod.frontEndApp.core.connectivity')
    .service('core.connectivity.jws', [
        'quod.angular-soap',
        'core.constants.jws-dealer-url',
        function jws($soap, jwsDealer) { }
    ]);