(function () {
    angular
        .module('app',['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/user/login',{
                    templateUrl: 'templates/login.html',
                    controller: 'loginController'
                })
                .when('/user/register',{
                    templateUrl: 'templates/register.html',
                    controller: 'registerController'
                })
                .when('/product',{
                    templateUrl:'templates/product.list.html',
                    controller:'productController'
                })

        })
})();