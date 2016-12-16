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

           apiService.getProduct($routeParams.id)
                   .then(function (response) {
                       $scope.product=response.data;
                   })
        })
})();
