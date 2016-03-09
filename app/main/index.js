define([
  'angular',
  'localStorageService',
  'ngInifiniteScroll',
  './services/index',
  './controllers/index'
], function (ng) {
  'use strict';
  return ng.module('main', [
  	'LocalStorageModule',
    'infinite-scroll',
  	'main.services',
    'main.controllers',
  ]).run(['$rootScope', function($rootScope){
  	$rootScope.pageTitle = 'Users List'
  }]);
});

