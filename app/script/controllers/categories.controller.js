(function () {
    angular.module('app')
        .controller('categoriesController', function ($http, $scope, $locale, apiService, $location) {
            apiService.getCategories()
                .then(function (res) {
                    console.log(res);
                    $scope.categories = [];
                    $scope.categories2= [];
                    $scope.categoryIds=[];
                    $scope.allCategories = [
                        {   id:1,
                            name: 'Mezőgazdasági eszközök',
                            children: [
                                {   id:2,
                                    name: 'Ekék',
                                    children: [
                                        {   id:4,
                                            name: 'Kiseke',
                                            children: [
                                                {   id:5,
                                                    name:'MiniEke',
                                                    children:[]},

                                                {   id:6,
                                                    name:'MidiEke',
                                                    children:[]}
                                            ]
                                        },
                                        {   id:7,
                                            name: 'Nagyeke'
                                        }
                                    ]
                                },
                                {   id:3,
                                    name: 'Traktorok'
                                }
                            ]
                        }
                    ];
                    angular.forEach(res.data, function (x) {
                        var obj = {id: x.id, name: x.name, parent: x.parent, createdAt: x.createdAt, updatedAt: x.updatedAt};
                        if(obj.parent != null){
                            obj.parent = x.parent.name;
                            obj.id=x.id
                        }
                        $scope.categories.push(obj);

                    });
                    angular.forEach(res.data, function (x) {
                        var obj = {id: x.id, name: x.name, parent: x.parent, createdAt: x.createdAt, updatedAt: x.updatedAt};
                        if(obj.parent != null){
                            obj.parent = x.parent.id;
                            obj.id=x.id
                        }
                        $scope.categories2.push(obj);

                    });
                    console.log("$scope.categories2:")
                    console.log($scope.categories2);

                    var recurse = function (parent) {
                        var r = $scope.categories2.filter(function (el) {
                            return el.parent==parent
                        });
                        r.forEach((function (el) {
                            el.children=recurse(el.id);
                        }));
                        return r;
                    };
                    $scope.data=recurse();
                    console.log("$scope.data:");
                    console.log($scope.data);

                });
        });
})();