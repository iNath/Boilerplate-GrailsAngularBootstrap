myApp.controller('StubCtrl', ['$scope', '$http', function($scope, $http){

    $scope.findSomething = function(){

        alert('Stub controller called');

    };

    $scope.init = function(){
        $scope.findSomething();
    };

    $scope.init();

}]);