define([
  'angular',
  'localStorageService',
  'uiBootstrap',
  './services/index',
  './controllers/index'
], function (ng) {
  'use strict';
  return ng.module('main', [
  	'LocalStorageModule',
    'ui.bootstrap',
  	'main.services',
    'main.controllers',
  ]).run(['$rootScope', function($rootScope){
  	$rootScope.pageTitle = 'Users List'
  }]);
});

