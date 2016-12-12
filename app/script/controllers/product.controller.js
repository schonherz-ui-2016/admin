/**
 * Created by sa on 2016.12.12..
 */
(function () {
    angular.module('app')
        .controller('productController', function ( $scope, apiService, $routeParams) {
            apiService.getProduct($routeParams.id)
                .then(function (response) {
                    console.log(response);
                    $scope.product=response.data;
                })

        })

})();
