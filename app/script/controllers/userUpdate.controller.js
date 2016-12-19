/**
 * Created by LordLepeny on 2016. 12. 13..
 */
(function () {
    angular.module('app')
        .controller('userUpdateController', function ($http, apiService, $scope, $location, $routeParams) {
            apiService.getUsersId($routeParams.id)
                .then(function (response) {
                    $scope.user = response.data
                })
            $scope.register=function () {
                apiService.userUpdate($scope.user)
                    .then(function () {
                        $location.path( "/users" );
                    })
            }
        })

})();