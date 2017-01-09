(function () {
    angular.module('app')
        .controller('categoriesController', function ($http, $scope, $locale, apiService, $location) {
            apiService.getCategories()
                .then(function (res) {
                    console.log(res);
                    $scope.categories = [];
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
                        $scope.categoryIds.push(x.id);
                    });
                    console.log("$scope.categories:")
                    console.log($scope.categories);
                    console.log("$scope.categoryIds:")
                    console.log($scope.categoryIds);
                    $scope.allCategories2=[];

                    angular.forEach($scope.categories,function (x) {
                        var obj={};
                        if(!x.parent){
                            obj.name=x.name;
                            obj.id=x.id;
                            obj.children=[];
                            $scope.allCategories2.push(obj);
                        }
                    });

                    angular.forEach($scope.categories,function (x) {
                        pasteInTree($scope.allCategories2,x);

                    });
                    // function foundInChildren(object, allId) {
                    //     thereIs=false;
                    //     angular.forEach(object, function (x) {
                    //         if(x.id in allId){
                    //             console.log("benne van");
                    //             thereIs=true;
                    //         }
                    //     });
                    //     return thereIs;
                    // }

                    function pasteInTree(tree,object) {
                        angular.forEach(tree, function (x) {
                            // if(x.children){
                            //     console.log("belemegy");
                            //
                            // if(!foundInChildren(x.children,$scope.categoryIds)){}
                            // }
                            if (x.name == object.parent) {
                                x.children.push({
                                    "name": object.name,
                                    "id": object.id,
                                    "children": []
                                });
                                   angular.forEach($scope.categories,function (z) {
                                        pasteInTree(x.children,z);
                                    })
                            }
                        })
                    };
                    console.log("$scope.allCategories2:");
                    console.log($scope.allCategories2);
                });
        });
})();