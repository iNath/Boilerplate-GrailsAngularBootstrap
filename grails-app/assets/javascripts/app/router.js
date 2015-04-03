/**
 * @see https://github.com/angular-ui/ui-router
 */

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('stub', {
            url: '/',
            views: {
                'create': {
                    templateUrl: 'partial/stub/create',
                    controller: 'StubCreateCtrl'
                },
                'list': {
                    templateUrl: 'partial/stub/list',
                    controller: 'StubListCtrl'
                }
            }
        });

    $urlRouterProvider.otherwise('/');

}]);