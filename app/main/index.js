define([
  'angular',
  'localStorageService',
  './services/index',
  './controllers/index'
], function (ng) {
  'use strict';
  return ng.module('main', [
  	'LocalStorageModule',
  	'main.services',
    'main.controllers',
  ]).run(['$rootScope', function($rootScope){
  	$rootScope.pageTitle = 'Users List'
  }]);
});

