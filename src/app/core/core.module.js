(function () {
    'use strict';

    angular
        .module('Quod.Core', [
            'Quod.Core.Connectivity',
            // TODO: Design flaw. Quod.Core should not depend on a Front End Module.
            'Quod.FrontEndApp.Users'
        ]);
})();
