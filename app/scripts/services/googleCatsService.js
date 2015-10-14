angular.module('styleSageCatsApp')
  .factory('googleCatsService', ['$http', function($http) {

    var API_ENDPOINT, CATS_QUERY, VERSION_PARAM_NAME, QUERY_PARAM_NAME;

    API_ENDPOINT = "https://ajax.googleapis.com/ajax/services/search/images";
    VERSION_PARAM_NAME = "v";
    QUERY_PARAM_NAME = "q";
    CATS_QUERY = "cats";

    var getCatsFromGoogle = function() {
      return $http({
        url: API_ENDPOINT,
        method: "GET",
        params: {
          v: "1.0",
          q: CATS_QUERY
        }
      })
    };

    return {
      getCatsFromGoogle: getCatsFromGoogle
    };

  }]);
