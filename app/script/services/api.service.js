(function () {

    var domain='http://localhost:1337';
    var header= { headers: {
        Authorization: 'JWT ' + localStorage.getItem('token')
    }};

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
                localStorage.setItem('token', response.data.token);
            });
        };
        this.register = function (email, password) {
            return $http.post(domain+'/user/register', {
                "email": email,
                "password": password
            });
        };
        this.getProducts = function () {
            return $http.get(domain+'/product');
        }
        this.getProduct = function (id) {
            return $http.get(domain+'/product/'+id);
        }
    };
    angular.module('app').service('apiService', apiService);
})();