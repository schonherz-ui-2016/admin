(function () {
    angular
        .module('app',['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/login',{
                    templateUrl: 'login.html',
                    controller: 'loginController'
                })
                .when('/register',{
                    templateUrl: 'register.html',
                    controller: 'registerController'
                })
                .when('/products',{
                    templateUrl:'product_list.html',
                    controller:'productController'
                })

        })
})();