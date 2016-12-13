/**
 * Created by sa on 2016.12.13..
 */
(function () {
    angular.module('app')
        .controller('mainController', function (apiService, $scope) {

            $scope.logout=function logout() {
                apiService.logout();
                console.log("logout!!");
            }

        } )
})();
