
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

            $scope.backUsers=function () {
                $location.path('/users');
            };

            $scope.removeUser=function () {
                apiService.deleteUser($scope.user.id)
                    .then(function () {
                        $location.path( "/users" );
                    })
            };

            $scope.roles = [
                {
                    name: "admin",
					id: 1
                },
                {
                    name: "user",
					id: 2
                },
                {
                    name: "warehouse owner",
					id: 3
                }
            ];
            apiService.getRoles()
                .then(function (res) {
                    $scope.rolesFromBackend = res.data;
                });

            $scope.userUpdateForRole = function () {
				var keepGoing = true;
                angular.forEach($scope.rolesFromBackend, function (x) {
					if(keepGoing){
						if($scope.user2.roles.name == x.role){
							if($scope.user.roles.length != 0){
								angular.forEach($scope.user.roles, function(y){
								if(y.role != x.role){
									delete x.id;
									$scope.user.roles.push(x);
									keepGoing = false;
								}
								})
							} 
							else{
								delete x.id;
								$scope.user.roles.push(x);
								keepGoing = false;
							}
						}
					}
                });
                $scope.userUpdate();
            }
        })
})();
