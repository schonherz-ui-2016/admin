(function () {
    angular.module('app')
        .controller('categoriesController', function ($http, $scope, $locale, apiService, $location) {
            apiService.getCategories()
                .then(function (res) {
                    $scope.categories = res.data;
                });

            $scope.loadCategory=function (category) {
                this.name=category.name;
                this.id=category.id;
                console.log(this.name);


            }
        });


})();