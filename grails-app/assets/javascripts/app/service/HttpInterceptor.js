myApp.factory('myHttpInterceptor', ['$q', 'ngToast', function ($q, ngToast) {
    return {
        response: function (response) {
            if (response.data.success && response.data.message) {
                ngToast.create({
                    content: response.data.message,
                    className: 'success'
                });
            }
            if(response.data.success == false && response.data.message){
                ngToast.create({
                    content: response.data.message,
                    className: 'danger'
                });
            }
            return response;
        }
    }
}]);

myApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('myHttpInterceptor');
}]);