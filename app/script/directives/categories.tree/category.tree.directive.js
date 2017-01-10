/**
 * Created by sa on 2017.01.05..
 */
(function () {
    angular.module('app')
        .directive('categoryTree', function () {
            return {
                restrict:'E',
                scope: {
                    data:'='
                },
                templateUrl:'script/directives/categories.tree/category.tree.html',
                controller: function ($scope) {
                    $scope.openfv = function (id) {
                        console.log(id);
                        angular.forEach($scope.data, function (x) {
                            if(x.id == id){
                                if(x.children.length == 0){
                                    $('.sign').remove();
                                }
                            }
                        })
                    }
                }
            };
        })
})();