(function () {
    angular.module('app')
        .controller('usersDetailsController', function (apiService, $scope, $routeParams, $location) {
            apiService.getUser($routeParams.id)
                .then(function (res) {
                    $scope.user = res.data;
                });

            $scope.userUpdate = function () {
                apiService.userUpdate($scope.user)
                    .then(function (res) {
                        $scope.user = res.data;
                    })
            };

            $scope.removeUser = function () {
                apiService.deleteUser($routeParams.id)
            };

            $scope.backUsers = function () {
                $location.path('/users');
            };

            $scope.removeUser = function () {
                apiService.deleteUser($scope.user.id)
                    .then(function () {
                        $location.path("/users");
                    })
            };

            $scope.roles = [
                {
                    role: "admin"
                },
                {
                    role: "user"
                },
                {
                    role: "warehouse owner"
                }
            ];
            apiService.getRoles()
                .then(function (res) {
                    $scope.rolesFromBackend = res.data;
                });
            $scope.tempUserForRole = [];
            $scope.userUpdateForRole = function () {
                angular.forEach($scope.rolesFromBackend, function (x) {
                    delete x.id;
                    delete x.createdAt;
                    delete x.updatedAt;
                });
                delete $scope.tempUserForRole[0].$$hashKey;
                $scope.user.roles = _.intersectionWith($scope.rolesFromBackend, $scope.tempUserForRole, _.isEqual);
                $scope.userUpdate();
            }
        })
})();
