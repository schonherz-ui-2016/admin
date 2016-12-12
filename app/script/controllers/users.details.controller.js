
(function () {
    angular.module('app')
        .controller('usersDetailsController', function (apiService, $scope, $routeParams) {
            apiService.getUsersId($routeParams.id)
                .then(function (res) {
                    $scope.users = res.data;
                })
        })
})();
