(function () {
    angular.module('app')
        .controller('addProductController', function ($scope, apiService, $location) {
            $scope.newProduct = function () {
                apiService.addProduct($scope.product)
                    .then(function () {
                        $location.path('/products')
                    });
            };
            (function() {
                apiService.getCategory()
                    .then(function (res) {
                        $scope.category = res.data.map(function (obj) {
                            return obj;
                        });
                    });
            })();
        })
})();