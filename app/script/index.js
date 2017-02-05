(function () {


    angular
        .module('app',['ngRoute','xeditable'])


        .config(['$routeProvider','$locationProvider',function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');

            $routeProvider
                .when('/login', {
                    templateUrl: 'templates/login.html',
                    controller: 'loginController'
                })
                .when('/register', {
                    templateUrl: 'templates/register.html',
                    controller: 'registerController'
                })
                .when('/products', {
                    templateUrl: 'templates/product.list.html',
                    controller: 'productListController'
                })
                .when('/products/:id', {
                    templateUrl: 'templates/product.html',
                    controller: 'productController'
                })
                .when('/users', {
                    templateUrl: 'templates/users.html',
                    controller: 'usersController'
                })
                .when('/users/:id', {
                    templateUrl: 'templates/user.details.html',
                    controller: 'usersDetailsController'
                })
                .when('/new_product', {
                    templateUrl: 'templates/add.product.html',
                    controller: 'addProductController'
                })
                .when('/my-profile', {
                    templateUrl: 'templates/my.profile.html',
                    controller: 'myProfileController'
                })
                .when('/categories', {
                    templateUrl: 'templates/categories.html',
                    controller: 'categoriesController'
                })
                .when('/categoryTree', {
                    templateUrl: 'templates/categories.tree.html',
                    controller: 'categoriesController'
                })
                .when('/categories/:id', {
                    templateUrl: 'templates/categories.details.html',
                    controller: 'categoriesDetailsController'
                })
                .when('/warehouses', {
                    templateUrl: 'templates/warehouses.html',
                    controller: 'warehousesController'
                })
                .when('/warehouses/:id', {
                    templateUrl: 'templates/warehouse.details.html',
                    controller: 'warehousesDetailsController'
                })
                .otherwise({
                    redirectTo: '/'
                })
        }])


        .factory('httpRequestInterceptor',function () {
            return{
                request: function (config) {
                    if(localStorage.getItem('token')!==''){
                    config.headers['Authorization'] = 'JWT ' + localStorage.getItem('token');
                    }
                return config;
                }
            }
        })

        .config(['$httpProvider',function ($httpProvider) {
            $httpProvider.interceptors.push('httpRequestInterceptor');
        }])
    // xeditable
        .run(['editableOptions',function(editableOptions) {
            editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
        }]);
    // xeditable
})();