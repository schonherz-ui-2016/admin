
(function () {
    angular.module('app')
        .controller('usersController',['apiService','$scope', function (apiService, $scope) {
            apiService.getUsers()
                .then(function (res) {
                    $scope.users = [];
                    angular.forEach(res.data, function (x) {
                        var obj = {id: x.id, name: x.name, email: x.email, createdAt: x.createdAt, updatedAt: x.updatedAt};
                        $scope.users.push(obj);
                    })
                });
        }])
})();
