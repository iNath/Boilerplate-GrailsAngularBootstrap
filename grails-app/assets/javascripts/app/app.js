//= require ../lib/angular.min.js
//= require_tree ../lib
//= require_self
//= require_tree .

var myApp = angular

    .module('MyApp', ['ui.bootstrap', 'ui.router', 'ngAnimate', 'ngToast'])


    .config(['ngToastProvider', function(ngToast) {
        ngToast.configure({
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            animation: 'slide',
            dismissOnClick: false,
            dismissButton: true,
            timeout: 6000
        });
    }])
;