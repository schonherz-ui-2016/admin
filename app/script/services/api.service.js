(function () {
    var token;
    token = localStorage;
    var apiService = function ($http) {
        var header = {
            headers: {
                Authorization: 'JWT ' + localStorage.getItem('token')
            }
        };
        this.login = function (email, password) {
            return $http.post('http://localhost:1337/user/login', {
                    "email": email,
                    "password": password
                }, {
                    headers: {
                        'Content-type': 'application/json'
                    }
                }).then(function (response) {
                    localStorage.setItem('token', response.data.token) ;
                    console.log(localStorage.getItem('token'));
                });
        };
        this.register = function (email, password) {
            return $http.post('http://localhost:1337/user/register', {
                "email": email,
                "password": password

            });
        };
        this.getProducts = function () {
            return $http.get('http://localhost:1337/product', header)
        }
    };
    angular.module('app').service('apiService', apiService);
})();