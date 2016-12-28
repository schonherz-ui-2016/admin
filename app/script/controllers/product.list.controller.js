(function () {
    angular.module('app')
        .controller('productListController', function ($http, $scope, $locale, apiService, $location) {
            apiService.getProducts()
                    .then(function (response) {
                        $scope.products = [];
                        angular.forEach(response.data, function (x) {
                            x.category = x.category.name;
                            var found = false;
                            angular.forEach($scope.products, function (value, key) {
                                if(value[0].category === x.category){
                                    $scope.products[key].push(x);
                                    found = true;
                                }
                            });
                            if(!found){
                                $scope.products.push([]);
                                $scope.products[$scope.products.length-1].push(x);
                            }
                        });
                    });
            $scope.add = function () {
                $location.path('/new_product');
            };
        })

})();