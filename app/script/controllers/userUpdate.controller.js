/**
 * Created by LordLepeny on 2016. 12. 13..
 */
(function () {
    angular.module('app')
        .controller('userUpdateController', function ($http, apiService, $scope, $location, $routeParams) {

            $scope.userUpdate = function () {
                apiService.userUpdate($scope.user)
            }
            apiService.getUser($routeParams.id)
                .then(function (response) {
                    $scope.user = response.data
                })
        })

})();