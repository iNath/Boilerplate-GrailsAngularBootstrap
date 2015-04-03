
myApp.controller('StubListCtrl', ['$scope', '$http', 'serverUrlService', function($scope, $http, serverUrlService){

    $scope.stubs = [];
    $scope.loaded = false;

    $scope.findAll = function(){

        $scope.loaded = false;

        var url = serverUrlService.createLink({ controller: 'stub', action: 'list'});

        $http.get(url)
            .success(function(data){
                $scope.stubs = data.stubs;

                $scope.loaded = true;
            })
        ;

    };

    $scope.init = function(){
        $scope.findAll();
    };

    $scope.init();

}]);