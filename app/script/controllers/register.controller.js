(function () {
    angular.module('app')
        .controller('registerController', function ($http, apiService, $scope, $location) {
            $scope.registration=function () {
                apiService.register($scope.user.email,$scope.user.password)
                    .then(function () {
                        $location.path( "/user/login" );
                    })
            }
        })

})();