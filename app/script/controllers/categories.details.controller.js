(function () {
    angular.module('app')
        .controller('categoriesDetailsController', function ($http, $scope, $locale, apiService, $location, $routeParams, $route){
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
            $scope.back=function () {
                $location.path('/categories');
            };
            $scope.addNewCategory=function (newCategory) {
                newCategory.parent=$scope.category.id;
                apiService.addCategory(newCategory);
            };
            $scope.removeCategory=function () {
                apiService.removeCategory($scope.category.id)
                    .then(function () {
                        $location.path('/categories');
                    })
            }
        })
})();
