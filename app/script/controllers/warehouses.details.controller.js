(function () {
    angular.module('app')
        .controller('warehousesDetailsController',['apiService','$scope','$routeParams', function (apiService, $scope, $routeParams) {
            apiService.getWarehouse($routeParams.id)
                .then(function (res) {
                    $scope.warehouse = res.data;
                })
        }])
})();