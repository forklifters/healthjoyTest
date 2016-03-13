define([
  'angular',
  'ngRoute',
  'localStorageService',
  'ngInifiniteScroll',
  './services/index',
  './controllers/index'
], function (ng) {
  'use strict';
  return ng.module('main', [
  	'LocalStorageModule',
    'ngRoute',
    'infinite-scroll',
  	'main.services',
    'main.controllers',
  ]).run(['$rootScope', function($rootScope){
  	$rootScope.pageTitle = 'Users List'
  }]).config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: '/views/main.html',
      controller: 'mainCtrl',
      controllerAs: 'main'
    }).otherwise({
      redirectTo: '/'
    });
  }]);
});

