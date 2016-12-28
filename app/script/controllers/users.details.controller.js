
(function () {
    angular.module('app')
        .controller('usersDetailsController', function (apiService, $scope, $routeParams) {
            apiService.getUser($routeParams.id)
                .then(function (res) {
                    $scope.users = res.data;
                });

        })
})();
