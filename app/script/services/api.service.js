(function () {

    var domain='http://localhost:1337';
    var apiService = function ($http) {
        // this.loggedIn=false;
        this.login = function (email, password) {
            return $http.post(domain+'/user/login', {
                "email": email,
                "password": password
            }).then(function (response) {
                localStorage.setItem('token', response.data.token);
                // console.log(response);
                // localStorage.setItem('userId', response.data.id);
                // this.loggedIn=true;
            });
        };
        this.register = function (user) {
            return $http.post(domain+'/user/register', {
                "email": user.email,
                "password": user.password,
                "name":user.name,
                "address":user.address,
                "phone":user.phone,
                "balance":user.balance,
                "rights":user.rights

            });
        };
        this.getProducts = function () {
            return $http.get(domain+'/product');
        };
        this.getUsers = function () {
            return $http.get(domain+'/user');
        };
        this.getUser = function (id) {
            return $http.get(domain+'/user/'+id);
        }
        this.getProduct = function (id) {
            return $http.get(domain+'/product/'+id);
        }
        this.logout= function () {
            localStorage.setItem('token','');
            localStorage.setItem('loggedIn',false);
        }

        this.getUserId=function () {
            return $http.get(domain+'/user/me');
        }

    };
    angular.module('app').service('apiService', apiService);
})();