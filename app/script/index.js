(function () {
    // var tokenInjector="";
    angular
        .module('app',['ngRoute'])
        .config(function ($routeProvider) {
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
                    controller:'productController'
                })

        })
        // .run(function ($http) {
        //     $http.defaults.headers.common.Authorization="JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNDgwNzU3MzUxfQ._18tU5-2haVPb_Uk86iFXqbmHWX9BW6w4NGQOGKZZ9I";
        // })
    
        // .factory('tokenInjector', [function () {
        //      tokenInjector = {
        //         request: function (config) {
        //             config.headers['Authorization'] = "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNDgwNzU3MzUxfQ._18tU5-2haVPb_Uk86iFXqbmHWX9BW6w4NGQOGKZZ9I";
        //         }
        //     }
        //     return tokenInjector;
        // }])
        // .config(['$httpProvider',function ($httpProvider) {
        //     $httpProvider.interceptors.push(tokenInjector);
        // }])
    
        .factory('httpRequestInterceptor',function () {
            return{
                request: function (config) {
                    config.headers['Authorization'] = "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNDgwNzU3MzUxfQ._18tU5-2haVPb_Uk86iFXqbmHWX9BW6w4NGQOGKZZ9I";
                return config;
                }
            }
        })

        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('httpRequestInterceptor');
        });
})();