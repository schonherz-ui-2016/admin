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
            $scope.propertyName = 'id';
            $scope.reverse = false;
            $scope.sortBy = function (propertyName) {
                $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
                $scope.propertyName = propertyName;
            }
        })

})();