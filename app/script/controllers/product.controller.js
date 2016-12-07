(function () {
    angular.module('app')
        .controller('productController', function ($scope, apiService) {
            apiService.getProducts()
                .then(function(response){
                    $scope.product = response.data;
                    console.log(response);

                })
        })

})();