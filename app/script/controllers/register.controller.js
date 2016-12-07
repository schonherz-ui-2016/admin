(function () {
    angular.module('app')
        .controller('registerController', function (apiService, $scope, $location) {
            $scope.registration = function(){
                apiService.register($scope.user.email, $scope.user.password)
                    .then(function(response){
                         console.log(response.user);
                         $location.path( "/login/" );
                    })
            };


        })

})();