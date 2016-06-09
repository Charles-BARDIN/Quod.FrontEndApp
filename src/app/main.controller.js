angular.module('quod.frontEndApp')
    .controller('mainCtrl', [
        '$scope',
        'core.auth',
        'connectivity.web-socket-dispatcher',
        function mainCtrl($scope, auth, webSocketDispatcher) {
            $scope.message = "It works!";
        }
    ]);