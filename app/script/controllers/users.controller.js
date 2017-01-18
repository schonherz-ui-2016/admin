
(function () {
    angular.module('app')
        .controller('usersController', function (apiService, $scope, $filter) {
            apiService.getUsers()
                .then(function (res) {
                    $scope.users = [];
                    angular.forEach(res.data, function (x) {
                        var createdAt = $filter('date')(x.createdAt, 'yyyy-MM-dd EEEE HH:mm:ss');
                        var updatedAt = $filter('date')(x.updatedAt, 'yyyy-MM-dd EEEE HH:mm:ss');
                        var obj = {id: x.id, email: x.email, createdAt: createdAt, updatedAt: updatedAt};
                        $scope.users.push(obj);
                    })
                });
        })
})();
