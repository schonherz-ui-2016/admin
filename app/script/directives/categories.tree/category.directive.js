(function () {
    angular.module('app')
        .directive('categoryDirective', function ($compile) {
            return {
                restrict:'A',
                replace: true,
                scope: {
                    member:'='
                },
                templateUrl: 'script/directives/categories.tree/member.list.html',
                link: function (scope, element, attrs) {
                    if (angular.isArray(scope.member.children)) {
                        element.append("<categories-collection-directive data='member.children'></categories-collection-directive>");
                        $compile(element.contents())(scope)
                    }
                }
            };
        })
})();