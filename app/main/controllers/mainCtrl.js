define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('mainCtrl', function ($scope, mainSrvc, filterFilter) {
    	mainSrvc.list().then(function (data) {
				$scope.dataList = data;
				$scope.selectedCompany = $scope.dataList[0];
				$scope.selectedAge = $scope.dataList[0];
			});
			$scope.search = {};
			$scope.currentPage = 1;
			$scope.maxSize = 5;
			$scope.items = [
				{
				  id: 1,
				  label: 'Show 10 clients per page',
				  value: 10
				}, {
				  id: 2,
				  label: 'Show 25 clients per page',
				  value: 25
				},
				{
				  id: 3,
				  label: 'Show 50 clients per page',
				  value: 50
				}, {
				  id: 4,
				  label: 'Show 100 clients per page',
				  value: 100
				},
			];
			$scope.selected = $scope.items[0];
			$scope.search = function (row) {
	      return !!(
		      (row.phone.indexOf($scope.query || '') !== -1 
	      	|| row.email.indexOf($scope.query || '') !== -1
		      || row.name.first.indexOf($scope.query || '') !== -1
		      || row.name.last.indexOf($scope.query || '') !== -1)
		    );
	    };			
    }).filter('startFrom', function () {
			return function (input, start) {
				if (input) {
					start = +start;
					return input.slice(start);
				}
				return [];
			};
		});
});