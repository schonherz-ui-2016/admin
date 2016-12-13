/**
 * Created by sa on 2016.12.13..
 */
(function () {
    angular.module('app')
        .controller('mainController', function (apiService, $scope) {
            console.log("mainController");
            localStorage.setItem('token','');
            $scope.loggedIn=false;
            $scope.logout=function logout() {
                apiService.logout();
                $scope.loggedIn=false;
                console.log("logout!!");
            }

        } )
})();
