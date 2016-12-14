
(function () {
    angular.module('app')
        .controller('usersController', function (apiService, $scope) {
            apiService.getUsers()
                .then(function (res) {
                    $scope.users = res.data;
                })
        })
})();
