
(function () {
    angular.module('app')
        .controller('usersDetailsController', function (apiService, $scope, $routeParams, $location) {
            apiService.getUser($routeParams.id)
                .then(function (res) {
                    $scope.users = res.data;
                });
            $scope.updateUser = function () {
                $location.path("/userUpdate/"+$routeParams.id);
            }
        })
})();
