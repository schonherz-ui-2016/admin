/**
 * Created by LordLepeny on 2016. 12. 22..
 */
(function () {
    angular.module('app')
        .controller('delUserController', function ($http, apiService, $scope, $location) {
            $scope.deleteUser=function () {
                apiService.delUser($scope.id)
                    .then(function () {
                        $location.path( "/users" );
                    })
            }
        })

})();