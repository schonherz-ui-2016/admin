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
                templateUrl:'script/directives/categories.tree/category.tree.html'
            };
        })
})();