define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('mainCtrl', function ($scope, mainSrvc) {
    	mainSrvc.list().then(function (data) {
				$scope.dataList = data;
			});
    });
});