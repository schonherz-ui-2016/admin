/**
 * Created by sa on 2016.12.12..
 */
(function () {
    angular.module('app')
        .controller('productController', function ( $scope, apiService, $routeParams, $location) {
           $scope.removeProduct=function () {
               apiService.removeProduct($routeParams.id)
                   .then(function () {
                       $location.path('/products');
                   })
           };
           $scope.productUpdate=function () {
             apiService.productUpdate($scope.product)
                 .then(function (response) {
                        $scope.product =response.data;
                 })
           };
           apiService.getProduct($routeParams.id)
                   .then(function (response) {
                       $scope.product=response.data;
                   });
            apiService.getCategories()
                .then(function (res) {
                    $scope.categories = res.data;
                });
            $scope.back=function () {
                $location.path('/products');
            };

        })
})();
