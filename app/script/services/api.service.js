(function () {
    var token = "";
    var domain='http://localhost:1337';
    var apiService = function ($http) {
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
            return $http.get(domain+'/product', {
                headers: {
                    Authorization: 'JWT ' + token
                }
            })
        }
    };
    angular.module('app').service('apiService', apiService);
})();