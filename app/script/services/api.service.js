(function () {
// <<<<<<< HEAD
//     var token = "";
//     var domain ="http://localhost:1337"
// // <<<<<<< HEAD
// =======
    var domain='http://localhost:1337';
    var header= { headers: {
        Authorization: 'JWT ' + localStorage.getItem('token')
    }};
// >>>>>>> master
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
                localStorage.setItem('token', response.data.token);
            });
        };
        this.register = function (email, password) {
            return $http.post(domain+'/user/register', {
                "email": email,
                "password": password
            }, header);
        };
        this.getProducts = function () {
// <<<<<<< HEAD
// // <<<<<<< HEAD
// //             return $http.get('http://localhost:1337/product', {
// //                 // headers: {
// //                 //     Authorization: 'JWT ' + token
// //                 // }
// //
// // =======
//             return $http.get(domain+'/product', {
//                 headers: {
//                     Authorization: 'JWT ' + token
//                 }
// // >>>>>>> master
//             })
// =======
            return $http.get(domain+'/product', header);
// >>>>>>> master
        }

    };
    angular.module('app').service('apiService', apiService);
})();