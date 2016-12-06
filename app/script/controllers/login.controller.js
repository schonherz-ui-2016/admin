(function () {
    angular.module('app')
        .controller('loginController', function ($http, userName, password) {
            $http({
                url:'http://localhost:1337/login', userName, password,
                method:'POST'

            })
                .success()
            {
                 console.log("ok");}

        })
    
})();