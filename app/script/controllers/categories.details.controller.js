(function () {
    angular.module('app')
        .controller('categoriesDetailsController', function ($http, $scope, $locale, apiService, $location, $routeParams){
            apiService.getCategory($routeParams.id)
                .then(function (res) {
                    $scope.category = res.data;
                    // $scope.categoryParent=res.data.parent;
                });
            $scope.categoryUpdate=function () {
                apiService.categoryUpdate($scope.category)
                    .then(function (res) {
                       $scope.category=res.data;
                        console.log("category:");
                        console.log($scope.category);
                    });
            };

            apiService.getCategories()
                .then(function (res) {
                    $scope.categories = res.data;
                    console.log("categories:");
                    console.log($scope.categories);
                });
        })
})();
