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
               });

            $scope.$watch(function () {
                console.log(localStorage.getItem('loggedIn'));
                return localStorage.getItem('loggedIn');
            }, function (loggedIn) {
                console.log(loggedIn);
                if(loggedIn){
                    console.log(loggedIn);
                    console.log("mainContr");
                    apiService.getUserId()
                        .then(function (res) {
                            console.log("id:")
                            console.log(res.data);
                            $scope.userId=res.data;
                            // localStorage.setItem('userId',res.data);
                        })
                }
            })

            $scope.logout=function logout() {
                apiService.logout();
                console.log("logout!!");
            }

        } )
})();
