(function () {
    angular.module('app')
        .controller('categoriesController', function ($http, $scope, $locale, apiService, $location) {
            apiService.getCategories()
                .then(function (res) {
                    $scope.categories = [];
                    angular.forEach(res.data, function (x) {
                        var obj = {id: x.id, name: x.name, createdAt: x.createdAt, updatedAt: x.updatedAt};
                        $scope.categories.push(obj);
                    });
                });
        })
})();