define([], function () {
  'use strict';
  function mainCtrl ($scope, mainSrvc) {
  	mainSrvc.list().then(function (data) {
			$scope.dataList = data;
		});
  };

	mainCtrl.$inject=['$scope','mainSrvc'];

	return mainCtrl;
});