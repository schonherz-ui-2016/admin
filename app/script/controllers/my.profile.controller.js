/**
 * Created by sa on 2016.12.22..
 */
(function () {
    angular.module('app')
        .controller('myProfileController',function (apiService, $scope) {
                apiService.getUserId()
                    .then(function (response) {
                        $scope.myProfile=response.data;
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
        })
})();