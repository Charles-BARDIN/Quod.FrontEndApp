angular.module('quod.frontEndApp')
    .controller('mainCtrl', [
        '$scope',
        'core.auth',
        'web-socket-dispatcher',
        function mainCtrl($scope, auth, webSocketDispatcher) {
            $scope.message = "It works!";
        }
    ]);