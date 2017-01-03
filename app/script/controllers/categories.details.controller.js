(function () {
    angular.module('app')
        .controller('categoriesDetailsController', function ($http, $scope, $locale, apiService, $location, $routeParams){
            apiService.getCategory($routeParams.id)
                .then(function (res) {
                    $scope.category = res.data;
                });
            $scope.categoryUpdate=function () {
                apiService.categoryUpdate($scope.category)
                    .then(function (res) {
                       $scope.category=res.data;
                    });
            };

            apiService.getCategories()
                .then(function (res) {
                    $scope.categories = res.data;
                });
        })
})();
