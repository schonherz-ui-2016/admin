(function () {
    angular.module('app')
        .controller('registerController',['$http','apiService','$scope','$location', function ($http, apiService, $scope, $location) {
            $scope.user={},
            $scope.register=function () {
                apiService.register($scope.user)
                    .then(function () {
                        $location.path( "/login" );
                    })
            }
        }])

})();