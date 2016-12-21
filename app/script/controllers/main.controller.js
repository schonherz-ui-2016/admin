/**
 * Created by sa on 2016.12.13..
 */
(function () {
    angular.module('app')
        .controller('mainController', function (apiService, $scope) {
            localStorage.setItem('loggedIn', false);
            $scope.$watch(function () {
                return localStorage.getItem('token');
            }, function (token) {
                $scope.token=token;
                if(token){
                    apiService.getUserId()
                        .then(function (response) {
                            $scope.user=response.data;
                        })
                }
               });

            $scope.logout=function logout() {
                apiService.logout();
            }

        } )
})();
