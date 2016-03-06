'use strict';
require.config({
    paths: {
        angular: './public/libs/angular/angular.min',
        localStorageService: "./public/libs/angular-local-storage/dist/angular-local-storage",
        uiBootstrap: './public/libs/ui-bootstrap/ui-bootstrap-custom-tpls-1.2.3.min',
        main: './main'
    },
    shim: {
        'angular' : { 'exports' : 'angular' },
        'localStorageService': ['angular']
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
