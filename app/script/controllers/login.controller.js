(function () {
    angular.module('app')
        .controller('loginController', function (apiService, $scope, $location) {
            $scope.login = function () {
                apiService.login($scope.user.email, $scope.user.password)
                    .then(function (response) {
                        console.log(response);
                        apiService.getProducts();
                        $location.path( "/products/" );
                    })
            }
        })
    
})();