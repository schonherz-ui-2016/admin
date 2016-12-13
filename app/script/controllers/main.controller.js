/**
 * Created by sa on 2016.12.13..
 */
(function () {
    angular.module('app')
        .controller('mainController', function (apiService, $location) {
            apiService.logout();

        } )
})();
