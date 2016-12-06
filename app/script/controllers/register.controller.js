(function () {
    angular.module('app')
        .controller('registerController', function ($http, user) {
            $http({
                url:'http://localhost:1337/register'+user,
                method:'POST'

            })
                .then(function(response){
                    console.log(response.user.id);

        })


        })

})();