(function () {
    angular.module('app')
        .controller('categoriesController', function ($http, $scope, $locale, apiService) {
            apiService.getCategories()
                .then(function (res) {
                    $scope.categories = [];
                    angular.forEach(res.data, function (x) {
                        var obj = {
                            id: x.id,
                            name: x.name,
                            parent: x.parent,
                            createdAt: x.createdAt,
                            updatedAt: x.updatedAt
                        };
                        if (obj.parent != null) {
                            obj.parent = x.parent.name;
                            obj.id = x.id
                        }
                        $scope.categories.push(obj);
                    });
                    var recurse = function (parent) {
                        var r = res.data.filter(function (el) {
                            return (el.parent || {}).id == parent
                        });
                        r.forEach((function (el) {
                            el.children = recurse(el.id);
                        }));
                        return r;
                    };
                    $scope.data = recurse();

                });
        });
})();