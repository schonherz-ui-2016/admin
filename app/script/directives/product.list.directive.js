(function () {
    angular.module('app')
        .directive('productListDirective', function () {
            return {
                restrict: 'A',
                scope: {
                    data: '='
                },
                controller: 'productListController',
                templateUrl: 'templates/tableForProducts.html'
            };
        })
})();
