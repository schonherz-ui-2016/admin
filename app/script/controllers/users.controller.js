
(function () {
    angular.module('app')
        .controller('usersController', function (apiService, $scope) {
            apiService.getUsers()
                .then(function (res) {
                    $scope.users = [];
                    angular.forEach(res.data, function (x) {
                        var obj = {id: x.id, email: x.email, createdAt: x.createdAt, updatedAt: x.updatedAt};
                        $scope.users.push(obj);
                    })
                });
        })
})();
