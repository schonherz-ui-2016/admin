/**
 * Created by sa on 2016.12.13..
 */
(function () {
    angular.module('app')
        .controller('mainController', function (apiService, $scope) {
            var stringToken="";
            localStorage.setItem('loggedIn', false);
            $scope.$watch(function () {
                return localStorage.getItem('token');
            }, function (token) {
                $scope.token=token;
                stringToken=token;
                var id="";
                if(stringToken!==""){
                    apiService.getUserId()
                        .then(function (res) {
                        id=res.data;
                            apiService.getUser(id)
                                .then(function (response) {
                                    $scope.user=response.data;
                                })
                        })
                }
               });

            $scope.logout=function logout() {
                apiService.logout();
            }

        } )
})();
