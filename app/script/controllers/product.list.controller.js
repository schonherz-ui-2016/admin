(function () {
    angular.module('app')
        .controller('productListController', function ($http, $scope, $locale, apiService, $location) {
              apiService.getProducts()
                    .then(function (response) {
                         $scope.products=response.data;
                    });
            $scope.add = function () {
                $location.path('/new_product');
            };
        })

})();