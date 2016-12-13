(function () {
    angular.module('app')
        .controller('loginController', function ($http, apiService, $scope, $location) {
            $scope.login = function () {
                apiService.login($scope.user.email, $scope.user.password)
                    .then(function () {
                        $scope.loggedIn=true;
                        console.log($scope.loggedIn);
                    })
                    .then(function () {
                        $location.path( "/" );
                    })
            }
        })
    
})();