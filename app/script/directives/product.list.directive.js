(function () {
    angular.module('app')
        .directive('productListDirective', function () {
            return {
                restrict: 'A',
                templateUrl: 'templates/tableForProducts.html'
            };
        })
})();
