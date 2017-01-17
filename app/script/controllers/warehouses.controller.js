(function () {
	angular.module('app')
		.controller('warehousesController', function(apiService, $scope){
			apiService.getWarehouses()
				.then(function (res) {
					$scope.warehouses = [];
					angular.forEach(res.data, function (x) {
                        var obj = {id: x.id, name: x.name, ownerId: x.ownerId, address: x.address, createdAt: x.createdAt, updatedAt: x.updatedAt};    
                        $scope.warehouses.push(obj);
                    });
				})
		})
})();