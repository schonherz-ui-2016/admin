(function () {
    angular.module('app').
        controller('sortableListController', function ($scope) {
            $scope.attributes = Object.keys($scope.data[0]);
            $scope.propertyName = $scope.attributes[0];
            $scope.reverse = false;
            $scope.sortBy = function (propertyName) {
                $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
                $scope.propertyName = propertyName;
            };
    })
})();
