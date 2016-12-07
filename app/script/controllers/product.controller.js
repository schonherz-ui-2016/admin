(function () {
    angular.module('app')
        .controller('productController', function ($http, $scope, $locale, apiService) {
            $scope.products=function () {
                return  apiService.getProducts()
                    .then(function (response) {
                        // $scope.products=response.product;
                        console.log(response);
                        $location.path( "/product" );
                    })
            }




        })

})();