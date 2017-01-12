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
            $scope.back=function () {
                $location.path('/categories');
            };
            $scope.addNewCategory=function (newCategory) {
                newCategory.parent=$scope.category.id;
                apiService.addCategory(newCategory);
            };
            $scope.removeCategory=function () {
                var children = [];
                children.push($scope.category.id);
                var recurse = function (parent) {
                    var r = $scope.categories.filter(function (el) {
                        return (el.parent || {}).id == parent
                    });
                    r.forEach(function (el) {
                        children.push(el.id);
                        recurse(el.id);
                    })
                };
                recurse($scope.category.id);
                for (var i = 0; i < children.length; i++) {
                    console.log("children[i]");
                    console.log(children[i]);
                    if (i == children.length - 1) {
                        apiService.removeCategory(children[i])
                            .then(function () {
                                $location.path('/categories');
                            });
                    } else {
                        apiService.removeCategory(children[i]);
                    }
                }
            };
        })
})();
