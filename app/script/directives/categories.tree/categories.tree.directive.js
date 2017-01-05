/**
 * Created by sa on 2017.01.05..
 */
(function () {
    angular.module('app')
        .directive('categoriesTreeDirective', function () {
            return {
                restrict:'A',
                scope: {
                    data:'=',
                    link:'='
                },
                controller:function ($scope) {
                    $scope.attributes = Object.keys($scope.data[0]);
                    $scope.propertyName = $scope.attributes[0];
                    
                },
                templateUrl:'script/directives/categories.tree/list.html'
            };
        })
})();