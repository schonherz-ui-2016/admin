(function () {
    var apiService = function($http){
        var token = "";
        this.login = function (email, password) {
            var response = $http.post('http://localhost:1337/login', {
                header: {
                    'Content-type': 'application/json'
                },
                body: {
                    "email": email,
                    "password": password
                }
            });
            token = response.token;
        };
        this.register = function (email, password) {
            return $http.post('http://localhost:1337/register', {
                body: {
                    "email": email,
                    "password": password
                }
            });
        };
        this.getProducts = function () {
            return $http.get('http://localhost:1337/product', {
                headers: {
                    Authorization: token
                }
            })
        }
    };
    angular.module('app').service('apiService', apiService);
})();