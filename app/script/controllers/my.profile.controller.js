/**
 * Created by sa on 2016.12.22..
 */
(function () {
    angular.module('app')
        .controller('myProfileController',function (apiService, $http, $scope) {

                apiService.getUserId()
                    .then(function (response) {
                        $scope.myProfile=response.data;
                        console.log($scope.myProfile);
                    });
                $scope.myProfileUpdate=function () {
                    console.log("update");
                }

        })
})();