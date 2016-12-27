(function () {
    angular.module('app')
        .controller('categoriesController', function ($http, $scope, $locale, apiService, $location) {
            apiService.getCategories()
                .then(function (response) {
                    $scope.categories = response.data;
                });
            apiService.getProducts()
                .then(function (response) {
                    $scope.products = [];
                    //console.log(response);
                    //console.log("asdasd");
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
                            //console.log($scope.products);
                            $scope.products[$scope.products.length-1].push(x);
                        }
                        //if(!$scope.products[x.category.name]){
                        //    $scope.products[x.category.name] = [];
                        //}

                    });
                   // console.log($scope.products);
                });
            $scope.add = function () {
                $location.path('/new_product');
            };
            $scope.openTable = function (name) {
               // console.log(name);
            }

        })
})();


