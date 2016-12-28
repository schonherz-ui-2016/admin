(function () {
    angular.module('app')
        .controller('productListController', function ($http, $scope, $locale, apiService, $location) {
            apiService.getCategories()
                .then(function (response) {
                    $scope.categories = response.data;
                });
            apiService.getProducts()
                    .then(function (response) {
                        $scope.products = [];
                        angular.forEach(response.data, function (x) {
                            var found = false;
                            angular.forEach($scope.products, function (value, key) {
                                if(value[0].category.name === x.category.name){
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
            $scope.propertyName = 'id';
            $scope.reverse = false;
            $scope.sortBy = function (propertyName) {
                $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
                $scope.propertyName = propertyName;
            }
        })

})();