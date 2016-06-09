angular.module('quod.frontEndApp')
    .controller('mainCtrl', [
        '$scope',
        'core.auth',
        function mainCtrl($scope, auth) {
            $scope.message = "It works!";
        }
    ]);