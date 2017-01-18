(function () {
    angular.module('app')
        .controller('categoriesController', function ($http, $scope, $locale, apiService, $filter, $location) {
            apiService.getCategories()
                .then(function (res) {
                    $scope.categories = [];
                    angular.forEach(res.data, function (x) {
                        var createdAt = $filter('date')(x.createdAt, 'yyyy-MM-dd EEEE HH:mm:ss');
                        var updatedAt = $filter('date')(x.updatedAt, 'yyyy-MM-dd EEEE HH:mm:ss');
                        var obj = {id: x.id, name: x.name, parent: x.parent, createdAt : createdAt , updatedAt: updatedAt};
                        if(obj.parent != null){
                            obj.parent = x.parent.name;
                        }
                        $scope.categories.push(obj);
                    });
                });
        });
})();