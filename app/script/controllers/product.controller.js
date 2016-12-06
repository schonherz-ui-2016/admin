(function () {
    angular.module('app')
        .controller('productController', function ($http, $scope) {
            $http({
                url:'http://localhost:1337/product',
                method:'GET'

            })
                .then(function(response){
                    $scope.product=response.product;
                    console.log(response);

                })


        })

})();