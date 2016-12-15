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
        this.getUsersId = function (id) {
            return $http.get(domain+'/user/'+id);
        };
        this.getProduct = function (id) {
            return $http.get(domain+'/product/'+id);
        };
        this.addProduct = function (product) {
            return $http.post(domain+'/product', {
                "name": product.name,
                "createdAt": new Date(),
                "updatedAt": new Date(),
                "category": product.category,
                "price": product.price,
                "description": product.description
            });
        };
        this.getCategory = function () {
            return $http.get(domain+'/category');
        };
    };
    angular.module('app').service('apiService', apiService);
})();