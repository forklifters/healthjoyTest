define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('mainCtrl', function ($scope, mainSrvc, filterFilter) {
    	$scope.selectedAge;
			$scope.items = [
				{id: 1, label: 'Show 10 clients per page', value: 10}, 
				{id: 2, label: 'Show 25 clients per page', value: 25},
				{id: 3, label: 'Show 50 clients per page', value: 50}, 
				{id: 4, label: 'Show 100 clients per page', value: 100}
			];

			$scope.selected = $scope.items[0];
			$scope.limitition = angular.copy($scope.selected.value);
	    
    	mainSrvc.list().then(function (data) {
				$scope.dataList = data;
				$scope.originalDataList = data;
				$scope.setFilters(data);
			});

			$scope.unique = function (list,param) {
		  	var lst = [];
		  	var id = 0
		  	list.forEach(function(key){
		  		var obj = {};
		  		obj['id'] = id;
		  		obj[param] = key[param];
		  		lst.push(obj);
		  		id++;
		  	});
		    lst.sort(function(a,b){
				  return a[param] > b[param] ? 1 : -1;
				});
		    for(var i=0; i<lst.length-1; i++)
		      if (lst[i][param] == lst[i+1][param]) delete lst[i];
		    return lst.filter(function(el){return (typeof el !== "undefined")});
		  }

		  $scope.setFilters = function (data) {
	  		$scope.companies = $scope.unique(data, 'company');
	  		$scope.ages = $scope.unique(data, 'age');
		  }

		  $scope.selectFilter = function(opt, paramKey){
		  	$scope.dataList = angular.copy($scope.originalDataList);
		  	if(opt == null) {
		  		$scope.setFilters($scope.dataList);
		  		return $scope.datalist;
		  	}
		  	$scope.dataList = $scope.dataList.filter(function(key){
		  		return key[paramKey] == opt[paramKey];
		  	});
		  	if(paramKey == 'age')	$scope.companies = $scope.unique($scope.dataList, 'company');
				if(paramKey == 'company') $scope.ages = $scope.unique($scope.dataList, 'age');
		  	return $scope.dataList;
		  };

			$scope.search = function (row) {
	      return !!(
		      (row.phone.indexOf($scope.query || '') !== -1 
	      	|| row.email.indexOf($scope.query || '') !== -1
		      || row.name.first.indexOf($scope.query || '') !== -1
		      || row.name.last.indexOf($scope.query || '') !== -1)
		    );
	    };	

	    $scope.increaseLimit = function () {
	    	if($scope.limitition >= $scope.originalDataList.length) return;
        $scope.limitition += $scope.selected.value;
        console.log('Increase Bar Limit', $scope.limitition)
	    };
    });
});