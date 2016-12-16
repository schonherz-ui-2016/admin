(function () {

    var domain='http://localhost:1337';
    var apiService = function ($http) {
        this.login = function (email, password) {
            return $http.post(domain+'/user/login', {
                "email": email,
                "password": password
            }).then(function (response) {
                localStorage.setItem('token', response.data.token);
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
        };
        this.getProduct = function (id) {
            return $http.get(domain+'/product/'+id);
        };
        this.logout= function () {
            localStorage.setItem('token','');
        };
        this.getUserId=function () {
            return $http.get(domain+'/user/me');
        };
        this.removeProduct=function (id) {
            return $http.delete(domain+'/product/'+id);
        }

    };
    angular.module('app').service('apiService', apiService);
})();