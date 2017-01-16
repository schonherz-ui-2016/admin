
(function () {
    angular.module('app')
        .controller('usersDetailsController', function (apiService, $scope, $routeParams, $location) {
            apiService.getUser($routeParams.id)
                .then(function (res) {
                    console.log(res.data);
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

            $scope.backUsers=function () {
                $location.path('/users');
            };

            $scope.removeUser=function () {
                apiService.deleteUser($scope.user.id)
                    .then(function () {
                        $location.path( "/users" );
                    })
            };

            apiService.getRoles()
                .then(function (res) {
                    $scope.roles = res.data;
                    console.log($scope.roles);
                });

            $scope.userUpdateForRole = function () {
                console.log($scope.user);
                angular.forEach($scope.roles, function (x) {
                    if($scope.user.roles == x.role){
                        console.log($scope.user.roles);
                        $scope.user.roles = [];
                        delete x.id;
                        $scope.user.roles.push(x);
                    }
                });
                $scope.userUpdate();
            }
        })
})();
