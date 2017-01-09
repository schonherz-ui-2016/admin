
(function () {
    angular.module('app')
        .controller('usersDetailsController', function (apiService, $scope, $routeParams, $location) {
            apiService.getUser($routeParams.id)
                .then(function (res) {
                    $scope.user = res.data;
                });
            /*$scope.updateUser = function () {
                $location.path("/userUpdate/"+$routeParams.id);
            }*/
            $scope.userUpdate = function () {
                apiService.userUpdate($scope.user)
            }

            $scope.removeUser = function () {
                apiService.deleteUser($routeParams.id)
            }

            $scope.backUsers=function () {
                $location.path('/users');
            };
        })
})();
