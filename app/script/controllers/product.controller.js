(function () {
    angular.module('app')
        .controller('productController', function ($http, $scope, $locale, apiService) {
              apiService.getProducts()
                    .then(function (response) {
                         $scope.products=response.data;
                    })

        })

})();