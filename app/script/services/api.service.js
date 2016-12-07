(function () {
    var token = "";
    var apiService = function ($http) {
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
             // var tokenAdmin ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNDgxMTA4OTQ3LCJleHAiOjE0ODE3MTM3NDd9.6uDeeTe0-2zXmJaZgeOiFoJ3_NrE_M1joz6SI6-opnw";
            return $http.post('http://localhost:1337/user/register', {

                "email": email,
                "password": password

            },
                { headers: {
                Authorization: 'JWT ' + token
            }});

        };
        this.getProducts = function () {
            return $http.get('http://localhost:1337/product', {
                headers: {
                    Authorization: 'JWT ' + token
                }
            })
        }
    };
    angular.module('app').service('apiService', apiService);
})();