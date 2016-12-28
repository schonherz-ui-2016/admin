(function () {
    angular.module('app')
        .controller('categoriesDetailsController', function ($http, $scope, $locale, apiService, $location, $routeParams){
            apiService.getCategory($routeParams.id)
                .then(function (res) {
                    $scope.category = res.data;
                    console.log($scope.category);
                })
        })
})();
