(function () {
	angular.module('app')
		.controller('warehousesDetailsController', function(apiService, $scope, $routeParams){
			apiService.getWarehouse($routeParams.id)
				.then(function (res) {
					$scope.warehouse = res.data;
				})
		})
})();