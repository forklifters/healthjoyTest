define([
  'angular',
  'localStorageService',,
  './services/mainSrvc',
  './controllers/mainCtrl'
], function (ng, mainSrvc, mainCtrl) {
  'use strict';
  return ng.module('main', [
  	'LocalStorageModule'
  ]).run(['$rootScope', function($rootScope){$rootScope.pageTitle = 'Users List'}])
 	.service('mainSrvc',mainSrvc)
 	.controller('mainCtrl',mainCtrl);
});

