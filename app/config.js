'use strict';
require.config({
    nodeRequire: require,
    paths: {
      angular: './public/libs/angular/angular.min',
      localStorageService: "./public/libs/angular-local-storage/dist/angular-local-storage",
      ngInifiniteScroll: './public/libs/ng-infinite-scroll/build/ng-infinite-scroll.min',
      main: './main'
    },
    shim: {
      'angular' : { 'exports' : 'angular' },
      'localStorageService': ['angular'],
      'ngInifiniteScroll' : ['angular']
    },
    priority: [ "angular" ]
});

require([
    'angular',
    'main/index'
  ], function(ng) {
    ng.element().ready(function() {
        ng.bootstrap(document, ['main']);
    });
});
