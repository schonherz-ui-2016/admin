(function () {
    angular.module('app')
        .controller('registerController', function ($http, apiService, $scope, $location) {
            $scope.user={},
            $scope.register=function () {
                apiService.register($scope.user)
                    .then(function () {
                        $location.path( "/login" );
                    })
            }
        })

})();