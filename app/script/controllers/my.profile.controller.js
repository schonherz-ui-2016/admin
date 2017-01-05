/**
 * Created by sa on 2016.12.22..
 */
(function () {
    angular.module('app')
        .controller('myProfileController',function (apiService, $scope, $location) {
                apiService.getUserId()
                    .then(function (response) {
                        $scope.myProfile=response.data;
                        $scope.right=response.data.rights;
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
            $scope.rights=[ {id:1,name:"ADMIN"},
                            {id:2, name:"CUSTOMER"},
                            {id:3, name: "WAREHOUSE_OWNER"}];

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