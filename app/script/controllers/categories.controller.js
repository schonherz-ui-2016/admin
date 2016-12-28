(function () {
    angular.module('app')
        .controller('categoriesController', function ($http, $scope, $locale, apiService, $location) {
            apiService.getCategories()
                .then(function (res) {
                    $scope.categories = res.data;
                });
        })
})();