'use strict';
require.config({
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
    'main/index',
    'main/services/mainSrvc',
    'main/controllers/mainCtrl'
  ], function(ng) {
    ng.element().ready(function() {
        ng.bootstrap(document, ['main']);
    });
});
