myApp.factory('serverUrlService', [function(){

    var serverUrl = SERVER_URL;

    return {
        createLink: function(params){
            var url = serverUrl;

            var controller = angular.isDefined(params.controller) ? params.controller : null;
            var action = angular.isDefined(params.action) ? params.action : null;

            if(!controller || !action)
                throw new Error('Controller and action must be defined');

            url = serverUrl + '/api/' + controller + '/' + action;

            var id = angular.isDefined(params.id) ? params.id : null;
            if(id) {
                url += '/' + id;
            }

            if(angular.isDefined(params.params) && typeof params.params === "object") {
                url += "?" + $.param(params.params, true);
            }

            return url;
        }
    };

}]);