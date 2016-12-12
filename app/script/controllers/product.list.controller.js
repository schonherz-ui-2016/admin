(function () {
    angular.module('app')
        .controller('productListController', function ($http, $scope, $locale, apiService) {
              apiService.getProducts()
                    .then(function (response) {
                         $scope.products=response.data;
                    })

        })

})();