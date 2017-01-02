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
            $scope.back=function () {
                $location.path('/categories');
            };
            $scope.addNewCategory=function (newCategory) {
                newCategory.parent=$scope.category.id;
                apiService.addCategory(newCategory);

            };
            $scope.removeCategory=function () {
                console.log($scope.category.id);
                apiService.removeCategory($scope.category.id)
                    .then(function (res) {
                        console.log(res);
                        $location.path('/categories');
                    })
            }
        })
})();
