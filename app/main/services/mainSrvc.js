define([], function () {
  'use strict';
  function mainSrvc ($http, $q) {
    	var list =  function (){
	      return $q(function(resolve, reject) {
	        $http({
	          method:'GET',
	          url: '../data.json'
	        }).success(function (data) {
	          resolve(data);
	          console.log(data);
	        }).error(function (data, status, headers, config) {
	          if(reject){
	            reject(data);
	          }
	        });
	      });
	    };
	    return {
        list: function () {
          return list();
        }
	    };
  };

	mainSrvc.$inject=['$http','$q'];

	return mainSrvc;
});