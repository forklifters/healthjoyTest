define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('mainCtrl', function ($scope, mainSrvc, filterFilter) {
    	// $scope.selectedAge;
			$scope.items = [
				{id: 1, label: 'Show 10 clients per page', value: 10}, 
				{id: 2, label: 'Show 25 clients per page', value: 25},
				{id: 3, label: 'Show 50 clients per page', value: 50}, 
				{id: 4, label: 'Show 100 clients per page', value: 100}
			];

			$scope.selected = $scope.items[0];
			$scope.itemsPerPage = angular.copy($scope.selected.value);
	    
	    //main 
    	mainSrvc.list().then(function (data) {
				$scope.originalDataList = $scope.dataList = data;
				$scope.setFilters(data);
			});

			$scope.setFilters = function(data){
				$scope.companies = $scope.unique(data, 'company');
	  		$scope.ages = $scope.unique(data, 'age');
			}

			$scope.unique = function (list,param) {
		  	var lst = [];
		  	list.forEach(function(key){
		  		var obj = {};
		  		obj[param] = key[param];
		  		lst.push(obj);
		  	});
		    lst.sort(function(a,b){return a[param] > b[param] ? 1 : -1;});
		    for(var i=0; i<lst.length-1; i++)
		      if (lst[i][param] == lst[i+1][param]) delete lst[i];
		    return lst.filter(function(el){return (typeof el !== "undefined")});
		  }
		  
		  //search and filters
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

	    $scope.addressSearch = function(sea){
	    	return !!(
	    		!$scope.addressFilterModel ||
	    		sea.address.state.indexOf($scope.addressFilterModel) > -1 ||
	    		sea.address.city.indexOf($scope.addressFilterModel) > -1 ||
	    		sea.address.street.indexOf($scope.addressFilterModel) > -1 ||
	    		sea.address.zip.toString().indexOf($scope.addressFilterModel) > -1
    		);
	    }

	    //infinite scroll
	    $scope.increaseLimit = function () {
	    	if($scope.itemsPerPage >= $scope.originalDataList.length) return;
        $scope.itemsPerPage += $scope.selected.value;
	    };
    });
});