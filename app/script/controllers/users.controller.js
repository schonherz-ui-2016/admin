
(function () {
    angular.module('app')
        .controller('usersController', function (apiService, $scope) {
            apiService.getUsers()
                .then(function (res) {
                    $scope.users = res.data;
                });
            $scope.propertyName = 'id';
            $scope.reverse = false;
            $scope.sortBy = function (propertyName) {
                $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
                $scope.propertyName = propertyName;
            }
        })
})();
