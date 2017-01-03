(function () {
    angular.module('app')
        .directive('sortableListDirective', function () {
            return {
                restrict: 'A',
                scope: {
                    data: '=',
                    link: '='

                },
                controller: 'sortableListController',
                templateUrl: 'script/directives/template_and_js_for_sortable_list_directive/table.html'
            };
        })
})();
