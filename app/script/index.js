(function () {


    angular
        .module('app',['ngRoute'])


        .config(function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');

            $routeProvider
                .when('/login',{
                    templateUrl: 'templates/login.html',
                    controller: 'loginController'
                })
                .when('/register',{
                    templateUrl: 'templates/register.html',
                    controller: 'registerController'
                })
                .when('/products',{
                    templateUrl:'templates/product.list.html',
                    controller:'productListController'
                })
                .when('/products/:id',{
                    templateUrl: 'templates/product.html',
                    controller: 'productController'
                })
                .when('/users', {
                    templateUrl: 'templates/users.html',
                    controller: 'usersController'
                })
                .when('/users/:id', {
                    templateUrl: 'templates/users.details.html',
                    controller: 'usersDetailsController'
                })
                .otherwise({
                    redirectTo: '/'
                });

        })

        .factory('httpRequestInterceptor',function () {
            return{
                request: function (config) {
                    config.headers['Authorization'] = 'JWT ' + localStorage.getItem('token');
                return config;
                }
            }
        })

        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('httpRequestInterceptor');
        });
})();