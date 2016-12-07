(function () {
<<<<<<< HEAD
=======
    var token = "";
    var domain='http://localhost:1337';
>>>>>>> master
    var apiService = function ($http) {
        var header = {
            headers: {
                Authorization: 'JWT ' + localStorage.getItem('token')
            }
        };
        this.login = function (email, password) {
            return $http.post(domain+'/user/login', {
                    "email": email,
                    "password": password
                }, {
                    headers: {
                        'Content-type': 'application/json'
                    }
                }).then(function (response) {
<<<<<<< HEAD
                    localStorage.setItem('token', response.data.token) ;
=======
                    token = response.data.token;
>>>>>>> master
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
<<<<<<< HEAD
            return $http.get('http://localhost:1337/product', header)
=======
            return $http.get(domain+'/product', {
                headers: {
                    Authorization: 'JWT ' + token
                }
            })
>>>>>>> master
        }
    };
    angular.module('app').service('apiService', apiService);
})();