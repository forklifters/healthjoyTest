define(['./module'], function (services) {
    'use strict';
    services.service('mainSrvc', function ($http, $q) {
    	var list =  function (){
	      return $q(function(resolve, reject) {
	        $http({
	          method:'GET',
	          url: '../data.json'
	        }).success(function (data) {
	          resolve(data);
	        }).error(function (data, status, headers, config) {
            reject(data);
	        });
	      });
	    };
	    return {
        list: function () {
          return list();
        }
	    };
    });
});