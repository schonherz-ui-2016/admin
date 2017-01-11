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
               $scope.deleteCategories();

                apiService.removeCategory($scope.category.id)
                    .then(function () {
                        $location.path('/categories');
                    })
            };
            $scope.deleteCategories=function () {
                var recurse = function (parent) {
                    var r =  $scope.categories.filter(function (el) {
                        return (el.parent||{}).id==parent
                    });
                    r.forEach((function (el) {
                        el.children=recurse(el.id);
                    }));
                    return r;
                };
                $scope.data=recurse();

                let findObject=function (objTree, searchID) {
                    for (var nodeIdx= 0; nodeIdx<=objTree.length-1; nodeIdx++){
                        var currentNode = objTree[nodeIdx],
                            currentId = currentNode.id,
                            currentChildren = currentNode.children;
                        console.log("Comparing treeNodes element with ID==" +
                            currentId + " to SearchID==" + searchID);
                        if (currentId == searchID) {
                            console.log("Match!");
                            return currentNode;
                        } else {
                            console.log("No Match! Trying " + currentChildren.length +
                                " Children of Node ID#" + currentId);
                            var foundDescendant = findObject(currentChildren, searchID);
                            if (foundDescendant) {
                                return foundDescendant;
                            }
                        }
                    }
                    console.log("Done trying " + objTree.length + " children. Returning False");
                    return false;

                };
                $scope.findObject= findObject($scope.data,$scope.category.id);

                console.log("$scope.category:");
                console.log($scope.category);
                console.log("$scope.findObject:");
                console.log($scope.findObject);
                console.log("$scope.data:");
                console.log($scope.data);
            }
        })
})();
