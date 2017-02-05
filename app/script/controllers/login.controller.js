(function () {
    angular.module('app')
        .controller('loginController',['$http','apiService','$scope','$location', function ($http, apiService, $scope, $location) {
            $scope.login = function () {

                apiService.login($scope.user.email, $scope.user.password)
                    .then(function () {
                        $location.path( "/" );
                    })
            }
        }])
})();