
myApp.controller('StubCreateCtrl', ['$scope', '$http', 'serverUrlService', function($scope, $http, serverUrlService){

    $scope.query = {};
    $scope.sending = false;

    $scope.submit = function(){

        $scope.sending = true;

        var url = serverUrlService.createLink({ controller: 'stub', action: 'create'});

        $http.post(url, $scope.query)
            .success(function(data){

                // Here you can refresh by triggering an event for example
                // ...

                $scope.query = {};

                $scope.sending = false;
            })
            .error(function(){

                $scope.sending = false;
            })
        ;

    };


}]);