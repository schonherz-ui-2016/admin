(function () {
    angular.module('app')
        .controller('categoriesController', function ($http, $scope, $locale, apiService, $location) {
            apiService.getCategories()
                .then(function (res) {
                    $scope.categories = [];
                    $scope.allCategories = [
                        {
                            name: 'Mezőgazdasági eszközök',
                            children: [
                                {
                                    name: 'Ekék',
                                    children: [
                                        {
                                            name: 'Kiseke'
                                        },
                                        {
                                            name: 'Nagyeke'
                                        }
                                    ]
                                },
                                {
                                    name: 'Traktorok'
                                }
                            ]
                        }
                    ];
                    angular.forEach(res.data, function (x) {
                        var obj = {id: x.id, name: x.name, parent: x.parent, createdAt: x.createdAt, updatedAt: x.updatedAt};
                        if(obj.parent != null){
                            obj.parent = x.parent.name;
                        }
                        $scope.categories.push(obj);
                    });
                });
        });
})();