(function () {
	angular.module('app')
		.controller('warehousesController', function(apiService, $scope){
			apiService.getWarehouses()
				.then(function (res) {
					$scope.warehouses = res.data;
				})
		})
})();