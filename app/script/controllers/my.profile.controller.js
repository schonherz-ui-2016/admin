/**
 * Created by sa on 2016.12.22..
 */
(function () {
    angular.module('app')
        .controller('myProfileController',function (apiService, $scope, $location) {
                apiService.getUserId()
                    .then(function (response) {
                        $scope.myProfile=response.data;
						console.log(response.data);
                    });
                $scope.myProfileUpdate=function () {

                    apiService.myProfileUpdate($scope.myProfile)
                        .then(function (response) {
                            $scope.myProfile=response.data;
                        })
                };

            $scope.checkPhone = function(data) {
                var re = new RegExp(/^\(?(\d{2})\)?[- ]?(\d{3})[- ]?(\d{4})$/);
                if (!re.test(data)) {
                    return "Your phone number should look like: 'xx-xxx-xxxx'";
                }
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
							if($scope.myProfile.roles.length != 0){
								angular.forEach($scope.myProfile.roles, function(y){
								if(y.role != x.role){
									delete x.id;
									$scope.myProfile.roles.push(x);
									keepGoing = false;
								}
								})
							} 
							else{
								delete x.id;
								$scope.myProfile.roles.push(x);
								keepGoing = false;
							}
						}
					}
                });
                $scope.myProfileUpdate();
            }

            $scope.removeMyProfile=function () {
                    apiService.removeUser($scope.myProfile.id)
                        .then(function () {
                            apiService.logout();
                            $location.path( "/" );
                        });
             };
            $scope.back=function () {
                $location.path('/');
            };
            $scope.changePassword=function () {

            }

            });

})();