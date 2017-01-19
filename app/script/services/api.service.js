(function () {
    var apiService = function ($http, $window) {
        var domain = $window.urlBase || 'http://81.2.254.9:1337';
        
        this.login = function (email, password) {
            return $http.post(domain + '/user/login', {
                "email": email,
                "password": password
            }).then(function (response) {
                localStorage.setItem('token', response.data.token);
            });
        };
        this.register = function (user) {
            return $http.post(domain + '/user/register', {
                "email": user.email,
                "password": user.password,
                "name": user.name,
                "address": user.address,
                "phone": user.phone,
                "balance": user.balance,
                "rights": user.rights
            });
        };
        this.getProducts = function () {
            return $http.get(domain + '/product');
        };
        this.getUsers = function () {
            return $http.get(domain + '/user');
        };
        this.getUser = function (id) {
            return $http.get(domain + '/user/' + id);
        };
        this.getProduct = function (id) {
            return $http.get(domain + '/product/' + id);
        };
        this.userUpdate = function (user) {
            return $http.put(domain + '/user/' + user.id, user);
        };
        this.deleteUser = function (id) {
            return $http.delete(domain + '/user/' + id);
        };
        this.addProduct = function (product) {
            return $http.post(domain + '/product', {
                "name": product.name,
                "createdAt": new Date(),
                "updatedAt": new Date(),
                "category": product.category,
                "price": product.price,
                "description": product.description
            });
        };
        this.getCategories = function () {
            return $http.get(domain + '/category');
        };
        this.getCategory = function (id) {
            return $http.get(domain + '/category/' + id);
        };
        this.categoryUpdate = function (category) {
            return $http.put(domain + '/category/' + category.id, {
                "name": category.name,
                "updatedAt": new Date(),
                "parent": category.parent.id
            })
        };
        this.logout = function () {
            localStorage.setItem('token', '');
        };
        this.getUserId = function () {
            return $http.get(domain + '/user/me');
        };
        this.removeProduct = function (id) {
            return $http.delete(domain + '/product/' + id);
        };
        this.productUpdate = function (product) {
            return $http.put(domain + '/product/' + product.id, {
                "name": product.name,
                "createdAt": product.createdAt,
                "updatedAt": new Date(),
                "category": product.category,
                "price": product.price,
                "description": product.description
            });
        };

        this.myProfileUpdate = function (user) {
            return $http.put(domain + '/user/' + user.id, {
                "email": user.email,
                "name": user.name,
                "address": user.address,
                "phone": user.phone,
                "updatedAt": new Date(),
                "rights": user.rights
            });
        };
        this.removeUser = function (id) {
            return $http.delete(domain + '/user/' + id);
        };
        this.addCategory = function (category) {
            return $http.post(domain + '/category', {
                "name": category.name,
                "parent": category.parent
            })
        };
        this.removeCategory = function (id) {
            return $http.delete(domain + '/category/' + id);
        };
        this.getWarehouses = function () {
            return $http.get(domain + '/warehouse');
        };
        this.getWarehouse = function (id) {
            return $http.get(domain + '/warehouse/' + id);
        };
    };

    angular.module('app').service('apiService', apiService);
})();
