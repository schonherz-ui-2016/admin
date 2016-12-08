/**
 * Created by LordLepeny on 2016. 12. 07..
 */
(function () {
    angular.module('app')
        .controller(lController', function ($http, apiService, $scope,) {
            $scope.details = function () {
                apiService.register($scope.user.sureName, $scope.user.lastName, $scope.user.mobile)
                    .then(function (response) {
                        console.log(response);
                    })
            }
        })

})();