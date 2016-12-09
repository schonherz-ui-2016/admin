(function () {
    var token = "";
    var domain ="http://localhost:1337"
// <<<<<<< HEAD
    var apiService = function ($http) {
         // $httpProvider:tokenInjector;
        // $httpProvider:httpRequestInterceptor;
        // this.loadToken=function ($httpProvider) {
        //
        // }

        // apiService.$inject=[$httpProvider];

// =======
//     var domain='http://localhost:1337';
//     var apiService = function ($http) {
// >>>>>>> master
        this.login = function (email, password) {
            return $http.post(domain+'/user/login', {
                    "email": email,
                    "password": password
                }, {
                    headers: {
                        'Content-type': 'application/json'
                    }
                }).then(function (response) {
                    token = response.data.token;
                });
        };
        this.register = function (email, password) {
            return $http.post(domain+'/user/register', {
                "email": email,
                "password": password
            },
                { headers: {
                Authorization: 'JWT ' + token
            }});
        };
        this.getProducts = function () {
// <<<<<<< HEAD
//             return $http.get('http://localhost:1337/product', {
//                 // headers: {
//                 //     Authorization: 'JWT ' + token
//                 // }
//
// =======
            return $http.get(domain+'/product', {
                headers: {
                    Authorization: 'JWT ' + token
                }
// >>>>>>> master
            })
        }

    };
    angular.module('app').service('apiService', apiService);
})();