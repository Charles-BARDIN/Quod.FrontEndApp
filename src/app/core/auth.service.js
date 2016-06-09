angular.module('quod.frontEndApp.core')
    .service('core.auth', [
        'core.connectivity.jws',
        'users.find', /* was CommonService */
        function auth(jws, users) { }
    ]);
