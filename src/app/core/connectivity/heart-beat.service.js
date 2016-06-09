angular.module('quod.frontEndApp.core.connectivity')
    .service('core.connectivity.heart-beat', [
        'core.auth',
        'core.constants.config',
        function heartBeat(auth, config) { }
    ]);