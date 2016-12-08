(function () {
    var token = "";
    var apiService = function ($http, $httpProvider) {
         // $httpProvider:tokenInjector;
        // $httpProvider:httpRequestInterceptor;
        // this.loadToken=function ($httpProvider) {
        //
        // }



        this.login = function (email, password) {
            return $http.post('http://localhost:1337/user/login', {
                    "email": email,
                    "password": password
                }, {
                    headers: {
                        'Content-type': 'application/json'
                    }
                }).then(function (response) {
                    token = response.data.token;
                    console.log(token);
                });
        };
        this.register = function (email, password) {
            return $http.post('http://localhost:1337/user/register', {
                "email": email,
                "password": password

            });
        };
        this.getProducts = function () {
            return $http.get('http://localhost:1337/product', {
                // headers: {
                //     Authorization: 'JWT ' + token
                // }

            })
        }
    apiService.$inject=[$httpProvider];
    };
    angular.module('app').service('apiService', apiService);
})();