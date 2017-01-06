/**
 * Created by sa on 2017.01.05..
 */
(function () {
    angular.module('app')
        .directive('categoriesCollectionDirective', function () {
            return {
                restrict:'E',
                scope: {
                    data:'='
                },
                templateUrl:'script/directives/categories.tree/list.html'
            };
        })
})();